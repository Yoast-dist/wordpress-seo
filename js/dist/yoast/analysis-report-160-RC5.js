!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=8)}([function(e,t){e.exports=React},function(e,t){e.exports=window.yoast.styledComponents},function(e,t,s){e.exports=s(10)()},function(e,t){e.exports=window.yoast.componentsNew},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderRatingToColor=f,t.default=p;var n=s(5),o=d(s(0)),r=d(s(1)),a=d(s(2)),l=d(s(14)),u=s(6),i=d(s(7));function d(e){return e&&e.__esModule?e:{default:e}}const c=r.default.ul.withConfig({displayName:"AnalysisList__AnalysisListBase",componentId:"ztf5v6-0"})(["margin:8px 0;padding:0;list-style:none;"]);function f(e){switch(e){case"good":return u.colors.$color_good;case"OK":return u.colors.$color_ok;case"bad":return u.colors.$color_bad;default:return u.colors.$color_score_icon}}function p({results:e,marksButtonActivatedResult:t,marksButtonStatus:s,marksButtonClassName:r,onMarksButtonClick:a}){return o.default.createElement(c,{role:"list"},e.map(e=>{const l=f(e.rating),u=e.markerId===t;let d="";return d="disabled"===s?(0,n.__)("Marks are disabled in current view","yoast-components"):u?(0,n.__)("Remove highlight from the text","yoast-components"):(0,n.__)("Highlight this result in the text","yoast-components"),o.default.createElement(i.default,{key:e.id,text:e.text,bulletColor:l,hasMarksButton:e.hasMarks,ariaLabel:d,pressed:u,buttonId:e.id,onButtonClick:()=>a(e.id,e.marker),marksButtonClassName:r,marksButtonStatus:s})}))}p.propTypes={results:a.default.array.isRequired,marksButtonActivatedResult:a.default.string,marksButtonStatus:a.default.string,marksButtonClassName:a.default.string,onMarksButtonClick:a.default.func},p.defaultProps={marksButtonActivatedResult:"",marksButtonStatus:"enabled",marksButtonClassName:"",onMarksButtonClick:l.default}},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.yoast.styleGuide},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnalysisResult=void 0;var n=l(s(0)),o=l(s(2)),r=l(s(1)),a=s(3);function l(e){return e&&e.__esModule?e:{default:e}}const u=r.default.li.withConfig({displayName:"AnalysisResult__AnalysisResultBase",componentId:"sc-1xhyqkl-0"})(["min-height:24px;padding:0;display:flex;align-items:flex-start;"]),i=(0,r.default)(a.SvgIcon).withConfig({displayName:"AnalysisResult__ScoreIcon",componentId:"sc-1xhyqkl-1"})(["margin:3px 11px 0 0;"]),d=r.default.p.withConfig({displayName:"AnalysisResult__AnalysisResultText",componentId:"sc-1xhyqkl-2"})(["margin:0 16px 0 0;flex:1 1 auto;"]),c=t.AnalysisResult=(e=>n.default.createElement(u,null,n.default.createElement(i,{icon:"circle",color:e.bulletColor,size:"13px"}),n.default.createElement(d,{dangerouslySetInnerHTML:{__html:e.text}}),e.hasMarksButton&&!function(e){return"hidden"===e.marksButtonStatus}(e)&&n.default.createElement(a.IconButtonToggle,{marksButtonStatus:e.marksButtonStatus,className:e.marksButtonClassName,onClick:e.onButtonClick,id:e.buttonId,icon:"eye",pressed:e.pressed,ariaLabel:e.ariaLabel})));c.propTypes={text:o.default.string.isRequired,bulletColor:o.default.string.isRequired,hasMarksButton:o.default.bool.isRequired,buttonId:o.default.string.isRequired,pressed:o.default.bool.isRequired,ariaLabel:o.default.string.isRequired,onButtonClick:o.default.func.isRequired,marksButtonStatus:o.default.string,marksButtonClassName:o.default.string},c.defaultProps={marksButtonStatus:"enabled",marksButtonClassName:""},t.default=c},function(e,t,s){"use strict";window.yoast=window.yoast||{},window.yoast.analysisReport=s(9)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SiteSEOReport=t.renderRatingToColor=t.AnalysisList=t.AnalysisResult=t.ContentAnalysis=void 0;var n=s(4),o=u(n),r=u(s(15)),a=u(s(7)),l=u(s(16));function u(e){return e&&e.__esModule?e:{default:e}}t.ContentAnalysis=r.default,t.AnalysisResult=a.default,t.AnalysisList=o.default,t.renderRatingToColor=n.renderRatingToColor,t.SiteSEOReport=l.default},function(e,t,s){"use strict";var n=s(11),o=s(12),r=s(13);e.exports=function(){function e(e,t,s,n,a,l){l!==r&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var s={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return s.checkPropTypes=n,s.PropTypes=s,s}},function(e,t,s){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,s){"use strict";var n=function(e){};e.exports=function(e,t,s,o,r,a,l,u){if(n(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[s,o,r,a,l,u],c=0;(i=new Error(t.replace(/%s/g,function(){return d[c++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,s){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=function(){}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(s(0)),o=d(s(1)),r=d(s(2)),a=s(5),l=s(6),u=s(3),i=d(s(4));function d(e){return e&&e.__esModule?e:{default:e}}const c=o.default.div.withConfig({displayName:"ContentAnalysis__ContentAnalysisContainer",componentId:"mn6g5t-0"})(["width:100%;background-color:white;border-bottom:1px solid transparent;"]),f=(0,o.default)(u.Collapsible).withConfig({displayName:"ContentAnalysis__StyledCollapsible",componentId:"mn6g5t-1"})(["margin-bottom:8px;button:first-child svg{margin:-2px 8px 0 -2px;}","{padding:8px 0;color:","}"],u.StyledIconsButton,l.colors.$color_blue);class p extends n.default.Component{renderCollapsible(e,t,s){return n.default.createElement(f,{initialIsOpen:!0,title:`${e} (${s.length})`,prefixIcon:{icon:"angle-up",color:l.colors.$color_grey_dark,size:"18px"},prefixIconCollapsed:{icon:"angle-down",color:l.colors.$color_grey_dark,size:"18px"},suffixIcon:null,suffixIconCollapsed:null,headingProps:{level:t,fontSize:"13px",fontWeight:"bold"}},n.default.createElement(i.default,{results:s,marksButtonActivatedResult:this.props.activeMarker,marksButtonStatus:this.props.marksButtonStatus,marksButtonClassName:this.props.marksButtonClassName,onMarksButtonClick:this.props.onMarkButtonClick}))}render(){var e=this.props;const t=e.problemsResults,s=e.improvementsResults,o=e.goodResults,r=e.considerationsResults,l=e.errorsResults,u=e.headingLevel,i=l.length,d=t.length,f=s.length,p=r.length,m=o.length;return n.default.createElement(c,null,i>0&&this.renderCollapsible((0,a.__)("Errors","yoast-components"),u,l),d>0&&this.renderCollapsible((0,a.__)("Problems","yoast-components"),u,t),f>0&&this.renderCollapsible((0,a.__)("Improvements","yoast-components"),u,s),p>0&&this.renderCollapsible((0,a.__)("Considerations","yoast-components"),u,r),m>0&&this.renderCollapsible((0,a.__)("Good results","yoast-components"),u,o))}}p.propTypes={onMarkButtonClick:r.default.func,problemsResults:r.default.array,improvementsResults:r.default.array,goodResults:r.default.array,considerationsResults:r.default.array,errorsResults:r.default.array,headingLevel:r.default.number,marksButtonStatus:r.default.string,marksButtonClassName:r.default.string,activeMarker:r.default.string},p.defaultProps={onMarkButtonClick:()=>{},problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[],errorsResults:[],headingLevel:4,marksButtonStatus:"enabled",marksButtonClassName:"",activeMarker:""},t.default=p},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(s(0)),o=l(s(2)),r=l(s(1)),a=s(3);function l(e){return e&&e.__esModule?e:{default:e}}const u=r.default.div.withConfig({displayName:"SiteSEOReport__SiteSEOReportContainer",componentId:"yh1o4t-0"})([""]),i=r.default.p.withConfig({displayName:"SiteSEOReport__SiteSEOReportText",componentId:"yh1o4t-1"})(["font-size:14px;"]),d=e=>n.default.createElement(u,{className:e.className},n.default.createElement(i,{className:`${e.className}__text`},e.seoAssessmentText),n.default.createElement(a.StackedProgressBar,{className:"progress",items:e.seoAssessmentItems,barHeight:e.barHeight}),n.default.createElement(a.ScoreAssessments,{className:"assessments",items:e.seoAssessmentItems}));d.propTypes={className:o.default.string,seoAssessmentText:o.default.string,seoAssessmentItems:o.default.arrayOf(o.default.shape({html:o.default.string.isRequired,value:o.default.number.isRequired,color:o.default.string.isRequired})),barHeight:o.default.string},d.defaultProps={className:"seo-assessment",seoAssessmentText:"SEO Assessment",seoAssessmentItems:null,barHeight:"24px"},t.default=d}]);