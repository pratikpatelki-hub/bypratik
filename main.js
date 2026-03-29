// ═══════════════════════════════════════════════════════════════════════
// BYPRATIK.CO.IN - Enhanced Animations & Interactivity
// Pure CSS + Vanilla JavaScript (No external animation libraries)
// ═══════════════════════════════════════════════════════════════════════

// ── MOBILE NAV TOGGLE ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ── ACTIVE NAV LINK MARKER ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── SMOOTH SCROLL FOR ANCHOR LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.style.outline = '2px solid var(--primary)';
        target.style.outlineOffset = '4px';
        setTimeout(() => {
          target.style.outline = 'none';
        }, 2000);
      }
    }
  });
});

// ── INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ──
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add stagger delay for multiple elements
      const delay = entry.target.classList.contains('grid-3') ?
        Array.from(entry.target.children).indexOf(entry.target) * 0 : 0;

      entry.target.classList.add('in-view');
      entry.target.style.animationDelay = delay + 's';

      // Add card animations with stagger
      if (entry.target.classList.contains('grid-3') ||
        entry.target.classList.contains('grid-2')) {
        entry.target.querySelectorAll('.card').forEach((card, i) => {
          card.style.animationDelay = (i * 0.1) + 's';
          card.classList.add('animate-slide-up');
        });
        entry.target.querySelectorAll('.blog-card').forEach((card, i) => {
          card.style.animationDelay = (i * 0.1) + 's';
          card.classList.add('animate-slide-up');
        });
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// ── GLOBAL SMOOTH ANIMATION APPLICATION ──
// Apply smooth animations to all sections, cards, and interactive elements
const initializeGlobalAnimations = () => {
  // Observe all sections
  document.querySelectorAll('section').forEach((section, idx) => {
    if (!section.classList.contains('animate-observe')) {
      section.classList.add('animate-observe');
    }
    observer.observe(section);
  });

  // Observe all card types
  document.querySelectorAll('.card, .blog-card, .pricing-card, .service-box, .testimonial-card').forEach(card => {
    if (!card.classList.contains('animate-observe')) {
      card.classList.add('animate-observe');
    }
    observer.observe(card);
  });

  // Observe all text elements for smooth appearance
  document.querySelectorAll('h1, h2, h3').forEach((heading, idx) => {
    heading.style.transition = 'color 0.3s ease-out';
  });

  // Observe list items for staggered animation
  document.querySelectorAll('li').forEach((item, idx) => {
    item.style.animationDelay = (idx * 0.05) + 's';
  });

  // Observe step elements
  document.querySelectorAll('.step').forEach((step, idx) => {
    step.style.animationDelay = (idx * 0.15) + 's';
    observer.observe(step);
  });

  // Observe testimonials
  document.querySelectorAll('.testimonial-block').forEach((testimonial, idx) => {
    testimonial.style.animationDelay = (idx * 0.1) + 's';
    observer.observe(testimonial);
  });
};

// Initialize global animations after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGlobalAnimations);
} else {
  initializeGlobalAnimations();
}

// Observe all elements with animate-observe class
document.querySelectorAll('.animate-observe, section, .card, .blog-card').forEach(el => {
  if (!el.classList.contains('card') && !el.classList.contains('blog-card')) {
    el.classList.add('animate-observe');
  }
  observer.observe(el);
});

// ── CARD HOVER EFFECTS ──
document.querySelectorAll('.card, .blog-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', function () {
    this.style.zIndex = 'auto';
  });
});

// ── UNIVERSAL HOVER STATE SMOOTHING ──
// Add smooth hover effects to all interactive elements
const addUniversalHoverEffects = () => {
  // Enhance all links with smooth color transition (exclude nav links)
  document.querySelectorAll('a:not(.nav-logo)').forEach(link => {
    // Skip nav links
    if (link.closest('.nav-links')) return;

    link.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.color = 'var(--accent)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.color = '';
    });
  });

  // Smooth hover for all buttons
  document.querySelectorAll('button, .btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Smooth hover for all card elements
  document.querySelectorAll('.card, .blog-card, .pricing-card, .service-box').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.transform = 'translateY(-8px)';
      this.style.borderColor = 'var(--accent)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.borderColor = '';
    });
  });

  // Smooth hover for list items
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.color = 'var(--primary)';
    });
    item.addEventListener('mouseleave', function () {
      this.style.color = '';
    });
  });

  // Smooth hover for images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.transform = 'scale(1.05)';
      this.style.filter = 'brightness(1.1)';
    });
    img.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      this.style.filter = 'brightness(1)';
    });
  });

  // Smooth hover for step elements
  document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease-out';
      this.style.transform = 'translateY(-4px)';
      const stepNum = this.querySelector('.step-num');
      if (stepNum) {
        stepNum.style.color = 'var(--accent)';
        stepNum.style.transform = 'scale(1.15)';
        stepNum.style.transition = 'all 0.3s ease-out';
      }
    });
    step.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      const stepNum = this.querySelector('.step-num');
      if (stepNum) {
        stepNum.style.color = '';
        stepNum.style.transform = 'scale(1)';
      }
    });
  });
};

// Initialize universal hover effects after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addUniversalHoverEffects);
} else {
  addUniversalHoverEffects();
}


// ── BUTTON RIPPLE EFFECT ──
const createRipple = (event) => {
  const button = event.currentTarget;

  if (button.querySelector('.ripple')) {
    button.querySelector('.ripple').remove();
  }

  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
    animation: rippleAnimation 0.6s ease-out;
  `;

  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
};

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleAnimation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.btn-primary, .btn-ghost, .form-submit').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// ── CONTACT FORM HANDLING ──
document.querySelectorAll('form.contact-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.form-submit');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      const msg = this.querySelector('.success-msg');
      if (msg) {
        msg.style.display = 'block';
        msg.textContent = '✓ Thanks for reaching out! I\'ll reply within 24 hours.';
        this.style.opacity = '0.6';
      }

      // Reset form after 2 seconds
      setTimeout(() => {
        this.reset();
        this.style.opacity = '1';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        if (msg) msg.style.display = 'none';
      }, 2000);
    }, 800);
  });
});

// ── INTERACTIVE CARD HOVER EFFECT ──
document.querySelectorAll('.card, .blog-card, .pricing-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', function () {
    this.style.zIndex = 'auto';
  });
});

// ── COUNT UP ANIMATION FOR STATS ──
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const update = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
      requestAnimationFrame(update);
    } else {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
    }
  };

  update();
};

// Observe stat boxes
document.querySelectorAll('.stat-num').forEach(stat => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent);
        if (!isNaN(target)) {
          animateCounter(entry.target, target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(stat);
});

// ── SCROLL PROGRESS INDICATOR ──
const createScrollProgressBar = () => {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 68px;
    left: 0;
    height: 3px;
    background: linear-gradient(to right, #1e40af, #06b6d4);
    z-index: 99;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = totalScroll > 0 ? scrolled / totalScroll : 0;
    progressBar.style.transform = `scaleX(${scrollPercent})`;
  }, { passive: true });
};

createScrollProgressBar();

// ── PARALLAX EFFECT FOR HERO ──
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    const heroBefore = hero.querySelector('::before');
    if (hero.style) {
      hero.style.backgroundPosition = `0 ${parallax}px`;
    }
  }, { passive: true });
}

// ── SCROLL TO TOP BUTTON ──
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 98;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.opacity = '1';
    scrollToTopButton.style.visibility = 'visible';
  } else {
    scrollToTopButton.style.opacity = '0';
    scrollToTopButton.style.visibility = 'hidden';
  }
}, { passive: true });

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollToTopButton.addEventListener('mouseenter', function () {
  this.style.transform = 'scale(1.15)';
});

scrollToTopButton.addEventListener('mouseleave', function () {
  this.style.transform = 'scale(1)';
});

// ── KEYBOARD NAVIGATION ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks && hamburger) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// ── LAZY LOAD IMAGES (if any) ──
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ── FORM INPUT ANIMATIONS ──
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', function () {
    this.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
  });

  input.addEventListener('blur', function () {
    this.style.boxShadow = 'none';
  });
});

// ── TRUST ITEMS ANIMATION ──
// Ensure trust items visible before scroll animation
document.querySelectorAll('.trust-item').forEach((item, index) => {
  item.style.opacity = '1';
});

// ── PERFORMANCE OPTIMIZATION ──
// Refresh on window resize for IntersectionObserver


