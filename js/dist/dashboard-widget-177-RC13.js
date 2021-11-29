!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=373)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){e.exports=window.yoast.helpers},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return w}));var r=n(0),a=n(1),o=n.n(a),s=n(2),i=n(3),c=n(92),u=n.n(c),l=n(5),p=n(10),d=n(76),f=function(){return Object(r.createElement)("p",{className:"yoast-wincher-seo-performance-modal__loading-message"},Object(s.__)("Tracking the ranking position...","wordpress-seo")," ",Object(r.createElement)(l.SvgIcon,{icon:"loading-spinner"}))},h=Object(p.makeOutboundLink)();function b(e){return Math.round(100*e)}function m(e){var t=e.chartData;if(Object(i.isEmpty)(t)||Object(i.isEmpty)(t.position))return"?";var n=function(e){return Array.from({length:e.position.history.length},(function(e,t){return t+1})).map((function(e){
/* translators: %d expands to the amount of days */
return Object(s.sprintf)(Object(s._n)("%d day","%d days",e,"wordpress-seo"),e)}))}(t),a=t.position.history.map((function(e,t){return{x:t,y:101-e.value}}));return Object(r.createElement)(d.a,{width:66,height:24,data:a,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",className:"yoast-related-keyphrases-modal__chart",mapChartDataToTableData:b,dataTableCaption:Object(s.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:n})}function y(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}function w(e){var t=e.keyphrase,n=e.rowData,a=e.onTrackKeyphrase,o=e.onUntrackKeyphrase,c=e.isFocusKeyphrase,p=e.isDisabled,d=e.isLoading,b=!Object(i.isEmpty)(n),w=Object(r.useCallback)((function(){p||(b?o(t,n.id):a(t))}),[t,a,o,b,n,p]);return Object(r.createElement)("tr",null,Object(r.createElement)("td",null,function(e){var t=e.keyphrase,n=e.isEnabled,a=e.toggleAction;return e.isLoading?Object(r.createElement)(l.SvgIcon,{icon:"loading-spinner"}):Object(r.createElement)(l.Toggle,{id:"toggle-keyphrase-tracking-".concat(t),className:"wincher-toggle",isEnabled:n,onSetToggleState:a,showToggleStateLabel:!1})}({keyphrase:t,isEnabled:b,toggleAction:w,isLoading:d})),Object(r.createElement)("td",null,t,c&&Object(r.createElement)("span",null,"*")),function(e){var t=e.rowData,n=e.websiteId,a=!Object(i.isEmpty)(t),o=t&&t.updated_at&&u()(t.updated_at)>=u()().subtract(7,"days"),c=t?Object(s.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",n,t.id):null;return a?o?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,y(t)),Object(r.createElement)("td",{className:"yoast-table--nopadding"},Object(r.createElement)(m,{chartData:t})),Object(r.createElement)("td",{className:"yoast-table--nobreak"},Object(r.createElement)(h,{href:c},Object(s.__)("View","wordpress-seo")))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(r.createElement)(f,null))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,"?"),Object(r.createElement)("td",{className:"yoast-table--nopadding"},"?"),Object(r.createElement)("td",{className:"yoast-table--nobreak"}))}(e))}m.propTypes={chartData:o.a.object},m.defaultProps={chartData:{}},w.propTypes={rowData:o.a.object,keyphrase:o.a.string.isRequired,onTrackKeyphrase:o.a.func,onUntrackKeyphrase:o.a.func,isFocusKeyphrase:o.a.bool,isDisabled:o.a.bool,isLoading:o.a.bool,websiteId:o.a.string},w.defaultProps={rowData:{},onTrackKeyphrase:function(){},onUntrackKeyphrase:function(){},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""}},110:function(e,t){e.exports=window.yoast.analysisReport},111:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n.n(a),s=n(2),i=n(30),c=n.n(i),u=n(5),l=function(e){var t=Object(s.sprintf)(
/* translators: %s expands to a link to open the Wincher login popup. */
Object(s.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"{{reconnectToWincher/}}","Wincher");return Object(r.createElement)(u.Alert,{type:"error"},c()({mixedString:t,components:{reconnectToWincher:Object(r.createElement)("a",{href:"#",onClick:e.onReconnect},Object(s.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(s.__)("reconnect to %s","wordpress-seo"),"Wincher"))}}))};l.propTypes={onReconnect:o.a.func.isRequired},t.a=l},114:function(e,t,n){"use strict";var r=n(7),a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=n(81),s=n(115),i=n(116),c="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}var l=/\/+/g;function p(e){return(""+e).replace(l,"$&/")}var d,f,h=b,b=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function m(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function y(e,t,n){var a,s,i=e.result,c=e.keyPrefix,u=e.func,l=e.context,d=u.call(l,t,e.count++);Array.isArray(d)?w(d,i,n,o.thatReturnsArgument):null!=d&&(r.isValidElement(d)&&(a=d,s=c+(!d.key||t&&t.key===d.key?"":p(d.key)+"/")+n,d=r.cloneElement(a,{key:s},void 0!==a.props?a.props.children:void 0)),i.push(d))}function w(e,t,n,r,o){var i="";null!=n&&(i=p(n)+"/");var l=m.getPooled(t,i,r,o);!function(e,t,n){null==e||function e(t,n,r,o){var i,l=typeof t;if("undefined"!==l&&"boolean"!==l||(t=null),null===t||"string"===l||"number"===l||"object"===l&&t.$$typeof===a)return r(o,t,""===n?"."+u(t,0):n),1;var p=0,d=""===n?".":n+":";if(Array.isArray(t))for(var f=0;f<t.length;f++)p+=e(i=t[f],d+u(i,f),r,o);else{var h=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(h)for(var b,m=h.call(t),y=0;!(b=m.next()).done;)p+=e(i=b.value,d+u(i,y++),r,o);else if("object"===l){var w=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(t).join(", ")+"}":w,"")}}return p}(e,"",t,n)}(e,y,l),m.release(l)}m.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,n,r){if(this.instancePool.length){var a=this.instancePool.pop();return this.call(a,e,t,n,r),a}return new this(e,t,n,r)},(f=m).instancePool=[],f.getPooled=d||h,f.poolSize||(f.poolSize=10),f.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,o.thatReturnsArgument);return t}},115:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,s,i],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},116:function(e,t,n){"use strict";var r=n(81);e.exports=r},117:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},12:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},13:function(e,t){function n(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var s=e.apply(t,r);function i(e){n(s,a,o,i,c,"next",e)}function c(e){n(s,a,o,i,c,"throw",e)}i(void 0)}))}}},14:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},15:function(e,t){e.exports=window.yoast.styledComponents},16:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},17:function(e,t,n){var r=n(69);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},18:function(e,t,n){var r=n(41),a=n(14);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},2:function(e,t){e.exports=window.wp.i18n},24:function(e,t){e.exports=window.yoast.styleGuide},29:function(e,t,n){var r=n(88),a=n(89),o=n(90);e.exports=function(e){return r(e)||a(e)||o()}},3:function(e,t){e.exports=window.lodash},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(n(7)),o=i(n(114)),s=i(n(117));function i(e){return e&&e.__esModule?e:{default:e}}var c=void 0;t.default=function(e){var t=e.mixedString,n=e.components,i=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var u=(0,s.default)(t);try{return function e(t,n){var s,i,u,l,p,d,f,h,b=[],m={};for(d=0;d<t.length;d++)if("string"!==(p=t[d]).type){if(!n.hasOwnProperty(p.value)||void 0===n[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(n[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+c);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){s=n[p.value],u=d;break}b.push(n[p.value])}else b.push(p.value);return s&&(l=function(e,t){var n,r,a=t[e],o=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===a.value){if("componentOpen"===n.type){o++;continue}if("componentClose"===n.type){if(0===o)return r;o--}}throw new Error("Missing closing component token `"+a.value+"`")}(u,t),f=e(t.slice(u+1,l),n),i=a.default.cloneElement(s,{},f),b.push(i),l<t.length-1&&(h=e(t.slice(l+1),n),b=b.concat(h))),1===b.length?b[0]:(b.forEach((function(e,t){e&&(m["interpolation-child-"+t]=e)})),(0,o.default)(m))}(u,n)}catch(e){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},31:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return E})),n.d(t,"f",(function(){return _}));var r=n(13),a=n.n(r),o=n(4),s=n.n(o),i=n(35),c=n.n(i),u=n(3);function l(_x){return p.apply(this,arguments)}function p(){return(p=a()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()(t);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!e.t0.error||!e.t0.status){e.next=10;break}return e.abrupt("return",e.t0);case 10:if(!(e.t0 instanceof Response)){e.next=14;break}return e.next=13,e.t0.json();case 13:return e.abrupt("return",e.sent);case 14:return e.abrupt("return",{status:0,error:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(e,t,n){return f.apply(this,arguments)}function f(){return(f=a()(s.a.mark((function e(t,n,r){var a,o,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>3&&void 0!==i[3]?i[3]:200,e.prev=1,e.next=4,t();case 4:if((o=e.sent).status!==a){e.next=7;break}return e.abrupt("return",n(o));case 7:return e.abrupt("return",r(o));case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function h(){return b.apply(this,arguments)}function b(){return(b=a()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({path:"yoast/v1/wincher/authorization-url",method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=a()(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.code,r=t.websiteId,e.next=3,l({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:n,websiteId:r}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=a()(s.a.mark((function e(){var t,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:null,n=r.length>1&&void 0!==r[1]?r[1]:null,e.next=4,l({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:t,permalink:n}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return j.apply(this,arguments)}function j(){return(j=a()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({path:"yoast/v1/wincher/limits",method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return k.apply(this,arguments)}function k(){return(k=a()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(u.isArray)(t)||(t=[t]),e.next=3,l({path:"yoast/v1/wincher/keyphrases/track",method:"POST",data:{keyphrases:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return x.apply(this,arguments)}function x(){return(x=a()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({path:"yoast/v1/wincher/keyphrases/untrack",method:"DELETE",data:{keyphraseID:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return T.apply(this,arguments)}function T(){return(T=a()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({path:"yoast/v1/wincher/keyphrases/track/all",method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},35:function(e,t){e.exports=window.wp.apiFetch},373:function(e,t,n){"use strict";n.r(t);var r,a,o,s=n(13),i=n.n(s),c=n(8),u=n.n(c),l=n(9),p=n.n(l),d=n(14),f=n.n(d),h=n(17),b=n.n(h),m=n(18),y=n.n(m),w=n(12),g=n.n(w),v=n(0),j=n(4),O=n.n(j),k=n(5),E=n(24),x=n(110),_=n(10),T=n(61),P=n(16),L=n.n(P),S=n(1),D=n.n(S),R=n(15),A=n.n(R),C=n(2),I=n(3),W=n(30),N=n.n(W),H=Object(_.makeOutboundLink)(),q=Object(_.makeOutboundLink)(),F=function(){var e=Object(C.sprintf)(Object(C.__)(
/* translators: %1$s expands to a link to Wincher, %2$s expands to a link to the keyphrase tracking article on Yoast.com */
"Connect %1$s with %2$s to track the ranking position of your site in the search results based on your keyphrase(s). %3$s","wordpress-seo"),"Yoast SEO","{{wincherLink/}}","{{wincherReadMoreLink/}}");return Object(v.createElement)("p",null,N()({mixedString:e,components:{wincherLink:Object(v.createElement)(H,{href:wpseoAdminGlobalL10n["links.wincher.website"]},"Wincher"),wincherReadMoreLink:Object(v.createElement)(q,{href:wpseoAdminL10n["shortlinks.wincher.seo_performance"]},Object(C.__)("Read more about keyphrase tracking with Wincher","wordpress-seo"))}}))},M=function(){return Object(v.createElement)(k.Alert,{type:"warning"},Object(C.sprintf)(
/* translators: %s: Expands to "Wincher". */
Object(C.__)("Your %s account does not contain any keyphrases for this website yet. ","wordpress-seo"),"Wincher"))},K=n(108),V=n(93),Y=n(111),$=Object(_.makeOutboundLink)(),z=Object(_.makeOutboundLink)(),B=A.a.div(r||(r=L()(["\n"]))),G=A.a.p(a||(a=L()(["\n\tfont-size: 14px;\n"]))),U=A.a.h3(o||(o=L()(["\n\tmargin: 8px 0;\n\tfont-size: 1em;\n"]))),Q=function(e){var t=e.websiteId,n=e.id;return Object(C.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",t,n)},J=function(e){var t=e.className,n=e.onConnectAction;return Object(v.createElement)(G,{className:"".concat(t,"__text")},Object(v.createElement)(F,null),Object(v.createElement)("div",{className:"yoast"},Object(v.createElement)(k.NewButton,{variant:"secondary",id:"yoast-connect-wincher-dashboard-widget",onClick:n},Object(C.sprintf)(
/* translators: %s expands to Wincher */
Object(C.__)("Connect with %s","wordpress-seo"),"Wincher"))))};J.propTypes={className:D.a.string,onConnectAction:D.a.func.isRequired},J.defaultProps={className:""};var X=function(e){var t=e.className,n=e.onTrackAllAction,r=e.limits;return Object(v.createElement)(G,{className:"".concat(t,"__text")},!Object(I.isEmpty)(r)&&Object(v.createElement)(V.a,{limit:r.limit}),Object(I.isEmpty)(r)&&Object(v.createElement)(M,null),Object(v.createElement)("div",{className:"yoast"},Object(v.createElement)(k.NewButton,{variant:"secondary",id:"yoast-wincher-dashboard-widget-track-all",onClick:n},Object(C.sprintf)(
/* translators: %s expands to Wincher */
Object(C.__)("Add your existing keyphrases to %s","wordpress-seo"),"Wincher"))))};X.propTypes={className:D.a.string,onTrackAllAction:D.a.func.isRequired,limits:D.a.object},X.defaultProps={className:"",limits:{}};var Z=function(e){var t=e.keyphrase,n=e.websiteId,r=t.id,a=t.keyword;return Object(v.createElement)("tr",{key:"trackable-keyphrase-".concat(a)},Object(v.createElement)("td",null,a),Object(v.createElement)("td",null,Object(K.c)(t)),Object(v.createElement)("td",{className:"yoast-table--nopadding"},Object(v.createElement)(K.a,{chartData:t})),Object(v.createElement)("td",{className:"yoast-table--nobreak"},Object(v.createElement)($,{href:Q({websiteId:n,id:r})},Object(C.__)("View","wordpress-seo"))))};Z.propTypes={keyphrase:D.a.object.isRequired,websiteId:D.a.string.isRequired};var ee=function(e){var t=e.isLoggedIn,n=e.data,r=e.onConnectAction;return t?Object(I.isEmpty)(n)||404!==n.status?!n||Object(I.isEmpty)(n.results)?Object(v.createElement)(X,e):null:Object(v.createElement)(Y.a,{onReconnect:r}):Object(v.createElement)(J,e)};ee.propTypes={isLoggedIn:D.a.bool.isRequired,data:D.a.object,onConnectAction:D.a.func.isRequired},ee.defaultProps={data:{}};var te=function(e){var t=e.className,n=e.websiteId,r=e.isLoggedIn,a=e.data;return Object(v.createElement)(B,{className:t},Object(v.createElement)(U,{className:"".concat(t,"__header")},Object(C.__)("Top performing keyphrases on your site","wordpress-seo")),Object(v.createElement)(ee,e),r&&a&&!Object(I.isEmpty)(a)&&!Object(I.isEmpty)(a.results)&&Object(v.createElement)(v.Fragment,null,Object(v.createElement)("table",{className:"yoast yoast-table"},Object(v.createElement)("thead",null,Object(v.createElement)("tr",null,Object(v.createElement)("th",{scope:"col",abbr:Object(C.__)("Keyphrase","wordpress-seo")},Object(C.__)("Keyphrase","wordpress-seo")),Object(v.createElement)("th",{scope:"col",abbr:Object(C.__)("Position","wordpress-seo")},Object(C.__)("Position","wordpress-seo")),Object(v.createElement)("th",{scope:"col",abbr:Object(C.__)("Position over time","wordpress-seo")},Object(C.__)("Position over time","wordpress-seo")),Object(v.createElement)("td",{className:"yoast-table--nobreak"}))),Object(v.createElement)("tbody",null,Object(I.map)(a.results,(function(e){return Object(v.createElement)(Z,{keyphrase:e,websiteId:n})})))),Object(v.createElement)("p",{style:{marginBottom:0,position:"relative"}},Object(v.createElement)(z,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(C.sprintf)(
/* translators: %s expands to Wincher */
Object(C.__)("Get more insights over at %s","wordpress-seo"),"Wincher")))))};te.propTypes={className:D.a.string,data:D.a.object.isRequired,websiteId:D.a.string.isRequired,isLoggedIn:D.a.bool.isRequired},te.defaultProps={className:"wincher-seo-performance"};var ne=te,re=n(31),ae=n(74);var oe=function(e){b()(l,e);var t,n,r,a,o,s,c=(o=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g()(o);if(s){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y()(this,e)});function l(){var e;return u()(this,l),(e=c.call(this)).state={statistics:null,feed:null,wincherData:null,wincherWebsiteId:wpseoDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:wpseoDashboardWidgetL10n.wincher_is_logged_in,wincherLimits:{},isDataFetched:!1},e.onConnect=e.onConnect.bind(f()(e)),e.getWincherData=e.getWincherData.bind(f()(e)),e.performAuthenticationRequest=e.performAuthenticationRequest.bind(f()(e)),e.onTrackAll=e.onTrackAll.bind(f()(e)),e}return p()(l,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("#wpseo-dashboard-overview-hide");t.is(":checked")&&this.fetchData(),t.on("click",(function(){e.fetchData()}))}},{key:"fetchData",value:function(){this.state.isDataFetched||(this.getStatistics(),this.getFeed(),this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}},{key:"getStatistics",value:function(){var e=this;wpseoApi.get("statistics",(function(t){var n={};t&&t.seo_scores&&(n.seoScores=t.seo_scores.map((function(e){return{value:parseInt(e.count,10),color:l.getColorFromScore(e.seo_rank),html:'<a href="'.concat(e.link,'">').concat(e.label,"</a>")}})),n.header=jQuery("<div>".concat(t.header,"</div>")).text(),e.setState({statistics:n}))}))}},{key:"getFeed",value:function(){var e=this;Object(_.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then((function(t){t.items=t.items.map((function(e){return e.description=jQuery("<div>".concat(e.description,"</div>")).text(),e.description=e.description.replace("The post ".concat(e.title," appeared first on Yoast."),"").trim(),e})),e.setState({feed:t})})).catch((function(e){return console.log(e)}))}},{key:"getWincherData",value:(a=i()(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)();case 2:200===(t=e.sent).status&&(n=Object(I.filter)(t.results,(function(e){return!Object(I.isEmpty)(e.position)})),r=Object(I.sortBy)(n,(function(e){return e.position.value})).splice(0,5),this.setState({wincherData:{results:r,status:t.status}}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"getSeoAssessment",value:function(){return null===this.state.statistics?null:Object(v.createElement)(x.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}},{key:"getYoastFeed",value:function(){return null===this.state.feed?null:Object(v.createElement)(k.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}},{key:"performAuthenticationRequest",value:(r=i()(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.a)(t);case 2:if(200===e.sent.status){e.next=5;break}return e.abrupt("return");case 5:return this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:t.websiteId.toString()}),e.next=8,this.getWincherData();case 8:(n=this.loginPopup.getPopup())&&n.close();case 10:case"end":return e.stop()}}),e,this)}))),function(_x){return r.apply(this,arguments)})},{key:"onConnect",value:(n=i()(O.a.mark((function e(){var t,n,r=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loginPopup||this.loginPopup.isClosed()){e.next=3;break}return this.loginPopup.focus(),e.abrupt("return");case 3:return e.next=5,Object(re.c)();case 5:t=e.sent,n=t.url,this.loginPopup=new ae.a(n,{success:{type:"wincher:oauth:success",callback:function(e){return r.performAuthenticationRequest(e)}},error:{type:"wincher:oauth:error",callback:function(){}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup();case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"onTrackAll",value:(t=i()(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.f)();case 2:if(400!==(t=e.sent).status){e.next=7;break}this.setState({wincherLimits:t.results}),e.next=9;break;case 7:return e.next=9,this.getWincherData();case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getWincherSEOPerformance",value:function(){if("0"!==wpseoDashboardWidgetL10n.is_wincher_active&&this.state.wincherIsLoggedIn)return Object(v.createElement)(ne,{data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,onConnectAction:this.onConnect,onTrackAllAction:this.onTrackAll,limits:this.state.wincherLimits})}},{key:"render",value:function(){var e=[this.getSeoAssessment(),this.getWincherSEOPerformance(),this.getYoastFeed()].filter((function(e){return null!==e}));return 0===e.length?null:Object(v.createElement)("div",null,e)}}],[{key:"getColorFromScore",value:function(e){return E.colors["$color_".concat(e)]||E.colors.$color_grey}}]),l}(v.Component),se=document.getElementById("yoast-seo-dashboard-widget");se&&(Object(T.setYoastComponentsL10n)(),Object(v.render)(Object(v.createElement)(oe,null),se))},4:function(e,t){e.exports=window.regeneratorRuntime},41:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},5:function(e,t){e.exports=window.yoast.componentsNew},61:function(e,t,n){"use strict";n.r(t),n.d(t,"setTextdomainL10n",(function(){return o})),n.d(t,"setYoastComponentsL10n",(function(){return s})),n.d(t,"setWordPressSeoL10n",(function(){return i}));var r=n(2),a=n(3);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",n=Object(a.get)(window,[t,e,"locale_data",e],!1);"yoast-components"===e&&(e="wordpress-seo"),!1===n?Object(r.setLocaleData)({"":{}},e):Object(r.setLocaleData)(n,e)}function s(){o("yoast-components")}function i(){o("wordpress-seo")}},69:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},7:function(e,t){e.exports=window.React},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(13),a=n.n(r),o=n(8),s=n.n(o),i=n(9),c=n.n(i),u=n(4),l=n.n(u),p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s()(this,e),this.url=t,this.origin=new URL(t).origin,this.eventHandlers=Object.assign({success:{type:"",callback:function(){}},error:{type:"",callback:function(){}}},n),this.options=Object.assign({height:570,width:340,title:""},r),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}var t;return c()(e,[{key:"createPopup",value:function(){var e=this.options,t=e.height,n=e.width,r=e.title,a=["top="+(window.top.outerHeight/2+window.top.screenY-t/2),"left="+(window.top.outerWidth/2+window.top.screenX-n/2),"width="+n,"height="+t,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,r,a.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}},{key:"messageHandler",value:(t=a()(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data,r=t.source,t.origin===this.origin&&this.popup===r){e.next=3;break}return e.abrupt("return");case 3:if(n.type!==this.eventHandlers.success.type){e.next=8;break}return this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),e.next=8,this.eventHandlers.success.callback(n);case 8:if(n.type!==this.eventHandlers.error.type){e.next=13;break}return this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),e.next=13,this.eventHandlers.error.callback(n);case 13:case"end":return e.stop()}}),e,this)}))),function(_x){return t.apply(this,arguments)})},{key:"getPopup",value:function(){return this.popup}},{key:"isClosed",value:function(){return!this.popup||this.popup.closed}},{key:"focus",value:function(){this.isClosed()||this.popup.focus()}}]),e}()},76:function(e,t,n){"use strict";var r=n(29),a=n.n(r),o=n(0),s=n(1),i=n.n(s),c=n(2),u=function(e){var t=e.data,n=e.mapChartDataToTableData,r=e.dataTableCaption,a=e.dataTableHeaderLabels,s=e.isDataTableVisuallyHidden;return t.length!==a.length?Object(o.createElement)("p",null,Object(c.__)("The number of headers and header labels don't match.","wordpress-seo")):Object(o.createElement)("div",{className:s?"screen-reader-text":null},Object(o.createElement)("table",null,Object(o.createElement)("caption",null,r),Object(o.createElement)("thead",null,Object(o.createElement)("tr",null,a.map((function(e,t){return Object(o.createElement)("th",{key:t},e)})))),Object(o.createElement)("tbody",null,Object(o.createElement)("tr",null,t.map((function(e,t){return Object(o.createElement)("td",{key:t},n(e.y))}))))))};u.propTypes={data:i.a.arrayOf(i.a.shape({x:i.a.number,y:i.a.number})).isRequired,mapChartDataToTableData:i.a.func,dataTableCaption:i.a.string.isRequired,dataTableHeaderLabels:i.a.array.isRequired,isDataTableVisuallyHidden:i.a.bool},u.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};var l=u,p=function(e){var t=e.data,n=e.width,r=e.height,s=e.fillColor,i=e.strokeColor,c=e.strokeWidth,u=e.className,p=e.mapChartDataToTableData,d=e.dataTableCaption,f=e.dataTableHeaderLabels,h=e.isDataTableVisuallyHidden,b=Math.max(1,Math.max.apply(Math,a()(t.map((function(e){return e.x}))))),m=Math.max(1,Math.max.apply(Math,a()(t.map((function(e){return e.y}))))),y=r-c,w=t.map((function(e){var t=e.x/b*n,r=y-e.y/m*y+c;return"".concat(t,",").concat(r)})).join(" "),g="0,".concat(y+c," ")+w+" ".concat(n,",").concat(y+c);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("svg",{width:n,height:r,viewBox:"0 0 ".concat(n," ").concat(r),className:u,role:"img","aria-hidden":"true",focusable:"false"},Object(o.createElement)("polygon",{fill:s,points:g}),Object(o.createElement)("polyline",{fill:"none",stroke:i,strokeWidth:c,strokeLinejoin:"round",strokeLinecap:"round",points:w})),p&&Object(o.createElement)(l,{data:t,mapChartDataToTableData:p,dataTableCaption:d,dataTableHeaderLabels:f,isDataTableVisuallyHidden:h}))};p.propTypes={data:i.a.arrayOf(i.a.shape({x:i.a.number,y:i.a.number})).isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,fillColor:i.a.string,strokeColor:i.a.string,strokeWidth:i.a.number,className:i.a.string,mapChartDataToTableData:i.a.func,dataTableCaption:i.a.string.isRequired,dataTableHeaderLabels:i.a.array.isRequired,isDataTableVisuallyHidden:i.a.bool},p.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0},t.a=p},8:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},81:function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},88:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},89:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},9:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},90:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},92:function(e,t){e.exports=window.moment},93:function(e,t,n){"use strict";var r=n(0),a=n(2),o=n(10),s=n(5),i=n(30),c=n.n(i),u=n(1),l=n.n(u),p=Object(o.makeOutboundLink)(),d=function(e){var t=Object(a.sprintf)(
/* translators: %d expands to the amount of allowed keyphrases on a free account, %s expands to a link to Wincher plans. */
Object(a.__)("You've reached the maximum amount of %d keyphrases you can add to your Wincher account. If you wish to add more keyphrases, please %s.","wordpress-seo"),e.limit,"{{updateWincherPlanLink/}}");return Object(r.createElement)(s.Alert,{type:"error"},c()({mixedString:t,components:{updateWincherPlanLink:Object(r.createElement)(p,{href:wpseoAdminGlobalL10n["links.wincher.pricing"]},Object(a.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(a.__)("upgrade your %s plan","wordpress-seo"),"Wincher"))}}))};d.propTypes={limit:l.a.number},d.defaultProps={limit:10},t.a=d}});