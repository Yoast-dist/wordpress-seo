(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[9],{50:function(e,t){var n,r,o="",a=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){n=document.getElementById("a11y-speak-polite"),r=document.getElementById("a11y-speak-assertive"),null===n&&(n=a("polite")),null===r&&(r=a("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,r&&"assertive"===t?r.textContent=e:n&&(n.textContent=e)}},746:function(e,t,n){"use strict";var r=a(n(50)),o=a(n(747));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}var s=yoastIndexationData;!function(e){var t=function(){var e=i(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"X-WP-Nonce":s.restApi.nonce}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=i(regeneratorRuntime.mark(function e(n,r){var o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=s.restApi.root+s.restApi.endpoints[n];case 1:if(c||!1===o||!(d<=s.amount)){e.next=13;break}return e.next=4,t(o);case 4:if(a=e.sent,"function"!=typeof l[n]){e.next=8;break}return e.next=8,l[n](a.objects);case 8:r.update(a.objects.length),d+=a.objects.length,o=a.next_url,e.next=1;break;case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),a=function(){var e=i(regeneratorRuntime.mark(function e(t){var r,o,a,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d=0,r=!0,o=!1,a=void 0,e.prev=4,i=Object.keys(s.restApi.endpoints)[Symbol.iterator]();case 6:if(r=(u=i.next()).done){e.next=13;break}return c=u.value,e.next=10,n(c,t);case 10:r=!0,e.next=6;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),o=!0,a=e.t0;case 19:e.prev=19,e.prev=20,!r&&i.return&&i.return();case 22:if(e.prev=22,!o){e.next=25;break}throw a;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[4,15,19,27],[20,,22,26]])}));return function(t){return e.apply(this,arguments)}}(),u=!1,c=!1,d=0,l={};window.yoast=window.yoast||{},window.yoast.registerIndexationAction=function(e,t){l[e]=t},e(function(){e(".yoast-open-indexation").on("click",function(){var t=window.tb_position;if(window.tb_position=function(){jQuery("#TB_window").css({marginLeft:"-"+parseInt(TB_WIDTH/2,10)+"px",width:TB_WIDTH+"px",marginTop:"-"+parseInt(TB_HEIGHT/2,10)+"px"})},tb_show(e(this).data("title"),"#TB_inline?width=600&height=175&inlineId=yoast-indexation-wrapper",!1),window.tb_position=t,!1===u){c=!1,u=!0,(0,r.default)(s.l10n.calculationInProgress);var n=new o.default(s.amount,s.ids.count,s.ids.progress);a(n).then(function(){c||(n.complete(),(0,r.default)(s.l10n.calculationCompleted),e("#yoast-indexation-warning").html("<p>"+s.message.indexingCompleted+"</p>").addClass("notice-success").removeClass("notice-warning"),e("#yoast-indexation").html(s.message.indexingCompleted),tb_remove(),u=!1)}).catch(function(t){c||(console.error(t),(0,r.default)(s.l10n.calculationFailed),e("#yoast-indexation-warning").html("<p>"+s.message.indexingFailed+"</p>").addClass("notice-error").removeClass("notice-warning"),e("#yoast-indexation").html(s.message.indexingFailed),tb_remove())})}}),e("#yoast-indexation-stop").on("click",function(){c=!0,tb_remove(),window.location.reload()}),e("#yoast-indexation-dismiss-button").on("click",function(){wpseoSetIgnore("indexation_warning","yoast-indexation-warning",jQuery(this).data("nonce"))}),e("#yoast-indexation-remind-button").on("click",function(){var e=jQuery(this).data("nonce");jQuery.post(ajaxurl,{action:"wpseo_set_indexation_remind",_wpnonce:e},function(e){e&&jQuery("#yoast-indexation-warning").hide()})})})}(jQuery)},747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=jQuery(n),this.progressbarTarget=jQuery(r).progressbar({value:0}),this.total=parseInt(t,10),this.totalProcessed=0}return r(e,[{key:"update",value:function(e){this.totalProcessed+=e;var t=this.totalProcessed*(100/this.total);this.progressbarTarget.progressbar("value",Math.round(t)),this.element.html(this.totalProcessed)}},{key:"complete",value:function(){this.progressbarTarget.progressbar("value",100)}}]),e}();t.default=o}},[[746,0]]]);