!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=352)}({25:function(e,n){e.exports=window.yoast.analysis},352:function(e,n,t){"use strict";t.r(n);var r=t(7),i=t.n(r),s=t(8),o=t.n(s),u=t(25).bundledPlugins.usedKeywords;(new(function(){function e(){i()(this,e),this._initialized=!1}return o()(e,[{key:"register",value:function(){analysisWorker.registerMessageHandler("updateKeywordUsage",this.updateKeywordUsage.bind(this),"used-keywords-assessment"),analysisWorker.registerMessageHandler("initialize",this.initialize.bind(this),"used-keywords-assessment")}},{key:"initialize",value:function(e){this._plugin=new u(analysisWorker,e),this._plugin.registerPlugin(),this._initialized=!0}},{key:"updateKeywordUsage",value:function(e){if(!this._initialized)throw new Error("UsedKeywordsAssessment must be initialized before keyphrases can be updated.");this._plugin.updateKeywordUsage(e),analysisWorker.refreshAssessment("usedKeywords","previouslyUsedKeywords")}}]),e}())).register()},7:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},8:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}});