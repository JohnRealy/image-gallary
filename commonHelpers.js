import{S as u,i as p}from"./assets/vendor-f8d17ba3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc",d="https://api.unsplash.com";function m(s,r){const o={query:s,per_page:12,page:r,orientation:"portrait",client_id:f},n=new URLSearchParams(o);return fetch(`${d}/search/photos/?${n}`).then(e=>{if(!e.ok)throw new Error("Ups. Sthg wrong!");return e.json()})}function h(s){return s.map(r=>`<li class="gallery__item">
        <img src="${r.urls.small}" alt="${r.description}">
       </li>`).join("")}const g=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),c=document.querySelector(".js-backdrop");g.addEventListener("submit",L);const y={lines:9,length:28,width:21,radius:54,scale:1.1,corners:0,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"48%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},l=new u(y);function L(s){s.preventDefault(),S();const r=s.target["user-search-query"].value.trim();m(r,1).then(o=>{if(o.results.length===0)return a.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});a.innerHTML=h(o.results)}).catch(o=>{console.log(o)}).finally(()=>{q()})}function S(){l.spin(c),c.classList.remove("is-hidden")}function q(){l.stop(),c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map