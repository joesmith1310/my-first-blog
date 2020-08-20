/* global $ */
/* eslint-env jquery */
$('document').ready(function () {
    $(function () {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    $('#navigation').waypoint(function (direction) {
      var nav = $('nav');
      if (direction == "down") {
          nav.hide();
          nav.addClass('sticky');
          nav.slideDown(200);
      } else {
          nav.removeClass('sticky');
      }
  }, {
      offset: '-150vh;'
  });
});