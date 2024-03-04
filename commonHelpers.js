import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const h=document.querySelector("input"),m=document.querySelector("button");document.querySelector("form");const f=document.querySelector("gallery");let l;m.addEventListener("click",c=>{c.preventDefault(),l=h.value.trim(),l.length||u.error({color:"red",position:"topRight",message:"❌ Please fill in the field for search query."});const s=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;function i(){return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function t(e){const r=e.map(n=>`<a href="${n.largeImageURL}">
    <img src="${n.webformatURL}" 
    alt="image.tags">
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${n.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${views.likes}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${comments.likes}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${downloads.likes}</p>
  </li>
    </ul>
  </a>`).join("");f.insertAdjacentHTML("beforeend",r),f.insertAdjacentHTML("beforeend","imgGallery");const a=new d(".gallery",{captionsData:"alt"});a.on("show.simplelightbox",function(){}),a.refresh()}i().then(e=>{console.log(e),t(e)}).catch(e=>{u.error({color:"red",position:"topRight",message:"❌ Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
