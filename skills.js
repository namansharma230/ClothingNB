'use strict';

/**
 * Handle navbar toggle and card animations
 */
const header = document.querySelector('.header');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

navToggleBtn.addEventListener('click', () => {
  navToggleBtn.classList.toggle('active');
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
});

overlay.addEventListener('click', () => {
  navToggleBtn.classList.remove('active');
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('nav-active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

/**
 * Skills Marquee Animation Enhancement
 */
document.addEventListener('DOMContentLoaded', () => {
  // Skill details data
  const skillDetails = {
    'Python': {
      description: 'Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms and is widely used in web development, data science, AI, and automation.',
      projects: ['AI Brochure Generator', 'Hand Sign Recognition System', 'Energy Monitoring Dashboard']
    },
    'HTML-5': {
      description: 'HTML5 is the latest version of the Hypertext Markup Language, the standard for structuring web content. It includes new elements, attributes, and behaviors for modern web applications.',
      projects: ['Unfair Means Incident Management System', 'Portfolio Website']
    },
    'Javascript': {
      description: 'JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers. It powers dynamic content updates, animations, and modern web applications.',
      projects: ['Unfair Means Incident Management System', 'Interactive Dashboards']
    },
    'CSS': {
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML. It controls layout, colors, fonts, and animations.',
      projects: ['Portfolio Website', 'Responsive Web Applications']
    },
    'React': {
      description: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components that update efficiently when data changes.',
      projects: ['Interactive Dashboards', 'Single Page Applications']
    },
    'Numpy': {
      description: 'NumPy is a library for the Python programming language that supports large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.',
      projects: ['Hand Sign Recognition System', 'Data Analysis Projects']
    },
    'Tensorflow': {
      description: 'TensorFlow is an open-source machine learning framework developed by Google. It provides a comprehensive ecosystem of tools for building and deploying machine learning models.',
      projects: ['Hand Sign Recognition System', 'Sentimental Detector']
    },
    'OpenCV': {
      description: 'OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. It includes algorithms for image processing, object detection, and facial recognition.',
      projects: ['Hand Sign Recognition System', 'Vehicle Detection']
    },
    'WeasyPrint': {
      description: 'WeasyPrint is a visual rendering engine for HTML and CSS that can export to PDF. It allows for the creation of PDF documents from web content with precise control over layout and styling.',
      projects: ['AI Brochure Generator', 'Report Generation Systems']
    },
    'ETL': {
      description: 'Extract, Transform, Load (ETL) is a process in database usage and data warehousing that involves extracting data from various sources, transforming it to fit operational needs, and loading it into a target database.',
      projects: ['Energy Monitoring Dashboard', 'Data Processing Scripts']
    },
    'CNN': {
      description: 'Convolutional Neural Networks (CNN) are deep learning algorithms particularly effective for analyzing visual imagery. They use convolutional layers to automatically and adaptively learn spatial hierarchies of features.',
      projects: ['Hand Sign Recognition System', 'Biometrics Recognition']
    },
    'LSTM': {
      description: 'Long Short-Term Memory (LSTM) networks are a type of recurrent neural network capable of learning order dependence in sequence prediction problems. They are particularly useful for time series data and natural language processing.',
      projects: ['Sentimental Detector', 'Time Series Prediction']
    },
    'YOLOv8': {
      description: 'YOLOv8 (You Only Look Once) is a state-of-the-art object detection algorithm that processes images in a single evaluation, making it extremely fast while maintaining high accuracy.',
      projects: ['Vehicle Detection', 'Object Recognition Systems']
    },
    'NLP': {
      description: 'Natural Language Processing (NLP) is a field of AI that gives computers the ability to understand text and spoken words in much the same way human beings can. It combines computational linguistics with machine learning.',
      projects: ['Sentimental Detector', 'AI Brochure Generator']
    },
    'Pandas': {
      description: 'Pandas is a software library written for the Python programming language for data manipulation and analysis. It offers data structures and operations for manipulating numerical tables and time series.',
      projects: ['Data Analysis Projects', 'Energy Monitoring Dashboard']
    },
    'FastAPI': {
      description: 'FastAPI is a modern, fast web framework for building APIs with Python based on standard Python type hints. It provides high performance, easy to write code, and automatic interactive documentation.',
      projects: ['Unfair Means Incident Management System', 'Energy Monitoring Dashboard']
    },
    'InfluxDB': {
      description: 'InfluxDB is an open-source time series database designed to handle high write and query loads. It is optimized for storing and retrieving time series data for monitoring applications and IoT sensors.',
      projects: ['Energy Monitoring Dashboard', 'Real-time Data Systems']
    },
    'PyTorch': {
      description: 'PyTorch is an open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing. It provides a flexible framework for deep learning research.',
      projects: ['Hand Sign Recognition System', 'Deep Learning Research']
    },
    'BeautifulSoup': {
      description: 'Beautiful Soup is a Python library for pulling data out of HTML and XML files. It creates parse trees that can be used to extract data from web pages, making web scraping simpler and more efficient.',
      projects: ['AI Brochure Generator', 'Web Scraping Projects']
    },
    'PostgreSQL': {
      description: 'PostgreSQL is a powerful, open-source object-relational database system that uses and extends the SQL language. It is known for reliability, feature robustness, and performance.',
      projects: ['Unfair Means Incident Management System', 'Database Management Systems']
    },
    'Git': {
      description: 'Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.',
      projects: ['CI/CD Pipeline Implementation', 'Version Control for All Projects']
    },
    'Linux OS': {
      description: 'Linux is an open-source Unix-like operating system based on the Linux kernel. It is the leading operating system on servers and other big iron systems such as mainframe computers and supercomputers.',
      projects: ['Server Deployments', 'Development Environment']
    },
    'Agentic AI': {
      description: 'Agentic AI refers to artificial intelligence systems that can act autonomously to achieve goals. These systems can perceive their environment, make decisions, and take actions without human intervention.',
      projects: ['AI Brochure Generator', 'Autonomous Systems Development']
    },
    'Burp Suite': {
      description: 'Burp Suite is a leading range of cybersecurity tools for testing web application security. It allows for intercepting and modifying HTTP/HTTPS traffic between browsers and web servers.',
      projects: ['Security Testing', 'Web Application Security']
    },
    'Postman API': {
      description: 'Postman is an API platform for building and using APIs. It simplifies each step of the API lifecycle and streamlines collaboration, enabling developers to create better APIs faster.',
      projects: ['API Development', 'API Testing']
    },
    'Jenkins': {
      description: 'Jenkins is an open-source automation server that helps automate parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.',
      projects: ['CI/CD Pipeline Implementation', 'Automated Testing']
    },
    'Selenium': {
      description: 'Selenium is an open-source automated testing framework used to validate web applications across different browsers and platforms. It provides a playback tool for authoring functional tests.',
      projects: ['OTT Platform Automation Framework', 'Web Application Testing']
    },
    'Simulink': {
      description: 'Simulink is a MATLAB-based graphical programming environment for modeling, simulating, and analyzing multidomain dynamical systems. It is widely used in automatic control and digital signal processing.',
      projects: ['System Modeling', 'Control System Design']
    },
    'Scrum': {
      description: 'Scrum is an agile framework for developing, delivering, and sustaining complex products. It is designed for teams of ten or fewer members who break their work into goals that can be completed within timeboxed iterations.',
      projects: ['Project Management', 'Agile Development']
    },
    'Jira': {
      description: 'Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management. It is widely used for task management, issue tracking, and project planning.',
      projects: ['Project Management', 'Bug Tracking']
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

// Project data for each skill category
const categoryProjects = {
  // Programming & Web Development - 3 projects
  "programming": [
    {
      title: "Unfair Means Incident Management System",
      description: "A full-stack web application for managing academic integrity incidents. Built with FastAPI, PostgreSQL, and HTML/CSS/JavaScript. Features include user authentication, incident reporting, case management, and automated notifications.",
      github: "https://github.com/username/unfair-means-system",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with HTML5, CSS3, and JavaScript. Features include smooth scrolling, dynamic content loading, and interactive elements. The website showcases projects, skills, and contact information.",
      github: "https://github.com/username/portfolio-website",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "Interactive Dashboard",
      description: "A React-based interactive dashboard for data visualization. Features include real-time data updates, customizable widgets, and responsive design. The dashboard provides insights into key performance indicators and business metrics.",
      github: "https://github.com/username/interactive-dashboard",
      demo: "#",
      image: "assets/images/nblogo1.png"
    }
  ],
  
  // AI & Machine Learning - 4 projects
  "ai": [
    {
      title: "Hand Sign Recognition System",
      description: "Real-time hand sign recognition system using CNN and computer vision, integrated with Raspberry Pi. The system can recognize various hand gestures and translate them into text or commands with high accuracy.",
      github: "https://github.com/username/hand-sign-recognition",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "Sentimental Detector",
      description: "An NLP-based sentiment analysis tool that can detect emotions and sentiments in text and voice inputs. Uses LSTM networks for sequence prediction and provides real-time feedback on emotional content.",
      github: "https://github.com/username/sentiment-detector",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "Vehicle Detection System",
      description: "An object detection system using YOLOv8 for identifying and tracking vehicles in video streams. The system can classify vehicle types, estimate speed, and detect traffic violations.",
      github: "https://github.com/username/vehicle-detection",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "AI Brochure Generator",
      description: "Python-based tool that automates brochure generation for companies using web scraping, NLP, and PDF generation with WeasyPrint. Extracts company information from websites and creates professional brochures.",
      github: "https://github.com/username/ai-brochure-generator",
      demo: "#",
      image: "assets/images/nblogo1.png"
    }
  ],
  
  // Backend & API Development - 2 projects
  "backend": [
    {
      title: "Energy Monitoring Dashboard",
      description: "Backend system for real-time energy monitoring with FastAPI, InfluxDB, and Grafana. Implemented query optimization resulting in 30% faster data retrieval and visualization.",
      github: "https://github.com/username/energy-monitoring",
      demo: "#",
      image: "assets/images/nblogo1.png"
    },
    {
      title: "RESTful API Service",
      description: "A comprehensive RESTful API service built with FastAPI and PostgreSQL. Features include authentication, rate limiting, data validation, and comprehensive documentation with Swagger UI.",
      github: "https://github.com/username/restful-api",
      demo: "#",
      image: "assets/images/nblogo1.png"
    }
  ],
  
  // Automation & Testing - default projects
  "automation": [
    {
      title: "OTT Platform Automation Framework",
      description: "Comprehensive test automation framework for OTT platforms using Selenium and Robot Framework. Reduced manual testing effort by 60% and improved release cycles.",
      github: "https://github.com/username/ott-automation",
      demo: "#",
      image: "assets/images/nblogo1.png"
    }
  ],
  
  // DevOps & Tools - default projects
  "devops": [
    {
      title: "CI/CD Pipeline Implementation",
      description: "Implemented CI/CD pipelines using Jenkins and Git for automated testing and deployment. Reduced deployment time by 70% and improved code quality through automated testing.",
      github: "https://github.com/username/cicd-pipeline",
      demo: "#",
      image: "assets/images/nblogo1.png"
    }
  ]
};

window.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'auto';
  // Animate cards on load
  const cards = document.querySelectorAll('.service-card');
  
  // Map card indices to categories
  const categoryMap = {
    0: 'programming',  // Programming & Web Development
    1: 'ai',           // AI & Machine Learning
    2: 'backend',      // Backend & API Development
    3: 'automation',   // Automation & Testing
    4: 'devops',       // DevOps & Tools
    5: 'devops'        // Duplicate DevOps card
  };
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 200);
    
    // Add click event to open project modal with category
    card.addEventListener('click', () => {
      const category = categoryMap[index];
      openProjectModal(category);
    });
  });
  
  // Modal functionality
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.project-modal-close');
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  
  // Navigation button event listeners
  prevBtn.addEventListener('click', showPreviousProject);
  nextBtn.addEventListener('click', showNextProject);
  
  // Close modal when clicking on X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Variables to track current project state
let currentCategory = '';
let currentProjectIndex = 0;
let projectsInCategory = [];

// Function to open project modal with specific category
function openProjectModal(category) {
  const modal = document.getElementById('projectModal');
  const categoryTitle = document.querySelector('.project-modal-category');
  const projectCardsContainer = document.querySelector('.project-cards-container');
  const currentProjectSpan = document.getElementById('currentProject');
  const totalProjectsSpan = document.getElementById('totalProjects');
  
  // Set current category and get projects
  currentCategory = category;
  projectsInCategory = categoryProjects[category] || [];
  currentProjectIndex = 0;
  
  // Set category title based on category
  const categoryTitles = {
    'programming': 'Programming & Web Development',
    'ai': 'AI & Machine Learning',
    'backend': 'Backend & API Development',
    'automation': 'Automation & Testing',
    'devops': 'DevOps & Tools'
  };
  
  categoryTitle.textContent = categoryTitles[category] || 'Projects';
  
  // Clear previous project cards
  projectCardsContainer.innerHTML = '';
  
  // Create project cards for all projects in the category
  projectsInCategory.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    projectCard.style.display = index === 0 ? 'block' : 'none';
    projectCardsContainer.appendChild(projectCard);
  });
  
  // Update project counter
  currentProjectSpan.textContent = '1';
  totalProjectsSpan.textContent = projectsInCategory.length;
  
  // Update navigation button states
  updateNavigationButtons();
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to create a project card element
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  card.innerHTML = `
    <h3 class="project-card-title">${project.title}</h3>
    <p class="project-card-description">${project.description}</p>
    <div class="project-card-links">
      <a href="${project.github}" class="project-card-link" target="_blank">
        <ion-icon name="logo-github"></ion-icon>
        <span>GitHub</span>
      </a>
      <a href="${project.demo}" class="project-card-link" target="_blank">
        <ion-icon name="globe-outline"></ion-icon>
        <span>Live Demo</span>
      </a>
    </div>
    <img src="${project.image}" alt="${project.title}" class="project-card-image">
  `;
  
  return card;
}

// Function to show next project
function showNextProject() {
  if (currentProjectIndex < projectsInCategory.length - 1) {
    // Hide current project
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[currentProjectIndex].style.display = 'none';
    
    // Show next project
    currentProjectIndex++;
    projectCards[currentProjectIndex].style.display = 'block';
    
    // Update counter
    document.getElementById('currentProject').textContent = currentProjectIndex + 1;
    
    // Update navigation buttons
    updateNavigationButtons();
  }
}

// Function to show previous project
function showPreviousProject() {
  if (currentProjectIndex > 0) {
    // Hide current project
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[currentProjectIndex].style.display = 'none';
    
    // Show previous project
    currentProjectIndex--;
    projectCards[currentProjectIndex].style.display = 'block';
    
    // Update counter
    document.getElementById('currentProject').textContent = currentProjectIndex + 1;
    
    // Update navigation buttons
    updateNavigationButtons();
  }
}

// Function to update navigation button states
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  
  // Disable/enable previous button
  prevBtn.disabled = currentProjectIndex === 0;
  
  // Disable/enable next button
  nextBtn.disabled = currentProjectIndex === projectsInCategory.length - 1;
}