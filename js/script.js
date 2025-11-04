// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('.nav-menu').classList.remove('active');
  });
});

// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(sec => {
  observer.observe(sec);
});

// 3D Tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15, speed: 400, glare: true, "max-glare": 0.3
});