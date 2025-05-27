import{a as y,S as g,i as o}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="50418934-092a9418718642a9f59a6e549";function h(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(d,{params:r}).then(l=>l.data).catch(l=>l.message)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new g(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250});function E(s){const r=s.map(({largeImageURL:l,webformatURL:a,tags:e,likes:t,views:i,comments:m,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${t}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${i}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${m}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${f}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");c.innerHTML=r,L.refresh()}function w(){c.innerHTML=""}function S(){u.classList.remove("js-hidden")}function q(){u.classList.add("js-hidden")}const n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value.trim();if(r.length===0){o.error({title:"Error",message:"Please enter your request"});return}w(),S(),h(r).then(l=>{if(l.hits.length===0)throw new Error("Error");E(l.hits)}).catch(()=>o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>q()),n.reset()});
//# sourceMappingURL=index.js.map
