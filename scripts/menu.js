const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggle() {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('show');
}

menuBtn.addEventListener('click', () => {
  toggle();
});

mobileMenu.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle();
  });
});
