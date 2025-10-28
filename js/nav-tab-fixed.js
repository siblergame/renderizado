import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">newspaper</span>
    Form
   </a>

   <a ${resaltaSiEstasEn(["/secundaria.html"])} href="secundaria.html">
    <span class="material-symbols-outlined">person</span>
    Cliente
   </a>

   <a id="navtabfixed" ${resaltaSiEstasEn(["/navTabFixed.html"])}
     href="navTabFixed.html">
    <span class="material-symbols-outlined">storage</span>
    Servidor
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)