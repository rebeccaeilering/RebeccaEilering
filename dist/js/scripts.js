window.sr=ScrollReveal(),sr.reveal(".boom"),document.addEventListener("DOMContentLoaded",(function(){const t=location.pathname.split("/")[1];if(""===t)return;document.querySelectorAll("nav .a1").forEach(e=>{-1!==e.getAttribute("href").indexOf(t)&&e.classList.add("active")});const e=document.getElementById("mobile-nav"),s=document.querySelector("nav"),a=document.getElementById("mobile-close");e.addEventListener("click",(function(){s.classList.add("open"),this.classList.add("hide")})),a.addEventListener("click",(function(){s.classList.remove("open"),e.classList.remove("hide")}));const i=document.querySelectorAll(".has-children");let r=0;i.forEach(t=>{r++,t.innerHTML+=` <button id="nav-toggle-${r}"><i class="fas fa-plus-circle"></i></button>`}),document.querySelectorAll("nav button").forEach(t=>{const e=t.getAttribute("id").split("-").pop(),s=document.getElementById(`sl-${e}`);t.addEventListener("click",()=>{t.classList.toggle("expanded"),s.classList.toggle("open"),t.classList.contains("expanded")?t.innerHTML='<i class="fas fa-minus-circle"></i>':t.innerHTML='<i class="fas fa-plus-circle"></i>'})});document.querySelector("table");const n=[],c=document.querySelectorAll("table th"),l=(document.querySelectorAll("table th"),document.querySelector("table tbody"));for(let t=0;t<c.length;t++){const e=c[t];n.push(e.textContent.replace(/\r?\n|\r/,""))}for(let t,e=0;t=l.rows[e];e++)for(let e,s=0;e=t.cells[s];s++)e.setAttribute("data-th",n[s]);const o=document.querySelectorAll(".accordions");let d=0;if(o.forEach(t=>{d++,t.setAttribute("id",`accordionGroup-${d}`)}),document.querySelectorAll(".accordion-btn").forEach(t=>{const e=t.getAttribute("id").split("-").pop(),s=document.getElementById(`accordion-section-${e}`);t.addEventListener("click",()=>{t.classList.toggle("expanded"),s.classList.toggle("open"),t.classList.contains("expanded")?(t.setAttribute("aria-expanded",!0),s.setAttribute("aria-hidden",!1)):(t.setAttribute("aria-expanded",!1),s.setAttribute("aria-hidden",!0))})}),document.querySelectorAll(".tabs-container")){class t{constructor(t){this.container=document.querySelector(t),this.tablist=this.container.querySelector("[role=tablist]"),this.tabs=this.container.querySelectorAll("[role=tab]"),this.tabpanels=this.container.querySelectorAll("[role=tabpanel]"),this.activeTab=this.container.querySelector("[role=tab][aria-selected=true]"),this._addEventListeners()}_addEventListeners(){for(let t of this.tabs)t.addEventListener("click",e=>{e.preventDefault(),this.setActiveTab(t.getAttribute("aria-controls"))}),t.addEventListener("keyup",e=>{13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),this.setActiveTab(t.getAttribute("aria-controls")))});this.tablist.addEventListener("keyup",t=>{switch(t.keyCode){case 35:t.preventDefault(),this.setActiveTab(this.tabs[this.tabs.length-1].getAttribute("aria-controls"));break;case 36:t.preventDefault(),this.setActiveTab(this.tabs[0].getAttribute("aria-controls"));break;case 37:t.preventDefault();let e=[...this.tabs].indexOf(this.activeTab)-1;e=e>=0?e:this.tabs.length-1,this.setActiveTab(this.tabs[e].getAttribute("aria-controls"));break;case 39:t.preventDefault();let s=[...this.tabs].indexOf(this.activeTab)+1;s=s<this.tabs.length?s:0,this.setActiveTab(this.tabs[s].getAttribute("aria-controls"))}})}setActiveTab(t){for(let e of this.tabs)e.getAttribute("aria-controls")==t?(e.setAttribute("aria-selected","true"),e.focus(),this.activeTab=e):e.setAttribute("aria-selected","false");for(let e of this.tabpanels)e.getAttribute("id")==t?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}}new t("#tabs")}}));