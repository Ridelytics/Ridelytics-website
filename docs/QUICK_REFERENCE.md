# 🎨 Quick Reference: RideLytics Theme System

## 🚀 Quick Start

### Change Primary Color (Accent)
Edit `src/styles/theme.css`:
```css
--color-primary: 217 91% 60%;  /* Blue instead of pink */
```

### Change Background Color
```css
--color-background: 0 0% 5%;  /* Darker background */
```

### Change Text Color
```css
--color-foreground: 0 0% 95%;  /* Slightly off-white */
```

---

## 📦 Available Semantic Tokens

### Background Colors
- `bg-background` - Main page background (#141414)
- `bg-card` - Card/surface background (#1a1a1a)
- `bg-primary` - Accent background (#ff6bff)
- `bg-accent` - Same as primary (#ff6bff)

### Text Colors
- `text-foreground` - Primary text (white)
- `text-muted` - Secondary text (#999)
- `text-primary` - Accent text (#ff6bff)

### Border Colors
- `border-border` - Standard borders (#262626)
- `border-primary` - Accent borders (#ff6bff)

---

## 🎯 Component Classes

### Layout
```tsx
<div className="container-page">
  {/* Max-width container with padding */}
</div>
```

### Cards
```tsx
<div className="card">
  {/* Basic card: bg + border + padding */}
</div>
```

### Buttons
```tsx
<button className="btn-primary">Create Campaign</button>
<button className="btn-secondary">Contact us</button>
```

### Typography
```tsx
<h1 className="section-title">RideLytics</h1>
<h2 className="section-subtitle">Advertising Businesses</h2>
<div className="stat-number">250+</div>
<div className="stat-label">Active Screens</div>
```

### Navigation
```tsx
<a className="nav-link" href="#about">About us</a>
```

---

## 🔍 Search for Hard-Coded Colors

```bash
# From project root
grep -r "#[0-9a-fA-F]\{3,6\}" src/components --exclude-dir=logos
```

Should only find:
- Hero.tsx: Abstract design gradients (decorative)
- logos/: Brand colors (intentional)

---

## ✅ Verification Checklist

- [ ] Run `npm run dev` - builds successfully
- [ ] No console errors
- [ ] Navigation bar looks correct
- [ ] Hero title has silver gradient
- [ ] Buttons have glass effect
- [ ] Stats cards visible and styled
- [ ] Feature cards show pink accent
- [ ] Logo carousel animates smoothly
- [ ] All hover effects work

---

## 🎨 Common Rebrand Scenarios

### Corporate Blue Theme
```css
:root {
  --color-primary: 217 91% 60%;      /* #3b82f6 */
  --color-accent: 217 91% 60%;
}
```

### Emerald Green Theme
```css
:root {
  --color-primary: 160 84% 39%;      /* #10b981 */
  --color-accent: 160 84% 39%;
}
```

### Orange Theme
```css
:root {
  --color-primary: 25 95% 53%;       /* #f97316 */
  --color-accent: 25 95% 53%;
}
```

---

## 📁 File Locations

**Theme Definition:**
- `src/styles/theme.css` - Color tokens

**Theme Config:**
- `src/index.css` - @theme mapping

**Component Styles:**
- `src/styles/components.css` - Reusable classes

**Documentation:**
- `docs/THEMING_GUIDE.md` - Full guide
- `docs/IMPLEMENTATION_SUMMARY.md` - Technical details
- `docs/QUICK_REFERENCE.md` - This file

---

## 🐛 Troubleshooting

### Colors not applying
1. Check CSS variable syntax in theme.css
2. Verify @theme mapping in index.css
3. Clear browser cache and restart dev server

### Build errors
1. Check for typos in color names
2. Ensure HSL values are correct format (H S% L%)
3. Verify components.css imports after theme.css

### IntelliSense not working
1. Restart TypeScript server
2. Check Tailwind CSS IntelliSense extension installed
3. Verify @theme syntax is correct

---

## 💡 Pro Tips

1. **Test in stages**: Change one color at a time to see effect
2. **Use HSL**: Easier to adjust lightness/saturation than RGB
3. **Document changes**: Add comments for custom colors
4. **Browser DevTools**: Inspect elements to verify token application
5. **Git commits**: Commit theme changes separately for easy rollback

---

**Quick Links:**
- [Full Guide](./THEMING_GUIDE.md)
- [Implementation Details](./IMPLEMENTATION_SUMMARY.md)

**Last Updated**: December 20, 2025

