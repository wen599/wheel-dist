import{D as I}from"./Demo.c7dba098.js";import{d as _,m as C,y as w,J as V,o as d,c as f,b as t,t as D,n as y,j as v,i as $,l as j,K as k,x as S,h as O,I as A,f as N,L as P,v as b,w as a,a as c,F as z,p as H,e as J,_ as K}from"./index.de2a9550.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const L={class:"title-text"},M=t("i",{class:"iconfont icon-xiangyou1"},null,-1),R=[M],T={class:"collapse-item-content"},i=_({__name:"CollapseItem",props:{title:{default:"\u9ED8\u8BA4\u6807\u9898"},name:null},setup(s){const o=s;j(e=>({"3a29de1e":u.value}));const n=C(),u=C("");w(()=>{u.value=n.value.scrollHeight+"px"});const l=k("visibleObj"),r=V(l,o.name);return(e,p)=>(d(),f("div",{class:y(["collapse-item",v(r)?"collapse-active":""]),ref_key:"item",ref:n},[t("div",{class:"collapse-item-title",onClick:p[0]||(p[0]=m=>r.value=!v(r))},[t("div",L,D(o.title),1),t("div",{class:y(["title-icon",v(r)?"collapse-icon-rotate":""])},R,2)]),t("div",T,[$(e.$slots,"default")])],2))}});const U={class:"wheel-collapse-container"},q=N("\u9ED8\u8BA4\u5185\u5BB9"),x=_({__name:"Collapse",props:{modelValue:{default:()=>[]}},emits:["change","update:modelValue"],setup(s,{emit:o}){var r;const n=s,u=S(),l=O({});return(r=u.default)==null||r.call(u).forEach(e=>{var m,B,g;if(e.type!==i)throw new Error("collapse\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662FCollapseItem");if(((m=e.props)==null?void 0:m.name)===void 0)throw new Error("collapseItem\u7EC4\u4EF6\u5FC5\u987B\u6709name\u5C5E\u6027");if(Object.keys(l).find(F=>{var E;return F===((E=e.props)==null?void 0:E.name)})!==void 0)throw new Error("collapseItem\u7EC4\u4EF6name\u5C5E\u6027\u5FC5\u987B\u5177\u6709\u552F\u4E00\u6027");l[(B=e.props)==null?void 0:B.name]=(g=n.modelValue)==null?void 0:g.includes(e.props.name)}),P("visibleObj",l),A(l,()=>{const e=[];for(const p in l)l[p]===!0&&e.push(p);o("update:modelValue",e),o("change",e)},{deep:!0}),(e,p)=>(d(),f("div",U,[$(e.$slots,"default",{},()=>[q])]))}});const G=t("div",null,"\u5185\u5BB91",-1),Q=t("div",null,"\u5185\u5BB92",-1),W=_({__name:"CollapseDemo1",setup(s){return(o,n)=>(d(),b(x,null,{default:a(()=>[c(i,{title:"\u6807\u98981",name:"1"},{default:a(()=>[G]),_:1}),c(i,{title:"\u6807\u98982",name:"2"},{default:a(()=>[Q]),_:1})]),_:1}))}}),X=t("div",null,"\u5185\u5BB91",-1),Y=t("div",null,"\u5185\u5BB92",-1),Z=_({__name:"CollapseDemo2",setup(s){const o=C(["1"]),n=u=>{console.log(u)};return(u,l)=>(d(),b(x,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value=r),onChange:n},{default:a(()=>[c(i,{title:"\u6807\u98981",name:"1"},{default:a(()=>[X]),_:1}),c(i,{title:"\u6807\u98982",name:"2"},{default:a(()=>[Y]),_:1})]),_:1},8,["modelValue"]))}}),h=s=>(H("data-v-67cc50de"),s=s(),J(),s),ee=h(()=>t("h1",null,"Collapse\u7EC4\u4EF6",-1)),te=h(()=>t("pre",null,`      <template>\r
        <Collapse >\r
          <CollapseItem title="\u6807\u98981" name="1"> //name:\u552F\u4E00\u6807\u8BC6\r
            <div>\u5185\u5BB91</div>\r
          </CollapseItem>\r
          <CollapseItem title="\u6807\u98982" name="2">\r
            <div>\u5185\u5BB92</div>\r
          </CollapseItem>\r
        </Collapse>\r
      </template>\r
\r
      <script setup lang='ts'>\r
        import Collapse from '@/lib/collapse/Collapse.vue'\r
        import CollapseItem from '@/lib/collapse/CollapseItem.vue'\r
\r
      <\/script>\r
\r
      <style scoped lang='scss'>\r
\r
      </style>\r
`,-1)),le=h(()=>t("pre",null,`    <template>\r
        <Collapse v-model="value" @change="test">\r
          <CollapseItem title="\u6807\u98981" name="1">\r
            <div>\u5185\u5BB91</div>\r
          </CollapseItem>\r
          <CollapseItem title="\u6807\u98982" name="2">\r
            <div>\u5185\u5BB92</div>\r
          </CollapseItem>\r
        </Collapse>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Collapse from '@/lib/collapse/Collapse.vue'\r
    import CollapseItem from '@/lib/collapse/CollapseItem.vue'\r
    import { ref } from 'vue'\r
\r
    const value = ref(['1'])\r
    const test = (names:string[]) => {\r
      console.log(names)\r
    }\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
`,-1)),se=_({__name:"CollapsePage",setup(s){return(o,n)=>(d(),f(z,null,[ee,c(I,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:a(()=>[c(W)]),code:a(()=>[te]),_:1}),c(I,{title:"\u652F\u6301\u7ED1\u5B9Avalue\u548Cchange\u4E8B\u4EF6"},{demo:a(()=>[c(Z)]),code:a(()=>[le]),_:1})],64))}});const re=K(se,[["__scopeId","data-v-67cc50de"]]);export{re as default};
