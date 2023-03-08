const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    simulateTouch: false,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$.fn.classChange = function(cb) {
    return $(this).each((_, el) => {
      new MutationObserver(mutations => {
        mutations.forEach(mutation => cb && cb(mutation.target, $(mutation.target).prop(mutation.attributeName)));
      }).observe(el, {
        attributes: true,
        attributeFilter: ['class']
      });
    });
  };

$(".swiper-slide").classChange((el, newClass) => {
    let i = newClass;
    if(i.includes("swiper-slide-active")) {
        $('.swiper-slide-active').removeClass('opacity-0');
        setTimeout(function(){  $('.swiper-slide-active').find('.sliderDesc').removeClass('opacity-0') }, 800);
        setTimeout(function(){  $('.swiper-slide-active').find('.sliderImg').removeClass('translate-x-[1000px]') }, 1000);
    }
    else {
        $('.swiper-slide').addClass('opacity-0');
        $('.swiper-slide').find('.sliderDesc').addClass('opacity-0');
        setTimeout(function(){  $('.swiper-slide').find('.sliderImg').addClass('translate-x-[1000px]') }, 200);
    }
});
if($(".swiper-slide").hasClass('swiper-slide-active')) {
    $('.swiper-slide-active').removeClass('opacity-0');
    $('.swiper-slide-active').find('.sliderDesc').removeClass('opacity-0');
    $('.swiper-slide-active').find('.sliderImg').removeClass('translate-x-[1000px]');
};
