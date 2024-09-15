import{m as L,u as _,r as f,c as h,F as x,A as V,s as e,q as u,o as k,a as c,b as d,_ as I,n as H,w as y,t as S,C as z,v as w,E as G,D as j,G as R,d as B,H as F}from"./D7tHhdpv.js";import{_ as $}from"./KBKg93FU.js";import{_ as E}from"./XOUVqk5k.js";import{D as o}from"./CJaRBtl4.js";var t=(s=>(s.Dark="Dark",s.Light="Light",s))(t||{});const T=[{index:0,label:"HOME",url:"/",desktop:t.Dark,tablet:t.Dark,mobile:t.Dark,mobileVisible:!1,homeButtonTheme:t.Dark},{index:1,label:"關於我們",url:"/about",desktop:t.Light,tablet:t.Light,mobile:t.Dark,mobileVisible:!0,homeButtonTheme:t.Light},{index:2,label:"服務項目",url:"/service",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{index:3,label:"合作流程",url:"/process",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{index:4,label:"案例分享",url:"/project",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{index:5,label:"聯絡我們",url:"/contact",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light}],O=["href"],W=L({__name:"TheMedia",props:{deviceType:{},deviceTypeModifiers:{},isDarkMode:{},isDarkModeModifiers:{}},emits:["update:deviceType","update:isDarkMode"],setup(s){const v=_(s,"deviceType"),a=_(s,"isDarkMode"),r=f([{url:"mailto:Croxinc.studio@gmail.com",icon:"mail.png",alt:"mail"},{url:"https://www.facebook.com/croxinc.studio/",icon:"fb.png",alt:"facebook"},{url:"https://www.instagram.com/croxinc.studio/",icon:"ig.png",alt:"instagram"},{url:"https://lin.ee/u3jhjn9",icon:"line.png",alt:"line"}]);return(l,m)=>{const M=E;return k(),h("div",{class:u({container:!0,mobile:v.value==e(o).Mobile})},[(k(!0),h(x,null,V(e(r),(p,i)=>(k(),h("button",{class:"socialMedia",key:i},[c("a",{href:p.url,target:"_blank"},[d(M,{class:u({item:!0,mobile:v.value==e(o).Mobile}),src:`/${a.value?"dark":"light"}/${p.icon}`,alt:p.alt,loading:"lazy"},null,8,["class","src","alt"])],8,O)]))),128))],2)}}}),C=I(W,[["__scopeId","data-v-d00ce311"]]);function q(s=o.Desktop){switch(s){case o.Desktop:return T;case o.Tablet:return T;case o.Mobile:return T.filter(v=>v.mobileVisible);default:return T}}const A=["name"],P=L({__name:"TheService",props:{isDarkMode:{},isDarkModeModifiers:{},activeIndex:{},activeIndexModifiers:{},deviceType:{},deviceTypeModifiers:{}},emits:H(["itemClicked"],["update:isDarkMode","update:activeIndex","update:deviceType"]),setup(s,{emit:v}){const a=_(s,"isDarkMode"),r=_(s,"activeIndex"),l=_(s,"deviceType"),m=v,M=f([]);function p(i){m("itemClicked",i)}return(i,n)=>{const b=$;return k(),h("div",{class:u({container:!0,mobile:l.value==e(o).Mobile})},[c("div",{class:u({services:!0,mobile:l.value==e(o).Mobile})},[c("div",{class:u({services:!0,mobile:l.value==e(o).Mobile})},[(k(!0),h(x,null,V(("fnGetServiceMap"in i?i.fnGetServiceMap:e(q))(l.value),(g,D)=>(k(),h("div",{name:`item${D}`,ref_for:!0,ref_key:"serviceItemRefs",ref:M},[d(b,{to:g.url,onClick:ie=>{p(D)},class:u({dark:a.value,light:!a.value,active:r.value==D,service:!0,mobile:l.value==e(o).Mobile})},{default:y(()=>[c("div",{class:u({displayedText:!0,mobile:l.value==e(o).Mobile})},S(g.label),3)]),_:2},1032,["to","onClick","class"])],8,A))),256))],2)],2)],2)}}}),N=I(P,[["__scopeId","data-v-7f3fadd2"]]),U={class:"links"},J={class:"services"},K={class:"socials"},Q={class:"socials mobile"},X={class:"services mobile"},Y=L({__name:"TheHeader",props:{theme:{},themeModifiers:{},activeIndex:{},activeIndexModifiers:{},deviceType:{},deviceTypeModifiers:{}},emits:["update:theme","update:activeIndex","update:deviceType"],setup(s){const v=_(s,"theme"),a=z(()=>v.value==t.Dark),r=_(s,"activeIndex"),l=_(s,"deviceType");return(m,M)=>{const p=E,i=$;return k(),h(x,null,[l.value==e(o).Desktop||l.value==e(o).Tablet?(k(),h("div",{key:0,class:u({container:!0,dark:e(a)})},[c("div",null,[d(i,{to:"/"},{default:y(()=>[d(p,{class:"logo",src:`/${e(a)?"dark":"light"}/logo.png`,loading:"lazy"},null,8,["src"])]),_:1})]),c("div",U,[c("div",J,[d(N,{isDarkMode:e(a),activeIndex:r.value},null,8,["isDarkMode","activeIndex"])]),c("div",K,[d(C,{isDarkMode:e(a)},null,8,["isDarkMode"])])])],2)):w("",!0),l.value==e(o).Mobile?(k(),h(x,{key:1},[c("div",{class:u({container:!0,mobile:!0,dark:e(a)})},[d(i,{to:"/"},{default:y(()=>[d(p,{class:"logo",src:`/${e(a)?"dark":"light"}/logo.png`,loading:"lazy"},null,8,["src"])]),_:1}),c("div",Q,[d(C,{isDarkMode:e(a),deviceType:l.value},null,8,["isDarkMode","deviceType"])])],2),c("div",X,[d(N,{isDarkMode:e(a),activeIndex:r.value,deviceType:l.value},null,8,["isDarkMode","activeIndex","deviceType"])])],64)):w("",!0)],64)}}}),Z=I(Y,[["__scopeId","data-v-00b6c62c"]]),ee={class:"content"},te=L({__name:"main",setup(s){const v=G(),a=f(),r=f(),l=f(0),m=f(o.Mobile),M=z(()=>{var b,g;let i=((b=v.name)==null?void 0:b.toString())=="index"?"":(g=v.name)==null?void 0:g.toString(),n=T.find(D=>D.url==`/${i}`);n&&(a.value=m.value==o.Mobile?(n==null?void 0:n.mobile)??t.Dark:(n==null?void 0:n.desktop)??t.Dark,r.value=(n==null?void 0:n.homeButtonTheme)??t.Dark,l.value=n.index)});function p(){m.value=window.innerWidth<=768?o.Mobile:o.Desktop;let i=T.find(n=>{var b;return n.url==`/${(b=v.name)==null?void 0:b.toString()}`});i&&(a.value=m.value==o.Mobile?(i==null?void 0:i.mobile)??t.Dark:(i==null?void 0:i.desktop)??t.Dark,r.value=(i==null?void 0:i.homeButtonTheme)??t.Dark,l.value=i.index)}return j(()=>{p(),window.addEventListener("resize",p)}),R(()=>{window.removeEventListener("resize",p)}),(i,n)=>{const b=F,g=$;return k(),h(x,null,[B(S(e(M))+" ",1),c("div",{class:u({container:!0,mobile:e(m)==e(o).Mobile})},[c("div",{class:u({header:!0,mobile:e(m)==e(o).Mobile})},[d(Z,{activeIndex:e(l),theme:e(a),deviceType:e(m)},null,8,["activeIndex","theme","deviceType"])],2),c("div",ee,[d(b,{deviceType:e(m)},null,8,["deviceType"])])],2),e(m)==e(o).Mobile?(k(),h("button",{key:0,class:u({home:!0,dark:e(r)==e(t).Dark,light:e(a)==e(t).Light})},[d(g,{class:u({homeLink:!0,dark:e(r)==e(t).Dark,light:e(r)==e(t).Light}),homeButtonType:e(r),to:"/"},{default:y(()=>n[0]||(n[0]=[B("HOME")])),_:1},8,["class","homeButtonType"])],2)):w("",!0)],64)}}}),ne=I(te,[["__scopeId","data-v-e0099183"]]);export{ne as default};
