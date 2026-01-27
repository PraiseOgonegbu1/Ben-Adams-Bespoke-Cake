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

});
