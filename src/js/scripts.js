document.getElementById('mobile-nav').addEventListener('click', function () {
  document.querySelector('nav').classList.add('open');
});

document.getElementById('mobile-close').addEventListener('click', function () {
  document.querySelector('nav').classList.remove('open');
});

$(document).ready(function(){
  $('[data-fancybox="gallery"]').fancybox({
  });
});
 
window.sr = ScrollReveal();
sr.reveal('.boom');
