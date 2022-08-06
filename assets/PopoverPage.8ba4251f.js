import{D as h}from"./Demo.c7dba098.js";import{_ as s}from"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";import{d as m,q as b,m as y,I as w,o as a,c as d,a as t,w as e,n as x,j as C,i as P,k as D,T as I,b as r,f as l,v as E,F as B,p as k,e as $,_ as g}from"./index.de2a9550.js";const S={class:"wheel-popover-container"},F=l("\u6D4B\u8BD5popover"),n=m({__name:"Popover",props:{placement:{default:"top"}},setup(o){const c=o,_=b(()=>c.placement),p=y(!1);return w(p,u=>{setTimeout(()=>{u&&document.addEventListener("click",function i(){p.value=!1,document.removeEventListener("click",i)})},50)}),(u,i)=>(a(),d("div",S,[t(I,{name:"wheel-popover-fade"},{default:e(()=>[p.value?(a(),d("div",{key:0,class:x(["wheel-popover-content","wheel-popover-"+C(_)])},[P(u.$slots,"content")],2)):D("",!0)]),_:3}),r("div",{class:"wheel-popover-title",onClick:i[0]||(i[0]=W=>p.value=!p.value)},[P(u.$slots,"default",{},()=>[t(s,null,{default:e(()=>[F]),_:1})])])]))}});const N=r("div",null,"test...",-1),T=l("click me"),V=m({__name:"PopoverDemo1",setup(o){return(c,_)=>(a(),E(n,{class:"popover"},{content:e(()=>[N]),default:e(()=>[t(s,null,{default:e(()=>[T]),_:1})]),_:1}))}}),v=o=>(k("data-v-8b291dc1"),o=o(),$(),o),L=v(()=>r("div",null,"test...",-1)),j=l("click me"),q=v(()=>r("div",null,"test...",-1)),z=l("click me"),A=v(()=>r("div",null,"test...",-1)),G=l("click me"),H=v(()=>r("div",null,"test...",-1)),J=l("click me"),K=m({__name:"PopoverDemo2",setup(o){return(c,_)=>(a(),d(B,null,[t(n,{class:"popover",placement:"top"},{content:e(()=>[L]),default:e(()=>[t(s,null,{default:e(()=>[j]),_:1})]),_:1}),t(n,{class:"popover",placement:"right"},{content:e(()=>[q]),default:e(()=>[t(s,null,{default:e(()=>[z]),_:1})]),_:1}),t(n,{class:"popover",placement:"bottom"},{content:e(()=>[A]),default:e(()=>[t(s,null,{default:e(()=>[G]),_:1})]),_:1}),t(n,{class:"popover",placement:"left"},{content:e(()=>[H]),default:e(()=>[t(s,null,{default:e(()=>[J]),_:1})]),_:1})],64))}});const M=g(K,[["__scopeId","data-v-8b291dc1"]]),f=o=>(k("data-v-774d31e3"),o=o(),$(),o),O=f(()=>r("h1",null,"Popover\u7EC4\u4EF6",-1)),Q=f(()=>r("pre",null,`      <template>\r
        <Popover class="popover" >\r
          <template #content>\r
            <div>test...</div>\r
          </template>\r
          <template #default>\r
            <Button>click me</Button>\r
          </template>\r
        </Popover>\r
      </template>\r
\r
      <script setup lang='ts'>\r
\r
        import Button from '@/lib/Button.vue'\r
        import Popover from '@/lib/Popover.vue'\r
      <\/script>\r
\r
      <style scoped lang='scss'>\r
\r
      </style>\r
\r
`,-1)),R=f(()=>r("pre",null,`    <template>\r
      <Popover class="popover" placement="top">\r
        <template #content>\r
          <div>test...</div>\r
        </template>\r
        <template #default>\r
          <Button>click me</Button>\r
        </template>\r
      </Popover>\r
      <Popover class="popover" placement="right">\r
        <template #content>\r
          <div>test...</div>\r
        </template>\r
        <template #default>\r
          <Button>click me</Button>\r
        </template>\r
      </Popover>\r
      <Popover class="popover" placement="bottom">\r
        <template #content>\r
          <div>test...</div>\r
        </template>\r
        <template #default>\r
          <Button>click me</Button>\r
        </template>\r
      </Popover>\r
      <Popover class="popover" placement="left">\r
        <template #content>\r
          <div>test...</div>\r
        </template>\r
        <template #default>\r
          <Button>click me</Button>\r
        </template>\r
      </Popover>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Popover from '@/lib/Popover.vue'\r
    import Button from '@/lib/Button.vue'\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
    .popover{\r
      margin: 5px;\r
    }\r
    </style>\r
\r
`,-1)),U=m({__name:"PopoverPage",setup(o){return(c,_)=>(a(),d(B,null,[O,t(h,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:e(()=>[t(V)]),code:e(()=>[Q]),_:1}),t(h,{title:"\u652F\u6301placement"},{demo:e(()=>[t(M)]),code:e(()=>[R]),_:1})],64))}});const ee=g(U,[["__scopeId","data-v-774d31e3"]]);export{ee as default};
