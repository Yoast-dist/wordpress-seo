!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=219)}({10:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},101:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(10),o=n.n(r),i=n(9),s=n.n(i),a=n(18),c=n.n(a),u=n(19),f=n.n(u),p=n(11),l=n.n(p),d=n(88);var h=function(t){c()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l()(e);if(n){var o=l()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return f()(this,t)});function i(t,e,n,o,a){var c;return s()(this,i),(c=r.call(this,t)).name="RequestError",c.url=e,c.method=n,c.statusCode=o,c.stackTrace=a,c}return o()(i)}(n.n(d)()(Error))},11:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},12:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},131:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(10),o=n.n(r),i=n(9),s=n.n(i),a=n(18),c=n.n(a),u=n(19),f=n.n(u),p=n(11),l=n.n(p),d=n(88);var h=function(t){c()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l()(e);if(n){var o=l()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return f()(this,t)});function i(t,e){var n;return s()(this,i),(n=r.call(this,t)).name="ParseError",n.parseString=e,n}return o()(i)}(n.n(d)()(Error))},15:function(t,e){function n(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var s=t.apply(e,r);function a(t){n(s,o,i,a,c,"next",t)}function c(t){n(s,o,i,a,c,"throw",t)}a(void 0)}))}}},151:function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},152:function(t,e,n){var r=n(43);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(e,n,s){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},18:function(t,e,n){var r=n(43);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},19:function(t,e,n){var r=n(34),o=n(12);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},219:function(t,e,n){"use strict";n.r(e);var r,o,i,s,a,c,u=n(22),f=n.n(u),p=n(15),l=n.n(p),d=n(9),h=n.n(d),y=n(10),x=n.n(y),v=n(7),b=n.n(v),m=n(4),g=n(101),w=n(131),O=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];h()(this,t),this.settings=e,Object(m.isObject)(n)?this.preIndexingActions=Object(m.pickBy)(n,m.isFunction):this.preIndexingActions={},Object(m.isObject)(r)?this.postIndexingActions=Object(m.pickBy)(r,m.isFunction):this.postIndexingActions={}}var e,n,r,o,i;return x()(t,[{key:"index",value:(i=l()(b.a.mark((function t(e,n){var r,o,i,s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(m.isObject)(e)){t.next=2;break}return t.abrupt("return",0);case 2:r=0,o=0,i=Object.keys(e);case 4:if(!(o<i.length)){t.next=13;break}return s=i[o],a=e[s],t.next=9,this.handleEndpoint(s,a,r,n);case 9:r=t.sent;case 10:o++,t.next=4;break;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t,this)}))),function(_x,t){return i.apply(this,arguments)})},{key:"handleEndpoint",value:(o=l()(b.a.mark((function t(e,n,r,o){var i,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=this.settings.restApi.root+n;case 1:if(!1===i){t.next=14;break}return t.next=4,this.doPreIndexingAction(e);case 4:return t.next=6,this.doIndexingRequest(i);case 6:return s=t.sent,t.next=9,this.doPostIndexingAction(e,s);case 9:r+=s.objects.length,o(r),i=!!s.next_url&&this.settings.restApi.root+s.next_url,t.next=1;break;case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r){return o.apply(this,arguments)})},{key:"doIndexingRequest",value:(r=l()(b.a.mark((function t(e){var n,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{"X-WP-Nonce":this.settings.restApi.nonce}});case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,t.prev=6,o=JSON.parse(r),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(6),new w.a("Error parsing the response to JSON.",r);case 13:if(n.ok){t.next=16;break}throw i=o.data?o.data.stackTrace:"",new g.a(o.message,e,"POST",n.status,i);case 16:return t.abrupt("return",o);case 17:case"end":return t.stop()}}),t,this,[[6,10]])}))),function(t){return r.apply(this,arguments)})},{key:"doPreIndexingAction",value:(n=l()(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.preIndexingActions[e]){t.next=3;break}return t.next=3,this.preIndexingActions[e](this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"doPostIndexingAction",value:(e=l()(b.a.mark((function t(e,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.postIndexingActions[e]){t.next=3;break}return t.next=3,this.postIndexingActions[e](n.objects,this.settings);case 3:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();function _(t){s.show(),a.show(),f()(".yoast-import-failure").remove(),o.prop("disabled",!0)}function j(){s.hide(),a.hide(),c.show(),f()(".yoast-import-failure").remove(),o.prop("disabled",!1),f()("option:selected",r).remove(),f()("option[value='']",r).prop("selected",!0),r.trigger("change"),r.children("option").length<2&&(r.prop("disabled",!0),i.after(f()("<p></p>").text(window.yoastImportData.assets.no_data_msg)))}function k(t){s.hide(),a.hide(),o.prop("disabled",!1);var e=f()("<div>").addClass("yoast-measure yoast-import-failure").html(window.yoastImportData.assets.import_failure.replace(/%s/g,"<strong>"+t+"</strong>"));i.after(e)}function P(t){"WPSEO_Import_AIOSEO_V4"===r.val()&&(t.preventDefault(),new O(window.yoastImportData).index(window.yoastImportData.restApi.importing_endpoints.aioseo,_).then(j).catch(k))}f()((function(){o=f()("[name='import_external']"),i=f()(o).parents("form:first"),r=f()("[name='import_external_plugin']"),s=f()("<img>").attr("src",window.yoastImportData.assets.spinner).css({display:"inline-block","margin-left":"10px","vertical-align":"middle"}).hide(),a=f()("<span>").html(window.yoastImportData.assets.loading_msg).css({"margin-left":"5px","vertical-align":"middle"}).hide(),c=f()("<span>").addClass("dashicons dashicons-yes-alt").css({"margin-left":"10px","vertical-align":"middle",color:"green"}).hide(),r&&(r.on("change",(function(){""!==f()(this).find("option:selected").attr("value")?o.prop("disabled",!1):o.prop("disabled",!0)})),r.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),i&&i.on("submit",P),f()(s).insertAfter(o),f()(c).insertAfter(s),f()(a).insertAfter(s)}))},22:function(t,e){t.exports=window.jQuery},34:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},4:function(t,e){t.exports=window.lodash},43:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},7:function(t,e){t.exports=window.regeneratorRuntime},88:function(t,e,n){var r=n(11),o=n(43),i=n(151),s=n(152);function a(e){var n="function"==typeof Map?new Map:void 0;return t.exports=a=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return s(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},a(e)}t.exports=a},9:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}});