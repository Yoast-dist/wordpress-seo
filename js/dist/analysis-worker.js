!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=186)}({186:function(t,e,n){var r=n(26);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}self.window=self,self.onmessage=function(t){var e=t.data;if(e&&e.dependencies){!function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(self.importScripts(t[e]),"lodash"===e&&(self.lodash=_.noConflict()))}(e.dependencies),e.translations&&function(t){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,void 0):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}(t);try{for(n.s();!(e=n.n()).done;){var a=r(e.value,2),i=a[0],l=a[1],u=l.locale_data[i]||l.locale_data.messages;u[""].domain=i,self.wp.i18n.setLocaleData(u,i)}}catch(t){n.e(t)}finally{n.f()}}(e.translations);var n=self.yoast.Researcher.default;new self.yoast.analysis.AnalysisWebWorker(self,new n).register()}}},26:function(t,e,n){var r=n(59),o=n(60),a=n(61);t.exports=function(t,e){return r(t)||o(t,e)||a()}},59:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},60:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],_n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(_n=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);_n=!0);}catch(t){r=!0,o=t}finally{try{_n||null==i.return||i.return()}finally{if(r)throw o}}return n}}},61:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}});