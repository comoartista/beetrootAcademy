const mobileMenu = document.querySelector('#mobileMenu');
const menu = document.querySelector('#menu');


mobileMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('close');
  menu.classList.toggle('overlay');
});

