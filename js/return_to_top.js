$(window).scroll(function() {
  if ($(this).scrollTop() >= 1800) {
      $('#return-to-top').fadeIn(500);
  } else {
      $('#return-to-top').fadeOut(500);
  }
});
