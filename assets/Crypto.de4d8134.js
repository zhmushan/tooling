import{_ as S,N as E}from"./Layout.da6e0704.js";import{N as B}from"./Select.97f5dae8.js";import{d as C,m as u,ap as H,o as g,e as k,w as l,a as n,u as o,g as i,b as m,t as s}from"./index.5b1a4f75.js";import"./Grid.ecadc899.js";function w(){return new Worker("/tooling/assets/crypto.5fd47454.js",{type:"module"})}const _=C({name:"Crypto",setup(y){const v=new w;v.addEventListener("message",e=>{const{result:a,size:t,time:K}=e.data;A.value=a,f.value=t,d.value=K});const c=["BLAKE2B-256","BLAKE2B-384","BLAKE2B","BLAKE2S","BLAKE3","KECCAK-224","KECCAK-256","KECCAK-384","KECCAK-512","SHA-384","SHA3-224","SHA3-256","SHA3-384","SHA3-512","SHAKE128","SHAKE256","TIGER","RIPEMD-160","SHA-224","SHA-256","SHA-512","MD5","SHA-1"],p=u(),A=u(""),f=u(0),d=u(0),r=u("MD5");return H(()=>[p.value,r.value],async([e,a])=>{v.postMessage([e,a])}),(e,a)=>(g(),k(S,null,{"input-header-extra":l(()=>[n(o(B),{value:r.value,"onUpdate:value":a[0]||(a[0]=t=>r.value=t),options:o(c).map(t=>({label:t,value:t})),"consistent-menu-width":!1},null,8,["value","options"])]),input:l(()=>[n(o(E),{value:p.value,"onUpdate:value":a[1]||(a[1]=t=>p.value=t),type:"textarea",rows:"12"},null,8,["value"])]),output:l(()=>[n(o(i),{class:"break-all"},{default:l(()=>[m(s(r.value)+": "+s(A.value),1)]),_:1}),n(o(i),{class:"break-all"},{default:l(()=>[m(s(e.$t("Size"))+": "+s(f.value/1024)+" "+s(e.$t("KB")),1)]),_:1}),n(o(i),{class:"break-all"},{default:l(()=>[m(s(e.$t("Time"))+": "+s(d.value)+" "+s(e.$t("ms")),1)]),_:1})]),_:1}))}});export{_ as default};
