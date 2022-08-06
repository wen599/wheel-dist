import{_ as l}from"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";import{d,l as C,q as b,m as _,y as D,o as i,v as B,w as o,c as y,b as p,n as E,j as x,f as a,t as A,k as $,T as F,a as c,H as N,F as k,_ as V}from"./index.de2a9550.js";import{D as v}from"./Demo.c7dba098.js";const q={key:0,class:"wheel-toast"},L=d({__name:"Toast",props:{time:{default:3e3},content:{default:"\u9ED8\u8BA4\u63D0\u793A\u5185\u5BB9"},type:{default:"message"},close:null},setup(t){const e=t;C(T=>({"6025f9ae":n.value,ed0a4b32:f.value,"0eb40175":g.value}));const r=b(()=>e.type==="success"?"icon-gou":e.type==="warning"?"icon-gantanhao-yuankuang":e.type==="message"?"icon-i":"icon-cuowu"),s=_(!0);D(()=>{setTimeout(()=>{s.value=!1},e.time)});const n=_(""),f=_(""),g=_(""),m=(T,h,w)=>{g.value=T,n.value=h,f.value=w};switch(e.type){case"warning":m("#e6a23c","#faecd8","#fdf6ec");break;case"success":m("#67c23a","#e1f3d8","#f0f9eb");break;case"message":m("#909399","#e9e9eb","#f4f4f5");break;case"error":m("#f56e6e","#fde2e2","#fef0f0");break}return(T,h)=>(i(),B(F,{name:"wheel-toast-fade",appear:"",onAfterLeave:t.close},{default:o(()=>[s.value?(i(),y("div",q,[p("i",{class:E(["iconfont",x(r)])},null,2),a(" "+A(e.content),1)])):$("",!0)]),_:1},8,["onAfterLeave"]))}});const u=t=>{let e=document.querySelector(".wheel-toast-container");e===null&&(e=document.createElement("div"),e.className="wheel-toast-container",document.body.appendChild(e)),typeof t=="string"&&(t={content:t});const r=t.close;t.close=()=>{r==null||r(),s.remove(),(e==null?void 0:e.children.length)===0&&e.remove()};const s=document.createElement("div"),n=c(L,t);N(n,s),e.appendChild(s.firstChild)},S=a("success"),j=a("warning"),z=a("message"),H=a("error"),I=d({__name:"ToastDemo1",setup(t){const e=()=>{u({content:"success",time:5e3,close:()=>{console.log("close")},type:"success"})},r=()=>{u({content:"warning",time:1e3,close:()=>{console.log("close")},type:"warning"})},s=()=>{u({content:"message",time:1e3,close:()=>{console.log("close")},type:"message"})},n=()=>{u({content:"error",time:1e3,close:()=>{console.log("close")},type:"error"})};return(f,g)=>(i(),y(k,null,[c(l,{onClick:e},{default:o(()=>[S]),_:1}),c(l,{onClick:r},{default:o(()=>[j]),_:1}),c(l,{onClick:s},{default:o(()=>[z]),_:1}),c(l,{onClick:n},{default:o(()=>[H]),_:1})],64))}});const M=V(I,[["__scopeId","data-v-75cf0317"]]),P=a("click me"),G=d({__name:"ToastDemo2",setup(t){const e=()=>{u("\u63D0\u793A\u5185\u5BB9")};return(r,s)=>(i(),B(l,{onClick:e},{default:o(()=>[P]),_:1}))}}),J=p("h1",null,"Toast\u7EC4\u4EF6",-1),K=p("pre",null,`    <template>\r
    <Button @click="showToast">click me</Button>\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import { toast } from '@/lib/Toast/Toast'\r
    import Button from '@/lib/Button.vue'\r
    const showToast = () => {\r
      toast('\u63D0\u793A\u5185\u5BB9')\r
    }\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
      `,-1),O=p("pre",null,`\r
      <template>\r
        <Button @click="successToast">success</Button>\r
        <Button @click="warningToast">warning</Button>\r
        <Button @click="messageToast">message</Button>\r
        <Button @click="errorToast">error</Button>\r
\r
      </template>\r
\r
      <script setup lang='ts'>\r
        import Button from '@/lib/Button.vue'\r
        import { toast } from '@/lib/Toast/Toast'\r
        const successToast = () => {\r
          toast({\r
            content: 'success',\r
            time: 5000,\r
            close: () => {\r
              console.log('close')\r
            },\r
            type: 'success'\r
          })\r
        }\r
        const warningToast = () => {\r
          toast({\r
            content: 'warning',\r
            time: 1000,\r
            close: () => {\r
              console.log('close')\r
            },\r
            type: 'warning'\r
          })\r
        }\r
        const messageToast = () => {\r
          toast({\r
            content: 'message',\r
            time: 1000,\r
            close: () => {\r
              console.log('close')\r
            },\r
            type: 'message'\r
          })\r
        }\r
        const errorToast = () =>; {\r
          toast({\r
            content: 'error',\r
            time: 1000,\r
            close: () =>; {\r
              console.log('close')\r
            },\r
            type: 'error'\r
          })\r
        }\r
      <\/script>\r
\r
      <style scoped lang='scss'>\r
\r
      </style>\r
\r
      `,-1),W=d({__name:"ToastPage",setup(t){const e=`
time:\u81EA\u52A8\u5173\u95ED\u65F6\u95F4 \u5355\u4F4D:ms,
close:\u81EA\u52A8\u5173\u95ED\u540E\u7684\u56DE\u8C03\u51FD\u6570,
type: success|warning|message|age
`;return(r,s)=>(i(),y(k,null,[J,c(v,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:o(()=>[c(G)]),code:o(()=>[K]),_:1}),c(v,{title:"\u652F\u6301time/type/close",text:e},{demo:o(()=>[c(M)]),code:o(()=>[O]),_:1})],64))}});export{W as default};
