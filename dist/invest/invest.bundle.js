webpackJsonp([19],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(4),a=r(o),i=n(1),s=r(i),l=n(103),u=r(l);a.default.render(s.default.createElement(u.default,null),document.getElementById("root"))},1:function(t,e,n){t.exports=n(3)(1)},4:function(t,e,n){t.exports=n(3)(37)},5:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),u=r(l);n(11);var c=n(2),f=function(t){function e(t){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),s(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var t=this,e=void 0,n=function(){if("1"==t.props.type){var n="alert-type1 "+(t.props.show?"show":"hide");e=u.default.createElement("div",{className:n,key:t.props.text},t.props.text)}else if("2"==t.props.type){var r="cover "+(t.props.show?"show":"hide"),o="alert-type2 "+(t.props.show?"show":"hide"),a="alert-button "+(t.props.btn1Css||"button1"),i="alert-button "+(t.props.btn2Css||"button2"),s=void 0,l=function(){s=c.strUtil.isEmpty(t.props.btn2Text)?u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(t.props.title)?"":"no-title")},u.default.createElement("button",{className:a,onClick:t.props.btn1Click},t.props.btn1Text)):u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(t.props.title)?"":"no-title")},u.default.createElement("button",{className:a,onClick:t.props.btn1Click},t.props.btn1Text),u.default.createElement("button",{className:i,onClick:t.props.btn2Click},t.props.btn2Text))};l();var f=void 0,p=function(){f=c.strUtil.isEmpty(t.props.title)?u.default.createElement("div",null):u.default.createElement("div",{className:"title"},t.props.title)};p(),e=u.default.createElement("div",null,u.default.createElement("div",{className:r}),u.default.createElement("div",{className:o},f,t.props.children,s))}else if("3"==t.props.type){var d="cover "+(t.props.show?"show":"hide"),m="alert-type3 "+(t.props.show?"show":"hide"),v="alert-button "+(t.props.btn1Css||"button1"),h="alert-button "+(t.props.btn2Css||"button2"),b=void 0,y=function(){b=c.strUtil.isEmpty(t.props.btn2Text)?u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(t.props.title)?"":"no-title")},u.default.createElement("button",{className:v,onClick:t.props.btn1Click},t.props.btn1Text)):u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(t.props.title)?"":"no-title")},u.default.createElement("button",{className:v,onClick:t.props.btn1Click},t.props.btn1Text),u.default.createElement("button",{className:h,onClick:t.props.btn2Click},t.props.btn2Text))};y();var _=void 0,w=function(){_=c.strUtil.isEmpty(t.props.title)?u.default.createElement("div",null):u.default.createElement("div",{className:"title"},t.props.title)};w(),e=u.default.createElement("div",null,u.default.createElement("div",{className:d}),u.default.createElement("div",{className:m},_,t.props.children,b))}};return n(),u.default.createElement("div",null,e)}}]),e}(l.Component);f.defaultProps={type:"1"},e.default=f,f.propTypes={type:u.default.PropTypes.string,show:u.default.PropTypes.bool.isRequired,text:u.default.PropTypes.string,title:u.default.PropTypes.string,content1:u.default.PropTypes.string,content2:u.default.PropTypes.string,btn1Text:u.default.PropTypes.string,btn2Text:u.default.PropTypes.string,btn1Css:u.default.PropTypes.string,btn2Css:u.default.PropTypes.string,btn1Click:u.default.PropTypes.func,btn2Click:u.default.PropTypes.func}},6:function(t,e,n){(function(e,r){!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function a(t){G=t}function i(t){z=t}function s(){return function(){return e.nextTick(p)}}function l(){return function(){Z(p)}}function u(){var t=0,e=new $(p),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function c(){var t=new MessageChannel;return t.port1.onmessage=p,function(){return t.port2.postMessage(0)}}function f(){var t=setTimeout;return function(){return t(p,1)}}function p(){for(var t=0;t<W;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}W=0}function d(){try{var t=n(9);return Z=t.runOnLoop||t.runOnContext,l()}catch(t){return f()}}function m(t,e){var n=arguments,r=this,o=new this.constructor(h);void 0===o[ot]&&A(o);var a=r._state;return a?!function(){var t=n[a-1];z(function(){return D(a,o,t,r._result)})}():S(r,o,t,e),o}function v(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h);return T(n,t),n}function h(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function y(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(t){return lt.error=t,lt}}function w(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function g(t,e,n){z(function(t){var r=!1,o=w(n,e,function(n){r||(r=!0,e!==n?T(t,n):O(t,n))},function(e){r||(r=!0,P(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,P(t,o))},t)}function E(t,e){e._state===it?O(t,e._result):e._state===st?P(t,e._result):S(e,void 0,function(e){return T(t,e)},function(e){return P(t,e)})}function C(t,e,n){e.constructor===t.constructor&&n===m&&e.constructor.resolve===v?E(t,e):n===lt?P(t,lt.error):void 0===n?O(t,e):o(n)?g(t,e,n):O(t,e)}function T(e,n){e===n?P(e,b()):t(n)?C(e,n,_(n)):O(e,n)}function N(t){t._onerror&&t._onerror(t._result),U(t)}function O(t,e){t._state===at&&(t._result=e,t._state=it,0!==t._subscribers.length&&z(U,t))}function P(t,e){t._state===at&&(t._state=st,t._result=e,z(N,t))}function S(t,e,n,r){var o=t._subscribers,a=o.length;t._onerror=null,o[a]=e,o[a+it]=n,o[a+st]=r,0===a&&t._state&&z(U,t)}function U(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,a=t._result,i=0;i<e.length;i+=3)r=e[i],o=e[i+n],r?D(n,r,o,a):o(a);t._subscribers.length=0}}function k(){this.error=null}function j(t,e){try{return t(e)}catch(t){return ut.error=t,ut}}function D(t,e,n,r){var a=o(n),i=void 0,s=void 0,l=void 0,u=void 0;if(a){if(i=j(n,r),i===ut?(u=!0,s=i.error,i=null):l=!0,e===i)return void P(e,y())}else i=r,l=!0;e._state!==at||(a&&l?T(e,i):u?P(e,s):t===it?O(e,i):t===st&&P(e,i))}function x(t,e){try{e(function(e){T(t,e)},function(e){P(t,e)})}catch(e){P(t,e)}}function M(){return ct++}function A(t){t[ot]=ct++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(h),this.promise[ot]||A(this.promise),Y(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&O(this.promise,this._result))):P(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function R(t){return new I(this,t).promise}function B(t){var e=this;return new e(Y(t)?function(n,r){for(var o=t.length,a=0;a<o;a++)e.resolve(t[a]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function L(t){var e=this,n=new e(h);return P(n,t),n}function Q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function X(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function J(t){this[ot]=M(),this._result=this._state=void 0,this._subscribers=[],h!==t&&("function"!=typeof t&&Q(),this instanceof J?x(this,t):X())}function q(){var t=void 0;if("undefined"!=typeof r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=J}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y=K,W=0,Z=void 0,G=void 0,z=function(t,e){nt[W]=t,nt[W+1]=e,W+=2,2===W&&(G?G(p):rt())},H="undefined"!=typeof window?window:void 0,V=H||{},$=V.MutationObserver||V.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),rt=void 0;rt=tt?s():$?u():et?c():void 0===H?d():f();var ot=Math.random().toString(36).substring(16),at=void 0,it=1,st=2,lt=new k,ut=new k,ct=0;return I.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===at&&n<t;n++)this._eachEntry(e[n],n)},I.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===v){var o=_(t);if(o===m&&t._state!==at)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===J){var a=new n(h);C(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},I.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===at&&(this._remaining--,t===st?P(r,n):this._result[e]=n),0===this._remaining&&O(r,this._result)},I.prototype._willSettleAt=function(t,e){var n=this;S(t,void 0,function(t){return n._settledAt(it,e,t)},function(t){return n._settledAt(st,e,t)})},J.all=R,J.race=B,J.resolve=v,J.reject=L,J._setScheduler=a,J._setAsap=i,J._asap=z,J.prototype={constructor:J,then:m,catch:function(t){return this.then(null,t)}},q(),J.polyfill=q,J.Promise=J,J})}).call(e,n(8),function(){return this}())},7:function(t,e,n){t.exports=n(3)(186)},8:function(t,e,n){t.exports=n(3)(3)},9:function(t,e){},10:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),u=r(l);n(12);var c=(n(2),function(t){function e(t){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),s(e,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(t){return this.props.loading!==t.loading}},{key:"render",value:function(){var t=this,e=void 0,n=function(){e=t.props.loading?u.default.createElement("div",{className:"wrap-loading"},u.default.createElement("div",{className:"loadings"},u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}))):u.default.createElement("div",null)};return n(),u.default.createElement("div",null,e)}}]),e}(l.Component));e.default=c,c.propTypes={loading:u.default.PropTypes.bool.isRequired}},11:function(t,e){},12:function(t,e){},13:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(1),c=r(u);n(14);var f=n(2),p=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.btnClick=function(){n.setState({btnClass:"btn-clicked"}),setTimeout(function(){n.setState({btnClass:""})},500),f.strUtil.isEmpty(n.props.btnClick)||n.props.btnClick()},n.state={btnClass:""},n}return i(e,t),l(e,[{key:"render",value:function(){var t=this,e=function(){var e="btn "+t.props.type+" "+t.state.btnClass+" "+t.props.btnCss,n="btn disabled "+t.state.btnClass+" "+t.props.btnCss;return"disabled"==t.props.type?c.default.createElement("button",{className:n,disabled:!0},t.props.btnText):c.default.createElement("button",s({},t.props,{className:e,onClick:t.btnClick}),t.props.btnText)},n=e();return c.default.createElement("div",{className:this.props.parentCss},n)}}]),e}(u.Component);p.defaultProps={type:"solid"},e.default=p,p.propTypes={btnCss:c.default.PropTypes.string,type:c.default.PropTypes.string,btnText:c.default.PropTypes.string,parentCss:c.default.PropTypes.string}},14:function(t,e){},16:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),u=r(l);n(17);var c=n(5),f=r(c),p=n(2),d=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.btnClick=function(){var t=n.props.url?n.props.url:window.location.href;p.bussinessUtil.goLogin(t)},n}return i(e,t),s(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return u.default.createElement(f.default,{type:"2",show:this.props.show,title:"登录超时",btn1Text:"确定",btn1Click:this.btnClick,btn1Css:"loginOver-btn"},u.default.createElement("p",{className:"loginOver-alert-content"},"您已长时间没有操作，为确保安全，请重新登录。"))}}]),e}(l.Component);d.defaultProps={},e.default=d,d.propTypes={show:u.default.PropTypes.bool}},17:function(t,e){},45:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),u=r(l);n(53);var c=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.toggleSwitch=function(){"default-off"==n.props.switchState||"off"==n.props.switchState?n.props.updateSwitch("on"):n.props.updateSwitch("off")},n}return i(e,t),s(e,[{key:"render",value:function(){return u.default.createElement("span",{className:"swiper "+this.props.switchState,onClick:this.toggleSwitch},u.default.createElement("span",{className:"ball"}),u.default.createElement("span",{className:"slide slideColor"}))}}]),e}(l.Component);c.defaultProps={switchState:"default-off"},e.default=c,c.propTypes={switchState:u.default.PropTypes.string.isRequired}},53:function(t,e){},103:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),u=r(l);n(163);var c=n(5),f=r(c),p=n(10),d=r(p),m=n(13),v=r(m),h=n(16),b=r(h),y=n(45),_=r(y);n(6),n(7);var w=n(2),g=w.bussinessUtil.getPageInfo(),E=w.bussinessUtil.getSessionKey(),C=void 0,T=void 0,N=w.bussinessUtil.isTZ(),O=!1,P=g.userOrderMoney,S=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.initCoupon=function(){if(g.coupons.length>0){T=w.strUtil.formatData(g.coupons),C=w.strUtil.formatData(g.coupons[0]);var t=void 0;"FXQ"==w.strUtil.formatData(C.couponTypeDes)?t=g.revenue+"+"+C.amount:"JXQ"==w.strUtil.formatData(C.couponTypeDes)&&(t=w.strUtil.formatData(g.revenue)+"+"+w.strUtil.toFixed(parseFloat(w.strUtil.formatData(C.amount))/100*parseFloat(w.strUtil.formatData(g.revenue)),2)),n.setState({revenue:t})}},n.selectCoupon=function(){n.setState({couponIsShow:!0})},n.closeCoupon=function(){n.setState({couponIsShow:!1})},n.couponClick=function(t){C=T[t];var e=void 0;"FXQ"==C.couponTypeDes?e=w.strUtil.formatData(g.revenue)+"+"+w.strUtil.formatData(C.amount):"JXQ"==w.strUtil.formatData(C.couponTypeDes)&&(e=w.strUtil.formatData(g.revenue)+"+"+w.strUtil.toFixed(parseFloat(w.strUtil.formatData(C.amount))/100*parseFloat(w.strUtil.formatData(g.revenue)),2)),n.setState({couponIndex:t,couponIsShow:!1,revenue:e,selectActive:!0})},n.updateSwitch=function(t){"on"==t?(O=!0,P=parseFloat(w.strUtil.formatData(g.userOrderMoney))-parseFloat(w.strUtil.formatData(g.birdCoin))):(O=!1,P=w.strUtil.formatData(g.userOrderMoney)),n.setState({switchState:t,payMoney:P})},n.updateText=function(t,e){n.setState({alertText:t,alertShow:e}),e&&setTimeout(function(){n.setState({alertShow:!1})},w.config.alertTime)},n.selectCouponSelect=function(){var t=void 0;n.state.selectActive?t=g.revenue:"FXQ"==w.strUtil.formatData(C.couponTypeDes)?t=g.revenue+"+"+C.amount:"JXQ"==w.strUtil.formatData(C.couponTypeDes)&&(t=w.strUtil.formatData(g.revenue)+"+"+w.strUtil.toFixed(parseFloat(w.strUtil.formatData(C.amount))/100*parseFloat(w.strUtil.formatData(g.revenue)),2)),n.setState({revenue:t,selectActive:!n.state.selectActive,couponIndex:-1})},n.savePageInfo=function(){g.isBirdCoin=O,n.state.selectActive?g.couponSel=C:g.couponSel="",g.money=P,g.revenue2=n.state.revenue,w.bussinessUtil.setPageInfo(g)},n.btnClick=function(){if(N)n.savePageInfo(),window.location.href="../confirm_invest/confirm_invest.html";else{var t="/user/agreement",e="sessionKey="+E+"&agreement_type=ZTBB0G00&unbind=0",r=function(t){n.savePageInfo();var e=w.bussinessUtil.getMobile(),r={index:"1",name:"mobile",value:e};w.bigDataUtil.setBigDataNeedParam(r),w.bigDataUtil.setBigDataUserId(e),w.bigDataUtil.setBigDataEvent(w.config.bigDataEvent.invest),w.bussinessUtil.setCurrentPage("/native/confirm_invest/confirm_invest.html"),window.location.href=t.data.url},o=function(t){if(n.setState({isLoading:!1}),t.resultCode==w.config.loginTimeOver)n.setState({loginShow:!0});else{var e=w.dataUtil.getMessage(t.resultCode);n.updateText(e,!0)}},a=function(t){n.setState({isLoading:!1}),n.updateText(t,!0)};w.dataUtil.getData(t,"POST",e,r,o,a)}},n.state={alertText:"",alertShow:!1,isLoading:!1,loginShow:!1,switchState:"default-off",couponIndex:0,selectActive:!0,revenue:w.strUtil.formatData(g.revenue),couponIsShow:!1,payMoney:w.strUtil.formatData(g.userOrderMoney)},n}return i(e,t),s(e,[{key:"componentDidMount",value:function(){w.bussinessUtil.configScreen()}},{key:"componentWillMount",value:function(){this.initCoupon()}},{key:"render",value:function(){var t=this,e=void 0,n=function(){if(0==g.coupons.length)e=u.default.createElement("div",null);else{var n=[],r=function(){g.coupons.map(function(e,r){n.push(u.default.createElement("li",{className:"ite",key:r,onClick:t.couponClick.bind(t,r)},u.default.createElement("div",{className:"contant"},u.default.createElement("div",{className:"detail"},u.default.createElement("p",{className:"t1"},w.strUtil.formatData(e.couponName)),u.default.createElement("p",{className:"t2"},"有效期：",w.strUtil.formatData(e.couponDate))),u.default.createElement("p",{className:"desc"},w.strUtil.formatData(e.desc)),u.default.createElement("span",{className:"yesIcon "+(r==t.state.couponIndex?"active":"")}))))})};r(),e=u.default.createElement("div",null,u.default.createElement("div",{className:"security"},u.default.createElement("div",{className:"change"},u.default.createElement("div",{className:"t1"},u.default.createElement("span",{className:"securityIcon"}),"选择理财金券"),u.default.createElement("div",{className:"t2",onClick:t.selectCoupon},"选择其他代金券")),u.default.createElement("div",{className:"contant",onClick:t.selectCouponSelect},u.default.createElement("div",{className:"detail"},u.default.createElement("p",{className:"t1"},w.strUtil.formatData(C.couponName)),u.default.createElement("p",{className:"t2"},"有效期：",C.couponDate)),u.default.createElement("p",{className:"desc"},w.strUtil.formatData(C.desc)),u.default.createElement("span",{className:"yesIcon "+(t.state.selectActive?"active":"")}))),u.default.createElement("div",{className:"alert "+(t.state.couponIsShow?"show":"hide")},u.default.createElement("h1",{className:"title"},"选择返现券",u.default.createElement("span",{className:"close",onClick:t.closeCoupon})),u.default.createElement("ul",{className:"tickitList"},n)),u.default.createElement("div",{className:"cover "+(t.state.couponIsShow?"show":"hide")}))}};n();var r=void 0,o=function(){r=0==g.birdCoin?u.default.createElement("div",null):u.default.createElement("li",{className:"item"},u.default.createElement("div",{className:"t1"},u.default.createElement("p",null,"鸟币抵扣",u.default.createElement("span",{className:"num"},w.strUtil.formatData(g.birdCoin),"鸟币抵扣",w.strUtil.formatData(g.birdCoin),"元"))),u.default.createElement("div",{className:"t2"},u.default.createElement(_.default,{updateSwitch:t.updateSwitch,switchState:t.state.switchState})))};return o(),u.default.createElement("div",{className:"Container"},u.default.createElement("div",{className:"buyMoney"},u.default.createElement("p",{className:"t1"},"购买金额"),u.default.createElement("p",{className:"t2"},w.strUtil.formatData(g.userOrderMoney),"元")),u.default.createElement("p",{className:"gettime"},"到期日期：",w.strUtil.formatData(g.productExpireDate)),e,u.default.createElement("ul",{className:"list"},u.default.createElement("li",{className:"item"},u.default.createElement("div",{className:"t1 pay"},"待收收益"),u.default.createElement("div",{className:"t2 num"},this.state.revenue,"元")),r,u.default.createElement("li",{className:"item"},u.default.createElement("div",{className:"t1 pay"},"实际支付"),u.default.createElement("div",{className:"t2 payMoney"},this.state.payMoney,"元"))),u.default.createElement(b.default,{type:"2",show:this.state.loginShow}),u.default.createElement(d.default,{loading:this.state.isLoading}),u.default.createElement(f.default,{text:this.state.alertText,show:this.state.alertShow}),u.default.createElement(v.default,{btnCss:"sure",btnText:"确认购买",parentCss:"parent",btnClick:this.btnClick}))}}]),e}(l.Component);e.default=S},163:function(t,e){}});