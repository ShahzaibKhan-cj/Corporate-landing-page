
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Aos initialization  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});
// End AOS


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  swiper partner  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var swiper1 = new Swiper(".mySwiper", {
   loop: true,
  speed:900,
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  autoplay: {
    delay: 1600,
    disableOnInteraction: false,
  },
 
  pagination: {
    el: '.swiper-pagination',
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 4
    },
    
    1200: {
      slidesPerView: 5
    }
  }
});
// End swiper partner




