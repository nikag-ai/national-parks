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
    
    # Also handle some common JS-isms if they exist (though this file seems clean)
    # This is a bit risky but usually works for simple JSON-like JS
    try:
        return json.loads(json_str)
    except Exception as e:
        print(f"Error parsing parks data: {e}")
        # Fallback: very basic regex extraction if JSON fails
        parks = {}
        # This is very crude but might work if only names and months are needed
        # Actually let's try to just use the JSON if possible.
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

    for i, month in enumerate(MONTHS):
        month_idx = i + 1
        capitalized_month = month.capitalize()
        
        # New customized SEO content
        new_title = f"<title>Where to go in {capitalized_month}: National Parks Guide | US National Park Finder</title>"
        new_meta_desc = f'Looking for the best US National Parks to visit in {capitalized_month}? Explore our curated guide to find the perfect park for your {capitalized_month} adventure.'
        new_meta_tag = f'<meta name="description" content="{new_meta_desc}" />'
        
        # Open Graph updates
        og_title = f'<meta property="og:title" content="Where to go in {capitalized_month}: National Parks Guide | US National Park Finder" />'
        og_desc = f'<meta property="og:description" content="{new_meta_desc}" />'
        og_url = f'<meta property="og:url" content="https://nationalparkfinder.info/{month}" />'
        
        new_subtitle = base_subtitle + f'\n    <h2 class="seo-h2" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Best National Parks to visit in {capitalized_month}</h2>'
        
        new_canonical = f'<link rel="canonical" href="https://nationalparkfinder.info/{month}" />'
        
        # Generate the static park list for this month
        month_parks = [p["name"] for p in parks_data.values() if month_idx in p.get("bestMonths", [])]
        month_parks.sort()
        
        if month_parks:
            park_list_header = f"<h3>Optimal National Parks to Visit in {capitalized_month}</h3>"
            park_list_items = "".join([f"<li>{name}</li>" for name in month_parks])
            new_seo_list = f'<div id="seo-park-list" style="display:none;" aria-hidden="true">\n      {park_list_header}\n      <ul>{park_list_items}</ul>\n    </div>'
        else:
            new_seo_list = base_seo_list

        # Dynamic FAQ Schema
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

        # Perform replacements
        month_html = html_content
        month_html = month_html.replace(base_title, new_title)
        month_html = month_html.replace(base_meta_desc, new_meta_tag)
        month_html = month_html.replace('<meta property="og:title" content="US National Park Finder | Explore by Month" />', og_title)
        month_html = month_html.replace('<meta property="og:description" content="US National Park Finder: The ultimate interactive guide to discovering the best US National Parks. Filter by month, travel time, and stargazing to find your perfect trip." />', og_desc)
        month_html = month_html.replace('<meta property="og:url" content="https://nationalparkfinder.info" />', og_url)
        month_html = month_html.replace(base_subtitle, new_subtitle)
        month_html = month_html.replace(base_canonical, new_canonical)
        month_html = month_html.replace(base_seo_list, new_seo_list)
        
        # Inject FAQ schema before </head>
        month_html = month_html.replace("</head>", faq_schema + "\n</head>")

        # Write the new file
        output_path = os.path.join(project_root, f"{month}.html")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(month_html)
        
        print(f"Generated {month}.html")

    print(f"Successfully generated {len(MONTHS)} SEO pages.")
    
    # Generate sitemap.xml
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    sitemap_lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    
    # Add index (root)
    sitemap_lines.append(f'  <url>\n    <loc>https://nationalparkfinder.info/</loc>\n    <lastmod>{today}</lastmod>\n    <priority>1.0</priority>\n  </url>')
    
    # Add months
    for month in MONTHS:
        sitemap_lines.append(f'  <url>\n    <loc>https://nationalparkfinder.info/{month}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>0.8</priority>\n  </url>')
    
    sitemap_lines.append("</urlset>")
    
    sitemap_path = os.path.join(project_root, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_lines))
    print("Generated sitemap.xml")

if __name__ == "__main__":
    generate_pages()
