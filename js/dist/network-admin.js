!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=197)}({197:function(e,t,n){"use strict";n.r(t);var r=n(73),o=n.n(r),a=n(22);!function(e){function t(t){var n,r,a=e(".wrap > h1");t.length&&(n=t.map((function(e){return"<div class='"+e.type+" notice'><p>"+e.message+"</p></div>"})),a.after(n.join("")),r=wpseoNetworkAdminGlobalL10n.error_prefix,"updated"===t[0].type&&(r=wpseoNetworkAdminGlobalL10n.success_prefix),o()(r.replace("%s",t[0].message),"assertive"))}function n(n){var r=e(this),o=r.find("[type='submit']:focus"),a=r.serialize();return n.preventDefault(),e(".wrap > .notice").remove(),o.length||(o=e(".wpseotab.active [type='submit']")),"action"===o.attr("name")&&(a=a.replace(/action=([a-zA-Z0-9_]+)/,"action="+o.val())),e.ajax({type:"POST",url:ajaxurl,data:a}).done((function(e){e.data&&t(e.data)})).fail((function(e){var n=e.responseJSON;n&&n.data&&t(n.data)})),!1}e(document).ready((function(){var t=e("#wpseo-conf");t.length&&t.on("submit",n)}))}(n.n(a).a)},22:function(e,t){e.exports=window.jQuery},73:function(e,t){var n,r,o="",a=function(e){e=e||"polite";var t=document.createElement("div");return t.id="a11y-speak-"+e,t.className="a11y-speak-region",t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}((function(){n=document.getElementById("a11y-speak-polite"),r=document.getElementById("a11y-speak-assertive"),null===n&&(n=a("polite")),null===r&&(r=a("assertive"))})),e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,r&&"assertive"===t?r.textContent=e:n&&(n.textContent=e)}}});