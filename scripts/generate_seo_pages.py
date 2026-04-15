import os

# Define the 12 months
MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
]

def generate_pages():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    index_path = os.path.join(project_root, "index.html")

    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Base strings to replace
    base_title = "<title>US National Park Finder | Explore by Month</title>"
    base_meta_desc = '<meta name="description" content="US National Park Finder: The ultimate interactive guide to discovering the best US National Parks. Filter by month, travel time, and stargazing to find your perfect trip." />'

    # We also want to inject a hidden H2 for extra SEO juice, placed after the subtitle.
    base_subtitle = '<p class="subtitle">Discover the perfect national park for your next trip</p>'
    
    # Optional: ensure rel="canonical" is set
    # We will inject canonical tag before </head>
    head_close = "</head>"

    for month in MONTHS:
        capitalized_month = month.capitalize()
        
        # New customized SEO content
        new_title = f"<title>Where to go in {capitalized_month}: National Parks Guide | US National Park Finder</title>"
        new_meta_desc = f'<meta name="description" content="Looking for the best US National Parks to visit in {capitalized_month}? Explore our curated guide to find the perfect park for your {capitalized_month} adventure." />'
        
        new_subtitle = base_subtitle + f'\n    <h2 class="seo-h2" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Best National Parks to visit in {capitalized_month}</h2>'
        
        # We need to construct the absolute URL for the canonical tag
        # For an apex domain vs GitHub pages, we'll use a relative root path or the absolute domain
        # User has a domain: nationalparkfinder.info
        canonical_tag = f'<link rel="canonical" href="https://nationalparkfinder.info/{month}.html" />\n'
        
        # Dynamic FAQ Schema for this specific month
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
  </script>
</head>'''

        # Perform replacements
        month_html = html_content.replace(base_title, new_title)
        month_html = month_html.replace(base_meta_desc, new_meta_desc)
        month_html = month_html.replace(base_subtitle, new_subtitle)
        if head_close in month_html:
            month_html = month_html.replace(head_close, canonical_tag + faq_schema)
        else:
            print(f"Warning: Could not inject canonical tag and schema into {month}.html")

        # Write the new file
        output_path = os.path.join(project_root, f"{month}.html")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(month_html)
        
        print(f"Generated {month}.html")

    print(f"Successfully generated {len(MONTHS)} SEO pages.")

if __name__ == "__main__":
    generate_pages()
