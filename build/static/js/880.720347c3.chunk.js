/*! For license information please see 880.720347c3.chunk.js.LICENSE.txt */
(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[880],{45942:function(t,e,n){var r=n(72791),i=n(48573);function o(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=o(r),s=o(i);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var l=["innerRef"],f="undefined"!==typeof window;t.exports=function(t,e){return void 0===t&&(t=150),function(n){var r=function(r){var i,o;function h(n){var i;return(i=r.call(this,n)||this).state={winWidth:f?window.innerWidth:0},i.onResize=s.default(i.onResize.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i)),t,e),i}o=r,(i=h).prototype=Object.create(o.prototype),i.prototype.constructor=i,u(i,o);var p=h.prototype;return p.componentDidMount=function(){window.addEventListener("resize",this.onResize)},p.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.onResize.cancel()},p.onResize=function(){this.setState({winWidth:window.innerWidth})},p.render=function(){var t=this.props,e=t.innerRef,r=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,l);return a.default.createElement(n,c({ref:e},r,this.state))},h}(a.default.Component);return r.displayName="Responsive("+(n.displayName||n.name)+")",r.defaultProps={innerRef:function(){}},r}}},74165:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(71002);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),s=new _(r||[]);return o(a,"_invoke",{value:L(t,n,s)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var m={};l(m,s,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==e&&n.call(w,s)&&(m=w);var b=y.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(o,a,s,c){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,r.Z)(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=h(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,o(b,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,u,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}},31182:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(15671),i=n(43144),o=n(11752),a=n(61120),s=n(60136),c=n(29388),u=n(72791);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}var f={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},h=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];var p=["component","ellipsis","trimRight","className"];function d(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}var v={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow:function(){},text:"",trimRight:!0,winWidth:void 0},y=Object.keys(v),m=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this,t)).state={text:t.text,clamped:!1},i.units=[],i.maxLine=0,i.canvas=null,i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==t&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas),this.canvas=null}},{key:"setState",value:function(t,e){return"undefined"!==typeof t.clamped&&(this.clamped=t.clamped),(0,o.Z)((0,a.Z)(n.prototype),"setState",this).call(this,t,e)}},{key:"initCanvas",value:function(){if(!this.canvas){var t=this.canvas=document.createElement("div");t.className="LinesEllipsis-canvas ".concat(this.props.className),t.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(f).forEach((function(e){t.style[e]=f[e]})),document.body.appendChild(t)}}},{key:"copyStyleToCanvas",value:function(){var t=this,e=window.getComputedStyle(this.target);h.forEach((function(n){t.canvas.style[n]=e[n]}))}},{key:"reflow",value:function(t){var e=t.basedOn||(/^[\x00-\x7F]+$/.test(t.text)?"words":"letters");switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error("Unsupported options basedOn: ".concat(e))}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map((function(t){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("");var n=this.putEllipsis(this.calcIndexes()),r=n>-1,i={clamped:r,text:r?this.units.slice(0,n).join(""):t.text};this.setState(i,t.onReflow.bind(this,i))}},{key:"calcIndexes",value:function(){var t=[0],e=this.canvas.firstElementChild;if(!e)return t;for(var n=0,r=1,i=e.offsetTop;(e=e.nextElementSibling)&&(e.offsetTop>i&&(r++,t.push(n),i=e.offsetTop),n++,!(r>this.maxLine)););return t}},{key:"putEllipsis",value:function(t){if(t.length<=this.maxLine)return-1;var e=t[this.maxLine],n=this.units.slice(0,e),r=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map((function(t,e){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>".concat(this.props.ellipsis,"</span>");for(var i=this.canvas.lastElementChild,o=d(i,2);o&&(i.offsetTop>r||i.offsetHeight>o.offsetHeight||i.offsetTop>o.offsetTop);)this.canvas.removeChild(o),o=d(i,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var t=this,e=this.state,n=e.text,r=e.clamped,i=this.props,o=i.component,a=i.ellipsis,s=i.trimRight,c=i.className,f=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(i,p);return u.createElement(o,l({className:"LinesEllipsis ".concat(r?"LinesEllipsis--clamped":""," ").concat(c),ref:function(e){return t.target=e}},function(t,e){if(!t||"object"!==typeof t)return t;var n={};return Object.keys(t).forEach((function(r){e.indexOf(r)>-1||(n[r]=t[r])})),n}(f,y)),r&&s?n.replace(/[\s\uFEFF\xA0]+$/,""):n,u.createElement("wbr",null),r&&u.createElement("span",{className:"LinesEllipsis-ellipsis"},a))}}]),n}(u.Component);m.defaultProps=v}}]);
//# sourceMappingURL=880.720347c3.chunk.js.map