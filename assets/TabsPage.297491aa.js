import{D as x}from"./Demo.c7dba098.js";import{d as v,o as u,c as r,i as A,x as D,h as S,m as f,y as V,z,b as e,F as b,A as g,j as I,n as L,t as N,v as k,B as R,k as U,_ as j,w as _,a as d}from"./index.de2a9550.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const M={class:"wheel-tab"},h=v({__name:"Tab",props:{title:null},setup(B){return(l,p)=>(u(),r("div",M,[A(l.$slots,"default")]))}}),P={class:"wheel-tabs"},q=["onClick"],G={class:"wheel-tabs-content-container"},H=v({__name:"Tabs",props:{selected:null},emits:["update:selected"],setup(B,{emit:l}){var w;const p=B,a=D(),o=(w=a.default)==null?void 0:w.call(a),C=S([]);o==null||o.forEach(s=>{var i;if(s.type!==h)throw new Error("Tabs\u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662FTab\u7EC4\u4EF6");C.push((i=s==null?void 0:s.props)==null?void 0:i.title)});const $=s=>{l("update:selected",s)},T=f([]),m=f(),y=f(),F=()=>{const s=T.value.find(E=>E.classList.contains("selected")),{width:i,left:t}=s.getBoundingClientRect(),{left:c}=y.value.getBoundingClientRect(),n=t-c;m.value.style.width=i+"px",m.value.style.left=n+"px"};return V(F),z(F),(s,i)=>(u(),r("div",P,[e("div",{class:"wheel-tabs-title-container",ref_key:"container",ref:y},[(u(!0),r(b,null,g(C,(t,c)=>(u(),r("div",{class:L(["wheel-tabs-title-item",p.selected===t?"selected":""]),key:c,onClick:n=>$(t),ref_for:!0,ref:n=>{n&&(T.value[c]=n)}},N(t),11,q))),128)),e("div",{class:"wheel-indicator",ref_key:"indicator",ref:m},null,512)],512),e("div",G,[(u(!0),r(b,null,g(I(o),(t,c)=>{var n;return u(),r(b,{key:c},[((n=t==null?void 0:t.props)==null?void 0:n.title)===p.selected?(u(),k(R(t),{key:0})):U("",!0)],64)}),128))])]))}});const J=j(H,[["__scopeId","data-v-83c887a8"]]),K=e("p",null,"\u5185\u5BB91",-1),O=e("p",null,"\u5185\u5BB91",-1),Q=e("p",null,"\u5185\u5BB91",-1),W=e("p",null,"\u5185\u5BB92",-1),X=e("p",null,"\u5185\u5BB92",-1),Y=e("p",null,"\u5185\u5BB92",-1),Z=e("p",null,"\u5185\u5BB93",-1),ee=e("p",null,"\u5185\u5BB93",-1),te=e("p",null,"\u5185\u5BB93",-1),se=v({__name:"TabsDemo",setup(B){const l=f("\u5BFC\u822A1");return(p,a)=>(u(),k(J,{selected:l.value,"onUpdate:selected":a[0]||(a[0]=o=>l.value=o)},{default:_(()=>[d(h,{title:"\u5BFC\u822A1"},{default:_(()=>[K,O,Q]),_:1}),d(h,{title:"\u5BFC\u822A2"},{default:_(()=>[W,X,Y]),_:1}),d(h,{title:"\u5BFC\u822A3"},{default:_(()=>[Z,ee,te]),_:1})]),_:1},8,["selected"]))}}),ue=e("h1",null,"Tabs\u7EC4\u4EF6",-1),ne=e("pre",null,`\r
<template>\r
  <Tabs v-model:selected="selected">\r
    <Tab title="\u5BFC\u822A1">\r
      <p>\u5185\u5BB91</p>\r
      <p>\u5185\u5BB91</p>\r
      <p>\u5185\u5BB91</p>\r
    </Tab>\r
    <Tab title="\u5BFC\u822A2">\r
      <p>\u5185\u5BB92</p>\r
      <p>\u5185\u5BB92</p>\r
      <p>\u5185\u5BB92</p>\r
    </Tab>\r
    <Tab title="\u5BFC\u822A3">\r
      <p>\u5185\u5BB93</p>\r
      <p>\u5185\u5BB93</p>\r
      <p>\u5185\u5BB93</p>\r
    </Tab>\r
  </Tabs>\r
</template>\r
\r
<script setup lang='ts'>\r
import Tabs from '@/lib/Tabs/Tabs.vue'\r
import Tab from '@/lib/Tabs/Tab.vue'\r
import { ref } from 'vue'\r
const selected = ref('\u5BFC\u822A1')\r
\r
<\/script>\r
\r
<style scoped lang='scss'>\r
\r
</style>\r
\r
      `,-1),oe=v({__name:"TabsPage",setup(B){return(l,p)=>(u(),r(b,null,[ue,d(x,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:_(()=>[d(se)]),code:_(()=>[ne]),_:1})],64))}});export{oe as default};
