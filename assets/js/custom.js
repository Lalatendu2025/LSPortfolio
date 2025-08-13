$(document).ready(function () {
  // Swiper initialization
  const linkSwiper = new Swiper('.linkRoller .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    delay: 5000,
    disableOnInteraction: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  const myFabToolsSwiper = new Swiper('.myFabTools .swiper', {
   effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 5,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 10,
      stretch: 1,
      depth: 10,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      reverseDirection: false,
    },
  });
  const myCareerSwiper = new Swiper('.myCareer .col-sm-6:first-child .mcBody .swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 25,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    }
  });
  const myCareerSwiper1 = new Swiper('.myCareer .col-sm-6:last-child .mcBody .swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 25,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      reverseDirection: true,
    }
  });
  const clientReviewSwiper = new Swiper('.clientReviews .swiper', {
    // Optional parameters

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 3,
    spaceBetween: 25,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 10,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      reverseDirection: false,
    },
    navigation: {
      nextEl: '.clientReviews .swiper-button-next',
      prevEl: '.clientReviews .swiper-button-prev',
    },

  });

  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.winHgt').css('height', windowHeight / 1.5);
  };
  setHeight();

  $(window).resize(function () {
    setHeight();
  });


  /*Fixed header Start*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });
  /*Fixed header End*/


  /*Scroll To top Start*/

  $(".scrolltotop").hide();
  $(function toTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.scrolltotop').fadeIn();
      } else {
        $('.scrolltotop').fadeOut();
      }
    });

    $('.scrolltotop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  /*Scroll To top End*/

});