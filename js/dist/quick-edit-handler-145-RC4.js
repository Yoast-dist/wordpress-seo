(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[13],{437:function(t,n,i){"use strict";jQuery(function(t){var n=t(location).attr("pathname").split("/").pop(),i="edit-tags.php"===n?"slug":"post_name",e=t(".wrap").children().eq(0),o=0,a=[];function r(n){a.includes(n)||(a.push(n),t(n).insertAfter(e))}function p(){t.post(ajaxurl,{action:"yoast_get_notifications",version:2},function(t){""!==t&&(o=0,JSON.parse(t).map(r));o<20&&""===t&&(o++,setTimeout(p,500))})}function u(){var n=t("tr.inline-editor");return function(n){return t("#inline_"+n).find("."+i).html()}(function(t){return 0===t.length||""===t?"":t.attr("id").replace("edit-","")}(n))!==n.find("input[name="+i+"]").val()}["edit.php","edit-tags.php"].includes(n)&&(t("#inline-edit input").on("keydown",function(t){13===t.which&&u()&&p()}),t(".button-primary").click(function(n){"save-order"!==t(n.target).attr("id")&&u()&&p()})),"edit-tags.php"===n&&t(document).on("ajaxComplete",function(t,n,i){i.data.indexOf("action=delete-tag")>-1&&p()})}(jQuery))}},[[437,0]]]);