import{e as I,u as r,q as N,o as a,c as n,a as i,b as p,w as y,n as c,g as d,p as h,T as _,t as x,F as L,l as k,i as S,_ as D,m as $,r as C,f as E,h as B}from"./BYxJdf8p.js";import{_ as P}from"./DoTl53KX.js";import{D as m}from"./Bl5UU1Pq.js";const V={class:"imageContainer"},z={class:"description"},F=I({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:image","update:title"],setup(e){const w=r(e,"index"),u=r(e,"description"),t=r(e,"deviceType"),v=r(e,"isArrow"),T=r(e,"image"),s=r(e,"title"),o=N(()=>({transitionDelay:`${w??0*.2}s`}));return(f,M)=>{const l=P;return a(),n("div",{class:c({container:!0,mobile:t.value==d(m).Mobile})},[i("div",{class:c({cardContainer:!0,mobile:t.value==d(m).Mobile})},[i("div",V,[p(_,{name:"slide-up-item",appear:""},{default:y(()=>[p(l,{class:c({itemImage:!0,mobile:t.value==d(m).Mobile,arrowImage:v.value}),src:T.value,alt:s.value,style:h(o.value),loading:"eager"},null,8,["class","src","alt","style"])]),_:1})])],2),i("div",{class:c({cardContainer:!0,mobile:t.value==d(m).Mobile,arrowText:v.value})},[i("div",{class:c({textContainer:!0,mobile:t.value==d(m).Mobile})},[i("div",z,[p(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionTitle",style:h(o.value)},x(s.value),5)]),_:1}),(a(!0),n(L,null,k(u.value,g=>(a(),S(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionText",style:h(o.value)},x(g),5)]),_:2},1024))),256))])],2)],2)],2)}}}),q=D(F,[["__scopeId","data-v-80ee5713"]]),R={class:"container"},j={key:0,class:"overlay-content"},G={key:0,class:"overlay"},H=I({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:$(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(e,{emit:w}){const u=C(!0),t=w,v=r(e,"deviceType"),T=C([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1}]);let s=null,o=!1;const f=()=>{t("AnimationCompleted"),s&&(s(),s=null),o=!1},M=()=>new Promise(g=>{o?g():(u.value=!1,o=!0,s=g)}),l=()=>{t("AnimationStart")};return E(M),(g,J)=>(a(),n("div",R,[i("div",{class:c({flowchart:!0,mobile:v.value==d(m).Mobile})},[(a(!0),n(L,null,k(T.value,(A,b)=>(a(),n("div",{key:b},[p(q,{title:A.title,description:A.description,image:A.image,isArrow:A.isArrow,index:b,deviceType:v.value},null,8,["title","description","image","isArrow","index","deviceType"])]))),128))],2),p(_,{name:"overlay-effects",onAfterAppear:f,onAfterLeave:f,onBeforeLeave:l,onBeforeEnter:l,appear:""},{default:y(()=>[u.value?(a(),n("div",j)):B("",!0)]),_:1}),p(_,{name:"overlay-effects",onAfterAppear:f,onAfterLeave:f,onBeforeLeave:l,onBeforeEnter:l},{default:y(()=>[u.value?B("",!0):(a(),n("span",G))]),_:1})]))}}),U=D(H,[["__scopeId","data-v-8aead6a8"]]);export{U as default};
