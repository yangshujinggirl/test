webpackJsonp([47],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=a(4),i=n(l),o=a(1),r=n(o),c=a(70),s=n(c);i.default.render(r.default.createElement(s.default,null),document.getElementById("root"))},1:function(e,t,a){e.exports=a(3)(1)},4:function(e,t,a){e.exports=a(3)(37)},70:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),s=n(c);a(133);var u=a(2),f=u.urlUtil.getSearch("success"),m=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.downloadClick=function(){if(u.avigatorUtil.isWeixin())window.location.href=u.config.weixinDownUrl;else{var e="https://lnk0.com/4w5Qd4",t="https://www.lingtouniao.com/app/sina_mama/lingtouniao.apk";u.avigatorUtil.isIOS()?window.location.href=e:window.location.href=t}},a}return o(t,e),r(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=void 0,t=function(){e="true"==f?s.default.createElement("p",{className:"title-row"},"您已经是",s.default.createElement("span",{className:"big-size"},"领投鸟用户")):s.default.createElement("p",{className:"title-row bigest-size"},"注册成功!")};return t(),s.default.createElement("div",{className:"activity-love-container"},s.default.createElement("div",{className:"content-wrap"},s.default.createElement("div",{className:"inner-content"},s.default.createElement("div",{className:"activity-love-title"},s.default.createElement("span",{className:"title-bg"}),s.default.createElement("div",{className:"title-text"},e,s.default.createElement("p",{className:"title-row"},"扫下方二维码并关注公众号"),s.default.createElement("p",{className:"title-row"},"回复",s.default.createElement("span",{className:"biger-size"},"手机号码+告白内容")),s.default.createElement("p",{className:"title-row"},"即可获取你的",s.default.createElement("span",{className:"bigest-size"},"专属玫瑰二维码！")))),s.default.createElement("div",{className:"img-content"}),s.default.createElement("div",{className:"weixin-code"},s.default.createElement("img",{src:"../image/activity_lover/weixin-code.png",className:"icon-weixin"}),s.default.createElement("p",null,"领投鸟微信公众二维码")))),s.default.createElement("div",{className:"slogin-footer"},s.default.createElement("span",{className:"icon-slogin"}),s.default.createElement("span",{className:"slogin-text"},"实现我的梦想家")),s.default.createElement("div",{className:"top-bg"}),s.default.createElement("div",{className:"left-bg"}))}}]),t}(c.Component);t.default=m},133:function(e,t){}});