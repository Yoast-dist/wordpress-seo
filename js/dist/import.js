!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=231)}({103:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s extends Error{constructor(t,e,n,s,i){super(t),this.name="RequestError",this.url=e,this.method=n,this.statusCode=s,this.stackTrace=i}}},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s extends Error{constructor(t,e){super(t),this.name="ParseError",this.parseString=e}}},15:function(t,e){t.exports=window.jQuery},231:function(t,e,n){"use strict";n.r(e);var s=n(15),i=n.n(s),o=n(3);class a extends Error{constructor(t){super(t),this.name="ImportValidationError"}}var r=n(4),c=n(103),d=n(139);class p{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.settings=t,Object(r.isObject)(e)?this.preIndexingActions=Object(r.pickBy)(e,r.isFunction):this.preIndexingActions={},Object(r.isObject)(n)?this.postIndexingActions=Object(r.pickBy)(n,r.isFunction):this.postIndexingActions={}}async index(t,e){if(!Object(r.isObject)(t))return 0;let n=0;for(const s of Object.keys(t)){const i=t[s];n=await this.handleEndpoint(s,i,n,e)}return n}async handleEndpoint(t,e,n,s){let i=this.settings.restApi.root+e;for(;!1!==i;){await this.doPreIndexingAction(t);const e=await this.doIndexingRequest(i);await this.doPostIndexingAction(t,e),s(n+=e.objects.length),i=!!e.next_url&&this.settings.restApi.root+e.next_url}return n}async doIndexingRequest(t){const e=await fetch(t,{method:"POST",headers:{"X-WP-Nonce":this.settings.restApi.nonce}}),n=await e.text();let s;try{s=JSON.parse(n)}catch(t){throw new d.a("Error parsing the response to JSON.",n)}if(!e.ok){const n=s.data?s.data.stackTrace:"";throw"wpseo_error_validation"===(s.code?s.code:"")?new a(s.message):new c.a(s.message,t,"POST",e.status,n)}return s}async doPreIndexingAction(t){this.preIndexingActions[t]&&await this.preIndexingActions[t](this.settings)}async doPostIndexingAction(t,e){this.postIndexingActions[t]&&await this.postIndexingActions[t](e.objects,this.settings)}}const l="WPSEO_Import_AIOSEO_V4";let u,m,f,h,g,w,y,x,_,b,v,I;function O(t){var e=f,n=x,s=u;"import"===t&&(e=w,n=_,s=h),e.children(".yoast-import-spinner").show(),n.show(),e.closest("div").find(".yoast-import-failure").remove(),s.prop("disabled",!0)}function D(t){O("import")}function A(t){O("cleanup")}function j(t){var e=f,n=x,s=u,o=m;"import"===t&&(e=w,n=_,s=h,o=g),e.children(".yoast-import-spinner").hide(),n.hide(),e.children(".yoast-import-success-mark").show(),e.closest("div").find(".yoast-import-failure").remove(),s.prop("disabled",!1),i()("option:selected",o).remove(),i()("option[value='']",o).prop("selected",!0),o.trigger("change"),o.children("option").length<2&&(o.prop("disabled",!0),e.after(i()("<p></p>").text(window.yoastImportData.assets.no_data_msg)))}function P(){j("import")}function E(){j("cleanup")}function S(t,e){var n,s=f,r=x,c=u,d=window.yoastImportData.assets.cleanup_failure;"import"===e&&(s=w,r=_,c=h,d=window.yoastImportData.assets.import_failure),s.children(".yoast-import-spinner").hide(),r.hide(),c.prop("disabled",!1),n=t instanceof a?window.yoastImportData.assets.validation_failure:Object(o.sprintf)(d,"<strong>"+t+"</strong>");var p=i()("<div>").addClass("yoast-measure yoast-import-failure").html(n);s.after(p)}function k(t){S(t,"import")}function T(t){S(t,"cleanup")}function C(t){g.val()===l&&(t.preventDefault(),new p(window.yoastImportData).index(window.yoastImportData.restApi.importing_endpoints.aioseo,D).then(P).catch(k))}function M(t){m.val()===l&&(t.preventDefault(),new p(window.yoastImportData).index(window.yoastImportData.restApi.cleanup_endpoints.aioseo,A).then(E).catch(T))}function q(t){var e,n,s,a=t.closest("form").find("input[type=submit]");t.on("change",(function(){""!==(e=i()(this).find("option:selected").attr("value"))?(a.prop("disabled",!1),t===g&&(n=Object(o.sprintf)(window.yoastImportData.assets.replacing_texts.select_header,i()(this).find("option:selected").text()),s=e===l?window.yoastImportData.assets.replacing_texts.plugins.aioseo:window.yoastImportData.assets.replacing_texts.plugins.other,n+="<ul style='list-style: disc; padding: 0 15px;'>",s.forEach((function(t){n+="<li>"+t.data_name+"<br/><i>"+t.data_note+"</i></li>"})),n+="</ul>",I.html(n))):a.prop("disabled",!0)}))}i()((function(){u=i()("[name='clean_external']"),u.val(window.yoastImportData.assets.replacing_texts.cleanup_button),m=i()("[name='clean_external_plugin']"),f=i()(u).parents("form:first"),h=i()("[name='import_external']"),g=i()("[name='import_external_plugin']"),w=i()(h).parents("form:first"),w.after(i()("<p></p>").html("<strong>"+window.yoastImportData.assets.note+"</strong>"+window.yoastImportData.assets.cleanup_after_import_msg)),y=i()("<img>").addClass("yoast-import-spinner").attr("src",window.yoastImportData.assets.spinner).css({display:"inline-block","margin-left":"10px","vertical-align":"middle"}).hide(),_=i()("<span>").html(window.yoastImportData.assets.loading_msg_import).css({"margin-left":"5px","vertical-align":"middle"}).hide(),x=i()("<span>").html(window.yoastImportData.assets.loading_msg_cleanup).css({"margin-left":"5px","vertical-align":"middle"}).hide(),b=i()("<span>").addClass("dashicons dashicons-yes-alt yoast-import-success-mark").css({"margin-left":"10px","vertical-align":"middle",color:"green"}).hide(),I=i()(".yoast-import-explanation"),I.html(window.yoastImportData.assets.replacing_texts.import_explanation),v=i()(".yoast-cleanup-explanation"),v.html(window.yoastImportData.assets.replacing_texts.cleanup_explanation),g&&(q(g),g.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),m&&(q(m),m.append("<option value='' disabled='disabled' selected hidden>&mdash; "+window.yoastImportData.assets.select_placeholder+" &mdash;</option>").trigger("change")),w&&w.on("submit",C),f&&f.on("submit",M),i()(b).insertAfter([h,u]),i()(_).insertAfter(h),i()(x).insertAfter(u),i()(y).insertAfter([h,u])}))},3:function(t,e){t.exports=window.wp.i18n},4:function(t,e){t.exports=window.lodash}});