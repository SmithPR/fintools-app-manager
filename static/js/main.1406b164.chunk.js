(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3606:function(e,t,a){e.exports=a(3760)},3611:function(e,t,a){},3613:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},3614:function(e,t,a){},3760:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),c=(a(3611),a(28)),l=a(29),s=a(32),p=a(30),u=a(33),d=(a(3613),a(3614),a(113)),m=a.n(d),f=a(16),h=a(19),g=a(9),b=a(95),w=a.n(b),v=a(63),E=a.n(v),O=a(31),x=a.n(O),j=a(22),y=a.n(j),k=a(64),A=a.n(k),N=a(99),S=a.n(N),I=a(97),B=a.n(I),C=a(98),z=a.n(C),T=function(e){window.fin&&window.fin.desktop.Window.getCurrent().minimize()},R=function(e){window.fin&&window.fin.desktop.Window.getCurrent().maximize()},P=function(e){window.fin&&window.fin.desktop.Application.getCurrent().close()};var M=Object(f.withStyles)(function(e){var t,a,n;return{root:{flexGrow:1},outerBar:(t={zIndex:e.zIndex.drawer+1},Object(g.a)(t,"-webkit-app-region","drag"),Object(g.a)(t,"paddingLeft",1),Object(g.a)(t,"paddingRight",1),Object(g.a)(t,"position","absolute"),t),headerBar:{minHeight:"36px",paddingLeft:0,paddingRight:0},appTitle:{flexGrow:1,textAlign:"left",fontSize:"1em"},menuButton:(a={},Object(g.a)(a,"-webkit-app-region","no-drag"),Object(g.a)(a,"marginLeft",e.spacing.unit),Object(g.a)(a,"marginRight",4*e.spacing.unit),Object(g.a)(a,"padding","6px 6px"),a),actionArea:{},actionButton:(n={},Object(g.a)(n,"-webkit-app-region","no-drag"),Object(g.a)(n,"padding","6px 6px"),Object(g.a)(n,"margin",0),Object(g.a)(n,"marginRight",e.spacing.unit),n),actionButtonIcon:{fontSize:16}}},{withTheme:!0})(function(e){var t=e.classes,a=e.toggleSidebar;return i.a.createElement("div",{className:t.root},i.a.createElement(w.a,{position:"fixed",className:t.outerBar},i.a.createElement(E.a,{variant:"dense",className:t.headerBar},i.a.createElement(y.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:a},i.a.createElement(A.a,null)),i.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.appTitle},"FinTools App Manager"),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",null,i.a.createElement(y.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:T},i.a.createElement(B.a,{className:t.actionButtonIcon})),i.a.createElement(y.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:R},i.a.createElement(z.a,{className:t.actionButtonIcon})),i.a.createElement(y.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:P},i.a.createElement(S.a,{className:t.actionButtonIcon}))))))}),L=a(5),W=a.n(L),_=a(100),F=a.n(_),G=a(101),D=a.n(G),H=a(45),J=a.n(H),U=a(46),X=a.n(U),$=a(47),q=a.n($),K=a(102),Q=a.n(K),V=a(103),Y=a.n(V),Z=a(104),ee=a.n(Z);var te=Object(f.withStyles)(function(e){return{hide:{display:"none"},drawer:{width:220,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:220,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(g.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:49},e.breakpoints.up("sm"),{width:9*e.spacing.unit+1}),drawerPaper:{position:"absolute"},toolbar:{minHeight:"36px"},list:{padding:"0 0",paddingLeft:1,overflow:"hidden"},listItem:{padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),margin:"8px 0"}}},{withTheme:!0})(function(e){var t,a,n=e.classes;return i.a.createElement(F.a,{variant:"permanent",className:W()(n.drawer,(t={},Object(g.a)(t,n.drawerOpen,e.expanded),Object(g.a)(t,n.drawerClose,!e.expanded),t)),classes:{paper:W()(n.drawerPaper,(a={},Object(g.a)(a,n.drawerOpen,e.expanded),Object(g.a)(a,n.drawerClose,!e.expanded),a))},open:e.expanded,onClick:e.toggleSidebar},i.a.createElement("div",{className:n.toolbar}),i.a.createElement(D.a,{className:n.list},i.a.createElement(J.a,{button:!0,key:"home",selected:!0,className:n.listItem},i.a.createElement(X.a,null,i.a.createElement(Q.a,null)),i.a.createElement(q.a,{primary:"Home"})),i.a.createElement(J.a,{button:!0,key:"directory",className:n.listItem},i.a.createElement(X.a,null,i.a.createElement(Y.a,null)),i.a.createElement(q.a,{primary:"Discover Apps"})),i.a.createElement(J.a,{button:!0,key:"create",className:n.listItem},i.a.createElement(X.a,null,i.a.createElement(ee.a,null)),i.a.createElement(q.a,{primary:"Create an App"}))))}),ae=a(24),ne=a.n(ae),ie=a(48);function re(){return oe.apply(this,arguments)}function oe(){return(oe=Object(ie.a)(ne.a.mark(function e(){var t,a,n;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a={},n=new Promise(function(e,n){window.fin.desktop.System.getAllApplications(function(i){var r=!0,o=!1,c=void 0;try{for(var l,s=function(){var e=l.value;t.push(new Promise(function(t,n){window.fin.desktop.Application.wrap(e.uuid).getManifest(function(n){console.log(n),a[e.uuid]=n,t(!0)})},n))},p=i[Symbol.iterator]();!(r=(l=p.next()).done);r=!0)s()}catch(u){o=!0,c=u}finally{try{r||null==p.return||p.return()}finally{if(o)throw c}}e(!0)},n)}),e.next=5,n;case 5:return e.next=7,Promise.all(t);case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function ce(){return(ce=Object(ie.a)(ne.a.mark(function e(){var t;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.fin){e.next=4;break}return e.abrupt("return",Promise.reject());case 4:if(t){e.next=17;break}return e.prev=5,e.next=8,re();case 8:t=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),e.next=15,new Promise(function(e){return setTimeout(e,50)});case 15:e.next=4;break;case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}},e,this,[[5,11]])}))).apply(this,arguments)}function le(){return(le=Object(ie.a)(ne.a.mark(function e(t){var a;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.fin.desktop.Application.wrap(t),e.abrupt("return",new Promise(function(e,t){try{a.close(!0,e,t)}catch(n){e()}}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var se={getOpenApps:function(){return ce.apply(this,arguments)},closeApp:function(e){return le.apply(this,arguments)}},pe=a(105),ue=a.n(pe),de=a(106),me=a.n(de),fe=a(107),he=a.n(fe),ge=a(108),be=a.n(ge),we=a(109),ve=a.n(we);var Ee=Object(f.withStyles)(function(e){return{root:{flexGrow:1,padding:3*e.spacing.unit,marginLeft:57,marginTop:36},card:{display:"flex",marginBottom:1.5*e.spacing.unit,height:48},cardRightInner:{padding:e.spacing.unit/2,paddingBottom:e.spacing.unit/2},appIcon:{width:48,height:48},cardRight:{flex:"1 1 0"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.appList,n=e.closeApp;return i.a.createElement("main",{className:t.root},Object.entries(a).map(function(e){return i.a.createElement(ue.a,{key:e[0],className:t.card},i.a.createElement(me.a,{className:t.appIcon,image:e[1].shortcut&&e[1].shortcut.icon||e[1].startup_app&&e[1].startup_app.applicationIcon}),i.a.createElement("div",{className:t.cardRight},i.a.createElement(he.a,{className:t.cardRightInner},i.a.createElement(x.a,{component:"strong",variant:"subtitle1"},e[1].shortcut&&e[1].shortcut.description||e[1].startup_app&&e[1].startup_app.name),i.a.createElement(x.a,{component:"strong",variant:"subtitle2"},e[1].shortcut&&e[1].shortcut.company||e[1].supportInformation&&e[1].supportInformation.company))),i.a.createElement(be.a,null,i.a.createElement(y.a,{"aria-label":"Close App",onClick:function(){return n(e[0])}},i.a.createElement(ve.a,null))))}))}),Oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={finApps:{}},a.loadOpenApps=a.loadOpenApps.bind(Object(h.a)(Object(h.a)(a))),a.closeApp=a.closeApp.bind(Object(h.a)(Object(h.a)(a))),a.loadOpenApps(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(Ee,{appList:this.state.finApps,closeApp:this.closeApp})}},{key:"componentDidMount",value:function(){this.reloadAppsInterval=setInterval(this.loadOpenApps,15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.reloadAppsInterval)}},{key:"loadOpenApps",value:function(){var e=this;se.getOpenApps().then(function(t){e.setState({finApps:t})})}},{key:"closeApp",value:function(e){var t=this;this.loadOpenApps;se.closeApp(e).then(function(){return t.loadOpenApps()})}}]),t}(n.Component),xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={sidebarExpanded:!1},a.toggleSidebar=a.toggleSidebar.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"MainWindow",style:{width:"100%",height:"100%"}},i.a.createElement(M,{toggleSidebar:this.toggleSidebar}),i.a.createElement(te,{expanded:this.state.sidebarExpanded,toggleSidebar:this.toggleSidebar}),i.a.createElement(Oe,null))}},{key:"toggleSidebar",value:function(){this.setState({sidebarExpanded:!this.state.sidebarExpanded})}}]),t}(n.Component),je=a(49),ye=a.n(je),ke=a(111),Ae=a.n(ke),Ne=a(65),Se=a.n(Ne),Ie=a(112),Be=a.n(Ie),Ce=a(110),ze=a(44),Te=a.n(ze),Re=function(e){return i.a.createElement(Te.a,e,i.a.createElement("path",{fill:"#000000","fill-opacity":"0.0",d:"m0 0l22.4895025 0l0 22.4895025l-22.4895025 0z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m16.16746125 8.07677375l0 0c0.8088569625 -1.102395 2.358234375 -1.340354 3.4606285 -0.53149605l0 0c0.529388425 0.38842725 0.882793425 0.9712448125 0.982467625 1.62023825c0.0996761325 0.64899445 -0.06254386875 1.31100275 -0.4509716 1.840391125l0 0c-0.8088569625 1.102396 -2.358234375 1.340354 -3.4606285 0.53149605l0 0c-1.102396 -0.8088579125 -1.340354875 -2.358234375 -0.53149605 -3.4606295z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m8.80996375 2.856304375l0 0c0.8088579125 -1.102395125 2.358235375 -1.340354125 3.460630375 -0.53149605l0 0c0.529388425 0.38842725 0.8827925 0.971244575 0.982467625 1.6202385c0.099675175 0.648993975 -0.062544825 1.31100275 -0.4509716 1.840391125l0 0c-0.8088579125 1.1023955 -2.358235375 1.340354 -3.460630375 0.53149605l0 0c-1.102395 -0.8088579125 -1.340354 -2.358234625 -0.53149605 -3.46062975z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m9.26377625 4.591635l0 0c-1.203358625 1.640878625 -1.424260125 3.80457825 -0.57732105 5.65478c0.8469390875 1.8502025625 2.6290235 3.097025875 4.65743825 3.258544c2.028415625 0.16151905 3.985355375 -0.787572875 5.114421875 -2.480430625l-1.6299305 -1.08709525c-0.7349090625 1.101880125 -2.00868125 1.7196445 -3.328976625 1.6145115c-1.320295375 -0.1051321 -2.48025325 -0.916688925 -3.031526625 -2.120986c-0.551272375 -1.204297125 -0.407487875 -2.6126485 0.3757782 -3.6806965z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m9.72448125 11.889122l1.4921255 1.094488125l-3.1377955 4.275590875l-1.4921255 -1.094488125z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m5.21496125 15.54266375l0 0c0.8088579125 -1.102395 2.358235 -1.340354 3.4606295 -0.53149605l0 0c0.529389375 0.3884277375 0.882793425 0.9712448125 0.982468625 1.62023925c0.099674225 0.6489925375 -0.062544825 1.31100275 -0.4509725625 1.840391125l0 0c-0.8088579125 1.102394125 -2.358234375 1.340353 -3.4606295 0.53149605l0 0c-1.102395 -0.808858875 -1.340354 -2.358234375 -0.53149605 -3.460630375z","fill-rule":"evenodd"}),i.a.createElement("path",{fill:"#ffffff",d:"m9.24612375 9.77753625l0 0c0.8088579125 -1.102395 2.358234375 -1.340354 3.4606295 -0.53149605l0 0c0.529389375 0.388426775 0.882793425 0.971243875 0.982468625 1.62023825c0.099674225 0.6489935 -0.062544825 1.31100275 -0.4509725625 1.840391125l0 0c-0.8088579125 1.102395 -2.358234375 1.340354 -3.4606295 0.53149605l0 0c-1.102395 -0.8088579125 -1.340354 -2.358234375 -0.53149605 -3.4606295z","fill-rule":"evenodd"}))},Pe=window.location.href.substring(0,window.location.href.lastIndexOf("/")),Me="https://install.openfin.co/download/?config=".concat(encodeURI(Pe+"/app_"+window.location.hostname+".json"),"&fileName=FinTools%20App%20Manager%20Installer&unzipped=true"),Le=Object(f.withStyles)(function(e){return{webPreview:{position:"absolute",top:0,bottom:0,left:0,right:0,background:"radial-gradient(#8593e3,#263481)",color:"#fff",padding:4*e.spacing.unit,paddingTop:2*e.spacing.unit,overflow:"hidden"},previewContainer:{width:800,height:500,position:"relative",overflow:"none",marginLeft:"auto",marginRight:"auto",backgroundColor:"#fff",boxShadow:"4px 4px 10px rgba(0,0,0,0.1)"},downloadButton:{fontSize:"1.5rem",color:"rgba(0,0,0,0.75)",backgroundColor:"#59cf5f","&:hover":{backgroundColor:"#4bbf50"}},buttonContainer:{zIndex:4e3,position:"relative",width:"300px",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit},appLogo:{fontSize:"2.5em",marginBottom:"-0.227em",marginRight:8},pageTitle:{display:"inline-block",fontSize:24,fontWeight:"normal",margin:0},socialButton:{color:"rgba(255,255,255,0.95)",padding:8,marginTop:-1*e.spacing.unit,float:"right"},socialButtonIcon:{fontSize:"1.5em"},divider:{backgroundColor:"rgba(255,255,255,0.18)",marginTop:e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.classes;return i.a.createElement("div",{className:"WebPreview ".concat(t.webPreview)},i.a.createElement(ye.a,{container:!0},i.a.createElement(ye.a,{item:!0,xs:8},i.a.createElement(Re,{className:t.appLogo}),i.a.createElement("h1",{className:t.pageTitle},"FinTools App Manager")),i.a.createElement(ye.a,{item:!0,xs:4},i.a.createElement(y.a,{className:t.socialButton,title:"Github Repository",href:"https://github.com/SmithPR/fintools"},i.a.createElement(Ce.a,{className:t.socialButtonIcon})))),i.a.createElement(Se.a,{className:t.divider}),i.a.createElement("div",null),i.a.createElement("div",{className:t.buttonContainer},i.a.createElement(Ae.a,{variant:"extended",color:"primary","aria-label":"Add",className:t.downloadButton,href:Me},i.a.createElement(Be.a,{className:t.extendedIcon}),"Download")),i.a.createElement("div",{className:t.previewContainer},i.a.createElement(xe,null)))}),We=Object(f.createMuiTheme)({palette:{primary:{main:"#5669d1"}},typography:{fontSize:12,htmlFontSize:12},spacing:{unit:6},shape:{borderRadius:2}}),_e=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m.a,null,i.a.createElement(f.MuiThemeProvider,{theme:We},window.fin?i.a.createElement(xe,null):i.a.createElement(Le,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[3606,2,1]]]);
//# sourceMappingURL=main.1406b164.chunk.js.map