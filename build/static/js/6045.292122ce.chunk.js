"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[6045],{28633:function(n,t,e){e.d(t,{Z:function(){return r}});var o=e(72791);function r(){return(0,o.useState)(null)}},47904:function(n,t,e){var o=e(72791);t.Z=function(n){var t=(0,o.useRef)(n);return(0,o.useEffect)((function(){t.current=n}),[n]),t}},39007:function(n,t,e){e.d(t,{Z:function(){return i}});var o=e(72791),r=e(47904);function i(n){var t=(0,r.Z)(n);return(0,o.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},73201:function(n,t,e){var o=e(72791),r=function(n){return n&&"function"!==typeof n?function(t){n.current=t}:n};t.Z=function(n,t){return(0,o.useMemo)((function(){return function(n,t){var e=r(n),o=r(t);return function(n){e&&e(n),o&&o(n)}}(n,t)}),[n,t])}},55746:function(n,t,e){e.d(t,{Z:function(){return r}});var o=e(72791);function r(){var n=(0,o.useRef)(!0),t=(0,o.useRef)((function(){return n.current}));return(0,o.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),t.current}},13808:function(n,t,e){e.d(t,{Z:function(){return r}});var o=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(n,t){return o(n.querySelectorAll(t))}},23688:function(n,t,e){function o(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==n&&void 0!==n&&this.setState(n)}function r(n){this.setState(function(t){var e=this.constructor.getDerivedStateFromProps(n,t);return null!==e&&void 0!==e?e:null}.bind(this))}function i(n,t){try{var e=this.props,o=this.state;this.props=n,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(e,o)}finally{this.props=e,this.state=o}}function u(n){var t=n.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof n.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return n;var e=null,u=null,c=null;if("function"===typeof t.componentWillMount?e="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(e="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?u="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(u="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==e||null!==u||null!==c){var a=n.displayName||n.name,l="function"===typeof n.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+a+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==e?"\n  "+e:"")+(null!==u?"\n  "+u:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof n.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var p=t.componentDidUpdate;t.componentDidUpdate=function(n,t,e){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:e;p.call(this,n,t,o)}}return n}e.r(t),e.d(t,{polyfill:function(){return u}}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},32592:function(n,t,e){e.d(t,{nm:function(){return m},Ch:function(){return s}});var o=e(87462),r=e(63366),i=e(72791),u=e(92176),c=e.n(u),a=function(){};function l(n,t){return void 0!==n[t]}function p(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function f(n){var t=function(n,t){if("object"!==typeof n||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,t||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===typeof t?t:String(t)}function s(n,t){return Object.keys(t).reduce((function(e,u){var c,a=e,l=a[p(u)],s=a[u],v=(0,r.Z)(a,[p(u),u].map(f)),h=t[u],d=function(n,t,e){var o=(0,i.useRef)(void 0!==n),r=(0,i.useState)(t),u=r[0],c=r[1],a=void 0!==n,l=o.current;return o.current=a,!a&&l&&u!==t&&c(t),[a?n:u,(0,i.useCallback)((function(n){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];e&&e.apply(void 0,[n].concat(o)),c(n)}),[e])]}(s,l,n[h]),m=d[0],y=d[1];return(0,o.Z)({},v,((c={})[u]=m,c[h]=y,c))}),n)}var v=e(94578),h=e(23688),d="/Users/jquense/src/uncontrollable/src/uncontrollable.js";function m(n,t,e){void 0===e&&(e=[]);var u,f=n.displayName||n.name||"Component",s=!!(u=n)&&("function"!==typeof u||u.prototype&&u.prototype.isReactComponent),y=Object.keys(t),g=y.map(p);!s&&e.length&&c()(!1);var S=function(u){function c(){for(var n,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];(n=u.call.apply(u,[this].concat(i))||this).handlers=Object.create(null),y.forEach((function(e){var r=t[e];n.handlers[r]=function(t){if(n.props[r]){var i;n._notifying=!0;for(var u=arguments.length,c=new Array(u>1?u-1:0),a=1;a<u;a++)c[a-1]=arguments[a];(i=n.props)[r].apply(i,[t].concat(c)),n._notifying=!1}n.unmounted||n.setState((function(n){var r,i=n.values;return{values:(0,o.Z)(Object.create(null),i,(r={},r[e]=t,r))}}))}})),e.length&&(n.attachRef=function(t){n.inner=t});var a=Object.create(null);return y.forEach((function(t){a[t]=n.props[p(t)]})),n.state={values:a,prevProps:{}},n}(0,v.Z)(c,u);var a=c.prototype;return a.shouldComponentUpdate=function(){return!this._notifying},c.getDerivedStateFromProps=function(n,t){var e=t.values,r=t.prevProps,i={values:(0,o.Z)(Object.create(null),e),prevProps:{}};return y.forEach((function(t){i.prevProps[t]=n[t],!l(n,t)&&l(r,t)&&(i.values[t]=n[p(t)])})),i},a.componentWillUnmount=function(){this.unmounted=!0},a.render=function(){var t=this,e=this.props,u=e.innerRef,c=(0,r.Z)(e,["innerRef"]);g.forEach((function(n){delete c[n]}));var a={};return y.forEach((function(n){var e=t.props[n];a[n]=void 0!==e?e:t.state.values[n]})),i.createElement(n,(0,o.Z)({},c,a,this.handlers,{ref:u||this.attachRef}))},c}(i.Component);(0,h.polyfill)(S),S.displayName="Uncontrolled("+f+")",S.propTypes=(0,o.Z)({innerRef:function(){}},function(n,t){var e={};return Object.keys(n).forEach((function(n){e[p(n)]=a})),e}(t)),e.forEach((function(n){S.prototype[n]=function(){var t;return(t=this.inner)[n].apply(t,arguments)}}));var b=S;return i.forwardRef&&((b=i.forwardRef((function(n,t){return i.createElement(S,(0,o.Z)({},n,{innerRef:t,__source:{fileName:d,lineNumber:128},__self:this}))}))).propTypes=S.propTypes),b.ControlledComponent=n,b.deferControlTo=function(n,e,r){return void 0===e&&(e={}),m(n,(0,o.Z)({},t,e),r)},b}}}]);
//# sourceMappingURL=6045.292122ce.chunk.js.map