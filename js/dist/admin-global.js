!function(o){var t={};function n(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return o[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=o,n.c=t,n.d=function(o,t,e){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var a in o)n.d(e,a,function(t){return o[t]}.bind(null,a));return e},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=250)}({17:function(o,t){o.exports=window.jQuery},250:function(o,t,n){"use strict";n.r(t);var e=n(17),a=n.n(e);!function(o){function t(o,t,n){const e=new FormData,s={action:"wpseo_set_ignore",option:o,_wpnonce:n};for(const[o,t]of Object.entries(s))e.append(o,t);return fetch(ajaxurl,{method:"POST",body:e}).then(n=>(n&&(a()("#"+t).hide(),a()("#hidden_ignore_"+o).val("ignore")),n))}function n(){o("#wp-admin-bar-root-default > li").off("mouseenter.yoastalertpopup mouseleave.yoastalertpopup"),o(".yoast-issue-added").fadeOut(200)}function e(t,n){if(o(".yoast-notification-holder").off("click",".restore").off("click",".dismiss"),void 0!==n.html){n.html&&(t.closest(".yoast-container").html(n.html),s());var e=o("#wp-admin-bar-wpseo-menu"),a=e.find(".yoast-issue-counter");a.length||(e.find("> a:first-child").append('<div class="yoast-issue-counter"/>'),a=e.find(".yoast-issue-counter")),a.html(n.total),0===n.total?a.hide():a.show(),o("#toplevel_page_wpseo_dashboard .update-plugins").removeClass().addClass("update-plugins count-"+n.total),o("#toplevel_page_wpseo_dashboard .plugin-count").html(n.total)}}function s(){var t=o(".yoast-notification-holder");t.on("click",".dismiss",(function(){var t=o(this),n=t.closest(".yoast-notification-holder");t.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),o.post(ajaxurl,{action:"yoast_dismiss_notification",notification:n.attr("id"),nonce:n.data("nonce"),data:t.data("json")||n.data("json")},e.bind(this,n),"json")})),t.on("click",".restore",(function(){var t=o(this),n=t.closest(".yoast-notification-holder");t.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),o.post(ajaxurl,{action:"yoast_restore_notification",notification:n.attr("id"),nonce:n.data("nonce"),data:n.data("json")},e.bind(this,n),"json")}))}function i(o){o.is(":hidden")||(o.outerWidth()>o.parent().outerWidth()?(o.data("scrollHint").addClass("yoast-has-scroll"),o.data("scrollContainer").addClass("yoast-has-scroll")):(o.data("scrollHint").removeClass("yoast-has-scroll"),o.data("scrollContainer").removeClass("yoast-has-scroll")))}function r(){window.wpseoScrollableTables=o(".yoast-table-scrollable"),window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each((function(){var t=o(this);if(!t.data("scrollContainer")){var n=o("<div />",{class:"yoast-table-scrollable__hintwrapper",html:"<span class='yoast-table-scrollable__hint' aria-hidden='true' />"}).insertBefore(t),e=o("<div />",{class:"yoast-table-scrollable__container",html:"<div class='yoast-table-scrollable__inner' />"}).insertBefore(t);n.find(".yoast-table-scrollable__hint").text(wpseoAdminGlobalL10n.scrollable_table_hint),t.data("scrollContainer",e),t.data("scrollHint",n),t.appendTo(e.find(".yoast-table-scrollable__inner")),i(t)}}))}a()(document).ready((function(){a()(".yoast-dismissible").on("click",".yoast-notice-dismiss",(function(){var o=a()(this).parent();return a.a.post(ajaxurl,{action:o.attr("id").replace(/-/g,"_"),_wpnonce:o.data("nonce"),data:o.data("json")}),a.a.post(ajaxurl,{action:"yoast_dismiss_notification",notification:o.attr("id"),nonce:o.data("nonce"),data:o.data("json")}),o.fadeTo(100,0,(function(){o.slideUp(100,(function(){o.remove()}))})),!1})),a()(".yoast-help-button").on("click",(function(){var o=a()(this),t=a()("#"+o.attr("aria-controls")),n=t.is(":visible");a()(t).slideToggle(200,(function(){o.attr("aria-expanded",!n)}))})),a()("button#robotsmessage-dismiss-button").on("click",(function(){t("search_engines_discouraged_notice","robotsmessage",a()(this).data("nonce")).then(()=>{window.location.href.includes("page=wpseo_dashboard")&&window.location.reload()})}))})),window.wpseoSetIgnore=t,window.wpseoDismissLink=function(o){return a()('<a href="'+o+'" type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></a>')},o(window).on("wp-window-resized orientationchange",(function(){window.wpseoScrollableTables&&window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each((function(){i(o(this))}))})),o(window).on({"Yoast:YoastTabsMounted":function(){setTimeout((function(){r()}),100)},"Yoast:YoastTabsSelected":function(){setTimeout((function(){r()}),100)}}),o(document).ready((function(){o(".yoast-issue-added").on("mouseenter mouseleave",(function(o){o.stopPropagation(),n()})).fadeIn(),o("#wp-admin-bar-root-default > li").on("mouseenter.yoastalertpopup mouseleave.yoastalertpopup",n),setTimeout(n,3e3),s(),function(){const o=a()(".wpseo-js-premium-indicator"),t=o.find("svg");if(o.hasClass("wpseo-premium-indicator--no")){const n=t.find("path"),e=o.css("backgroundColor");n.css("fill",e)}t.css("display","block"),o.css({backgroundColor:"transparent",width:"20px",height:"20px"})}(),r()}))}(a.a)}});