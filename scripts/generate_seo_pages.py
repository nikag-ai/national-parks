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

def generate_pages():
    build()
    parks = json.loads((ROOT / 'data/park-guidance.json').read_text())
    html = (ROOT / 'index.html').read_text()
    (ROOT / 'index.html').write_text(html)
    def page(slug, title, description, content):
        result = re.sub(r'<title>.*?</title>', f'<title>{escape(title)}</title>', html)
        for attr,key,value in [('name','description',description),('property','og:title',title),('property','og:description',description),('property','og:url',ORIGIN+'/'+quote(slug))]:
            result = re.sub(fr'<meta {attr}="{key}" content="[^"]*" />', f'<meta {attr}="{key}" content="{escape(value,quote=True)}" />', result)
        result = re.sub(r'<link rel="canonical" href="[^"]*" />', f'<link rel="canonical" href="{ORIGIN}/{quote(slug)}" />', result)
        result = result.replace('<section id="route-guide" class="route-guide"></section>', f'<section id="route-guide" class="route-guide">{content}</section>')
        (ROOT / (slug+'.html')).write_text(result)
    for month in MONTHS:
        page(month.lower(),f'Best national parks in {month}',f'Explore an editorial shortlist of US national parks for {month}, with official planning sources.','')
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
