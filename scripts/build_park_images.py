"""Build lightweight card images from the credited hero assets (requires Pillow)."""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
parks = json.loads((ROOT / 'data/park-guidance.json').read_text())
out = ROOT / 'assets/images/parks/cards'
out.mkdir(exist_ok=True)
for id, park in parks.items():
    image = Image.open(ROOT / park['thumbnail']).convert('RGB')
    image.thumbnail((800, 800), Image.Resampling.LANCZOS)
    image.save(out / f'{id}.jpg', quality=78, optimize=True, progressive=True)
print(f'Built {len(parks)} card images; full hero photographs are preserved.')
