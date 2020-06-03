//Mobile Nav Open/Close
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

// Mobile Nav Toggler
const hasChildren = document.querySelectorAll('.has-children');
let num1 = 0;
hasChildren.forEach(child => {
  num1++;
  child.innerHTML += ` <button id="nav-toggle-${num1}"><i class="fas fa-plus-circle"></i></button>`;
});

const navBtns = document.querySelectorAll('nav button');
navBtns.forEach(button => {
  const num = button.getAttribute('id').split('-').pop();
  const slSection = document.getElementById(`sl-${num}`);

  button.addEventListener('click', () => {
    button.classList.toggle('expanded');
    slSection.classList.toggle('open');
    if (button.classList.contains('expanded')) {
      button.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    } else {
      button.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    }
  });

});

// Responsive Tables
const tables = document.querySelector('table');
if (tables) {
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
}

// Accordions
const accordions = document.querySelectorAll('.accordions');
let num = 0;
if (accordions) {
  accordions.forEach(accordions => {
    num++;
    accordions.setAttribute('id', `accordionGroup-${num}`);
  });

  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach(button => {
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
}

// Tabs
const tabs = document.querySelectorAll('.tabs-container');
if(tabs) {
  class TabController {
    constructor(container) {
      this.container = document.querySelector(container);
      this.tablist = this.container.querySelector('[role=tablist]');
      this.tabs = this.container.querySelectorAll('[role=tab]');
      this.tabpanels = this.container.querySelectorAll('[role=tabpanel]');
      this.activeTab = this.container.querySelector('[role=tab][aria-selected=true]');
  
      this._addEventListeners();
    }
  
    // Private function to set event listeners
    _addEventListeners() {
      for (let tab of this.tabs) {
        tab.addEventListener('click', e => {
          e.preventDefault();
          this.setActiveTab(tab.getAttribute('aria-controls'));
        });
        tab.addEventListener('keyup', e => {
          if (e.keyCode == 13 || e.keyCode == 32) { // return or space
            e.preventDefault();
            this.setActiveTab(tab.getAttribute('aria-controls'));
          }
        })
      }
      this.tablist.addEventListener('keyup', e => {
        switch (e.keyCode) {
          case 35: // end key
            e.preventDefault();
            this.setActiveTab(this.tabs[this.tabs.length - 1].getAttribute('aria-controls'));
            break;
          case 36: // home key
            e.preventDefault();
            this.setActiveTab(this.tabs[0].getAttribute('aria-controls'));
            break;
          case 37: // left arrow
            e.preventDefault();
            let previous = [...this.tabs].indexOf(this.activeTab) - 1;
            previous = previous >= 0 ? previous : this.tabs.length - 1;
            this.setActiveTab(this.tabs[previous].getAttribute('aria-controls'));
            break;
          case 39: // right arrow
            e.preventDefault();
            let next = [...this.tabs].indexOf(this.activeTab) + 1;
            next = next < this.tabs.length ? next : 0
            this.setActiveTab(this.tabs[next].getAttribute('aria-controls'));
            break;
        }
      })
    }
  
    // Public function to set the tab by id
    setActiveTab(id) {
      for (let tab of this.tabs) {
        if (tab.getAttribute('aria-controls') == id) {
          tab.setAttribute('aria-selected', "true");
          tab.focus();
          this.activeTab = tab;
        } else {
          tab.setAttribute('aria-selected', "false");
        }
      }
      for (let tabpanel of this.tabpanels) {
        if (tabpanel.getAttribute('id') == id) {
          tabpanel.setAttribute('aria-expanded', "true");
        } else {
          tabpanel.setAttribute('aria-expanded', "false");
        }
      }
    }
  }
  
  const tabController = new TabController('#tabs');
}

//Scroll Reveal plugin
window.sr = ScrollReveal();
sr.reveal('.boom');
