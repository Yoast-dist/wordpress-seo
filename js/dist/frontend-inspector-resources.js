!function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=269)}({0:function(e,r){e.exports=window.wp.element},1:function(e,r){e.exports=window.yoast.propTypes},108:function(e,r,o){"use strict";o.d(r,"a",(function(){return a}));var t,n,s=o(3);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function a(e){return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 425 456.27","aria-hidden":"true"},e),t||(t=s.createElement("path",{d:"M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z"})),n||(n=s.createElement("path",{d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 010 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z",stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81})))}},12:function(e,r){e.exports=window.yoast.analysis},15:function(e,r){e.exports=window.yoast.styleGuide},193:function(e,r,o){"use strict";o.d(r,"a",(function(){return a}));var t=o(0),n=o(7),s=o(64),c=o(1);function a(e){let{score:r,label:o,scoreValue:c}=e;return Object(t.createElement)("div",null,Object(t.createElement)(n.SvgIcon,Object(s.getIconForScore)(r)),Object(t.createElement)("span",null," ",o," ",c&&Object(t.createElement)("strong",null,c)))}a.propTypes={score:c.string.isRequired,label:c.string.isRequired,scoreValue:c.string},a.defaultProps={scoreValue:""}},2:function(e,r){e.exports=window.wp.i18n},269:function(e,r,o){"use strict";o.r(r);var t=o(108),n=o(44),s=o(193);window.yoast=window.yoast||{},window.yoast.frontendInspector={getIndicatorForScore:n.a,AnalysisCheck:s.a,YoastIcon:t.a}},3:function(e,r){e.exports=window.React},4:function(e,r){e.exports=window.lodash},44:function(e,r,o){"use strict";o.d(r,"a",(function(){return c}));var t=o(2),n=o(12),s=o(4);function c(e){return Object(s.isNil)(e)||(e/=10),function(e){switch(e){case"feedback":return{className:"na",screenReaderText:Object(t.__)("Feedback","wordpress-seo"),screenReaderReadabilityText:""};case"bad":return{className:"bad",screenReaderText:Object(t.__)("Needs improvement","wordpress-seo"),screenReaderReadabilityText:Object(t.__)("Needs improvement","wordpress-seo")};case"ok":return{className:"ok",screenReaderText:Object(t.__)("OK SEO score","wordpress-seo"),screenReaderReadabilityText:Object(t.__)("OK","wordpress-seo")};case"good":return{className:"good",screenReaderText:Object(t.__)("Good SEO score","wordpress-seo"),screenReaderReadabilityText:Object(t.__)("Good","wordpress-seo")};default:return{className:"loading",screenReaderText:"",screenReaderReadabilityText:""}}}(n.interpreters.scoreToRating(e))}},64:function(e,r,o){"use strict";o.r(r),o.d(r,"getIconForScore",(function(){return a})),o.d(r,"default",(function(){return i}));var t=o(15),n=o(12);function s(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const o=e.getIdentifier(),t={score:e.score,rating:n.interpreters.scoreToRating(e.score),hasMarks:e.hasMarks(),marker:e.getMarker(),id:o,text:e.text,markerId:r.length>0?`${r}:${o}`:o,hasBetaBadge:e.hasBetaBadge(),hasJumps:e.hasJumps(),editFieldName:e.editFieldName};return"ok"===t.rating&&(t.rating="OK"),t}function c(e,r){switch(e.rating){case"error":r.errorsResults.push(e);break;case"feedback":r.considerationsResults.push(e);break;case"bad":r.problemsResults.push(e);break;case"OK":r.improvementsResults.push(e);break;case"good":r.goodResults.push(e)}return r}function a(e){switch(e){case"loading":return{icon:"loading-spinner",color:t.colors.$color_green_medium_light};case"not-set":return{icon:"seo-score-none",color:t.colors.$color_score_icon};case"noindex":return{icon:"seo-score-none",color:t.colors.$color_noindex};case"good":return{icon:"seo-score-good",color:t.colors.$color_green_medium};case"ok":return{icon:"seo-score-ok",color:t.colors.$color_ok};case"bad":return{icon:"seo-score-bad",color:t.colors.$color_red};default:return{icon:"seo-score-none",color:t.colors.$color_red}}}function i(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o={errorsResults:[],problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[]};if(!e)return o;for(let t=0;t<e.length;t++){const n=e[t];n.text&&(o=c(s(n,r),o))}return o}},7:function(e,r){e.exports=window.yoast.componentsNew}});