!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=227)}({10:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},11:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},111:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(10),o=n.n(r),i=n(18),s=n.n(i),a=n(19),c=n.n(a),u=n(12),p=n.n(u),f=n(97);var l=function(t){s()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=p()(e);if(n){var o=p()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c()(this,t)});function i(t,e,n,s,a){var c;return o()(this,i),(c=r.call(this,t)).name="RequestError",c.url=e,c.method=n,c.statusCode=s,c.stackTrace=a,c}return i}(n.n(f)()(Error))},12:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},13:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(10),o=n.n(r),i=n(18),s=n.n(i),a=n(19),c=n.n(a),u=n(12),p=n.n(u),f=n(97);var l=function(t){s()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=p()(e);if(n){var o=p()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c()(this,t)});function i(t,e){var n;return o()(this,i),(n=r.call(this,t)).name="ParseError",n.parseString=e,n}return i}(n.n(f)()(Error))},157:function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},158:function(t,e,n){var r=n(46);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(e,n,s){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},16:function(t,e){function n(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var s=t.apply(e,r);function a(t){n(s,o,i,a,c,"next",t)}function c(t){n(s,o,i,a,c,"throw",t)}a(void 0)}))}}},18:function(t,e,n){var r=n(46);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},19:function(t,e,n){var r=n(36),o=n(13);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},22:function(t,e){t.exports=window.jQuery},227:function(t,e,n){"use strict";n.r(e);var r,o,i,s,a,c,u,p,f,l,d=n(22),h=n.n(d),y=n(16),m=n.n(y),v=n(10),x=n.n(v),b=n(11),g=n.n(b),w=n(7),O=n.n(w),_=n(3),I=n(111),k=n(140),j=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];x()(this,t),this.settings=e,Object(_.isObject)(n)?this.preIndexingActions=Object(_.pickBy)(n,_.isFunction):this.preIndexingActions={},Object(_.isObject)(r)?this.postIndexingActions=Object(_.pickBy)(r,_.isFunction):this.postIndexingActions={}}var e,n,r,o,i;return g()(t,[{key:"index",value:(i=m()(O.a.mark((function t(e,n){var r,o,i,s,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(_.isObject)(e)){t.next=2;break}return t.abrupt("return",0);case 2:r=0,o=0,i=Object.keys(e);case 4:if(!(o<i.length)){t.next=13;break}return s=i[o],a=e[s],t.next=9,this.handleEndpoint(s,a,r,n);case 9:r=t.sent;case 10:o++,t.next=4;break;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t,this)}))),function(_x,t){return i.apply(this,arguments)})},{key:"handleEndpoint",value:(o=m()(O.a.mark((function t(e,n,r,o){var i,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=this.settings.restApi.root+n;case 1:if(!1===i){t.next=14;break}return t.next=4,this.doPreIndexingAction(e);case 4:return t.next=6,this.doIndexingRequest(i);case 6:return s=t.sent,t.next=9,this.doPostIndexingAction(e,s);case 9:r+=s.objects.length,o(r),i=!!s.next_url&&this.settings.restApi.root+s.next_url,t.next=1;break;case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r){return o.apply(this,arguments)})},{key:"doIndexingRequest",value:(r=m()(O.a.mark((function t(e){var n,r,o,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{"X-WP-Nonce":this.settings.restApi.nonce}});case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,t.prev=6,o=JSON.parse(r),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(6),new k.a("Error parsing the response to JSON.",r);case 13:if(n.ok){t.next=16;break}throw i=o.data?o.data.stackTrace:"",new I.a(o.message,e,"POST",n.status,i);case 16:return t.abrupt("return",o);case 17:case"end":return t.stop()}}),t,this,[[6,10]])}))),function(t){return r.apply(this,arguments)})},{key:"doPreIndexingAction",value:(n=m()(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.preIndexingActions[e]){t.next=3;break}return t.next=3,this.preIndexingActions[e](this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"doPostIndexingAction",value:(e=m()(O.a.mark((function t(e,n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.postIndexingActions[e]){t.next=3;break}return t.next=3,this.postIndexingActions[e](n.objects,this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();function P(t){var e=i,n=p,o=r;"import"===t&&(e=c,n=f,o=s),e.children(".yoast-import-spinner").show(),n.show(),e.closest("div").find(".yoast-import-failure").remove(),o.prop("disabled",!0)}function A(t){P("import")}function S(t){P("cleanup")}function R(t){var e=i,n=p,u=r,l=o;"import"===t&&(e=c,n=f,u=s,l=a),e.children(".yoast-import-spinner").hide(),n.hide(),e.children(".yoast-import-success-mark").show(),e.closest("div").find(".yoast-import-failure").remove(),u.prop("disabled",!1),h()("option:selected",l).remove(),h()("option[value='']",l).prop("selected",!0),l.trigger("change"),l.children("option").length<2&&(l.prop("disabled",!0),e.after(h()("<p></p>").text(window.yoastImportData.assets.no_data_msg)))}function D(){R("import")}function E(){R("cleanup")}function T(t,e){var n=i,o=p,a=r,u=window.yoastImportData.assets.cleanup_failure;"import"===e&&(n=c,o=f,a=s,u=window.yoastImportData.assets.import_failure),n.children(".yoast-import-spinner").hide(),o.hide(),a.prop("disabled",!1);var l=h()("<div>").addClass("yoast-measure yoast-import-failure").html(u.replace(/%s/g,"<strong>"+t+"</strong>"));n.after(l)}function B(t){T(t,"import")}function M(t){T(t,"cleanup")}function C(t){"WPSEO_Import_AIOSEO_V4"===a.val()&&(t.preventDefault(),new j(window.yoastImportData).index(window.yoastImportData.restApi.importing_endpoints.aioseo,A).then(D).catch(B))}function F(t){"WPSEO_Import_AIOSEO_V4"===o.val()&&(t.preventDefault(),new j(window.yoastImportData).index(window.yoastImportData.restApi.cleanup_endpoints.aioseo,S).then(E).catch(M))}function q(t){var e=t.closest("form").find("input[type=submit]");t.on("change",(function(){""!==h()(this).find("option:selected").attr("value")?e.prop("disabled",!1):e.prop("disabled",!0)}))}h()((function(){r=h()("[name='clean_external']"),o=h()("[name='clean_external_plugin']"),i=h()(r).parents("form:first"),s=h()("[name='import_external']"),a=h()("[name='import_external_plugin']"),c=h()(s).parents("form:first"),u=h()("<img>").addClass("yoast-import-spinner").attr("src",window.yoastImportData.assets.spinner).css({display:"inline-block","margin-left":"10px","vertical-align":"middle"}).hide(),f=h()("<span>").html(window.yoastImportData.assets.loading_msg_import).css({"margin-left":"5px","vertical-align":"middle"}).hide(),p=h()("<span>").html(window.yoastImportData.assets.loading_msg_cleanup).css({"margin-left":"5px","vertical-align":"middle"}).hide(),l=h()("<span>").addClass("dashicons dashicons-yes-alt yoast-import-success-mark").css({"margin-left":"10px","vertical-align":"middle",color:"green"}).hide(),a&&(q(a),a.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),o&&(q(o),o.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),c&&c.on("submit",C),i&&i.on("submit",F),h()(l).insertAfter([s,r]),h()(f).insertAfter(s),h()(p).insertAfter(r),h()(u).insertAfter([s,r])}))},3:function(t,e){t.exports=window.lodash},36:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},46:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},7:function(t,e){t.exports=window.regeneratorRuntime},97:function(t,e,n){var r=n(12),o=n(46),i=n(157),s=n(158);function a(e){var n="function"==typeof Map?new Map:void 0;return t.exports=a=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return s(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},a(e)}t.exports=a}});