#!/usr/bin/env python3
import os
import sys
import json
import time
import requests
from PIL import Image
from io import BytesIO

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DUMP_FILE = os.path.join(PROJECT_ROOT, "data_dump.json")
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "assets", "images", "parks")
SUMMARY_JS = os.path.join(PROJECT_ROOT, "data", "parks-summary.js")
SUMMARY_JSON = os.path.join(PROJECT_ROOT, "data", "parks-summary.json")

API_KEY = "05gm32vL6jmY27RGwLjfZTU4HxBq50IAXIg9hD6C"

def main():
    if not os.path.exists(DUMP_FILE):
        print(f"Error: data_dump.json not found. Run node data dump command first.")
        return 1

    with open(DUMP_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    summary = data.get("summary", {})
    details = data.get("details", {})

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Starting image downloads using NPS API for {len(summary)} parks...")
    success_count = 0
    failed = []

    for i, (park_id, park_data) in enumerate(summary.items(), 1):
        park_name = park_data.get("name", park_id)
        print(f"[{i}/{len(summary)}] Processing {park_name} ({park_id})...")

        # Get NPS link from details
        park_details = details.get(park_id, {})
        nps_link = park_details.get("links", {}).get("nps", "")

        park_code = ""
        if nps_link:
            # Extract last non-empty path component
            parts = [p for p in nps_link.strip('/').split('/') if p]
            if parts:
                park_code = parts[-1].lower()

        image_url = None
        # Try fetching by parkCode
        if park_code and len(park_code) == 4 and park_code.isalpha():
            api_url = f"https://developer.nps.gov/api/v1/parks?parkCode={park_code}&api_key={API_KEY}"
            try:
                resp = requests.get(api_url, timeout=15)
                if resp.status_code == 200:
                    result = resp.json()
                    park_list = result.get("data", [])
                    if park_list and park_list[0].get("images"):
                        image_url = park_list[0]["images"][0]["url"]
                        print(f"  Found image via parkCode '{park_code}': {image_url[:60]}...")
            except Exception as e:
                print(f"  Error querying parkCode '{park_code}': {e}")

        # Try searching by name if parkCode query failed or returned no images
        if not image_url:
            api_url = f"https://developer.nps.gov/api/v1/parks?q={requests.utils.quote(park_name)}&api_key={API_KEY}"
            try:
                resp = requests.get(api_url, timeout=15)
                if resp.status_code == 200:
                    result = resp.json()
                    # Look for a matching park name
                    park_list = result.get("data", [])
                    for p in park_list:
                        # Simple name checking
                        if park_name.lower() in p.get("fullName", "").lower() or p.get("images"):
                            if p.get("images"):
                                image_url = p["images"][0]["url"]
                                print(f"  Found image via name search: {image_url[:60]}...")
                                break
                    if not image_url and park_list and park_list[0].get("images"):
                        image_url = park_list[0]["images"][0]["url"]
                        print(f"  Found image via fallback name search: {image_url[:60]}...")
            except Exception as e:
                print(f"  Error querying name '{park_name}': {e}")

        # Download and optimize the image
        if image_url:
            download_success = False
            for attempt in range(3):
                try:
                    img_resp = requests.get(image_url, timeout=20)
                    if img_resp.status_code == 200:
                        img = Image.open(BytesIO(img_resp.content))
                        
                        # Convert to RGB if needed
                        if img.mode != "RGB":
                            img = img.convert("RGB")

                        # Resize if width exceeds 800px
                        if img.width > 800:
                            ratio = 800.0 / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((800, new_height), Image.Resampling.LANCZOS)

                        out_path = os.path.join(OUTPUT_DIR, f"{park_id}.jpg")
                        img.save(out_path, "JPEG", quality=80, optimize=True)
                        size_kb = os.path.getsize(out_path) / 1024
                        print(f"  ✓ Saved {park_id}.jpg ({img.width}x{img.height}, {size_kb:.1f} KB)")
                        
                        # Update the thumbnail URL in the summary object
                        summary[park_id]["thumbnail"] = f"assets/images/parks/{park_id}.jpg"
                        download_success = True
                        success_count += 1
                        break
                    else:
                        print(f"  Attempt {attempt+1}: HTTP {img_resp.status_code} downloading image")
                except Exception as e:
                    print(f"  Attempt {attempt+1}: Error downloading/processing image: {e}")
                time.sleep(1)

            if not download_success:
                print(f"  ✗ Failed to download image for {park_id}")
                failed.append(park_id)
        else:
            print(f"  ✗ No image found on NPS API for {park_id}")
            failed.append(park_id)

        # Be nice to the API
        time.sleep(0.2)

    # Write out updated parks-summary.js
    try:
        js_content = f"window.PARKS_SUMMARY = {json.dumps(summary, indent=2)};\n"
        with open(SUMMARY_JS, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"✓ Updated {SUMMARY_JS}")

        # Also write parks-summary.json for completeness
        with open(SUMMARY_JSON, 'w', encoding='utf-8') as f:
            json.dump(summary, f, indent=2)
        print(f"✓ Updated {SUMMARY_JSON}")
    except Exception as e:
        print(f"Error saving updated database: {e}")

    # Cleanup dump file
    if os.path.exists(DUMP_FILE):
        os.remove(DUMP_FILE)
        print("✓ Cleaned up data_dump.json")

    print("\n" + "="*40)
    print(f"Downloads completed: {success_count}/{len(summary)}")
    if failed:
        print(f"Failed parks ({len(failed)}): {', '.join(failed)}")
    print("="*40)

    return 0 if not failed else 1

if __name__ == "__main__":
    sys.exit(main())
