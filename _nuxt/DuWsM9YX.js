import{e as w,u as k,r as x,c as g,F as D,l as S,g as t,n as u,o as b,a as p,b as v,_ as T,m as z,w as L,t as $,q as B,h as N,v as R,s as A,x as E,d as C,y as H}from"./DzmgnQ8E.js";import{_ as I}from"./DzgwVnRK.js";import{u as P}from"./Chf2LRJN.js";import{_ as V}from"./5mpUSind.js";import{D as i}from"./CJaRBtl4.js";var e=(n=>(n.Dark="Dark",n.Light="Light",n))(e||{});const y=[{index:0,label:"HOME",url:"/",desktop:e.Dark,tablet:e.Dark,mobile:e.Dark,mobileVisible:!1,homeButtonTheme:e.Dark},{index:1,label:"關於我們",url:"/about",desktop:e.Light,tablet:e.Light,mobile:e.Dark,mobileVisible:!0,homeButtonTheme:e.Light},{index:2,label:"服務項目",url:"/service",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{index:3,label:"合作流程",url:"/process",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{index:4,label:"案例分享",url:"/project",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{index:5,label:"聯絡我們",url:"/contact",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light}],j=["href"],G=w({__name:"TheMedia",props:{deviceType:{},deviceTypeModifiers:{},isDarkMode:{},isDarkModeModifiers:{}},emits:["update:deviceType","update:isDarkMode"],setup(n){const r=k(n,"deviceType"),c=k(n,"isDarkMode"),l=x([{url:"mailto:Croxinc.studio@gmail.com",icon:"mail.png",alt:"mail"},{url:"https://www.facebook.com/croxinc.studio/",icon:"fb.png",alt:"facebook"},{url:"https://www.instagram.com/croxinc.studio/",icon:"ig.png",alt:"instagram"},{url:"https://lin.ee/u3jhjn9",icon:"line.png",alt:"line"}]);return(s,d)=>{const f=V;return b(),g("div",{class:u({container:!0,mobile:r.value==t(i).Mobile})},[(b(!0),g(D,null,S(t(l),(m,o)=>(b(),g("button",{class:"socialMedia",key:o},[p("a",{href:m.url,target:"_blank"},[v(f,{class:u({item:!0,mobile:r.value==t(i).Mobile}),src:`/${c.value?"dark":"light"}/${m.icon}`,alt:m.alt,loading:"lazy"},null,8,["class","src","alt"])],8,j)]))),128))],2)}}}),O=T(G,[["__scopeId","data-v-0343ea09"]]);function F(n=i.Desktop){switch(n){case i.Desktop:return y;case i.Tablet:return y;case i.Mobile:return y.filter(r=>r.mobileVisible);default:return y}}const W=["name"],q=w({__name:"TheService",props:{isDarkMode:{},isDarkModeModifiers:{},activeIndex:{},activeIndexModifiers:{},deviceType:{},deviceTypeModifiers:{}},emits:z(["itemClicked"],["update:isDarkMode","update:activeIndex","update:deviceType"]),setup(n,{emit:r}){const c=k(n,"isDarkMode"),l=k(n,"activeIndex"),s=k(n,"deviceType"),d=r,f=x([]);function m(o){d("itemClicked",o)}return(o,a)=>{const h=I;return b(),g("div",{class:u({container:!0,mobile:s.value==t(i).Mobile})},[p("div",{class:u({services:!0,mobile:s.value==t(i).Mobile})},[p("div",{class:u({services:!0,mobile:s.value==t(i).Mobile})},[(b(!0),g(D,null,S(("fnGetServiceMap"in o?o.fnGetServiceMap:t(F))(s.value),(_,M)=>(b(),g("div",{name:`item${M}`,ref_for:!0,ref_key:"serviceItemRefs",ref:f},[v(h,{to:_.url,onClick:oe=>{m(M)},class:u({dark:c.value,light:!c.value,active:l.value==M,service:!0,mobile:s.value==t(i).Mobile})},{default:L(()=>[p("div",{class:u({displayedText:!0,mobile:s.value==t(i).Mobile})},$(_.label),3)]),_:2},1032,["to","onClick","class"])],8,W))),256))],2)],2)],2)}}}),U=T(q,[["__scopeId","data-v-4d8d1232"]]),J={key:0,class:u({container:!0}),ref:"headerItemx"},K={class:"links"},Q={class:"services"},X={class:"socials"},Y=w({__name:"TheHeader",props:{theme:{},themeModifiers:{},activeIndex:{},activeIndexModifiers:{},deviceType:{},deviceTypeModifiers:{}},emits:["update:theme","update:activeIndex","update:deviceType"],setup(n){const r=k(n,"theme"),c=B(()=>r.value==e.Dark),l=k(n,"activeIndex"),s=k(n,"deviceType");return(d,f)=>{const m=V,o=I;return s.value==t(i).Desktop||s.value==t(i).Tablet?(b(),g("div",J,[p("div",null,[v(o,{to:"/"},{default:L(()=>[v(m,{class:"logo",src:`/${t(c)?"dark":"light"}/logo.png`,loading:"lazy"},null,8,["src"])]),_:1})]),p("div",K,[p("div",Q,[v(U,{isDarkMode:t(c),activeIndex:l.value},null,8,["isDarkMode","activeIndex"])]),p("div",X,[v(O,{isDarkMode:t(c)},null,8,["isDarkMode"])])])],512)):N("",!0)}}}),Z=T(Y,[["__scopeId","data-v-0e36ceac"]]),ee={class:"content"},te=w({__name:"main",setup(n){const r=R(),c=x(),l=x(),s=x(0),d=x(i.Mobile),f=B(()=>{var h,_;let o=((h=r.name)==null?void 0:h.toString())=="index"?"":(_=r.name)==null?void 0:_.toString(),a=y.find(M=>M.url==`/${o}`);a&&(c.value=d.value==i.Mobile?(a==null?void 0:a.mobile)??e.Dark:(a==null?void 0:a.desktop)??e.Dark,l.value=(a==null?void 0:a.homeButtonTheme)??e.Dark,s.value=a.index)});function m(){d.value=window.innerWidth<=768?i.Mobile:i.Desktop;let o=y.find(a=>{var h;return a.url==`/${(h=r.name)==null?void 0:h.toString()}`});o&&(c.value=d.value==i.Mobile?(o==null?void 0:o.mobile)??e.Dark:(o==null?void 0:o.desktop)??e.Dark,l.value=(o==null?void 0:o.homeButtonTheme)??e.Dark,s.value=o.index)}return A(()=>{m(),window.addEventListener("resize",m)}),E(()=>{window.removeEventListener("resize",m),P({title:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家",link:[{rel:"icon",type:"image/x-icon",href:"/logo.ico"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{name:"description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{name:"keywords",content:"客製化系統, 流程自動化, RPA, 軟體開發, 萊數位, Croxinc Studio"},{property:"og:title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{property:"og:url",content:"https://www.croxinc.com"},{property:"og:type",content:"website"},{property:"og:site_name",content:"萊|數位(Croxinc Studio)"},{property:"og:description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{property:"og:image",content:"https://www.croxinc.com/images/croxinc.png"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"294"},{property:"og:image:height",content:"263"},{name:"image",content:"https://www.croxinc.com/images/croxinc.png"}],script:[{type:"application/ld+json",children:`{
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "萊|數位(Croxinc Studio)",
        "url": "https://www.croxinc.com",
        "logo": "https://www.croxinc.com/images/croxinc.png",
        "description": "為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。",
        "sameAs": [
          "https://www.facebook.com/croxinc.studio/",
          "https://www.instagram.com/croxinc.studio/"
        ]
      }`}]})}),(o,a)=>{const h=H,_=I;return b(),g(D,null,[p("div",{class:u({container:!0,mobile:t(d)==t(i).Mobile})},[p("div",{class:u({header:!0,mobile:t(d)==t(i).Mobile})},[v(Z,{activeIndex:t(s),theme:t(c),deviceType:t(d)},null,8,["activeIndex","theme","deviceType"])],2),p("div",ee,[v(h,{deviceType:t(d)},null,8,["deviceType"])])],2),t(d)==t(i).Mobile?(b(),g("button",{key:0,class:u({home:!0,dark:t(l)==t(e).Dark,light:t(c)==t(e).Light})},[v(_,{class:u({homeLink:!0,dark:t(l)==t(e).Dark,light:t(l)==t(e).Light}),homeButtonType:t(l),to:"/"},{default:L(()=>a[0]||(a[0]=[C("HOME")])),_:1},8,["class","homeButtonType"])],2)):N("",!0),C(" "+$(t(f)),1)],64)}}}),re=T(te,[["__scopeId","data-v-f485c8dc"]]);export{re as default};
