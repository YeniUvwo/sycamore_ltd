document.addEventListener('DOMContentLoaded', () => {
  // ===== MOBILE MENU TOGGLE =====
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('mobile-navbar');

  if (mobileMenu && navbar) {
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navbar.classList.toggle('active');
    });

    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navbar.classList.remove('active');
      });
    });
  }

  // ===== SCROLL-BASED ANIMATIONS =====
  const introSections = document.querySelectorAll('.intro');

  function handleScroll() {
    introSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // trigger on load

  // ===== OPTIONAL: Parallax Backgrounds =====
  function parallaxBackground() {
    introSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        sec.style.backgroundPosition = `center ${rect.top * 0.2}px`;
      }
    });
  }

  window.addEventListener('scroll', parallaxBackground);
  parallaxBackground(); // initial
});
