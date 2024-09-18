import{e as D,u as _,r as b,c as k,F as B,l as S,g as t,o as w,b as f,w as I,n as c,_ as P,q as L,s as $,v as z,x as N,a as y,p as H,t as A,y as j,h as W,z as G,d as F}from"./BeyWnTws.js";import{_ as C}from"./Dao89QDo.js";import{u as O}from"./BbMUMNU5.js";import{_ as R}from"./T2YluauV.js";import{D as n}from"./Bl5UU1Pq.js";var p=(i=>(i.Default="Default",i.Home="Home",i.About="About",i.Service="Service",i.Process="Process",i.Project="Project",i.Contact="Contact",i))(p||{}),e=(i=>(i.Dark="Dark",i.Light="Light",i.Default="Default",i))(e||{});const x=[{pageIndex:0,mobileIndex:-1,desktopIndex:0,pageType:p.Home,label:"HOME",url:"/",desktop:e.Dark,tablet:e.Dark,mobile:e.Dark,mobileVisible:!1,homeButtonTheme:e.Dark},{pageIndex:1,mobileIndex:0,desktopIndex:1,pageType:p.About,label:"關於我們",url:"/about",desktop:e.Light,tablet:e.Light,mobile:e.Dark,mobileVisible:!0,homeButtonTheme:e.Light},{pageIndex:2,mobileIndex:1,desktopIndex:2,pageType:p.Service,label:"服務項目",url:"/service",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{pageIndex:3,mobileIndex:2,desktopIndex:3,pageType:p.Process,label:"合作流程",url:"/process",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{pageIndex:4,mobileIndex:3,desktopIndex:4,pageType:p.Project,label:"案例分享",url:"/project",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light},{pageIndex:5,mobileIndex:4,desktopIndex:5,pageType:p.Contact,label:"聯絡我們",url:"/contact",desktop:e.Light,tablet:e.Light,mobile:e.Light,mobileVisible:!0,homeButtonTheme:e.Light}],q={class:"container"},U=D({__name:"TheMedia",props:{deviceType:{},deviceTypeModifiers:{},theme:{},themeModifiers:{}},emits:["update:deviceType","update:theme"],setup(i){const a=_(i,"deviceType"),o=_(i,"theme"),g=b([{url:"mailto:Croxinc.studio@gmail.com",icon:"mail.png",alt:"mail"},{url:"https://www.facebook.com/croxinc.studio/",icon:"fb.png",alt:"facebook"},{url:"https://www.instagram.com/croxinc.studio/",icon:"ig.png",alt:"instagram"},{url:"https://lin.ee/u3jhjn9",icon:"line.png",alt:"line"}]);return(h,T)=>{const l=R,m=C;return w(),k("ul",q,[(w(!0),k(B,null,S(t(g),(u,d)=>(w(),k("li",{key:d},[f(m,{to:u.url,target:"_blank",class:"nuxtLink"},{default:I(()=>[f(l,{class:c({item:!0,mobile:a.value==t(n).Mobile}),src:`/${o.value==t(e).Dark?"dark":"light"}/${u.icon}`,alt:u.alt,loading:"eager"},null,8,["class","src","alt"])]),_:2},1032,["to"])]))),128))])}}}),J=P(U,[["__scopeId","data-v-c5d0b6e6"]]);function K(i,a){if(!a)return-1;let o=x.find(g=>g.pageType==a);if(o)switch(i){case n.Desktop:return o.desktopIndex;case n.Mobile:return o.mobileIndex;default:return o.desktopIndex}return-1}function Q(i=n.Desktop){switch(i){case n.Desktop:return x;case n.Mobile:return x.filter(a=>a.mobileVisible);default:return x}}const X=["name"],Y=D({__name:"TheService",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},lastPage:{},lastPageModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:lastPage","update:activedPage"],setup(i){const a=_(i,"theme"),o=_(i,"deviceType"),g=_(i,"lastPage"),h=_(i,"activedPage"),T=b([]),l=b(null),m=b(!1),u=b(0),d=L(()=>{if(o.value==n.Default||h.value==p.Default||o.value==n.Mobile&&h.value==p.Home||u.value==0||(l.value=T.value[K(o.value,h.value)],l==null||l.value==null)||l.value.getBoundingClientRect().top<=0)return"";const s=b("");return s.value+="position: fixed;",s.value+="border-radius: 5px;",s.value+="border: 2px solid #c9c9c9;",s.value+="z-index: 2;",s.value+=`top: ${l.value.getBoundingClientRect().top-1}px;`,s.value+=`left: ${l.value.getBoundingClientRect().left-4}px;`,s.value+=`width: ${l.value.getBoundingClientRect().width+4}px;`,s.value+=`height: ${l.value.getBoundingClientRect().height+2}px;`,s.value+=g.value==p.Default||m.value==!1?"transition: none;":"transition: all 2.0s cubic-bezier(0.25, 0.1, 0.25, 1);",s.value+=l.value.getBoundingClientRect().top>0?"visibility: visible !important;":"visibility: hidden !important;",s.value});function v(s){s!=null&&(g.value=h.value,h.value=s.pageType,m.value=!0)}function r(){u.value=Date.now(),m.value=!1}return $(async()=>{await z(),r(),window.addEventListener("resize",r),window.addEventListener("scroll",r)}),N(()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r)}),(s,ae)=>{const E=C;return w(),k("div",{class:c({container:!0,mobile:o.value==t(n).Mobile})},[y("ul",{class:c({services:!0,mobile:o.value==t(n).Mobile}),style:{"list-style":"none",padding:"0",margin:"0"}},[(w(!0),k(B,null,S(("fnGetServiceMap"in s?s.fnGetServiceMap:t(Q))(o.value),(M,V)=>(w(),k("li",{class:c({serviceContainer:!0,mobile:o.value==t(n).Mobile}),name:`item${V}`},[y("div",{class:c({serviceItem:!0,mobile:o.value==t(n).Mobile}),ref_for:!0,ref_key:"serviceItemRefs",ref:T},[f(E,{to:M.url,onClick:le=>{v(M)},class:c({service:!0,light:a.value==t(e).Light,dark:a.value==t(e).Dark,active:h.value==M.pageType})},{default:I(()=>[y("div",{class:c({displayedText:!0,mobile:o.value==t(n).Mobile})},A(M.label),3)]),_:2},1032,["to","onClick","class"])],2)],10,X))),256))],2),y("div",{style:H(t(d))},null,4)],2)}}}),Z=P(Y,[["__scopeId","data-v-61af3324"]]),ee=D({__name:"TheHeader",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:activedPage"],setup(i){const a=_(i,"theme"),o=_(i,"deviceType"),g=_(i,"activedPage"),h=b(p.Default);return(T,l)=>{const m=R,u=C;return w(),k("div",{class:c({container:!0,mobile:o.value==t(n).Mobile})},[f(u,{to:"/",class:c({logos:!0,mobile:o.value==t(n).Mobile})},{default:I(()=>[f(m,{class:"logo",src:`/${a.value==t(e).Dark?"dark":"light"}/logo.png`,loading:"eager"},null,8,["src"])]),_:1},8,["class"]),y("div",{class:c({services:!0,mobile:o.value==t(n).Mobile})},[f(Z,{theme:a.value,activedPage:g.value,lastPage:t(h),deviceType:o.value},null,8,["theme","activedPage","lastPage","deviceType"])],2),y("div",{class:c({medias:!0,mobile:o.value==t(n).Mobile})},[f(J,{theme:a.value},null,8,["theme"])],2)],2)}}}),te=P(ee,[["__scopeId","data-v-908773da"]]),ie={class:"app"},oe={class:"content"},ne=D({__name:"main",setup(i){const a=j(),o=b(e.Default),g=b(0),h=L(()=>{var d,v;return((d=x.find(r=>r.url==a.path))==null?void 0:d.pageType)??p.Default,((v=x.find(r=>r.url==a.path))==null?void 0:v.pageType)??p.Default}),T=L(()=>{var d,v;return l.value==n.Mobile?((d=x.find(r=>r.url==a.path))==null?void 0:d.mobile)??e.Default:((v=x.find(r=>r.url==a.path))==null?void 0:v.desktop)??e.Default}),l=L(()=>g.value<=768?n.Mobile:n.Desktop),m=L(()=>{var d;return((d=x.find(v=>v.url==a.path))==null?void 0:d.homeButtonTheme)??e.Default});function u(){g.value=Math.min(window.innerWidth,window.outerWidth)}return $(()=>{u(),window.addEventListener("resize",u),window.addEventListener("scroll",u)}),N(()=>{window.removeEventListener("resize",u),window.removeEventListener("scroll",u)}),O({title:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家",link:[{rel:"icon",type:"image/x-icon",href:"/logo.ico"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{name:"description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{name:"keywords",content:"客製化系統, 流程自動化, RPA, 軟體開發, 萊數位, Croxinc Studio"},{property:"og:title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{property:"og:url",content:"https://www.croxinc.com"},{property:"og:type",content:"website"},{property:"og:site_name",content:"萊|數位(Croxinc Studio)"},{property:"og:description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{property:"og:image",content:"https://www.croxinc.com/images/croxinc.png"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"294"},{property:"og:image:height",content:"263"},{name:"image",content:"https://www.croxinc.com/images/croxinc.png"}]}),(d,v)=>{const r=G,s=C;return w(),k("div",ie,[y("div",{class:c({container:!0,mobile:t(l)==t(n).Mobile})},[y("div",{class:c({header:!0,mobile:t(l)==t(n).Mobile})},[f(te,{theme:t(T),deviceType:t(l),activedPage:t(h)},null,8,["theme","deviceType","activedPage"])],2),y("div",oe,[f(r,{deviceType:t(l)},null,8,["deviceType"])])],2),t(l)==t(n).Mobile?(w(),k("button",{key:0,class:c({home:!0,dark:t(m)==t(e).Dark,light:t(m)==t(e).Light})},[f(s,{class:c({homeLink:!0,dark:t(m)==t(e).Dark,light:t(m)==t(e).Light}),homeButtonType:t(o),to:"/"},{default:I(()=>v[0]||(v[0]=[F("HOME")])),_:1},8,["class","homeButtonType"])],2)):W("",!0)])}}}),pe=P(ne,[["__scopeId","data-v-cfeff919"]]);export{pe as default};
