if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),a={module:{uri:n},exports:t,require:o};e[n]=Promise.all(r.map((s=>a[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AllTools.8121234a.js",revision:null},{url:"assets/Base64.b75b0557.js",revision:null},{url:"assets/crypto.e3ed19e5.js",revision:null},{url:"assets/Crypto.f5af4f12.js",revision:null},{url:"assets/DataFormats.51f31e2b.js",revision:null},{url:"assets/Grid.be6f24ff.js",revision:null},{url:"assets/GZip.cdc9ac5b.js",revision:null},{url:"assets/index.9fc5ba64.css",revision:null},{url:"assets/index.d4427e25.js",revision:null},{url:"assets/Layout.4aaabe12.js",revision:null},{url:"assets/QrCode.23bdda67.js",revision:null},{url:"assets/sd-streams-compression.esm.2095bd4a.js",revision:null},{url:"assets/Select.bc31ed1a.js",revision:null},{url:"assets/Url.bd148298.js",revision:null},{url:"assets/virtual_pwa-register.ae26fb7d.js",revision:null},{url:"index.html",revision:"290b910dea6341ca51617690b90d2871"},{url:"favicon.svg",revision:"5cd1d5ba26da1b28cf24739602e43722"},{url:"pwa-192x192.png",revision:"d5652ad9eef6461620a9bd465a379a3e"},{url:"pwa-512x512.png",revision:"07b6e9dc64b7b3680014c3fee8407907"},{url:"manifest.webmanifest",revision:"ff378007fa35fcfb09d2f293a19b896f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
