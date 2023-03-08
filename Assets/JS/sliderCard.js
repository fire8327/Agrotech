const swiperPhoto = new Swiper('.swiperPhoto', {
    // Optional parameters
    loop: true,
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

  /* slider */
  const swiperHome = new Swiper('.swiperHome', {
    // Optional parameters
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperPhoto,
    },
    slidesPerView: 1,
  });

   $(".home").each((i,el) => {
    $(el).click(() => {
      $(".swiperHome").removeClass("hidden");
      $("#overlayHome").removeClass("hidden");
      $("body").addClass("overflow-hidden");
    });
  });
  $("#overlayHome").click(() => {
    $(".swiperHome").addClass("hidden");
    $("#overlayHome").addClass("hidden");
    $("body").removeClass("overflow-hidden");
  });
  $("#closeHome").click(() => {
    $(".swiperHome").addClass("hidden");
    $("#overlayHome").addClass("hidden");
    $("body").removeClass("overflow-hidden");
  });
  
const swiperVideo = new Swiper('.swiperVideo', {
    // Optional parameters
    loop: true,
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });