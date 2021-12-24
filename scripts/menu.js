const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  if (menuBtn.classList.contains('active')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleMenu);

mobileMenu.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
