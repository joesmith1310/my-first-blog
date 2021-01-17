/* global $ */
/* eslint-env jquery */
$('document').ready(function () {
    $(function () {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash), w = $(window).width(), offset;
          if (w > 450) {
            offset = 50;
          }
          else {
            offset = -50;
          }
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top + offset
            }, 1000);
            return false;
          }
        }
      });
    });

    $('#navigation').waypoint(function (direction) {
      var nav;
      if ($(window).width() > 450) {
        nav = $('nav');
      }
      else {
        nav = $('header');
      }
      if (direction == "down") {
          nav.hide();
          nav.addClass('sticky');
          nav.slideDown(200);
      } else {
          nav.removeClass('sticky');
      }
      }, {
        offset: '-150px'
    });

  /* Gallery */

    $('.gallery').each(function () {
      $(this).magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        //mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    });

  /* Dropdown box */

  $('.js--dropdown').click(function () {
    if ($(this).hasClass('disabled')) {
      return false;
    }
    
    $(this).addClass('disabled');
    var content = $(this).parent().children(".js--dropdown-content"), icon = $(this).parent().children('.js--dropdown-icon');
    content.slideToggle(500);
    if (icon.attr('name') === "chevron-forward-outline") {
      icon.addClass('animate__animated animate__rollOut animate__faster');
      icon.on('animationend', () => {
        icon.attr('name', "chevron-down-outline"); 
        icon.removeClass('animate__rollOut');
        icon.addClass('animate__rollIn');
        icon.on('animationend', () => {
          icon.removeClass('animate__rollIn')
          $(this).removeClass('disabled');
        });
      });
    } else {
      icon.addClass('animate__animated animate__rollOut');
      icon.on('animationend', () => {
        icon.attr('name', "chevron-forward-outline"); 
        icon.removeClass('animate__rollOut');
        icon.addClass('animate__rollIn');
        icon.on('animationend', () => {
          icon.removeClass('animate__rollIn')
          $(this).removeClass('disabled');
        });
      });
    }
    
  });

  $('.js--drop-menu-icon').click(function () {
    if ($(this).hasClass('disabled')) {
      return false;
    }
    $(this).addClass('disabled');
    var menu = $('.js--nav-list'), icon = $(this);
    menu.slideToggle(200);
    if (icon.attr('name') === "menu") {
      icon.addClass('animate__animated animate__rollOut animate__faster');
      icon.on('animationend', () => {
        icon.attr('name', "close"); 
        icon.removeClass('animate__rollOut');
        icon.addClass('animate__rollIn');
        icon.on('animationend', () => {
          icon.removeClass('animate__rollIn')
          $(this).removeClass('disabled');
        });
      });
    } else {
      icon.addClass('animate__rollOut');
      icon.on('animationend', () => {
        icon.attr('name', "menu"); 
        icon.removeClass('animate__rollOut');
        icon.addClass('animate__rollIn');
        icon.on('animationend', () => {
          icon.removeClass('animate__rollIn')
          $(this).removeClass('disabled');
        });
      });
    }
  }); 
});

