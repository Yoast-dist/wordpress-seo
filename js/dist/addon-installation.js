!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=230)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.React},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r,a=n(1);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 425 456.27","aria-hidden":"true"},e),o||(o=a.createElement("path",{d:"M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z"})),r||(r=a.createElement("path",{d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 010 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z",stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81})))}},18:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports},2:function(e,t){e.exports=window.yoast.propTypes},23:function(e,t){e.exports=window.wp.components},230:function(e,t,n){"use strict";n.r(t);var o,r=n(0),a=n(27),s=n.n(a),l=n(18),i=n.n(l),c=n(2),u=n.n(c),p=n(5),d=n(3),f=n(7),x=n.n(f),b=n(62),m=n(122),y=x.a.div(o||(o=i()(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgap: 8px;\n"]))),w=function(e){var t=Object(r.useState)(!0),n=s()(t,2),o=n[0],a=n[1];function l(){a(!1)}var i,c=Object(d.sprintf)(
/* translators: %s expands to Yoast */
Object(d.__)("%s SEO installation","wordpress-seo"),"Yoast"),u=Object(d.__)("the following addons","wordpress-seo");return 1===e.addons.length&&(u=e.addons[0]),1!==e.addons.length&&(i=Object(r.createElement)("ul",{className:"ul-disc"},e.addons.map((function(e,t){return Object(r.createElement)("li",{key:"addon-"+t},e)})))),o?Object(r.createElement)(b.a,{title:c,onRequestClose:l,icon:Object(r.createElement)(m.a,null),isDismissible:!1},Object(r.createElement)("p",null,Object(d.sprintf)(
/* translators: %s expands to Yoast SEO Premium */
Object(d.__)("Please confirm below that you would like to install %s on this site.","wordpress-seo"),u)),i,Object(r.createElement)(y,null,Object(r.createElement)(p.Button,{onClick:l,id:"close-addon-installation-dialog"},Object(d.__)("Cancel","wordpress-seo")),Object(r.createElement)(p.Button,{onClick:function(){window.location.href="admin.php?page=wpseo_licenses&action=install&nonce="+e.nonce},id:"continue-addon-installation-dialog",className:"yoast-button--primary"},Object(d.__)("Install and activate","wordpress-seo")))):null};w.propTypes={nonce:u.a.string.isRequired,addons:u.a.array},w.defaultProps={addons:[]};var O=w,v=document.createElement("div");v.setAttribute("id","wpseo-app-element"),document.getElementById("extensions").append(v),Object(r.render)(Object(r.createElement)(O,{nonce:wpseoAddonInstallationL10n.nonce,addons:wpseoAddonInstallationL10n.addons}),v)},26:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},27:function(e,t,n){var o=n(68),r=n(69),a=n(50),s=n(70);e.exports=function(e,t){return o(e)||r(e,t)||a(e,t)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},3:function(e,t){e.exports=window.wp.i18n},40:function(e,t,n){var o=n(93);e.exports=function(e,t){if(null==e)return{};var n,r,a=o(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},48:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.__esModule=!0,e.exports.default=e.exports},5:function(e,t){e.exports=window.yoast.componentsNew},50:function(e,t,n){var o=n(48);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var o=n(26),r=n.n(o),a=n(40),s=n.n(a),l=n(0),i=n(2),c=n.n(i),u=n(23),p=["title","className","showYoastIcon","additionalClassName"],d="yoast yoast-gutenberg-modal",f=function(e){var t=e.title,n=e.className,o=e.showYoastIcon,a=e.additionalClassName,i=s()(e,p),c=o?Object(l.createElement)("span",{className:"yoast-icon"}):null;return Object(l.createElement)(u.Modal,r()({title:t,className:"".concat(n," ").concat(a),icon:c},i),e.children)};f.propTypes={title:c.a.string,className:c.a.string,showYoastIcon:c.a.bool,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)]),additionalClassName:c.a.string},f.defaultProps={title:"Yoast SEO",className:d,showYoastIcon:!0,children:null,additionalClassName:""},t.a=f},68:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},69:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],_n=!0,s=!1;try{for(n=n.call(e);!(_n=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);_n=!0);}catch(e){s=!0,r=e}finally{try{_n||null==n.return||n.return()}finally{if(s)throw r}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},7:function(e,t){e.exports=window.yoast.styledComponents},70:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},93:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports}});