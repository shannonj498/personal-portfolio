
  // fade in .navbar
  $(function () {
      $(window).scroll(function () {

               // set distance user needs to scroll before we start fadeIn
          if ($(this).scrollTop() > 600) {
              $('#navbar').fadeIn(1000);
          } else {
              $('#navbar').fadeOut(1000);
          }
      });
  });
