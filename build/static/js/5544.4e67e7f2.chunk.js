"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[5544],{87025:function(e,t,a){var n=a(28789),l=a(65484),i=a.n(l),o=a(14161),r=a(80184),c=n.ZP.div.withConfig({componentId:"sc-1vyx1qv-0"})(["position:relative;margin-bottom:20px;height:20px;display:flex;align-items:center;&:before{content:'';position:absolute;top:50%;border-bottom:",";left:0;right:0;transform:translateY(-50%);z-index:1;}"],i()("theme",{light:o.Sz.dashedLight,dark:o.Sz.dashedDark})),s=n.ZP.span.withConfig({componentId:"sc-1vyx1qv-1"})(["text-transform:uppercase;padding:0 6px;position:relative;z-index:2;margin-left:17px;font-size:",";font-weight:500;font-family:",";background-color:",";})"],o.iH[10],o.Rq.accent,i()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg}));t.Z=function(e){var t=e.text;return(0,r.jsx)(c,{className:"separator",children:(0,r.jsx)(s,{children:t})})}},65710:function(e,t,a){var n=a(28789),l=a(14161),i=a(24343),o=a(80184),r=n.ZP.a.withConfig({componentId:"sc-1dh5zn7-0"})(["display:inline-flex;align-items:center;gap:10px;font-size:",";color:",";line-height:1;transition:color var(--transition);width:fit-content;span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}&:hover,&:focus{color:",";}.icon{font-size:",";color:",";}"],l.iH[14],l.O9.blue,(0,i._j)(.1,l.O9.blue),l.iH[12],l.O9.gray);t.Z=function(e){var t=e.href,a=void 0===t?"#":t,n=e.title;return(0,o.jsxs)(r,{href:a,children:[(0,o.jsx)("i",{className:"icon icon-link"}),(0,o.jsx)("span",{children:n})]})}},6438:function(e,t,a){var n=a(28789),l=a(14161),i=a(80184),o=n.ZP.button.withConfig({componentId:"sc-trmmq4-0"})(["font-size:",";color:",";transition:color var(--transition);line-height:1;&:hover,&:focus{color:",";}"],l.iH[16],l.R2.text,l.O9.blue);t.Z=function(e){var t=e.onClick,a=e.onFocus,n=e.onBlur;return(0,i.jsx)(o,{className:"dots","aria-label":"Open menu",onClick:t,onFocus:a,onBlur:n,children:(0,i.jsx)("i",{className:"icon-dots icon"})})}},2614:function(e,t,a){var n=a(1413),l=a(13902),i=a(80184);t.Z=function(e){var t=e.state,a=e.handler,o=e.loop,r=void 0===o||o;return(0,i.jsx)(l.Z,{handler:function(e){var l=e.currentTarget.dataset.direction,i=t.number;"prev"===l?0!==i?i--:i=11:11!==i?i++:i=0,a((function(e){return(0,n.Z)((0,n.Z)({},e),{},{number:i})}));var o=(new Date).getMonth(),r=o-1,c=o+1,s="",d=new Date(2022,i,1);s=i===o?"This month":i===r?"Previous month":i===c?"Next month":d.toLocaleString("en-US",{month:"long"}),a((function(e){return(0,n.Z)((0,n.Z)({},e),{},{label:s})}))},text:t.label,prevDisabled:!r&&0===t.number,nextDisabled:!r&&t.number===(new Date).getMonth()})}},13902:function(e,t,a){var n=a(1413),l=a(45987),i=a(85521),o=a(80184),r=["text","handler","prevDisabled","nextDisabled"];t.Z=function(e){var t=e.text,a=e.handler,c=e.prevDisabled,s=e.nextDisabled,d=(0,l.Z)(e,r);return(0,o.jsxs)(i.i,(0,n.Z)((0,n.Z)({className:"navigator"},d),{},{children:[(0,o.jsx)("button",{className:c?"disabled":"",onClick:a,"data-direction":"prev","aria-label":"Previous",children:(0,o.jsx)("i",{className:"icon icon-chevron-left"})}),(0,o.jsx)("span",{className:"label",children:t}),(0,o.jsx)("button",{className:s?"disabled":"",onClick:a,"data-direction":"next","aria-label":"Next",children:(0,o.jsx)("i",{className:"icon icon-chevron-right"})})]}))}},85521:function(e,t,a){a.d(t,{i:function(){return r}});var n=a(28789),l=a(65484),i=a.n(l),o=a(14161),r=n.ZP.div.withConfig({componentId:"sc-1axddf-0"})(["display:flex;",";height:40px;gap:20px;padding:0 22px;font-size:",";border-radius:8px;background-color:",";.label{user-select:none;}button{transition:opacity var(--transition);&:hover,&:focus{opacity:.8;}&.disabled{pointer-events:none;opacity:0;}}"],o.fU.between,o.iH[14],i()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg}))},14028:function(e,t,a){var n=a(28789),l=a(65484),i=a.n(l),o=a(14161),r=a(94397),c=a(80184),s=n.ZP.form.withConfig({componentId:"sc-1bp3jxs-0"})(["height:40px;margin:0 24px;border-radius:8px;padding:0 22px;background-color:",";display:flex;flex-grow:1;align-items:center;","{height:60px;margin:0 2px;}label{font-size:",";margin-right:24px;color:",";}input{width:100%;font-size:",";font-family:",";&::placeholder{color:",';}}button[type="reset"]{opacity:0;transition:opacity var(--transition);&.visible{opacity:1;}}'],i()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg}),o.AV.tablet,o.iH[12],o.O9.gray,o.iH[16],o.Rq.accent,o.R2.text);t.Z=function(e){var t=e.placeholder,a=e.handler,n=e.value,l=(0,r.Z)().width<767.98;return(0,c.jsxs)(s,{action:"#",method:"get",children:[(0,c.jsx)("label",{className:"search_bar-label",htmlFor:"widgetSearch",children:(0,c.jsx)("i",{className:"icon icon-search"})}),(0,c.jsx)("input",{type:"search",id:"widgetSearch",value:n,placeholder:l?"Search":t,onChange:function(e){return a(e.target.value)}}),(0,c.jsx)("button",{className:""!==n?"visible":"",type:"reset",onClick:function(){return a("")},children:(0,c.jsx)("i",{className:"icon icon-close"})})]})}},69517:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(1413),l=a(45987),i=a(29439),o=a(28789),r=a(65484),c=a.n(r),s=a(14161),d=a(13630),u=a(85232),p=c()("theme",{light:s.R2.highlight,dark:s._4.highlight}),m=c()("theme",{light:s.R2.text,dark:s._4.text}),h=(0,o.ZP)(u.ZP).withConfig({componentId:"sc-js1ggp-0"})([".Select{&__control{cursor:pointer;transition:var(--transition);border:none;background-color:",";border-radius:8px;font-size:",";height:40px;padding-right:16px;&--is-focused,&:hover{outline:none;}&--is-focused,&--is-focused:hover{box-shadow:0 0 0 2px "," !important;}&:hover{box-shadow:",";}.icon{transition:.3s ease-in-out;color:",";font-size:",";}}&__menu{min-width:max-content;width:100%;color:",";background-color:",";border-radius:8px;animation:"," var(--transition);z-index:100;&-list{max-height:180px;overflow-y:auto;scroll-behavior:smooth;z-index:100;}}&__indicator,&__indicator-separator{display:none;}&__option{cursor:pointer;transition:var(--transition);&:hover,&--is-focused,&--is-selected{background:transparent;color:",";}}&__single-value{color:",";}}"],p,s.iH[16],s.O9.blue,c()("theme",{light:"0 0 0 2px #A2C0D4",dark:"0 0 0 2px ".concat(s.O9.dark)}),c()("theme",{light:"#A2C0D4",dark:s.O9.gray}),s.iH[12],m,p,d.Ji,s.O9.blue,c()("theme",{light:s.R2.text,dark:s._4.text})),b=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-1"})([".Select{&__control{font-size:",";}&__input-container{color:",";}&__value-container{padding:0 16px;}}"],s.iH[14],m),f=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-2"})([".Select{&__control{background-color:transparent;width:fit-content;font-weight:500;font-family:",";border-radius:0;height:unset;padding:0;font-size:",";&--is-focused,&:hover{box-shadow:none !important;}}&__value-container{padding:0 20px 0 0;}}","{.Select__control{font-size:",";}}"],s.Rq.accent,s.iH[18],s.AV.tablet,s.iH[20]),g=(0,o.ZP)(h).withConfig({componentId:"sc-js1ggp-3"})([".Select{&__control{&--is-focused,&:hover{box-shadow:none !important;}}&__input-container{padding-left:16px;color:inherit;}&__value-container{padding:0 16px 0 0;}&__value-container,&__option{.user-option{display:flex;align-items:center;gap:10px;color:inherit;}}}"]),v=a(32569),x=a(72791),y=a(80184),w=["children"],Z=function(e){var t=e.label,a=e.options,o=e.variant,r=e.value,c=e.changeHandler,s=e.placeholder;(0,x.useEffect)((function(){s||null!==r||c(a[0])}),[]);var d=(0,x.useState)((function(){return"select_"+Math.random().toFixed(5).slice(2)})),u=(0,i.Z)(d,1)[0],p={classNamePrefix:"Select",inputId:t,isSearchable:"user"!==o,options:a,value:r,onChange:c,placeholder:s,openMenuOnFocus:!0,components:{Control:function(e){var t=e.children,a=(0,l.Z)(e,w);return(0,y.jsxs)(v.c.Control,(0,n.Z)((0,n.Z)({},a),{},{children:[t,(0,y.jsx)("i",{className:"icon icon-".concat("minimal"===o?"caret":"chevron","-down")})]}))},Menu:function(e){return(0,y.jsx)(v.c.Menu,(0,n.Z)((0,n.Z)({},e),{},{className:"menu",children:e.children}))}},id:u,blurInputOnSelect:!0,className:"select-".concat(o)};switch(o){default:case"basic":return(0,y.jsx)(b,(0,n.Z)({},p));case"minimal":return(0,y.jsx)(f,(0,n.Z)({},p));case"user":return(0,y.jsx)(g,(0,n.Z)({},p))}}},64290:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(1413),l=a(28789),i=a(14161),o=a(65484),r=a.n(o),c=l.ZP.li.withConfig({componentId:"sc-1wblbl0-0"})(["",";padding:20px;gap:20px;border-radius:8px;background-color:",";transform-origin:center center;will-change:transform;"],i.fU.col,r()("theme",{light:i.R2.highlight,dark:i._4.highlight})),s=l.ZP.div.withConfig({componentId:"sc-1wblbl0-1"})(["display:flex;",";border-bottom:",";padding-bottom:20px;gap:20px;"],i.fU.between,r()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})),d=l.ZP.div.withConfig({componentId:"sc-1wblbl0-2"})(["",";gap:20px;.info{",";gap:10px;.title{font-weight:500;}.timestamp{font-size:",";font-family:",";}}","{flex-direction:row;",";}"],i.fU.col,i.fU.col,i.iH[12],i.Rq.accent,i.AV.tablet,i.fU.between),u=l.ZP.button.withConfig({componentId:"sc-1wblbl0-3"})(["height:40px;border-radius:20px;background-color:",";color:",";font-size:",";font-family:",";padding:0 25px;transition:background-color var(--transition),color var(--transition);&:hover,&:focus{background-color:",";color:#fff;}"],r()("theme",{light:i.R2.widgetBg,dark:i._4.widgetBg}),r()("theme",{light:i.O9.blue,dark:"#fff"}),i.iH[14],i.Rq.accent,i.O9.blue),p=a(65710),m=a(6438),h=a(71856),b=a(31029),f=a(72426),g=a.n(f),v=a(1705),x=a(80184),y=function(e){var t=e.data,a=t.doctor,l=t.title,i=t.date;return(0,x.jsx)(h.M,{children:(0,x.jsxs)(c,(0,n.Z)((0,n.Z)({as:b.E.div},v.f),{},{children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(p.Z,{title:"Dr. ".concat(a)}),(0,x.jsx)(m.Z,{})]}),(0,x.jsxs)(d,{children:[(0,x.jsxs)("div",{className:"info",children:[(0,x.jsx)("span",{className:"title",children:l}),(0,x.jsx)("span",{className:"timestamp",children:g()(i).format("hh:mm A")})]}),(0,x.jsx)(u,{children:"View result"})]})]}))})}},20760:function(e,t,a){var n=a(1413),l=a(45987),i=a(51899),o=a(80184),r=["children","style","sidePadding","elRef"];t.Z=function(e){var t=e.children,a=e.style,c=e.sidePadding,s=void 0!==c&&c,d=e.elRef,u=(0,l.Z)(e,r);return(0,o.jsx)(i.uT,(0,n.Z)((0,n.Z)({ref:d,sidePadding:s,style:a},u),{},{children:t}))}},22172:function(e,t,a){a.d(t,{b_:function(){return o},i7:function(){return c},oF:function(){return r},tV:function(){return s}});var n=a(96576),l=a(52899),i=a(80184),o=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],r=[{value:"all",label:"All Departments"},{value:"family",label:"Family Doctors"},{value:"therapy",label:"Therapists"},{value:"dent",label:"Dentists"},{value:"cardio",label:"Cardiologists"}],c=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=function(){var e=[];return n.q.forEach((function(t){e.push({value:t.id,label:(0,i.jsxs)("div",{className:"user-option",children:[(0,i.jsx)(l.Z,{avatar:t.avatar,alt:t.name,size:40}),(0,i.jsx)("span",{children:t.name})]})})})),e}},96576:function(e,t,a){a.d(t,{q:function(){return h}});var n=a(81984),l=a(12264),i=a(96739),o=a(96671),r=a(94244),c=a(37063),s=a(40649),d=a(65539),u=a.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",p=a(28997),m=a(67160),h=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:i,webp:o},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:a(65777),webp:a(66507)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:u,webp:"data:image/webp;base64,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"},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:n,webp:l},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:s,webp:d},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:p,webp:m},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:r,webp:c},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},30447:function(e,t,a){a.d(t,{A:function(){return i}});var n=a(72426),l=a.n(n),i=[{id:"LRmwlkTmRiv",type:"blood",date:l()().subtract(2,"hour"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"EDkfK2u",type:"prenatal",date:l()().subtract(2,"hour"),doctor:"Adam Reynolds",title:"Mammography"},{id:"97SbXo",type:"blood",date:l()().subtract(3,"hour"),doctor:"Jeffery Nichols",title:"Hepatitis B surface antigen"},{id:"RYXnQSf",type:"blood",date:l()(),doctor:"Bella Levine",title:"Allergy testing"},{id:"VeOJuSBvq",type:"blood",date:l()(),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"aN6wcKSaUMgY",type:"mri",date:l()(),doctor:"Jeffery Nichols",title:"MRI"},{id:"ukMuBJSL",type:"prenatal",date:l()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"wMch17",type:"ct",date:l()().subtract(1,"day"),doctor:"Anna Richardson",title:"CT Scan"},{id:"pkMHKe",type:"ultrasound",date:l()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"5EkV9OZ",type:"xray",date:l()().subtract(1,"day"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"vYMB5V564wE",type:"ecg",date:l()().subtract(1,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"WdUbK4OW4Vn",type:"mri",date:l()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"MRI"},{id:"kLYqsk",type:"mri",date:l()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"MRI"},{id:"IftpHTw4p",type:"xray",date:l()().subtract(1,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"oCnZPQKY",type:"ultrasound",date:l()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"Y4RjFwyJn3y",type:"ct",date:l()().subtract(1,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"JojvuH7",type:"prenatal",date:l()().subtract(1,"month").subtract(2,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"Si1B9W",type:"blood",date:l()().subtract(1,"month").subtract(2,"day"),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"6zXfLNFdo",type:"blood",date:l()().subtract(1,"month").subtract(4,"day"),doctor:"Bella Levine",title:"Allergy testing"},{id:"nPE75vNSE1Ya",type:"ecg",date:l()().subtract(1,"month").subtract(4,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"hEUJrTG",type:"prenatal",date:l()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"WCHC85b2on2",type:"ct",date:l()().subtract(2,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"0zVMPZO8s",type:"blood",date:l()().subtract(2,"month").subtract(3,"day"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"g0ral9eA",type:"prenatal",date:l()().subtract(2,"month").subtract(3,"day"),doctor:"Herbert Reynolds",title:"Mammography"},{id:"SyUtrFzCKe",type:"xray",date:l()().subtract(2,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"NjQR8EIcGBR",type:"ultrasound",date:l()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"}]},83262:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(39314),l=a(93433),i=a(29439),o=a(28789),r=a(65484),c=a.n(r),s=a(14161),d=o.ZP.div.withConfig({componentId:"sc-1ljhdsm-0"})(["margin-bottom:20px;",";gap:20px;.wrapper{padding:20px 24px 0;",";gap:20px;.navigator{background-color:",";}}","{.wrapper{flex-direction:row;",";.navigator{width:250px;}}}"],s.fU.col,s.fU.col,c()("theme",{light:s.R2.highlight,dark:s._4.highlight}),s.AV.tablet,s.fU.between),u=o.ZP.div.withConfig({componentId:"sc-1ljhdsm-1"})(["padding:0 24px 20px;display:grid;grid-gap:20px;grid-template-columns:minmax(0,1fr);","{grid-template-columns:repeat(2,minmax(0,1fr));}"],s.AV.laptopL),p=a(249),m=a(20760),h=a(69517),b=a(2614),f=a(14028),g=a(64290),v=a(87025),x=a(25277),y=a(22172),w=a(72426),Z=a.n(w),j=a(72791),C=a(30447),k=a(80184),N=function(){var e=(0,j.useRef)(null),t=(new Date).getMonth(),a=(0,j.useState)(y.i7[0]),n=(0,i.Z)(a,2),o=n[0],r=n[1],c=(0,j.useState)({label:"This month",number:t}),s=(0,i.Z)(c,2),w=s[0],N=s[1],O=(0,j.useState)(""),A=(0,i.Z)(O,2),R=A[0],S=A[1],M=(0,l.Z)(new Set(C.A.map((function(e){return Z()(e.date).format("DD MMM YYYY")})))),P=C.A.filter((function(e){var t=new Date(e.date).getMonth(),a=e.title.toLowerCase(),n=e.type.toLowerCase(),l=e.doctor.toLowerCase(),i=a.includes(R.toLowerCase())||l.includes(R.toLowerCase()),r="all"===o.value||n===o.value;return t===w.number&&i&&r}));return(0,j.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.scrollTo({top:0,behavior:"smooth"})}),[w,R]),(0,k.jsxs)(p.Z,{name:"PatientsTests",children:[(0,k.jsxs)(d,{children:[(0,k.jsxs)("div",{className:"wrapper",children:[(0,k.jsx)(h.Z,{options:y.i7,variant:"minimal",value:o,changeHandler:function(e){return r(e)}}),(0,k.jsx)(b.Z,{state:w,handler:N,loop:!1})]}),(0,k.jsx)(f.Z,{placeholder:"Search a doctor or medical test",handler:S,value:R})]}),(0,k.jsx)(m.Z,{style:{padding:0},elRef:e,children:0!==P.length?M.map((function(e){var t=P.filter((function(t){return Z()(t.date).format("DD MMM YYYY")===e})),a=Z()(e).isSame(new Date,"day");return 0!==t.length&&new Date(e).getMonth()===w.number&&(0,k.jsxs)("div",{children:[(0,k.jsx)(v.Z,{text:a?"Today's visit":e}),(0,k.jsx)(u,{children:t.map((function(e){return(0,k.jsx)(g.Z,{data:e},"".concat(e.id,"-").concat(R,"-").concat(o.value))}))})]},e)})):(0,k.jsx)(x.Z,{})})]})},O=function(){return(0,k.jsx)(n.Z,{title:"Medical Test Results",children:(0,k.jsx)(N,{})})}},13630:function(e,t,a){a.d(t,{Ji:function(){return r},So:function(){return o},dC:function(){return l},sd:function(){return i}});var n=a(28789),l=(0,n.F4)(["from{transform:scale(1);transform-origin:center center;animation-timing-function:linear;}10%{transform:scale(0.91);animation-timing-function:linear;}17%{transform:scale(0.98);animation-timing-function:linear;}33%{transform:scale(0.87);animation-timing-function:linear;}45%{transform:scale(1);animation-timing-function:linear;}"]),i=(0,n.F4)(["0%{opacity:1;transform:scale(0);}90%{opacity:.3;}to{opacity:.1;transform:scale(1);}"]),o=(0,n.F4)(["0%{transform:translateX(0);}50%{transform:translateX(2px);}100%{transform:translateX(0);}"]),r=(0,n.F4)(["0%{opacity:0;transform:translateY(2px);}100%{opacity:1;transform:translateY(0);}"]);(0,n.F4)(["0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(2rem);}"])}}]);
//# sourceMappingURL=5544.4e67e7f2.chunk.js.map