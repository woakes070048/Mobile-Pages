(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,n){e.exports=n("2f39")},"2f39":function(e,a,n){"use strict";n.r(a);var t=n("967e"),r=n.n(t),o=(n("96cf"),n("fa84")),u=n.n(o),i=(n("5c7d"),n("1867"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("1f91"),d=n("b05d"),s=n("4d5a"),l=n("9898"),p=n("07d0"),f=n("d847"),h=n("f2cc"),b=n("c7a0"),m=n("2ea3"),Q=n("5096"),g=n("65c6"),w=n("6ac5"),v=n("9c40"),S=n("0016"),k=n("497d"),x=n("6ab5"),T=n("033f"),P=n("e208"),y=n("429b"),L=n("7460"),R=n("adad"),C=n("823b"),_=n("7867"),D=n("58a8"),I=n("d3ab"),E=n("2c91"),F=n("27f9"),V=n("d66b"),q=n("8572"),A=n("4e73"),B=n("05c0"),O=n("cb32"),U=n("eb85"),N=n("6b1d"),$=n("4983"),j=n("f09f"),H=n("a370"),G=n("4b7e"),J=n("b6d5"),M=n("74f7"),X=n("b498"),z=n("7cbe"),W=n("54b4"),K=n("7f41"),Y=n("ee89"),Z=n("068f"),ee=n("24e8"),ae=n("8f8e"),ne=n("54e1"),te=n("0378"),re=n("ddd8"),oe=n("714f"),ue=n("7f67"),ie=n("2a19"),ce=n("515f"),de=n("436b"),se=n("f508"),le=n("18d6"),pe=n("a639");i["a"].use(d["a"],{config:{},lang:c["a"],components:{QLayout:s["a"],QHeader:l["a"],QFooter:p["a"],QBar:f["a"],QDrawer:h["a"],QPageContainer:b["a"],QPage:m["a"],QPageScroller:Q["a"],QToolbar:g["a"],QToolbarTitle:w["a"],QBtn:v["a"],QIcon:S["a"],QList:k["a"],QItem:x["a"],QItemSection:T["a"],QItemLabel:P["a"],QTabs:y["a"],QTab:L["a"],QTabPanels:R["a"],QTabPanel:C["a"],QRouteTab:_["a"],QBadge:D["a"],QPageSticky:I["a"],QSpace:E["a"],QInput:F["a"],QEditor:V["a"],QField:q["a"],QMenu:A["a"],QTooltip:B["a"],QAvatar:O["a"],QSeparator:U["a"],QLinearProgress:N["a"],QScrollArea:$["a"],QCard:j["a"],QCardSection:H["a"],QCardActions:G["a"],QResizeObserver:J["a"],QInnerLoading:M["a"],QColor:X["a"],QPopupProxy:z["a"],QExpansionItem:W["a"],QTree:K["a"],QUploader:Y["a"],QImg:Z["a"],QDialog:ee["a"],QCheckbox:ae["a"],QBanner:ne["a"],QForm:te["a"],QSelect:re["a"]},directives:{Ripple:oe["a"],ClosePopup:ue["a"]},plugins:{Notify:ie["a"],Cookies:ce["a"],Dialog:de["a"],Loading:se["a"],LocalStorage:le["a"],SessionStorage:pe["a"]}});var fe=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},he=[],be={name:"App"},me=be,Qe=n("2877"),ge=Object(Qe["a"])(me,fe,he,!1,null,null,null),we=ge.exports,ve=n("2f62");i["a"].use(ve["a"]);var Se=function(){var e=new ve["a"].Store({modules:{},strict:!1});return e},ke=n("8c4f"),xe=n("bc3a"),Te=n.n(xe),Pe=n("a7fe"),ye=n.n(Pe),Le=n("8a9b"),Re=n.n(Le),Ce=[{path:"/",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"home",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}}]},{path:"/auth/login",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"login",component:function(){return n.e("2d0dd60f").then(n.bind(null,"80ab"))}}],meta:{auth:!1}},{path:"/auth/password/reset",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"password.email",component:function(){return n.e("2d2380e5").then(n.bind(null,"fe6f"))}}],meta:{auth:!1}},{path:"/auth/password/reset/:token",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"password.reset",component:function(){return n.e("2d0df839").then(n.bind(null,"89df"))}}],meta:{auth:!1}},{path:"/user/profile",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"user.profile",component:function(){return n.e("2d229437").then(n.bind(null,"dd67"))}}],meta:{auth:{roles:[1,2],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/sites",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"sites.overview",component:function(){return n.e("84a015fc").then(n.bind(null,"d68a"))}}],meta:{auth:{roles:[2],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/site/edit/:uuid",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"site.edit",component:function(){return n.e("505712d8").then(n.bind(null,"523d"))}}],meta:{auth:{roles:[2],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/site/new",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"site.new",component:function(){return n.e("505712d8").then(n.bind(null,"523d"))}}],meta:{auth:{roles:[2],redirect:{name:"login"},forbiddenRedirect:"/"}}}];Ce.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var _e=Ce;i["a"].use(ke["a"]);var De=function(){return i["a"].router=new ke["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:_e,mode:"hash",base:"/assets/"}),i["a"].use(ye.a,Te.a),i["a"].axios.defaults.baseURL="//"+window.config.app_host+"/api/",i["a"].axios.defaults.headers.common={Accept:"application/json","Content-Type":"application/json;charset=UTF-8","X-Requested-With":"XMLHttpRequest"},i["a"].use(Re.a,{auth:n("5a17"),http:n("680f"),router:n("4ae6"),rolesVar:"role",tokenDefaultName:"token",tokenStore:["localStorage"],registerData:{url:"auth/register",method:"POST",redirect:"/login"},loginData:{url:"auth/login",method:"POST",redirect:"/",fetchUser:!0},logoutData:{url:"auth/logout",method:"POST",redirect:"/",makeRequest:!0},fetchData:{url:"auth/user",method:"GET",enabled:!0},refreshData:{url:"auth/refresh",method:"GET",enabled:!0,interval:30},notFoundRedirect:{name:"sites.overview"}}),i["a"].router},Ie=function(){var e="function"===typeof Se?Se({Vue:i["a"]}):Se,a="function"===typeof De?De({Vue:i["a"],store:e}):De;e.$router=a;var n={el:"#q-app",router:a,store:e,render:function(e){return e(we)}};return{app:n,store:e,router:a}},Ee=n("a925"),Fe={home:"Home",login:"Login",logout:"Logout",save_changes:"Save changes",undo_changes:"Undo changes",log_in:"Log in",email_address:"E-mail address",password:"Password",forgot_password:"Forgot password?",sites:"Sites",new_site:"New site",profile:"Profile",name:"Name",current_password:"Current password"},Ve={"en-us":Fe};i["a"].use(Ee["a"]);var qe=new Ee["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ve}),Ae=function(e){var a=e.app;a.i18n=qe},Be=function(){var e=u()(r.a.mark(function e(a){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.Vue,n.prototype.$axios=Te.a;case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),Oe=n("2ef0"),Ue=n.n(Oe),Ne=function(e){var a=e.Vue;a.prototype.$_=Ue.a},$e=Ie(),je=$e.app,He=$e.store,Ge=$e.router;function Je(){return Me.apply(this,arguments)}function Me(){return Me=u()(r.a.mark(function e(){var a,n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=[Ae,Be,Ne],n=0;case 2:if(!(n<a.length)){e.next=20;break}if("function"===typeof a[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,a[n]({app:je,router:Ge,store:He,Vue:i["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new i["a"](je);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),Me.apply(this,arguments)}Je()},"7e6d":function(e,a,n){}},[[0,"runtime","vendor"]]]);