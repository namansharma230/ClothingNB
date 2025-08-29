'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * IMAGE MODAL
 */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];
const layerLinks = document.querySelectorAll(".layer-link");

// Automatically set data-image attribute for all layer links
layerLinks.forEach(link => {
  // Find the closest parent portfolio card
  const portfolioCard = link.closest('.portfolio-card');
  if (portfolioCard) {
    // Find the image within this card
    const img = portfolioCard.querySelector('img');
    if (img && img.src) {
      // Set the data-image attribute to the image source
      link.setAttribute('data-image', img.src);
      // Change href to prevent default behavior
      link.href = 'javascript:void(0)';
    }
  }
  
  // Add click event to open modal
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const imgSrc = this.getAttribute("data-image");
    if (imgSrc) {
      modal.style.display = "flex";
      modalImg.src = imgSrc;
    }
  });
});

// Close modal when clicking on X
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * NAVBAR
 * navbar toggle for mobile
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * SKILLS MARQUEE
 */

document.addEventListener('DOMContentLoaded', () => {
  // Skill details data
  const skillDetails = {
    'Procreate': {
      description: 'Procreate is a powerful digital illustration app designed for iPad. It offers a wide range of brushes, effects, and tools for creating professional artwork.',
      projects: ['Digital Illustrations', 'Character Design', 'Concept Art']
    },
    'Adobe Illustrator': {
      description: 'Adobe Illustrator is a vector graphics editor developed by Adobe Inc. It allows designers to create logos, icons, drawings, typography, and illustrations for print, web, video, and mobile.',
      projects: ['Logo Design', 'Brand Identity', 'Vector Illustrations']
    },
    'Adobe Photoshop': {
      description: 'Adobe Photoshop is a raster graphics editor developed by Adobe Inc. It allows for image editing, retouching, creating image compositions, and manipulating photographs.',
      projects: ['Photo Editing', 'Digital Manipulation', 'Composite Images']
    },
    'DaVinci Resolve': {
      description: 'DaVinci Resolve is a color correction and non-linear video editing application. It combines professional video editing, color correction, visual effects, and audio post-production in one software tool.',
      projects: ['Video Editing', 'Color Grading', 'Motion Graphics']
    },
    'Canva': {
      description: 'Canva is an online design and publishing tool with a mission to empower everyone to design anything and publish anywhere. It offers templates for social media graphics, presentations, posters, and more.',
      projects: ['Social Media Graphics', 'Marketing Materials', 'Presentation Design']
    },
    'Adobe Premier Pro': {
      description: 'Adobe Premiere Pro is a timeline-based video editing software application. It is widely used for film, TV, and online video editing with its comprehensive set of tools.',
      projects: ['Video Production', 'Commercial Editing', 'Content Creation']
    },
    'WebSite Designer': {
      description: 'Website Designer refers to various tools and platforms used to create and design websites. This includes both visual design and technical implementation of web interfaces.',
      projects: ['E-commerce Sites', 'Portfolio Websites', 'Corporate Web Design']
    }
  };

  const skillItems = document.querySelectorAll('.skill-item');
  const skillDetailPopup = document.getElementById('skillDetailPopup');
  const skillDetailTitle = document.querySelector('.skill-detail-title');
  const skillDetailDescription = document.querySelector('.skill-detail-description');
  const skillProjectsList = document.querySelector('.skill-projects-list');
  const skillDetailClose = document.querySelector('.skill-detail-close');
  
  // Add hover effect with glow animation
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Add a glow effect
      item.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
      item.style.color = '#ffffff';
      
      // Pause the parent animation
      const marqueeContent = item.closest('.marquee-content');
      if (marqueeContent) {
        marqueeContent.style.animationPlayState = 'paused';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Remove the glow effect
      item.style.boxShadow = '';
      item.style.color = '';
      
      // Resume the parent animation
      const marqueeContent = item.closest('.marquee-content');
      if (marqueeContent) {
        marqueeContent.style.animationPlayState = 'running';
      }
    });
    
    // Add click effect to show skill details
    item.addEventListener('click', () => {
      // Create a pulse animation
      item.classList.add('pulse');
      
      // Get skill name and show popup with details
      const skillName = item.textContent.trim();
      if (skillDetails[skillName]) {
        showSkillDetail(skillName, skillDetails[skillName]);
      }
      
      // Remove the pulse class after animation completes
      setTimeout(() => {
        item.classList.remove('pulse');
      }, 500);
    });
  });
  
  // Function to show skill detail popup
  function showSkillDetail(skillName, details) {
    skillDetailTitle.textContent = skillName;
    skillDetailDescription.textContent = details.description;
    
    // Clear previous projects
    skillProjectsList.innerHTML = '';
    
    // Add projects to the list
    details.projects.forEach(project => {
      const li = document.createElement('li');
      li.textContent = project;
      skillProjectsList.appendChild(li);
    });
    
    // Show the popup
    skillDetailPopup.style.display = 'flex';
  }
  
  // Close popup when clicking the close button
  skillDetailClose.addEventListener('click', () => {
    skillDetailPopup.style.display = 'none';
  });
  
  // Close popup when clicking outside the content
  skillDetailPopup.addEventListener('click', (e) => {
    if (e.target === skillDetailPopup) {
      skillDetailPopup.style.display = 'none';
    }
  });
  
  // Adjust marquee speed based on screen width
  const adjustMarqueeSpeed = () => {
    const marqueeContents = document.querySelectorAll('.marquee-content');
    const speed = window.innerWidth < 768 ? '20s' : '30s';
    
    marqueeContents.forEach(content => {
      content.style.animationDuration = speed;
    });
  };
  
  // Call initially and on resize
  adjustMarqueeSpeed();
  window.addEventListener('resize', adjustMarqueeSpeed);
});

/**
 * HEADER
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * slide with [shift + mouse wheel]
   */

  currentSlider.addEventListener("wheel", function (event) {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });

  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }