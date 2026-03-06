// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {

  // CONTACT FORM MESSAGE
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Thank you for your message. We will get back to you shortly.");

      form.reset();
    });
  }

  // FOOTER YEAR (automatic)
  const footer = document.querySelector("footer p");

  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Ben Adams Bespoke Cake | Handcrafted with ❤️ in the UK`;
  }
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    if(themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if(themeToggle) themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

// initialize theme based on preference or system setting
(function () {
  const stored = localStorage.getItem('theme');
  if (stored) {
    applyTheme(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// BACK TO TOP BUTTON
function createBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
}

createBackToTop();

});
