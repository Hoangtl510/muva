// pre-loader
setTimeout(function() {
  $('.header__preloader').addClass('show');
}, 1);

$('.menu__mobile').click(function(e) {
  $('.mobile__menu').toggleClass('show__menu');
  $('.overlay_container').toggleClass('menu_mobile_overlay');
  e.stopPropagation();
  e.stopImmediatePropagation();
})

// sticky header
let header = document.querySelector(".header__wrap");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

//product
var swiper = new Swiper(".mySwiper_product", {
  slidesPerView: 4,
  nav: true,
  dots: false,
  loop: true,
  margin: 25,
  items: 1,
  thumbs: false,
  smartSpeed: 1300,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  autoHeight: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});


//product__warp
$('.content__list').on( 'click', 'a', function() {
  var filter = $(this).attr('data-filter');
  
  $('.mySwiper__product .swiper-slide').css('display', 'none')
  $('.mySwiper__product .swiper-slide' + filter).css('display', '')
  $( '.content__list-item a' ).removeClass( 'filter-active' );
  $( this ).addClass( 'filter-active' );
  productSwiper.updateSize();
  productSwiper.updateSlides();
  productSwiper.updateProgress();
  productSwiper.updateSlidesClasses();
  productSwiper.slideTo(0);
  productSwiper.scrollbar.updateSize();
  return false;
});
//swiper__product
var productSwiper = new Swiper ('.mySwiper__product', {
  observer: true,
  spaceBetween: 20,
  runCallbacksOnInit: true,
  observer: true,
  smartSpeed: 5000,
  speed: 4000,
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 15,
      },
      768: {
          slidesPerView: 2.5,
      },
      992: {
          slidesPerView: 3.2,
      },
      1200: {
          slidesPerView: 3.8,
      },
      1400: {
          slidesPerView: 4.2,
      },
      1600: {
          slidesPerView: 4.5,
      }
  },
  spaceBetween: 30,
  scrollbarHide:false,
  updateOnImagesReady: true
})


// Offer
//Count Down
$('[data-countdown]').each(function () {
  var $this = $(this),
    finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function (event) {
    $this.html(event.strftime('<div class="cdown day"><span class="time-count">%-D</span> <p>Days</p></div> <div class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></div> <div class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></div> <div class="cdown second"><span class="time-count">%S</span> <p>secs</p></div>'));
  });
});

//owl-carousel
$('.offer__slider').owlCarousel({
  nav: false,
  dots: true,
  loop: true,
  margin: 15,
  items: 1,
  thumbs: false,
  smartSpeed: 1300,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  autoHeight: true,
});

//cta__wrap 
$('.odometer').appear(function () {
  var odo = $('.odometer');
  odo.each(function () {
      var countNumber = $(this).attr('data-count');
      $(this).html(countNumber);
  });
});

//testimonia
$('.testimonial__slider').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  items: 2,
  smartSpeed: 1300,
  responsive : {
    768 : {
      items: 2,
    },
    319 : {
      items: 1,
      margin: 0,
    },

}
});

//aos 
AOS.init({
  duration: 1500,
})