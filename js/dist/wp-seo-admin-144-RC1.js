(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[14],{2:function(e,t){e.exports=window.lodash},46:function(e,t){var a,n,o="",r=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){a=document.getElementById("a11y-speak-polite"),n=document.getElementById("a11y-speak-assertive"),null===a&&(a=r("polite")),null===n&&(n=r("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,n&&"assertive"===t?n.textContent=e:a&&(a.textContent=e)}},467:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(46)),o=a(2);!function(){function e(e){var t=!1,a="",o=[],r=["userid","name","user_description"],i=["date"],s=["title","parent_title","excerpt","excerpt_only","caption","focuskw","pt_single","pt_plural","modified","id"],c=["term404","searchphrase"],u=["term_title","term_description"],l=["category","category_description","tag","tag_description"];e.hasClass("posttype-template")?o=o.concat(c,u):e.hasClass("homepage-template")?o=o.concat(r,i,s,c,u,l):e.hasClass("taxonomy-template")?o=o.concat(r,i,s,c):e.hasClass("author-template")?o=o.concat(s,i,c,u,l):e.hasClass("date-template")?o=o.concat(r,s,c,u,l):e.hasClass("search-template")?o=o.concat(r,i,s,u,l,["term404"]):e.hasClass("error404-template")&&(o=o.concat(r,i,s,u,l,["searchphrase"])),jQuery.each(o,function(o,r){if(a=e.attr("id")+"-"+r+"-warning",-1!==e.val().search("%%"+r+"%%")){e.addClass("wpseo-variable-warning-element");var i=wpseoAdminGlobalL10n.variable_warning.replace("%s","%%"+r+"%%");jQuery("#"+a).length?jQuery("#"+a).html(i):e.after(' <div id="'+a+'" class="wpseo-variable-warning">'+i+"</div>"),(0,n.default)(wpseoAdminGlobalL10n.variable_warning.replace("%s",r),"assertive"),t=!0}else jQuery("#"+a).length&&jQuery("#"+a).remove()}),!1===t&&e.removeClass("wpseo-variable-warning-element")}function t(){jQuery("#copy-home-meta-description").on("click",function(){jQuery("#og_frontpage_desc").val(jQuery("#meta_description").val())})}function a(){var e=jQuery("#wpseo-conf");if(e.length){var t=e.attr("action").split("#")[0];e.attr("action",t+window.location.hash)}}function r(e){var t=jQuery("#noindex-author-noposts-wpseo-container");e?t.show():t.hide()}jQuery.fn._wpseoIsInViewport=function(){var e=jQuery(this).offset().top,t=e+jQuery(this).outerHeight(),a=jQuery(window).scrollTop(),n=a+jQuery(window).height();return e>a&&t<n},jQuery(window).on("hashchange",a),window.wpseoDetectWrongVariables=e,window.setWPOption=function(e,t,a,n){jQuery.post(ajaxurl,{action:"wpseo_set_option",option:e,newval:t,_wpnonce:n},function(e){e&&jQuery("#"+a).hide()})},window.wpseoCopyHomeMeta=t,window.wpseoSetTabHash=a,jQuery(document).ready(function(){var n=this;a(),jQuery("#disable-author input[type='radio']").change(function(){jQuery(this).is(":checked")&&jQuery("#author-archives-titles-metas-content").toggle("off"===jQuery(this).val())}).change();var i=jQuery("#noindex-author-wpseo-off"),s=jQuery("#noindex-author-wpseo-on");i.is(":checked")||r(!1),s.change(function(){jQuery(n).is(":checked")||r(!1)}),i.change(function(){jQuery(n).is(":checked")||r(!0)}),jQuery("#disable-date input[type='radio']").change(function(){jQuery(this).is(":checked")&&jQuery("#date-archives-titles-metas-content").toggle("off"===jQuery(this).val())}).change(),jQuery("#disable-attachment input[type='radio']").change(function(){jQuery(this).is(":checked")&&jQuery("#media_settings").toggle("off"===jQuery(this).val())}).change(),jQuery("#disable-post_format").change(function(){jQuery("#post_format-titles-metas").toggle(jQuery(this).is(":not(:checked)"))}).change(),jQuery("#breadcrumbs-enable").change(function(){jQuery("#breadcrumbsinfo").toggle(jQuery(this).is(":checked"))}).change(),jQuery("#wpseo-tabs").find("a").click(function(){jQuery("#wpseo-tabs").find("a").removeClass("nav-tab-active"),jQuery(".wpseotab").removeClass("active");var e=jQuery(this).attr("id").replace("-tab",""),t=jQuery("#"+e);t.addClass("active"),jQuery(this).addClass("nav-tab-active"),t.hasClass("nosave")?jQuery("#wpseo-submit-container").hide():jQuery("#wpseo-submit-container").show(),jQuery(window).trigger("yoast-seo-tab-change")}),jQuery("#company_or_person").change(function(){var e=jQuery(this).val();"company"===e?(jQuery("#knowledge-graph-company").show(),jQuery("#knowledge-graph-person").hide()):"person"===e?(jQuery("#knowledge-graph-company").hide(),jQuery("#knowledge-graph-person").show()):(jQuery("#knowledge-graph-company").hide(),jQuery("#knowledge-graph-person").hide())}).change(),jQuery(".template").on("input",function(){e(jQuery(this))}),jQuery(".switch-yoast-seo input").on("keydown",function(e){"keydown"===e.type&&13===e.which&&e.preventDefault()}),jQuery("body").on("click","button.toggleable-container-trigger",function(e){var t=jQuery(e.currentTarget),a=t.parent().siblings(".toggleable-container");a.toggleClass("toggleable-container-hidden"),t.attr("aria-expanded",!a.hasClass("toggleable-container-hidden")).find("span").toggleClass("dashicons-arrow-up-alt2 dashicons-arrow-down-alt2")});var c=jQuery("#opengraph"),u=jQuery("#wpseo-opengraph-settings");c.length&&u.length&&(u.toggle(c[0].checked),c.change(function(e){u.toggle(e.target.checked)})),t(),function(){var e=window.location.hash.replace("#top#","");-1!==e.search("#top")&&(e=window.location.hash.replace("#top%23","")),""!==e&&"#"!==e.charAt(0)||(e=jQuery(".wpseotab").attr("id")),jQuery("#"+e).addClass("active"),jQuery("#"+e+"-tab").addClass("nav-tab-active").click()}(),jQuery("#twitter_card_type").select2({width:"400px",language:wpseoSelect2Locale}),jQuery("#breadcrumbs select").select2({width:"400px",language:wpseoSelect2Locale}),function(){var e=jQuery("#wpseo-submit-container-float"),t=jQuery("#wpseo-submit-container-fixed");if(e.length&&t.length){jQuery(window).on("resize scroll",(0,o.debounce)(n,100)),jQuery(window).on("yoast-seo-tab-change",n);var a=jQuery(".wpseo-message");a.length&&window.setTimeout(function(){a.fadeOut()},5e3),n()}function n(){e._wpseoIsInViewport()?t.hide():t.show()}}()})}()}},[[467,0]]]);