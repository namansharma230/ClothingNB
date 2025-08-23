'use strict';

/**
 * Handle navbar toggle, accordion, and form submissions (placeholder)
 */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.overlay');

  // Ensure body is scrollable by default
  document.body.style.overflow = 'auto';

  // Debug: Log if elements are missing
  if (!navToggleBtn) console.error('nav-toggle-btn not found');
  if (!navbar) console.error('navbar not found');
  if (!overlay) console.error('overlay not found');

  // Navbar toggle functionality
  if (navToggleBtn && navbar && overlay) {
    navToggleBtn.addEventListener('click', () => {
      navToggleBtn.classList.toggle('active');
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navToggleBtn.classList.contains('active') ? 'hidden' : 'auto';
    });

    overlay.addEventListener('click', () => {
      navToggleBtn.classList.remove('active');
      navbar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

  // Accordion for FAQ
  const acc = document.getElementsByClassName('accordion');
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

  // Placeholder for form submissions
  const contactForm = document.querySelector('.contact-form');
  const feedbackForm = document.querySelector('.feedback-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your query has been submitted! (Placeholder action)');
      contactForm.reset();
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your feedback has been submitted! (Placeholder action)');
      feedbackForm.reset();
    });
  }
});