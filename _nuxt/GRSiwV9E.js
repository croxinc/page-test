import{_ as B}from"./D7N0CQl4.js";import{e as T,m as k,r as x,u as L,f as N,g as h,c as l,a as r,n as t,h as o,b as u,w as c,T as m,o as i,i as p,j as w,_ as S}from"./DLlb0DZ8.js";import{D as s}from"./Bl5UU1Pq.js";const I={key:0,class:"description"},V={key:0,class:"signature"},j=T({__name:"about",props:{deviceType:{},deviceTypeModifiers:{}},emits:k(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(y,{emit:A}){const f=A,e=x(!1);let n=null,d=!1;const a=L(y,"deviceType"),_=()=>{f("AnimationCompleted"),n&&(n(),n=null),d=!1},M=()=>new Promise(v=>{d?v():(e.value=!1,d=!0,n=v)}),b=()=>{f("AnimationStart")};return N(M),h(()=>{e.value=!0}),(v,g)=>{const C=B;return i(),l("div",{class:t({container:!0,mobile:a.value==o(s).Mobile})},[r("div",{class:t({textSection:!0,mobile:a.value==o(s).Mobile})},[r("div",{class:t({intro:!0,mobile:a.value==o(s).Mobile})},[u(m,{name:"slide-up-title",onAfterAppear:_,onAfterLeave:_,onBeforeLeave:b,onBeforeEnter:b,appear:""},{default:c(()=>[e.value?(i(),l("p",{key:0,class:t({title:!0,mobile:a.value==o(s).Mobile})},"關於 Croxinc ",2)):p("",!0)]),_:1}),u(m,{name:"slide-up-title",appear:""},{default:c(()=>[e.value?(i(),l("p",I," 我們深信每一個企業的需求都是獨特的，您的軟體和網站也應該反映這一點。我們專注於與您緊密合作，從深入了解您的業務流程和挑戰開始，共同設計符合您需求的量身打造解決方案。 ")):p("",!0)]),_:1}),u(m,{name:"slide-up-creator",appear:""},{default:c(()=>[e.value?(i(),l("div",V,g[0]||(g[0]=[r("p",{class:"name"},"Lester",-1)]))):p("",!0)]),_:1})],2)],2),r("div",{class:t({imageSection:!0,mobile:a.value==o(s).Mobile})},[u(m,{name:"slide-up",appear:""},{default:c(()=>[e.value?(i(),w(C,{key:0,class:t({aboutImage:!0,mobile:a.value==o(s).Mobile}),src:"/bg_about.jpg",alt:"about",loading:"eager"},null,8,["class"])):p("",!0)]),_:1})],2)],2)}}}),P=S(j,[["__scopeId","data-v-4294ab34"]]);export{P as default};