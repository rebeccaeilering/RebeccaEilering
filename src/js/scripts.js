const mobileNav = document.getElementById('mobile-nav');
const nav = document.querySelector('nav');
const mobileClose = document.getElementById('mobile-close')

mobileNav.addEventListener('click', function() {
  nav.classList.add('open');
  this.classList.add('hide');
});

mobileClose.addEventListener('click', function() {
  nav.classList.remove('open');
  mobileNav.classList.remove('hide');
});

$(document).ready(function(){
  $('[data-fancybox="gallery"]').fancybox({
  });
});
 
window.sr = ScrollReveal();
sr.reveal('.boom');