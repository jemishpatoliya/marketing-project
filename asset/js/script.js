var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        766: {
        slidesPerView: 2,
     },
    },
});