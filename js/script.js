$(document).ready(function() {
      setTimeout(function() {
        $('.preloader').fadeOut('slow', function() {});
      }, 2000);
});

// MENU SCROLL ID FUNCTION

$(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1000);
});

// MENU LI SPAN ADDING (HOVER ANIMATION)
$('.menu ul li a').append('<span></span><span></span><span></span><span></span>');


// MENU AND LOGO ON SCROLL
$(window).scroll(function () {
    var the_top = $(document).scrollTop();
    if (the_top > 10) {
        $('.logo').addClass('fixed');
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
        $('.logo').removeClass('fixed');
    }
});

// MOBILE MENU ANIMATIONS

$('.btn-bars').click(function() {
    $('.btn-bars').toggleClass('toggle');
    $('.menu').toggleClass('visible');
})

// SCROLL LINE
$(window).scroll(function () {
    var wintop = $(window).scrollTop(),
        docheight = $(document).height(),
        winheight = $(window).height();
    var scrolled = (wintop / (docheight - winheight)) * 100;
    $('.scroll-line').css('width', (scrolled + '%'));
});

// HERO SLIDER
$('.hero').slick({
    fade: true
});

// CLIENTS SLIDER
$('.clients-slider').slick({
    doots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }]
  })
  