import{D as h}from"./Demo.c7dba098.js";import{d as i,m as r,o as d,c as w,i as J,l as O,K as Q,x as T,L as U,a as s,w as l,F as k,_ as b,v as A,p as S,e as M,b as o}from"./index.de2a9550.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const X={class:"wheel-grid-col"},e=i({__name:"Col",props:{span:null,offset:null,xs:null,xm:null,md:null,lg:null,xl:null},setup(t){var N,W,L,V,P,j,K,q,z,H;const a=t;O(G=>({f0867288:n.value,"0d083184":f.value,"41b552e4":x.value,"7622cab0":C.value,"688e6470":g.value,"419b9881":E.value,"13f1db89":$.value,"716349e5":y.value,"29401c26":I.value,"72b91972":B.value,"704009cf":R.value,"5e3ef1fe":u.value,c32c2bee:m.value}));const n=r("100%"),f=r("0"),c=G=>Number(G)/24*100+"%";a.span&&(n.value=c(a.span)),a.offset&&(f.value=c(a.offset));const x=r("0"),v=Q("gutter");v&&(x.value=Number(v)/2+"px");const u=r(""),m=r(""),B=r(""),R=r(""),y=r(""),I=r(""),E=r(""),$=r(""),C=r(""),g=r("");return(N=a.xl)!=null&&N.span?C.value=c(a.xl.span):C.value=n.value,(W=a.xl)!=null&&W.offset?g.value=c(a.xl.offset):g.value=f.value,(L=a.lg)!=null&&L.span?E.value=c(a.lg.span):E.value=C.value,(V=a.lg)!=null&&V.offset?$.value=c(a.lg.offset):$.value=g.value,(P=a.md)!=null&&P.span?y.value=c(a.md.span):y.value=E.value,(j=a.md)!=null&&j.offset?I.value=c(a.md.offset):I.value=$.value,(K=a.xm)!=null&&K.span?B.value=c(a.xm.span):B.value=y.value,(q=a.xm)!=null&&q.offset?R.value=c(a.xm.offset):R.value=g.value,(z=a.xs)!=null&&z.span?u.value=c(a.xs.span):u.value=C.value,(H=a.xs)!=null&&H.offset?m.value=c(a.xs.offset):m.value=R.value,(G,Ms)=>(d(),w("div",X,[J(G.$slots,"default")]))}});const Y={class:"wheel-grid-row"},_=i({__name:"Row",props:{gutter:{default:0}},setup(t){var x,v;const a=t;O(u=>({"271be0a9":f.value,bd2c5714:c.value}));const n=T(),f=r("nowrap");(v=(x=n.default)==null?void 0:x.call(n))==null||v.forEach(u=>{var m;if(u.type!==e)throw new Error("Row \u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662FCol");(m=u.props)!=null&&m.span&&(f.value="wrap")});const c=r("0");return c.value=`-${Number(a.gutter)/2}px`,U("gutter",a.gutter),(u,m)=>(d(),w("div",Y,[J(u.$slots,"default")]))}});const Z=i({__name:"GridDemo1",setup(t){return(a,n)=>(d(),w(k,null,[s(_,null,{default:l(()=>[s(e,{class:"col"})]),_:1}),s(_,null,{default:l(()=>[s(e,{class:"col"}),s(e,{class:"col"})]),_:1}),s(_,null,{default:l(()=>[s(e,{class:"col"}),s(e,{class:"col"}),s(e,{class:"col"})]),_:1})],64))}});const ss=b(Z,[["__scopeId","data-v-ef375c44"]]),ls=i({__name:"GridDemo2",setup(t){return(a,n)=>(d(),w(k,null,[s(_,{class:"row"},{default:l(()=>[s(e,{class:"col",span:"2"}),s(e,{class:"col",span:"10"}),s(e,{class:"col",span:"10"}),s(e,{class:"col",span:"2"})]),_:1}),s(_,null,{default:l(()=>[s(e,{class:"col",span:"8"}),s(e,{class:"col",span:"4"}),s(e,{class:"col",span:"4"}),s(e,{class:"col",span:"8"})]),_:1})],64))}});const es=b(ls,[["__scopeId","data-v-5297ab14"]]),D=t=>(S("data-v-f1719c81"),t=t(),M(),t),as=D(()=>o("p",{class:"item"},null,-1)),os=D(()=>o("p",{class:"item"},null,-1)),ts=D(()=>o("p",{class:"item"},null,-1)),cs=D(()=>o("p",{class:"item"},null,-1)),rs=i({__name:"GridDemo3",setup(t){return(a,n)=>(d(),A(_,{class:"row",gutter:"20"},{default:l(()=>[s(e,{class:"col"},{default:l(()=>[as]),_:1}),s(e,{class:"col"},{default:l(()=>[os]),_:1}),s(e,{class:"col"},{default:l(()=>[ts]),_:1}),s(e,{class:"col"},{default:l(()=>[cs]),_:1})]),_:1}))}});const ns=b(rs,[["__scopeId","data-v-f1719c81"]]),F=t=>(S("data-v-bbba034c"),t=t(),M(),t),ps=F(()=>o("p",{class:"item"},null,-1)),us=F(()=>o("p",{class:"item"},null,-1)),_s=F(()=>o("p",{class:"item"},null,-1)),is=F(()=>o("p",{class:"item"},null,-1)),ds=i({__name:"GridDemo4",setup(t){return(a,n)=>(d(),A(_,{class:"row"},{default:l(()=>[s(e,{class:"col",span:"4",offset:"1"},{default:l(()=>[ps]),_:1}),s(e,{class:"col",span:"8",offset:"2"},{default:l(()=>[us]),_:1}),s(e,{class:"col",span:"4",offset:"3"},{default:l(()=>[_s]),_:1}),s(e,{class:"col",span:"1",offset:"1"},{default:l(()=>[is]),_:1})]),_:1}))}});const ms=b(ds,[["__scopeId","data-v-bbba034c"]]),p=t=>(S("data-v-1adbabf8"),t=t(),M(),t),fs=p(()=>o("p",{class:"item"},null,-1)),xs=p(()=>o("p",{class:"item"},null,-1)),vs=p(()=>o("p",{class:"item"},null,-1)),Cs=p(()=>o("p",{class:"item"},null,-1)),gs=p(()=>o("p",{class:"item"},null,-1)),hs=p(()=>o("p",{class:"item"},null,-1)),ws=p(()=>o("p",{class:"item"},null,-1)),bs=p(()=>o("p",{class:"item"},null,-1)),Rs=p(()=>o("p",{class:"item"},null,-1)),ys=p(()=>o("p",{class:"item"},null,-1)),Es=p(()=>o("p",{class:"item"},null,-1)),$s=p(()=>o("p",{class:"item"},null,-1)),Gs=i({__name:"GridDemo5",setup(t){return(a,n)=>(d(),A(_,{class:"row",gutter:"10"},{default:l(()=>[s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[fs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[xs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[vs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[Cs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[gs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[hs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[ws]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[bs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[Rs]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[ys]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[Es]),_:1}),s(e,{class:"col",span:"2",xl:{span:4},lg:{span:6},md:{span:8},xm:{span:12},xs:{span:24}},{default:l(()=>[$s]),_:1})]),_:1}))}});const Ds=b(Gs,[["__scopeId","data-v-1adbabf8"]]),Fs=o("h1",null,"Grid\u7EC4\u4EF6",-1),Bs=o("pre",null,`    <template>\r
      <Row>\r
        <Col class="col"></Col>\r
      </Row>\r
      <Row>\r
        <Col class="col"></Col>\r
        <Col class="col"></Col>\r
      </Row>\r
      <Row>\r
        <Col class="col"></Col>\r
        <Col class="col"></Col>\r
        <Col class="col"></Col>\r
      </Row>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Row from '@/lib/Grid/Row.vue'\r
    import Col from '@/lib/Grid/Col.vue'\r
\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
    .row{\r
      margin-top: 20px;\r
    }\r
    .col{\r
      height: 50px;\r
      outline: 1px solid darkcyan;\r
    }\r
    </style>\r
\r
    `,-1),Is=o("pre",null,`\r
    <template>\r
      <Row class="row">\r
        <Col class="col" span="2"></Col>\r
        <Col class="col" span="10"></Col>\r
        <Col class="col" span="10"></Col>\r
        <Col class="col" span="2"></Col>\r
      </Row>\r
      <Row>\r
        <Col class="col" span="8"></Col>\r
        <Col class="col" span="4"></Col>\r
        <Col class="col" span="4"></Col>\r
        <Col class="col" span="8"></Col>\r
      </Row>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Row from '@/lib/Grid/Row.vue'\r
    import Col from '@/lib/Grid/Col.vue'\r
\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    .col{\r
      height: 50px;\r
      outline: 1px solid darkcyan;\r
    }\r
    </style>\r
\r
      `,-1),ks=o("pre",null,`<template>\r
  <Row class="row" gutter="20">\r
    <Col class="col" ><p class="item"></p></Col>\r
    <Col class="col" ><p class="item"></p></Col>\r
    <Col class="col" ><p class="item"></p></Col>\r
    <Col class="col" ><p class="item"></p></Col>\r
\r
  </Row>\r
\r
</template>\r
\r
<script setup lang='ts'>\r
import Row from '@/lib/Grid/Row.vue'\r
import Col from '@/lib/Grid/Col.vue'\r
\r
<\/script>\r
\r
<style scoped lang='scss'>\r
\r
.col{\r
  height: 50px;\r
  //outline: 1px solid darkcyan;\r
}\r
.item{\r
  height: 50px;\r
  background-color: #4a5462;\r
}\r
</style>\r
\r
      `,-1),As=o("pre",null,`\r
<template>\r
  <Row class="row" >\r
    <Col class="col" span="4" offset="1"><p class="item"></p></Col>\r
    <Col class="col" span="8" offset="2"><p class="item"></p></Col>\r
    <Col class="col" span="4" offset="3"><p class="item"></p></Col>\r
    <Col class="col" span="1" offset="1"><p class="item"></p></Col>\r
  </Row>\r
\r
</template>\r
\r
<script setup lang='ts'>\r
import Row from '@/lib/Grid/Row.vue'\r
import Col from '@/lib/Grid/Col.vue'\r
\r
<\/script>\r
\r
<style scoped lang='scss'>\r
\r
.col{\r
  height: 50px;\r
  outline: 1px solid darkcyan;\r
}\r
\r
</style>\r
\r
      `,-1),Ss=o("pre",null,`\r
<template>\r
  <Row class="row" >\r
    <Col class="col" span="4" offset="1"><p class="item"></p></Col>\r
    <Col class="col" span="8" offset="2"><p class="item"></p></Col>\r
    <Col class="col" span="4" offset="3"><p class="item"></p></Col>\r
    <Col class="col" span="1" offset="1"><p class="item"></p></Col>\r
  </Row>\r
\r
</template>\r
\r
<script setup lang='ts'>\r
import Row from '@/lib/Grid/Row.vue'\r
import Col from '@/lib/Grid/Col.vue'\r
\r
<\/script>\r
\r
<style scoped lang='scss'>\r
\r
.col{\r
  height: 50px;\r
  outline: 1px solid darkcyan;\r
}\r
\r
</style>\r
\r
      `,-1),Vs=i({__name:"GridPage",setup(t){return(a,n)=>(d(),w(k,null,[Fs,s(h,{title:"\u57FA\u7840\u7528\u6CD5",text:"\u6839\u636Ecol\u7684\u4E2A\u6570\u5747\u5206row"},{demo:l(()=>[s(ss)]),code:l(()=>[Bs]),_:1}),s(h,{title:"\u81EA\u7531\u5E03\u5C40",text:"\u6839\u636Espan \u81EA\u7531\u8BBE\u7F6Ecol\u7684\u5BBD\u5EA6 "},{demo:l(()=>[s(es)]),code:l(()=>[Is]),_:1}),s(h,{title:"\u652F\u6301gutter",text:"\u6839\u636Egutter \u8BBE\u7F6E\u95F4\u9694 "},{demo:l(()=>[s(ns)]),code:l(()=>[ks]),_:1}),s(h,{title:"\u652F\u6301offset",text:"\u6839\u636Eoffset \u8BBE\u7F6E\u504F\u79FB\u91CF "},{demo:l(()=>[s(ms)]),code:l(()=>[As]),_:1}),s(h,{title:"\u54CD\u5E94\u5F0F",text:"\u9884\u8BBE\u4E86\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1Axs\u3001xm\u3001md\u3001lg\u3001xl \u548C\u9ED8\u8BA4"},{demo:l(()=>[s(Ds)]),code:l(()=>[Ss]),_:1})],64))}});export{Vs as default};
