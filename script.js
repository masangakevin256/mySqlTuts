document.addEventListener('DOMContentLoaded', function() {
  console.log('MySQL UI/UX Tutorial Loaded');
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Copy code functionality
  document.querySelectorAll('pre').forEach(preElement => {
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="far fa-copy"></i>';
    copyButton.className = 'btn btn-sm btn-outline-light position-absolute';
    copyButton.style.top = '10px';
    copyButton.style.right = '10px';
    copyButton.title = 'Copy code';
    
    preElement.style.position = 'relative';
    preElement.appendChild(copyButton);
    
    copyButton.addEventListener('click', function() {
      const code = preElement.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        // Show copied feedback
        const originalHTML = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.remove('btn-outline-light');
        copyButton.classList.add('btn-success');
        
        setTimeout(() => {
          copyButton.innerHTML = originalHTML;
          copyButton.classList.remove('btn-success');
          copyButton.classList.add('btn-outline-light');
        }, 2000);
      });
    });
  });
  
  // Card hover effects enhancement
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Add animation to cards when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
  
  // Mobile menu auto-close on click
  document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
    navLink.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
  
  // Console greeting
//   console.log('%c🚀 MySQL Tutorial Ready!', 'color: #0d6efd; font-size: 18px; font-weight: bold;');
//   console.log('%cExplore all MySQL commands with our interactive UI!', 'color: #6c757d;');
});