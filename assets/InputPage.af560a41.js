import{d as p,g as h,o,c as _,b as s,M as I,j as F,F as d,t as x,k as y,n as g,p as B,e as W,_ as D,m,v,a as l,w as n}from"./index.de2a9550.js";import{D as i}from"./Demo.c7dba098.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const w=t=>(B("data-v-5e35efa2"),t=t(),W(),t),C=["value"],E=w(()=>s("i",{class:"iconfont icon-cuowu"},null,-1)),$={class:"wheel-input-error-text"},k={inheritAttrs:!1},S=p({...k,__name:"WheelInput",props:{error:{default:""},value:{default:""}},emits:["update:value","input"],setup(t,{emit:e}){const r=t,u=h(),a=c=>{e("update:value",c.target.value),e("input",c)};return(c,U)=>(o(),_("div",{class:g(["wheel-input-container",r.error?"error":""])},[s("input",I({class:"wheel-input"},F(u),{value:r.value,onInput:a}),null,16,C),r.error?(o(),_(d,{key:0},[E,s("span",$,x(r.error),1)],64)):y("",!0)],2))}});const f=D(S,[["__scopeId","data-v-5e35efa2"]]),b=p({__name:"InputDemo1",setup(t){const e=m("");return(r,u)=>(o(),v(f,{type:"text",value:e.value,"onUpdate:value":u[0]||(u[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"]))}}),N=p({__name:"InputDemo2",setup(t){const e=m("");return(r,u)=>(o(),v(f,{type:"text",value:e.value,"onUpdate:value":u[0]||(u[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165",error:"\u7528\u6237\u540D\u9519\u8BEF"},null,8,["value"]))}}),V=s("h1",null,"input\u7EC4\u4EF6",-1),A=s("pre",null,`\r
    <template>\r
      <WheelInput type="text" v-model:value="value"  placeholder="\u8BF7\u8F93\u5165"/>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import WheelInput from '@/lib/WheelInput.vue'\r
    import { ref } from 'vue'\r
    const value = ref('')\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
      `,-1),P=s("pre",null,`\r
    <template>\r
      <WheelInput type="text" v-model:value="value"  placeholder="\u8BF7\u8F93\u5165" error="\u7528\u6237\u540D\u9519\u8BEF"/>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import WheelInput from '@/lib/WheelInput.vue'\r
    import { ref } from 'vue'\r
    const value = ref('')\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
      `,-1),q=p({__name:"InputPage",setup(t){return(e,r)=>(o(),_(d,null,[V,l(i,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:n(()=>[l(b)]),code:n(()=>[A]),_:1}),l(i,{title:"\u652F\u6301error"},{demo:n(()=>[l(N)]),code:n(()=>[P]),_:1})],64))}});export{q as default};
