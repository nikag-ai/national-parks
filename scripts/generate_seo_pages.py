import os
import re
import json
import datetime

# Define the 12 months
MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
]

def get_parks_data(project_root):
    summary_path = os.path.join(project_root, "data/parks-summary.js")
    with open(summary_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the object content
    match = re.search(r"window\.PARKS_SUMMARY\s*=\s*(\{.*?\});", content, re.DOTALL)
    if not match:
        print("Could not find window.PARKS_SUMMARY in data/parks-summary.js")
        return {}
    
    json_str = match.group(1)
    # Clean up trailing commas for json.loads
    json_str = re.sub(r",\s*}", "}", json_str)
    json_str = re.sub(r",\s*]", "]", json_str)
    
    try:
        return json.loads(json_str)
    except Exception as e:
        print(f"Error parsing parks data: {e}")
        return {}

def generate_pages():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    index_path = os.path.join(project_root, "index.html")

    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    parks_data = get_parks_data(project_root)
    
    # Base strings to replace
    base_title = "<title>US National Park Finder | Explore by Month</title>"
    base_meta_desc = '<meta name="description" content="US National Park Finder: The ultimate interactive guide to discovering the best US National Parks. Filter by month, travel time, and stargazing to find your perfect trip." />'
    base_subtitle = '<p class="subtitle">Discover the perfect national park for your next trip</p>'
    base_canonical = '<link rel="canonical" href="https://nationalparkfinder.info/" />'
    base_seo_list = '<div id="seo-park-list" style="display:none;" aria-hidden="true"></div>'

    # --- 1. GENERATE MONTH PAGES ---
    for i, month in enumerate(MONTHS):
        month_idx = i + 1
        capitalized_month = month.capitalize()
        
        new_title = f"<title>Where to go in {capitalized_month}: National Parks Guide | US National Park Finder</title>"
        new_meta_desc = f'Looking for the best US National Parks to visit in {capitalized_month}? Explore our curated guide to find the perfect park for your {capitalized_month} adventure.'
        new_meta_tag = f'<meta name="description" content="{new_meta_desc}" />'
        
        og_title = f'<meta property="og:title" content="Where to go in {capitalized_month}: National Parks Guide | US National Park Finder" />'
        og_desc = f'<meta property="og:description" content="{new_meta_desc}" />'
        og_url = f'<meta property="og:url" content="https://nationalparkfinder.info/{month}" />'
        
        new_subtitle = base_subtitle + f'\n    <h2 class="seo-h2" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Best National Parks to visit in {capitalized_month}</h2>'
        
        new_canonical = f'<link rel="canonical" href="https://nationalparkfinder.info/{month}" />'
        
        month_parks = [p["name"] for p in parks_data.values() if month_idx in p.get("bestMonths", [])]
        month_parks.sort()
        
        if month_parks:
            park_list_header = f"<h3>Optimal National Parks to Visit in {capitalized_month}</h3>"
            park_list_items = "".join([f"<li>{name}</li>" for name in month_parks])
            new_seo_list = f'<div id="seo-park-list" style="display:none;" aria-hidden="true">\n      {park_list_header}\n      <ul>{park_list_items}</ul>\n    </div>'
        else:
            new_seo_list = base_seo_list

        faq_schema = f'''
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {{
        "@type": "Question",
        "name": "What are the best US National Parks to visit in {capitalized_month}?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "The best parks vary deeply by season. Our National Park Finder automatically filters all 63 parks to show you the ones with optimal weather, manageable crowds, and logistical ease specifically for {capitalized_month}."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Is {capitalized_month} a good time to go stargazing in National Parks?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Yes, but visibility depends on the park. You can explore our data tool to see exact stargazing recommendations for {capitalized_month}, accounting for dark skies and local weather patterns."
        }}
      }}
    ]
  }}
  </script>'''

        month_html = html_content
        month_html = month_html.replace(base_title, new_title)
        month_html = month_html.replace(base_meta_desc, new_meta_tag)
        month_html = month_html.replace('<meta property="og:title" content="US National Park Finder | Explore by Month" />', og_title)
        month_html = month_html.replace('<meta property="og:description" content="US National Park Finder: The ultimate interactive guide to discovering the best US National Parks. Filter by month, travel time, and stargazing to find your perfect trip." />', og_desc)
        month_html = month_html.replace('<meta property="og:url" content="https://nationalparkfinder.info" />', og_url)
        month_html = month_html.replace(base_subtitle, new_subtitle)
        month_html = month_html.replace(base_canonical, new_canonical)
        month_html = month_html.replace(base_seo_list, new_seo_list)
        month_html = month_html.replace("</head>", faq_schema + "\n</head>")

        output_path = os.path.join(project_root, f"{month}.html")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(month_html)
        print(f"Generated {month}.html")

    print(f"Successfully generated {len(MONTHS)} SEO month pages.")
    
    # --- 2. GENERATE INDIVIDUAL PARK PAGES ---
    for park_id, park in parks_data.items():
        park_name = park.get("name", park_id)
        state = park.get("state", "")
        top_activity = park.get("topActivity", "")
        
        new_title = f"<title>{park_name} National Park ({state}) Guide | US National Park Finder</title>"
        new_meta_desc = f'Planning a trip to {park_name} National Park? Discover the best time to visit, travel times, stargazing info, and top activities like {top_activity}.'
        new_meta_tag = f'<meta name="description" content="{new_meta_desc}" />'
        
        og_title = f'<meta property="og:title" content="{park_name} National Park Guide | US National Park Finder" />'
        og_desc = f'<meta property="og:description" content="{new_meta_desc}" />'
        og_url = f'<meta property="og:url" content="https://nationalparkfinder.info/{park_id}" />'
        
        new_subtitle = base_subtitle + f'\n    <h2 class="seo-h2" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">{park_name} National Park, {state}</h2>'
        
        new_canonical = f'<link rel="canonical" href="https://nationalparkfinder.info/{park_id}" />'
        
        best_months_text = ", ".join([MONTHS[m-1].capitalize() for m in park.get("bestMonths", [])])
        new_seo_list = f'''<div id="seo-park-list" style="display:none;" aria-hidden="true">
      <h3>About {park_name} National Park</h3>
      <p>State: {state}</p>
      <p>Best Months to Visit: {best_months_text}</p>
      <p>Top Activity: {top_activity}</p>
      <p>Stargazing Recommended: {"Yes" if park.get("stargazing") else "No"}</p>
    </div>'''

        park_html = html_content
        park_html = park_html.replace(base_title, new_title)
        park_html = park_html.replace(base_meta_desc, new_meta_tag)
        park_html = park_html.replace('<meta property="og:title" content="US National Park Finder | Explore by Month" />', og_title)
        park_html = park_html.replace('<meta property="og:description" content="US National Park Finder: The ultimate interactive guide to discovering the best US National Parks. Filter by month, travel time, and stargazing to find your perfect trip." />', og_desc)
        park_html = park_html.replace('<meta property="og:url" content="https://nationalparkfinder.info" />', og_url)
        park_html = park_html.replace(base_subtitle, new_subtitle)
        park_html = park_html.replace(base_canonical, new_canonical)
        park_html = park_html.replace(base_seo_list, new_seo_list)

        output_path = os.path.join(project_root, f"{park_id}.html")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(park_html)
        print(f"Generated {park_id}.html")
        
    print(f"Successfully generated {len(parks_data)} individual park pages.")

    # --- 3. GENERATE SITEMAP ---
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    sitemap_lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    
    # Add index (root)
    sitemap_lines.append(f'  <url>\n    <loc>https://nationalparkfinder.info/</loc>\n    <lastmod>{today}</lastmod>\n    <priority>1.0</priority>\n  </url>')
    
    # Add months
    for month in MONTHS:
        sitemap_lines.append(f'  <url>\n    <loc>https://nationalparkfinder.info/{month}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>0.8</priority>\n  </url>')
        
    # Add parks
    for park_id in parks_data.keys():
        sitemap_lines.append(f'  <url>\n    <loc>https://nationalparkfinder.info/{park_id}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>0.7</priority>\n  </url>')
    
    sitemap_lines.append("</urlset>")
    
    sitemap_path = os.path.join(project_root, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_lines))
    print("Generated sitemap.xml")

    # --- 4. INJECT HIDDEN LINKS INTO INDEX.HTML ---
    # We will generate a block of links to all parks and append it to index.html if not present
    hidden_links_html = '<div id="all-parks-seo-links" style="display:none;" aria-hidden="true">\n'
    hidden_links_html += '<h3>All US National Parks</h3>\n<ul>\n'
    for park_id, park in sorted(parks_data.items(), key=lambda x: x[1].get('name', '')):
        hidden_links_html += f'  <li><a href="/{park_id}">{park.get("name", park_id)}</a></li>\n'
    hidden_links_html += '</ul>\n</div>\n'
    
    if '<div id="all-parks-seo-links"' not in html_content:
        # Insert right before </footer>
        new_html_content = html_content.replace('</footer>', hidden_links_html + '</footer>')
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_html_content)
        print("Injected hidden SEO park links into index.html")

if __name__ == "__main__":
    generate_pages()
