
// Get the button:

























//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   preloader  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}
// End preloader


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


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  swiper slide cards section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
// End card swiper


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< swipers slide testimonials section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var swiper = new Swiper(".mySwiper-1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-2',
  },
  
  loop: true,
  speed:900,
});
// End testimonial swiper


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  pure counter  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

new PureCounter();{
  delay:1000
};
// End pure counter


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  scroll to top button  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
// End Scroll top button