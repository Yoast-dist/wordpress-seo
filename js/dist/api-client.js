!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=193)}({193:function(e,t){!function(e,t){window.wpseoApi={get:function(e,t,n,o){this.request("GET",e,t,n,o)},post:function(e,t,n,o){this.request("POST",e,t,n,o)},put:function(e,t,n,o){this.request("PUT",e,t,n,o)},patch:function(e,t,n,o){this.request("PATCH",e,t,n,o)},delete:function(e,t,n,o){this.request("DELETE",e,t,n,o)},request:function(n,o,r,u,i){"function"==typeof r&&void 0===i&&(i=u,u=r,r={}),"POST"!==n&&"GET"!==n&&(r._method=n,n="POST"),e.ajax({url:t.root+"yoast/v1/"+o,method:n,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",t.nonce)},data:r}).done(u).fail(i)}}}(jQuery,wpApiSettings)}});