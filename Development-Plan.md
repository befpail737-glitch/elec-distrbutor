# BeiLuo Electronic Components Distributor Website - Development Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete SEO/GEO-optimized static website for BeiLuo electronic components distributor, including main site and Infineon brand subdirectory as the template.

**Architecture:** Pure HTML5 + CSS3 + vanilla JavaScript static website. Responsive design with mobile-first approach. Single GitHub repository with multi-directory structure for brand subdirectories.

**Tech Stack:** HTML5, CSS3 (CSS variables), vanilla JavaScript, SVG icons/images, Schema.org structured data

---

## Phase 1: Project Setup & Foundation

### Task 1: Initialize Project Structure

**Files:**
- Create: `index.html`
- Create: `css/variables.css`
- Create: `css/base.css`
- Create: `css/components.css`
- Create: `css/pages.css`
- Create: `js/main.js`
- Create: `assets/images/`
- Create: `assets/icons/`

- [ ] **Step 1: Create project directory structure**

```bash
mkdir -p css js assets/images assets/icons brands news about contact infineon/products/igbt infineon/products/mosfet infineon/products/sic infineon/solutions infineon/support infineon/team
```

- [ ] **Step 2: Create CSS variables file**

```css
/* css/variables.css */
:root {
  /* Primary Colors */
  --color-primary: #0072ce;
  --color-primary-dark: #005ba3;
  --color-primary-light: #e6f2fa;
  
  /* Secondary Colors */
  --color-secondary: #f8f9fa;
  --color-secondary-dark: #e9ecef;
  
  /* Accent Colors */
  --color-accent: #ff6b35;
  --color-accent-hover: #e55a2b;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  
  /* Text Colors */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #4a4a4a;
  --color-text-tertiary: #6c757d;
  --color-text-inverse: #ffffff;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Container */
  --container-max-width: 1319px;
  --container-padding: 24px;
}
```

- [ ] **Step 3: Create base CSS styles**

```css
/* css/base.css */
@import url('variables.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
  background-color: var(--color-secondary);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.15s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

img {
  max-width: 100%;
  height: auto;
}
```

- [ ] **Step 4: Commit initial setup**

```bash
git add .
git commit -m "feat: initialize project structure with CSS variables and base styles"
```

---

## Phase 2: Global Components

### Task 2: Build Navigation Component

**Files:**
- Create: `components/navbar.html`
- Modify: `css/components.css`
- Modify: `js/main.js`

- [ ] **Step 1: Create navbar HTML structure**

```html
<!-- components/navbar.html -->
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar__inner">
      <a href="/" class="navbar__logo">
        <span class="navbar__logo-text">BeiLuo</span>
        <span class="navbar__logo-subtitle">China's Top 8 Electronic Components Distributor</span>
      </a>
      
      <button class="navbar__toggle" id="navbarToggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="navbar__menu" id="navbarMenu">
        <li><a href="/" class="navbar__link active">Home</a></li>
        <li><a href="/brands/" class="navbar__link">Brands</a></li>
        <li><a href="/news/" class="navbar__link">News</a></li>
        <li><a href="/about/" class="navbar__link">About Us</a></li>
        <li><a href="/contact/" class="navbar__link navbar__link--cta">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: Add navbar CSS styles**

```css
/* Add to css/components.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: white;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

.navbar--scrolled {
  box-shadow: var(--shadow-md);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.navbar__logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

.navbar__logo-subtitle {
  font-size: 12px;
  color: var(--color-text-tertiary);
  max-width: 150px;
  line-height: 1.3;
}

.navbar__menu {
  display: flex;
  list-style: none;
  gap: var(--space-xl);
}

.navbar__link {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
  padding: var(--space-sm) 0;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.navbar__link:hover::after,
.navbar__link.active::after {
  width: 100%;
}

.navbar__link--cta {
  background: var(--color-accent);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
}

.navbar__link--cta:hover {
  background: var(--color-accent-hover);
  color: white;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: transform 0.3s ease;
}
```

- [ ] **Step 3: Add navbar JavaScript functionality**

```javascript
// Add to js/main.js
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
  
  // Mobile menu toggle
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('navbar__menu--open');
    });
  }
  
  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar__link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
```

- [ ] **Step 4: Commit navbar component**

```bash
git add css/components.css js/main.js components/navbar.html
git commit -m "feat: add responsive navbar component with scroll effects"
```

---

### Task 3: Build Footer Component

**Files:**
- Create: `components/footer.html`
- Modify: `css/components.css`

- [ ] **Step 1: Create footer HTML structure**

```html
<!-- components/footer.html -->
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <h3 class="footer__logo">BeiLuo</h3>
        <p class="footer__tagline">China's Top 8 Electronic Components Distributor</p>
        <p class="footer__description">Your trusted partner for genuine electronic components. Authorized distributor of 100+ brands with local stock and technical support.</p>
      </div>
      
      <div class="footer__links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/brands/">Brands</a></li>
          <li><a href="/news/">News</a></li>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer__contact">
        <h4>Contact Us</h4>
        <p>WhatsApp: +86 15013702378</p>
        <p>WeChat: +86 18612518271</p>
        <p>Email: info@elec-distributor.com</p>
      </div>
      
      <div class="footer__social">
        <h4>Follow Us</h4>
        <div class="footer__social-links">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </div>
    
    <div class="footer__bottom">
      <p>&copy; 2026 BeiLuo Electronic Components. All rights reserved.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS styles**

```css
/* Add to css/components.css */
.footer {
  background: var(--color-text-primary);
  color: var(--color-text-inverse);
  padding: var(--space-3xl) 0 var(--space-lg);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.footer__logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.footer__tagline {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-md);
}

.footer__description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-tertiary);
}

.footer__links h4,
.footer__contact h4,
.footer__social h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--space-md);
  color: white;
}

.footer__links ul {
  list-style: none;
}

.footer__links li {
  margin-bottom: var(--space-sm);
}

.footer__links a,
.footer__social a {
  color: var(--color-text-tertiary);
  font-size: 14px;
}

.footer__links a:hover,
.footer__social a:hover {
  color: white;
}

.footer__contact p {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-sm);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-lg);
  text-align: center;
}

.footer__bottom p {
  font-size: 14px;
  color: var(--color-text-tertiary);
}
```

- [ ] **Step 3: Commit footer component**

```bash
git add css/components.css components/footer.html
git commit -m "feat: add footer component with contact info and social links"
```

---

## Phase 3: Homepage Development

### Task 4: Build Homepage Hero Section

**Files:**
- Modify: `index.html`
- Modify: `css/pages.css`

- [ ] **Step 1: Create homepage HTML with Hero section**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electronic Components Core Distributor | Genuine Original Stock | BeiLuo</title>
  <meta name="description" content="BeiLuo is a core distributor of electronic components, providing long-term stable supply of genuine original stock. Technical support and competitive pricing available.">
  <meta name="keywords" content="BeiLuo, electronic components distributor, chip stock, authorized distributor">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Electronic Components Core Distributor | Genuine Original Stock | BeiLuo">
  <meta property="og:description" content="BeiLuo is a core distributor of electronic components, providing long-term stable supply of genuine original stock.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://elec-distributor.com/">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BeiLuo Electronic Components",
    "url": "https://elec-distributor.com",
    "logo": "https://elec-distributor.com/assets/images/logo.svg",
    "description": "China's Top 8 Electronic Components Distributor",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-15013702378",
      "contactType": "sales",
      "availableLanguage": ["English", "Chinese"]
    }
  }
  </script>
  
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <!-- Include navbar -->
  <div id="navbar-container"></div>
  
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">Your Trusted Electronic Components Distributor</h1>
          <p class="hero__subtitle">Authorized distributor with local inventory and fast delivery. We provide genuine original stock with technical support and competitive pricing.</p>
          <div class="hero__cta">
            <a href="/contact/" class="btn btn--primary">Get Quote</a>
            <a href="/brands/" class="btn btn--secondary">Browse Products</a>
          </div>
        </div>
      </div>
      <div class="hero__bg"></div>
    </section>
    
    <!-- Core Advantages Section -->
    <section class="advantages">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="advantages__grid">
          <div class="advantage-card">
            <div class="advantage-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>Authorized Distributor</h3>
            <p>Official authorization from 100+ global brands including Infineon, TI, ST, ADI</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Local Warehouse Stock</h3>
            <p>Large local inventory ensuring fast delivery and stable supply</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3>Fast Delivery</h3>
            <p>Quick response and delivery to meet your urgent production needs</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
              </svg>
            </div>
            <h3>Technical Support</h3>
            <p>Professional FAE team providing product selection and application guidance</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Brands Section -->
    <section class="featured-brands">
      <div class="container">
        <h2 class="section-title">Featured Brands</h2>
        <div class="brands__grid" id="featuredBrands">
          <!-- Brand logos - Static HTML for SEO, can be enhanced with JS filtering -->
          <a href="/infineon/" class="brand-card">
            <img src="assets/brands/infineon-logo.svg" alt="Infineon" loading="lazy">
          </a>
          <a href="/ti/" class="brand-card">
            <img src="assets/brands/ti-logo.svg" alt="Texas Instruments" loading="lazy">
          </a>
          <a href="/st/" class="brand-card">
            <img src="assets/brands/st-logo.svg" alt="STMicroelectronics" loading="lazy">
          </a>
          <a href="/adi/" class="brand-card">
            <img src="assets/brands/adi-logo.svg" alt="Analog Devices" loading="lazy">
          </a>
          <a href="/microchip/" class="brand-card">
            <img src="assets/brands/microchip-logo.svg" alt="Microchip" loading="lazy">
          </a>
          <a href="/nxp/" class="brand-card">
            <img src="assets/brands/nxp-logo.svg" alt="NXP" loading="lazy">
          </a>
        </div>
        <div class="text-center">
          <a href="/brands/" class="btn btn--secondary">View All Brands</a>
        </div>
      </div>
    </section>
    
    <!-- Latest News Section -->
    <section class="latest-news">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        <div class="news__grid" id="latestNews">
          <!-- News cards - Static HTML for SEO -->
          <article class="news-card">
            <div class="news-card__image">
              <img src="assets/news/news-1.jpg" alt="BeiLuo Expands Inventory" loading="lazy">
            </div>
            <div class="news-card__content">
              <span class="news-card__date">January 10, 2026</span>
              <h3>BeiLuo Expands Inventory with New Infineon Stock</h3>
              <p>We are pleased to announce the addition of 500+ new Infineon part numbers to our local warehouse...</p>
            </div>
          </article>
          <article class="news-card">
            <div class="news-card__image">
              <img src="assets/news/news-2.jpg" alt="Technical Seminar" loading="lazy">
            </div>
            <div class="news-card__content">
              <span class="news-card__date">January 5, 2026</span>
              <h3>Free Technical Seminar: Power Electronics Design</h3>
              <p>Join our senior FAE team for a comprehensive workshop on IGBT and SiC module selection...</p>
            </div>
          </article>
          <article class="news-card">
            <div class="news-card__image">
              <img src="assets/news/news-3.jpg" alt="New Partnership" loading="lazy">
            </div>
            <div class="news-card__content">
              <span class="news-card__date">December 28, 2025</span>
              <h3>BeiLuo Signs Distribution Agreement with STMicroelectronics</h3>
              <p>We are proud to announce our new authorized distributor partnership with STMicroelectronics...</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <!-- Final CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-section__content">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for quotes, samples, or technical support</p>
          <a href="/contact/" class="btn btn--primary btn--large">Contact Us</a>
        </div>
      </div>
    </section>
  </main>
  
  <!-- Include footer -->
  <div id="footer-container"></div>
  
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add homepage CSS styles**

```css
/* css/pages.css */

/* Hero Section */
.hero {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding: var(--space-4xl) 0;
  margin-top: 72px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  z-index: -1;
}

.hero__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%230072ce" stroke-width="0.5" opacity="0.1"/></svg>');
  background-size: 100px 100px;
}

.hero__content {
  max-width: 600px;
}

.hero__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.hero__subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.hero__cta {
  display: flex;
  gap: var(--space-md);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
}

.btn--primary {
  background: var(--color-accent);
  color: white;
}

.btn--primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
  background: var(--color-primary-light);
}

.btn--large {
  padding: 16px 32px;
  font-size: 18px;
}

/* Section Styles */
.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--color-text-primary);
}

/* Advantages Section */
.advantages {
  padding: var(--space-4xl) 0;
  background: white;
}

.advantages__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.advantage-card {
  text-align: center;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.advantage-card__icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-md);
  background: var(--color-primary-light);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.advantage-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

/* Featured Brands Section */
.featured-brands {
  padding: var(--space-4xl) 0;
  background: var(--color-secondary);
}

.brands__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.brand-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.brand-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Latest News Section */
.latest-news {
  padding: var(--space-4xl) 0;
  background: white;
}

.news__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.news-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.news-card__image {
  width: 100%;
  height: 200px;
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-card__content {
  padding: var(--space-lg);
}

.news-card__date {
  font-size: 12px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-sm);
}

.news-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.news-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

/* CTA Section */
.cta-section {
  padding: var(--space-4xl) 0;
  background: var(--color-primary);
  color: white;
  text-align: center;
}

.cta-section__content h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.cta-section__content p {
  font-size: 18px;
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

/* Utility Classes */
.text-center {
  text-align: center;
}
```

- [ ] **Step 3: Commit homepage**

```bash
git add index.html css/pages.css
git commit -m "feat: add homepage with hero, advantages, brands, news sections"
```

---

## Phase 4: Brand Pages Development

### Task 5: Build Brand List Page

**Files:**
- Create: `brands/index.html`
- Modify: `js/brands.js`

- [ ] **Step 1: Create brand list page HTML**

```html
<!-- brands/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authorized Electronic Component Brands | BeiLuo Distributor</title>
  <meta name="description" content="Explore our portfolio of 100+ authorized electronic component brands including Infineon, TI, ST, ADI, and more.">
  
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/pages.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <span>Brands</span>
        </nav>
        <h1>Authorized Brands</h1>
        <p>We are authorized distributors for 100+ leading electronic component manufacturers</p>
      </div>
    </section>
    
    <section class="brands-list">
      <div class="container">
        <div class="brands-filter">
          <div class="filter-alphabet">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="A">A</button>
            <button class="filter-btn" data-filter="B">B</button>
            <!-- ... more letters -->
          </div>
          <select class="filter-category">
            <option value="all">All Categories</option>
            <option value="mcu">MCU</option>
            <option value="power">Power Devices</option>
            <option value="sensor">Sensors</option>
          </select>
        </div>
        
        <div class="brands__grid" id="brandsGrid">
          <!-- Brand cards - Static HTML with sample brands -->
          <a href="/infineon/" class="brand-card">
            <img src="assets/brands/infineon-logo.svg" alt="Infineon Technologies">
            <h3>Infineon</h3>
            <p>Power Semiconductors, MCUs</p>
          </a>
          <a href="/ti/" class="brand-card">
            <img src="assets/brands/ti-logo.svg" alt="Texas Instruments">
            <h3>Texas Instruments</h3>
            <p>Analog, Embedded Processing</p>
          </a>
          <a href="/st/" class="brand-card">
            <img src="assets/brands/st-logo.svg" alt="STMicroelectronics">
            <h3>STMicroelectronics</h3>
            <p>MCUs, Sensors, Power</p>
          </a>
          <a href="/adi/" class="brand-card">
            <img src="assets/brands/adi-logo.svg" alt="Analog Devices">
            <h3>Analog Devices</h3>
            <p>High Performance Analog</p>
          </a>
        </div>
        
        <div class="pagination" id="pagination">
          <!-- Pagination -->
          <div class="pagination">
            <a href="#" class="pagination__prev disabled">Previous</a>
            <div class="pagination__numbers">
              <a href="#" class="pagination__number active">1</a>
              <a href="#" class="pagination__number">2</a>
              <a href="#" class="pagination__number">3</a>
              <span class="pagination__ellipsis">...</span>
              <a href="#" class="pagination__number">10</a>
            </div>
            <a href="#" class="pagination__next">Next</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../js/main.js"></script>
  <script src="../js/brands.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit brand list page**

```bash
git add brands/index.html js/brands.js
git commit -m "feat: add brand list page with filtering and pagination"
```

---

### Task 6: Build Infineon Brand Homepage

**Files:**
- Create: `infineon/index.html`
- Create: `infineon/css/brand.css`

- [ ] **Step 1: Create Infineon brand homepage**

```html
<!-- infineon/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infineon Distributor | Authorized Agent | BeiLuo</title>
  <meta name="description" content="Authorized Infineon distributor offering IGBT, MOSFET, SiC modules with local stock and technical support.">
  <meta name="keywords" content="Infineon distributor, Infineon agent, Infineon IGBT distributor">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infineon Technologies",
    "url": "https://elec-distributor.com/infineon/",
    "description": "Authorized Infineon distributor"
  }
  </script>
  
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="css/brand.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <!-- Brand Sub-nav -->
  <nav class="brand-nav">
    <div class="container">
      <ul class="brand-nav__menu">
        <li><a href="/infineon/" class="active">About</a></li>
        <li><a href="/infineon/products/">Products</a></li>
        <li><a href="/infineon/solutions/">Solutions</a></li>
        <li><a href="/infineon/support/">Support</a></li>
      </ul>
    </div>
  </nav>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <span>Infineon</span>
        </nav>
        
        <div class="brand-hero">
          <div class="brand-hero__logo">
            <h1>Infineon Technologies</h1>
            <p class="brand-tagline">Semiconductor Solutions for a Connected World</p>
          </div>
          <div class="brand-hero__cert">
            <span class="badge badge--primary">Authorized Distributor</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="brand-about">
      <div class="container">
        <h2>About Infineon</h2>
        <p>Infineon Technologies AG is a world leader in semiconductor solutions... [300-500 words description]</p>
        
        <div class="certificates">
          <h3>Authorization Certificates</h3>
          <div class="certificates__grid">
            <div class="certificate-card">
              <img src="assets/certs/infineon-2024.jpg" alt="Infineon Authorization Certificate 2024">
              <p>Authorization Certificate 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="brand-products">
      <div class="container">
        <h2>Core Product Areas</h2>
        <div class="product-categories__grid">
          <a href="/infineon/products/igbt/" class="category-card">
            <div class="category-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="6" width="20" height="12" rx="2"/>
                <path d="M6 10v4"/>
                <path d="M10 10v4"/>
                <path d="M14 10v4"/>
                <path d="M18 10v4"/>
              </svg>
            </div>
            <h3>IGBT Modules</h3>
            <p>High-power switching applications for industrial and automotive</p>
            <span class="product-count">24 Products</span>
          </a>
          
          <a href="/infineon/products/mosfet/" class="category-card">
            <div class="category-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v6"/>
                <path d="M12 16v6"/>
                <path d="M4.93 4.93l4.24 4.24"/>
                <path d="M14.83 14.83l4.24 4.24"/>
                <path d="M2 12h6"/>
                <path d="M16 12h6"/>
                <path d="M4.93 19.07l4.24-4.24"/>
                <path d="M14.83 9.17l4.24-4.24"/>
              </svg>
            </div>
            <h3>MOSFETs</h3>
            <p>Low to medium power switching and power management</p>
            <span class="product-count">36 Products</span>
          </a>
          
          <a href="/infineon/products/sic/" class="category-card">
            <div class="category-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>SiC/GaN Devices</h3>
            <p>Wide bandgap semiconductors for high-efficiency applications</p>
            <span class="product-count">18 Products</span>
          </a>
        </div>
      </div>
    </section>
    
    <section class="brand-solutions">
      <div class="container">
        <h2>Solutions & Applications</h2>
        <div class="solutions__grid">
          <article class="solution-card">
            <div class="solution-card__image">
              <img src="assets/solutions/ev-charging.jpg" alt="EV Charging Solutions">
            </div>
            <div class="solution-card__content">
              <h3>EV Charging Solutions</h3>
              <p>Complete power solutions for electric vehicle charging infrastructure...</p>
              <a href="/infineon/solutions/ev-charging/" class="read-more">Read More</a>
            </div>
          </article>
          
          <article class="solution-card">
            <div class="solution-card__image">
              <img src="assets/solutions/solar-inverter.jpg" alt="Solar Inverter Solutions">
            </div>
            <div class="solution-card__content">
              <h3>Solar Inverter Solutions</h3>
              <p>High-efficiency power conversion for photovoltaic systems...</p>
              <a href="/infineon/solutions/solar-inverter/" class="read-more">Read More</a>
            </div>
          </article>
          <article class="solution-card">
            <div class="solution-card__image">
              <img src="assets/solutions/industrial-motor.jpg" alt="Industrial Motor Drive">
            </div>
            <div class="solution-card__content">
              <h3>Industrial Motor Drive Solutions</h3>
              <p>Variable frequency drives for industrial automation...</p>
              <a href="/infineon/solutions/industrial-motor/" class="read-more">Read More</a>
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <section class="brand-support">
      <div class="container">
        <h2>Latest Technical Support</h2>
        <div class="support-articles__list">
          <article class="support-article-card">
            <div class="support-article-card__meta">
              <span class="tag">Selection Guide</span>
              <span class="date">Jan 15, 2026</span>
            </div>
            <h3><a href="/infineon/support/igbt-selection-guide/">IGBT Selection Guide for Industrial Applications</a></h3>
            <p class="author">By Michael Chen, Senior FAE</p>
          </article>
          
          <article class="support-article-card">
            <div class="support-article-card__meta">
              <span class="tag">Application Note</span>
              <span class="date">Jan 8, 2026</span>
            </div>
            <h3><a href="/infineon/support/mosfet-application-note/">MOSFET Application Note for Switching Power Supplies</a></h3>
            <p class="author">By Sarah Liu, Power Applications Engineer</p>
          </article>
          <article class="support-article-card">
            <div class="support-article-card__meta">
              <span class="tag">Troubleshooting</span>
              <span class="date">Jan 5, 2026</span>
            </div>
            <h3><a href="/infineon/support/sic-device-troubleshooting/">SiC Device Troubleshooting Guide</a></h3>
            <p class="author">By David Wang, Senior FAE</p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit Infineon brand homepage**

```bash
git add infineon/index.html infineon/css/brand.css
git commit -m "feat: add Infineon brand homepage with products, solutions, support sections"
```

---

## Phase 5: Product Pages Development

### Task 7: Build Product Category Pages

**Files:**
- Create: `infineon/products/index.html`
- Create: `infineon/products/igbt/index.html`
- Create: `infineon/products/igbt/FF600R12ME4.html`

- [ ] **Step 1: Create product listing page with table**

```html
<!-- infineon/products/igbt/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infineon IGBT Modules | Distributor | BeiLuo</title>
  <meta name="description" content="Authorized distributor of Infineon IGBT modules including EconoDUAL, EconoPACK, PrimePACK series.">
  
  <link rel="stylesheet" href="../../../css/variables.css">
  <link rel="stylesheet" href="../../../css/base.css">
  <link rel="stylesheet" href="../../../css/components.css">
  <link rel="stylesheet" href="../../css/brand.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <nav class="brand-nav">
    <div class="container">
      <ul class="brand-nav__menu">
        <li><a href="/infineon/">About</a></li>
        <li><a href="/infineon/products/" class="active">Products</a></li>
        <li><a href="/infineon/solutions/">Solutions</a></li>
        <li><a href="/infineon/support/">Support</a></li>
      </ul>
    </div>
  </nav>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <a href="/infineon/">Infineon</a> > <a href="/infineon/products/">Products</a> > <span>IGBT Modules</span>
        </nav>
        <h1>IGBT Modules</h1>
        <p class="category-description">Infineon IGBT modules offer high-performance power switching for industrial drives, renewable energy, and EV applications. Our portfolio includes EconoDUAL, EconoPACK, and PrimePACK series.</p>
        <a href="/infineon/support/igbt-selection-guide/" class="btn btn--secondary">View Selection Guide</a>
      </div>
    </section>
    
    <section class="product-listing">
      <div class="container">
        <div class="product-listing__layout">
          <aside class="sidebar">
            <h3>Product Categories</h3>
            <ul class="sidebar-nav">
              <li><a href="/infineon/products/igbt/" class="active">IGBT Modules</a></li>
              <li><a href="/infineon/products/mosfet/">MOSFETs</a></li>
              <li><a href="/infineon/products/sic/">SiC/GaN</a></li>
            </ul>
          </aside>
          
          <div class="product-table-wrapper">
            <div class="table-filters">
              <input type="text" placeholder="Search models..." class="search-input">
              <select class="filter-select">
                <option value="all">All Series</option>
                <option value="econodual">EconoDUAL</option>
                <option value="econopack">EconoPACK</option>
                <option value="primepack">PrimePACK</option>
              </select>
            </div>
            
            <div class="table-responsive">
              <table class="product-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Series</th>
                    <th>Voltage</th>
                    <th>Current</th>
                    <th>Package</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="FF600R12ME4.html">FF600R12ME4</a></td>
                    <td>EconoDUAL</td>
                    <td>1200V</td>
                    <td>600A</td>
                    <td>EconoDUAL 3</td>
                    <td><span class="badge badge--success">In Stock</span></td>
                    <td><a href="FF600R12ME4.html" class="btn btn--sm">View</a></td>
                  </tr>
                  <tr>
                    <td><a href="FF450R12ME4.html">FF450R12ME4</a></td>
                    <td>EconoDUAL</td>
                    <td>1200V</td>
                    <td>450A</td>
                    <td>EconoDUAL 3</td>
                    <td><span class="badge badge--success">In Stock</span></td>
                    <td><a href="FF450R12ME4.html" class="btn btn--sm">View</a></td>
                  </tr>
                  <tr>
                    <td><a href="FF300R12ME4.html">FF300R12ME4</a></td>
                    <td>EconoDUAL</td>
                    <td>1200V</td>
                    <td>300A</td>
                    <td>EconoDUAL 3</td>
                    <td><span class="badge badge--warning">Quote</span></td>
                    <td><a href="FF300R12ME4.html" class="btn btn--sm">View</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="pagination">
              <a href="#" class="prev">Previous</a>
              <span class="page-numbers">
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
              </span>
              <a href="#" class="next">Next</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../../../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit product category pages**

```bash
git add infineon/products/
git commit -m "feat: add product category pages with filterable table"
```

---

### Task 8: Build Product Detail Page

**Files:**
- Create: `infineon/products/igbt/FF600R12ME4.html`

- [ ] **Step 1: Create product detail page**

```html
<!-- infineon/products/igbt/FF600R12ME4.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FF600R12ME4 | Infineon IGBT Module | BeiLuo</title>
  <meta name="description" content="FF600R12ME4 - 1200V 600A EconoDUAL 3 IGBT module. Authorized distributor with local stock.">
  
  <!-- Schema.org Product -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "FF600R12ME4",
    "brand": {
      "@type": "Brand",
      "name": "Infineon"
    },
    "description": "1200V 600A EconoDUAL 3 IGBT module",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  }
  </script>
  
  <link rel="stylesheet" href="../../../css/variables.css">
  <link rel="stylesheet" href="../../../css/base.css">
  <link rel="stylesheet" href="../../../css/components.css">
  <link rel="stylesheet" href="../../css/brand.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <section class="product-detail">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <a href="/infineon/">Infineon</a> > <a href="/infineon/products/">Products</a> > <a href="/infineon/products/igbt/">IGBT Modules</a> > <span>FF600R12ME4</span>
        </nav>
        
        <div class="product-detail__hero">
          <div class="product-detail__image">
            <div class="product-image-wrapper">
              <img src="assets/products/FF600R12ME4.jpg" alt="Infineon FF600R12ME4 IGBT Module" loading="lazy">
            </div>
          </div>
          
          <div class="product-detail__info">
            <h1>FF600R12ME4</h1>
            <div class="product-meta">
              <span class="badge badge--success">In Stock</span>
              <span class="product-brand">Infineon</span>
            </div>
            <p class="product-short-desc">1200V 600A EconoDUAL 3 IGBT module for high-power applications</p>
            
            <div class="product-actions">
              <a href="/contact/?product=FF600R12ME4" class="btn btn--primary btn--large">Get Quote</a>
              <a href="#" class="btn btn--secondary">Download Datasheet</a>
            </div>
          </div>
        </div>
        
        <div class="product-detail__content">
          <div class="product-tabs">
            <div class="tabs-nav">
              <button class="tab-btn active" data-tab="overview">Overview</button>
              <button class="tab-btn" data-tab="specs">Specifications</button>
              <button class="tab-btn" data-tab="applications">Applications</button>
              <button class="tab-btn" data-tab="docs">Documents</button>
            </div>
            
            <div class="tab-content active" id="overview">
              <h2>Product Overview</h2>
              <p>The FF600R12ME4 is a high-performance IGBT module...</p>
              
              <div class="distributor-comment">
                <h3>FAE Comment</h3>
                <blockquote>
                  <p>"This module is ideal for EV charging stations up to 150kW. We've successfully deployed this in over 50 charging station projects. Key advantages include excellent thermal performance and robust short-circuit capability."</p>
                  <cite>— Michael Chen, Senior FAE</cite>
                </blockquote>
              </div>
              
              <div class="alternative-products">
                <h3>Alternative Models</h3>
                <ul>
                  <li><a href="FF450R12ME4.html">FF450R12ME4</a> (450A version)</li>
                  <li><a href="FF300R12ME4.html">FF300R12ME4</a> (300A version)</li>
                </ul>
              </div>
              
              <div class="companion-products">
                <h3>Recommended Companion Products</h3>
                <ul>
                  <li><a href="#">Driver IC: 1EDI20N12AF</a></li>
                  <li><a href="#">Current Sensor: TLI4970</a></li>
                </ul>
              </div>
            </div>
            
            <div class="tab-content" id="specs">
              <h2>Specifications</h2>
              <table class="specs-table">
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Collector-Emitter Voltage (V<sub>CES</sub>)</td>
                  <td>1200V</td>
                </tr>
                <tr>
                  <td>Continuous Collector Current (I<sub>C</sub>)</td>
                  <td>600A</td>
                </tr>
                <tr>
                  <td>Gate-Emitter Threshold Voltage (V<sub>GE(th)</sub>)</td>
                  <td>5.5V (typ)</td>
                </tr>
                <tr>
                  <td>Collector-Emitter Saturation Voltage (V<sub>CE(sat)</sub>)</td>
                  <td>1.7V (typ)</td>
                </tr>
                <tr>
                  <td>Switching Losses (E<sub>on</sub> + E<sub>off</sub>)</td>
                  <td>25mJ + 32mJ</td>
                </tr>
              </table>
            </div>
            
            <div class="tab-content" id="applications">
              <h2>Applications</h2>
              <ul>
                <li>EV Charging Stations</li>
                <li>Solar Inverters</li>
                <li>Industrial Motor Drives</li>
                <li>UPS Systems</li>
              </ul>
            </div>
            
            <div class="tab-content" id="docs">
              <h2>Documents</h2>
              <ul class="doc-list">
                <li><a href="#" download>Datasheet (PDF)</a></li>
                <li><a href="#" download>Application Note (PDF)</a></li>
                <li><a href="#" download>Simulation Model</a></li>
              </ul>
            </div>
          </div>
          
          <aside class="product-sidebar">
            <div class="cta-box">
              <h3>Need Help?</h3>
              <p>Our FAE team can assist with product selection and application guidance.</p>
              <a href="/contact/?consult=FAE" class="btn btn--secondary">Consult FAE</a>
            </div>
          </aside>
        </div>
        
        <!-- FAQ Section -->
        <section class="product-faq">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-list">
            <details class="faq-item">
              <summary>What is the maximum junction temperature?</summary>
              <p>The maximum junction temperature is 175°C...</p>
            </details>
            <details class="faq-item">
              <summary>What driver IC is recommended?</summary>
              <p>We recommend the 1EDI20N12AF...</p>
            </details>
            <details class="faq-item">
              <summary>What are the recommended gate resistor values?</summary>
              <p>Typical gate resistor values range from 2.2Ω to 10Ω depending on switching speed requirements...</p>
            </details>
            <details class="faq-item">
              <summary>Can this module be used for EV charging applications?</summary>
              <p>Yes, the FF600R12ME4 is well-suited for EV charging stations up to 150kW...</p>
            </details>
          </div>
        </section>
        
        <!-- Related Products -->
        <section class="related-products">
          <h2>Related Products</h2>
          <div class="products-carousel">
            <!-- Related product cards -->
            <div class="product-card">
              <img src="assets/products/FF450R12ME4-thumb.jpg" alt="FF450R12ME4">
              <h4>FF450R12ME4</h4>
              <p>450A EconoDUAL 3</p>
              <a href="FF450R12ME4.html" class="btn btn--sm">View</a>
            </div>
            <div class="product-card">
              <img src="assets/products/FF300R12ME4-thumb.jpg" alt="FF300R12ME4">
              <h4>FF300R12ME4</h4>
              <p>300A EconoDUAL 3</p>
              <a href="FF300R12ME4.html" class="btn btn--sm">View</a>
            </div>
            <div class="product-card">
              <img src="assets/products/FF600R17ME4-thumb.jpg" alt="FF600R17ME4">
              <h4>FF600R17ME4</h4>
              <p>600A 1700V</p>
              <a href="FF600R17ME4.html" class="btn btn--sm">View</a>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../../../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit product detail page**

```bash
git add infineon/products/igbt/FF600R12ME4.html
git commit -m "feat: add product detail page with tabs, FAQ, and related products"
```

---

## Phase 6: Content Pages Development

### Task 9: Build Solutions & Support Pages

**Files:**
- Create: `infineon/solutions/index.html`
- Create: `infineon/solutions/ev-charging.html`
- Create: `infineon/support/index.html`
- Create: `infineon/support/igbt-selection-guide.html`

- [ ] **Step 1: Create solutions list and detail pages**

```html
<!-- infineon/solutions/ev-charging.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EV Charging Solutions | Infineon Distributor | BeiLuo</title>
  <meta name="description" content="Complete power solutions for electric vehicle charging infrastructure using Infineon IGBT and SiC modules.">
  
  <!-- Schema.org Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EV Charging Station Solutions",
    "author": {
      "@type": "Person",
      "name": "John Smith"
    },
    "datePublished": "2026-01-15"
  }
  </script>
  
  <link rel="stylesheet" href="../../../css/variables.css">
  <link rel="stylesheet" href="../../../css/base.css">
  <link rel="stylesheet" href="../../../css/components.css">
  <link rel="stylesheet" href="../../css/brand.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <article class="solution-detail">
      <header class="solution-header">
        <div class="container">
          <nav class="breadcrumb">
            <a href="/">Home</a> > <a href="/infineon/">Infineon</a> > <a href="/infineon/solutions/">Solutions</a> > <span>EV Charging</span>
          </nav>
          <h1>EV Charging Station Solutions</h1>
          <div class="article-meta">
            <span class="date">January 15, 2026</span>
            <span class="category">Automotive</span>
          </div>
        </div>
      </header>
      
      <div class="container">
        <div class="solution-content">
          <h2>Solution Overview</h2>
          <p>Electric vehicle charging infrastructure requires high-efficiency power conversion...</p>
          
          <h2>Block Diagram</h2>
          <div class="block-diagram">
            <img src="assets/diagrams/ev-charging-block-diagram.svg" alt="EV Charging Block Diagram">
          </div>
          
          <h2>Key Advantages</h2>
          <ul>
            <li>High efficiency > 98%</li>
            <li>Wide input voltage range</li>
            <li>Compact design</li>
            <li>Scalable power levels</li>
          </ul>
          
          <h2>Recommended BOM</h2>
          <table class="bom-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Model</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGBT Module</td>
                <td><a href="/infineon/products/igbt/FF600R12ME4.html">FF600R12ME4</a></td>
                <td>1200V 600A EconoDUAL 3</td>
              </tr>
              <tr>
                <td>Driver IC</td>
                <td><a href="#">1EDI20N12AF</a></td>
                <td>Single-channel isolated gate driver</td>
              </tr>
              <tr>
                <td>Current Sensor</td>
                <td><a href="#">TLI4970</a></td>
                <td>Hall-effect current sensor</td>
              </tr>
              <tr>
                <td>DC-Link Capacitor</td>
                <td><a href="#">B32776G</a></td>
                <td>Film capacitor 450V 100μF</td>
              </tr>
            </tbody>
          </table>
          
          <h2>Applications</h2>
          <ul>
            <li>Public DC Fast Charging (50kW-350kW)</li>
            <li>Fleet Charging Solutions</li>
            <li>Home Charging (7kW-22kW)</li>
          </ul>
          
          <h2>Customer Case Study</h2>
          <blockquote>
            <p>"We deployed 1000+ charging stations using Infineon IGBT modules supplied by BeiLuo. The local stock and technical support significantly reduced our time-to-market."</p>
            <cite>— Major EV Manufacturer</cite>
          </blockquote>
        </div>
      </div>
    </article>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../../../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit solutions pages**

```bash
git add infineon/solutions/
git commit -m "feat: add solutions list and detail pages with BOM tables"
```

---

### Task 10: Build Support Articles

**Files:**
- Create: `infineon/support/igbt-selection-guide.html`

- [ ] **Step 1: Create technical support article page**

```html
<!-- infineon/support/igbt-selection-guide.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IGBT Selection Guide | Infineon Distributor | BeiLuo</title>
  <meta name="description" content="How to select the right IGBT for your application. Technical guide by BeiLuo FAE team.">
  
  <!-- Schema.org TechArticle -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "IGBT Selection Guide for Industrial Applications",
    "author": {
      "@type": "Person",
      "name": "Michael Chen",
      "jobTitle": "Senior FAE"
    },
    "datePublished": "2026-01-10"
  }
  </script>
  
  <link rel="stylesheet" href="../../../css/variables.css">
  <link rel="stylesheet" href="../../../css/base.css">
  <link rel="stylesheet" href="../../../css/components.css">
  <link rel="stylesheet" href="../../css/brand.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <article class="support-article">
      <div class="container">
        <div class="support-article__layout">
          <div class="support-article__content">
            <nav class="breadcrumb">
              <a href="/">Home</a> > <a href="/infineon/">Infineon</a> > <a href="/infineon/support/">Support</a> > <span>IGBT Selection Guide</span>
            </nav>
            
            <header class="article-header">
              <span class="tag">Selection Guide</span>
              <h1>IGBT Selection Guide for Industrial Applications</h1>
              <div class="author-bar">
                <img src="../../../assets/team/michael-chen.jpg" alt="Michael Chen" class="author-avatar">
                <div class="author-info">
                  <span class="author-name">Michael Chen</span>
                  <span class="author-title">Senior FAE, Power Electronics</span>
                  <span class="publish-date">January 10, 2026</span>
                </div>
              </div>
            </header>
            
            <div class="article-body">
              <h2 id="introduction">Introduction</h2>
              <p>Selecting the right IGBT for your application is critical for system performance and reliability...</p>
              
              <h2 id="key-parameters">Key Parameters</h2>
              <p>When selecting an IGBT, consider these key parameters...</p>
              
              <h3>Voltage Rating (V<sub>CES</sub>)</h3>
              <p>The voltage rating should be at least 1.5-2 times the maximum DC bus voltage...</p>
              
              <h3>Current Rating (I<sub>C</sub>)</h3>
              <p>Select current rating based on RMS current with adequate margin...</p>
              
              <h2 id="selection-process">Selection Process</h2>
              <ol>
                <li>Determine system voltage and current requirements</li>
                <li>Calculate switching frequency and losses</li>
                <li>Evaluate thermal requirements</li>
                <li>Consider package and mounting options</li>
              </ol>
              
              <div class="contextual-link">
                <p>Recommended reading: <a href="/infineon/products/igbt/">Browse our IGBT product line</a></p>
              </div>
              
              <h2>Conclusion</h2>
              <p>Proper IGBT selection ensures optimal system performance...</p>
            </div>
            
            <footer class="article-footer">
              <h3>Related Articles</h3>
              <ul>
                <li><a href="mosfet-selection-guide.html">MOSFET Selection Guide</a></li>
                <li><a href="sic-device-guide.html">SiC Device Application Guide</a></li>
              </ul>
            </footer>
          </div>
          
          <aside class="article-sidebar">
            <div class="toc">
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#key-parameters">Key Parameters</a></li>
                <li><a href="#selection-process">Selection Process</a></li>
              </ul>
            </div>
            
            <div class="downloads">
              <h3>Downloads</h3>
              <a href="#" class="download-link">IGBT Selection Worksheet (XLSX)</a>
            </div>
            
            <div class="consult-cta">
              <h3>Need Help?</h3>
              <p>Our FAE team can assist with your specific application.</p>
              <a href="/contact/?consult=FAE" class="btn btn--secondary">Ask an FAE</a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../../../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit support pages**

```bash
git add infineon/support/
git commit -m "feat: add support article pages with TOC and downloads"
```

---

## Phase 7: Main Site Pages

### Task 11: Build News, About, Contact Pages

**Files:**
- Create: `news/index.html`
- Create: `news/article-template.html`
- Create: `about/index.html`
- Create: `contact/index.html`

- [ ] **Step 1: Create news list page**

```html
<!-- news/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>News Center | BeiLuo Electronic Components</title>
  <meta name="description" content="Latest news and updates from BeiLuo Electronic Components.">
  
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/pages.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <span>News</span>
        </nav>
        <h1>News Center</h1>
      </div>
    </section>
    
    <section class="news-section">
      <div class="container">
        <div class="news-category">
          <h2>Company News</h2>
          <div class="news__grid">
            <!-- Company news cards -->
            <article class="news-card">
              <div class="news-card__image">
                <img src="../assets/news/company-1.jpg" alt="New Warehouse Opening" loading="lazy">
              </div>
              <div class="news-card__content">
                <span class="tag tag--company">Company</span>
                <span class="news-card__date">January 12, 2026</span>
                <h3>BeiLuo Opens New Warehouse in Shenzhen</h3>
                <p>Expanding our storage capacity to better serve customers in South China...</p>
              </div>
            </article>
            <article class="news-card">
              <div class="news-card__image">
                <img src="../assets/news/company-2.jpg" alt="Year End Party" loading="lazy">
              </div>
              <div class="news-card__content">
                <span class="tag tag--company">Company</span>
                <span class="news-card__date">December 28, 2025</span>
                <h3>BeiLuo Celebrates Record Sales Year</h3>
                <p>2025 marks our best year with 45% growth in revenue...</p>
              </div>
            </article>
          </div>
        </div>
        
        <div class="news-category">
          <h2>Industry Trends</h2>
          <div class="news__grid">
            <!-- Industry news cards -->
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create about us page**

```html
<!-- about/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | BeiLuo Electronic Components Distributor</title>
  <meta name="description" content="Learn about BeiLuo, China's top 8 electronic components distributor. Authorized distributor with local stock and technical support.">
  
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/pages.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <span>About Us</span>
        </nav>
        <h1>About BeiLuo</h1>
      </div>
    </section>
    
    <section class="about-content">
      <div class="container">
        <div class="about-intro">
          <h2>Your Trusted Electronic Components Distributor</h2>
          <p>BeiLuo is a leading <strong>electronic components distributor</strong> in China, providing <strong>genuine original stock</strong> from 100+ authorized brands...</p>
        </div>
        
        <div class="timeline">
          <h2>Our History</h2>
          <!-- Timeline items -->
        </div>
        
        <div class="advantages-detailed">
          <h2>Why Choose Us</h2>
          <!-- Detailed advantages -->
        </div>
        
        <div class="certificates">
          <h2>Authorization Certificates</h2>
          <div class="certificates__grid">
            <!-- Certificate images -->
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create contact page**

```html
<!-- contact/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | BeiLuo Electronic Components Distributor</title>
  <meta name="description" content="Contact BeiLuo for quotes, samples, and technical support. WhatsApp: +86 15013702378">
  
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/pages.css">
</head>
<body>
  <div id="navbar-container"></div>
  
  <main>
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Home</a> > <span>Contact Us</span>
        </nav>
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section class="contact-content">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <form class="contact-form" id="contactForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input type="text" id="company" name="company">
              </div>
              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="quote">Request Quote</option>
                  <option value="sample">Request Sample</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--large">Send Message</button>
            </form>
          </div>
          
          <aside class="contact-sidebar">
            <div class="contact-method">
              <h3>WhatsApp</h3>
              <p>+86 15013702378</p>
            </div>
            <div class="contact-method">
              <h3>WeChat</h3>
              <p>+86 18612518271</p>
            </div>
            <div class="contact-method">
              <h3>Email</h3>
              <p>info@elec-distributor.com</p>
            </div>
            
            <div class="global-offices">
              <h3>Global Offices</h3>
              <!-- Office list -->
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
  
  <div id="footer-container"></div>
  
  <script src="../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Commit main site pages**

```bash
git add news/ about/ contact/
git commit -m "feat: add news, about, and contact pages"
```

---

## Phase 8: SEO & Performance Optimization

### Task 12: Add Sitemap and Robots.txt

**Files:**
- Create: `sitemap.xml`
- Create: `sitemap-index.xml`
- Create: `robots.txt`

- [ ] **Step 1: Create main sitemap**

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://elec-distributor.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://elec-distributor.com/brands/</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://elec-distributor.com/news/</loc>
    <priority>0.8</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://elec-distributor.com/about/</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://elec-distributor.com/contact/</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

- [ ] **Step 2: Create sitemap index**

```xml
<!-- sitemap-index.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://elec-distributor.com/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://elec-distributor.com/infineon/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
```

- [ ] **Step 3: Create robots.txt**

```
# robots.txt
User-agent: *
Allow: /

Sitemap: https://elec-distributor.com/sitemap-index.xml
```

- [ ] **Step 4: Commit SEO files**

```bash
git add sitemap.xml sitemap-index.xml robots.txt
git commit -m "feat: add sitemap and robots.txt for SEO"
```

---

## Phase 9: Final Review & Deployment

### Task 13: Final Review Checklist

- [ ] **Step 1: Validate all HTML files**

Run HTML validation on all pages to ensure no syntax errors.

- [ ] **Step 2: Check all links**

Verify all internal links work correctly and no 404 errors.

- [ ] **Step 3: Validate Schema.org markup**

Test structured data using Google's Rich Results Test.

- [ ] **Step 4: Performance audit**

Run Lighthouse audit to ensure performance score > 90.

- [ ] **Step 5: Responsive testing**

Test all pages on desktop, tablet, and mobile viewports.

- [ ] **Step 6: Commit final review**

```bash
git add .
git commit -m "chore: final review and optimization"
```

---

### Task 14: Deploy to Cloudflare Pages

- [ ] **Step 1: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 2: Configure Cloudflare Pages**

1. Connect GitHub repository to Cloudflare Pages
2. Set build command: (none for static site)
3. Set output directory: `/`
4. Deploy

- [ ] **Step 3: Verify deployment**

Check live site at https://elec-distributor.com

---

## Summary

This implementation plan covers:

1. **Phase 1**: Project setup with CSS variables and base structure
2. **Phase 2**: Global components (navbar, footer)
3. **Phase 3**: Homepage with all sections
4. **Phase 4**: Brand pages (list, Infineon homepage)
5. **Phase 5**: Product pages (category, detail)
6. **Phase 6**: Solutions and support articles
7. **Phase 7**: Main site pages (news, about, contact)
8. **Phase 8**: SEO optimization (sitemap, robots.txt)
9. **Phase 9**: Final review and deployment

**Total Tasks**: 14
**Estimated Duration**: 4-6 weeks
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript

---

**Plan complete and saved to `Development-Plan.md`.**

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach would you prefer?
