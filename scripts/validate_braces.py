with open('/Users/nikunjagarwal/Documents/national-parks/data/parks-seasonal.js', 'r') as f:
    content = f.read()

lines = content.split('\n')
level = 0
for i, line in enumerate(lines):
    stripped = line.strip()
    level += line.count('{')
    level -= line.count('}')
    
    # Check for park keys: should be at level 2 and end with {
    # e.g., "zion": {
    if stripped.startswith('"') and stripped.endswith('{') and not stripped[1].isdigit():
        if level != 2:
            print(f"Error at line {i+1}: Park {stripped} started at level {level} (expected 2)")
    
    # Check for month keys: should be at level 3
    # e.g., "1": {
    if stripped.startswith('"') and stripped.endswith('{') and stripped[1].isdigit():
        if level != 3:
            print(f"Error at line {i+1}: Month {stripped} started at level {level} (expected 3)")

print(f"Final overall level: {level}")
