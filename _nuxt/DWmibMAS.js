import{e as k,u as n,s as $,r as M,g as L,h as l,o as a,c,a as i,b as p,w as y,n as u,q as h,T as _,t as I,F as D,p as N,j as E,i as b,_ as S,m as P,f as V}from"./BstPLLGh.js";import{_ as z}from"./Boi8ziGq.js";import{D as m}from"./Bl5UU1Pq.js";const F={class:"imageContainer"},j={class:"description"},q=k({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:image","update:title"],setup(e){const w=n(e,"index"),d=n(e,"description"),t=n(e,"deviceType"),v=n(e,"isArrow"),T=n(e,"image"),s=n(e,"title"),o=$(()=>({transitionDelay:`${w.value*.2}s`})),r=M(!1);return L(()=>{r.value=!0}),(x,f)=>{const g=z;return l(r)?(a(),c("div",{key:0,class:u({container:!0,mobile:t.value==l(m).Mobile})},[i("div",{class:u({cardContainer:!0,mobile:t.value==l(m).Mobile})},[i("div",F,[p(_,{name:"slide-up-item",appear:""},{default:y(()=>[p(g,{class:u({itemImage:!0,mobile:t.value==l(m).Mobile,arrowImage:v.value}),src:T.value,alt:s.value,style:h(o.value),loading:"eager"},null,8,["class","src","alt","style"])]),_:1})])],2),i("div",{class:u({cardContainer:!0,mobile:t.value==l(m).Mobile,arrowText:v.value})},[i("div",{class:u({textContainer:!0,mobile:t.value==l(m).Mobile})},[i("div",j,[p(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionTitle",style:h(o.value)},I(s.value),5)]),_:1}),(a(!0),c(D,null,N(d.value,C=>(a(),E(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionText",style:h(o.value)},I(C),5)]),_:2},1024))),256))])],2)],2)],2)):b("",!0)}}}),R=S(q,[["__scopeId","data-v-88602437"]]),G={class:"container"},H={key:0,class:"overlay-content"},J={key:0,class:"overlay"},K=k({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:P(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(e,{emit:w}){const d=M(!0),t=w,v=n(e,"deviceType"),T=M([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1}]);let s=null,o=!1;const r=()=>{t("AnimationCompleted"),s&&(s(),s=null),o=!1},x=()=>new Promise(g=>{o?g():(d.value=!1,o=!0,s=g)}),f=()=>{t("AnimationStart")};return V(x),L(()=>{d.value=!0}),(g,C)=>(a(),c("div",G,[i("div",{class:u({flowchart:!0,mobile:v.value==l(m).Mobile})},[(a(!0),c(D,null,N(T.value,(A,B)=>(a(),c("div",{key:B},[p(R,{title:A.title,description:A.description,image:A.image,isArrow:A.isArrow,index:B,deviceType:v.value},null,8,["title","description","image","isArrow","index","deviceType"])]))),128))],2),p(_,{name:"overlay-effects",onAfterAppear:r,onAfterLeave:r,onBeforeLeave:f,onBeforeEnter:f,appear:""},{default:y(()=>[d.value?(a(),c("div",H)):b("",!0)]),_:1}),p(_,{name:"overlay-effects",onAfterAppear:r,onAfterLeave:r,onBeforeLeave:f,onBeforeEnter:f,appear:""},{default:y(()=>[d.value?b("",!0):(a(),c("span",J))]),_:1})]))}}),W=S(K,[["__scopeId","data-v-8f110d3d"]]);export{W as default};
