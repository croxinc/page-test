import{e as M,m as g,s as j,u as k,o as t,c as a,a as f,b as m,w as _,q as I,t as N,i as h,T as y,j as $,n as x,h as i,_ as S,r as v,f as D,g as R,F as V,p as q}from"./7FBuIJHm.js";import{_ as z}from"./D3vpPPiN.js";import{D as w}from"./Bl5UU1Pq.js";const E=window.setInterval,F={class:"container"},G={class:"description"},H=M({__name:"TheProjectItem",props:g({showContent:{type:Boolean},index:{},title:{},image:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:g(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(r,{emit:T}){const e=r,n=j(()=>({transitionDelay:`${e.index*.2}s`})),s=k(r,"deviceType");return(o,c)=>{const p=z;return t(),a("div",F,[f("div",G,[m(y,{name:"slide-up-item",appear:""},{default:_(()=>[e.showContent?(t(),a("p",{key:0,class:"description-title",style:I(n.value)},N(e.title),5)):h("",!0)]),_:1})]),f("div",{class:x({imageContainer:!0,mobile:s.value==i(w).Mobile})},[m(y,{name:"slide-up-item",appear:""},{default:_(()=>[e.showContent?(t(),$(p,{key:0,class:"item-image",src:e.image,alt:e.title,style:I(n.value),loading:"eager"},null,8,["src","alt","style"])):h("",!0)]),_:1})],2)])}}}),J=S(H,[["__scopeId","data-v-cdcd630e"]]),K={class:"container"},O={key:0,class:"overlay-content",style:{height:"0px"}},Q=M({__name:"project",props:{deviceType:{},deviceTypeModifiers:{}},emits:g(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(r,{emit:T}){const e=v(!1),n=T,s=k(r,"deviceType"),o=v(0),c=v([{title:"後端串接展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/api.gif",index:0},{title:"訂單管理",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/ordering.gif",index:1},{title:"跨系統整合展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/qs.gif",index:2},{title:"各類工具製作",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/tool-demo.gif",index:3},{title:"RPA流程整合",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/RPA.png",index:4},{title:"即時銷售監控",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/monitorSchedule.png",index:5}]),p=j(()=>c.value.slice(o.value,o.value+2)),P=()=>{E(()=>{o.value<c.value.length-1&&(o.value=(o.value+2)%c.value.length)},5e3)};let l=null,u=!1;const C=()=>{n("AnimationCompleted"),l&&(l(),l=null),u=!1},L=()=>new Promise(d=>{u?d():(e.value=!1,u=!0,l=d)}),b=()=>{n("AnimationStart")};return D(L),R(()=>{e.value=!0,P()}),(d,U)=>(t(),a("div",K,[f("div",{class:x({flowchart:!0,mobile:s.value==i(w).Mobile})},[(t(!0),a(V,null,q(i(p),(A,B)=>(t(),a("div",{key:B,class:x({stepContainer:!0,mobile:s.value==i(w).Mobile})},[m(J,{showContent:i(e),title:A.title,image:A.image,index:B,deviceType:s.value},null,8,["showContent","title","image","index","deviceType"])],2))),128))],2),m(y,{name:"overlay-effects",onAfterAppear:C,onAfterLeave:C,onBeforeLeave:b,onBeforeEnter:b,appear:""},{default:_(()=>[i(e)?(t(),a("div",O)):h("",!0)]),_:1})]))}}),Z=S(Q,[["__scopeId","data-v-546019a9"]]);export{Z as default};
