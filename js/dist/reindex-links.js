!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=242)}({103:function(e,t){var n,r,o="",i=function(e){e=e||"polite";var t=document.createElement("div");return t.id="a11y-speak-"+e,t.className="a11y-speak-region",t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}((function(){n=document.getElementById("a11y-speak-polite"),r=document.getElementById("a11y-speak-assertive"),null===n&&(n=i("polite")),null===r&&(r=i("assertive"))})),e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,r&&"assertive"===t?r.textContent=e:n&&(n.textContent=e)}},11:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},12:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},242:function(e,t,n){"use strict";n.r(t);var r=n(11),o=n.n(r),i=n(12),a=n.n(i),u=n(28),s=n.n(u),l=n(103),c=n.n(l),d=yoastReindexLinksData.data,p=!1,f=function(){function e(t){o()(this,e),this.element=s()("#wpseo_count_index_links"),this.progressbarTarget=s()("#wpseo_index_links_progressbar").progressbar({value:0}),this.total=parseInt(t,10),this.totalProcessed=0}return a()(e,[{key:"update",value:function(e){this.totalProcessed+=e;var t=this.totalProcessed*(100/this.total);this.progressbarTarget.progressbar("value",Math.round(t)),this.element.html(this.totalProcessed)}},{key:"complete",value:function(){this.progressbarTarget.progressbar("value",100)}}]),e}();function m(){p=!0,c()(d.l10n.calculationCompleted),s()("#reindexLinks").html(d.message.indexingCompleted),tb_remove()}function y(){s()("#general-tab").trigger("click"),!1===p&&s()("#openLinkIndexing").trigger("click")}s()((function(){var e=!1;s()(".yoast-js-calculate-index-links--all ").on("click",(function(){!1===e&&(function(){c()(d.l10n.calculationInProgress);var e=[];e.push(new Promise((function(e){!function e(t,n){s.a.ajax({type:"GET",url:d.restApi.root+d.restApi.endpoint,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",d.restApi.nonce)},success:function(r){var o=parseInt(r,10);if(0!==o)return t.update(o),void e(t,n);t.complete(),n()}})}(new f(d.amount),e)}))),Promise.all(e).then(m)}(),e=!0)})),s()("#noticeRunLinkIndex").on("click",y),-1!==window.location.href.indexOf("&reIndexLinks=1")&&s()(y)}))},28:function(e,t){e.exports=window.jQuery}});