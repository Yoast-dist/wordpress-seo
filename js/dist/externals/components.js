(()=>{var e={2828:e=>{if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},9438:(e,t,n)=>{var r=n(2828);function o(e,t,n,r,o){var s=i.apply(this,arguments);return e.addEventListener(n,s,o),{destroy:function(){e.removeEventListener(n,s,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},139:e=>{"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},3759:e=>{"use strict";e.exports=function(e,t,n,r,o,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,a],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},3620:(e,t,n)=>{"use strict";var r=n(139);e.exports=r},2851:(e,t)=>{t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},7370:(e,t,n)=>{var r=n(2851),o=n(9438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},6746:(e,t,n)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(n(9196)),i=a(n(9156)),s=a(n(6743));function a(e){return e&&e.__esModule?e:{default:e}}var l=void 0;function c(e,t){var n,s,a,u,d,p,f,g,h=[],y={};for(p=0;p<e.length;p++)if("string"!==(d=e[p]).type){if(!t.hasOwnProperty(d.value)||void 0===t[d.value])throw new Error("Invalid interpolation, missing component node: `"+d.value+"`");if("object"!==r(t[d.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+d.value+"`","\n> "+l);if("componentClose"===d.type)throw new Error("Missing opening component token: `"+d.value+"`");if("componentOpen"===d.type){n=t[d.value],a=p;break}h.push(t[d.value])}else h.push(d.value);return n&&(u=function(e,t){var n,r,o=t[e],i=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return r;i--}}throw new Error("Missing closing component token `"+o.value+"`")}(a,e),f=c(e.slice(a+1,u),t),s=o.default.cloneElement(n,{},f),h.push(s),u<e.length-1&&(g=c(e.slice(u+1),t),h=h.concat(g))),1===h.length?h[0]:(h.forEach((function(e,t){e&&(y["interpolation-child-"+t]=e)})),(0,i.default)(y))}t.Z=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(l=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var i=(0,s.default)(t);try{return c(i,n)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},6743:e=>{"use strict";function t(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(t)}},9156:(e,t,n)=>{"use strict";var r=n(9196),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(139),s=n(3759),a=n(3620),l=".",c=":",u="function"==typeof Symbol&&Symbol.iterator,d="@@iterator";function p(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function f(e,t,n,r){var i,a=typeof e;if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===o)return n(r,e,""===t?l+p(e,0):t),1;var g=0,h=""===t?l:t+c;if(Array.isArray(e))for(var y=0;y<e.length;y++)g+=f(i=e[y],h+p(i,y),n,r);else{var m=function(e){var t=e&&(u&&e[u]||e[d]);if("function"==typeof t)return t}(e);if(m)for(var b,v=m.call(e),S=0;!(b=v.next()).done;)g+=f(i=b.value,h+p(i,S++),n,r);else if("object"===a){var w=""+e;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w,"")}}return g}var g=/\/+/g;function h(e){return(""+e).replace(g,"$&/")}var y,m,b=v,v=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)};function S(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function w(e,t,n){var o,s,a=e.result,l=e.keyPrefix,c=e.func,u=e.context,d=c.call(u,t,e.count++);Array.isArray(d)?E(d,a,n,i.thatReturnsArgument):null!=d&&(r.isValidElement(d)&&(o=d,s=l+(!d.key||t&&t.key===d.key?"":h(d.key)+"/")+n,d=r.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),a.push(d))}function E(e,t,n,r,o){var i="";null!=n&&(i=h(n)+"/");var s=S.getPooled(t,i,r,o);!function(e,t,n){null==e||f(e,"",t,n)}(e,w,s),S.release(s)}S.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},y=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},(m=S).instancePool=[],m.getPooled=y||b,m.poolSize||(m.poolSize=10),m.release=function(e){var t=this;s(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)E(e[n],t,n,i.thatReturnsArgument);return t}},3817:e=>{e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},4279:e=>{function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,s=r.length;i<s;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t},2573:function(e,t,n){var r,o,i;o=[e,n(3817)],r=function(e,t){"use strict";var n,r=(n=t)&&n.__esModule?n:{default:n};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=s},void 0===(i=r.apply(t,o))||(e.exports=i)},8870:function(e,t,n){var r,o,i;o=[e,n(2573),n(4279),n(7370)],r=function(e,t,n,r){"use strict";var o=a(t),i=a(n),s=a(r);function a(e){return e&&e.__esModule?e:{default:e}}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,s.default)(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return d("action",e)}},{key:"defaultTarget",value:function(e){var t=d("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return d("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(i.default);function d(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=u},void 0===(i=r.apply(t,o))||(e.exports=i)},9196:e=>{"use strict";e.exports=window.React}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{AnalysisList:()=>f.AnalysisList,ButtonSection:()=>p,Card:()=>o.Card,CardBanner:()=>o.CardBanner,CardDetails:()=>o.CourseDetails,Collapsible:()=>o.Collapsible,ContentAnalysis:()=>f.ContentAnalysis,CornerstoneToggle:()=>v,DashboardWidgetSeoAssessment:()=>f.SiteSEOReport,DashboardWidgetWordpressFeed:()=>o.ArticleList,FixedWidthContainer:()=>B.FixedWidthContainer,FullHeightCard:()=>o.FullHeightCard,HelpText:()=>o.HelpText,HelpTextWrapper:()=>B.HelpTextWrapper,Icon:()=>o.Icon,KeywordInput:()=>We,KeywordSuggestions:()=>o.KeywordSuggestions,LanguageNotice:()=>o.LanguageNotice,LinkSuggestions:()=>N,Loader:()=>o.Loader,LoadingIndicator:()=>Ge,MessageBox:()=>Ye,OnboardingWizard:()=>Ke,ReplacementVariableEditor:()=>D.ReplacementVariableEditor,ScoreAssessments:()=>o.ScoreAssessments,SeoAssessment:()=>f.SiteSEOReport,SettingsSnippetEditor:()=>B.SettingsSnippetEditor,SnippetEditor:()=>B.SnippetEditor,SnippetPreview:()=>B.SnippetPreview,StyledHeading:()=>o.StyledHeading,StyledSection:()=>o.StyledSection,StyledSectionBase:()=>o.StyledSectionBase,SvgIcon:()=>o.SvgIcon,SynonymsInput:()=>o.SynonymsInput,UpsellButton:()=>o.UpsellButton,UpsellLinkButton:()=>o.UpsellLinkButton,WordOccurrenceInsights:()=>o.WordOccurrenceInsights,WordpressFeed:()=>o.ArticleList,YoastButton:()=>o.YoastButton,YoastModal:()=>o.Modal,YoastSeoIcon:()=>o.YoastSeoIcon,YoastWarning:()=>o.Warning,analysis:()=>_e,colors:()=>t.colors,decodeHTML:()=>e.decodeHTML,getRtlStyle:()=>qe,insightsReducer:()=>Ve,lengthProgressShape:()=>B.lengthProgressShape,localize:()=>Z,recommendedReplacementVariablesShape:()=>D.recommendedReplacementVariablesShape,renderRatingToColor:()=>f.renderRatingToColor,replacementVariablesShape:()=>D.replacementVariablesShape,sendRequest:()=>e.sendRequest,setInclusiveLanguageResults:()=>de,setOverallInclusiveLanguageScore:()=>ge,setOverallReadabilityScore:()=>pe,setOverallSeoScore:()=>fe,setReadabilityResults:()=>ue,setSeoResultsForKeyword:()=>ce,setTranslations:()=>Y,setWordsForInsights:()=>Ue,translate:()=>G,utils:()=>H});const e=window.yoast.helpers,t=window.yoast.styleGuide,o=window.yoast.componentsNew,i=window.wp.element,s=window.yoast.propTypes;var a=n.n(s),l=n(9196),c=n.n(l);const u=(0,o.wrapInHeading)(o.StyledIconsButton,{level:2,fontSize:"1rem",fontWeight:"normal"}),d=e=>{const t=e.hasSeparator?o.StyledContainerTopLevel:o.StyledContainer;return(0,i.createElement)(t,{onClick:e.onClick,className:e.className},(0,i.createElement)(e.Heading,{prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,hasSubTitle:!!e.subTitle,id:e.id},(0,i.createElement)(o.SectionTitle,{title:e.title,titleScreenReaderText:e.titleScreenReaderText,subTitle:e.subTitle})))};d.propTypes={hasSeparator:a().bool,className:a().string,Heading:a().func,prefixIcon:a().shape({icon:a().string,color:a().string,size:a().string}),suffixIcon:a().shape({icon:a().string,color:a().string,size:a().string}),subTitle:a().string,title:a().string.isRequired,titleScreenReaderText:a().string,onClick:a().func.isRequired,id:a().string},d.defaultProps={Heading:u,id:null};const p=d,f=window.yoast.analysisReport,g=window.yoast.styledComponents;var h=n.n(g);const y=window.wp.i18n,m=h().div`
	display: flex;
	margin-top: 8px;
`;class b extends c().Component{render(){return(0,i.createElement)(m,null,(0,i.createElement)(o.Toggle,{id:this.props.id,labelText:(0,y.__)("Mark as cornerstone content","wordpress-seo"),isEnabled:this.props.isEnabled,onSetToggleState:this.props.onToggle,onToggleDisabled:this.props.onToggleDisabled}))}}b.propTypes={id:a().string,isEnabled:a().bool,onSetToggleState:a().func,onToggle:a().func,disable:a().bool,onToggleDisabled:a().func},b.defaultProps={id:"cornerstone-toggle"};const v=b;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}const w=h().div`
	display: flex;
	align-items: center;
	min-height: 40px;
	margin-bottom: 5px;
`,E=h().button`
	box-sizing: border-box;
	height: 30px;
	width: 30px;
	background-color: ${t.colors.$color_button};
	border-radius: 5px;
	cursor: pointer;
	outline:none;
	margin-right: 8px;
	border: 1px solid ${t.colors.$color_button_border};

	&:focus {
		box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
	}
`,x=(0,e.makeOutboundLink)(h().a`
	max-width: 128px;
	padding: 6px 0;
	margin-right: 8px;
`),k=h().span`
	max-width: 75px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	display: block;
	padding: 3px 8px;
	margin-left: auto;
	font-size: 0.85em;
	background-color: #f3f4f5;
	border-radius: 2px;
`,T=({value:e,url:n,isActive:r,type:s})=>{const a=(0,y.__)("Copy link","wordpress-seo"),l=(0,y.sprintf)(/* translators: %s expands to the link value */
(0,y.__)("Copy link to suggested article: %s","wordpress-seo"),e);let c="clipboard";return r&&(c="check"),(0,i.createElement)(w,null,(0,i.createElement)(E,{type:"button",className:"yoast-link-suggestion__copy yoast-tooltip yoast-tooltip-alt yoast-tooltip-s",onBlur:e=>{e.nativeEvent.target.setAttribute("aria-label",l),e.nativeEvent.target.setAttribute("data-label",a)},"data-clipboard-text":n,"aria-label":l,"data-label":a},(0,i.createElement)(o.SvgIcon,{icon:c,color:t.colors.$color_grey_dark}),(0,i.createElement)(o.ScreenReaderText,null,a)),(0,i.createElement)(x,{href:n},e),(0,i.createElement)(k,{title:s},s))};T.propTypes={value:a().string.isRequired,url:a().string.isRequired,isActive:a().bool,type:a().string.isRequired},T.defaultProps={isActive:!1};const _=T;var C=n(8870),R=n.n(C),A=n(6746);const L=window.wp.a11y,O=(0,e.makeOutboundLink)(),I=h().div`
	display: table-cell;
`,j=(0,y.__)("We could not find any relevant articles on your website that you could link to from your post.","wordpress-seo"),P=(0,y.__)("{{a}}Read our article about site structure{{/a}} to learn more about how internal linking can help improve your SEO.","wordpress-seo"),M=(0,y.__)("Consider linking to these {{a}}cornerstone articles:{{/a}}","wordpress-seo"),F=(0,y.__)("Consider linking to these articles:","wordpress-seo");class $ extends c().Component{constructor(e){super(e),this.state={clipboard:new(R())(".yoast-link-suggestion__copy")},this.state.clipboard.on("success",this.handleSuccess.bind(this)),this.state.clipboard.on("error",this.handleError.bind(this))}handleSuccess(e){const t=(0,y.__)("Copied!","wordpress-seo");e.trigger.focus(),e.trigger.setAttribute("aria-label",t),e.trigger.setAttribute("data-label",t),(0,L.speak)(t,"assertive")}handleError(e){const t=(0,y.__)("Not supported!","wordpress-seo");e.trigger.el.setAttribute("aria-label",t),e.trigger.setAttribute("data-label",t),(0,L.speak)(t,"assertive")}renderEmptyList(){let e=this.props.customMessages.lengthMessage;return e=""===e?j:e,(0,i.createElement)("div",null,(0,i.createElement)("p",null,e),(0,i.createElement)("p",null,this.props.customMessages.metaMessage),(0,i.createElement)("p",null,this.getArticleLink()))}render(){const e=this.props.suggestions,t=this.props.maxSuggestions;if(0===e.length)return this.renderEmptyList();e.length>t&&(e.length=t);const n=this.getCornerstoneSuggestions(),r=this.getDefaultSuggestions();return(0,i.createElement)(I,null,n,r,(0,i.createElement)("p",null,this.getArticleLink()),(0,i.createElement)("p",null,this.props.customMessages.metaMessage))}getCornerstoneSuggestions(){const e=this.filterSuggestionsByCornerstone(!0);if(0===e.length)return null;const t=(0,A.Z)({mixedString:M,components:{a:(0,i.createElement)(O,{href:"https://yoa.st/metabox-ls-help-cornerstone"})}});return this.getSuggestionsList(t,e)}getDefaultSuggestions(){const e=this.filterSuggestionsByCornerstone(!1);return 0===e.length?null:this.getSuggestionsList(F,e)}getArticleLink(){return(0,A.Z)({mixedString:P,components:{a:(0,i.createElement)(O,{href:"https://yoa.st/site-structure-metabox"})}})}getSuggestionsList(e,t){return(0,i.createElement)("div",null,(0,i.createElement)("p",null,e),t.map(((e,t)=>(0,i.createElement)(_,S({key:t},e)))))}filterSuggestionsByCornerstone(e=!0){return this.props.suggestions.filter((t=>t.isCornerstone===e))}}$.propTypes={suggestions:a().array.isRequired,maxSuggestions:a().number,customMessages:a().object},$.defaultProps={maxSuggestions:10,customMessages:{lengthMessage:"",metaMessage:""}};const N=$,B=window.yoast.searchMetadataPreviews,D=window.yoast.replacementVariableEditor,W=window.lodash,H={getFeed:e.getFeed,getCourseFeed:e.getCourseFeed,getPostFeed:e.getPostFeed,makeOutboundLink:e.makeOutboundLink,buildStructuredUrl:function(e,t={}){const n=Object.keys(t);let r=e;return n.forEach((e=>{const n=t[e],o=(0,W.isArray)(n)?n.join("/"):n,i=`%${e}%`;r=r.replace(new RegExp(i,"g"),o)})),r}},U=window.yoast.jed;var z=n.n(U);const V=window.lodash.assign;var q=n.n(V),K=null;function Y(e){K=new(z())(e)}function G(e,t="",n=0){const r=(null===K&&(K=new(z())({})),K);return""===t?r.gettext(e):r.ngettext(e,t,n)}function Z(e){const t=e.displayName||e.name||"",n={translate:G};class r extends c().Component{constructor(e){super(e),this.displayName="Localized"+t}render(){const t=q()({},this.props,n);return(0,i.createElement)(e,t)}}return r}const X="CONTENT_ANALYSIS_",J=`${X}SET_SEO_RESULTS`,Q=`${X}SET_SEO_RESULTS_FOR_KEYWORD`,ee=`${X}UPDATE_SEO_RESULT`,te=`${X}REMOVE_KEYWORD`,ne=`${X}SET_READABILITY_RESULTS`,re=`${X}UPDATE_READABILITY_RESULT`,oe=`${X}SET_INCLUSIVE_LANGUAGE_RESULTS`,ie=`${X}UPDATE_INCLUSIVE_LANGUAGE_RESULT`,se=`${X}SET_OVERALL_READABILITY_SCORE`,ae=`${X}SET_OVERALL_SEO_SCORE`,le=`${X}SET_OVERALL_INCLUSIVE_LANGUAGE_SCORE`;function ce(e,t){return{type:Q,keyword:e,results:t}}function ue(e){return{type:ne,results:e}}function de(e){return{type:oe,results:e}}function pe(e){return{type:se,overallScore:e}}function fe(e,t){return{type:ae,keyword:t,overallScore:e}}function ge(e){return{type:le,overallScore:e}}const he=window.lodash.findIndex;var ye=n.n(he);const me=window.lodash.isUndefined;var be=n.n(me);const ve={},Se=window.lodash.omit;var we=n.n(Se);const Ee={};function xe(e,t,n){return Object.assign({},e,{[t]:{results:n}})}const ke={results:[],overallScore:null},Te=window.yoast.redux,_e=(0,Te.combineReducers)({seo:function(e=Ee,t){switch(t.type){case J:return function(e){const t={};return e.resultsPerKeyword.forEach((function(e){t[e.keyword]={results:e.results}})),t}(t);case ee:return function(e,t){return e[t.keyword]?-1!==ye()(e[t.keyword].results,{id:t.result.id})?function(e,t){const n=Array.from(e[t.keyword].results,(e=>e.id===t.result.id?t.result:e));return Object.assign({},e,{[t.keyword]:{results:n}})}(e,t):Object.assign({},e,{[t.keyword]:{results:[...e[t.keyword].results,t.result]}}):xe(e,t.keyword,[t.result])}(e,t);case te:return we()(e,t.keyword);case Q:return function(e,t){return e[t.keyword]?Object.assign({},e,{[t.keyword]:{results:t.results}}):xe(e,t.keyword,t.results)}(e,t);case ae:return function(e,t){return Object.assign({},e,{[t.keyword]:{...e[t.keyword],overallScore:t.overallScore}})}(e,t);default:return e}},readability:function(e=ve,t){switch(t.type){case ne:return function(e,t){return Object.assign({},e,{results:t.results})}(e,t);case re:return function(e,t){if(be()(e.results))return Object.assign({},e,{results:[t.result]});const n=ye()(e.results,{id:t.result.id});if(-1!==n){const r=e.results.filter((function(t){return t!==e.results[n]}));return Object.assign({},e,{results:r.concat(t.result)})}return Object.assign({},e,{results:[...e.results,t.result]})}(e,t);case se:return function(e,t){return Object.assign({},e,{overallScore:t.overallScore})}(e,t);default:return e}},inclusiveLanguage:function(e=ke,t){switch(t.type){case oe:return function(e,t){return Object.assign({},e,{results:t.results})}(e,t);case ie:return function(e,t){if((0,W.isUndefined)(e.results))return Object.assign({},e,{results:[t.result]});const n=(0,W.findIndex)(e.results,{id:t.result.id});if(-1!==n){const r=e.results.filter((function(t){return t!==e.results[n]}));return Object.assign({},e,{results:r.concat(t.result)})}return Object.assign({},e,{results:[...e.results,t.result]})}(e,t);case le:return function(e,t){return Object.assign({},e,{overallScore:t.overallScore})}(e,t);default:return e}}}),Ce=t.colors.$color_bad,Re=t.colors.$palette_error_background,Ae=t.colors.$color_grey_text_light,Le=t.colors.$palette_error_text,Oe=h().div`
	display: flex;
	flex-direction: column;
`,Ie=h().label`
	font-size: var(--yoast-font-size-default);
	font-weight: var(--yoast-font-weight-bold);
	${(0,e.getDirectionalStyle)("margin-right: 4px","margin-left: 4px")};
`,je=h().span`
	margin-bottom: 0.5em;
`,Pe=h()(o.InputField)`
	flex: 1 !important;
	box-sizing: border-box;
	max-width: 100%;
	margin: 0; // Reset margins inherited from WordPress.

	// Hide native X in Edge and IE11.
	&::-ms-clear {
		display: none;
	}

	&.has-error {
		border-color: ${Ce} !important;
		background-color: ${Re} !important;

		&:focus {
			box-shadow: 0 0 2px ${Ce} !important;
		}
	}
`,Me=h().ul`
	color: ${Le};
	list-style-type: disc;
	list-style-position: outside;
	margin: 0;
	margin-left: 1.2em;
`,Fe=h().li`
	color: ${Le};
	margin: 0 0 0.5em 0;
`,$e=(0,o.addFocusStyle)(h().button`
		border: 1px solid transparent;
		box-shadow: none;
		background: none;
		flex: 0 0 32px;
		height: 32px;
		max-width: 32px;
		padding: 0;
		cursor: pointer;
	`);$e.propTypes={type:a().string,focusColor:a().string,focusBackgroundColor:a().string,focusBorderColor:a().string},$e.defaultProps={type:"button",focusColor:t.colors.$color_button_text_hover,focusBackgroundColor:"transparent",focusBorderColor:t.colors.$color_blue};const Ne=h()(o.SvgIcon)`
	margin-top: 4px;
`,Be=h().div`
	display: flex;
	flex-direction: row;
	align-items: center;

	&.has-remove-keyword-button {
		${Pe} {
			${(0,e.getDirectionalStyle)("padding-right: 40px","padding-left: 40px")};
		}

		${$e} {
			${(0,e.getDirectionalStyle)("margin-left: -32px","margin-right: -32px")};
		}
	}
`;class De extends c().Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e){this.props.onChange(e.target.value)}renderLabel(){const{id:e,label:t,helpLink:n}=this.props;return(0,i.createElement)(je,null,(0,i.createElement)(Ie,{htmlFor:e},t),n)}renderErrorMessages(){const e=[...this.props.errorMessages];return!(0,W.isEmpty)(e)&&(0,i.createElement)(Me,null,e.map(((e,t)=>(0,i.createElement)(Fe,{key:t},(0,i.createElement)("span",{role:"alert"},e)))))}render(){const{id:e,showLabel:t,keyword:n,onRemoveKeyword:r,onBlurKeyword:o,onFocusKeyword:s,hasError:a}=this.props,l=!t,c=r!==W.noop;return(0,i.createElement)(Oe,null,t&&this.renderLabel(),a&&this.renderErrorMessages(),(0,i.createElement)(Be,{className:c?"has-remove-keyword-button":null},(0,i.createElement)(Pe,{"aria-label":l?this.props.label:null,type:"text",id:e,className:a?"has-error":null,onChange:this.handleChange,onFocus:s,onBlur:o,value:n,autoComplete:"off"}),c&&(0,i.createElement)($e,{onClick:r,focusBoxShadowColor:"#084A67"},(0,i.createElement)(Ne,{size:"18px",icon:"times-circle",color:Ae}))))}}De.propTypes={id:a().string.isRequired,showLabel:a().bool,keyword:a().string,onChange:a().func.isRequired,onRemoveKeyword:a().func,onBlurKeyword:a().func,onFocusKeyword:a().func,label:a().string.isRequired,helpLink:a().node,hasError:a().bool,errorMessages:a().arrayOf(a().string)},De.defaultProps={showLabel:!0,keyword:"",onRemoveKeyword:W.noop,onBlurKeyword:W.noop,onFocusKeyword:W.noop,helpLink:null,hasError:!1,errorMessages:[]};const We=De,He="SET_WORDS_FOR_INSIGHTS";function Ue(e){return{type:He,wordsForInsights:e}}const ze=[],Ve=(0,Te.combineReducers)({prominentWords:function(e=ze,t){return t.type===He?t.wordsForInsights:e}}),qe=e.getDirectionalStyle,Ke=()=>(console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `OnboardingWizard` from the `@yoast/configuration-wizard` package instead."),null),Ye=()=>(console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `MessageBox` from the `@yoast/configuration-wizard` package instead."),null),Ge=()=>(console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `LoadingIndicator` from the `@yoast/configuration-wizard` package instead."),null)})(),(window.yoast=window.yoast||{}).components=r})();