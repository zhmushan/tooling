import{_ as L}from"./Layout.2e65e7c2.js";import{c as w,r as _,w as g,o as n,f as d,i as e,j as s,g as a,Z as k,Q as p,a4 as m,T as v,S as h,a5 as x,p as B,B as r,a6 as N,C as c}from"./vendor.e10b7dca.js";const C={key:0},R=r("URL Parts"),U=r("Query String Params"),j=w({setup(V){const u=_(),o=_(),y=["protocol","host","pathname"];return g(u,async()=>{var i;o.value=new URL((i=u.value)!=null?i:"")}),(i,f)=>(n(),d(L,null,{input:e(()=>[s(a(k),{value:u.value,"onUpdate:value":f[0]||(f[0]=t=>u.value=t),type:"textarea",rows:"12"},null,8,["value"])]),output:e(()=>[o.value?(n(),p("section",C,[s(a(m),null,{default:e(()=>[R]),_:1}),s(a(x),null,{default:e(()=>[(n(),p(v,null,h(y,t=>s(a(N),{key:t},{prefix:e(()=>[r(c(t),1)]),default:e(()=>{var l;return[r(" "+c((l=o.value)==null?void 0:l[t]),1)]}),_:2},1024)),64))]),_:1}),s(a(m),null,{default:e(()=>[U]),_:1}),s(a(x),null,{default:e(()=>[(n(!0),p(v,null,h(Object.fromEntries(o.value.searchParams),(t,l)=>(n(),d(a(N),{key:l},{prefix:e(()=>[r(c(l),1)]),default:e(()=>[r(" "+c(t),1)]),_:2},1024))),128))]),_:1})])):B("",!0)]),_:1}))}});export{j as default};