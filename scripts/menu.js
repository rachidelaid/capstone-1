const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleMenu);

mobileMenu.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
