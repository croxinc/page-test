import{e as M,m as h,s as j,u as k,o as i,c as n,a as _,b as m,w as y,q as I,t as N,i as x,T as w,j as D,n as p,h as t,_ as S,r as f,f as $,g as R,F as V,p as q}from"./BqQON032.js";import{_ as z}from"./C255iTad.js";import{D as u}from"./Bl5UU1Pq.js";const E=window.setInterval,F={class:"description"},G=M({__name:"TheProjectItem",props:h({showContent:{type:Boolean},index:{},title:{},image:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(r,{emit:T}){const e=r,s=j(()=>({transitionDelay:`${e.index*.2}s`})),o=k(r,"deviceType");return(a,l)=>{const d=z;return i(),n("div",{class:p({container:!0,mobile:o.value==t(u).Mobile})},[_("div",F,[m(w,{name:"slide-up-item",appear:""},{default:y(()=>[e.showContent?(i(),n("p",{key:0,class:"description-title",style:I(s.value)},N(e.title),5)):x("",!0)]),_:1})]),_("div",{class:p({imageContainer:!0,mobile:o.value==t(u).Mobile})},[m(w,{name:"slide-up-item",appear:""},{default:y(()=>[e.showContent?(i(),D(d,{key:0,class:"item-image",src:e.image,alt:e.title,style:I(s.value),loading:"eager"},null,8,["src","alt","style"])):x("",!0)]),_:1})],2)],2)}}}),H=S(G,[["__scopeId","data-v-0ca641f2"]]),J={class:"container"},K={key:0,class:"overlay-content",style:{height:"0px"}},O=M({__name:"project",props:{deviceType:{},deviceTypeModifiers:{}},emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(r,{emit:T}){const e=f(!1),s=T,o=k(r,"deviceType"),a=f(0),l=f([{title:"後端串接展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/api.gif",index:0},{title:"訂單管理",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/ordering.gif",index:1},{title:"跨系統整合展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/qs.gif",index:2},{title:"各類工具製作",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/tool-demo.gif",index:3},{title:"RPA流程整合",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/RPA.png",index:4},{title:"即時銷售監控",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/monitorSchedule.png",index:5}]),d=j(()=>l.value.slice(a.value,a.value+2)),P=()=>{E(()=>{a.value<l.value.length-1&&(a.value=(a.value+2)%l.value.length)},5e3)};let c=null,v=!1;const b=()=>{s("AnimationCompleted"),c&&(c(),c=null),v=!1},L=()=>new Promise(g=>{v?g():(e.value=!1,v=!0,c=g)}),C=()=>{s("AnimationStart")};return $(L),R(()=>{e.value=!0,P()}),(g,Q)=>(i(),n("div",J,[_("div",{class:p({flowchart:!0,mobile:o.value==t(u).Mobile})},[(i(!0),n(V,null,q(t(d),(A,B)=>(i(),n("div",{key:B,class:p({stepContainer:!0,mobile:o.value==t(u).Mobile})},[m(H,{showContent:t(e),title:A.title,image:A.image,index:B,deviceType:o.value},null,8,["showContent","title","image","index","deviceType"])],2))),128))],2),m(w,{name:"overlay-effects",onAfterAppear:b,onAfterLeave:b,onBeforeLeave:C,onBeforeEnter:C,appear:""},{default:y(()=>[t(e)?(i(),n("div",K)):x("",!0)]),_:1})]))}}),Y=S(O,[["__scopeId","data-v-546019a9"]]);export{Y as default};
