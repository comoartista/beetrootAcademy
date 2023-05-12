// var swiper = new Swiper(".mySwiper", {
//   // slidesPerView: 1,
//   // spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {

//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },

//     992: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//     },
 
//   },
// });


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

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion__header');
  const content = item.querySelector('.accordion__content');
  const arrow = item.querySelector('.accordion__icon');


  header.addEventListener('click', () => {
    content.classList.toggle('active');
    arrow.classList.toggle('active');

  });
});