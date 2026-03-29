# Quick Implementation Examples

Copy and paste these code snippets to add animations to your website!

---

## 📌 Basic Animation Classes

### Add to any element:

```html
<!-- Fade in effect -->
<div class="animate-fade">Fades in</div>

<!-- Slide up effect -->
<div class="animate-slide-up">Slides up</div>

<!-- Slide down effect -->
<div class="animate-slide-down">Slides down</div>

<!-- Scale in effect -->
<div class="animate-scale">Scales in</div>

<!-- Bounce in effect -->
<div class="animate-bounce">Bounces in</div>

<!-- Continuous floating effect -->
<div class="animate-float">Floats continuously</div>

<!-- Continuous pulsing effect -->
<div class="animate-pulse">Pulses continuously</div>

<!-- Continuous glow effect -->
<div class="animate-glow">Glows continuously</div>
```

---

## 🎯 Staggered Animations

Great for multiple items appearing one after another:

```html
<div class="grid-3">
  <div class="card animate-slide-up stagger-1">
    <h3>First Item</h3>
    <p>Appears first (0.1s delay)</p>
  </div>
  
  <div class="card animate-slide-up stagger-2">
    <h3>Second Item</h3>
    <p>Appears second (0.2s delay)</p>
  </div>
  
  <div class="card animate-slide-up stagger-3">
    <h3>Third Item</h3>
    <p>Appears third (0.3s delay)</p>
  </div>
  
  <div class="card animate-slide-up stagger-4">
    <h3>Fourth Item</h3>
    <p>Appears fourth (0.4s delay)</p>
  </div>
</div>
```

---

## 🖼️ Animated Section Example

```html
<!-- This section animates when scrolled into view -->
<section class="animate-observe">
  <div class="section-label">New Feature</div>
  <h2 class="section-title">Animation <em>Section</em></h2>
  <p class="section-sub">Content automatically animates when you scroll to it!</p>
  
  <div class="grid-3">
    <div class="card animate-slide-up stagger-1">
      <div class="card-icon">🎨</div>
      <h3>Beautiful Design</h3>
      <p>Smooth animations make your site feel premium.</p>
      <a href="#" class="card-link">Learn more →</a>
    </div>
    
    <div class="card animate-slide-up stagger-2">
      <div class="card-icon">⚡</div>
      <h3>Fast Performance</h3>
      <p>Optimized animations that don't slow down your site.</p>
      <a href="#" class="card-link">Learn more →</a>
    </div>
    
    <div class="card animate-slide-up stagger-3">
      <div class="card-icon">📱</div>
      <h3>Responsive</h3>
      <p>Animations work beautifully on all devices.</p>
      <a href="#" class="card-link">Learn more →</a>
    </div>
  </div>
</section>
```

---

## 🎬 Custom Animation Example

Add to your HTML to create a custom animated section:

```html
<!-- Custom section with individual staggered items -->
<section>
  <h2 class="animate-slide-down">Why Choose Us</h2>
  
  <div class="features-grid">
    <div class="feature animate-slide-up stagger-1">
      <h4>Expert Writers</h4>
      <p>Experienced content creators in your niche</p>
    </div>
    
    <div class="feature animate-slide-up stagger-2">
      <h4>SEO Optimized</h4>
      <p>Content ranked for Australian search terms</p>
    </div>
    
    <div class="feature animate-slide-up stagger-3">
      <h4>Fast Turnaround</h4>
      <p>AEST hours for quick communication</p>
    </div>
  </div>
</section>

<style>
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }
  
  .feature {
    padding: 24px;
    background: var(--sand);
    border-radius: 12px;
    border: 1px solid var(--border);
  }
</style>
```

---

## 🚀 Animated Call-to-Action Section

```html
<section style="text-align: center; padding: 100px 5%;">
  <h2 class="animate-slide-down">Ready to Get Started?</h2>
  <p class="animate-slide-up stagger-1">
    Let's work together to create amazing content for your business.
  </p>
  
  <div class="btn-row" style="justify-content: center; animation: slideInUp 0.8s ease-out 0.3s backwards;">
    <a href="contact.html" class="btn-primary">Schedule a Call →</a>
    <a href="#" class="btn-ghost">View My Work</a>
  </div>
</section>
```

---

## 📊 Animated Statistics Section

```html
<section style="background: var(--green); color: var(--sand); padding: 80px 5%; border-radius: 20px;">
  <h2 class="animate-slide-down" style="color: var(--sand);">By The Numbers</h2>
  
  <div class="about-stats" style="margin-top: 50px;">
    <div class="stat-box" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2);">
      <span class="stat-num">500</span>
      <span class="stat-label">Articles Created</span>
    </div>
    
    <div class="stat-box" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2);">
      <span class="stat-num">100</span>
      <span class="stat-label">Happy Clients</span>
    </div>
    
    <div class="stat-box" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2);">
      <span class="stat-num">5</span>
      <span class="stat-label">Years Experience</span>
    </div>
  </div>
</section>
```

---

## 🎨 Animated Testimonial Section

```html
<section style="background: var(--sand); padding: 80px 5%;">
  <div class="section-label">Social Proof</div>
  <h2 class="section-title">What My Clients Say</h2>
  
  <div class="grid-2" style="margin-top: 40px;">
    <div class="testimonial-block animate-slide-left stagger-1">
      <blockquote>
        "Pratik transformed our social media presence. Our engagement tripled in 3 months!"
      </blockquote>
      <div class="testimonial-author">
        <div class="testimonial-name">Alex Chen</div>
        <span>Marketing Director, TechStart AU</span>
      </div>
    </div>
    
    <div class="testimonial-block animate-slide-right stagger-2">
      <blockquote>
        "Best investment we made for SEO content. Ranking on page 1 for multiple keywords now."
      </blockquote>
      <div class="testimonial-author">
        <div class="testimonial-name">Sarah Johnson</div>
        <span>CEO, Digital Solutions</span>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Add Interactive Effect to Blog Grid

Replace your current blog grid with this:

```html
<section>
  <div class="section-label">Blog</div>
  <h2 class="section-title">Latest <em>Articles</em></h2>
  
  <div class="grid-3" style="margin-top: 50px;">
    <!-- Blog cards automatically animate in when scrolled -->
    <a href="blog-post.html" class="blog-card animate-slide-up stagger-1">
      <div class="blog-thumb">📝</div>
      <div class="blog-body">
        <span class="blog-tag">SEO</span>
        <h3>How to Rank Higher on Google in 2026</h3>
        <p>Complete guide to SEO optimization strategies for Australian businesses.</p>
        <div class="blog-meta">
          <span>5 min read</span>
          <span>March 2026</span>
        </div>
      </div>
    </a>
    
    <a href="blog-post.html" class="blog-card animate-slide-up stagger-2">
      <div class="blog-thumb">💬</div>
      <div class="blog-body">
        <span class="blog-tag">Social Media</span>
        <h3>LinkedIn Content That Actually Converts</h3>
        <p>Proven strategies to turn your LinkedIn followers into paying clients.</p>
        <div class="blog-meta">
          <span>7 min read</span>
          <span>March 2026</span>
        </div>
      </div>
    </a>
    
    <a href="blog-post.html" class="blog-card animate-slide-up stagger-3">
      <div class="blog-thumb">😂</div>
      <div class="blog-body">
        <span class="blog-tag">Meme Marketing</span>
        <h3>Making Memes That Drive Real Results</h3>
        <p>How to create shareable memes that get your brand noticed.</p>
        <div class="blog-meta">
          <span>6 min read</span>
          <span>March 2026</span>
        </div>
      </div>
    </a>
  </div>
</section>
```

---

## 📧 Animated Contact Form

```html
<section>
  <h2 class="animate-slide-down">Get In Touch</h2>
  
  <div class="form-wrap animate-slide-up stagger-1">
    <h2>Let's Chat</h2>
    <p>I respond to all inquiries within 24 AEST hours</p>
    
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone">
        </div>
        
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" name="company">
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      
      <button type="submit" class="form-submit">Send Message →</button>
      <p class="form-note">✓ We'll get back to you within 24 hours</p>
      <div class="success-msg"></div>
    </form>
  </div>
</section>
```

---

## 🎪 Animated Hero Section

Update your hero with animations:

```html
<section class="hero">
  <div class="hero-eyebrow">Professional Content Writing</div>
  <h1>Words that <em>work</em> for your business</h1>
  <p>I help Australian SMEs attract the right clients through SEO blogs, social content, landing pages and meme marketing that actually converts.</p>
  
  <div class="btn-row">
    <a href="services.html" class="btn-primary">Explore Services →</a>
    <a href="contact.html" class="btn-ghost">Get a Quote</a>
  </div>
  
  <div class="hero-trust">
    <span class="trust-item">Australian English Expert</span>
    <span class="trust-item">500+ Articles Delivered</span>
    <span class="trust-item">24 Hour Response</span>
    <span class="trust-item">AEST Availability</span>
  </div>
</section>
```

The hero section already has built-in animations - all elements slide in and animate automatically!

---

## 🎨 Custom Hover Effects with JavaScript

Already implemented! But if you want to add custom hover logic:

```javascript
// Add to main.js for custom element
const customElements = document.querySelectorAll('.my-custom-class');

customElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('animate-scale');
  });
  
  el.addEventListener('mouseleave', () => {
    el.classList.remove('animate-scale');
  });
});
```

---

## 🚀 Animation Timing Guide

Use these delays for smooth cascading effects:

```html
<!-- 3-item cascade - 0.3s total -->
<div class="stagger-1">Item 1 (0.1s delay)</div>
<div class="stagger-2">Item 2 (0.2s delay)</div>
<div class="stagger-3">Item 3 (0.3s delay)</div>

<!-- 6-item cascade - 0.6s total -->
<div class="stagger-1">Item 1 (0.1s)</div>
<div class="stagger-2">Item 2 (0.2s)</div>
<div class="stagger-3">Item 3 (0.3s)</div>
<div class="stagger-4">Item 4 (0.4s)</div>
<div class="stagger-5">Item 5 (0.5s)</div>
<div class="stagger-6">Item 6 (0.6s)</div>
```

---

## ✨ Pro Tips

1. **Combine animations** - Mix slide-up with stagger for nice cascades
2. **Don't overdo it** - Use animations on key sections, not everything
3. **Mobile-friendly** - Animations reduce automatically on slower devices
4. **Scroll performance** - Scroll animations only trigger once per element
5. **Test thoroughly** - Check animations on actual devices

---

**Ready to add these to your pages!** Simply copy the code and customize with your content. All animations work automatically with no additional configuration needed.