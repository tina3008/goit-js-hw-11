import{i as a,S as h}from"./assets/vendor-14c74d88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r){c.innerHTML="";const o=r.hits;o.length||a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const s=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");c.insertAdjacentHTML("beforeend",s),new h(".gallery a",{captionsData:"alt"}).refresh()}function p(){return fetch(d).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const c=document.querySelector("ul.gallery");let d;const y=document.querySelector("input"),g=document.querySelector("button");document.querySelector("form");let l;const u=document.querySelector(".preloader"),L=()=>{u.style.display="flex"},w=()=>{u.style.display="none"},f=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};g.addEventListener("click",async r=>{r.preventDefault(),l=y.value.trim(),l.length||(a.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),c.innerHTML=""),d=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`,L();try{const s=await p();m(s)}catch{a.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{w(),f()}});window.onload=f;
//# sourceMappingURL=commonHelpers.js.map
