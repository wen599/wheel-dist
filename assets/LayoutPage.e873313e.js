import{D as L}from"./Demo.c7dba098.js";import{_ as c,o as s,c as _,i,f as h,d,x as $,m as x,l as b,v,w as t,a as e,F as g,b as m}from"./index.de2a9550.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const F={},H={class:"wheel-layout-aside"},A=h("aside");function D(o,r){return s(),_("div",H,[i(o.$slots,"default",{},()=>[A])])}const l=c(F,[["render",D]]);const E={},w={class:"wheel-layout-content"},k=h("content");function B(o,r){return s(),_("div",w,[i(o.$slots,"default",{},()=>[k])])}const p=c(E,[["render",B]]),I={},V={class:"wheel-layout-header"},N=h("header");function S(o,r){return s(),_("div",V,[i(o.$slots,"default",{},()=>[N])])}const y=c(I,[["render",S]]),P={},T={class:"wheel-layout-footer"},j=h("footer");function q(o,r){return s(),_("div",T,[i(o.$slots,"default",{},()=>[j])])}const f=c(P,[["render",q]]),z={class:"wheel-layout"},n=d({__name:"Layout",setup(o){var C;b(a=>({"63d095e5":u.value}));const r=$(),u=x("column");return(C=r.default)==null||C.call(r).forEach(a=>{if(a.type!==n&&a.type!==f&&a.type!==y&&a.type!==p&&a.type!==l)throw new Error("layout\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662FLayout\u6216Header\u6216Aside\u6216Content\u6216Footer");a.type===l&&(u.value="row")}),(a,te)=>(s(),_("div",z,[i(a.$slots,"default")]))}});const G=d({__name:"LayoutDemo1",setup(o){return(r,u)=>(s(),v(n,{class:"container"},{default:t(()=>[e(y,{class:"demo"}),e(p,{class:"demo"}),e(f,{class:"demo"})]),_:1}))}});const J=c(G,[["__scopeId","data-v-ecd21184"]]),K=d({__name:"LayoutDemo2",setup(o){return(r,u)=>(s(),v(n,{class:"container"},{default:t(()=>[e(y,{class:"demo"}),e(n,null,{default:t(()=>[e(l,{class:"demo"}),e(p,{class:"demo"})]),_:1}),e(f,{class:"demo"})]),_:1}))}});const M=c(K,[["__scopeId","data-v-ec6dde49"]]),O=d({__name:"LayoutDemo3",setup(o){return(r,u)=>(s(),v(n,{class:"container"},{default:t(()=>[e(y,{class:"demo"}),e(n,null,{default:t(()=>[e(p,{class:"demo"}),e(l,{class:"demo"})]),_:1}),e(f,{class:"demo"})]),_:1}))}});const Q=c(O,[["__scopeId","data-v-9fe600c7"]]),R=d({__name:"LayoutDemo4",setup(o){return(r,u)=>(s(),v(n,{class:"container"},{default:t(()=>[e(l,{class:"demo"}),e(n,null,{default:t(()=>[e(y,{class:"demo"}),e(p,{class:"demo"}),e(f,{class:"demo"})]),_:1})]),_:1}))}});const U=c(R,[["__scopeId","data-v-72f6583c"]]),W=m("h1",null,"Layout",-1),X=m("pre",null,`<template>\r
  <Layout class="container">\r
    <Header class="demo"></Header>\r
    <Content class="demo"></Content>\r
    <Footer class="demo"></Footer>\r
  </Layout>\r
</template>\r
\r
<script setup lang='ts'>\r
import Layout from '@/lib/Layout/Layout.vue'\r
import Header from '@/lib/Layout/Header.vue'\r
import Footer from '@/lib/Layout/Footer.vue'\r
import Content from '@/lib/Layout/Content.vue'\r
<\/script>\r
\r
<style scoped lang='scss'>\r
.container{\r
  height: 300px;\r
}\r
.demo{\r
  border: 1px solid darkgreen;\r
}\r
</style>\r
\r
      `,-1),Y=m("pre",null,`<template>\r
  <Layout class="container">\r
    <Header class="demo"></Header>\r
    <Layout>\r
      <Aside class="demo"></Aside>\r
      <Content class="demo"></Content>\r
    </Layout>\r
    <Footer class="demo"></Footer>\r
  </Layout>\r
</template>\r
\r
<script setup lang='ts'>\r
import Layout from '@/lib/Layout/Layout.vue'\r
import Header from '@/lib/Layout/Header.vue'\r
import Footer from '@/lib/Layout/Footer.vue'\r
import Content from '@/lib/Layout/Content.vue'\r
import Aside from '@/lib/Layout/Aside.vue'\r
<\/script>\r
\r
<style scoped lang='scss'>\r
.container{\r
  height: 300px;\r
}\r
.demo{\r
  border: 1px solid darkgreen;\r
}\r
</style>\r
\r
      `,-1),Z=m("pre",null,`<template>\r
  <Layout class="container">\r
    <Header class="demo"></Header>\r
    <Layout>\r
      <Content class="demo"></Content>\r
      <Aside class="demo"></Aside>\r
    </Layout>\r
    <Footer class="demo"></Footer>\r
  </Layout>\r
</template>\r
\r
<script setup lang='ts'>\r
import Layout from '@/lib/Layout/Layout.vue'\r
import Header from '@/lib/Layout/Header.vue'\r
import Footer from '@/lib/Layout/Footer.vue'\r
import Content from '@/lib/Layout/Content.vue'\r
import Aside from '@/lib/Layout/Aside.vue'\r
<\/script>\r
\r
<style scoped lang='scss'>\r
.container{\r
  height: 300px;\r
}\r
.demo{\r
  border: 1px solid darkgreen;\r
}\r
</style>\r
\r
      `,-1),ee=m("pre",null,`<template>\r
  <Layout class="container">\r
    <Aside class="demo" >\r
\r
    </Aside>\r
    <Layout  >\r
      <Header class="demo"></Header>\r
      <Content class="demo"></Content>\r
      <Footer class="demo"></Footer>\r
    </Layout>\r
  </Layout>\r
\r
</template>\r
\r
<script setup lang='ts'>\r
import Layout from '@/lib/Layout/Layout.vue'\r
import Header from '@/lib/Layout/Header.vue'\r
import Footer from '@/lib/Layout/Footer.vue'\r
import Content from '@/lib/Layout/Content.vue'\r
import Aside from '@/lib/Layout/Aside.vue'\r
<\/script>\r
\r
<style scoped lang='scss'>\r
.container{\r
  height: 300px;\r
}\r
.demo{\r
  border: 1px solid darkgreen;\r
}\r
</style>\r
\r
      `,-1),ae=d({__name:"LayoutPage",setup(o){return(r,u)=>(s(),_(g,null,[W,e(L,{title:"\u5E38\u89C1\u5E03\u5C401"},{demo:t(()=>[e(J)]),code:t(()=>[X]),_:1}),e(L,{title:"\u5E38\u89C1\u5E03\u5C402"},{demo:t(()=>[e(M)]),code:t(()=>[Y]),_:1}),e(L,{title:"\u5E38\u89C1\u5E03\u5C403"},{demo:t(()=>[e(Q)]),code:t(()=>[Z]),_:1}),e(L,{title:"\u5E38\u89C1\u5E03\u5C404"},{demo:t(()=>[e(U)]),code:t(()=>[ee]),_:1})],64))}});export{ae as default};
