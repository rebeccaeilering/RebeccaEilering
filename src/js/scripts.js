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
 
window.sr = ScrollReveal();
sr.reveal('.boom');

// Responsive Tables

const headertext = [],
headers = document.querySelectorAll("table th"),
tablerows = document.querySelectorAll("table th"),
tablebody = document.querySelector("table tbody");

for(let i = 0; i < headers.length; i++) {
  const current = headers[i];
  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
} 
for (let i = 0, row; row = tablebody.rows[i]; i++) {
  for (let j = 0, col; col = row.cells[j]; j++) {
    col.setAttribute("data-th", headertext[j]);
  } 
}

// Accordions

const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(button => {
  const expanded = button.getAttribute('aria-expanded');
  const num = button.getAttribute('id').split('-').pop();
  const associatedSection = document.getElementById(`accordion-section-${num}`);

  button.addEventListener('click', () => {
    button.classList.toggle('expanded');
    associatedSection.classList.toggle('open');
    if (button.classList.contains('expanded')) {
      button.setAttribute('aria-expanded', true);
      associatedSection.setAttribute('aria-hidden', false);
    } else {
      button.setAttribute('aria-expanded', false);
      associatedSection.setAttribute('aria-hidden', true);
    }
  });
});