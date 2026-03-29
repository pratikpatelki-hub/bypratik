// ═══════════════════════════════════════════════════════════════════════
// MOTION ONE - Animation Examples
// Lightweight (3KB) animation library - Perfect for scroll & interactive effects
// ═══════════════════════════════════════════════════════════════════════

// Import: Motion One is now loaded from CDN
// Access: window.motion.animate(), window.motion.stagger(), etc.
const { animate, stagger, inView } = motion;

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 1: Staggered Card Animations (On Mount)
// ═══════════════════════════════════════════════════════════════════════
const cards = document.querySelectorAll('.card');
if (cards.length) {
    animate(
        cards,
        { opacity: [0, 1], y: [20, 0] },
        {
            delay: stagger(0.1), // 0.1s between each card
            duration: 0.6,
            easing: 'ease-out'
        }
    );
}

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 2: Scroll-Triggered Animation (In-View)
// ═══════════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 3: Button Click Animation (Ripple-like Effect)
// ═══════════════════════════════════════════════════════════════════════
document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';

        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (x - size / 2) + 'px';
        ripple.style.top = (y - size / 2) + 'px';

        btn.appendChild(ripple);

        animate(ripple,
            {
                scale: [0, 2],
                opacity: [1, 0]
            },
            {
                duration: 0.6,
                easing: 'ease-out'
            }
        ).then(() => ripple.remove());
    });
});

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 4: Sequential Animation (Hero Title)
// ═══════════════════════════════════════════════════════════════════════
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero p');

if (heroTitle) {
    // Animate title first
    animate(
        heroTitle,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, easing: 'ease-out' }
    ).then(() => {
        // Then animate subtitle
        if (heroSubtitle) {
            animate(
                heroSubtitle,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.6, easing: 'ease-out' }
            );
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 5: Hover Animation (Cards/Links)
// ═══════════════════════════════════════════════════════════════════════
document.querySelectorAll('.card, .service-box, .feature').forEach(item => {
    item.addEventListener('mouseenter', () => {
        animate(
            item,
            { scale: 1.05, y: -5 },
            { duration: 0.3, easing: 'ease-out' }
        );
    });

    item.addEventListener('mouseleave', () => {
        animate(
            item,
            { scale: 1, y: 0 },
            { duration: 0.3, easing: 'ease-out' }
        );
    });
});

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 6: Form Validation Animation
// ═══════════════════════════════════════════════════════════════════════
document.querySelectorAll('form input, form textarea').forEach(field => {
    field.addEventListener('valid', () => {
        animate(
            field,
            { borderColor: '#06b6d4', boxShadow: '0 0 0 3px rgba(6, 182, 212, 0.1)' },
            { duration: 0.3 }
        );
    });

    field.addEventListener('invalid', () => {
        animate(
            field,
            { borderColor: '#ef4444', x: [-5, 5, -5, 0] },
            { duration: 0.4, easing: 'ease-out' }
        );
    });
});

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 7: Counter Animation (Stats Section)
// ═══════════════════════════════════════════════════════════════════════
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
    inView(document.querySelector('.stats'), () => {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2;

            animate(
                counter,
                {
                    innerHTML: [0, target]
                },
                {
                    duration,
                    easing: 'ease-out'
                }
            );
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════
// EXAMPLE 8: Exit Animation (Page Transition)
// ═══════════════════════════════════════════════════════════════════════
document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Don't interrupt if target is same page or anchor
        if (href.startsWith('#') || href === location.pathname) {
            return;
        }

        e.preventDefault();

        animate(
            document.body,
            { opacity: [1, 0] },
            { duration: 0.3, easing: 'ease-in' }
        ).then(() => {
            window.location.href = href;
        });
    });
});

// ═══════════════════════════════════════════════════════════════════════
// QUICK REFERENCE - Motion One API
// ═══════════════════════════════════════════════════════════════════════
/*

BASIC ANIMATION:
animate(element, { property: value }, { duration, easing, delay })
animate('.box', { opacity: 1, x: 100 }, { duration: 0.5 })

STAGGERED ANIMATIONS:
animate(elements, { property: value }, { delay: stagger(0.1) })

IN-VIEW ANIMATIONS (Scroll Triggered):
inView(element, () => { animate(...) })

COMMON PROPERTIES:
- opacity: 0 to 1
- scale: 1 is normal, 2 is double
- x/y: pixels to move
- rotate: degrees
- borderColor, backgroundColor, boxShadow, etc.

EASING OPTIONS:
'ease-in', 'ease-out', 'ease-in-out', 'linear', 'ease'
Or: [0.25, 0.1, 0.25, 1] (cubic-bezier)

ARRAY VALUES (From -> To):
{ opacity: [0, 1], x: [100, 0] }
First value is start, second is end

SIZE: 3KB (vs GSAP 36KB, Animate.css 80KB)
FILE: Loaded from CDN already
*/

// ═══════════════════════════════════════════════════════════════════════
// TIPS FOR YOUR WEBSITE
// ═══════════════════════════════════════════════════════════════════════
/*

1. WHEN TO USE MOTION ONE:
   ✅ Complex scroll animations
   ✅ Sequential animations (one after another)
   ✅ Interactive hover effects
   ✅ Page transitions
   ✅ Staggered list animations

2. WHEN TO KEEP CSS:
   ✅ Simple fades and slides
   ✅ Infinite animations (loading spinners)
   ✅ Hover states
   ✅ Transitions (keeps performance better)

3. BEST PRACTICES:
   - Use inView() for scroll triggers (saves performance)
   - Keep animations under 0.8 seconds
   - Use easing: 'ease-out' for natural feel
   - Test on mobile (stagger delays affect small screens)

4. FALLBACK FOR PERFORMANCE:
   If animation causes jank on mobile:
   const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
   if (!prefersReduced.matches) {
     // Run animation only if user allows
     animate(...);
   }
*/
