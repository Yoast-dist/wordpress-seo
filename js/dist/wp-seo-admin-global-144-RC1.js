(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[11],{450:function(o,t,a){"use strict";!function(o){function t(o,t,a){jQuery.post(ajaxurl,{action:"wpseo_set_ignore",option:o,_wpnonce:a},function(a){a&&(jQuery("#"+t).hide(),jQuery("#hidden_ignore_"+o).val("ignore"))})}function a(){o("#wp-admin-bar-root-default > li").off("mouseenter.yoastalertpopup mouseleave.yoastalertpopup"),o(".yoast-issue-added").fadeOut(200)}function s(t,a){if(o(".yoast-notification-holder").off("click",".restore").off("click",".dismiss"),void 0!==a.html){a.html&&(t.closest(".yoast-paper").html(a.html),e());var s=o("#wp-admin-bar-wpseo-menu"),n=s.find(".yoast-issue-counter");n.length||(s.find("> a:first-child").append('<div class="yoast-issue-counter"/>'),n=s.find(".yoast-issue-counter")),n.html(a.total),0===a.total?n.hide():n.show(),o("#toplevel_page_wpseo_dashboard .update-plugins").removeClass().addClass("update-plugins count-"+a.total),o("#toplevel_page_wpseo_dashboard .plugin-count").html(a.total)}}function e(){var t=o(".yoast-notification-holder");t.on("click",".dismiss",function(){var t=o(this),a=t.closest(".yoast-notification-holder");t.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),o.post(ajaxurl,{action:"yoast_dismiss_notification",notification:a.attr("id"),nonce:a.data("nonce"),data:a.data("json")},s.bind(this,a),"json")}),t.on("click",".restore",function(){var t=o(this),a=t.closest(".yoast-notification-holder");t.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),o.post(ajaxurl,{action:"yoast_restore_notification",notification:a.attr("id"),nonce:a.data("nonce"),data:a.data("json")},s.bind(this,a),"json")})}function n(o){o.is(":hidden")||(o.outerWidth()>o.parent().outerWidth()?(o.data("scrollHint").addClass("yoast-has-scroll"),o.data("scrollContainer").addClass("yoast-has-scroll")):(o.data("scrollHint").removeClass("yoast-has-scroll"),o.data("scrollContainer").removeClass("yoast-has-scroll")))}function i(){window.wpseoScrollableTables=o(".yoast-table-scrollable"),window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each(function(){var t=o(this);if(!t.data("scrollContainer")){var a=o("<div />",{class:"yoast-table-scrollable__hintwrapper",html:"<span class='yoast-table-scrollable__hint' aria-hidden='true' />"}).insertBefore(t),s=o("<div />",{class:"yoast-table-scrollable__container",html:"<div class='yoast-table-scrollable__inner' />"}).insertBefore(t);a.find(".yoast-table-scrollable__hint").text(wpseoAdminGlobalL10n.scrollable_table_hint),t.data("scrollContainer",s),t.data("scrollHint",a),t.appendTo(s.find(".yoast-table-scrollable__inner")),n(t)}})}jQuery(document).ready(function(){if(void 0!==window.wpseoConsoleNotifications&&"undefined"!=typeof console)for(var o=0;o<wpseoConsoleNotifications.length;o++)console.warn(wpseoConsoleNotifications[o])}),jQuery(document).ready(function(){jQuery(".yoast-dismissible").on("click",".yoast-notice-dismiss",function(){var o=jQuery(this).parent();return jQuery.post(ajaxurl,{action:o.attr("id").replace(/-/g,"_"),_wpnonce:o.data("nonce"),data:o.data("json")}),jQuery.post(ajaxurl,{action:"yoast_dismiss_notification",notification:o.attr("id"),nonce:o.data("nonce"),data:o.data("json")}),o.fadeTo(100,0,function(){o.slideUp(100,function(){o.remove()})}),!1}),jQuery(".yoast-help-button").on("click",function(){var o=jQuery(this),t=jQuery("#"+o.attr("aria-controls")),a=t.is(":visible");jQuery(t).slideToggle(200,function(){o.attr("aria-expanded",!a)})}),jQuery("#robotsmessage button").on("click",function(){t("search_engines_discouraged_notice","robotsmessage",jQuery(this).data("nonce"))})}),window.wpseoSetIgnore=t,window.wpseoDismissLink=function(o){return jQuery('<a href="'+o+'" type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></a>')},o(window).on("wp-window-resized orientationchange",function(){window.wpseoScrollableTables&&window.wpseoScrollableTables.length&&function(t){t.each(function(){n(o(this))})}(window.wpseoScrollableTables)}),o(window).on({"Yoast:YoastTabsMounted":function(){setTimeout(function(){i()},100)},"Yoast:YoastTabsSelected":function(){setTimeout(function(){i()},100)}}),o(document).ready(function(){o(".yoast-issue-added").on("mouseenter mouseleave",function(o){o.stopPropagation(),a()}).fadeIn(),o("#wp-admin-bar-root-default > li").on("mouseenter.yoastalertpopup mouseleave.yoastalertpopup",a),setTimeout(a,3e3),e(),function(){var o=jQuery(".wpseo-js-premium-indicator"),t=o.find("svg");if(o.hasClass("wpseo-premium-indicator--no")){var a=t.find("path"),s=o.css("backgroundColor");a.css("fill",s)}t.css("display","block"),o.css({backgroundColor:"transparent",width:"20px",height:"20px"})}(),i()})}(jQuery)}},[[450,0]]]);