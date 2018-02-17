$(document).ready(function(){

  // Mobile Navigation
  $('#mobile-nav').click(function() {
    $('nav').addClass('open')
  });

  $('#mobile-close').click(function() {
      $('nav').removeClass('open');
  });

});
