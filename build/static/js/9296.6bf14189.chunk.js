"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9296],{21119:function(t,e,n){var a=n(28789),o=n(14161),i=n(24343),r=n(71856),l=n(31029),c=n(80184),s=a.ZP.button.withConfig({componentId:"sc-1fglmzx-0"})(["border-radius:8px;background-color:",";color:#fff;font-size:",";font-family:",";height:40px;width:100%;display:flex;",";gap:8px;line-height:1;transition:background-color var(--transition);&:hover,&:focus{background-color:",";}&.success{background-color:",";&:hover,&:focus{background-color:",";}}&.error{background-color:",";&:hover,&:focus{background-color:",";}}&.disabled{background-color:",";pointer-events:none;}"],o.O9.blue,o.iH[14],o.Rq.accent,o.fU.center,(0,i._j)(.1,o.O9.blue),o.O9.success,(0,i._j)(.1,o.O9.success),o.O9.error,(0,i._j)(.1,o.O9.error),o.O9.gray);e.Z=function(t){var e=t.text,n=t.handler,a=t.type,o=void 0===a?"button":a,i=t.isVisible,d=void 0===i||i,u=t.className,f=t.icon;return(0,c.jsx)(r.M,{children:d&&(0,c.jsxs)(s,{as:l.E.button,className:u||"",onClick:n,type:o,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[f&&(0,c.jsx)("i",{className:"icon icon-".concat(f)})," ",e]})})}},3748:function(t,e,n){var a=n(14161),o=n(20068),i=n(48980),r=n(80184);e.Z=function(t){var e=t.title,n=t.placement,l=void 0===n?"right":n,c=t.children;return(0,r.jsx)(o.Z,{TransitionComponent:i.Z,TransitionProps:{timeout:350},title:e,placement:l,enterTouchDelay:0,PopperProps:{sx:{"& .MuiTooltip-tooltip":{color:"#fff",backgroundColor:a.R2.text,fontSize:a.iH[10],boxShadow:"0 1px 8px rgba(65, 77, 85, 0.4)",textTransform:"uppercase",borderRadius:8},"& .MuiTooltip-arrow:before":{backgroundColor:a.R2.text}}},arrow:!0,children:c})}},65710:function(t,e,n){var a=n(28789),o=n(14161),i=n(24343),r=n(80184),l=a.ZP.a.withConfig({componentId:"sc-1dh5zn7-0"})(["display:inline-flex;align-items:center;gap:10px;font-size:",";color:",";line-height:1;transition:color var(--transition);width:fit-content;span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}&:hover,&:focus{color:",";}.icon{font-size:",";color:",";}"],o.iH[14],o.O9.blue,(0,i._j)(.1,o.O9.blue),o.iH[12],o.O9.gray);e.Z=function(t){var e=t.href,n=void 0===e?"#":e,a=t.title;return(0,r.jsxs)(l,{href:n,children:[(0,r.jsx)("i",{className:"icon icon-link"}),(0,r.jsx)("span",{children:a})]})}},36038:function(t,e,n){var a=n(31843),o=n(85335),i=n(80184);e.Z=function(t){var e=t.color,n=t.legend;return(0,i.jsxs)(a.H,{children:[(0,i.jsx)(o.Lm,{color:e})," ",n]})}},47242:function(t,e,n){var a=n(31843),o=n(80184);e.Z=function(t){var e=t.children,n=t.overlay;return(0,o.jsx)(a.a,{overlay:n,children:e})}},31843:function(t,e,n){n.d(e,{H:function(){return r},a:function(){return i}});var a=n(28789),o=n(14161),i=a.ZP.ul.withConfig({componentId:"sc-1m0thzw-0"})(["display:flex;flex-wrap:wrap;gap:8px 16px;",""],(function(t){return t.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "})),r=a.ZP.li.withConfig({componentId:"sc-1m0thzw-1"})(["display:flex;align-items:center;gap:8px;text-transform:uppercase;font-family:",";font-size:",";"],o.Rq.accent,o.iH[10])},6438:function(t,e,n){var a=n(28789),o=n(14161),i=n(80184),r=a.ZP.button.withConfig({componentId:"sc-trmmq4-0"})(["font-size:",";color:",";transition:color var(--transition);line-height:1;&:hover,&:focus{color:",";}"],o.iH[16],o.R2.text,o.O9.blue);e.Z=function(t){var e=t.onClick,n=t.onFocus,a=t.onBlur;return(0,i.jsx)(r,{className:"dots","aria-label":"Open menu",onClick:e,onFocus:n,onBlur:a,children:(0,i.jsx)("i",{className:"icon-dots icon"})})}},13902:function(t,e,n){var a=n(1413),o=n(45987),i=n(85521),r=n(80184),l=["text","handler","prevDisabled","nextDisabled"];e.Z=function(t){var e=t.text,n=t.handler,c=t.prevDisabled,s=t.nextDisabled,d=(0,o.Z)(t,l);return(0,r.jsxs)(i.i,(0,a.Z)((0,a.Z)({className:"navigator"},d),{},{children:[(0,r.jsx)("button",{className:c?"disabled":"",onClick:n,"data-direction":"prev","aria-label":"Previous",children:(0,r.jsx)("i",{className:"icon icon-chevron-left"})}),(0,r.jsx)("span",{className:"label",children:e}),(0,r.jsx)("button",{className:s?"disabled":"",onClick:n,"data-direction":"next","aria-label":"Next",children:(0,r.jsx)("i",{className:"icon icon-chevron-right"})})]}))}},85521:function(t,e,n){n.d(e,{i:function(){return l}});var a=n(28789),o=n(65484),i=n.n(o),r=n(14161),l=a.ZP.div.withConfig({componentId:"sc-1axddf-0"})(["display:flex;",";height:40px;gap:20px;padding:0 22px;font-size:",";border-radius:8px;background-color:",";.label{user-select:none;}button{transition:opacity var(--transition);&:hover,&:focus{opacity:.8;}&.disabled{pointer-events:none;opacity:0;}}"],r.fU.between,r.iH[14],i()("theme",{light:r.R2.bodyBg,dark:r._4.bodyBg}))},8281:function(t,e,n){var a=n(62014),o=n(72656),i=n(80184);e.Z=function(t){var e=t.className,n=t.eventKey,r=t.title,l=t.handler;return(0,i.jsx)(a.ck,{className:e||"",as:o.Z.Item,onClick:l,children:(0,i.jsx)(a.zx,{as:o.Z.Link,eventKey:n,children:r})})}},19640:function(t,e,n){var a=n(62014),o=n(72656),i=n(80184);e.Z=function(t){var e=t.children;return(0,i.jsx)(a.W2,{as:o.Z,children:e})}},62014:function(t,e,n){n.d(e,{W2:function(){return c},ck:function(){return d},zx:function(){return s}});var a=n(28789),o=n(65484),i=n.n(o),r=n(14161),l=i()("theme",{light:r.R2.bodyBg,dark:r.R2.text}),c=a.ZP.div.withConfig({componentId:"sc-1ve7w0q-0"})(["width:100%;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;grid-gap:2px;border-radius:8px;overflow:hidden;"]),s=a.ZP.button.withConfig({componentId:"sc-1ve7w0q-1"})(["width:100%;height:40px;font-size:",";text-transform:capitalize;transition:background-color var(--transition);",";display:flex;",' &[aria-selected="true"],&.active,&:hover,&:focus{background-color:',";}"],r.iH[14],i()("theme",{light:"\n        color: ".concat(r.O9.blue,";\n        background-color: ").concat(r.R2.highlight,";\n    "),dark:"\n        color: ".concat(r.O9.secondary,";\n        background-color: ").concat(r._4.highlight,";\n    ")}),r.fU.center,l),d=a.ZP.div.withConfig({componentId:"sc-1ve7w0q-2"})(["&.active .nav-link{background-color:",";};"],l)},22426:function(t,e,n){n.d(e,{m:function(){return s}});var a=n(37762),o=n(45987),i=n(28789),r=n(14161),l=n(80184),c=["active","payload","tooltip","arrow","multi"],s=i.ZP.div.withConfig({componentId:"sc-9kue7w-0"})(["font-family:",";font-size:",";color:#fff;box-shadow:0 1px 8px rgba(65,77,85,0.4);border-radius:8px;background-color:",";height:20px;padding:0 8px;display:flex;"," line-height:1;position:relative;text-transform:uppercase;&.multiple{flex-direction:column;gap:10px;padding:10px;height:auto;.item{display:flex;align-items:center;gap:8px;.color{width:6px;height:6px;border-radius:50%;}}}&:before{content:'';position:absolute;left:50%;bottom:-3px;transform:translateX(-50%) rotate(-45deg);width:8px;height:8px;background-color:",";display:",";}"],r.Rq.accent,r.iH[10],r.R2.text,r.fU.center,r.R2.text,(function(t){return t.arrow?"block":"none"}));e.Z=function(t){var e=t.active,n=t.payload,i=t.tooltip,r=t.arrow,d=void 0!==r&&r,u=t.multi,f=void 0!==u&&u,p=(0,o.Z)(t,c);if(f){if(!e||!i)return null;var h,m=(0,a.Z)(n);try{for(m.s();!(h=m.n()).done;){var g=h.value;if(g.dataKey===i)return(0,l.jsx)(s,{arrow:d,children:g.value})}}catch(x){m.e(x)}finally{m.f()}return null}return e&&n[0]?(0,l.jsxs)(s,{arrow:d,children:[" ",n[0].value," ",p.right&&n[0].dataKey]}):null}},47957:function(t,e,n){n.d(e,{Z:function(){return g}});var a=n(1413),o=n(45987),i=n(28789),r=n(65484),l=n.n(r),c=n(14161);n(72791);var s=n.p+"static/media/bar_mask.d2273c76110ea4768bc88c9eb034957c.svg",d=i.ZP.div.withConfig({componentId:"sc-1gfo6cc-0"})(["display:flex;justify-content:space-between;gap:20px;overflow-x:auto;margin:20px -24px 0;padding:0 24px;user-select:none;"]),u=i.ZP.div.withConfig({componentId:"sc-1gfo6cc-1"})(["",";align-items:center;gap:20px;font-family:",";font-size:",";text-transform:uppercase;height:fit-content;"," .track{background-color:",";height:228px;width:","px;border-radius:4px;display:flex;flex-direction:column-reverse;gap:","px;}"],c.fU.col,c.Rq.accent,c.iH[10],(function(t){return t.masked&&"\n    &:first-of-type {\n        align-items: flex-start;\n    }\n    \n    &:last-of-type {\n        align-items: flex-end;\n    }\n    \n    .track {\n        mask: url(".concat(s,") no-repeat center center / contain;\n     }\n  ")}),l()("theme",{light:function(t){return t.masked?c.R2.bodyBg:c.R2.highlight},dark:c._4.highlight}),(function(t){return t.masked?4:8}),(function(t){return t.masked?0:8})),f=n(31029),p=n(57770),h=n(80184),m=["data","masked"],g=function(t){var e=t.data,n=t.masked,i=void 0!==n&&n,r=(0,o.Z)(t,m);return(0,h.jsx)(d,(0,a.Z)((0,a.Z)({},r),{},{children:e.map((function(t){return(0,h.jsxs)(u,{masked:i,children:[(0,h.jsx)("div",{className:"track",children:Object.keys(t.values).map((function(e,n){var a=t.values[e],o=p.U.find((function(t){return t.cat===e})).color;return(0,h.jsx)(f.E.span,{style:{backgroundColor:c.O9[o],width:"100%",borderRadius:!i&&4,opacity:0},animate:{height:"".concat(a,"%"),opacity:1},transition:{duration:1,delay:.5,type:"tween",ease:"easeInOut"}},"".concat(t.label,"-").concat(e,"-").concat(n,"-").concat(a))}))}),(0,h.jsx)("span",{children:t.label})]},t.label)}))}))}},92889:function(t,e,n){var a=n(36038),o=n(47242),i=n(57770),r=n(80184);e.Z=function(){return(0,r.jsx)(o.Z,{children:i.U.map((function(t){var e=t.cat,n=t.color;return"emergency"===e?null:(0,r.jsx)(a.Z,{legend:e,color:n},e)}))})}},30133:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(28789),o=n(65484),i=n.n(o),r=n(29439),l=n(72791),c=function(t,e){var n=(0,l.useState)(void 0),a=(0,r.Z)(n,2),o=a[0],i=a[1],c=(0,l.useState)(void 0),s=(0,r.Z)(c,2),d=s[0],u=s[1],f=function(){var e=t.current;0===e.children[0].scrollTop?e.classList.add("is-top"):e.classList.remove("is-top"),e.children[0].scrollHeight===Math.ceil(e.children[0].scrollTop)+e.children[0].clientHeight||e.children[0].scrollHeight===Math.floor(e.children[0].scrollTop)+e.children[0].clientHeight?e.classList.add("is-bottom"):e.classList.remove("is-bottom")};return(0,l.useEffect)((function(){var n=t.current,a=function(){u(n.children[0].scrollHeight);var t=n.children[0].scrollHeight>n.children[0].clientHeight;i(t),null===n||void 0===n||n.classList.toggle("has-overflow",t),n.children[0].addEventListener("scroll",f),e&&e(t)};n&&("ResizeObserver"in window&&new ResizeObserver(a).observe(n),a())}),[t,e,d]),o},s=n(80184),d=a.ZP.div.withConfig({componentId:"sc-15jbc80-0"})(["height:calc(100% - ","px);position:relative;flex-grow:1;&.has-overflow{&:before,&:after{content:'';display:block;height:","px;position:absolute;width:100%;;background:",";left:0;z-index:300;transition:height var(--transition);}&:before{top:0;transform:scaleY(-1);}&:after{bottom:0;}&.is-top:before,&.is-bottom:after{height:0;}}.track{height:100%;overflow-y:auto;}"],(function(t){return t.height}),(function(t){return"small"===t.size?40:80}),i()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})),u=function(t){var e=t.children,n=t.height,a=t.size,o=(0,l.useRef)(null),i=c(o);return(0,s.jsx)(d,{className:i?"is-top has-overflow":"",height:n,ref:o,size:a,children:e})}},20760:function(t,e,n){var a=n(1413),o=n(45987),i=n(51899),r=n(80184),l=["children","style","sidePadding","elRef"];e.Z=function(t){var e=t.children,n=t.style,c=t.sidePadding,s=void 0!==c&&c,d=t.elRef,u=(0,o.Z)(t,l);return(0,r.jsx)(i.uT,(0,a.Z)((0,a.Z)({ref:d,sidePadding:s,style:n},u),{},{children:e}))}},66150:function(t,e,n){var a=n(45987),o=n(51899),i=n(80184),r=["title","children","sidePadding","flex","elRef"];e.Z=function(t){var e=t.title,n=t.children,l=t.sidePadding,c=void 0!==l&&l,s=t.flex,d=void 0===s?"row":s,u=t.elRef,f=(0,a.Z)(t,r);return(0,i.jsxs)(o.h4,{className:f.className?f.className:"",sidePadding:c,flex:d,ref:u,style:f.style,children:[(0,i.jsx)("h2",{className:"title",children:e}),n]})}},57770:function(t,e,n){n.d(e,{U:function(){return a},z:function(){return o}});var a=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],o=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},54561:function(t,e,n){var a=n(29439),o=n(72791);e.Z=function(t){var e=(0,o.useState)(0),n=(0,a.Z)(e,2),i=n[0],r=n[1];return{index:i,setIndex:r,navigate:function(e){var n=e.currentTarget.dataset.direction;"next"===n?i+1===t.length?r(0):r(i+1):"prev"===n&&r(i-1<0?t.length-1:i-1)}}}},84483:function(t,e,n){var a=n(29439),o=n(72791);e.Z=function(t,e){var n=(0,o.useState)(0),i=(0,a.Z)(n,2),r=i[0],l=i[1];return(0,o.useEffect)((function(){if(null!==t&&null!==e){var n=t.current?t.current.clientHeight:0,a=e&&e.current?e.current.clientHeight:0;l(n+a)}}),[t,e]),r}},63245:function(t,e,n){var a=n(63412),o=n(52007),i=n.n(o),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=(0,a.Ds)().enqueueSnackbar;return{notify:function(){return n(t,{variant:e})}}};r.propTypes={text:i().string.isRequired,type:i().oneOf(["success","error","warning","info"])},e.Z=r},87397:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});var a=n(39314),o=n(29439),i=n(28789),r=n(14161),l=n(13630),c=i.ZP.div.withConfig({componentId:"sc-1yy09w4-0"})(["height:100%;.tab-content,.tab-pane,.wrapper{height:100%;}"]),s=i.ZP.span.withConfig({componentId:"sc-1yy09w4-1"})(["cursor:pointer;position:absolute;right:24px;z-index:10;transition:.3s ease-in-out;&:hover,&:focus{color:",";}"],r.O9.blue),d=i.ZP.div.withConfig({componentId:"sc-1yy09w4-2"})(["height:100%;",";gap:14px;justify-content:space-between;align-items:center;.chart_content{position:relative;margin:auto;justify-self:center;}"],r.fU.col),u=i.ZP.div.withConfig({componentId:"sc-1yy09w4-3"})(["display:flex;",";width:fit-content;margin:0 auto;position:relative;height:590px;img{width:auto;height:100%;}"],r.fU.center),f=i.ZP.fieldset.withConfig({componentId:"sc-1yy09w4-4"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),p=i.ZP.div.withConfig({componentId:"sc-1yy09w4-5"})(['position:absolute;&[data-spot="head_front"],&[data-spot="neck_front"],&[data-spot="stomach_front"],&[data-spot="back_back"],&[data-spot="lungs_back"]{left:50%;transform:translateX(-50%);}&[data-spot="head_front"]{top:0;}&[data-spot="neck_front"]{top:100px;}&[data-spot="chest_front"]{top:130px;left:80px;}&[data-spot="heart_front"]{top:160px;right:80px;}&[data-spot="stomach_front"]{top:220px;}&[data-spot="left_arm_front"],&[data-spot="right_arm_front"]{top:240px;}&[data-spot="left_arm_front"]{left:40px;}&[data-spot="right_arm_front"]{right:40px;}&[data-spot="left_leg_front"],&[data-spot="right_leg_front"]{top:360px;}&[data-spot="left_leg_front"]{left:80px;}&[data-spot="right_leg_front"]{right:80px;}&[data-spot="back_back"]{top:240px;}&[data-spot="left_shoulder_back"],&[data-spot="right_shoulder_back"]{top:130px;}&[data-spot="left_shoulder_back"]{left:60px;}&[data-spot="right_shoulder_back"]{right:60px;}&[data-spot="lungs_back"]{top:200px;}&[data-spot="left_ankle_back"],&[data-spot="right_ankle_back"]{bottom:20px;}&[data-spot="left_ankle_back"]{left:85px;}&[data-spot="right_ankle_back"]{right:85px;}input{display:none;&:checked + label{opacity:1;.aura:before{animation-play-state:running;}}}label{display:block;background-color:',";width:12px;height:12px;border-radius:50%;transition:.3s ease-in-out;position:relative;z-index:2;opacity:.4;&:hover,&:focus{opacity:1;}.aura{display:block;position:absolute;width:20px;height:20px;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;&:before{content:'';display:block;position:absolute;z-index:-10;width:100%;height:100%;top:0;left:0;border-radius:50%;background-color:",";transform:translate3d(0,0,0);animation:"," 3s ease-in-out infinite;animation-play-state:paused;}}}"],r.O9.absolute_red,r.O9.absolute_red,l.sd),h=n(249),m=n(66150),g=n(20760),x=n(19640),b=n(8281),v=n(83522),y=n(66336),k=n(21119),j=n(3748),w=n(72791);var Z=n.p+"static/media/male_front.cc650a0d5fb7b989156cda03dcbbd3e0.svg";var _=n.p+"static/media/male_back.8c86825f1dcd933eb2c017b5e1a2a3fc.svg";var C=n.p+"static/media/female_front.14e35a20bb7659621a29dc6897c91c6c.svg";var N=n.p+"static/media/female_back.f904dfe7aed550c330e500ccf0e1e312.svg",P=n(63245),R=n(80184),D=function(t){var e=t.gender,n=(0,w.useState)(!0),a=(0,o.Z)(n,2),i=a[0],r=a[1],l=(0,w.useState)(!1),c=(0,o.Z)(l,2),h=c[0],m=c[1],g=(0,P.Z)("Your request have been successfully sent to your doctor.","info").notify,x=function(t,e,n){return t.map((function(t){var a=t.id,o=t.label,i="".concat(n,"_").concat(a,"_").concat(e);return(0,R.jsxs)(p,{"data-spot":"".concat(a,"_").concat(e),children:[(0,R.jsx)("input",{type:"checkbox",id:i,name:i}),(0,R.jsx)(j.Z,{title:o,placement:"bottom",children:(0,R.jsx)("label",{htmlFor:i,children:(0,R.jsx)("span",{className:"aura"})})})]},i)}))};return(0,R.jsxs)("div",{className:"wrapper",children:[(0,R.jsx)(s,{tabIndex:"0",onClick:function(){return r((function(t){return!t}))},"aria-label":"Change view",children:(0,R.jsx)(y.Z,{})}),(0,R.jsxs)(d,{as:"form",onChange:function(t){return function(t){var e=Array.from(t.currentTarget.querySelectorAll('input[type="checkbox"]')).some((function(t){return t.checked}));m(e)}(t)},onSubmit:function(t){return function(t){t.preventDefault(),t.target.reset(),m(!1),g()}(t)},children:[(0,R.jsx)("div",{className:"chart_content",children:i?(0,R.jsxs)(u,{side:"front",children:[(0,R.jsx)("img",{className:"".concat(e," front"),src:"male"===e?Z:C,alt:"Body chart"}),(0,R.jsx)(f,{children:x([{id:"head",label:"Head"},{id:"neck",label:"Neck"},{id:"chest",label:"Chest"},{id:"stomach",label:"Stomach"},{id:"heart",label:"Heart"},{id:"left_arm",label:"Left Arm"},{id:"right_arm",label:"Right Arm"},{id:"left_leg",label:"Left Leg"},{id:"right_leg",label:"Right Leg"}],"front",e)})]}):(0,R.jsxs)(u,{side:"back",children:[(0,R.jsx)("img",{className:"".concat(e," back"),src:"male"===e?_:N,alt:"Body chart"}),(0,R.jsx)(f,{children:x([{id:"back",label:"Back"},{id:"left_shoulder",label:"Left Shoulder"},{id:"right_shoulder",label:"Right Shoulder"},{id:"lungs",label:"Lungs"},{id:"left_ankle",label:"Left Ankle"},{id:"right_ankle",label:"Right Ankle"}],"back",e)})]})}),(0,R.jsx)(k.Z,{className:h?"":"disabled",text:"Submit request",type:"submit"})]})]})},z=function(){var t=(0,w.useState)("male"),e=(0,o.Z)(t,2),n=e[0],a=e[1];return(0,R.jsxs)(h.Z,{name:"PainLocation",children:[(0,R.jsx)(m.Z,{title:"Location of pain",flex:"column",children:(0,R.jsxs)(x.Z,{children:[(0,R.jsx)(b.Z,{className:"male"===n?"active":"",eventKey:"male",title:"Male",handler:function(){return a("male")}}),(0,R.jsx)(b.Z,{className:"female"===n?"active":"",eventKey:"female",title:"Female",handler:function(){return a("female")}})]})}),(0,R.jsx)(g.Z,{children:(0,R.jsx)(c,{children:(0,R.jsx)(v.Z.Container,{activeKey:n,transition:!0,children:(0,R.jsxs)(v.Z.Content,{children:[(0,R.jsx)(v.Z.Pane,{eventKey:"male",children:(0,R.jsx)(D,{gender:"male"})}),(0,R.jsx)(v.Z.Pane,{eventKey:"female",children:(0,R.jsx)(D,{gender:"female"})})]})})})})]})},M=n(96726),O=n(47242),S=n(36038),I=n(20601),H=n(42),L=n(21041),T=n(41048),U=n(35667),B=n(22426),F=n(94397),q=function(){var t=(0,i.Fg)().theme,e=(0,F.Z)().width<414,n=[r.O9.purple,r.O9.yellow,r.O9.orange],a=[{value:200},{value:250},{value:550}];return(0,R.jsxs)(h.Z,{name:"HepatitisChart",children:[(0,R.jsx)(m.Z,{title:"Hepatitis",children:(0,R.jsxs)(O.Z,{children:[(0,R.jsx)(S.Z,{color:"purple",legend:"A"}),(0,R.jsx)(S.Z,{color:"yellow",legend:"B"}),(0,R.jsx)(S.Z,{color:"orange",legend:"C"})]})}),(0,R.jsx)(g.Z,{children:(0,R.jsx)(I.h,{width:"100%",height:e?200:300,children:(0,R.jsxs)(H.u,{width:e?220:300,height:e?220:300,children:[(0,R.jsx)(L.b,{data:a,outerRadius:e?100:125,dataKey:"value",strokeWidth:4,stroke:"light"===t?r.R2.widgetBg:r._4.widgetBg,children:a.map((function(t,e){return(0,R.jsx)(T.b,{fill:n[e%n.length]},"cell-".concat(e))}))}),(0,R.jsx)(U.u,{content:(0,R.jsx)(B.Z,{})})]})})})]})},Y=n(82243),K=function(){return(0,R.jsxs)(a.Z,{title:"Dashboard",children:[(0,R.jsx)("div",{children:(0,R.jsx)(z,{})},"pain-location"),(0,R.jsx)("div",{children:(0,R.jsx)(M.Z,{})},"daily-app-chart"),(0,R.jsx)("div",{children:(0,R.jsx)(q,{})},"hepatitis"),(0,R.jsx)("div",{children:(0,R.jsx)(Y.Z,{variant:"large"})},"payments-history")]})}},13630:function(t,e,n){n.d(e,{Ji:function(){return l},So:function(){return r},dC:function(){return o},sd:function(){return i}});var a=n(28789),o=(0,a.F4)(["from{transform:scale(1);transform-origin:center center;animation-timing-function:linear;}10%{transform:scale(0.91);animation-timing-function:linear;}17%{transform:scale(0.98);animation-timing-function:linear;}33%{transform:scale(0.87);animation-timing-function:linear;}45%{transform:scale(1);animation-timing-function:linear;}"]),i=(0,a.F4)(["0%{opacity:1;transform:scale(0);}90%{opacity:.3;}to{opacity:.1;transform:scale(1);}"]),r=(0,a.F4)(["0%{transform:translateX(0);}50%{transform:translateX(2px);}100%{transform:translateX(0);}"]),l=(0,a.F4)(["0%{opacity:0;transform:translateY(2px);}100%{opacity:1;transform:translateY(0);}"]);(0,a.F4)(["0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(2rem);}"])},17711:function(t,e,n){n.d(e,{Gn:function(){return r},T2:function(){return i},Uo:function(){return l}});var a=n(72426),o=n.n(a),i=function(){for(var t=o()().year(),e=[],n=o()().year(o()().year()).endOf("year").diff(o()().year(o()().year()).startOf("year"),"days")+1,a=1;a<=n;a++){var i=o()().year(t).dayOfYear(a);e.push({date:i,long:i.format("dddd, MMMM DD"),short:i.format("DD/MM/YYYY")})}return e},r=function(){for(var t=o()().year(),e=[],n=1;n<=12;n++){var a=o()().year(t).month(n-1);e.push({month:a,formatted:a.format("MMMM, YYYY")})}return e},l=function(){for(var t=o()().year(),e=[],n=o()().year(o()().year()).endOf("year").diff(o()().year(o()().year()).startOf("year"),"weeks")+1,a=1;a<=n;a++){var i=o()().year(t).week(a);e.push({week:a,startShort:i.startOf("week").format("MMM, DD"),endShort:i.endOf("week").format("MMM, DD"),startLong:i.startOf("week").format("MMMM, DD"),endLong:i.endOf("week").format("MMMM, DD")})}return e}},96726:function(t,e,n){var a=n(249),o=n(66150),i=n(20760),r=n(92889),l=n(47957),c=n(43970),s=n(80184);e.Z=function(){return(0,s.jsxs)(a.Z,{name:"DailyAppointmentChart",shadow:!0,children:[(0,s.jsx)(o.Z,{title:"Daily appointments"}),(0,s.jsxs)(i.Z,{style:{justifyContent:"space-between"},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(l.Z,{data:[{label:"9am",values:{consultation:10,test:25,checkup:10,sick:20}},{label:"10am",values:{consultation:5,test:41,sick:12}},{label:"11am",values:{consultation:45,test:18}},{label:"12am",values:{consultation:22,checkup:42}},{label:"1pm",values:{consultation:5,checkup:35}},{label:"2pm",values:{consultation:10,test:20,checkup:25}},{label:"3pm",values:{consultation:25,sick:40}},{label:"4pm",values:{consultation:20,test:30,sick:5}},{label:"5pm",values:{consultation:15,checkup:50,sick:10}}],as:c.Z})]})]})}},82243:function(t,e,n){n.d(e,{Z:function(){return O}});var a=n(28789),o=n(14161),i=n(249),r=n(66150),l=n(20760),c=n(65484),s=n.n(c),d=a.ZP.div.withConfig({componentId:"sc-1el37jg-0"})(["border-bottom:",";padding-bottom:20px;&:not(.bordered):last-of-type{border-bottom:none;padding-bottom:0;}"],s()("theme",{light:o.Sz.dashedLight,dark:o.Sz.dashedDark})),u=a.ZP.div.withConfig({componentId:"sc-1el37jg-1"})(["display:flex;",";margin-bottom:12px;gap:20px;.main{",";gap:8px;.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500;}}.payment{align-self:flex-end;font-family:",";font-weight:500;display:flex;gap:8px;font-size:",";}"],o.fU.between,o.fU.col,o.Rq.accent,o.iH[14]),f=a.ZP.div.withConfig({componentId:"sc-1el37jg-2"})(["display:flex;",";"],o.fU.between),p=a.ZP.div.withConfig({componentId:"sc-1el37jg-3"})(["display:flex;align-items:center;gap:12px;.date{font-size:",";}.icon{color:",";}"],o.iH[14],o.O9.gray),h=n(65710),m=n(6438),g=n(72426),x=n.n(g),b=n(80184),v=function(t){var e=t.data,n=t.className,a=e.doctor,o=e.title,i=e.payment,r=e.date,l=x()(r).format("dddd, DD MMMM");return(0,b.jsxs)(d,{className:"list-item ".concat(n||""),children:[(0,b.jsxs)(u,{children:[(0,b.jsxs)("div",{className:"main",children:[(0,b.jsx)(h.Z,{title:"Dr. ".concat(a)}),(0,b.jsx)("span",{className:"title",children:o})]}),(0,b.jsxs)("span",{className:"payment",children:[(0,b.jsx)("span",{className:"icon",children:"\u20ac"})," ",i.toFixed(2)]})]}),(0,b.jsxs)(f,{children:[(0,b.jsxs)(p,{children:[(0,b.jsx)("i",{className:"icon icon-clock"}),(0,b.jsx)("span",{className:"date",children:l})]}),(0,b.jsx)(m.Z,{})]})]})},y=n(13902),k=n(30133),j=n(25277),w=n(25984),Z=n(17711),_=n(54561),C=n(72791),N=n(84483),P=n(94397),R=new Date((new Date).getTime()-864e5),D=new Date((new Date).getTime()-1728e5),z=[{doctor:"John Doe",title:"USG + Consultation",payment:40.15,date:new Date},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:new Date},{doctor:"Caren Smith",title:"MRI",payment:99.3,date:new Date},{doctor:"Elizabeth Jones",title:"USG + Consultation",payment:35,date:new Date},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:new Date},{doctor:"Caren Smith",title:"Keeney Test",payment:150.95,date:new Date},{doctor:"Robert Miller",title:"Family Planning",payment:540,date:R},{doctor:"Elizabeth Jones",title:"USG + Consultation",payment:40.15,date:R},{doctor:"Elizabeth Jones",title:"X-Ray",payment:70,date:R},{doctor:"Samantha Berry",title:"Psychotherapy",payment:200,date:R},{doctor:"Samantha Berry",title:"Art therapy session",payment:80.5,date:R},{doctor:"Lucas Bell",title:"Gastroscopy",payment:50.9,date:R},{doctor:"Elizabeth Jones",title:"Consultation",payment:15,date:D},{doctor:"Kimbra Lee",title:"Vision Test",payment:20.9,date:D},{doctor:"Kimbra Lee",title:"Glaucoma Test",payment:90.95,date:D},{doctor:"Robert Miller",title:"Family Planning",payment:450.87,date:D},{doctor:"John Doe",title:"USG + Consultation",payment:40.15,date:D},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:D}],M=a.ZP.div.withConfig({componentId:"sc-c10uqe-0"})([".list{",";gap:20px 24px;padding:20px 24px;.column{",";gap:20px;}}","{.list{","}}"],o.fU.col,o.fU.col,o.AV.tablet,(function(t){return"large"===t.variant&&"\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n      "})),O=function(t){var e=t.variant,n=(0,Z.T2)(),a=x()().diff(x()().startOf("year"),"days"),o=(0,_.Z)(n),c=o.index,s=o.setIndex,d=o.navigate,u=z.filter((function(t){return x()(t.date).isSame(n[c].date,"day")})),f="large"===e?u:z,p=(0,P.Z)().width>=768,h=(0,C.useRef)(null),m=(0,C.useRef)(null),g=(0,N.Z)(h,m);return(0,C.useEffect)((function(){s(a)}),[a]),(0,b.jsxs)(i.Z,{name:"PaymentsHistory",mobile:600,children:["compact"===e&&(0,b.jsx)(r.Z,{title:"Payments history",elRef:h,style:{paddingBottom:0}}),(0,b.jsxs)(l.Z,{style:{padding:0},children:[(0,b.jsx)(k.Z,{height:g,children:(0,b.jsx)(M,{className:"track",variant:e,children:0!==f.length?(0,b.jsx)("div",{className:"list",children:f.map((function(t,n){return n%3===0&&(0,b.jsx)("div",{className:"column",children:f.slice(n,n+3).map((function(t){return(0,b.jsx)(v,{data:t,className:p&&"large"===e},(0,w.x0)())}))},(0,w.x0)())}))}):(0,b.jsx)(j.Z,{})})}),"large"===e&&(0,b.jsx)("div",{ref:m,style:{padding:"0 2px 2px"},children:(0,b.jsx)(y.Z,{text:n[c].long,handler:function(t){return d(t)},nextDisabled:c===a})})]})]})}}}]);
//# sourceMappingURL=9296.6bf14189.chunk.js.map