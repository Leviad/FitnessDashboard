"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[1145],{3748:function(e,t,n){var a=n(14161),r=n(20068),i=n(48980),o=n(80184);t.Z=function(e){var t=e.title,n=e.placement,s=void 0===n?"right":n,c=e.children;return(0,o.jsx)(r.Z,{TransitionComponent:i.Z,TransitionProps:{timeout:350},title:t,placement:s,enterTouchDelay:0,PopperProps:{sx:{"& .MuiTooltip-tooltip":{color:"#fff",backgroundColor:a.R2.text,fontSize:a.iH[10],boxShadow:"0 1px 8px rgba(65, 77, 85, 0.4)",textTransform:"uppercase",borderRadius:8},"& .MuiTooltip-arrow:before":{backgroundColor:a.R2.text}}},arrow:!0,children:c})}},90004:function(e,t,n){var a=n(45987),r=n(51899),i=n(66150),o=n(80184),s=["title","handler","sidePadding","children","disabled"];t.Z=function(e){var t=e.title,n=e.handler,c=e.sidePadding,l=e.children,d=e.disabled,u=(0,a.Z)(e,s);return(0,o.jsxs)(i.Z,{title:t,sidePadding:c,style:u.style,className:"nav",children:[(0,o.jsxs)(r.JL,{children:[(0,o.jsx)("button",{onClick:n,"data-direction":"prev",className:d?"disabled":"","aria-label":"Previous",children:(0,o.jsx)("i",{className:"icon icon-chevron-left"})}),(0,o.jsx)("button",{onClick:n,"data-direction":"next",className:d?"disabled":"","aria-label":"Next",children:(0,o.jsx)("i",{className:"icon icon-chevron-right"})})]}),l]})}},16945:function(e,t,n){function a(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function r(e){return e<10?"0"+e:e}n.d(t,{t:function(){return a},v:function(){return r}})},11145:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(28789),r=n(14161),i=n(249),o=n(90004),s=n(20760),c=n(47242),l=n(36038),d=n(42),u=n(21041),h=n(41048),p=n(35667),f=n(16945),m=n(3748),x=n(80184),v=a.ZP.div.withConfig({componentId:"sc-qjb3rw-0"})(["",";",";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:",";user-select:none;span{position:absolute;opacity:0;transform:scale(0);will-change:transform;transition:transform .5s ease-in-out,opacity .5s ease-in-out;visibility:hidden;&.visible{position:relative;opacity:1;transform:scale(1);visibility:visible;}}"],r.fU.col,r.fU.center,r.iH[14]),b=function(e){var t=e.periods,n=e.values,a=e.index;return(0,x.jsx)(m.Z,{title:"Per ".concat(t[a]),placement:"top",children:(0,x.jsxs)(v,{children:[n.map((function(e,t){var n=t===a;return(0,x.jsx)("span",{className:n?"visible h1":"h1",children:(0,f.t)(e)},e)}))," patients"]})})},g=n(22426),j=n(54561),w=n(94397);n(72791);var y=n.p+"static/media/rays.58d0af61ccd85d05322395d6919aa202.svg";var k=n.p+"static/media/rays_xl.dbe6c6eea700ea1a6d54a1ad1b6e1ba1.svg",Z=a.ZP.div.withConfig({componentId:"sc-1bz5pe3-0"})(["min-height:265px;",";",';gap:20px;height:100%;.chart{position:relative;margin:auto 0;&-rays{.recharts-wrapper .recharts-surface{mask:url("','") no-repeat center;}}&-wide{.recharts-wrapper .recharts-surface{mask:url("','") no-repeat center;}}}'],r.fU.col,r.fU.between,y,k),C=function(e){var t,n=e.variant,f="light"===(0,a.Fg)().theme?r.R2.widgetBg:r._4.widgetBg,m=(0,w.Z)().width<413.98,v=(m?220:265)/2,y=m?240:275,k=["year","month","week"],C=(0,j.Z)(k),F=C.index,P=C.navigate,D=[{name:"cold",color:"orange",value:{year:642,month:456,week:52}},{name:"infection",color:"yellow",value:{year:255,month:241,week:33}},{name:"other",color:"purple",value:{year:698,month:374,week:92}}],N=[{start:"#FF715B",end:"#FFA15B"},{start:"#FDCA40",end:"#FDCA40"},{start:"#6665DD",end:"#6610F2"}];switch(n){default:case"basic":t=m?80:100;break;case"rays":t=75;break;case"wide":t=25}return(0,x.jsxs)(i.Z,{name:"DiagnosesDonut",children:[(0,x.jsx)(o.Z,{title:"Diagnoses",handler:P,style:{paddingBottom:14}}),(0,x.jsx)(s.Z,{style:{paddingBottom:22},children:(0,x.jsxs)(Z,{children:[(0,x.jsxs)("div",{className:"chart chart-".concat(n),children:[(0,x.jsxs)(d.u,{width:m?280:330,height:y,children:[(0,x.jsx)("defs",{children:D.map((function(e,t){return(0,x.jsxs)("linearGradient",{id:"gradient".concat(t),children:[(0,x.jsx)("stop",{offset:"0%",stopColor:N[t%N.length].start}),(0,x.jsx)("stop",{offset:"100%",stopColor:N[t%N.length].end})]},"gradient".concat(t))}))}),(0,x.jsx)(u.b,{data:D,innerRadius:t,outerRadius:v,dataKey:"value.".concat(k[F]),stroke:"basic"===n?f:null,strokeWidth:"basic"===n?4:null,children:D.map((function(e,t){return(0,x.jsx)(h.b,{fill:"url(#gradient".concat(t,")")},"cell-".concat(t))}))}),(0,x.jsx)(p.u,{content:(0,x.jsx)(g.Z,{})})]}),"wide"!==n&&(0,x.jsx)(b,{periods:k,values:function(){var e=[],t=[],n=[];return k.forEach((function(a,r){e.push(D.map((function(e){return e.value[a]})).reduce((function(e,t){return e+t}))),n.push(D.map((function(e){return e.value[a]}))),t.push(n[r].map((function(t){return(t/(e[r]/100)).toFixed()})))})),{total:e,percent:t}}().total,index:F})]}),(0,x.jsx)(c.Z,{children:D.map((function(e){return(0,x.jsx)(l.Z,{color:e.color,legend:e.name},e.name)}))})]})})]})}}}]);
//# sourceMappingURL=1145.7f49b77f.chunk.js.map