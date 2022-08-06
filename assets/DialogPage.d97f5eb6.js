import{_ as f}from"./Button.vue_vue_type_style_index_0_lang.827b94c4.js";import{d as p,o as _,v as C,a as i,w as l,c as g,b as n,C as r,i as B,k as D,T as v,D as w,f as d,m as E,E as b,G as y,F}from"./index.de2a9550.js";import{D as $}from"./Demo.c7dba098.js";const A=["onClick"],M={class:"wheel-dialog-mask"},x={class:"wheel-dialog-title"},T=["onClick"],N=n("i",{class:"iconfont icon-quxiao"},null,-1),V=[N],q=d("\u9ED8\u8BA4\u6807\u9898"),G={class:"wheel-dialog-content"},P=n("p",null,"\u9ED8\u8BA4\u5185\u5BB9",-1),S=n("p",null,"\u9ED8\u8BA4\u5185\u5BB9",-1),U=n("p",null,"\u9ED8\u8BA4\u5185\u5BB9",-1),j={class:"wheel-dialog-footer"},z=d("\u53D6\u6D88"),H=d("\u786E\u5B9A"),I=p({__name:"Dialog",props:{visible:{type:Boolean,default:!1},onClickMaskClose:{type:Boolean,default:!1},confirm:null,cancel:null},emits:["update:visible"],setup(c,{emit:s}){const e=c,t=()=>{s("update:visible",!1)},a=()=>{e.onClickMaskClose&&t()},u=()=>{var o;(o=e.confirm)==null||o.call(e),t()},m=()=>{var o;(o=e.cancel)==null||o.call(e),t()};return(o,h)=>(_(),C(w,{to:"body"},[i(v,{name:"wheel-dialog-fade",appear:!0},{default:l(()=>[e.visible?(_(),g("div",{key:0,class:"wheel-dialog-container",onClick:r(a,["self"])},[n("div",M,[n("div",x,[n("div",{class:"wheel-dialog-icon",onClick:r(t,["stop"])},V,8,T),n("b",null,[B(o.$slots,"title",{},()=>[q])])]),n("div",G,[B(o.$slots,"content",{},()=>[P,S,U])]),n("div",j,[i(f,{class:"wheel-dialog-cancel",onClick:r(m,["stop"])},{default:l(()=>[z]),_:1},8,["onClick"]),i(f,{theme:"primary",class:"wheel-dialog-confirm",onClick:r(u,["stop"])},{default:l(()=>[H]),_:1},8,["onClick"])])])],8,A)):D("",!0)]),_:3})]))}});const J=c=>{const s=E(!0),{title:e,confirm:t,cancel:a,content:u,onClickMaskClose:m}=c,o=document.createElement("div");document.body.appendChild(o);const h=b({render(){return y(I,{visible:s.value,"onUpdate:visible":k=>{k===!1&&(s.value=!1,setTimeout(()=>{h.unmount(),o.remove()}))},onClickMaskClose:m,confirm:t,cancel:a},{title(){return e},content(){return u}})}});h.mount(o)},K=d(" show "),L=p({__name:"DialogDemo",setup(c){const s=()=>{console.log("confirm")},e=()=>{console.log("cancel")},t=()=>{J({title:"\u6807\u9898",content:"\u5185\u5BB9",onClickMaskClose:!0,confirm:s,cancel:e})};return(a,u)=>(_(),C(f,{onClick:t},{default:l(()=>[K]),_:1}))}}),O=n("h1",null,"Dialog\u7EC4\u4EF6",-1),Q=n("pre",null,`\r
    <template>\r
      <Button @click=show> show </Button>\r
\r
    </template>\r
\r
    <script setup lang='ts'>\r
    import Button from '@/lib/Button.vue'\r
    import { showDialog } from '@/lib/Dialog'\r
\r
    const confirm = () => {\r
      console.log('confirm')\r
    }\r
    const cancel = () => {\r
      console.log('cancel')\r
    }\r
\r
    const show = () => {\r
      showDialog({\r
        title: '\u6807\u9898',\r
        content: '\u5185\u5BB9',\r
        onClickMaskClose: true,//\u662F\u5426\u5F00\u542F\u70B9\u51FB\u906E\u7F69\u5173\u95ED\r
        confirm,//\u70B9\u51FB\u786E\u5B9A\u540E\u7684\u56DE\u8C03\r
        cancel//\u70B9\u51FB\u53D6\u6D88\u540E\u7684\u56DE\u8C03\r
      })\r
    }\r
\r
    <\/script>\r
\r
    <style scoped lang='scss'>\r
\r
    </style>\r
\r
      `,-1),Y=p({__name:"DialogPage",setup(c){return(s,e)=>(_(),g(F,null,[O,i($,{title:"\u5E38\u89C4\u7528\u6CD5"},{demo:l(()=>[i(L)]),code:l(()=>[Q]),_:1})],64))}});export{Y as default};
