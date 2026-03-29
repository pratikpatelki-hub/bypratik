# Motion One Animation Debug Guide

## Check If Motion One Is Loading

### Step 1: Open Browser DevTools
1. Right-click on your page → Select **Inspect** (or press `F12`)
2. Go to **Console** tab
3. Refresh the page (`F5`)

### Step 2: Look For These Console Messages
✅ **You should see:**
```
✓ Motion One library loaded successfully
✓ Animating hero section
✓ Animating X cards
✓ All Motion One animations initialized!
```

❌ **If you see:**
```
⚠ Motion One library not loaded yet
```
= CDN issue (check Network tab)

---

## Troubleshooting

### Problem 1: Nothing Animates
**Solution:** Do a **hard refresh** (Ctrl+Shift+R or Cmd+Shift+R)
- Clears browser cache
- Reloads all scripts

### Problem 2: Console Shows Error
**Check Network Tab:**
1. DevTools → **Network** tab
2. Refresh page
3. Search for `motion`
4. If it shows **red** or **failed** = CDN is blocked

**Fix:** Check if your internet connection allows CDN downloads

### Problem 3: Cards Have 0 Opacity
**Disable CSS animations temporarily:**
1. Open `style.css`
2. Search for `@keyframes`
3. Temporarily comment out CSS animations
4. Refresh page
5. If Motion One works now, we need to remove conflicting CSS

---

## Quick Tests

### Test 1: Check Motion One Object
In Console, type:
```javascript
console.log(window.motion)
```
Should show: `{animate: ƒ, stagger: ƒ, inView: ƒ}`

### Test 2: Manual Animation Test
In Console, paste and run:
```javascript
if (window.motion) {
  window.motion.animate(document.querySelector('h1'), { opacity: [0, 1] }, { duration: 1 });
}
```
The first h1 should fade in smoothly.

### Test 3: Check Element Opacity
In Console:
```javascript
const card = document.querySelector('.card');
console.log('Card opacity before:', card.style.opacity);
console.log('Card visibility:', card.style.visibility);
```

---

## Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| No animations | Motion One not loaded | Hard refresh (Ctrl+Shift+R) |
| Elements invisible | CSS opacity: 0 | Remove conflicting CSS or add `opacity: 1 !important` |
| Animations run once | inView callback only fires once | ✓ Already fixed in code |
| Animations jittery | CSS transitions conflicting | Remove `transition: all` from CSS |
| Hero animation slow | Timing issue | Check console for delays |

---

## What Updated

✅ **Fixed in main.js:**
1. Proper Motion One load detection
2. Waits for DOM ready before animating
3. Sets opacity to 0 before animations
4. Adds visibility: visible for fade-ins
5. Better selector matching for elements
6. Console logs for debugging

---

## Next Steps

1. **Hard refresh** (Ctrl+Shift+R)
2. **Open Console** (F12)
3. **Tell me what you see** in the console output
4. If errors, share the error message

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| IE 11 | ❌ Not supported |

---

**Report back with console output and we'll debug together!**
