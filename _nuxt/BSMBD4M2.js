import{e as M,m as x,u as A,q as S,o as a,c as p,b as d,w as u,n as T,h as s,s as k,T as v,a as c,t as L,_ as C,r as B,j as g,F as V,p as $,k as D,i as f,f as w,g as R,d as m}from"./HisktIua.js";import{_ as z}from"./CMvdvpi5.js";import{D as h}from"./Bl5UU1Pq.js";const E={class:"container"},F=M({__name:"TheServiceItem",props:x({index:{},totalCount:{},icon:{},name:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:["update:deviceType"],setup(o){const l=A(o,"deviceType"),t=o,r=S(()=>({transitionDelay:`${t.index*.2}s`})),i=S(()=>({transitionDelay:`${t.totalCount*.2}s`}));return(e,n)=>{const y=z;return a(),p("div",E,[d(v,{name:"slide-up-item",appear:""},{default:u(()=>[d(y,{src:e.icon,alt:e.name+" display",class:T({serviceIcon:!0,mobile:l.value==s(h).Mobile}),style:k(r.value),loading:"eager"},null,8,["src","alt","class","style"])]),_:1}),d(v,{name:"slide-up-name",appear:""},{default:u(()=>[c("p",{class:T({serviceName:!0,mobile:l.value==s(h).Mobile}),style:k(i.value)},L(e.name),7)]),_:1})])}}}),P=C(F,[["__scopeId","data-v-64061362"]]),j={class:"services"},q=M({__name:"TheServiceItemList",props:x({isVisible:{type:Boolean}},{deviceType:{},deviceTypeModifiers:{}}),emits:["update:deviceType"],setup(o){const l=A(o,"deviceType"),t=B([{displayText:"流程規劃",path:"/MINICRM.png"},{displayText:"訂單系統",path:"/order.png"},{displayText:"跨系統整合",path:"/integrate.png"},{displayText:"內部系統開發",path:"/內部系統管理開發.png"}]);return(r,i)=>(a(),p("div",j,[r.isVisible?(a(),g(D,{key:0,name:"slide-up-item"},{default:u(()=>[(a(!0),p(V,null,$(s(t),(e,n)=>(a(),g(P,{class:"service",key:n,icon:e.path,name:e.displayText,index:n,"total-count":s(t).length,deviceType:l.value},null,8,["icon","name","index","total-count","deviceType"]))),128))]),_:1})):f("",!0)]))}}),G=C(q,[["__scopeId","data-v-d5450e9a"]]),H={class:"container"},J={class:"service-intro"},K={class:"item-container"},O=M({__name:"service",props:{deviceType:{},deviceTypeModifiers:{}},emits:x(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(o,{emit:l}){const t=A(o,"deviceType"),r=l,i=B(!1);let e=null,n=!1;const y=()=>{r("AnimationCompleted"),e&&(e(),e=null),n=!1},N=()=>new Promise(b=>{n?b():(i.value=!1,n=!0,e=b)}),I=()=>{r("AnimationStart")};return w(N),R(()=>{i.value=!0}),(b,_)=>(a(),p("div",H,[c("div",J,[d(v,{name:"slide-up-title",appear:""},{default:u(()=>[s(i)?(a(),p("div",{key:0,class:T({title:!0,mobile:t.value==s(h).Mobile})},_[0]||(_[0]=[m("專屬客製化解決方案"),c("br",null,null,-1),m("全面提升效率與競爭力！")]),2)):f("",!0)]),_:1}),d(v,{name:"slide-up-description",onAfterAppear:y,onAfterLeave:y,onBeforeLeave:I,onBeforeEnter:I,appear:""},{default:u(()=>[s(i)?(a(),p("div",{key:0,class:T({description:!0,mobile:t.value==s(h).Mobile})},_[1]||(_[1]=[m(" 我們致力於為中小企業、新創企業以及需要高度客製化流程的企業，提供量身訂製的管理系統。"),c("br",null,null,-1),m(" 如軟體自動化流程規劃(如：RPA)、訂單系統、客戶關係管理、人事管理系統，亦或是各類的跨系統整合。"),c("br",null,null,-1),m(" 都能根據您的需求進行深度量身打造， 助您實現業務流程的自動化和數位化轉型。 ")]),2)):f("",!0)]),_:1})]),c("div",K,[d(v,{name:"slide-close-items"},{default:u(()=>[s(i)?(a(),g(G,{key:0,isVisible:!0,deviceType:t.value},null,8,["deviceType"])):f("",!0)]),_:1})])]))}}),X=C(O,[["__scopeId","data-v-638c9470"]]);export{X as default};
