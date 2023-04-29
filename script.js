// To scroll down after button is pressed
function scrollToSection() {
    const section = document.getElementById("explore-section");
    section.scrollIntoView({ behavior: "smooth" });
}

// toggle navbar collapse on mobile and tablet screens
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

// Close dropdown menus when clicking outside
document.addEventListener('click', function(e) {
  if (!navbarCollapse.contains(e.target)) {
    navbarCollapse.classList.remove('show');
  }
});
