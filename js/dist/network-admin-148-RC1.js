(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[13],{32:function(e,t){var n,a,o="",r=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){n=document.getElementById("a11y-speak-polite"),a=document.getElementById("a11y-speak-assertive"),null===n&&(n=r("polite")),null===a&&(a=r("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,a&&"assertive"===t?a.textContent=e:n&&(n.textContent=e)}},482:function(e,t,n){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(n(32));!function(e){function t(t){var n,o,r=e(".wrap > h1");t.length&&(n=t.map(function(e){return"<div class='"+e.type+" notice'><p>"+e.message+"</p></div>"}),r.after(n.join("")),o=wpseoNetworkAdminGlobalL10n.error_prefix,"updated"===t[0].type&&(o=wpseoNetworkAdminGlobalL10n.success_prefix),(0,a.default)(o.replace("%s",t[0].message),"assertive"))}function n(n){var a=e(this),o=a.find("[type='submit']:focus"),r=a.serialize();return n.preventDefault(),e(".wrap > .notice").remove(),o.length||(o=e(".wpseotab.active [type='submit']")),"action"===o.attr("name")&&(r=r.replace(/action=([a-zA-Z0-9_]+)/,"action="+o.val())),e.ajax({type:"POST",url:ajaxurl,data:r}).done(function(e){e.data&&t(e.data)}).fail(function(e){var n=e.responseJSON;n&&n.data&&t(n.data)}),!1}e(document).ready(function(){var t=e("#wpseo-conf");t.length&&t.on("submit",n)})}(jQuery)}},[[482,0]]]);