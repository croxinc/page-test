import{e as k,u as s,q as C,r as h,g as L,h as i,o as l,c as d,a as r,b as g,w,n as t,s as T,T as y,t as B,F as D,p as N,j as E,i as x,_ as S,m as P,f as V}from"./CIAp7-RW.js";import{_ as z}from"./DV4lsD57.js";import{D as a}from"./Bl5UU1Pq.js";const F={class:"imageContainer"},j={class:"description"},q=k({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},mobileImage:{},mobileImageModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:mobileImage","update:image","update:title"],setup(o){const I=s(o,"index"),u=s(o,"description"),e=s(o,"deviceType"),p=s(o,"isArrow"),M=s(o,"mobileImage"),v=s(o,"image"),f=C(()=>e.value==a.Mobile?M.value:v.value),n=s(o,"title"),b=C(()=>({transitionDelay:`${I.value*.2}s`})),c=h(!1);return L(()=>{c.value=!0}),(A,$)=>{const m=z;return i(c)?(l(),d("div",{key:0,class:t({container:!0,mobile:e.value==i(a).Mobile})},[r("div",{class:t({cardContainer:!0,mobile:e.value==i(a).Mobile})},[r("div",F,[g(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:w(()=>[g(m,{class:t({itemImage:!0,mobile:e.value==i(a).Mobile,arrowImage:p.value}),src:f.value,alt:n.value,style:T(b.value),loading:"eager"},null,8,["class","src","alt","style"])]),_:1},8,["class"])])],2),r("div",{class:t({cardContainer:!0,mobile:e.value==i(a).Mobile,arrowText:p.value})},[r("div",{class:t({textContainer:!0,mobile:e.value==i(a).Mobile})},[r("div",j,[g(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:w(()=>[r("p",{class:"descriptionTitle",style:T(b.value)},B(n.value),5)]),_:1},8,["class"]),(l(!0),d(D,null,N(u.value,_=>(l(),E(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:w(()=>[r("p",{class:"descriptionText",style:T(b.value)},B(_),5)]),_:2},1032,["class"]))),256))])],2)],2)],2)):x("",!0)}}}),R=S(q,[["__scopeId","data-v-f3a5b42b"]]),G={class:"container"},H={key:0,class:"overlay-content"},J={key:0,class:"overlay"},K=k({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:P(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(o,{emit:I}){const u=h(!0),e=I,p=s(o,"deviceType"),M=h([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1,mobileImage:"/釐清專案.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1,mobileImage:"/確認合作.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1,mobileImage:"/專案進行.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1,mobileImage:"/驗收結案.png"}]);let v=null,f=!1;const n=()=>{e("AnimationCompleted"),v&&(v(),v=null),f=!1},b=()=>new Promise(A=>{f?A():(u.value=!1,f=!0,v=A)}),c=()=>{e("AnimationStart")};return V(b),L(()=>{u.value=!0}),(A,$)=>(l(),d("div",G,[r("div",{class:t({flowchart:!0,mobile:p.value==i(a).Mobile})},[(l(!0),d(D,null,N(M.value,(m,_)=>(l(),d("div",{key:_},[g(R,{title:m.title,description:m.description,image:m.image,"mobile-image":m.mobileImage,isArrow:m.isArrow,index:_,deviceType:p.value},null,8,["title","description","image","mobile-image","isArrow","index","deviceType"])]))),128))],2),g(y,{name:"overlay-effects",onAfterAppear:n,onAfterLeave:n,onBeforeLeave:c,onBeforeEnter:c,appear:""},{default:w(()=>[u.value?(l(),d("div",H)):x("",!0)]),_:1}),g(y,{name:"overlay-effects",class:t({mobile:p.value==i(a).Mobile}),onAfterAppear:n,onAfterLeave:n,onBeforeLeave:c,onBeforeEnter:c,appear:""},{default:w(()=>[u.value?x("",!0):(l(),d("span",J))]),_:1},8,["class"])]))}}),W=S(K,[["__scopeId","data-v-f1987f2f"]]);export{W as default};
