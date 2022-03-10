import{d as L,u as R,a as E,r as h,w as P,t as k,o as b,c as w,b as u,e as i,f as a,N,g as y,h as O,i as x,j as C,k as A,l as S,R as V,m as D,n as I,p as M,q as T,s as $,v as B,x as q,y as G,z as U}from"./vendor.4e92b5d5.js";const z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};z();const K=[["Generators",[["QR Code","Generate QR code based on the input."],["Crypto","Provides a series of cryptographic functions that I don't know if they are useful."]]],["Parsers",[["URL","Parse the URL to what you want it to look like."]]],["Encoders / Decoders",[["Base64","Encode and decode Base64 data."],["GZip","Compress or decompress text."]]]];const f={label:"All tools",key:"/all_tools"},_=new Map([[f.key,f.label]]),H=[f,...K.map(([l,s])=>{const n=g(l);return _.set(n,l),{type:"group",label:l,key:n,children:s.map(([o])=>{const e=g(`${l}_${o}`);return _.set(e,o),{label:o,key:e}})}})];function g(l){return`/${l.toLowerCase().replace(/[^a-z0-9]+/g,"_")}`}const Q=L({setup(l){const s=R().value==="dark"?E:void 0,n=h(),o=h();P(k(M(),"path"),t=>{n.value=t,o.value=_.get(t)});const e=t=>{var d;if((d=t.children)==null?void 0:d.length)return t.label;const{label:r,key:c}=t;return T($,{to:String(c!=null?c:"/")},{default:()=>r})};return(t,r)=>(b(),w(a(I),{theme:a(s)},{default:u(()=>[i(a(D),null,{default:u(()=>[i(a(N),null,{default:u(()=>[i(a(y),{position:"absolute","has-sider":""},{default:u(()=>[i(a(O),{bordered:"",width:240},{default:u(()=>[i(a(x),{value:n.value,options:H,"render-label":e,onUpdateValue:r[0]||(r[0]=(c,{label:d})=>o.value=String(d))},null,8,["value"])]),_:1}),i(a(y),{"content-style":"padding: 24px; display: flex; flex-direction: column; height: 100%; min-width: var(--panel-min-w)","native-scrollbar":!1},{default:u(()=>[i(a(C),null,{default:u(()=>[A(S(o.value),1)]),_:1}),i(a(V))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"]))}}),W="modulepreload",v={},j="/tooling/",p=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${j}${o}`,o in v)return;v[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":W,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((c,d)=>{r.addEventListener("load",c),r.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())},F=B({history:q("/tooling/"),routes:[{path:"/",redirect:"/all_tools"},{path:"/all_tools",component:()=>p(()=>import("./AllTools.234c29cc.js"),["assets/AllTools.234c29cc.js","assets/vendor.4e92b5d5.js"])},{path:"/generators_qr_code",component:()=>p(()=>import("./QrCode.927e0ed1.js"),["assets/QrCode.927e0ed1.js","assets/Layout.984c87e2.js","assets/vendor.4e92b5d5.js"])},{path:"/generators_crypto",component:()=>p(()=>import("./Crypto.242eb37f.js"),["assets/Crypto.242eb37f.js","assets/Layout.984c87e2.js","assets/vendor.4e92b5d5.js"])},{path:"/parsers_url",component:()=>p(()=>import("./Url.453665d6.js"),["assets/Url.453665d6.js","assets/Layout.984c87e2.js","assets/vendor.4e92b5d5.js"])},{path:"/encoders_decoders_gzip",component:()=>p(()=>import("./GZip.0b8727a6.js"),["assets/GZip.0b8727a6.js","assets/Layout.984c87e2.js","assets/vendor.4e92b5d5.js"])}]}),m=G(Q);m.use(U());m.use(F);m.mount("#app");export{K as m};
