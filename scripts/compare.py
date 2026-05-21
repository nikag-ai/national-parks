import sys
import os
from PIL import Image

def compare_images(ref_path, cur_path, diff_path):
    try:
        if not os.path.exists(ref_path):
            print(f"Error: Reference image does not exist: {ref_path}")
            return False
        if not os.path.exists(cur_path):
            print(f"Error: Current image does not exist: {cur_path}")
            return False

        ref = Image.open(ref_path).convert('RGBA')
        cur = Image.open(cur_path).convert('RGBA')
        
        width = max(ref.width, cur.width)
        height = max(ref.height, cur.height)
        
        # Resize/pad if dimensions mismatch
        if ref.size != (width, height):
            ref_new = Image.new('RGBA', (width, height), (0, 0, 0, 0))
            ref_new.paste(ref, (0, 0))
            ref = ref_new
            
        if cur.size != (width, height):
            cur_new = Image.new('RGBA', (width, height), (0, 0, 0, 0))
            cur_new.paste(cur, (0, 0))
            cur = cur_new
            
        diff_img = Image.new('RGBA', (width, height))
        ref_data = ref.load()
        cur_data = cur.load()
        diff_data = diff_img.load()
        
        diff_pixels = 0
        total_pixels = width * height
        
        for y in range(height):
            for x in range(width):
                r1, g1, b1, a1 = ref_data[x, y]
                r2, g2, b2, a2 = cur_data[x, y]
                
                # Use a color distance threshold
                if abs(r1 - r2) > 15 or abs(g1 - g2) > 15 or abs(b1 - b2) > 15 or abs(a1 - a2) > 15:
                    diff_pixels += 1
                    diff_data[x, y] = (255, 0, 0, 255)  # Red for differences
                else:
                    # Show matching pixels semi-transparently
                    diff_data[x, y] = (r2, g2, b2, max(50, a2 // 2))
                    
        diff_img.save(diff_path)
        diff_ratio = diff_pixels / total_pixels
        print(f"Comparing {os.path.basename(ref_path)} vs {os.path.basename(cur_path)}:")
        print(f"  - Mismatched Pixels: {diff_pixels} of {total_pixels}")
        print(f"  - Diff Ratio: {(diff_ratio * 100):.4f}%")
        print(f"  - Diff Image: {diff_path}")
        return True
    except Exception as e:
        print(f"Error during comparison: {e}")
        return False

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Usage: python3 compare.py <ref_path> <cur_path> <diff_path>")
        sys.exit(1)
    compare_images(sys.argv[1], sys.argv[2], sys.argv[3])
