(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[16],{43:function(e,a){e.exports=window.wp.a11y},551:function(e,a,t){"use strict";var n=t(43);!function(e){function a(a){var t,o,i=e(".wrap > h1");a.length&&(t=a.map(function(e){return"<div class='"+e.type+" notice'><p>"+e.message+"</p></div>"}),i.after(t.join("")),o=wpseoNetworkAdminGlobalL10n.error_prefix,"updated"===a[0].type&&(o=wpseoNetworkAdminGlobalL10n.success_prefix),(0,n.speak)(o.replace("%s",a[0].message),"assertive"))}function t(t){var n=e(this),o=n.find("[type='submit']:focus"),i=n.serialize();return t.preventDefault(),e(".wrap > .notice").remove(),o.length||(o=e(".wpseotab.active [type='submit']")),"action"===o.attr("name")&&(i=i.replace(/action=([a-zA-Z0-9_]+)/,"action="+o.val())),e.ajax({type:"POST",url:ajaxurl,data:i}).done(function(e){e.data&&a(e.data)}).fail(function(e){var t=e.responseJSON;t&&t.data&&a(t.data)}),!1}e(document).ready(function(){var a=e("#wpseo-conf");a.length&&a.on("submit",t)})}(jQuery)}},[[551,0]]]);