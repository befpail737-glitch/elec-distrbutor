// js/main.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initActiveLinks();
  initTabs();
  initSolutionFilters();
  initNewsFilters();
});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  const navbar = document.getElementById('navbar');
  
  if (!navbarToggle || !navbarMenu) return;
  
  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('navbar__menu--open');
    navbarToggle.classList.toggle('navbar__toggle--active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navbar && !navbar.contains(e.target) && navbarMenu.classList.contains('navbar__menu--open')) {
      navbarMenu.classList.remove('navbar__menu--open');
      navbarToggle.classList.remove('navbar__toggle--active');
    }
  });
}

// Active link highlighting
function initActiveLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar__link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Tab functionality
function initTabs() {
  const tabContainers = document.querySelectorAll('.tab-container');
  
  tabContainers.forEach(container => {
    const tabNav = container.querySelector('.tab-nav');
    const tabContents = container.querySelectorAll('.tab-content');
    
    if (!tabNav) return;
    
    const tabItems = tabNav.querySelectorAll('.tab-nav__item');
    
    tabItems.forEach((item) => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        
        // Remove active class from all tabs
        tabItems.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        item.classList.add('active');
        
        // Find and activate the corresponding content
        const targetContent = container.querySelector('#' + targetTab);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

// Solution filter functionality
function initSolutionFilters() {
  const filterContainer = document.querySelector('.solutions-filter');
  if (!filterContainer) return;

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  const solutionCards = document.querySelectorAll('.solution-large-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter cards
      solutionCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// News filter functionality
function initNewsFilters() {
  const filterContainer = document.querySelector('.news-filter');
  if (!filterContainer) return;

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');
  const featuredNews = document.querySelector('.featured-news-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter featured news
      if (featuredNews) {
        if (filter === 'all') {
          featuredNews.style.display = 'grid';
        } else {
          const featuredCategory = featuredNews.querySelector('.news-category');
          if (featuredCategory && featuredCategory.classList.contains(filter)) {
            featuredNews.style.display = 'grid';
          } else {
            featuredNews.style.display = 'none';
          }
        }
      }

      // Filter news cards
      newsCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Utility function: Debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility function: Throttle
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
