(()=>{var e={959:()=>{{const e=document.getElementById("myRange"),t=document.getElementById("demo");t.innerHTML=e.value,e.oninput=function(){t.innerHTML=this.value}}},840:()=>{const e=document.querySelector(".dropdown__button"),t=document.querySelector(".dropdown__list"),o=document.querySelectorAll(".dropdown__list-item"),n=document.querySelector(".dropdown__input-hidden");console.log(o),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)}),e.addEventListener("click",(()=>{t.classList.toggle("dropdown__list-visible"),e.classList.toggle("dropdown__button-active")})),o.forEach((o=>{o.addEventListener("click",(o=>{o.stopPropagation();let r=o.target;console.log(r),document.querySelector(".dropdown__button").innerText=r.innerText,document.querySelector(".dropdown__button").focus(),n.value=r.dataset.value,t.classList.remove("dropdown__list-visible"),e.classList.remove("dropdown__button-active")}))})),document.addEventListener("click",(o=>{o.target!==e&&(t.classList.remove("dropdown__list-visible"),e.classList.remove("dropdown__button-active"))}));const r=document.querySelector(".header_burger_container"),c=document.querySelectorAll(".open_modal"),d=document.querySelector(".modal_order"),s=document.querySelector(".close_modal"),l=document.querySelector(".header_burger");function i(){d.classList.add("active")}document.getElementsByClassName("anchorMenu"),document.querySelector(".header"),r.addEventListener("click",(function(){document.body.classList.toggle("menu_opened"),l.classList.toggle("open");const e=t=>{"anchor anchorMenu"!==t.target.className&&"Escape"!==t.code||(document.body.classList.remove("menu_opened"),l.classList.remove("open"),document.removeEventListener("keydown",e))};document.body.addEventListener("click",e)}));for(let e=0;e<c.length;e++)c[e].addEventListener("click",i);s.addEventListener("click",(function(){d.classList.remove("active")}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(959),o(840)})()})();