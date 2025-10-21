export function withOpacity(color: string, opacity: number): string {
    if (!color) return "";
  
    // Clamp opacity between 0–1
    const alpha = Math.min(Math.max(opacity, 0), 1);
  
    // 🎨 If HSLA or RGBA → replace the existing alpha value
    if (color.startsWith("hsla")) {
      return color.replace(/hsla\(([^)]+),\s*[\d.]+\)/, `hsla($1, ${alpha})`);
    }
  
    if (color.startsWith("rgba")) {
      return color.replace(/rgba\(([^)]+),\s*[\d.]+\)/, `rgba($1, ${alpha})`);
    }
  
    // 🎨 If HEX (#RRGGBB) → convert to RGBA
    if (color.startsWith("#")) {
      let hex = color.replace("#", "");
      if (hex.length === 3) {
        hex = hex.split("").map((x) => x + x).join("");
      }
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  
    // 🎨 Fallback (return color as-is)
    return color;
  }