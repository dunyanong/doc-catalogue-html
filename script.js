// To scroll down after button is pressed
function scrollToSection() {
    const section = document.getElementById("explore-section");
    section.scrollIntoView({ behavior: "smooth" });
}

// toggle navbar collapse on mobile and tablet screens
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarCollapse = document.querySelector('.navbar-collapse');

// Close dropdown menus when clicked again
document.addEventListener('click', function(e) {
  if (!navbarCollapse.contains(e.target)) {
    navbarCollapse.classList.remove('show');
  }
});
