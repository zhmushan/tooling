import{_ as S,N as E}from"./Layout.a6188b1c.js";import{N as B}from"./Select.b2d1ffb5.js";import{d as C,m as l,ao as H,o as _,e as g,w as t,a as o,u as s,g as i,b as c,t as r}from"./index.50896145.js";import"./Grid.885743b1.js";function k(){return new Worker("/tooling/assets/crypto.5fd47454.js",{type:"module"})}const L=C({name:"Crypto",setup(w){const m=new k;m.addEventListener("message",n=>{const{result:e,size:a,time:K}=n.data;v.value=e,A.value=a,f.value=K});const d=["BLAKE2B-256","BLAKE2B-384","BLAKE2B","BLAKE2S","BLAKE3","KECCAK-224","KECCAK-256","KECCAK-384","KECCAK-512","SHA-384","SHA3-224","SHA3-256","SHA3-384","SHA3-512","SHAKE128","SHAKE256","TIGER","RIPEMD-160","SHA-224","SHA-256","SHA-512","MD5","SHA-1"],p=l(),v=l(""),A=l(0),f=l(0),u=l("MD5");return H(()=>[p.value,u.value],async([n,e])=>{m.postMessage([n,e])}),(n,e)=>(_(),g(S,null,{"input-header-extra":t(()=>[o(s(B),{value:u.value,"onUpdate:value":e[0]||(e[0]=a=>u.value=a),options:s(d).map(a=>({label:a,value:a})),"consistent-menu-width":!1},null,8,["value","options"])]),input:t(()=>[o(s(E),{value:p.value,"onUpdate:value":e[1]||(e[1]=a=>p.value=a),type:"textarea",rows:"12"},null,8,["value"])]),output:t(()=>[o(s(i),{class:"break-all"},{default:t(()=>[c(r(u.value)+": "+r(v.value),1)]),_:1}),o(s(i),{class:"break-all"},{default:t(()=>[c("Size: "+r(A.value/1024)+" KB",1)]),_:1}),o(s(i),{class:"break-all"},{default:t(()=>[c("Time: "+r(f.value)+" ms",1)]),_:1})]),_:1}))}});export{L as default};
