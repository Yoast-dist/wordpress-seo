!function(e){var r={};function t(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(i,s,function(r){return e[r]}.bind(null,s));return i},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=274)}({14:function(e,r){e.exports=window.yoast.analysis},274:function(e,r,t){"use strict";t.r(r);const i=t(14).bundledPlugins.usedKeywords;(new class{constructor(){this._initialized=!1}register(){analysisWorker.registerMessageHandler("updateKeywordUsage",this.updateKeywordUsage.bind(this),"used-keywords-assessment"),analysisWorker.registerMessageHandler("initialize",this.initialize.bind(this),"used-keywords-assessment")}initialize(e){this._plugin=new i(analysisWorker,e),this._plugin.registerPlugin(),this._initialized=!0}updateKeywordUsage(e){if(!this._initialized)throw new Error("UsedKeywordsAssessment must be initialized before keyphrases can be updated.");this._plugin.updateKeywordUsage(e),analysisWorker.refreshAssessment("usedKeywords","previouslyUsedKeywords")}}).register()}});