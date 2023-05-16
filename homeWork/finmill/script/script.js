// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
          menu.classList.add('active')
          burger.classList.add('active')
          body.classList.add('locked')
      } else {
          menu.classList.remove('active')
          burger.classList.remove('active')
          body.classList.remove('locked')
      }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
          menu.classList.remove('active')
          burger.classList.remove('active')
          body.classList.remove('locked')
      }
  })
}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedHeader() {
  const nav = document.querySelector('.header')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed')
  } else {
      nav.classList.remove('fixed')
  }
}
window.addEventListener('scroll', fixedHeader)



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 32,
  },

  992: {
    slidesPerView: 3,
    spaceBetween: 32,
  },

},
});



var swiperPrevious = new Swiper(".mySwiper-previous", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 32,
  },

  1144: {
    slidesPerView: 3,
    spaceBetween: 32,
  },

},
});


// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion() 