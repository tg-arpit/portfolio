// ════════════════════════════════════════════════════════════════════════════════
// ARPIT BABU'S PORTFOLIO — MAIN JAVASCRIPT
// Handles animations, interactions, and dynamic behaviors
// ════════════════════════════════════════════════════════════════════════════════

// ── PRELOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1900);
});

// ── CUSTOM CURSOR ──
const ring = document.getElementById('cursor-ring');
const dot = document.getElementById('cursor-dot');
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

(function anim() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(anim);
})();

// ── CURSOR HOVER EFFECT ──
document.querySelectorAll('a, button, .skill-block, .project-sm, .project-featured, .testi-card').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovering');
  });
});

// ── NAVIGATION SOLID ON SCROLL ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.clientHeight;
    if (window.scrollY >= sectionTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach((a) => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--accent)';
    }
  });
});

// ── SCROLL REVEAL ANIMATION ──
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

revealElements.forEach((el) => {
  observer.observe(el);
});

// ── HERO PARALLAX EFFECT ──
window.addEventListener('scroll', () => {
  const bgNum = document.querySelector('.hero-bg-num');
  if (bgNum) {
    bgNum.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.14}px))`;
  }
});

// ── CONTACT FORM SUBMISSION ──
document.getElementById('submitBtn').addEventListener('click', function () {
  const nameInput = document.querySelector('.fg input[placeholder="John"]');
  const emailInput = document.querySelector('.fg input[type="email"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Validate inputs
  if (!name || !email) {
    this.textContent = '⚠ Please fill in Name & Email';
    this.style.background = '#c0392b';

    setTimeout(() => {
      this.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      this.style.background = '';
    }, 2000);
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    this.textContent = '⚠ Please enter a valid email';
    this.style.background = '#c0392b';

    setTimeout(() => {
      this.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      this.style.background = '';
    }, 2000);
    return;
  }

  // Success state
  this.innerHTML = '✓ Message Sent — Talk Soon!';
  this.style.background = 'var(--green)';
  this.disabled = true;

  // Reset form
  setTimeout(() => {
    nameInput.value = '';
    emailInput.value = '';
    document.querySelector('.fg input[placeholder="Doe"]').value = '';
    document.querySelector('.fg input[type="email"]').value = '';
    document.querySelector('.fg select').value = '';
    document.querySelector('.fg textarea').value = '';

    this.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    this.style.background = '';
    this.disabled = false;
  }, 3000);
});

// ── SMOOTH SCROLL FOR ANCHOR LINKS ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ── MOBILE MENU TOGGLE (if needed in future) ──
function initMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('nav');

  if (window.innerWidth <= 640) {
    // Mobile menu logic can be added here
  }
}

initMobileMenu();
window.addEventListener('resize', initMobileMenu);

// ── PERFORMANCE: Debounce scroll events ──
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

// ── ANALYTICS: Track button clicks (optional) ──
document.querySelectorAll('.btn-circle, .pf-link').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Can be used for analytics tracking
    console.log('Button clicked:', btn.textContent);
  });
});

// ── ACCESSIBILITY: Focus visible ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.style.outline = 'none';
  }
});

// ── SECTION COUNTER (optional feature) ──
function countSections() {
  const sections = document.querySelectorAll('section[id]');
  return sections.length;
}

console.log('Portfolio loaded with', countSections(), 'main sections');
