$(document).ready(function(){

  // Mobile Navigation
  // Open Nav
  $('#mobile-nav').click(function() {
    $('nav').addClass('open')
  });
  // Close Nav
  $('#mobile-close').click(function() {
      $('nav').removeClass('open');
  });

  $('#web-dev').hover(function() {

  });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

});

// Reveal Content on Scroll
 
window.sr = ScrollReveal();
sr.reveal('.boom');
