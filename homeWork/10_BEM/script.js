let burgerMenu = document.querySelector('#burger-menu');
let overlay = document.querySelector('#menu')

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--close');
  overlay.classList.toggle('overlay');
});
