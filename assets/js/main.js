//show navLinks
const hamberger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamberger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})

//hamburger menu toggle
function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
      document.getElementById("hamburger").classList.toggle("active");
}
