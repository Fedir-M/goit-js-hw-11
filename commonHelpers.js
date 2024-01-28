import{i as d,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){const r="42031506-26545a7af84e6a92777e1df63",i="https://pixabay.com",a="/api/",e=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:9}),t=`${i}${a}?${e}`;return fetch(t).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:l,downloads:c})=>`<a class="gallery__card" href="${i}">
            <img class="gallery__img" src="${r}" alt="${a}"/>

            <ul class="card__text--list">
                    <li class="card__text--item">
                        <h2 class="card__item--title">Likes</h2>
                        <p class="card__item--value">${e}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Views</h2>
                        <p class="card__item--value">${t}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Comments</h2>
                        <p class="card__item--value">${l}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Downloads</h2>
                        <p class="card__item--value">${c}</p>
                    </li>
            </ul>
        </a> 
      `)}const s={formEl:document.querySelector(".input__form"),loader:document.querySelector(".loader"),loading:document.querySelector(".text__loading"),gallery:document.querySelector(".gallery")};s.formEl.addEventListener("submit",_);function _(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim();r!==""&&g(),m(r).then(i=>{if(i.totalHits===0)s.gallery.innerHTML="",d.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"topRight",progressBarColor:"white"}),n();else{n();const a=i.hits,e=f(a).join("");s.gallery.innerHTML="",s.gallery.insertAdjacentHTML("beforeend",e),new u(".gallery a").refresh()}}).catch(i=>console.log(i)).finally(()=>s.formEl.reset())}function g(){s.loader.classList.remove("isHidden"),s.loading.classList.remove("isHidden")}function n(){s.loader.classList.add("isHidden"),s.loading.classList.add("isHidden")}
//# sourceMappingURL=commonHelpers.js.map
