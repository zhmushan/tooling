import{_ as s,a as p}from"./Layout.vue_vue_type_script_setup_true_lang.d4718437.js";import{d as c,q as n,au as l,o as f,e as i,w as d,a as _,u as m}from"./index.5c2684bc.js";import"./Grid.1b0edf76.js";const x=c({__name:"Base64",setup(v){const o=n(),t=n(),a=n();l(()=>{a.value=!0});function u(e){a.value=!1,o.value=e,t.value=btoa(unescape(encodeURIComponent(e)))}function r(e){a.value=!1,t.value=e,o.value=decodeURIComponent(escape(atob(e)))}return(e,w)=>(f(),i(s,{"show-error":a.value,input:o.value,"onUpdate:input":u},{output:d(()=>[_(m(p),{value:t.value,type:"textarea",rows:"12",onInput:r},null,8,["value"])]),_:1},8,["show-error","input"]))}});export{x as default};