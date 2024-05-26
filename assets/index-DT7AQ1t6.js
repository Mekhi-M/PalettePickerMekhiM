(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();const U=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}],D=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},m=t=>{try{return JSON.parse(localStorage.getItem(t))}catch(e){return console.error(e),null}},O=t=>{localStorage.removeItem(t)},H=t=>{const{title:e,colors:r,temperature:n,uuid:o}=t,l=document.createElement("li"),d=document.createElement("h3"),s=document.createElement("div"),c=document.createElement("div"),k=document.createElement("p"),w=document.createElement("p"),p=document.createElement("button"),u=document.createElement("div"),E=document.createElement("p"),B=document.createElement("p"),C=document.createElement("button"),b=document.createElement("div"),L=document.createElement("p"),S=document.createElement("p"),y=document.createElement("button"),v=document.createElement("div"),h=document.createElement("button"),f=document.createElement("button"),g=document.createElement("button"),P=document.createElement("button"),T=document.createElement("p"),i=document.createElement("div");c.append(k,w),u.append(E,B),b.append(L,S),s.append(c,p,u,C,b,y),v.append(h,f,g),i.append(T),l.append(d,s,v,P,i),l.classList.add("column-flex-box","dark-gray-bg"),l.dataset.uuid=o,s.classList.add("grid-2-x-3"),c.classList.add("flex-box","white-black-border"),c.dataset.borderColor="white black black white",c.style.backgroundColor=`${r[0]}`,k.style.color="white",w.style.color="black",p.classList.add("copy-button"),p.dataset.colorHex=r[0],u.classList.add("flex-box","white-black-border"),u.dataset.borderColor="white black black white",u.style.backgroundColor=`${r[1]}`,E.style.color="white",B.style.color="black",C.classList.add("copy-button"),C.dataset.colorHex=r[1],b.classList.add("flex-box","white-black-border"),b.dataset.borderColor="white black black white",b.style.backgroundColor=`${r[2]}`,L.style.color="white",S.style.color="black",y.classList.add("copy-button"),y.dataset.colorHex=r[2],v.classList.add("flex-box"),h.classList.add("border-control"),h.dataset.borderColor="white",f.classList.add("border-control"),f.dataset.borderColor="white black black white",g.classList.add("border-control"),g.dataset.borderColor="black",P.classList.add("delete-button"),i.classList.add("flex-box"),n==="cool"&&(i.style.backgroundColor="blue"),n==="neutral"&&(i.style.backgroundColor="gray"),n==="warm"&&(i.style.backgroundColor="red"),d.textContent=e,k.textContent="White",w.textContent="Black",p.textContent=`Copy ${r[0]}`,E.textContent="White",B.textContent="Black",C.textContent=`Copy ${r[1]}`,L.textContent="White",S.textContent="Black",y.textContent=`Copy ${r[2]}`,h.textContent="White",f.textContent="W + B",g.textContent="Black",P.textContent="Delete This Palette",T.textContent=n,document.querySelector("#palettes-list").append(l)},q=()=>{m("palettes").length===0&&(console.log("The stored palette list was empty. Initializing standard palette list"),O("palettes")),m("palettes")||D("palettes",U),m("palettes").forEach(H)};let x;const W=new Uint8Array(16);function $(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(W)}const a=[];for(let t=0;t<256;++t)a.push((t+256).toString(16).slice(1));function A(t,e=0){return a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),I={randomUUID:N};function R(t,e,r){if(I.randomUUID&&!e&&!t)return I.randomUUID();t=t||{};const n=t.random||(t.rng||$)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,A(n)}const F=t=>{t.preventDefault();const e=t.target,r=e.paletteName.value,n=[e.colorOneHex.value,e.colorTwoHex.value,e.colorThreeHex.value],o=e.colorTemp.value,l=R(),d={title:r,colors:n,temperature:o,uuid:l};H(d);const s=m("palettes");s.push(d),D("palettes",s),e.reset();const c=document.querySelector("#palette-form button");c.textContent="Created a palette!!!",c.style.color="white",c.style.backgroundColor="green",setTimeout(()=>{c.textContent="Create a palette",c.style.color="black",c.style.backgroundColor="#afafaf"},1250)},K=t=>{if(!t.target.matches(".delete-button"))return;const e=t.target.closest("li"),r=m("palettes"),n=r.findIndex(l=>l.uuid===e.dataset.uuid);r.splice(n,1),D("palettes",r),e.remove();const o=document.querySelector("#palette-form button");o.textContent="Deleted a palette.",o.style.color="white",o.style.backgroundColor="red",setTimeout(()=>{o.textContent="Create a palette",o.style.color="black",o.style.backgroundColor="#afafaf"},1750)},V=t=>{if(!t.target.matches(".copy-button")||!navigator.clipboard)return;const e=t.target.closest("button"),r=e.dataset.colorHex;try{navigator.clipboard.writeText(r),e.textContent="Copied hex!",setTimeout(()=>e.textContent=`Copy ${r}`,1e3)}catch(n){console.error("Failed to copy.",n),e.textContent="Failed to copy.",setTimeout(()=>e.textContent=`Copy ${r}`,1e3)}},J=t=>{if(!t.target.matches(".border-control"))return;const r=t.target.closest("button").dataset.borderColor,n=t.target.closest("li").querySelectorAll(".grid-2-x-3 > div");r==="white"&&(n[0].dataset.borderColor==="black"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r}),n[0].dataset.borderColor==="white black black white"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r})),r==="white black black white"&&(n[0].dataset.borderColor==="white"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r}),n[0].dataset.borderColor==="black"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r})),r==="black"&&(n[0].dataset.borderColor==="white"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r}),n[0].dataset.borderColor==="white black black white"&&n.forEach(o=>{o.dataset.borderColor=r,o.style.borderColor=r}))},M=()=>{q(),document.querySelector("#palette-form").addEventListener("submit",F),document.querySelector("#palettes-list").addEventListener("click",K),document.querySelector("#palettes-list").addEventListener("click",V),document.querySelector("#palettes-list").addEventListener("click",J)};M();
