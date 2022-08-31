import{_ as S}from"./Layout.vue_vue_type_script_setup_true_lang.d4718437.js";import{N as E}from"./Select.e347d797.js";import{d as B,q as o,aj as C,o as H,e as g,w as l,a as u,u as n,b as p,t as s,g as A}from"./index.5c2684bc.js";import"./Grid.1b0edf76.js";function k(){return new Worker("/tooling/assets/crypto.e09d9140.js")}const y=B({__name:"Crypto",setup(R){const f=new k;f.addEventListener("message",e=>{const{result:a,size:t,time:K}=e.data;m.value=a,v.value=t,c.value=K});const d=["BLAKE2B-256","BLAKE2B-384","BLAKE2B","BLAKE2S","BLAKE3","KECCAK-224","KECCAK-256","KECCAK-384","KECCAK-512","SHA-384","SHA3-224","SHA3-256","SHA3-384","SHA3-512","SHAKE128","SHAKE256","TIGER","RIPEMD-160","SHA-224","SHA-256","SHA-512","MD5","SHA-1"],i=o(),m=o(""),v=o(0),c=o(0),r=o("MD5");return C(()=>[i.value,r.value],async([e,a])=>{f.postMessage([e,a])}),(e,a)=>(H(),g(S,{input:i.value,"onUpdate:input":a[1]||(a[1]=t=>i.value=t)},{"input-header-extra":l(()=>[u(n(E),{value:r.value,"onUpdate:value":a[0]||(a[0]=t=>r.value=t),options:n(d).map(t=>({label:t,value:t})),"consistent-menu-width":!1},null,8,["value","options"])]),output:l(()=>[u(n(A),{class:"break-all"},{default:l(()=>[p(s(r.value)+": "+s(m.value),1)]),_:1}),u(n(A),{class:"break-all"},{default:l(()=>[p(s(e.$t("Size"))+": "+s(v.value/1024)+" "+s(e.$t("KB")),1)]),_:1}),u(n(A),{class:"break-all"},{default:l(()=>[p(s(e.$t("Time"))+": "+s(c.value)+" "+s(e.$t("ms")),1)]),_:1})]),_:1},8,["input"]))}});export{y as default};
