(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(260)},113:function(e,t,n){},115:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},116:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),c=(n(113),n(28)),l=n(29),s=n(33),p=n(30),u=n(32),d=(n(115),n(116),n(107)),m=n.n(d),h=n(16),g=n(19),f=n(9),b=n(90),w=n.n(b),v=n(61),E=n.n(v),O=n(31),x=n.n(O),j=n(23),k=n.n(j),y=n(62),A=n.n(y),N=n(94),S=n.n(N),I=n(92),C=n.n(I),B=n(93),T=n.n(B),M=function(e){window.fin&&window.fin.desktop.Window.getCurrent().minimize()},P=function(e){window.fin&&window.fin.desktop.Window.getCurrent().maximize()},R=function(e){window.fin&&window.fin.desktop.Application.getCurrent().close()};var z=Object(h.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1},outerBar:(t={zIndex:e.zIndex.drawer+1},Object(f.a)(t,"-webkit-app-region","drag"),Object(f.a)(t,"paddingLeft",1),Object(f.a)(t,"paddingRight",1),Object(f.a)(t,"position","absolute"),t),headerBar:{minHeight:"36px",paddingLeft:0,paddingRight:0},appTitle:{flexGrow:1,textAlign:"left",fontSize:"1em"},menuButton:(n={},Object(f.a)(n,"-webkit-app-region","no-drag"),Object(f.a)(n,"marginLeft",e.spacing.unit),Object(f.a)(n,"marginRight",4*e.spacing.unit),Object(f.a)(n,"padding","6px 6px"),n),actionArea:{},actionButton:(a={},Object(f.a)(a,"-webkit-app-region","no-drag"),Object(f.a)(a,"padding","6px 6px"),Object(f.a)(a,"margin",0),Object(f.a)(a,"marginRight",e.spacing.unit),a),actionButtonIcon:{fontSize:16}}},{withTheme:!0})(function(e){var t=e.classes,n=e.toggleSidebar;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"fixed",className:t.outerBar},r.a.createElement(E.a,{variant:"dense",className:t.headerBar},r.a.createElement(k.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:n},r.a.createElement(A.a,null)),r.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.appTitle},"FinTools App Manager"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",null,r.a.createElement(k.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:M},r.a.createElement(C.a,{className:t.actionButtonIcon})),r.a.createElement(k.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:P},r.a.createElement(T.a,{className:t.actionButtonIcon})),r.a.createElement(k.a,{className:t.actionButton,color:"inherit","aria-label":"Menu",onClick:R},r.a.createElement(S.a,{className:t.actionButtonIcon}))))))}),L=n(5),W=n.n(L),_=n(95),F=n.n(_),D=n(96),G=n.n(D),H=n(43),J=n.n(H),U=n(44),X=n.n(U),$=n(45),q=n.n($),K=n(97),Q=n.n(K),V=n(98),Y=n.n(V),Z=n(99),ee=n.n(Z);var te=Object(h.withStyles)(function(e){return{hide:{display:"none"},drawer:{width:220,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:220,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(f.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:49},e.breakpoints.up("sm"),{width:9*e.spacing.unit+1}),drawerPaper:{position:"absolute"},toolbar:{minHeight:"36px"},list:{padding:"0 0",paddingLeft:1,overflow:"hidden"},listItem:{padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),margin:"8px 0"}}},{withTheme:!0})(function(e){var t,n,a=e.classes;return r.a.createElement(F.a,{variant:"permanent",className:W()(a.drawer,(t={},Object(f.a)(t,a.drawerOpen,e.expanded),Object(f.a)(t,a.drawerClose,!e.expanded),t)),classes:{paper:W()(a.drawerPaper,(n={},Object(f.a)(n,a.drawerOpen,e.expanded),Object(f.a)(n,a.drawerClose,!e.expanded),n))},open:e.expanded,onClick:e.toggleSidebar},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(G.a,{className:a.list},r.a.createElement(J.a,{button:!0,key:"home",selected:!0,className:a.listItem},r.a.createElement(X.a,null,r.a.createElement(Q.a,null)),r.a.createElement(q.a,{primary:"Home"})),r.a.createElement(J.a,{button:!0,key:"directory",className:a.listItem},r.a.createElement(X.a,null,r.a.createElement(Y.a,null)),r.a.createElement(q.a,{primary:"Discover Apps"})),r.a.createElement(J.a,{button:!0,key:"create",className:a.listItem},r.a.createElement(X.a,null,r.a.createElement(ee.a,null)),r.a.createElement(q.a,{primary:"Create an App"}))))}),ne=n(24),ae=n.n(ne),re=n(46);function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(re.a)(ae.a.mark(function e(){var t,n,a;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n={},a=new Promise(function(e,a){window.fin.desktop.System.getAllApplications(function(r){var i=!0,o=!1,c=void 0;try{for(var l,s=function(){var e=l.value;t.push(new Promise(function(t,a){window.fin.desktop.Application.wrap(e.uuid).getManifest(function(a){console.log(a),n[e.uuid]=a,t(!0)})},a))},p=r[Symbol.iterator]();!(i=(l=p.next()).done);i=!0)s()}catch(u){o=!0,c=u}finally{try{i||null==p.return||p.return()}finally{if(o)throw c}}e(!0)},a)}),e.next=5,a;case 5:return e.next=7,Promise.all(t);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function ce(){return(ce=Object(re.a)(ae.a.mark(function e(){var t;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.fin){e.next=4;break}return e.abrupt("return",Promise.reject());case 4:if(t){e.next=17;break}return e.prev=5,e.next=8,ie();case 8:t=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),e.next=15,new Promise(function(e){return setTimeout(e,50)});case 15:e.next=4;break;case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}},e,this,[[5,11]])}))).apply(this,arguments)}function le(){return(le=Object(re.a)(ae.a.mark(function e(t){var n;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.fin.desktop.Application.wrap(t),e.abrupt("return",new Promise(function(e,t){try{n.close(!0,e,t)}catch(a){e()}}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var se={getOpenApps:function(){return ce.apply(this,arguments)},closeApp:function(e){return le.apply(this,arguments)}},pe=n(100),ue=n.n(pe),de=n(101),me=n.n(de),he=n(102),ge=n.n(he),fe=n(103),be=n.n(fe),we=n(104),ve=n.n(we);var Ee=Object(h.withStyles)(function(e){return{root:{flexGrow:1,padding:3*e.spacing.unit,marginLeft:57,marginTop:36},card:{display:"flex",marginBottom:1.5*e.spacing.unit,height:48},cardRightInner:{padding:e.spacing.unit/2,paddingBottom:e.spacing.unit/2},appIcon:{width:48,height:48},cardRight:{flex:"1 1 0"}}},{withTheme:!0})(function(e){var t=e.classes,n=e.appList,a=e.closeApp;return r.a.createElement("main",{className:t.root},Object.entries(n).map(function(e){return r.a.createElement(ue.a,{key:e[0],className:t.card},r.a.createElement(me.a,{className:t.appIcon,image:e[1].shortcut&&e[1].shortcut.icon||e[1].startup_app&&e[1].startup_app.applicationIcon}),r.a.createElement("div",{className:t.cardRight},r.a.createElement(ge.a,{className:t.cardRightInner},r.a.createElement(x.a,{component:"strong",variant:"subtitle1"},e[1].shortcut&&e[1].shortcut.description||e[1].startup_app&&e[1].startup_app.name),r.a.createElement(x.a,{component:"strong",variant:"subtitle2"},e[1].shortcut&&e[1].shortcut.company||e[1].supportInformation&&e[1].supportInformation.company))),r.a.createElement(be.a,null,r.a.createElement(k.a,{"aria-label":"Close App",onClick:function(){return a(e[0])}},r.a.createElement(ve.a,null))))}))}),Oe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={finApps:{}},n.loadOpenApps=n.loadOpenApps.bind(Object(g.a)(Object(g.a)(n))),n.closeApp=n.closeApp.bind(Object(g.a)(Object(g.a)(n))),n.loadOpenApps(),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,{appList:this.state.finApps,closeApp:this.closeApp})}},{key:"componentDidMount",value:function(){this.reloadAppsInterval=setInterval(this.loadOpenApps,15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.reloadAppsInterval)}},{key:"loadOpenApps",value:function(){var e=this;se.getOpenApps().then(function(t){e.setState({finApps:t})})}},{key:"closeApp",value:function(e){var t=this;this.loadOpenApps;se.closeApp(e).then(function(){return t.loadOpenApps()})}}]),t}(a.Component),xe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={sidebarExpanded:!1},n.toggleSidebar=n.toggleSidebar.bind(Object(g.a)(Object(g.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainWindow",style:{width:"100%",height:"100%"}},r.a.createElement(z,{toggleSidebar:this.toggleSidebar}),r.a.createElement(te,{expanded:this.state.sidebarExpanded,toggleSidebar:this.toggleSidebar}),r.a.createElement(Oe,null))}},{key:"toggleSidebar",value:function(){this.setState({sidebarExpanded:!this.state.sidebarExpanded})}}]),t}(a.Component),je=n(105),ke=n.n(je),ye=n(106),Ae=n.n(ye),Ne="https://install.openfin.co/download/?config=".concat(encodeURI(window.location.origin+"/app_"+window.location.hostname+".json"),"&fileName=FinTools%20App%20Manager%20Installer&unzipped=true"),Se=Object(h.withStyles)(function(e){return{webPreview:{position:"absolute",top:0,bottom:0,left:0,right:0,background:"radial-gradient(#8593e3,#263481)",color:"#fff",padding:4*e.spacing.unit,overflow:"hidden"},previewContainer:{width:800,height:500,position:"relative",overflow:"none",marginLeft:"auto",marginRight:"auto",backgroundColor:"#fff",boxShadow:"4px 4px 10px rgba(0,0,0,0.1)"},downloadButton:{fontSize:"1.5rem",color:"rgba(0,0,0,0.75)",backgroundColor:"#59cf5f","&:hover":{backgroundColor:"#4bbf50"}},buttonContainer:{zIndex:4e3,position:"relative",width:"300px",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.classes;return r.a.createElement("div",{className:"WebPreview ".concat(t.webPreview)},r.a.createElement("div",null,r.a.createElement("h1",null,"FinTools App Manager")),r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(ke.a,{variant:"extended",color:"primary","aria-label":"Add",className:t.downloadButton,href:Ne},r.a.createElement(Ae.a,{className:t.extendedIcon}),"Download")),r.a.createElement("div",{className:t.previewContainer},r.a.createElement(xe,null)))}),Ie=Object(h.createMuiTheme)({palette:{primary:{main:"#5669d1"}},typography:{fontSize:12,htmlFontSize:12},spacing:{unit:6},shape:{borderRadius:2}}),Ce=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(h.MuiThemeProvider,{theme:Ie},window.fin?r.a.createElement(xe,null):r.a.createElement(Se,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.1083ca7e.chunk.js.map