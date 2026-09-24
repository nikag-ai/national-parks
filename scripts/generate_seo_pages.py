"""Generate visible, source-linked route content without hidden claims or fabricated FAQ schema."""
import json
import re
from html import escape
from pathlib import Path
from urllib.parse import quote
from build_park_data import build

ROOT = Path(__file__).resolve().parent.parent
MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
ORIGIN = 'https://nationalparkfinder.info'
MONTH_DESCRIPTIONS = {
    'November': 'Compare Saguaro, Death Valley, and Mammoth Cave for a November trip, with honest trip-length tradeoffs and official park planning links.',
}

def generate_pages():
    build()
    parks = json.loads((ROOT / 'data/park-guidance.json').read_text())
    html = (ROOT / 'index.html').read_text()
    (ROOT / 'index.html').write_text(html)
    def page(slug, title, description, content, month_guide=''):
        result = re.sub(r'<title>.*?</title>', f'<title>{escape(title)}</title>', html)
        for attr,key,value in [('name','description',description),('property','og:title',title),('property','og:description',description),('property','og:url',ORIGIN+'/'+quote(slug))]:
            result = re.sub(fr'<meta {attr}="{key}" content="[^"]*" />', f'<meta {attr}="{key}" content="{escape(value,quote=True)}" />', result)
        result = re.sub(r'<link rel="canonical" href="[^"]*" />', f'<link rel="canonical" href="{ORIGIN}/{quote(slug)}" />', result)
        if slug in {month.lower() for month in MONTHS}:
            result = result.replace('<h1 id="discovery-title">Best national parks this month</h1>', f'<h1 id="discovery-title">Best parks in {slug.capitalize()}</h1>')
        if slug == 'november':
            result = result.replace(f'{ORIGIN}/national-parks-icon.png" />', f'{ORIGIN}/assets/november-share.png" />\n  <meta property="og:image:alt" content="Compare Saguaro, Death Valley, and Mammoth Cave for a November trip" />', 1)
        result = result.replace('<section id="route-guide" class="route-guide"></section>', f'<section id="route-guide" class="route-guide">{content}</section>')
        if month_guide:
            month_number = MONTHS.index(slug.capitalize()) + 1
            result = result.replace('<section id="month-guide" class="month-guide"></section>', f'<section id="month-guide" class="month-guide" data-month="{month_number}">{month_guide}</section>')
        (ROOT / (slug+'.html')).write_text(result)
    for month in MONTHS:
        guide_file = ROOT / 'content' / 'months' / f'{month.lower()}.html'
        guide = guide_file.read_text() if guide_file.exists() else ''
        description = MONTH_DESCRIPTIONS.get(month, f'Explore an editorial shortlist of US national parks for {month}, with official planning sources.')
        page(month.lower(), f'Best national parks in {month}', description, '', guide)
    for id,p in parks.items():
        sources=''.join(f'<li><a href="{escape(s["url"])}">{escape(s["label"])}</a></li>' for s in p['sources'])
        content=f'<h2>{escape(p["name"])} planning guide</h2><p>{escape(p["description"])}</p><p>{escape(p["planningNote"])}</p>'
        if p.get('permitNote'): content+=f'<p>{escape(p["permitNote"])}</p>'
        content+=f'<p>{escape(p["weatherNote"])}</p>'
        content+=f'<p>Planning notes checked {p["reviewedAt"]}. Conditions and rules can change.</p><ul>{sources}</ul>'
        page(id,f'{p["name"]} planning guide',p['description'],content)
    urls=['/','/about.html']+['/'+m.lower() for m in MONTHS]+['/'+quote(id) for id in parks]
    (ROOT/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{ORIGIN}{u}</loc></url>\n' for u in urls)+'</urlset>\n')
    print(f'Generated {len(parks)} park pages and {len(MONTHS)} month pages.')

if __name__=='__main__': generate_pages()
