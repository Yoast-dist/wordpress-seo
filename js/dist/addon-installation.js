!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=293)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,a,r=n(3);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e){return r.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 425 456.27","aria-hidden":"true"},e),o||(o=r.createElement("path",{d:"M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z"})),a||(a=r.createElement("path",{d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 010 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z",stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81})))}},11:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},13:function(e,t){e.exports=window.wp.components},2:function(e,t){e.exports=window.wp.i18n},293:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),r=n.n(a),s=n(7),l=n(2),c=n(8),i=n.n(c),d=n(36),u=n(109);const p=i.a.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`,f=e=>{const[t,n]=Object(o.useState)(!0);function a(){n(!1)}const r=Object(l.sprintf)(
/* translators: %s expands to Yoast */
Object(l.__)("%s SEO installation","wordpress-seo"),"Yoast");let c,i=Object(l.__)("the following addons","wordpress-seo");return 1===e.addons.length&&(i=e.addons[0]),1!==e.addons.length&&(c=Object(o.createElement)("ul",{className:"ul-disc"},e.addons.map((e,t)=>Object(o.createElement)("li",{key:"addon-"+t},e)))),t?Object(o.createElement)(d.a,{title:r,onRequestClose:a,icon:Object(o.createElement)(u.a,null),isDismissible:!1},Object(o.createElement)("p",null,Object(l.sprintf)(
/* translators: %s expands to Yoast SEO Premium */
Object(l.__)("Please confirm below that you would like to install %s on this site.","wordpress-seo"),i)),c,Object(o.createElement)(p,null,Object(o.createElement)(s.Button,{onClick:a,id:"close-addon-installation-dialog"},Object(l.__)("Cancel","wordpress-seo")),Object(o.createElement)(s.Button,{onClick:function(){window.location.href="admin.php?page=wpseo_licenses&action=install&nonce="+e.nonce},id:"continue-addon-installation-dialog",className:"yoast-button--primary"},Object(l.__)("Install and activate","wordpress-seo")))):null};f.propTypes={nonce:r.a.string.isRequired,addons:r.a.array},f.defaultProps={addons:[]};var m=f;const b=document.createElement("div");b.setAttribute("id","wpseo-app-element"),document.getElementById("extensions").append(b),Object(o.render)(Object(o.createElement)(m,{nonce:wpseoAddonInstallationL10n.nonce,addons:wpseoAddonInstallationL10n.addons}),b)},3:function(e,t){e.exports=window.React},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var o=n(11),a=n.n(o),r=n(0),s=n(1),l=n.n(s),c=n(13);const i="yoast yoast-gutenberg-modal",d=e=>{const{title:t,className:n,showYoastIcon:o,additionalClassName:s,...l}=e,i=o?Object(r.createElement)("span",{className:"yoast-icon"}):null;return Object(r.createElement)(c.Modal,a()({title:t,className:`${n} ${s}`,icon:i},l),e.children)};d.propTypes={title:l.a.string,className:l.a.string,showYoastIcon:l.a.bool,children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),additionalClassName:l.a.string},d.defaultProps={title:"Yoast SEO",className:i,showYoastIcon:!0,children:null,additionalClassName:""},t.a=d},7:function(e,t){e.exports=window.yoast.componentsNew},8:function(e,t){e.exports=window.yoast.styledComponents}});