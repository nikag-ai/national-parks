#!/usr/bin/env python3
"""
Download optimized national park images from Unsplash and update parks-summary.js.

Uses curated Unsplash photo IDs for each of the 63 national parks.
Each photo is downloaded at 800px width and saved as optimized JPEG.
"""

import os
import re
import sys
import time
import requests
from io import BytesIO
from PIL import Image

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "assets", "images", "parks")
SUMMARY_FILE = os.path.join(PROJECT_ROOT, "data", "parks-summary.js")

# Curated Unsplash photo IDs for each national park
# Format: (park_id, unsplash_photo_id)
PARKS = [
    ("acadia", "lzh_xoJfrMk"),
    ("arches", "sZgFGMPe2Lg"),
    ("badlands", "O4f3jTPbfnQ"),
    ("big-bend", "DVp8x4GedAA"),
    ("biscayne", "MrwR8sGkfTM"),
    ("black-canyon-of-the-gunnison", "BW0d0IlljjE"),
    ("bryce-canyon", "bC-iYGjWJ6s"),
    ("canyonlands", "1Z2niiBPg5A"),
    ("capitol-reef", "s3Mzc0bQoHo"),
    ("carlsbad-caverns", "mBHuEkka5wM"),
    ("channel-islands", "BYNi_e-xZNM"),
    ("congaree", "sp-p7uuT0tw"),
    ("crater-lake", "YoS8cNM5GfQ"),
    ("cuyahoga-valley", "R93xKCIroLE"),
    ("death-valley", "3PYm5rnum20"),
    ("denali", "M7mu6jXlcns"),
    ("dry-tortugas", "djOLkQfSn3c"),
    ("everglades", "xNKy-Cu20d4"),
    ("gates-of-the-arctic", "WR-sHTnBpMo"),
    ("gateway-arch", "AUPvUpk99JQ"),
    ("glacier", "lR1DOlEXbts"),
    ("glacier-bay", "mW8IZdNBDP4"),
    ("grand-canyon", "6SJu15Rtjyk"),
    ("grand-teton", "d3pTF3r_hwY"),
    ("great-basin", "7dOtu3BQRAU"),
    ("great-sand-dunes", "AUv79N_Tdpc"),
    ("great-smoky-mountains", "kucIaa9s1fk"),
    ("guadalupe-mountains", "pAzSrQF3XUQ"),
    ("haleakalā", "gxpXJ7VcU-8"),
    ("hawaii-volcanoes", "Apg6JKzl3S4"),
    ("hot-springs", "aNrRsB2wLDk"),
    ("indiana-dunes", "kp6knT7ymmI"),
    ("isle-royale", "5H0N_myJHGk"),
    ("joshua-tree", "LR5CYw3AQNo"),
    ("katmai", "DHZMQK-b3VE"),
    ("kenai-fjords", "lEtOYjqeDwQ"),
    ("kings-canyon", "fX6GZmMb01E"),
    ("kobuk-valley", "H3lkMN4QM9E"),
    ("lake-clark", "j5MCx-ejGHA"),
    ("lassen-volcanic", "y0I8kCfyAeU"),
    ("mammoth-cave", "ksOE-r1Z1Fo"),
    ("mesa-verde", "bfPzga_dctI"),
    ("mount-rainier", "Hqv96FEMbsM"),
    ("national-park-of-american-samoa", "2WAjwLR5YgM"),
    ("new-river-gorge", "SMOO5-5MXAQ"),
    ("north-cascades", "XA-Ik5F2hHc"),
    ("olympic", "KUfwlxjKd0g"),
    ("petrified-forest", "8Pm_A-OHJGg"),
    ("pinnacles", "BbG6YxJX70E"),
    ("redwood", "tGBRQw52Thw"),
    ("rocky-mountain", "DtDlVpy-vvQ"),
    ("saguaro", "CMbT5KVNGcE"),
    ("sequoia", "hAn4-E0STuI"),
    ("shenandoah", "oWyDQzXY5Tc"),
    ("theodore-roosevelt", "xG5VJW-7Bio"),
    ("virgin-islands", "NlFyPKxXORo"),
    ("voyageurs", "jzmBCpOGhtg"),
    ("white-sands", "r7E_S85G1LM"),
    ("wind-cave", "79jmUvMAqag"),
    ("wrangell-st.-elias", "iKQv-OhTvKo"),
    ("yellowstone", "IQVFVH0ajag"),
    ("yosemite", "zOXUvQ3Xo3s"),
    ("zion", "zl-Bv1MOoiI"),
]

def download_and_optimize(park_id, photo_id, output_dir, retries=3):
    """Download an image from Unsplash by photo ID and resize/optimize it."""
    output_path = os.path.join(output_dir, f"{park_id}.jpg")

    # Skip if already downloaded
    if os.path.exists(output_path) and os.path.getsize(output_path) > 5000:
        print(f"  ✓ {park_id}.jpg already exists, skipping")
        return True

    # Unsplash direct image URL with width parameter
    url = f"https://images.unsplash.com/photo-{photo_id}?w=800&q=80&fit=crop&auto=format"

    for attempt in range(retries):
        try:
            resp = requests.get(
                url,
                timeout=30,
                headers={
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
                },
                allow_redirects=True
            )

            if resp.status_code != 200:
                print(f"  ⚠ Attempt {attempt+1}: HTTP {resp.status_code} for {park_id}")
                time.sleep(2)
                continue

            content_type = resp.headers.get("Content-Type", "")
            if "image" not in content_type and len(resp.content) < 1000:
                print(f"  ⚠ Attempt {attempt+1}: Not an image for {park_id}")
                time.sleep(2)
                continue

            # Open image, resize, and save as optimized JPEG
            img = Image.open(BytesIO(resp.content))

            if img.mode != "RGB":
                img = img.convert("RGB")

            # Resize to 800px width if needed
            if img.width > 800:
                ratio = 800 / img.width
                height = int(img.height * ratio)
                img = img.resize((800, height), Image.LANCZOS)

            img.save(output_path, "JPEG", quality=80, optimize=True)

            size_kb = os.path.getsize(output_path) / 1024
            print(f"  ✓ {park_id}.jpg ({img.width}x{img.height}, {size_kb:.0f}KB)")
            return True

        except Exception as e:
            print(f"  ⚠ Attempt {attempt+1}: Error for {park_id}: {e}")
            time.sleep(2)

    return False


def update_summary_file(summary_file, parks):
    """Update thumbnail paths in parks-summary.js to local relative paths."""
    with open(summary_file, "r", encoding="utf-8") as f:
        content = f.read()

    updated_count = 0
    for park_id, _ in parks:
        # Find the park block by looking for its id and thumbnail within
        park_block_pattern = rf'"{re.escape(park_id)}":\s*\{{[^}}]*?"thumbnail":\s*"[^"]*"'
        match = re.search(park_block_pattern, content, re.DOTALL)
        if match:
            old_block = match.group(0)
            new_block = re.sub(
                r'"thumbnail":\s*"[^"]*"',
                f'"thumbnail": "assets/images/parks/{park_id}.jpg"',
                old_block
            )
            content = content.replace(old_block, new_block)
            updated_count += 1

    with open(summary_file, "w", encoding="utf-8") as f:
        f.write(content)

    return updated_count


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Downloading {len(PARKS)} national park images...")
    print(f"Output: {OUTPUT_DIR}")
    print()

    success_count = 0
    failed = []

    for i, (park_id, photo_id) in enumerate(PARKS, 1):
        print(f"[{i}/{len(PARKS)}] {park_id}")
        if download_and_optimize(park_id, photo_id, OUTPUT_DIR):
            success_count += 1
        else:
            failed.append(park_id)

        if i < len(PARKS):
            time.sleep(0.3)

    print()
    print(f"Download complete: {success_count}/{len(PARKS)} successful")

    if failed:
        print(f"Failed: {', '.join(failed)}")

    # Update parks-summary.js
    print()
    print("Updating parks-summary.js thumbnail paths...")
    updated = update_summary_file(SUMMARY_FILE, PARKS)
    print(f"Updated {updated} thumbnail paths to local references.")

    print()
    print("=" * 60)
    print(f"SUMMARY")
    print(f"  Images downloaded: {success_count}/{len(PARKS)}")
    print(f"  Thumbnails updated: {updated}/{len(PARKS)}")
    if failed:
        print(f"  Failed parks: {', '.join(failed)}")
    print("=" * 60)

    return 0 if not failed else 1


if __name__ == "__main__":
    sys.exit(main())
