"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[2816],{69517:function(e,a,t){t.d(a,{Z:function(){return k}});var n=t(1413),i=t(45987),r=t(29439),o=t(28789),l=t(65484),s=t.n(l),d=t(14161),c=t(13630),m=t(85232),u=s()("theme",{light:d.R2.highlight,dark:d._4.highlight}),p=s()("theme",{light:d.R2.text,dark:d._4.text}),h=(0,o.ZP)(m.ZP).withConfig({componentId:"sc-js1ggp-0"})([".Select{&__control{cursor:pointer;transition:var(--transition);border:none;background-color:",";border-radius:8px;font-size:",";height:40px;padding-right:16px;&--is-focused,&:hover{outline:none;}&--is-focused,&--is-focused:hover{box-shadow:0 0 0 2px "," !important;}&:hover{box-shadow:",";}.icon{transition:.3s ease-in-out;color:",";font-size:",";}}&__menu{min-width:max-content;width:100%;color:",";background-color:",";border-radius:8px;animation:"," var(--transition);z-index:100;&-list{max-height:180px;overflow-y:auto;scroll-behavior:smooth;z-index:100;}}&__indicator,&__indicator-separator{display:none;}&__option{cursor:pointer;transition:var(--transition);&:hover,&--is-focused,&--is-selected{background:transparent;color:",";}}&__single-value{color:",";}}"],u,d.iH[16],d.O9.blue,s()("theme",{light:"0 0 0 2px #A2C0D4",dark:"0 0 0 2px ".concat(d.O9.dark)}),s()("theme",{light:"#A2C0D4",dark:d.O9.gray}),d.iH[12],p,u,c.Ji,d.O9.blue,s()("theme",{light:d.R2.text,dark:d._4.text})),f=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-1"})([".Select{&__control{font-size:",";}&__input-container{color:",";}&__value-container{padding:0 16px;}}"],d.iH[14],p),g=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-2"})([".Select{&__control{background-color:transparent;width:fit-content;font-weight:500;font-family:",";border-radius:0;height:unset;padding:0;font-size:",";&--is-focused,&:hover{box-shadow:none !important;}}&__value-container{padding:0 20px 0 0;}}","{.Select__control{font-size:",";}}"],d.Rq.accent,d.iH[18],d.AV.tablet,d.iH[20]),v=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-3"})([".Select{&__control{&--is-focused,&:hover{box-shadow:none !important;}}&__input-container{padding-left:16px;color:inherit;}&__value-container{padding:0 16px 0 0;}&__value-container,&__option{.user-option{display:flex;align-items:center;gap:10px;color:inherit;}}}"]),x=t(32569),b=t(72791),y=t(80184),w=["children"],k=function(e){var a=e.label,t=e.options,o=e.variant,l=e.value,s=e.changeHandler,d=e.placeholder;(0,b.useEffect)((function(){d||null!==l||s(t[0])}),[]);var c=(0,b.useState)((function(){return"select_"+Math.random().toFixed(5).slice(2)})),m=(0,r.Z)(c,1)[0],u={classNamePrefix:"Select",inputId:a,isSearchable:"user"!==o,options:t,value:l,onChange:s,placeholder:d,openMenuOnFocus:!0,components:{Control:function(e){var a=e.children,t=(0,i.Z)(e,w);return(0,y.jsxs)(x.c.Control,(0,n.Z)((0,n.Z)({},t),{},{children:[a,(0,y.jsx)("i",{className:"icon icon-".concat("minimal"===o?"caret":"chevron","-down")})]}))},Menu:function(e){return(0,y.jsx)(x.c.Menu,(0,n.Z)((0,n.Z)({},e),{},{className:"menu",children:e.children}))}},id:m,blurInputOnSelect:!0,className:"select-".concat(o)};switch(o){default:case"basic":return(0,y.jsx)(f,(0,n.Z)({},u));case"minimal":return(0,y.jsx)(g,(0,n.Z)({},u));case"user":return(0,y.jsx)(v,(0,n.Z)({},u))}}},36163:function(e,a,t){t.d(a,{Z:function(){return y}});var n=t(1413),i=t(29439),r=t(45987),o=t(14161),l=t(22426),s=t(20601),d=t(82165),c=t(82839),m=t(62066),u=t(35667),p=t(28265),h=t(18602),f=t(28789),g=t(72791),v=t(94397),x=t(80184),b=["variant","id","data","elems"],y=function(e){var a=e.variant,t=e.id,y=e.data,w=e.elems,k=(0,r.Z)(e,b),j=(0,v.Z)().width,O=(0,f.Fg)().theme,Z=(0,g.useState)([]),_=(0,i.Z)(Z,2),C=_[0],M=_[1],S=j>=768;(0,g.useLayoutEffect)((function(){M(function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=document.getElementById(e).offsetWidth,n=[],i=0;i<t;i+=a)n.push(i);return n}(t))}),[j]);var D=function(e){var a=e.active,t=e.payload;return a&&t&&t.length?(0,x.jsx)(l.m,{className:"multiple",children:t.map((function(e,a){return(0,x.jsxs)("div",{className:"item",children:[(0,x.jsx)("div",{className:"color",style:{background:e.stroke}}),(0,x.jsx)("div",{className:"value",children:e.value})]},a)}))}):null};return(0,x.jsx)(s.h,{height:S?"100%":k.height,width:"100%",id:t,children:"line"===a?(0,x.jsxs)(d.w,(0,n.Z)((0,n.Z)({margin:!1,data:y},k),{},{children:[(0,x.jsxs)("defs",{children:[(0,x.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:o.O9.dark,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.512299",stopColor:o.O9.dark}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:o.O9.dark,stopOpacity:"0.2"})]}),(0,x.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:o.O9.light_gray,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.504355",stopColor:o.O9.light_gray}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:o.O9.light_gray,stopOpacity:"0.2"})]})]}),(0,x.jsx)(c.q,{stroke:"url(#".concat("dark"===O?"dark":"light",")"),strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:C,width:"100%",height:"100%"}),w.map((function(e){return(0,x.jsx)(m.x,(0,n.Z)({},e),e.dataKey)})),(0,x.jsx)(u.u,{cursor:!1,content:D})]})):(0,x.jsxs)(p.T,(0,n.Z)((0,n.Z)({margin:{top:5},data:y},k),{},{children:[(0,x.jsxs)("defs",{children:[(0,x.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:o.O9.dark,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.512299",stopColor:o.O9.dark}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:o.O9.dark,stopOpacity:"0.2"})]}),(0,x.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:o.O9.light_gray,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.504355",stopColor:o.O9.light_gray}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:o.O9.light_gray,stopOpacity:"0.2"})]}),k.children]}),(0,x.jsx)(c.q,{stroke:"url(#".concat("dark"===O?"dark":"light",")"),strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:C,width:"100%",height:"100%"}),w.map((function(e){return(0,x.jsx)(h.u,(0,n.Z)({},e),e.dataKey)})),(0,x.jsx)(u.u,{cursor:!1,content:D})]}))})}},22226:function(e,a,t){var n=t(28789),i=t(14161),r=n.ZP.div.withConfig({componentId:"sc-19ljvq9-0"})(["text-transform:uppercase;margin:0 24px;display:flex;"," font-family:",";font-size:",";"],i.fU.between,i.Rq.accent,i.iH[10]);a.Z=r},57770:function(e,a,t){t.d(a,{U:function(){return n},z:function(){return i}});var n=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],i=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},22172:function(e,a,t){t.d(a,{b_:function(){return o},i7:function(){return s},oF:function(){return l},tV:function(){return d}});var n=t(96576),i=t(52899),r=t(80184),o=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],l=[{value:"all",label:"All Departments"},{value:"family",label:"Family Doctors"},{value:"therapy",label:"Therapists"},{value:"dent",label:"Dentists"},{value:"cardio",label:"Cardiologists"}],s=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],d=function(){var e=[];return n.q.forEach((function(a){e.push({value:a.id,label:(0,r.jsxs)("div",{className:"user-option",children:[(0,r.jsx)(i.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,r.jsx)("span",{children:a.name})]})})})),e}},96576:function(e,a,t){t.d(a,{q:function(){return h}});var n=t(81984),i=t(12264),r=t(96739),o=t(96671),l=t(94244),s=t(37063),d=t(40649),c=t(65539),m=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",u=t(28997),p=t(67160),h=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:r,webp:o},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(65777),webp:t(66507)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:m,webp:"data:image/webp;base64,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"},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:n,webp:i},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:d,webp:c},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:u,webp:p},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:l,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},93687:function(e,a,t){t.r(a),t.d(a,{default:function(){return G}});var n=t(39314),i=t(29439),r=t(28789),o=t(65484),l=t.n(o),s=t(14161),d=t(40309),c=r.ZP.div.withConfig({componentId:"sc-r47wq7-0"})(["position:relative;background-color:",";height:80px;margin:0 -22px 20px;border-radius:8px;overflow:hidden;display:flex;align-items:center;.list-item{width:fit-content !important;}.navigation{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;&:before,&:after{content:'';position:absolute;top:0;background:",";height:100%;width:100px;filter:blur(1px);display:block;}&:before{left:2px;}&:after{right:2px;transform:scaleX(-1);}button{font-size:",";position:absolute;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:50%;background-color:",";color:#fff;z-index:2000;",";",';opacity:.7;transition:opacity var(--transition);&[data-direction="prev"]{left:16px;}&[data-direction="next"]{right:16px;}&:hover{opacity:1;}}}.list{display:flex;align-items:center;pointer-events:none;gap:12px;padding:0 16px;overflow-x:auto;&-item{padding:10px;border-radius:8px;transition:background-color var(--transition),color var(--transition);&.active{color:',";background-color:",";}}}"],l()("theme",{light:s.R2.bodyBg,dark:s._4.bodyBg}),l()("theme",{light:"linear-gradient(90deg, #F1F5F8 0%, rgba(241, 245, 248, 0.0001) 100%)",dark:"linear-gradient(90deg, #090A0A 0%, rgba(9, 10, 10, 0.0001) 100%)"}),s.iH[12],s.O9.blue,s.fU.col,s.fU.center,s.O9.blue,l()("theme",{light:s.R2.widgetBg,dark:s._4.widgetBg})),m=r.ZP.div.withConfig({componentId:"sc-r47wq7-1"})(["height:100%;position:relative;.popup{position:absolute;top:calc(50% + ","px + 80px);left:50%;transform:translate(-50%,calc(-50% - 80px - ","px));z-index:10;padding:20px;border-radius:8px;background-color:",";width:240px;",";gap:16px;border:2px solid ",";transition:opacity var(--transition),visibility var(--transition);opacity:0;visibility:hidden;&.visible{opacity:1;visibility:visible;}&_close{position:absolute;right:16px;top:16px;font-size:",";color:",";}.task{",";gap:10px;font-size:",";&_label{font-size:",";font-family:",";color:",";display:block;margin-bottom:8px;}&_header{display:flex;gap:10px;align-items:center;}}","{width:280px;}}"],(function(e){return e.top}),(function(e){return e.top/2}),l()("theme",{light:s.R2.bodyBg,dark:s._4.bodyBg}),s.fU.col,l()("theme",{light:s.O9.light_gray,dark:s.O9.dark}),s.iH[14],s.O9.error,s.fU.col,s.iH[14],s.iH[12],s.Rq.accent,s.O9.gray,s.AV.mobileL),u=(0,r.ZP)(d.D8).withConfig({componentId:"sc-r47wq7-2"})(["max-width:326px;margin:0 auto;.react-calendar{&__month-view{&__weekdays{order:unset;}& > div > div{padding:0 0 20px;}&:last-of-type{.react-calendar__month-view__weekdays{display:none !important;}.react-calendar__month-view__days{margin-top:-37px;","{margin-top:-60px;}}}}}"],s.AV.mobileL),p=t(249),h=t(66150),f=t(20760),g=t(47242),v=t(36038),x=t(69517),b=t(46866),y=t(58563),w=t(85335),k=t(52739),j=t(17711),O=t(72426),Z=t.n(O),_=t(25984),C=t(72791),M=[{id:"marvin_park",tasks:[{title:"Vivamus in felis eu sapien",date:Z()(),type:"work"},{title:"Sed vel lectus",date:Z()().add(1,"days"),type:"other"},{title:"Lorem ipsum dolor",date:Z()().add(2,"days"),type:"family"},{title:"Sed vel lectus",date:Z()().add(3,"days"),type:"travel"},{title:"Lorem ipsum dolor",date:Z()().add(1,"months"),type:"other"}]},{id:"norman_munoz",tasks:[{title:"Vivamus felislectus",date:Z()(),type:"travel"},{title:"Sed vel lectus",date:Z()().add(1,"weeks"),type:"family"}]},{id:"tillie_mathis",tasks:[{title:"Lorem ipsum dolor",date:Z()().add(5,"days"),type:"other"}]},{id:"cornelia_phillips",tasks:[{title:"Lorem ipsum dolor",date:Z()().add(1,"days"),type:"work"},{title:"Sed vel lectus",date:Z()().add(1,"days").add(2,"hours"),type:"family"},{title:"Lorem ipsum dolor",date:Z()().add(10,"days").add(4,"hours"),type:"travel"}]},{id:"isaiah_goodman",tasks:[{title:"Lorem ipsum dolor",date:Z()().add(1,"months"),type:"work"},{title:"Sed vel lectus",date:Z()().add(1,"months").add(2,"days"),type:"family"}]},{id:"claudia_turner",tasks:[{title:"Lorem ipsum dolor",date:Z()().add(1,"days"),type:"work"},{title:"Sed vel lectus",date:Z()().add(16,"days").add(2,"hours"),type:"family"}]},{id:"emily_rivera",tasks:[{title:"Lorem ipsum dolor",date:Z()().add(18,"days"),type:"other"}]}],S=t(57770),D=t(22172),N=t(80184),A=function(){var e=(0,D.tV)(),a=(0,j.Gn)(),t=(new Date).getMonth()+1,n=(0,C.useState)(e[0]),r=(0,i.Z)(n,2),o=r[0],l=r[1],s=(0,C.useState)({start:1,end:2}),d=(0,i.Z)(s,2),O=d[0],A=d[1],P=(0,C.useState)(null),z=(0,i.Z)(P,2),Y=z[0],B=z[1],q=(0,C.useState)(!1),R=(0,i.Z)(q,2),F=R[0],I=R[1],V=(0,C.useState)(null),H=(0,i.Z)(V,2),U=H[0],L=H[1],J=(0,C.useRef)(null),T=(0,C.useRef)(null),X=(0,C.useState)(0),E=(0,i.Z)(X,2),G=E[0],W=E[1];(0,C.useEffect)((function(){A(12===t?{start:t-1,end:t}:{start:t,end:t+1}),W(J.current.offsetHeight+T.current.offsetHeight)}),[t,J,T]);var Q,K=function(e){var a=U.realIndex;"prev"===e.currentTarget.dataset.direction?(U.slidePrev(),A({start:0===a?11:a,end:0===a?12:a+1})):(U.slideNext(),A({start:11===a?1:a+1,end:11===a?2:a+2}))},$=Z()().month(O.start-1).startOf("month").toDate(),ee=Z()().month(O.end-1).endOf("month").toDate(),ae=M.filter((function(e){return e.id===o.value}))[0].tasks,te=function(e){return ae.filter((function(a){return Z()(a.date).isSame(e,"day")})).length>0};return(0,N.jsxs)(p.Z,{name:"TaskScheduler",children:[(0,N.jsx)(h.Z,{title:"Doctor task scheduler",flex:"column",elRef:J,children:(0,N.jsx)(x.Z,{options:e,value:o,variant:"user",changeHandler:function(e){return l(e)}})}),(0,N.jsxs)(f.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,N.jsxs)(c,{children:[(0,N.jsx)("div",{className:"list",children:(0,N.jsx)(y.tq,{slidesPerView:"auto",spaceBetween:12,loop:!0,centeredSlides:!0,onSwiper:function(e){return L(e)},initialSlide:t-1,children:a.map((function(e){var a=e.month,t=Z()(a).format("M"),n=Z()(a).format("MMMM"),i=+t===O.start||+t===O.end;return(0,N.jsx)(y.o5,{className:i?"list-item active":"list-item",children:n},n)}))})}),(0,N.jsxs)("div",{className:"navigation",children:[(0,N.jsx)("button",{"data-direction":"prev",onClick:K,"aria-label":"Previous",children:(0,N.jsx)("i",{className:"icon icon-chevron-left"})}),(0,N.jsx)("button",{"data-direction":"next",onClick:K,"aria-label":"Next",children:(0,N.jsx)("i",{className:"icon icon-chevron-right"})})]})]}),(0,N.jsxs)(m,{top:G,children:[(0,N.jsx)(u,{as:b.ZP,locale:"en-US",value:[$,ee],activeStartDate:$,minDate:$,maxDate:ee,showDoubleView:!0,showNavigation:!1,showFixedNumberOfWeeks:!1,tileClassName:function(e){var a=e.date;return te(a)?"active":""},tileContent:(0,N.jsx)("span",{className:"bar"}),onClickDay:function(e){B(e),I(!0)}}),(0,N.jsx)(k.Z,{open:F,onClick:function(){return I(!1)},sx:{backgroundColor:"transparent",zIndex:1e3},children:(0,N.jsxs)("div",{className:"popup ".concat(F?"visible":""),children:[(0,N.jsx)("button",{className:"popup_close",onClick:function(){return I(!1)},children:(0,N.jsx)("i",{className:"icon icon-close"})}),Y&&te(Y)&&(Q=Y,ae.filter((function(e){return Z()(e.date).isSame(Q,"day")})).map((function(e){var a=e.title,t=e.type,n=e.date,i=S.z.find((function(e){return e.cat===t})).color;return(0,N.jsxs)("div",{className:"task",children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("span",{className:"task_label",children:"Task:"}),(0,N.jsxs)("div",{className:"task_header",children:[(0,N.jsx)(w.Ct,{color:i}),a]})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("span",{className:"task_label",children:"Date:"}),(0,N.jsx)("div",{children:Z()(n).format("MM.DD.YY, HH:mm A")})]})]},(0,_.x0)())})))]})})]}),(0,N.jsx)("div",{ref:T,children:(0,N.jsx)(g.Z,{children:S.z.map((function(e){var a=e.color,t=e.cat;return(0,N.jsx)(v.Z,{color:a,legend:t},t)}))})})]})]})},P=t(1413),z=t(22226),Y=t(13902),B=t(36163),q=t(54561),R=t(94397),F=[{name:"January",men:220,women:350},{name:"February",men:185,women:214},{name:"March",men:294,women:305},{name:"April",men:199,women:214},{name:"May",men:374,women:300},{name:"June",men:288,women:265},{name:"July",men:355,women:200},{name:"August",men:218,women:301},{name:"September",men:180,women:250},{name:"October",men:274,women:145},{name:"November",men:387,women:218},{name:"December",men:281,women:311}],I=[{name:"January",men:311,women:205},{name:"February",men:283,women:344},{name:"March",men:381,women:240},{name:"April",men:199,women:288},{name:"May",men:374,women:300},{name:"June",men:511,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:480,women:355},{name:"December",men:300,women:220}],V=[{name:"January",men:566,women:309},{name:"February",men:283,women:344},{name:"March",men:381,women:240},{name:"April",men:340,women:220},{name:"May",men:374,women:300},{name:"June",men:200,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:480,women:355},{name:"December",men:500,women:600}],H=[{name:"January",men:303,women:260},{name:"February",men:283,women:344},{name:"March",men:400,women:350},{name:"April",men:340,women:220},{name:"May",men:374,women:300},{name:"June",men:200,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:202,women:140},{name:"December",men:70,women:140}],U=t(24343),L=function(){var e=(0,R.Z)().width<768,a=(0,r.Fg)().theme,t=["2019","2020","2021","2022"],n=(0,q.Z)(t),i=n.index,o=n.navigate,l={type:"monotone",strokeWidth:3,dot:!1},d=[(0,P.Z)((0,P.Z)({},l),{},{dataKey:"men",stroke:s.O9.azure,activeDot:{r:4,fill:s.O9.azure,stroke:"light"===a?s.R2.widgetBg:s._4.widgetBg,strokeWidth:2},style:{filter:"drop-shadow(0 0 6px ".concat((0,U.m4)(s.O9.azure,.5),")")}}),(0,P.Z)((0,P.Z)({},l),{},{dataKey:"women",stroke:s.O9.peach,activeDot:{r:4,fill:s.O9.peach,stroke:"light"===a?s.R2.widgetBg:s._4.widgetBg,strokeWidth:2},style:{filter:"drop-shadow(0 0 6px ".concat((0,U.m4)(s.O9.peach,.5),")")}})],c=function(){switch(t[i]){case"2019":return F;case"2020":return I;case"2021":return V;default:return H}}();return(0,N.jsxs)(p.Z,{name:"PatientsGenderLineChart",mobile:400,children:[(0,N.jsx)(h.Z,{title:"Patients gender",flex:"column",children:(0,N.jsx)(Y.Z,{handler:o,text:t[i],style:{margin:"0 -22px 0"}})}),(0,N.jsxs)(f.Z,{style:{padding:0,overflow:"hidden"},children:[(0,N.jsx)(z.Z,{children:(0,j.Gn)().map((function(a){var t=a.month;return(0,N.jsx)("div",{children:e?Z()(t).month()+1:Z()(t).format("MMM")},Z()(t).format("MMM"))}))}),(0,N.jsx)(B.Z,{variant:"line",id:"patientsGender",data:c,elems:d}),(0,N.jsxs)(g.Z,{overlay:!0,children:[(0,N.jsx)(v.Z,{color:"azure",legend:"men"}),(0,N.jsx)(v.Z,{color:"peach",legend:"women"})]})]})]})},J=t(96027),T=t(17793),X=r.ZP.div.withConfig({componentId:"sc-jv5ldd-0"})(["display:flex;height:100%;",";.speedometer{width:100%;text{font-weight:400 !important;font-family:",";&.current-value{display:none;}}}"],s.fU.center,s.Rq.accent),E=function(){var e=(0,r.Fg)().theme,a=(0,R.Z)().width,t=function(){switch(!0){case a<414:return{width:232,height:120};case a>=414&&a<1800:return{width:300,height:160};default:return{width:400,height:220}}};return(0,N.jsxs)(p.Z,{name:"BloodTest",children:[(0,N.jsx)(h.Z,{title:"Blood test speed"}),(0,N.jsx)(f.Z,{style:{flexGrow:1},children:(0,N.jsx)(X,{children:(0,N.jsx)(T.ZP,{value:251,maxValue:1e3,needleColor:s.R2.text,needleTransitionDuration:2e3,needleHeightRatio:.8,segments:80,startColor:s.O9.green,endColor:s.O9.red,ringWidth:60,textColor:"light"===e?s.R2.text:s._4.text,labelFontSize:s.iH[10],maxSegmentLabels:10,valueFormat:"~s",forceRender:!0,width:t().width,height:t().height})})})]})},G=function(){return(0,N.jsxs)(n.Z,{title:"Dashboard",children:[(0,N.jsx)("div",{children:(0,N.jsx)(A,{})},"scheduler"),(0,N.jsx)("div",{children:(0,N.jsx)(L,{})},"gender"),(0,N.jsx)("div",{children:(0,N.jsx)(J.Z,{})},"radar"),(0,N.jsx)("div",{children:(0,N.jsx)(E,{})},"blood")]})}},13630:function(e,a,t){t.d(a,{Ji:function(){return l},So:function(){return o},dC:function(){return i},sd:function(){return r}});var n=t(28789),i=(0,n.F4)(["from{transform:scale(1);transform-origin:center center;animation-timing-function:linear;}10%{transform:scale(0.91);animation-timing-function:linear;}17%{transform:scale(0.98);animation-timing-function:linear;}33%{transform:scale(0.87);animation-timing-function:linear;}45%{transform:scale(1);animation-timing-function:linear;}"]),r=(0,n.F4)(["0%{opacity:1;transform:scale(0);}90%{opacity:.3;}to{opacity:.1;transform:scale(1);}"]),o=(0,n.F4)(["0%{transform:translateX(0);}50%{transform:translateX(2px);}100%{transform:translateX(0);}"]),l=(0,n.F4)(["0%{opacity:0;transform:translateY(2px);}100%{opacity:1;transform:translateY(0);}"]);(0,n.F4)(["0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(2rem);}"])},17711:function(e,a,t){t.d(a,{Gn:function(){return o},T2:function(){return r},Uo:function(){return l}});var n=t(72426),i=t.n(n),r=function(){for(var e=i()().year(),a=[],t=i()().year(i()().year()).endOf("year").diff(i()().year(i()().year()).startOf("year"),"days")+1,n=1;n<=t;n++){var r=i()().year(e).dayOfYear(n);a.push({date:r,long:r.format("dddd, MMMM DD"),short:r.format("DD/MM/YYYY")})}return a},o=function(){for(var e=i()().year(),a=[],t=1;t<=12;t++){var n=i()().year(e).month(t-1);a.push({month:n,formatted:n.format("MMMM, YYYY")})}return a},l=function(){for(var e=i()().year(),a=[],t=i()().year(i()().year()).endOf("year").diff(i()().year(i()().year()).startOf("year"),"weeks")+1,n=1;n<=t;n++){var r=i()().year(e).week(n);a.push({week:n,startShort:r.startOf("week").format("MMM, DD"),endShort:r.endOf("week").format("MMM, DD"),startLong:r.startOf("week").format("MMMM, DD"),endLong:r.endOf("week").format("MMMM, DD")})}return a}},40309:function(e,a,t){t.d(a,{D8:function(){return c},GI:function(){return s},W2:function(){return l},YM:function(){return d}});var n=t(28789),i=t(65484),r=t.n(i),o=t(14161),l=n.ZP.div.withConfig({componentId:"sc-1p71xew-0"})(["position:relative;height:100%;",";align-items:center;"],o.fU.col),s=n.ZP.div.withConfig({componentId:"sc-1p71xew-1"})(["position:relative;z-index:2;background-color:",";padding:20px;border-radius:8px;",";gap:16px;margin:auto;width:calc(100% - 40px);max-width:320px;"],r()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg}),o.fU.col),d=n.ZP.div.withConfig({componentId:"sc-1p71xew-2"})(["position:absolute;bottom:0;display:flex;width:100%;height:calc(100% - 40px);"]),c=n.ZP.div.withConfig({componentId:"sc-1p71xew-3"})(["",";gap:8px;position:relative;z-index:1;width:100%;margin:2px;flex-grow:1;.react-calendar{flex-grow:1;height:100%;&__navigation{background-color:",";border-radius:8px;min-height:40px;padding:10px 22px;display:flex;",";font-size:",";margin:0 2px;&__label{pointer-events:none;}}&__viewContainer{",";flex-grow:1;}&__tile{font-size:",";font-family:",";.bar{opacity:0;transition:opacity var(--transition);}}&__year-view__months{gap:20px 0;margin-top:20px;}&__month-view{height:100%;& > div{height:100%;align-items:stretch;}& > div > div{",";gap:8px;justify-content:space-between;height:100%;padding:0 24px 20px;}&__weekdays{text-transform:uppercase;font-size:",";font-family:",";text-align:center;order:1;display:grid !important;grid-template-columns:repeat(7,minmax(0,1fr));justify-items:center;abbr{text-decoration:none;}","{gap:8px;&__weekday{width:40px;}}}&__days{display:grid !important;grid-template-columns:repeat(7,minmax(0,1fr));grid-gap:20px 0;justify-items:center;&__day{&.active{color:",";cursor:pointer;}&:not(&.active){pointer-events:none;}&--neighboringMonth{opacity:.5;}}","{grid-gap:8px;&__day{width:40px;height:40px;border-radius:4px;background-color:",";position:relative;&.active{color:inherit;.bar{opacity:1;display:block;position:absolute;left:50%;bottom:8px;border-radius:2px;width:16px;height:2px;background-color:",";transform:translateX(-50%);}}}}}}}"],o.fU.col,r()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg}),o.fU.between,o.iH[14],o.fU.col,o.iH[14],o.Rq.accent,o.fU.col,o.iH[10],o.Rq.accent,o.AV.mobileL,o.O9.blue,o.AV.mobileL,r()("theme",{light:o.R2.highlight,dark:o._4.highlight}),o.O9.blue)}}]);
//# sourceMappingURL=2816.2bf24df9.chunk.js.map