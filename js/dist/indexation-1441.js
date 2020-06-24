(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[9],{64:function(e,t){var n,o,i="",r=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){n=document.getElementById("a11y-speak-polite"),o=document.getElementById("a11y-speak-assertive"),null===n&&(n=r("polite")),null===o&&(o=r("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),i===e&&(e+=" "),i=e,o&&"assertive"===t?o.textContent=e:n&&(n.textContent=e)}},919:function(e,t,n){"use strict";var o=r(n(64)),i=r(n(920));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(i,r){try{var a=t[i](r),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}("next")})}}!function(e){var t=function(){var e=a(regeneratorRuntime.mark(function e(t,n){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"X-WP-Nonce":n}});case 2:return o=e.sent,e.abrupt("return",o.json());case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=a(regeneratorRuntime.mark(function e(n,o,i){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n.restApi.root+n.restApi.endpoints[o];case 1:if(c||!1===r||!(u<=n.amount)){e.next=16;break}if("function"!=typeof d[o]){e.next=5;break}return e.next=5,d[o](n);case 5:return e.next=7,t(r,n.restApi.nonce);case 7:if(a=e.sent,"function"!=typeof l[o]){e.next=11;break}return e.next=11,l[o](a.objects,n);case 11:i.update(a.objects.length),u+=a.objects.length,r=a.next_url,e.next=1;break;case 16:case"end":return e.stop()}},e,this)}));return function(t,n,o){return e.apply(this,arguments)}}(),r=function(){var e=a(regeneratorRuntime.mark(function e(t,o){var i,r,a,s,c,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=0,i=!0,r=!1,a=void 0,e.prev=4,s=Object.keys(t.restApi.endpoints)[Symbol.iterator]();case 6:if(i=(c=s.next()).done){e.next=13;break}return d=c.value,e.next=10,n(t,d,o);case 10:i=!0,e.next=6;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),r=!0,a=e.t0;case 19:e.prev=19,e.prev=20,!i&&s.return&&s.return();case 22:if(e.prev=22,!r){e.next=25;break}throw a;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[4,15,19,27],[20,,22,26]])}));return function(t,n){return e.apply(this,arguments)}}(),s=!1,c=!1,u=0,d={},l={};window.yoast=window.yoast||{},window.yoast.indexation=window.yoast.indexation||{},window.yoast.indexation.registerPreIndexationAction=function(e,t){d[e]=t},window.yoast.indexation.registerIndexationAction=function(e,t){l[e]=t},e(function(){e(".yoast-open-indexation").on("click",function(){var t=window.tb_position;if(window.tb_position=function(){jQuery("#TB_window").css({marginLeft:"-"+parseInt(TB_WIDTH/2,10)+"px",width:TB_WIDTH+"px",marginTop:"-"+parseInt(TB_HEIGHT/2,10)+"px"})},tb_show(e(this).data("title"),"#TB_inline?width=600&height=175&inlineId=yoast-indexation-wrapper",!1),window.tb_position=t,!1===s){var n=window[e(this).data("settings")];c=!1,s=!0,(0,o.default)(n.l10n.calculationInProgress,"polite");var a=new i.default(n.amount,n.ids.count,n.ids.progress);r(n,a).then(function(){c||(a.complete(),(0,o.default)(n.l10n.calculationCompleted),e("#yoast-indexation-warning").html("<p>"+n.message.indexingCompleted+"</p>").addClass("notice-success").removeClass("notice-warning"),e("#yoast-indexation").html(n.message.indexingCompleted),tb_remove(),s=!1)}).catch(function(t){c||(console.error(t),(0,o.default)(n.l10n.calculationFailed),e("#yoast-indexation-warning").html("<p>"+n.message.indexingFailed+"</p>").addClass("notice-error").removeClass("notice-warning"),e("#yoast-indexation").html(n.message.indexingFailed),tb_remove())})}}),e("#yoast-indexation-stop").on("click",function(){c=!0,tb_remove(),window.location.hash="",window.location.reload()}),e("#yoast-indexation-dismiss-button").on("click",function(){wpseoSetIgnore("indexation_warning","yoast-indexation-warning",jQuery(this).data("nonce"))}),e("#yoast-indexation-remind-button").on("click",function(){var e=jQuery(this).data("nonce");jQuery.post(ajaxurl,{action:"wpseo_set_indexation_remind",_wpnonce:e},function(e){e&&jQuery("#yoast-indexation-warning").hide()})}),window.location.hash&&window.location.hash.startsWith("#start-indexation-")&&e(".yoast-open-indexation").each(function(){window.location.hash.endsWith(e(this).data("settings"))&&e(this).click()})})}(jQuery)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=jQuery(n),this.progressbarTarget=jQuery(o).progressbar({value:0}),this.total=parseInt(t,10),this.totalProcessed=0}return o(e,[{key:"update",value:function(e){this.totalProcessed+=e;var t=this.totalProcessed*(100/this.total);this.progressbarTarget.progressbar("value",Math.round(t)),this.element.html(this.totalProcessed)}},{key:"complete",value:function(){this.progressbarTarget.progressbar("value",100)}}]),e}();t.default=i}},[[919,0]]]);