import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const f=document.querySelector("input"),d=document.querySelector("button");document.querySelector("form");const h=document.querySelector("ul.gallery");let l;d.addEventListener("click",c=>{c.preventDefault(),l=f.value.trim(),l.length||a.error({color:"red",position:"topRight",message:"❌ Please fill in the field for search query."});const n=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;function i(){return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function t(e){console.log(e);const o=e.map(r=>`<a href="${r.largeImageURL}">     
    <img src="${r.webformatURL}" 
    alt="${r.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${r.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${r.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${r.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${r.downloads}</p>
  </li>
    </ul>
  </a>`).join("");h.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt"}).refresh()}i().then(e=>{t(e)}).catch(e=>{a.error({color:"red",position:"topRight",message:"❌ Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
