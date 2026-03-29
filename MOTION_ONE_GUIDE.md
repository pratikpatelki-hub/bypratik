# Motion One Integration Guide

## What is Motion One?

**Motion One** is a lightweight (3KB) animation library created by the founder of Framer Motion. It's:
- ✅ 12x smaller than GSAP (3KB vs 36KB)
- ✅ Zero dependencies
- ✅ Perfect for scroll animations
- ✅ Modern JavaScript API
- ✅ Hardware accelerated (60fps)

---

## Current Setup

✅ Motion One is now loaded on all 9 pages via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/motion@10.16.2"></script>
```

---

## How to Use Motion One

### 1. Basic Animation
```javascript
const { animate } = motion;

// Fade in an element
animate('.box', { opacity: 1 }, { duration: 0.5 });
```

### 2. Staggered Animation (Great for List Items)
```javascript
const { animate, stagger } = motion;

// Animate cards one after another
animate(
  '.card',
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.1), duration: 0.6 }
);
```

### 3. Scroll-Triggered Animation
```javascript
const { inView, animate, stagger } = motion;

// Animate when element scrolls into view
inView('.how-it-works', () => {
  animate(
    '.step',
    { opacity: [0, 1], x: [-30, 0] },
    { delay: stagger(0.15), duration: 0.8 }
  );
});
```

---

## Next Steps - Choose Your Path

### Option A: Quick Start (Use CSS + Your Current JS)
- Keep your existing CSS animations
- Add Motion One for scroll effects
- File: `motion-one-examples.js` has ready-to-use snippets

### Option B: Full Integration (Advanced)
- Replace complex animations with Motion One
- Smaller file size overall
- More control over sequences

### Option C: Hybrid (Recommended)
- CSS for simple animations (faster to load)
- Motion One for scroll triggers & sequences
- Best performance/capability mix

---

## Add Motion One to your page

Pick ONE code snippet and add it to `main.js` at the bottom:

### Snippet 1: Stagger Card Animations
```javascript
const { animate, stagger } = motion;

const cards = document.querySelectorAll('.card');
if (cards.length) {
  animate(
    cards,
    { opacity: [0, 1], y: [20, 0] },
    {
      delay: stagger(0.1),
      duration: 0.6,
      easing: 'ease-out'
    }
  );
}
```

### Snippet 2: Scroll-Triggered "How It Works"
```javascript
const { inView, animate, stagger } = motion;

const howitworks = document.querySelector('.how-it-works');
if (howitworks) {
  inView(howitworks, () => {
    animate(
      howitworks.querySelectorAll('.step'),
      { opacity: [0, 1], x: [-30, 0] },
      {
        delay: stagger(0.15),
        duration: 0.8,
        easing: 'ease-out'
      }
    );
  });
}
```

### Snippet 3: Hover Card Effects
```javascript
const { animate } = motion;

document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('mouseenter', () => {
    animate(item, { scale: 1.05, y: -5 }, { duration: 0.3 });
  });
  
  item.addEventListener('mouseleave', () => {
    animate(item, { scale: 1, y: 0 }, { duration: 0.3 });
  });
});
```

---

## Common Animations Reference

| Effect | Motion One | Size | Performance |
|--------|-----------|------|-------------|
| Fade In | ✅ | Small | Excellent |
| Slide Up | ✅ | Small | Excellent |
| Stagger List | ✅ | Small | Excellent |
| Scroll Trigger | ✅ | Small | Excellent |
| Hover Scale | ✅ | Small | Excellent |
| Complex Timeline | ✅ | Medium | Good |
| 3D Rotation | ❌ | - | - |

---

## Performance Tips

1. **Use inView() for scroll animations** - Prevents running animations off-screen
2. **Keep stagger delays under 0.3s** - Too much delay looks slow
3. **Use easing: 'ease-out'** - Feels more natural than linear
4. **Test on mobile** - Motion One performs great even on slow devices

---

## File References

- **motion-one-examples.js** — Copy-paste ready examples for your site
- **All HTML pages** — Motion One CDN already loaded
- **main.js** — Add Motion One code here when ready

---

## Quick Comparison

| Feature | Your CSS | Motion One | GSAP |
|---------|----------|-----------|------|
| Size | 0KB | 3KB | 36KB |
| Learning | Easy | Easy | Medium |
| Scroll animations | Manual | Built-in | Built-in |
| Stagger | Hard | Easy | Easy |
| Performance | Excellent | Excellent | Good |
| Complex timelines | Difficult | Easy | Very Easy |

---

## Decision Tree

**Question 1:** Do you want MORE animation control?
- YES → Add Motion One Snippets
- NO → Keep using CSS

**Question 2:** Do you have scroll-triggered sections?
- YES → Use inView() examples
- NO → Use basic animate() examples

**Question 3:** Are you happy with current performance?
- YES → Don't add anything else
- NO → Motion One makes it faster (smaller than GSAP)

---

## When NOT to Use Motion One

❌ Infinite loading spinners (use CSS)
❌ Simple hover states (use CSS :hover)
❌ Transitions between pages (use CSS)
❌ If you prefer just CSS (no judgment!)

---

## Resources

- **Motion One Docs:** https://motion.dev
- **Examples:** See motion-one-examples.js in your project
- **Easing:** https://easings.net

---

**Status:** Motion One is ready! Add snippets when you want advanced animations.

Want me to integrate any specific Motion One animations into your main.js?
