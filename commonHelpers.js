import{S as c,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.getElementById("search-form"),f=document.getElementById("gallery");var s=document.querySelector(".loader"),i=new c(".gallery a",{captionsData:"alt",captionDelay:5e3,className:"modal-window-style"});s.style.display="none";m.addEventListener("submit",function(l){l.preventDefault(),s.style.display="block";const r=document.getElementById("search-input").value;fetch(`https://pixabay.com/api/?key=41657052-3a9eaf34218752c6e4cd1bc6a&safesearch=true&orientation=horizontal&image_type=photo&per_page=90&q=${encodeURIComponent(r)}`).then(o=>o.json()).then(o=>{if(o.hits.length>0){const n=o.hits.map(e=>`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
        </li>`);f.innerHTML=n.join(""),i.on("show.simplelightbox",function(e){}),s.style.display="none"}else d.info({transitionIn:"fadeInLeft",theme:"dark",messageColor:"#FAFAFB",backgroundColor:"#B51B1B",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.style.display="none";i.refresh()}).catch(o=>console.error(o))});
//# sourceMappingURL=commonHelpers.js.map
