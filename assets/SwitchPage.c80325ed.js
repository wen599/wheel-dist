import{D as m}from"./Demo.c7dba098.js";import{d,g as B,m as i,q as F,o as u,c as p,s as x,t as y,k as C,b as n,n as h,j as _,l as U,v as f,a as o,F as S,w as a}from"./index.de2a9550.js";import"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";const c=d({__name:"Switch",props:{modelValue:{type:Boolean,default:!1},switchOnColor:{default:"#409eff"},switchOffColor:{default:"#dcdfe6"},size:{default:"default"},switchCircleColor:{default:"#fff"},activeText:null,inactiveText:null},emits:["update:modelValue"],setup(s,{emit:t}){const r=s;U(D=>({"5d6501af":_(b),"4a533010":l.value,"56a9a8eb":s.switchCircleColor,c5b9e488:s.switchOffColor,"865162ec":w.value}));const e=B(),l=i(r.switchOnColor);let v=()=>{t("update:modelValue",!r.modelValue)};const b=F(()=>r.size==="large"?"16px":r.size==="small"?"24px":"20px"),w=i("pointer"),V=i(!1);return(e.disabled===""||e.disabled===!0||e.disabled==="true")&&(v=void 0,w.value="no-drop",l.value="rgb(225,225,225)"),(e.loading===""||e.loading===!0||e.loading==="true")&&(v=void 0,w.value="no-drop",V.value=!0),(D,g)=>(u(),p("div",{class:h(["wheel-switch-container",{disabled:_(e).disabled}]),onClick:g[0]||(g[0]=(...z)=>_(v)&&_(v)(...z))},[r.inactiveText?(u(),p("span",{key:0,class:"wheel-inactive-text",style:x(r.modelValue?"":{color:l.value})},y(r.inactiveText),5)):C("",!0),n("div",{class:h(["wheel-switch-content",{close:!r.modelValue}])},[n("div",{class:h(["wheel-switch-circle",V.value?"switch-loading":""])},null,2)],2),r.activeText?(u(),p("span",{key:1,class:"wheel-active-text",style:x(r.modelValue?{color:l.value}:"")},y(r.activeText),5)):C("",!0)],2))}});const E=d({__name:"SwitchDemo1",setup(s){const t=i(!0);return(r,e)=>(u(),f(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l)},null,8,["modelValue"]))}}),k=d({__name:"SwitchDemo2",setup(s){const t=i(!0);return(r,e)=>(u(),f(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),disabled:""},null,8,["modelValue"]))}}),$=d({__name:"SwitchDemo3",setup(s){const t=i(!0);return(r,e)=>(u(),p(S,null,[o(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),size:"small"},null,8,["modelValue"]),o(c,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l)},null,8,["modelValue"]),o(c,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),size:"large"},null,8,["modelValue"])],64))}}),O=d({__name:"SwitchDemo4",setup(s){const t=i(!0);return(r,e)=>(u(),p(S,null,[o(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),"switch-on-color":"red","switch-off-color":"rgba(25,246,45,1)"},null,8,["modelValue"]),o(c,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),"switch-circle-color":"red"},null,8,["modelValue"])],64))}}),T=d({__name:"SwitchDemo5",setup(s){const t=i(!0);return(r,e)=>(u(),f(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),"active-text":"Open","inactive-text":"Close"},null,8,["modelValue"]))}}),A=d({__name:"SwitchDemo6",setup(s){const t=i(!0);return(r,e)=>(u(),f(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),loading:""},null,8,["modelValue"]))}}),N=n("h1",null,"Switch \u7EC4\u4EF6",-1),j=n("pre",null,`      <template>\r
        <Switch v-model="value"></Switch>\r
      </template>\r
\r
      <script setup lang='ts'>\r
        import Switch from '@/lib/Switch.vue'\r
        import { ref } from 'vue'\r
\r
        const value = ref(true)\r
\r
      <\/script>\r
\r
      <style scoped lang='scss'>\r
\r
      </style>\r
    `,-1),q=n("pre",null,`      <template>\r
        <Switch v-model="value" disabled></Switch>\r
      </template>\r
\r
      <script setup lang='ts'>\r
        import Switch from '@/lib/Switch.vue'\r
        import { ref } from 'vue'\r
        const value = ref(true)\r
      <\/script>\r
\r
      <style scoped lang='scss'>\r
\r
      </style>\r
`,-1),H=n("pre",null,`    <template>\r
      <Switch v-model="value" size="small"></Switch>\r
      <Switch v-model="value" ></Switch>\r
      <Switch v-model="value" size="large"></Switch>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Switch from '@/lib/Switch.vue'\r
    import { ref } from 'vue'\r
    const value = ref(true)\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
  `,-1),L=n("pre",null,`\r
    <template>\r
    <Switch v-model="value" switch-on-color="red" switch-off-color="rgba(25,246,45,1)"></Switch>\r
    <Switch v-model="value" switch-circle-color="red"></Switch>\r
\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Switch from '@/lib/Switch.vue'\r
    import { ref } from 'vue'\r
    const value = ref(true)\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
  `,-1),P=n("pre",null,`\r
    <template>\r
      <Switch v-model="value" active-text="Open" inactive-text="Close"></Switch>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Switch from '@/lib/Switch.vue'\r
    import { ref } from 'vue'\r
    const value = ref(true)\r
\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
  `,-1),G=n("pre",null,`    <template>\r
      <Switch v-model="value" loading ></Switch>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import { ref } from 'vue'\r
    const value = ref(true)\r
\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
      `,-1),M=d({__name:"SwitchPage",setup(s){return(t,r)=>(u(),p(S,null,[N,o(m,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:a(()=>[o(E)]),code:a(()=>[j]),_:1}),o(m,{title:"\u652F\u6301disabled"},{demo:a(()=>[o(k)]),code:a(()=>[q]),_:1}),o(m,{title:"\u652F\u6301size"},{demo:a(()=>[o($)]),code:a(()=>[H]),_:1}),o(m,{title:"\u652F\u6301\u81EA\u5B9A\u4E49color"},{demo:a(()=>[o(O)]),code:a(()=>[L]),_:1}),o(m,{title:"\u652F\u6301\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6587\u5B57"},{demo:a(()=>[o(T)]),code:a(()=>[P]),_:1}),o(m,{title:"\u652F\u6301loading"},{demo:a(()=>[o(A)]),code:a(()=>[G]),_:1})],64))}});export{M as default};
