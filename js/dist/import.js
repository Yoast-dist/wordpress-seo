!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=239)}({10:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},11:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n(11),o=n.n(r),s=n(10),i=n.n(s),a=n(20),u=n.n(a),c=n(21),p=n.n(c),l=n(13),f=n.n(l),d=n(96);var x=function(t){u()(s,t);var e,n,r=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=f()(e);if(n){var o=f()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p()(this,t)});function s(t,e,n,o,a){var u;return i()(this,s),(u=r.call(this,t)).name="RequestError",u.url=e,u.method=n,u.statusCode=o,u.stackTrace=a,u}return o()(s)}(n.n(d)()(Error))},13:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},14:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},15:function(t,e){function n(t,e,n,r,o,s,i){try{var a=t[s](i),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,s){var i=t.apply(e,r);function a(t){n(i,o,s,a,u,"next",t)}function u(t){n(i,o,s,a,u,"throw",t)}a(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},154:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n(11),o=n.n(r),s=n(10),i=n.n(s),a=n(20),u=n.n(a),c=n(21),p=n.n(c),l=n(13),f=n.n(l),d=n(96);var x=function(t){u()(s,t);var e,n,r=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=f()(e);if(n){var o=f()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p()(this,t)});function s(t,e){var n;return i()(this,s),(n=r.call(this,t)).name="ParseError",n.parseString=e,n}return o()(s)}(n.n(d)()(Error))},175:function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},t.exports.__esModule=!0,t.exports.default=t.exports},176:function(t,e,n){var r=n(59),o=n(177);function s(e,n,i){return o()?(t.exports=s=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=s=function(t,e,n){var o=[null];o.push.apply(o,e);var s=new(Function.bind.apply(t,o));return n&&r(s,n.prototype),s},t.exports.__esModule=!0,t.exports.default=t.exports),s.apply(null,arguments)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},177:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},20:function(t,e,n){var r=n(59);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},21:function(t,e,n){var r=n(41).default,o=n(14);t.exports=function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},239:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n.n(r),s=n(3),i=n(11),a=n.n(i),u=n(10),c=n.n(u),p=n(20),l=n.n(p),f=n(21),d=n.n(f),x=n(13),h=n.n(x),y=n(96);var m,v,w,_,b,g,O,I,j,k,P,M=function(t){l()(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=h()(e);if(n){var o=h()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d()(this,t)});function o(t){var e;return c()(this,o),(e=r.call(this,t)).name="ImportValidationError",e}return a()(o)}(n.n(y)()(Error)),R=n(15),D=n.n(R),A=n(7),S=n.n(A),E=n(4),B=n(123),T=n(154),C=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];c()(this,t),this.settings=e,Object(E.isObject)(n)?this.preIndexingActions=Object(E.pickBy)(n,E.isFunction):this.preIndexingActions={},Object(E.isObject)(r)?this.postIndexingActions=Object(E.pickBy)(r,E.isFunction):this.postIndexingActions={}}var e,n,r,o,s;return a()(t,[{key:"index",value:(s=D()(S.a.mark((function t(e,n){var r,o,s,i,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(E.isObject)(e)){t.next=2;break}return t.abrupt("return",0);case 2:r=0,o=0,s=Object.keys(e);case 4:if(!(o<s.length)){t.next=13;break}return i=s[o],a=e[i],t.next=9,this.handleEndpoint(i,a,r,n);case 9:r=t.sent;case 10:o++,t.next=4;break;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t,this)}))),function(_x,t){return s.apply(this,arguments)})},{key:"handleEndpoint",value:(o=D()(S.a.mark((function t(e,n,r,o){var s,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=this.settings.restApi.root+n;case 1:if(!1===s){t.next=14;break}return t.next=4,this.doPreIndexingAction(e);case 4:return t.next=6,this.doIndexingRequest(s);case 6:return i=t.sent,t.next=9,this.doPostIndexingAction(e,i);case 9:r+=i.objects.length,o(r),s=!!i.next_url&&this.settings.restApi.root+i.next_url,t.next=1;break;case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r){return o.apply(this,arguments)})},{key:"doIndexingRequest",value:(r=D()(S.a.mark((function t(e){var n,r,o,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{"X-WP-Nonce":this.settings.restApi.nonce}});case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,t.prev=6,o=JSON.parse(r),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(6),new T.a("Error parsing the response to JSON.",r);case 13:if(n.ok){t.next=21;break}if(s=o.data?o.data.stackTrace:"","wpseo_error_validation"!==(o.code?o.code:"")){t.next=20;break}throw new M(o.message);case 20:throw new B.a(o.message,e,"POST",n.status,s);case 21:return t.abrupt("return",o);case 22:case"end":return t.stop()}}),t,this,[[6,10]])}))),function(t){return r.apply(this,arguments)})},{key:"doPreIndexingAction",value:(n=D()(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.preIndexingActions[e]){t.next=3;break}return t.next=3,this.preIndexingActions[e](this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"doPostIndexingAction",value:(e=D()(S.a.mark((function t(e,n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.postIndexingActions[e]){t.next=3;break}return t.next=3,this.postIndexingActions[e](n.objects,this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}(),F="WPSEO_Import_AIOSEO_V4";function q(t){var e=w,n=I,r=m;"import"===t&&(e=g,n=j,r=_),e.children(".yoast-import-spinner").show(),n.show(),e.closest("div").find(".yoast-import-failure").remove(),r.prop("disabled",!0)}function N(t){q("import")}function J(t){q("cleanup")}function V(t){var e=w,n=I,r=m,s=v;"import"===t&&(e=g,n=j,r=_,s=b),e.children(".yoast-import-spinner").hide(),n.hide(),e.children(".yoast-import-success-mark").show(),e.closest("div").find(".yoast-import-failure").remove(),r.prop("disabled",!1),o()("option:selected",s).remove(),o()("option[value='']",s).prop("selected",!0),s.trigger("change"),s.children("option").length<2&&(s.prop("disabled",!0),e.after(o()("<p></p>").text(window.yoastImportData.assets.no_data_msg)))}function W(){V("import")}function Q(){V("cleanup")}function X(t,e){var n,r=w,i=I,a=m,u=window.yoastImportData.assets.cleanup_failure;"import"===e&&(r=g,i=j,a=_,u=window.yoastImportData.assets.import_failure),r.children(".yoast-import-spinner").hide(),i.hide(),a.prop("disabled",!1),n=t instanceof M?window.yoastImportData.assets.validation_failure:Object(s.sprintf)(u,"<strong>"+t+"</strong>");var c=o()("<div>").addClass("yoast-measure yoast-import-failure").html(n);r.after(c)}function z(t){X(t,"import")}function G(t){X(t,"cleanup")}function H(t){b.val()===F&&(t.preventDefault(),new C(window.yoastImportData).index(window.yoastImportData.restApi.importing_endpoints.aioseo,N).then(W).catch(z))}function K(t){v.val()===F&&(t.preventDefault(),new C(window.yoastImportData).index(window.yoastImportData.restApi.cleanup_endpoints.aioseo,J).then(Q).catch(G))}function L(t){var e,n,r,i=t.closest("form").find("input[type=submit]");t.on("change",(function(){""!==(e=o()(this).find("option:selected").attr("value"))?(i.prop("disabled",!1),t===b&&(n=Object(s.sprintf)(window.yoastImportData.assets.replacing_texts.select_header,o()(this).find("option:selected").text()),r=e===F?window.yoastImportData.assets.replacing_texts.plugins.aioseo:window.yoastImportData.assets.replacing_texts.plugins.other,n+="<ul style='list-style: disc; padding: 0 15px;'>",r.forEach((function(t){n+="<li>"+t.data_name+"<br/><i>"+t.data_note+"</i></li>"})),n+="</ul>",P.html(n))):i.prop("disabled",!0)}))}o()((function(){(m=o()("[name='clean_external']")).val(window.yoastImportData.assets.replacing_texts.cleanup_button),v=o()("[name='clean_external_plugin']"),w=o()(m).parents("form:first"),_=o()("[name='import_external']"),b=o()("[name='import_external_plugin']"),(g=o()(_).parents("form:first")).after(o()("<p></p>").html("<strong>"+window.yoastImportData.assets.note+"</strong>"+window.yoastImportData.assets.cleanup_after_import_msg)),O=o()("<img>").addClass("yoast-import-spinner").attr("src",window.yoastImportData.assets.spinner).css({display:"inline-block","margin-left":"10px","vertical-align":"middle"}).hide(),j=o()("<span>").html(window.yoastImportData.assets.loading_msg_import).css({"margin-left":"5px","vertical-align":"middle"}).hide(),I=o()("<span>").html(window.yoastImportData.assets.loading_msg_cleanup).css({"margin-left":"5px","vertical-align":"middle"}).hide(),k=o()("<span>").addClass("dashicons dashicons-yes-alt yoast-import-success-mark").css({"margin-left":"10px","vertical-align":"middle",color:"green"}).hide(),(P=o()(".yoast-import-explanation")).html(window.yoastImportData.assets.replacing_texts.import_explanation),o()(".yoast-cleanup-explanation").html(window.yoastImportData.assets.replacing_texts.cleanup_explanation),b&&(L(b),b.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),v&&(L(v),v.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),g&&g.on("submit",H),w&&w.on("submit",K),o()(k).insertAfter([_,m]),o()(j).insertAfter(_),o()(I).insertAfter(m),o()(O).insertAfter([_,m])}))},25:function(t,e){t.exports=window.jQuery},3:function(t,e){t.exports=window.wp.i18n},4:function(t,e){t.exports=window.lodash},41:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},59:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},7:function(t,e){t.exports=window.regeneratorRuntime},96:function(t,e,n){var r=n(13),o=n(59),s=n(175),i=n(176);function a(e){var n="function"==typeof Map?new Map:void 0;return t.exports=a=function(t){if(null===t||!s(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,a(e)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports}});