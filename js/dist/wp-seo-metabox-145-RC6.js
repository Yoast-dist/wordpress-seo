(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[5],{395:function(e,t,a){"use strict";!function(){function e(e){e&&(e.focus(),e.click())}function t(){var t=jQuery(".yoast-aria-tabs"),a=t.find("[role='tab']"),s=t.attr("aria-orientation")||"horizontal";a.attr({"aria-selected":!1,tabIndex:"-1"}),a.filter(".yoast-active-tab").removeAttr("tabindex").attr("aria-selected","true"),a.on("keydown",function(t){-1!==[32,35,36,37,38,39,40].indexOf(t.which)&&("horizontal"===s&&-1!==[38,40].indexOf(t.which)||"vertical"===s&&-1!==[37,39].indexOf(t.which)||function(t,a){var s=t.which,i=a.index(jQuery(t.target));switch(s){case 32:t.preventDefault(),e(a[i]);break;case 35:t.preventDefault(),e(a[a.length-1]);break;case 36:t.preventDefault(),e(a[0]);break;case 37:case 38:t.preventDefault(),e(a[i-1<0?a.length-1:i-1]);break;case 39:case 40:t.preventDefault(),e(a[i+1===a.length?0:i+1])}}(t,a))})}function a(){var e=jQuery("#wpseo-meta-section-addons .wpseo_tablink");if(1===e.length&&e.replaceWith("<span class='"+e[0].className+"'>"+e.text()+"</span>"),jQuery(".wpseo-metabox-tabs-div").length>0&&jQuery(".wpseo-metabox-tabs").on("click","a.wpseo_tablink",function(e){e.preventDefault(),jQuery(".wpseo-meta-section.active .wpseo-metabox-tabs li").removeClass("active"),jQuery(".wpseo-meta-section.active .wpseotab").removeClass("active");var t=jQuery(jQuery(this).attr("href"));t.addClass("active"),jQuery(this).parent("li").addClass("active"),jQuery(this).hasClass("scroll")&&jQuery("html, body").animate({scrollTop:jQuery(t).offset().top},500)}),jQuery(".wpseo-meta-section").length>0){var t=jQuery(".wpseo-meta-section-link");jQuery(".wpseo-metabox-menu li").filter(function(){return"#wpseo-meta-section-content"===jQuery(this).find(".wpseo-meta-section-link").attr("href")}).addClass("active").find("[role='tab']").addClass("yoast-active-tab"),jQuery("#wpseo-meta-section-content, .wpseo-meta-section-react").addClass("active"),t.on("click",function(e){var a=jQuery(this).attr("href"),s=jQuery(a);e.preventDefault(),jQuery(".wpseo-metabox-menu li").removeClass("active").find("[role='tab']").removeClass("yoast-active-tab"),jQuery(".wpseo-meta-section").removeClass("active"),jQuery(".wpseo-meta-section-react.active").removeClass("active"),"#wpseo-meta-section-content"===a&&jQuery(".wpseo-meta-section-react").addClass("active"),s.addClass("active"),jQuery(this).parent("li").addClass("active").find("[role='tab']").addClass("yoast-active-tab"),function(e,t){e&&(function(e){e.attr({"aria-selected":"false",tabIndex:"-1"})}(t),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"))}(this,t)})}jQuery(".wpseo-metabox-tabs").show()}window.wpseoInitTabs=a,window.wpseo_init_tabs=a,jQuery(document).ready(function(){jQuery(".wpseo-meta-section").each(function(e,t){jQuery(t).find(".wpseo-metabox-tabs li:first").addClass("active"),jQuery(t).find(".wpseotab:first").addClass("active")}),window.wpseo_init_tabs(),t()})}(jQuery)}},[[395,0]]]);