import{d as ce,ay as xt,az as St,y as Ie,aA as Jt,aB as Qt,j as M,q as O,x as Ve,aC as lt,k as s,C as eo,V as ht,aD as We,H as to,p as He,aq as st,ax as oo,aE as ft,aF as kt,S as E,U as _,T as ie,m as ct,a6 as fe,i as dt,O as no,a8 as Be,_ as Rt,aG as lo,ad as X,aH as ut,aI as zt,aJ as ze,a4 as J,al as Se,aK as Tt,A as ne,aL as ro,aj as Me,z as rt,aM as io,aa as it,$ as ao,ap as so,Z as co,aN as uo,ac as Qe,aO as je,a0 as ho,aP as fo,a3 as U,a7 as vo,a9 as go,h as bo,as as de,aQ as vt,aR as po,J as mo,aS as Co,aT as yo,F as wo,an as gt,aU as xo,ao as So,aV as ko,aW as at,aX as Ro,aY as zo,aZ as To,K as Fo,v as Oo,a_ as bt,a$ as Po,b0 as Mo,b1 as Io,b2 as Bo}from"./index.4357eca4.js";import{u as Ft,N as _o}from"./Layout.ad30e8cb.js";function $o(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function et(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}function pt(e){return e&-e}class Eo{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let r=0;r<n+1;++r)i[r]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:r}=this;for(n+=1;n<=i;)r[n]+=o,n+=pt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*i;for(;n>0;)c+=o[n],n-=pt(n);return c}getBound(n){let o=0,i=this.l;for(;i>o;){const r=Math.floor((o+i)/2),c=this.sum(r);if(c>n){i=r;continue}else if(c<n){if(o===r)return this.sum(o+1)<=n?o+1:r;o=r}else return r}return o}}let De;function Ao(){return De===void 0&&("matchMedia"in window?De=window.matchMedia("(pointer:coarse)").matches:De=!1),De}let tt;function mt(){return tt===void 0&&(tt="chrome"in window?window.devicePixelRatio:1),tt}const No=We(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[We("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[We("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var Lo=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=xt();No.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:St,ssr:n}),Ie(()=>{const{defaultScrollIndex:v,defaultScrollKey:b}=e;v!=null?h({index:v}):b!=null&&h({key:b})});let o=!1,i=!1;Jt(()=>{if(o=!1,!i){i=!0;return}h({top:S.value,left:m})}),Qt(()=>{o=!0,i||(i=!0)});const r=M(()=>{const v=new Map,{keyField:b}=e;return e.items.forEach((P,W)=>{v.set(P[b],W)}),v}),c=O(null),u=O(void 0),l=new Map,w=M(()=>{const{items:v,itemSize:b,keyField:P}=e,W=new Eo(v.length,b);return v.forEach((j,D)=>{const A=j[P],K=l.get(A);K!==void 0&&W.add(D,K)}),W}),y=O(0);let m=0;const S=O(0),z=Ve(()=>Math.max(w.value.getBound(S.value-lt(e.paddingTop))-1,0)),C=M(()=>{const{value:v}=u;if(v===void 0)return[];const{items:b,itemSize:P}=e,W=z.value,j=Math.min(W+Math.ceil(v/P+1),b.length-1),D=[];for(let A=W;A<=j;++A)D.push(b[A]);return D}),h=(v,b)=>{if(typeof v=="number"){R(v,b,"auto");return}const{left:P,top:W,index:j,key:D,position:A,behavior:K,debounce:a=!0}=v;if(P!==void 0||W!==void 0)R(P,W,K);else if(j!==void 0)x(j,K,a);else if(D!==void 0){const g=r.value.get(D);g!==void 0&&x(g,K,a)}else A==="bottom"?R(0,Number.MAX_SAFE_INTEGER,K):A==="top"&&R(0,0,K)};let k,F=null;function x(v,b,P){const{value:W}=w,j=W.sum(v)+lt(e.paddingTop);if(!P)c.value.scrollTo({left:0,top:j,behavior:b});else{k=v,F!==null&&window.clearTimeout(F),F=window.setTimeout(()=>{k=void 0,F=null},16);const{scrollTop:D,offsetHeight:A}=c.value;if(j>D){const K=W.get(v);j+K<=D+A||c.value.scrollTo({left:0,top:j+K-A,behavior:b})}else c.value.scrollTo({left:0,top:j,behavior:b})}}function R(v,b,P){c.value.scrollTo({left:v,top:b,behavior:P})}function V(v,b){var P,W,j;if(o||e.ignoreItemResize||oe(b.target))return;const{value:D}=w,A=r.value.get(v),K=D.get(A),a=(j=(W=(P=b.borderBoxSize)===null||P===void 0?void 0:P[0])===null||W===void 0?void 0:W.blockSize)!==null&&j!==void 0?j:b.contentRect.height;if(a===K)return;a-e.itemSize===0?l.delete(v):l.set(v,a-e.itemSize);const N=a-K;if(N===0)return;D.add(A,N);const ee=c.value;if(ee!=null){if(k===void 0){const ae=D.sum(A);ee.scrollTop>ae&&ee.scrollBy(0,N)}else if(A<k)ee.scrollBy(0,N);else if(A===k){const ae=D.sum(A);a+ae>ee.scrollTop+ee.offsetHeight&&ee.scrollBy(0,N)}le()}y.value++}const Z=!Ao();let q=!1;function H(v){var b;(b=e.onScroll)===null||b===void 0||b.call(e,v),(!Z||!q)&&le()}function G(v){var b;if((b=e.onWheel)===null||b===void 0||b.call(e,v),Z){const P=c.value;if(P!=null){if(v.deltaX===0&&(P.scrollTop===0&&v.deltaY<=0||P.scrollTop+P.offsetHeight>=P.scrollHeight&&v.deltaY>=0))return;v.preventDefault(),P.scrollTop+=v.deltaY/mt(),P.scrollLeft+=v.deltaX/mt(),le(),q=!0,to(()=>{q=!1})}}}function Q(v){if(o||oe(v.target)||v.contentRect.height===u.value)return;u.value=v.contentRect.height;const{onResize:b}=e;b!==void 0&&b(v)}function le(){const{value:v}=c;v!=null&&(S.value=v.scrollTop,m=v.scrollLeft)}function oe(v){let b=v;for(;b!==null;){if(b.style.display==="none")return!0;b=b.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:M(()=>{const{itemResizable:v}=e,b=He(w.value.sum());return y.value,[e.itemsStyle,{boxSizing:"content-box",height:v?"":b,minHeight:v?b:"",paddingTop:He(e.paddingTop),paddingBottom:He(e.paddingBottom)}]}),visibleItemsStyle:M(()=>(y.value,{transform:`translateY(${He(w.value.sum(z.value))})`})),viewportItems:C,listElRef:c,itemsElRef:O(null),scrollTo:h,handleListResize:Q,handleListScroll:H,handleListWheel:G,handleItemResize:V}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return s(ht,{onResize:this.handleListResize},{default:()=>{var r,c;return s("div",eo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(u=>{const l=u[n],w=o.get(l),y=this.$slots.default({item:u,index:w})[0];return e?s(ht,{key:l,onResize:m=>this.handleItemResize(l,m)},{default:()=>y}):(y.key=l,y)})})]):(c=(r=this.$slots).empty)===null||c===void 0?void 0:c.call(r)])}})}});const xe="v-hidden",Ho=We("[v-hidden]",{display:"none!important"});var Ct=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=O(null),i=O(null);function r(){const{value:u}=o,{getCounter:l,getTail:w}=e;let y;if(l!==void 0?y=l():y=i.value,!u||!y)return;y.hasAttribute(xe)&&y.removeAttribute(xe);const{children:m}=u,S=u.offsetWidth,z=[],C=n.tail?w==null?void 0:w():null;let h=C?C.offsetWidth:0,k=!1;const F=u.children.length-(n.tail?1:0);for(let R=0;R<F-1;++R){if(R<0)continue;const V=m[R];if(k){V.hasAttribute(xe)||V.setAttribute(xe,"");continue}else V.hasAttribute(xe)&&V.removeAttribute(xe);const Z=V.offsetWidth;if(h+=Z,z[R]=Z,h>S){const{updateCounter:q}=e;for(let H=R;H>=0;--H){const G=F-1-H;q!==void 0?q(G):y.textContent=`${G}`;const Q=y.offsetWidth;if(h-=z[H],h+Q<=S||H===0){k=!0,R=H-1,C&&(R===-1?(C.style.maxWidth=`${S-Q}px`,C.style.boxSizing="border-box"):C.style.maxWidth="");break}}}}const{onUpdateOverflow:x}=e;k?x!==void 0&&x(!0):(x!==void 0&&x(!1),y.setAttribute(xe,""))}const c=xt();return Ho.mount({id:"vueuc/overflow",head:!0,anchorMetaName:St,ssr:c}),Ie(r),{selfRef:o,counterRef:i,sync:r}},render(){const{$slots:e}=this;return st(this.sync),s("div",{class:"v-overflow",ref:"selfRef"},[oo(e,"default"),e.counter?e.counter():s("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Ot(e,n){n&&(Ie(()=>{const{value:o}=e;o&&ft.registerHandler(o,n)}),kt(()=>{const{value:o}=e;o&&ft.unregisterHandler(o)}))}var Do=ce({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Vo=ce({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Wo=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),jo=E("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ie("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const Ko=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var Uo=ce({name:"Empty",props:Ko,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ct(e),i=fe("Empty","-empty",jo,lo,e,n),{localeRef:r}=Ft("Empty"),c=dt(no,null),u=M(()=>{var m,S,z;return(m=e.description)!==null&&m!==void 0?m:(z=(S=c==null?void 0:c.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||z===void 0?void 0:z.description}),l=M(()=>{var m,S;return((S=(m=c==null?void 0:c.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>s(Vo,null))}),w=M(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:S},self:{[X("iconSize",m)]:z,[X("fontSize",m)]:C,textColor:h,iconColor:k,extraTextColor:F}}=i.value;return{"--n-icon-size":z,"--n-font-size":C,"--n-bezier":S,"--n-text-color":h,"--n-icon-color":k,"--n-extra-text-color":F}}),y=o?Be("empty",M(()=>{let m="";const{size:S}=e;return m+=S[0],m}),w,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:l,localizedDescription:M(()=>u.value||r.value.description),cssVars:o?void 0:w,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s(Rt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}});function qo(e,n){return s(zt,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Rt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>s(Do)}):null})}var yt=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:r,renderLabelRef:c,renderOptionRef:u,labelFieldRef:l,valueFieldRef:w,showCheckmarkRef:y,nodePropsRef:m,handleOptionClick:S,handleOptionMouseEnter:z}=dt(ut),C=Ve(()=>{const{value:x}=o;return x?e.tmNode.key===x.key:!1});function h(x){const{tmNode:R}=e;R.disabled||S(x,R)}function k(x){const{tmNode:R}=e;R.disabled||z(x,R)}function F(x){const{tmNode:R}=e,{value:V}=C;R.disabled||V||z(x,R)}return{multiple:i,isGrouped:Ve(()=>{const{tmNode:x}=e,{parent:R}=x;return R&&R.rawNode.type==="group"}),showCheckmark:y,nodeProps:m,isPending:C,isSelected:Ve(()=>{const{value:x}=n,{value:R}=i;if(x===null)return!1;const V=e.tmNode.rawNode[w.value];if(R){const{value:Z}=r;return Z.has(V)}else return x===V}),labelField:l,renderLabel:c,renderOption:u,handleMouseMove:F,handleMouseEnter:k,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:r,showCheckmark:c,nodeProps:u,renderOption:l,renderLabel:w,handleClick:y,handleMouseEnter:m,handleMouseMove:S}=this,z=qo(o,e),C=w?[w(n,o),c&&z]:[ze(n[this.labelField],n,o),c&&z],h=u==null?void 0:u(n),k=s("div",Object.assign({},h,{class:[`${e}-base-select-option`,n.class,h==null?void 0:h.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:c}],style:[(h==null?void 0:h.style)||"",n.style||""],onClick:et([y,h==null?void 0:h.onClick]),onMouseenter:et([m,h==null?void 0:h.onMouseenter]),onMousemove:et([S,h==null?void 0:h.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},C));return n.render?n.render({node:k,option:n,selected:o}):l?l({node:k,option:n,selected:o}):k}}),wt=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=dt(ut);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:r}}=this,c=i==null?void 0:i(r),u=n?n(r,!1):ze(r[this.labelField],r,!1),l=s("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),u);return r.render?r.render({node:l,option:r}):o?o({node:l,option:r,selected:!1}):l}}),Go=E("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[E("scrollbar",`
 max-height: var(--n-height);
 `),E("virtual-list",`
 max-height: var(--n-height);
 `),E("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),E("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),E("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),E("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[J("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ie("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ie("&:active",`
 color: var(--n-option-text-color-pressed);
 `),J("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),J("pending",[ie("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),J("selected",`
 color: var(--n-option-text-color-active);
 `,[ie("&::before",`
 background-color: var(--n-option-color-active);
 `),J("pending",[ie("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),J("disabled",`
 cursor: not-allowed;
 `,[Se("selected",`
 color: var(--n-option-text-color-disabled);
 `),J("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Tt({enterScale:"0.5"})])])]),Yo=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=fe("InternalSelectMenu","-internal-select-menu",Go,ro,e,ne(e,"clsPrefix")),o=O(null),i=O(null),r=O(null),c=M(()=>e.treeMate.getFlattenedNodes()),u=M(()=>uo(c.value)),l=O(null);function w(){const{treeMate:a}=e;let g=null;const{value:N}=e;N===null?g=a.getFirstAvailableNode():(e.multiple?g=a.getNode((N||[])[(N||[]).length-1]):g=a.getNode(N),(!g||g.disabled)&&(g=a.getFirstAvailableNode())),v(g||null)}function y(){const{value:a}=l;a&&!e.treeMate.getNode(a.key)&&(l.value=null)}let m;Me(()=>e.show,a=>{a?m=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?w():y(),st(b)):y()},{immediate:!0}):m==null||m()},{immediate:!0}),kt(()=>{m==null||m()});const S=M(()=>lt(n.value.self[X("optionHeight",e.size)])),z=M(()=>Qe(n.value.self[X("padding",e.size)])),C=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),h=M(()=>{const a=c.value;return a&&a.length===0});function k(a){const{onToggle:g}=e;g&&g(a)}function F(a){const{onScroll:g}=e;g&&g(a)}function x(a){var g;(g=r.value)===null||g===void 0||g.sync(),F(a)}function R(){var a;(a=r.value)===null||a===void 0||a.sync()}function V(){const{value:a}=l;return a||null}function Z(a,g){g.disabled||v(g,!1)}function q(a,g){g.disabled||k(g)}function H(a){var g;je(a,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,a)}function G(a){var g;je(a,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,a)}function Q(a){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,a),!e.focusable&&a.preventDefault()}function le(){const{value:a}=l;a&&v(a.getNext({loop:!0}),!0)}function oe(){const{value:a}=l;a&&v(a.getPrev({loop:!0}),!0)}function v(a,g=!1){l.value=a,g&&b()}function b(){var a,g;const N=l.value;if(!N)return;const ee=u.value(N.key);ee!==null&&(e.virtualScroll?(a=i.value)===null||a===void 0||a.scrollTo({index:ee}):(g=r.value)===null||g===void 0||g.scrollTo({index:ee,elSize:S.value}))}function P(a){var g,N;!((g=o.value)===null||g===void 0)&&g.contains(a.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,a))}function W(a){var g,N;!((g=o.value)===null||g===void 0)&&g.contains(a.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,a)}rt(ut,{handleOptionMouseEnter:Z,handleOptionClick:q,valueSetRef:C,pendingTmNodeRef:l,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),rt(io,o),Ie(()=>{const{value:a}=r;a&&a.sync()});const j=M(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:g},self:{height:N,borderRadius:ee,color:ae,groupHeaderTextColor:me,actionDividerColor:Ce,optionTextColorPressed:ge,optionTextColor:ve,optionTextColorDisabled:ue,optionTextColorActive:re,optionOpacityDisabled:be,optionCheckColor:he,actionTextColor:Te,optionColorPending:ye,optionColorActive:we,loadingColor:Fe,loadingSize:Oe,optionColorActivePending:Pe,[X("optionFontSize",a)]:ke,[X("optionHeight",a)]:Re,[X("optionPadding",a)]:se}}=n.value;return{"--n-height":N,"--n-action-divider-color":Ce,"--n-action-text-color":Te,"--n-bezier":g,"--n-border-radius":ee,"--n-color":ae,"--n-option-font-size":ke,"--n-group-header-text-color":me,"--n-option-check-color":he,"--n-option-color-pending":ye,"--n-option-color-active":we,"--n-option-color-active-pending":Pe,"--n-option-height":Re,"--n-option-opacity-disabled":be,"--n-option-text-color":ve,"--n-option-text-color-active":re,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":ge,"--n-option-padding":se,"--n-option-padding-left":Qe(se,"left"),"--n-option-padding-right":Qe(se,"right"),"--n-loading-color":Fe,"--n-loading-size":Oe}}),{inlineThemeDisabled:D}=e,A=D?Be("internal-select-menu",M(()=>e.size[0]),j,e):void 0,K={selfRef:o,next:le,prev:oe,getPendingTmNode:V};return Ot(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:i,scrollbarRef:r,itemSize:S,padding:z,flattenedNodes:c,empty:h,virtualListContainer(){const{value:a}=i;return a==null?void 0:a.listElRef},virtualListContent(){const{value:a}=i;return a==null?void 0:a.itemsElRef},doScroll:F,handleFocusin:P,handleFocusout:W,handleKeyUp:H,handleKeyDown:G,handleMouseDown:Q,handleVirtualListResize:R,handleVirtualListScroll:x,cssVars:D?void 0:j,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},K)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:r,onRender:c}=this;return c==null||c(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,r,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(ao,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},co(e.empty,()=>[s(Uo,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):s(so,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?s(Lo,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?s(wt,{key:u.key,clsPrefix:o,tmNode:u}):u.ignored?null:s(yt,{clsPrefix:o,key:u.key,tmNode:u})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?s(wt,{key:u.key,clsPrefix:o,tmNode:u}):s(yt,{clsPrefix:o,key:u.key,tmNode:u})))}),it(e.action,u=>u&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},u),s(Wo,{onFocus:this.onTabOut,key:"focus-detector"})]))}});const Zo=e=>{const{textColor2:n,primaryColorHover:o,primaryColorPressed:i,primaryColor:r,infoColor:c,successColor:u,warningColor:l,errorColor:w,baseColor:y,borderColor:m,opacityDisabled:S,tagColor:z,closeIconColor:C,closeIconColorHover:h,closeIconColorPressed:k,borderRadiusSmall:F,fontSizeMini:x,fontSizeTiny:R,fontSizeSmall:V,fontSizeMedium:Z,heightMini:q,heightTiny:H,heightSmall:G,heightMedium:Q,closeColorHover:le,closeColorPressed:oe,buttonColor2Hover:v,buttonColor2Pressed:b,fontWeightStrong:P}=e;return Object.assign(Object.assign({},fo),{closeBorderRadius:F,heightTiny:q,heightSmall:H,heightMedium:G,heightLarge:Q,borderRadius:F,opacityDisabled:S,fontSizeTiny:x,fontSizeSmall:R,fontSizeMedium:V,fontSizeLarge:Z,fontWeightStrong:P,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:y,colorCheckable:"#0000",colorHoverCheckable:v,colorPressedCheckable:b,colorChecked:r,colorCheckedHover:o,colorCheckedPressed:i,border:`1px solid ${m}`,textColor:n,color:z,colorBordered:"rgb(250, 250, 252)",closeIconColor:C,closeIconColorHover:h,closeIconColorPressed:k,closeColorHover:le,closeColorPressed:oe,borderPrimary:`1px solid ${U(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:U(r,{alpha:.12}),colorBorderedPrimary:U(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:U(r,{alpha:.12}),closeColorPressedPrimary:U(r,{alpha:.18}),borderInfo:`1px solid ${U(c,{alpha:.3})}`,textColorInfo:c,colorInfo:U(c,{alpha:.12}),colorBorderedInfo:U(c,{alpha:.1}),closeIconColorInfo:c,closeIconColorHoverInfo:c,closeIconColorPressedInfo:c,closeColorHoverInfo:U(c,{alpha:.12}),closeColorPressedInfo:U(c,{alpha:.18}),borderSuccess:`1px solid ${U(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:U(u,{alpha:.12}),colorBorderedSuccess:U(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:U(u,{alpha:.12}),closeColorPressedSuccess:U(u,{alpha:.18}),borderWarning:`1px solid ${U(l,{alpha:.35})}`,textColorWarning:l,colorWarning:U(l,{alpha:.15}),colorBorderedWarning:U(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:U(l,{alpha:.12}),closeColorPressedWarning:U(l,{alpha:.18}),borderError:`1px solid ${U(w,{alpha:.23})}`,textColorError:w,colorError:U(w,{alpha:.1}),colorBorderedError:U(w,{alpha:.08}),closeIconColorError:w,closeIconColorHoverError:w,closeIconColorPressedError:w,closeColorHoverError:U(w,{alpha:.12}),closeColorPressedError:U(w,{alpha:.18})})},Xo={name:"Tag",common:ho,self:Zo};var Jo=Xo,Qo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},en=E("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[J("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),J("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),J("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),J("icon, avatar",[J("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),J("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),J("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Se("disabled",[ie("&:hover","background-color: var(--n-color-hover-checkable);",[Se("checked","color: var(--n-text-color-hover-checkable);")]),ie("&:active","background-color: var(--n-color-pressed-checkable);",[Se("checked","color: var(--n-text-color-pressed-checkable);")])]),J("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Se("disabled",[ie("&:hover","background-color: var(--n-color-checked-hover);"),ie("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const tn=Object.assign(Object.assign(Object.assign({},fe.props),Qo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),on=bo("n-tag");var ot=ce({name:"Tag",props:tn,setup(e){const n=O(null),{mergedBorderedRef:o,mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:c}=ct(e),u=fe("Tag","-tag",en,Jo,e,i);rt(on,{roundRef:ne(e,"round")});function l(C){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:k,onUpdateChecked:F,"onUpdate:checked":x}=e;F&&F(!h),x&&x(!h),k&&k(!h)}}function w(C){if(e.triggerClickOnClose||C.stopPropagation(),!e.disabled){const{onClose:h}=e;h&&de(h,C)}}const y={setTextContent(C){const{value:h}=n;h&&(h.textContent=C)}},m=vo("Tag",c,i),S=M(()=>{const{type:C,size:h,color:{color:k,textColor:F}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:R,closeMargin:V,closeMarginRtl:Z,borderRadius:q,opacityDisabled:H,textColorCheckable:G,textColorHoverCheckable:Q,textColorPressedCheckable:le,textColorChecked:oe,colorCheckable:v,colorHoverCheckable:b,colorPressedCheckable:P,colorChecked:W,colorCheckedHover:j,colorCheckedPressed:D,closeBorderRadius:A,fontWeightStrong:K,[X("colorBordered",C)]:a,[X("closeSize",h)]:g,[X("closeIconSize",h)]:N,[X("fontSize",h)]:ee,[X("height",h)]:ae,[X("color",C)]:me,[X("textColor",C)]:Ce,[X("border",C)]:ge,[X("closeIconColor",C)]:ve,[X("closeIconColorHover",C)]:ue,[X("closeIconColorPressed",C)]:re,[X("closeColorHover",C)]:be,[X("closeColorPressed",C)]:he}}=u.value;return{"--n-font-weight-strong":K,"--n-avatar-size-override":`calc(${ae} - 8px)`,"--n-bezier":x,"--n-border-radius":q,"--n-border":ge,"--n-close-icon-size":N,"--n-close-color-pressed":he,"--n-close-color-hover":be,"--n-close-border-radius":A,"--n-close-icon-color":ve,"--n-close-icon-color-hover":ue,"--n-close-icon-color-pressed":re,"--n-close-icon-color-disabled":ve,"--n-close-margin":V,"--n-close-margin-rtl":Z,"--n-close-size":g,"--n-color":k||(o.value?a:me),"--n-color-checkable":v,"--n-color-checked":W,"--n-color-checked-hover":j,"--n-color-checked-pressed":D,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":P,"--n-font-size":ee,"--n-height":ae,"--n-opacity-disabled":H,"--n-padding":R,"--n-text-color":F||Ce,"--n-text-color-checkable":G,"--n-text-color-checked":oe,"--n-text-color-hover-checkable":Q,"--n-text-color-pressed-checkable":le}}),z=r?Be("tag",M(()=>{let C="";const{type:h,size:k,color:{color:F,textColor:x}={}}=e;return C+=h[0],C+=k[0],F&&(C+=`a${vt(F)}`),x&&(C+=`b${vt(x)}`),o.value&&(C+="c"),C}),S,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:m,mergedClsPrefix:i,contentRef:n,mergedBordered:o,handleClick:l,handleCloseClick:w,cssVars:r?void 0:S,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:i,closable:r,color:{borderColor:c}={},round:u,onRender:l,$slots:w}=this;l==null||l();const y=it(w.avatar,S=>S&&s("div",{class:`${o}-tag__avatar`},S)),m=it(w.icon,S=>S&&s("div",{class:`${o}-tag__icon`},S));return s("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:i,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:u,[`${o}-tag--avatar`]:y,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||y,s("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&r?s(go,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,absolute:!0}):null,!this.checkable&&this.mergedBordered?s("div",{class:`${o}-tag__border`,style:{borderColor:c}}):null)}}),nn=ie([E("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[E("base-loading",`
 color: var(--n-loading-color);
 `),E("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),E("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),E("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[_("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),E("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[_("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),E("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),E("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[E("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),Se("disabled",[ie("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),J("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),J("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),E("base-selection-label","background-color: var(--n-color-active);"),E("base-selection-tags","background-color: var(--n-color-active);")])]),J("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),E("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
 color: var(--n-text-color-disabled);
 `)]),E("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),E("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),E("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[_("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>J(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),Se("disabled",[ie("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),J("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),E("base-selection-label",`background-color: var(--n-color-active-${e});`),E("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),J("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),E("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),E("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ie("&:last-child","padding-right: 0;"),E("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ln=ce({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const n=O(null),o=O(null),i=O(null),r=O(null),c=O(null),u=O(null),l=O(null),w=O(null),y=O(null),m=O(null),S=O(!1),z=O(!1),C=O(!1),h=fe("InternalSelection","-internal-selection",nn,po,e,ne(e,"clsPrefix")),k=M(()=>e.clearable&&!e.disabled&&(C.value||e.active)),F=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=M(()=>{const d=e.selectedOption;if(!!d)return d[e.labelField]}),R=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var d;const{value:p}=n;if(p){const{value:Y}=o;Y&&(Y.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=y.value)===null||d===void 0||d.sync()))}}function Z(){const{value:d}=m;d&&(d.style.display="none")}function q(){const{value:d}=m;d&&(d.style.display="inline-block")}Me(ne(e,"active"),d=>{d||Z()}),Me(ne(e,"pattern"),()=>{e.multiple&&st(V)});function H(d){const{onFocus:p}=e;p&&p(d)}function G(d){const{onBlur:p}=e;p&&p(d)}function Q(d){const{onDeleteOption:p}=e;p&&p(d)}function le(d){const{onClear:p}=e;p&&p(d)}function oe(d){const{onPatternInput:p}=e;p&&p(d)}function v(d){var p;(!d.relatedTarget||!(!((p=i.value)===null||p===void 0)&&p.contains(d.relatedTarget)))&&H(d)}function b(d){var p;!((p=i.value)===null||p===void 0)&&p.contains(d.relatedTarget)||G(d)}function P(d){le(d)}function W(){C.value=!0}function j(){C.value=!1}function D(d){!e.active||!e.filterable||d.target!==o.value&&d.preventDefault()}function A(d){Q(d)}function K(d){if(d.key==="Backspace"&&!a.value&&!e.pattern.length){const{selectedOptions:p}=e;p!=null&&p.length&&A(p[p.length-1])}}const a=O(!1);let g=null;function N(d){const{value:p}=n;if(p){const Y=d.target.value;p.textContent=Y,V()}a.value?g=d:oe(d)}function ee(){a.value=!0}function ae(){a.value=!1,oe(g),g=null}function me(d){var p;z.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,d)}function Ce(d){var p;z.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,d)}function ge(){var d,p;if(e.filterable)z.value=!1,(d=u.value)===null||d===void 0||d.blur(),(p=o.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:Y}=r;Y==null||Y.blur()}else{const{value:Y}=c;Y==null||Y.blur()}}function ve(){var d,p,Y;e.filterable?(z.value=!1,(d=u.value)===null||d===void 0||d.focus()):e.multiple?(p=r.value)===null||p===void 0||p.focus():(Y=c.value)===null||Y===void 0||Y.focus()}function ue(){const{value:d}=o;d&&(q(),d.focus())}function re(){const{value:d}=o;d&&d.blur()}function be(d){const{value:p}=l;p&&p.setTextContent(`+${d}`)}function he(){const{value:d}=w;return d}function Te(){return o.value}let ye=null;function we(){ye!==null&&window.clearTimeout(ye)}function Fe(){e.disabled||e.active||(we(),ye=window.setTimeout(()=>{S.value=!0},100))}function Oe(){we()}function Pe(d){d||(we(),S.value=!1)}Ie(()=>{mo(()=>{const d=u.value;!d||(d.tabIndex=e.disabled||z.value?-1:0)})}),Ot(i,e.onResize);const{inlineThemeDisabled:ke}=e,Re=M(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:p},self:{borderRadius:Y,color:_e,placeholderColor:Ue,textColor:qe,paddingSingle:Ge,paddingMultiple:Ye,caretColor:$e,colorDisabled:Ee,textColorDisabled:Ae,placeholderColorDisabled:Ze,colorActive:Xe,boxShadowFocus:Ne,boxShadowActive:pe,boxShadowHover:t,border:f,borderFocus:T,borderHover:L,borderActive:I,arrowColor:$,arrowColorDisabled:B,loadingColor:te,colorActiveWarning:Le,boxShadowFocusWarning:Je,boxShadowActiveWarning:Mt,boxShadowHoverWarning:It,borderWarning:Bt,borderFocusWarning:_t,borderHoverWarning:$t,borderActiveWarning:Et,colorActiveError:At,boxShadowFocusError:Nt,boxShadowActiveError:Lt,boxShadowHoverError:Ht,borderError:Dt,borderFocusError:Vt,borderHoverError:Wt,borderActiveError:jt,clearColor:Kt,clearColorHover:Ut,clearColorPressed:qt,clearSize:Gt,arrowSize:Yt,[X("height",d)]:Zt,[X("fontSize",d)]:Xt}}=h.value;return{"--n-bezier":p,"--n-border":f,"--n-border-active":I,"--n-border-focus":T,"--n-border-hover":L,"--n-border-radius":Y,"--n-box-shadow-active":pe,"--n-box-shadow-focus":Ne,"--n-box-shadow-hover":t,"--n-caret-color":$e,"--n-color":_e,"--n-color-active":Xe,"--n-color-disabled":Ee,"--n-font-size":Xt,"--n-height":Zt,"--n-padding-single":Ge,"--n-padding-multiple":Ye,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Ze,"--n-text-color":qe,"--n-text-color-disabled":Ae,"--n-arrow-color":$,"--n-arrow-color-disabled":B,"--n-loading-color":te,"--n-color-active-warning":Le,"--n-box-shadow-focus-warning":Je,"--n-box-shadow-active-warning":Mt,"--n-box-shadow-hover-warning":It,"--n-border-warning":Bt,"--n-border-focus-warning":_t,"--n-border-hover-warning":$t,"--n-border-active-warning":Et,"--n-color-active-error":At,"--n-box-shadow-focus-error":Nt,"--n-box-shadow-active-error":Lt,"--n-box-shadow-hover-error":Ht,"--n-border-error":Dt,"--n-border-focus-error":Vt,"--n-border-hover-error":Wt,"--n-border-active-error":jt,"--n-clear-size":Gt,"--n-clear-color":Kt,"--n-clear-color-hover":Ut,"--n-clear-color-pressed":qt,"--n-arrow-size":Yt}}),se=ke?Be("internal-selection",M(()=>e.size[0]),Re,e):void 0;return{mergedTheme:h,mergedClearable:k,patternInputFocused:z,filterablePlaceholder:F,label:x,selected:R,showTagsPanel:S,isCompositing:a,counterRef:l,counterWrapperRef:w,patternInputMirrorRef:n,patternInputRef:o,selfRef:i,multipleElRef:r,singleElRef:c,patternInputWrapperRef:u,overflowRef:y,inputTagElRef:m,handleMouseDown:D,handleFocusin:v,handleClear:P,handleMouseEnter:W,handleMouseLeave:j,handleDeleteOption:A,handlePatternKeyDown:K,handlePatternInputInput:N,handlePatternInputBlur:Ce,handlePatternInputFocus:me,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:Oe,handleFocusout:b,handleCompositionEnd:ae,handleCompositionStart:ee,onPopoverUpdateShow:Pe,focus:ve,focusInput:ue,blur:ge,blurInput:re,updateCounter:be,getCounter:he,getTail:Te,renderLabel:e.renderLabel,cssVars:ke?void 0:Re,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:r,maxTagCount:c,bordered:u,clsPrefix:l,onRender:w,renderTag:y,renderLabel:m}=this;w==null||w();const S=c==="responsive",z=typeof c=="number",C=S||z,h=s(Co,null,{default:()=>s(_o,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,x;return(x=(F=this.$slots).arrow)===null||x===void 0?void 0:x.call(F)}})});let k;if(n){const{labelField:F}=this,x=b=>s("div",{class:`${l}-base-selection-tag-wrapper`,key:b.value},y?y({option:b,handleClose:()=>this.handleDeleteOption(b)}):s(ot,{size:o,closable:!b.disabled,disabled:i,onClose:()=>this.handleDeleteOption(b),internalCloseFocusable:!1},{default:()=>m?m(b,!0):ze(b[F],b,!0)})),R=(z?this.selectedOptions.slice(0,c):this.selectedOptions).map(x),V=r?s("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,Z=S?()=>s("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(ot,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let q;if(z){const b=this.selectedOptions.length-c;b>0&&(q=s("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},s(ot,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${b}`})))}const H=S?r?s(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>R,counter:Z,tail:()=>V}):s(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>R,counter:Z}):z?R.concat(q):R,G=C?()=>s("div",{class:`${l}-base-selection-popover`},S?R:this.selectedOptions.map(x)):void 0,Q=C?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,oe=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,v=r?s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},H,S?null:V,h):s("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},H,h);k=s(wo,null,C?s(yo,Object.assign({},Q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>v,default:G}):v,oe)}else if(r){const F=this.pattern||this.isCompositing,x=this.active?!F:!this.selected,R=this.active?!1:this.selected;k=s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?s("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},s("div",{class:`${l}-base-selection-overlay__wrapper`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,x?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else k=s("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${l}-base-selection-input`,title:$o(this.label),key:"input"},s("div",{class:`${l}-base-selection-input__content`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),h);return s("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,u?s("div",{class:`${l}-base-selection__border`}):null,u?s("div",{class:`${l}-base-selection__state-border`}):null)}});function Ke(e){return e.type==="group"}function Pt(e){return e.type==="ignored"}function nt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function rn(e,n){return{getIsGroup:Ke,getIgnored:Pt,getKey(i){return Ke(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function an(e,n,o,i){if(!n)return e;function r(c){if(!Array.isArray(c))return[];const u=[];for(const l of c)if(Ke(l)){const w=r(l[i]);w.length&&u.push(Object.assign({},l,{[i]:w}))}else{if(Pt(l))continue;n(o,l)&&u.push(l)}return u}return r(e)}function sn(e,n,o){const i=new Map;return e.forEach(r=>{Ke(r)?r[o].forEach(c=>{i.set(c[n],c)}):i.set(r[n],r)}),i}var cn=ie([E("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),E("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Tt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);const dn=Object.assign(Object.assign({},fe.props),{to:at.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var fn=ce({name:"Select",props:dn,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:r}=ct(e),c=fe("Select","-select",cn,Po,e,n),u=O(e.defaultValue),l=ne(e,"value"),w=gt(l,u),y=O(!1),m=O(""),S=M(()=>{const{valueField:t,childrenField:f}=e,T=rn(t,f);return Mo(b.value,T)}),z=M(()=>sn(oe.value,e.valueField,e.childrenField)),C=O(!1),h=gt(ne(e,"show"),C),k=O(null),F=O(null),x=O(null),{localeRef:R}=Ft("Select"),V=M(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:R.value.placeholder}),Z=xo(e,["items","options"]),q=[],H=O([]),G=O([]),Q=O(new Map),le=M(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:T}=e;return L=>({[f]:String(L),[T]:L})}return t===!1?!1:f=>Object.assign(t(f),{value:f})}),oe=M(()=>G.value.concat(H.value).concat(Z.value)),v=M(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:T}=e;return(L,I)=>{if(!I)return!1;const $=I[f];if(typeof $=="string")return nt(L,$);const B=I[T];return typeof B=="string"?nt(L,B):typeof B=="number"?nt(L,String(B)):!1}}),b=M(()=>{if(e.remote)return Z.value;{const{value:t}=oe,{value:f}=m;return!f.length||!e.filterable?t:an(t,v.value,f,e.childrenField)}});function P(t){const f=e.remote,{value:T}=Q,{value:L}=z,{value:I}=le,$=[];return t.forEach(B=>{if(L.has(B))$.push(L.get(B));else if(f&&T.has(B))$.push(T.get(B));else if(I){const te=I(B);te&&$.push(te)}}),$}const W=M(()=>{if(e.multiple){const{value:t}=w;return Array.isArray(t)?P(t):[]}return null}),j=M(()=>{const{value:t}=w;return!e.multiple&&!Array.isArray(t)?t===null?null:P([t])[0]||null:null}),D=So(e),{mergedSizeRef:A,mergedDisabledRef:K,mergedStatusRef:a}=D;function g(t,f){const{onChange:T,"onUpdate:value":L,onUpdateValue:I}=e,{nTriggerFormChange:$,nTriggerFormInput:B}=D;T&&de(T,t,f),I&&de(I,t,f),L&&de(L,t,f),u.value=t,$(),B()}function N(t){const{onBlur:f}=e,{nTriggerFormBlur:T}=D;f&&de(f,t),T()}function ee(){const{onClear:t}=e;t&&de(t)}function ae(t){const{onFocus:f}=e,{nTriggerFormFocus:T}=D;f&&de(f,t),T()}function me(t){const{onSearch:f}=e;f&&de(f,t)}function Ce(t){const{onScroll:f}=e;f&&de(f,t)}function ge(){var t;const{remote:f,multiple:T}=e;if(f){const{value:L}=Q;if(T){const{valueField:I}=e;(t=W.value)===null||t===void 0||t.forEach($=>{L.set($[I],$)})}else{const I=j.value;I&&L.set(I[e.valueField],I)}}}function ve(t){const{onUpdateShow:f,"onUpdate:show":T}=e;f&&de(f,t),T&&de(T,t),C.value=t}function ue(){K.value||(ve(!0),C.value=!0,e.filterable&&Ae())}function re(){ve(!1)}function be(){m.value="",G.value=q}const he=O(!1);function Te(){e.filterable&&(he.value=!0)}function ye(){e.filterable&&(he.value=!1,h.value||be())}function we(){K.value||(h.value?e.filterable?Ae():re():ue())}function Fe(t){var f,T;!((T=(f=x.value)===null||f===void 0?void 0:f.selfRef)===null||T===void 0)&&T.contains(t.relatedTarget)||(y.value=!1,N(t),re())}function Oe(t){ae(t),y.value=!0}function Pe(t){y.value=!0}function ke(t){var f;!((f=k.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(y.value=!1,N(t),re())}function Re(){var t;(t=k.value)===null||t===void 0||t.focus(),re()}function se(t){var f;h.value&&(!((f=k.value)===null||f===void 0)&&f.$el.contains(Io(t))||re())}function d(t){if(!Array.isArray(t))return[];if(le.value)return Array.from(t);{const{remote:f}=e,{value:T}=z;if(f){const{value:L}=Q;return t.filter(I=>T.has(I)||L.has(I))}else return t.filter(L=>T.has(L))}}function p(t){Y(t.rawNode)}function Y(t){if(K.value)return;const{tag:f,remote:T,clearFilterAfterSelect:L,valueField:I}=e;if(f&&!T){const{value:$}=G,B=$[0]||null;if(B){const te=H.value;te.length?te.push(B):H.value=[B],G.value=q}}if(T&&Q.value.set(t[I],t),e.multiple){const $=d(w.value),B=$.findIndex(te=>te===t[I]);if(~B){if($.splice(B,1),f&&!T){const te=_e(t[I]);~te&&(H.value.splice(te,1),L&&(m.value=""))}}else $.push(t[I]),L&&(m.value="");g($,P($))}else{if(f&&!T){const $=_e(t[I]);~$?H.value=[H.value[$]]:H.value=q}Ee(),re(),g(t[I],t)}}function _e(t){return H.value.findIndex(T=>T[e.valueField]===t)}function Ue(t){h.value||ue();const{value:f}=t.target;m.value=f;const{tag:T,remote:L}=e;if(me(f),T&&!L){if(!f){G.value=q;return}const{onCreate:I}=e,$=I?I(f):{[e.labelField]:f,[e.valueField]:f},{valueField:B}=e;Z.value.some(te=>te[B]===$[B])||H.value.some(te=>te[B]===$[B])?G.value=q:G.value=[$]}}function qe(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&re(),ee(),f?g([],[]):g(null,null)}function Ge(t){!je(t,"action")&&!je(t,"empty")&&t.preventDefault()}function Ye(t){Ce(t)}function $e(t){var f,T,L,I,$;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=k.value)===null||f===void 0)&&f.isCompositing)){if(h.value){const B=(T=x.value)===null||T===void 0?void 0:T.getPendingTmNode();B?p(B):e.filterable||(re(),Ee())}else if(ue(),e.tag&&he.value){const B=G.value[0];if(B){const te=B[e.valueField],{value:Le}=w;e.multiple&&Array.isArray(Le)&&Le.some(Je=>Je===te)||Y(B)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;h.value&&((L=x.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;h.value?(I=x.value)===null||I===void 0||I.next():ue();break;case"Escape":h.value&&(Bo(t),re()),($=k.value)===null||$===void 0||$.focus();break}}function Ee(){var t;(t=k.value)===null||t===void 0||t.focus()}function Ae(){var t;(t=k.value)===null||t===void 0||t.focusInput()}function Ze(){var t;!h.value||(t=F.value)===null||t===void 0||t.syncPosition()}ge(),Me(ne(e,"options"),ge);const Xe={focus:()=>{var t;(t=k.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=k.value)===null||t===void 0||t.blur()}},Ne=M(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),pe=r?Be("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:a,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:S,isMounted:ko(),triggerRef:k,menuRef:x,pattern:m,uncontrolledShow:C,mergedShow:h,adjustedTo:at(e),uncontrolledValue:u,mergedValue:w,followerRef:F,localizedPlaceholder:V,selectedOption:j,selectedOptions:W,mergedSize:A,mergedDisabled:K,focused:y,activeWithoutMenuOpen:he,inlineThemeDisabled:r,onTriggerInputFocus:Te,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Ze,handleMenuFocus:Pe,handleMenuBlur:ke,handleMenuTabOut:Re,handleTriggerClick:we,handleToggle:p,handleDeleteOption:Y,handlePatternInput:Ue,handleClear:qe,handleTriggerBlur:Fe,handleTriggerFocus:Oe,handleKeydown:$e,handleMenuAfterLeave:be,handleMenuClickOutside:se,handleMenuScroll:Ye,handleMenuKeydown:$e,handleMenuMousedown:Ge,mergedTheme:c,cssVars:r?void 0:Ne,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Ro,null,{default:()=>[s(zo,null,{default:()=>s(ln,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),s(To,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===at.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Fo(s(Yo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[Oo,this.mergedShow],[bt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{fn as N};
