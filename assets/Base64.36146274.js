import{_ as f}from"./Layout.13a8ec3b.js";import{c as v,r as u,$ as i,o as d,f as _,w as n,i as r,g as s,Z as l}from"./vendor.16f131e3.js";const C=v({setup(m){const a=u(),t=u(),o=u();i(()=>{o.value=!0});function c(e){o.value=!1,a.value=e,t.value=btoa(unescape(encodeURIComponent(e)))}function p(e){o.value=!1,t.value=e,a.value=decodeURIComponent(escape(atob(e)))}return(e,w)=>(d(),_(f,{"show-error":o.value},{input:n(()=>[r(s(l),{value:a.value,type:"textarea",rows:"12",onInput:c},null,8,["value"])]),output:n(()=>[r(s(l),{value:t.value,type:"textarea",rows:"12",onInput:p},null,8,["value"])]),_:1},8,["show-error"]))}});export{C as default};
