!function(e){var s={};function t(n){if(s[n])return s[n].exports;var o=s[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)t.d(n,o,function(s){return e[s]}.bind(null,o));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){e.exports=t(2)},function(e,s,t){},function(e,s,t){"use strict";t.r(s);t(1);var n=document.querySelectorAll(".show-more"),o=document.querySelectorAll(".show-more__text"),r=document.querySelectorAll(".show-more__sign"),a=document.querySelectorAll(".swiper-slide");var i=document.querySelectorAll(".side-open"),c=document.querySelectorAll(".side-close"),l=document.querySelector(".icon-close-desktop"),d=document.querySelector(".menu-bar"),u=document.querySelector(".menu-bar__wrapper"),p=document.getElementById("call-bar"),b=document.getElementById("application-bar"),L=document.querySelector(".body"),f=document.querySelector(".body__wrapper");function _(){u.classList.remove("side-bar__wrapper--opened"),f.classList.remove("body__wrapper--bleary"),L.classList.remove("body--open")}function y(){p.classList.remove("side-bar__wrapper--opened"),f.classList.remove("body__wrapper--bleary"),l.classList.remove("icon-close-desktop--opened"),L.classList.remove("body--open"),d.classList.remove("menu-bar--bleary")}function m(){b.classList.remove("side-bar__wrapper--opened"),f.classList.remove("body__wrapper--bleary"),l.classList.remove("icon-close-desktop--opened"),L.classList.remove("body--open"),d.classList.remove("menu-bar--bleary")}function w(e){return new Swiper(e,{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",keyboard:!0,breakpoints:{768:{initialSlide:0,spaceBetween:0,enabled:!1}}})}n.forEach((function(e){e.addEventListener("click",(function(){!function(e){r.forEach((function(s){e.classList.contains("brand")&&s.classList.contains("brand")&&(s.classList.toggle("show-more__sign--reverse"),e.classList.toggle("showed")),e.classList.contains("tech")&&s.classList.contains("tech")&&(s.classList.toggle("show-more__sign--reverse"),e.classList.toggle("showed"))}))}(e),function(e){var s=function(s){return e.classList.contains("brand")&&s.classList.contains("brand")||e.classList.contains("tech")&&s.classList.contains("tech")};o.forEach((function(t){e.classList.contains("showed")?s(t)&&(t.textContent="Скрыть"):s(t)&&(t.textContent="Показать всё")}))}(e),function(e){a.forEach((function(s){e.classList.contains("brand")&&s.classList.contains("brand-hidden")&&s.classList.toggle("brands__swiper-slide--hidden"),e.classList.contains("tech")&&s.classList.contains("tech-hidden")&&s.classList.toggle("technics__swiper-slide--hidden")}))}(e)}))})),i.forEach((function(e){e.addEventListener("click",(function(s){s.stopPropagation(),function(e){e.classList.contains("burger")&&(u.classList.add("side-bar__wrapper--opened"),f.classList.add("body__wrapper--bleary"),L.classList.add("body--open")),e.classList.contains("call")&&(p.classList.add("side-bar__wrapper--opened"),l.classList.add("icon-close-desktop--opened"),f.classList.add("body__wrapper--bleary"),L.classList.add("body--open"),d.classList.add("menu-bar--bleary")),e.classList.contains("application")&&(b.classList.add("side-bar__wrapper--opened"),l.classList.add("icon-close-desktop--opened"),f.classList.add("body__wrapper--bleary"),L.classList.add("body--open"),d.classList.add("menu-bar--bleary"))}(e)}))})),c.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("burger")&&_(),e.classList.contains("call")&&y(),e.classList.contains("application")&&m()}))})),f.addEventListener("click",(function(){_(),y(),m()})),l.addEventListener("click",(function(){y(),m()})),w(".brands__swiper"),w(".technics__swiper"),w(".prices__swiper"),new Swiper(".page-nav",{slidesPerView:"auto",keyboard:!0,breakpoints:{1440:{initialSlide:0,spaceBetween:0,enabled:!1}}})}]);
//# sourceMappingURL=bundle.js.map