var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1,
  // spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {

    992: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
 
  },
});