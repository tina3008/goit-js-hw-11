import{i as a,S as d}from"./assets/vendor-14c74d88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){c.innerHTML="";const o=r.hits;o.length||a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=o.map(e=>`<li class="img-blok">
        <a href="${e.largeImageURL}">     
    <img  src="${e.webformatURL}"
    data-source="${e.largeImageURL}"
    alt="${e.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${e.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${e.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${e.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${e.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");c.insertAdjacentHTML("beforeend",i),new d(".gallery a",{captionsData:"alt"}).refresh()}function h(){return fetch(u).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const c=document.querySelector("ul.gallery");let u;const m=document.querySelector("input"),p=document.querySelector("button");document.querySelector("form");let l;document.querySelector(".preloader");p.addEventListener("click",r=>{r.preventDefault(),l=m.value.trim(),l.length||(a.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),c.innerHTML=""),u=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`,window.onload=function(){document.body.classList.add("loaded"),h().then(i=>{f(i)}).catch(i=>{a.error({color:"red",message:"❌ Sorry, was mistake. Please try again!",position:"topRight"})}),document.body.classList.remove("loaded_hiding")}});
//# sourceMappingURL=commonHelpers.js.map
