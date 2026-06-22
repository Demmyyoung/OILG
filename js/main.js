// Sticky header on scroll
const header = document.getElementById('main-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile responsive menu toggle
const navBtn = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-menu');
if (navBtn && navMenu) {
  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon representation if active
    if (navMenu.classList.contains('active')) {
      navBtn.innerHTML = '&#10005;'; // Cross icon
    } else {
      navBtn.innerHTML = '&#9776;'; // Hamburger icon
    }
  });
  
  // Close menu when navigation links are clicked on mobile
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navBtn.innerHTML = '&#9776;';
    });
  });
}
