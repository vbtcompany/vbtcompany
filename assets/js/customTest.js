jQuery(document).ready(function ($) {
  'use strict';

  $(function () {
    $('#tabs').tabs();
  });

  // Page loading animation

  $('#preloader').animate(
    {
      opacity: '0',
    },
    600,
    function () {
      setTimeout(function () {
        $('#preloader').css('visibility', 'hidden').fadeOut();
      }, 300);
    },
  );

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $('header').addClass('background-header');
    } else {
      $('header').removeClass('background-header');
    }
  });
  if ($('.owl-testimonials').length) {
    $('.owl-testimonials').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });
  }
  if ($('.owl-partners').length) {
    $('.owl-partners').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 1000,
      autoplayTimeout: 1000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 4,
          margin: 30,
        },
      },
    });
  }

  $('.Modern-Slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  function visible(partial) {
    var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return (
      compareBottom <= viewBottom && compareTop >= viewTop && $t.is(':visible')
    );
  }

  $(window).scroll(function () {
    if (visible($('.count-digit'))) {
      if ($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');

      $('.count-digit').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          },
        );
      });
    }
  });
});

var projectState = 'hidden';

var colorTheme = 'dark';

function toggleProjects() {
  event.preventDefault();

  if (projectState == 'hidden') {
    $('#hiddenProjects').removeClass('d-none');
    $('#showProjectsBtn').html('Hide');
    projectState = 'not_hidden';
  } else {
    $('#hiddenProjects').addClass('d-none');
    $('#showProjectsBtn').html('Show All');

    projectState = 'hidden';
  }
}

var lightTheme = {
  MainColor: '#756f6f',
  white: '#ffffff',
  black: '#000',
  txt_default_color: '#1d1d1d',
  text_color_main: '#121212',
  text_color_sec: '#1d1d1d',
  text_color_inv: '#575757',
  dark_bg: '#fff',
  dark_surface_bg: '#ededed',
  dark_bg_trans: '#000000c1',
  call_back_btn_color: '#756f6f',
};

var darkTheme = {
  MainColor: '#756f6f',
  white: '#ffffff',
  black: '#000',
  txt_default_color: '#eeeeee',
  text_color_main: '#ededed',
  text_color_sec: '#d5d5d5',
  text_color_inv: '#afafaf',
  dark_bg: '#121212',
  dark_surface_bg: '#1d1d1d',
  dark_bg_trans: '#000000c1',
  call_back_btn_color: '#fff',
};

function toggleTheme() {
  if (colorTheme == 'dark') {
    document.documentElement.style.setProperty(
      '--MainColor',
      lightTheme.MainColor,
    );
    document.documentElement.style.setProperty('--white', lightTheme.white);
    document.documentElement.style.setProperty('--black', lightTheme.black);
    document.documentElement.style.setProperty(
      '--txt-default-color',
      lightTheme.txt_default_color,
    );
    document.documentElement.style.setProperty(
      '--text-color-main',
      lightTheme.text_color_main,
    );
    document.documentElement.style.setProperty(
      '--text-color-sec',
      lightTheme.text_color_sec,
    );
    document.documentElement.style.setProperty(
      '--text-color-inv',
      lightTheme.text_color_inv,
    );
    document.documentElement.style.setProperty('--dark-bg', lightTheme.dark_bg);
    document.documentElement.style.setProperty(
      '--dark-surface-bg',
      lightTheme.dark_surface_bg,
    );
    document.documentElement.style.setProperty(
      '--dark-bg-trans',
      lightTheme.dark_bg_trans,
    );
    document.documentElement.style.setProperty(
      '--call-back-btn-color',
      lightTheme.call_back_btn_color,
    );
    colorTheme = 'light';
  } else {
    document.documentElement.style.setProperty(
      '--MainColor',
      darkTheme.MainColor,
    );
    document.documentElement.style.setProperty('--white', darkTheme.white);
    document.documentElement.style.setProperty('--black', darkTheme.black);
    document.documentElement.style.setProperty(
      '--txt-default-color',
      darkTheme.txt_default_color,
    );
    document.documentElement.style.setProperty(
      '--text-color-main',
      darkTheme.text_color_main,
    );
    document.documentElement.style.setProperty(
      '--text-color-sec',
      darkTheme.text_color_sec,
    );
    document.documentElement.style.setProperty(
      '--text-color-inv',
      darkTheme.text_color_inv,
    );
    document.documentElement.style.setProperty('--dark-bg', darkTheme.dark_bg);
    document.documentElement.style.setProperty(
      '--dark-surface-bg',
      darkTheme.dark_surface_bg,
    );
    document.documentElement.style.setProperty(
      '--dark-bg-trans',
      darkTheme.dark_bg_trans,
    );
    document.documentElement.style.setProperty(
      '--call-back-btn-color',
      darkTheme.call_back_btn_color,
    );
    colorTheme = 'dark';
  }
}
