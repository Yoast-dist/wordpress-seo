!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=308)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},11:function(e,t){e.exports=window.yoast.helpers},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return x}));var r=n(0),o=n(2),a=n.n(o),s=n(1),i=n(4),c=n(24),l=n.n(c),u=n(9),p=n(82),d=()=>Object(r.createElement)("p",{className:"yoast-wincher-seo-performance-modal__loading-message"},Object(s.__)("Tracking the ranking position...","wordpress-seo")," ",Object(r.createElement)(u.SvgIcon,{icon:"loading-spinner"})),h=n(8),b=n.n(h);const m=b()(u.SvgIcon)`
	margin-left: 2px;
	flex-shrink: 0;
	rotate: ${e=>e.isImproving?"-90deg":"90deg"};
`,f=b.a.span`
	color: ${e=>e.isImproving?"#69AB56":"#DC3332"};
	font-size: 13px;
	font-weight: 600;
	line-height: 20px;
	margin-right: 2px;
	margin-left: 12px;
`,y=b.a.td`
	padding-right: 0 !important;

	& > div {
		margin: 0px;
	}
`,g=b.a.td`
	padding-left: 2px !important;
`,w=b.a.td.attrs({className:"yoast-table--nopadding"})`
	& > div {
		justify-content: center;
	}
`,j=b.a.div`
	display: flex;
	align-items: center;
	& > a {
		box-sizing: border-box;
	}
`,O=b.a.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    display: flex;
    align-items: center;
`,v=b.a.tr`
	background-color: ${e=>e.isEnabled?"#FFFFFF":"#F9F9F9"} !important;
`;function E(e){return Math.round(100*e)}function k(e){let{chartData:t}=e;if(Object(i.isEmpty)(t)||Object(i.isEmpty)(t.position))return"?";const n=function(e){return Array.from({length:e.position.history.length},(e,t)=>t+1).map(e=>Object(s.sprintf)(Object(s._n)("%d day","%d days",e,"wordpress-seo"),e))}(t),o=t.position.history.map((e,t)=>({x:t,y:101-e.value}));return Object(r.createElement)(p.a,{width:66,height:24,data:o,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",mapChartDataToTableData:E,dataTableCaption:Object(s.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:n})}function _(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}k.propTypes={chartData:a.a.object},k.defaultProps={chartData:{}};const T=e=>{var t;let{rowData:n}=e;if(null==n||null===(t=n.position)||void 0===t||!t.change)return Object(r.createElement)(k,{chartData:n});const o=n.position.change<0;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(k,{chartData:n}),Object(r.createElement)(f,{isImproving:o},Math.abs(n.position.change)),Object(r.createElement)(m,{icon:"caret-right",color:o?"#69AB56":"#DC3332",size:"14px",isImproving:o}))};function x(e){var t;const{keyphrase:n,rowData:o,onTrackKeyphrase:a,onUntrackKeyphrase:c,isFocusKeyphrase:p,isDisabled:h,isLoading:b,isSelected:m,onSelectKeyphrases:f}=e,E=!Object(i.isEmpty)(o),k=!Object(i.isEmpty)(null==o||null===(t=o.position)||void 0===t?void 0:t.history),x=Object(r.useCallback)(()=>{h||(E?c(n,o.id):a(n))},[n,a,c,E,o,h]),C=Object(r.useCallback)(()=>{f(e=>m?e.filter(e=>e!==n):e.concat(n))},[f,m,n]);return Object(r.createElement)(v,{isEnabled:E},Object(r.createElement)(y,null,k&&Object(r.createElement)(u.Checkbox,{id:"select-"+n,onChange:C,checked:m,label:""})),Object(r.createElement)(g,null,n,p&&Object(r.createElement)("span",null,"*")),function(e){const{rowData:t,websiteId:n,keyphrase:o,onSelectKeyphrases:a}=e,c=Object(r.useCallback)(()=>{a([o])},[a,o]),p=!Object(i.isEmpty)(t),h=t&&t.updated_at&&l()(t.updated_at)>=l()().subtract(7,"days"),b=t?Object(s.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",n,t.id):null;return p?h?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,Object(r.createElement)(j,null,_(t),Object(r.createElement)(u.ButtonStyledLink,{variant:"secondary",href:b,style:{height:28,marginLeft:12},rel:"noopener",target:"_blank"},Object(s.__)("View","wordpress-seo")))),Object(r.createElement)("td",{className:"yoast-table--nopadding"},Object(r.createElement)(O,{onClick:c},Object(r.createElement)(T,{rowData:t}))),Object(r.createElement)("td",null,(m=t.updated_at,l()(m).fromNow()))):Object(r.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(r.createElement)(d,null)):Object(r.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(r.createElement)("i",null,Object(s.__)("Activate tracking to show the ranking position","wordpress-seo")));var m}(e),Object(r.createElement)(w,null,function(e){let{keyphrase:t,isEnabled:n,toggleAction:o,isLoading:a}=e;return a?Object(r.createElement)(u.SvgIcon,{icon:"loading-spinner"}):Object(r.createElement)(u.Toggle,{id:"toggle-keyphrase-tracking-"+t,className:"wincher-toggle",isEnabled:n,onSetToggleState:o,showToggleStateLabel:!1})}({keyphrase:n,isEnabled:E,toggleAction:x,isLoading:b})))}T.propTypes={rowData:a.a.object},x.propTypes={rowData:a.a.object,keyphrase:a.a.string.isRequired,onTrackKeyphrase:a.a.func,onUntrackKeyphrase:a.a.func,isFocusKeyphrase:a.a.bool,isDisabled:a.a.bool,isLoading:a.a.bool,websiteId:a.a.string,isSelected:a.a.bool.isRequired,onSelectKeyphrases:a.a.func.isRequired},x.defaultProps={rowData:{},onTrackKeyphrase:()=>{},onUntrackKeyphrase:()=>{},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""}},115:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.url=e,this.origin=new URL(e).origin,this.eventHandlers=Object.assign({success:{type:"",callback:()=>{}},error:{type:"",callback:()=>{}}},t),this.options=Object.assign({height:570,width:340,title:""},n),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}createPopup(){const{height:e,width:t,title:n}=this.options,r=["top="+(window.top.outerHeight/2+window.top.screenY-e/2),"left="+(window.top.outerWidth/2+window.top.screenX-t/2),"width="+t,"height="+e,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,n,r.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}async messageHandler(e){const{data:t,source:n,origin:r}=e;r===this.origin&&this.popup===n&&(t.type===this.eventHandlers.success.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.success.callback(t)),t.type===this.eventHandlers.error.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.error.callback(t)))}getPopup(){return this.popup}isClosed(){return!this.popup||this.popup.closed}focus(){this.isClosed()||this.popup.focus()}}},117:function(e,t,n){"use strict";var r=n(0),o=n(2),a=n.n(o),s=n(1),i=n(42),c=n.n(i),l=n(9);const u=e=>{const t=Object(s.sprintf)(/* translators: %s expands to a link to open the Wincher login popup. */
Object(s.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"{{reconnectToWincher/}}","Wincher");return Object(r.createElement)(l.Alert,{type:"error",className:e.className},c()({mixedString:t,components:{reconnectToWincher:Object(r.createElement)("a",{href:"#",onClick:t=>{t.preventDefault(),e.onReconnect()}},Object(s.sprintf)(/* translators: %s : Expands to "Wincher". */
Object(s.__)("reconnect to %s","wordpress-seo"),"Wincher"))}}))};u.propTypes={onReconnect:a.a.func.isRequired,className:a.a.string},u.defaultProps={className:""},t.a=u},161:function(e,t,n){"use strict";var r=n(3),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=n(115),s=n(162),i=n(163),c="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}var u=/\/+/g;function p(e){return(""+e).replace(u,"$&/")}var d,h,b=m,m=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function f(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function y(e,t,n){var o,s,i=e.result,c=e.keyPrefix,l=e.func,u=e.context,d=l.call(u,t,e.count++);Array.isArray(d)?g(d,i,n,a.thatReturnsArgument):null!=d&&(r.isValidElement(d)&&(o=d,s=c+(!d.key||t&&t.key===d.key?"":p(d.key)+"/")+n,d=r.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),i.push(d))}function g(e,t,n,r,a){var i="";null!=n&&(i=p(n)+"/");var u=f.getPooled(t,i,r,a);!function(e,t,n){null==e||function e(t,n,r,a){var i,u=typeof t;if("undefined"!==u&&"boolean"!==u||(t=null),null===t||"string"===u||"number"===u||"object"===u&&t.$$typeof===o)return r(a,t,""===n?"."+l(t,0):n),1;var p=0,d=""===n?".":n+":";if(Array.isArray(t))for(var h=0;h<t.length;h++)p+=e(i=t[h],d+l(i,h),r,a);else{var b=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(b)for(var m,f=b.call(t),y=0;!(m=f.next()).done;)p+=e(i=m.value,d+l(i,y++),r,a);else if("object"===u){var g=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(t).join(", ")+"}":g,"")}}return p}(e,"",t,n)}(e,y,u),f.release(u)}f.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)},(h=f).instancePool=[],h.getPooled=d||b,h.poolSize||(h.poolSize=10),h.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)g(e[n],t,n,a.thatReturnsArgument);return t}},162:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,s,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},163:function(e,t,n){"use strict";var r=n(115);e.exports=r},164:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},17:function(e,t){e.exports=window.yoast.styleGuide},2:function(e,t){e.exports=window.yoast.propTypes},24:function(e,t){e.exports=window.moment},28:function(e,t){e.exports=window.wp.apiFetch},3:function(e,t){e.exports=window.React},308:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(10),a=n.n(o),s=n(2),i=n.n(s),c=n(8),l=n.n(c),u=n(1),p=n(4),d=n(42),h=n.n(d),b=n(11),m=n(9);const f=e=>Object(r.createElement)(m.Alert,{type:"warning",className:e.className},Object(u.sprintf)(/* translators: %s: Expands to "Wincher". */
Object(u.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher"));f.propTypes={className:i.a.string},f.defaultProps={className:""};var y=f,g=n(111),w=n(117),j=n(91);const O=Object(b.makeOutboundLink)(),v=Object(b.makeOutboundLink)(),E=Object(b.makeOutboundLink)(),k=Object(b.makeOutboundLink)(),_=l.a.div`
	& .wincher-performance-report-alert {
		margin-bottom: 1em;
	}
`,T=l.a.table`
	pointer-events: none;
	user-select: none;
`,x=l.a.div`
	position: relative;
	width: 100%;
	overflow-y: auto;
`,C=l.a.div`
	margin: 0;
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
`,S=l.a.p`
	top: 47%;
	left: 50%;
	position: absolute; 
`,D=e=>{const{websiteId:t,id:n}=e;return Object(u.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",t,n)},R=e=>{const{isLoggedIn:t,onConnectAction:n}=e;return t?null:Object(r.createElement)(S,null,Object(r.createElement)(m.NewButton,{onClick:n,variant:"primary",style:{left:"-50%",backgroundColor:"#2371B0"}},Object(u.sprintf)(/* translators: %s expands to Wincher */
Object(u.__)("Connect with %s","wordpress-seo"),"Wincher")))};R.propTypes={isLoggedIn:i.a.bool.isRequired,onConnectAction:i.a.func.isRequired};const I=e=>{let{isBlurred:t,children:n}=e;return t?Object(r.createElement)("td",null,Object(r.createElement)(C,null,n)):Object(r.createElement)("td",null,n)};I.propTypes={isBlurred:i.a.bool,children:i.a.oneOfType([i.a.string,i.a.number,i.a.object])};const P=e=>{let{keyphrase:t,websiteId:n,isBlurred:o}=e;const{id:a,keyword:s}=t;return Object(r.createElement)("tr",null,Object(r.createElement)(I,{isBlurred:o},s),Object(r.createElement)(I,{isBlurred:o},Object(g.c)(t)),Object(r.createElement)(I,{isBlurred:o,className:"yoast-table--nopadding"},Object(r.createElement)(g.a,{chartData:t})),Object(r.createElement)(I,{isBlurred:o,className:"yoast-table--nobreak"},Object(r.createElement)(O,{href:D({websiteId:n,id:a})},Object(u.__)("View","wordpress-seo"))))};P.propTypes={keyphrase:i.a.object.isRequired,websiteId:i.a.string.isRequired,isBlurred:i.a.bool};const N=()=>Object(r.createElement)(m.Alert,{type:"error",className:"wincher-performance-report-alert"},Object(u.sprintf)(Object(u.__)("Network Error: Unable to connect to the server. Please check your internet connection and try again later.","wordpress-seo"))),L=e=>{const{data:t}=e;return!Object(p.isEmpty)(t)&&Object(p.isEmpty)(t.results)?Object(r.createElement)(m.Alert,{type:"success",className:"wincher-performance-report-alert"},Object(u.sprintf)(/* translators: %1$s and %2$s: Expands to "Wincher". */
Object(u.__)('You have successfully connected with %1$s. Your %2$s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher","Wincher")):Object(r.createElement)(m.Alert,{type:"success",className:"wincher-performance-report-alert"},Object(u.sprintf)(/* translators: %s: Expands to "Wincher". */
Object(u.__)("You have successfully connected with %s.","wordpress-seo"),"Wincher"))};L.propTypes={data:i.a.object.isRequired};const A=e=>{const{data:t,onConnectAction:n,isConnectSuccess:o,isNetworkError:a,isFailedRequest:s}=e;return a?Object(r.createElement)(N,{data:t}):o?Object(r.createElement)(L,{data:t}):s?Object(r.createElement)(w.a,{onReconnect:n,className:"wincher-performance-report-alert"}):null};A.propTypes={data:i.a.object.isRequired,onConnectAction:i.a.func.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired,isFailedRequest:i.a.bool.isRequired};const q=e=>{const{data:t,isNetworkError:n,isConnectSuccess:o}=e,s=(e=>e&&[401,403,404].includes(e.status))(t);return n||o||s?Object(r.createElement)(A,a()({},e,{isFailedRequest:s})):!t||Object(p.isEmpty)(t.results)?Object(r.createElement)(y,{className:"wincher-performance-report-alert"}):null};q.propTypes={data:i.a.object.isRequired,onConnectAction:i.a.func.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired};const W=e=>{let{isLoggedIn:t}=e;const n=Object(u.sprintf)(/* translators: %s expands to a link to Wincher login */
Object(u.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"{{wincherAccountLink/}}"),o=Object(u.sprintf)(/* translators: %s expands to a link to Wincher login */
Object(u.__)("This overview will show you your top performing keyphrases in Google. Connect with %s to get started.","wordpress-seo"),"{{wincherLink/}}"),a=t?n:o;return Object(r.createElement)("p",null,h()({mixedString:a,components:{wincherAccountLink:Object(r.createElement)(E,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(u.sprintf)(/* translators: %s : Expands to "Wincher". */
Object(u.__)("%s account","wordpress-seo"),"Wincher")),wincherLink:Object(r.createElement)(k,{href:wpseoAdminGlobalL10n["links.wincher.about"]},Object(u.sprintf)(/* translators: %s : Expands to "Wincher". */
Object(u.__)("%s","wordpress-seo"),"Wincher"))}}))};W.propTypes={isLoggedIn:i.a.bool.isRequired};const F={results:[{id:0,keyword:"wincher",position:{value:84,history:[{value:90},{value:89},{value:94},{value:98},{value:84}]}},{id:1,keyword:"rank tracker",position:{value:20,history:[{value:50},{value:30},{value:66},{value:15},{value:20}]}},{id:2,keyword:"performance",position:{value:2,history:[{value:44},{value:66},{value:18},{value:31},{value:2}]}}]},$=e=>{let{isBlurred:t,children:n}=e;return t?Object(r.createElement)(T,{className:"yoast yoast-table"},n):Object(r.createElement)("table",{className:"yoast yoast-table"},n)};$.propTypes={isBlurred:i.a.bool,children:i.a.any};const H=e=>{const{className:t,websiteId:n,isLoggedIn:o,onConnectAction:s,isConnectSuccess:i}=e,c=o?e.data:F,l=!o,d=(e=>e&&!Object(p.isEmpty)(e)&&!Object(p.isEmpty)(e.results))(c),h=Object(j.b)(o);return Object(r.createElement)(_,{className:t},o&&Object(r.createElement)(j.a,{isTitleShortened:!0,trackingInfo:h}),Object(r.createElement)(q,a()({},e,{data:c,isConnectSuccess:i&&o})),d&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(W,{isLoggedIn:o}),Object(r.createElement)(x,null,Object(r.createElement)($,{isBlurred:l},Object(r.createElement)("thead",null,Object(r.createElement)("tr",null,Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Keyphrase","wordpress-seo")},Object(u.__)("Keyphrase","wordpress-seo")),Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Position","wordpress-seo")},Object(u.__)("Position","wordpress-seo")),Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Position over time","wordpress-seo")},Object(u.__)("Position over time","wordpress-seo")),Object(r.createElement)("td",{className:"yoast-table--nobreak"}))),Object(r.createElement)("tbody",null,Object(p.map)(c.results,(e,t)=>Object(r.createElement)(P,{key:"keyphrase-"+t,keyphrase:e,websiteId:n,isBlurred:l})))),Object(r.createElement)(R,{isLoggedIn:o,onConnectAction:s})),Object(r.createElement)("p",{style:{marginBottom:0,position:"relative"}},Object(r.createElement)(v,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(u.sprintf)(/* translators: %s expands to Wincher */
Object(u.__)("Get more insights over at %s","wordpress-seo"),"Wincher")))))};H.propTypes={className:i.a.string,data:i.a.object.isRequired,websiteId:i.a.string.isRequired,isLoggedIn:i.a.bool.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired,onConnectAction:i.a.func.isRequired},H.defaultProps={className:"wincher-seo-performance"};var B=H,M=n(38),K=n(116);class z extends r.Component{constructor(){super(),this.state={wincherData:{},wincherWebsiteId:wpseoWincherDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoWincherDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1,isConnectSuccess:!1,isNetworkError:!1},this.onConnect=this.onConnect.bind(this),this.getWincherData=this.getWincherData.bind(this),this.performAuthenticationRequest=this.performAuthenticationRequest.bind(this),this.onConnectSuccess=this.onConnectSuccess.bind(this),this.onNetworkDisconnectionError=this.onNetworkDisconnectionError.bind(this)}componentDidMount(){const e=jQuery("#wpseo-wincher-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",()=>{this.fetchData()})}fetchData(){this.state.isDataFetched||(this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}async getWincherData(){const e=await Object(M.d)();if(200===e.status){const t=Object(p.filter)(e.results,e=>!Object(p.isEmpty)(e.position)),n=Object(p.sortBy)(t,e=>e.position.value).splice(0,5);this.setState({wincherData:{results:n,status:e.status}})}else this.setState({wincherData:{results:[],status:e.status}})}async performAuthenticationRequest(e){if(200!==(await Object(M.a)(e)).status)return;this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:e.websiteId.toString()}),await this.getWincherData();const t=this.loginPopup.getPopup();t&&t.close()}async onConnectSuccess(e){this.setState({isConnectSuccess:!0,isNetworkError:!1}),await this.performAuthenticationRequest(e)}async onNetworkDisconnectionError(){this.setState({isConnectSuccess:!1,isNetworkError:!0})}async onConnect(){if(this.loginPopup&&!this.loginPopup.isClosed())return void this.loginPopup.focus();const{url:e}=await Object(M.c)();e&&void 0!==e?(this.loginPopup=new K.a(e,{success:{type:"wincher:oauth:success",callback:e=>this.onConnectSuccess(e)},error:{type:"wincher:oauth:error",callback:()=>{}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup()):this.onNetworkDisconnectionError()}render(){return Object(r.createElement)(B,{key:"wincher-performance-report",data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,isConnectSuccess:this.state.isConnectSuccess,isNetworkError:this.state.isNetworkError,onConnectAction:this.onConnect})}}const V=document.getElementById("yoast-seo-wincher-dashboard-widget");V&&Object(r.render)(Object(r.createElement)(z,null),V)},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(28),o=n.n(r);async function a(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;try{const o=await e();return!!o&&(o.status===r?t(o):n(o))}catch(e){console.error(e.message)}}async function s(e){try{return await o()(e)}catch(e){return e.error&&e.status?e:e instanceof Response&&await e.json()}}},38:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return p}));var r=n(4),o=n(32);async function a(){return await Object(o.a)({path:"yoast/v1/wincher/authorization-url",method:"GET"})}async function s(){return await Object(o.a)({path:"yoast/v1/wincher/account/limit",method:"GET"})}async function i(){return await Object(o.a)({path:"yoast/v1/wincher/account/upgrade-campaign",method:"GET"})}async function c(e){const{code:t,websiteId:n}=e;return await Object(o.a)({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:t,websiteId:n}})}async function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return await Object(o.a)({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:e,permalink:n,startAt:t},signal:r})}async function u(e){return Object(r.isArray)(e)||(e=[e]),await Object(o.a)({path:"yoast/v1/wincher/keyphrases/track",method:"POST",data:{keyphrases:e}})}async function p(e){return await Object(o.a)({path:"yoast/v1/wincher/keyphrases/untrack",method:"DELETE",data:{keyphraseID:e}})}},4:function(e,t){e.exports=window.lodash},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(3)),a=i(n(161)),s=i(n(164));function i(e){return e&&e.__esModule?e:{default:e}}var c=void 0;t.default=function(e){var t=e.mixedString,n=e.components,i=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var l=(0,s.default)(t);try{return function e(t,n){var s,i,l,u,p,d,h,b,m=[],f={};for(d=0;d<t.length;d++)if("string"!==(p=t[d]).type){if(!n.hasOwnProperty(p.value)||void 0===n[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(n[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+c);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){s=n[p.value],l=d;break}m.push(n[p.value])}else m.push(p.value);return s&&(u=function(e,t){var n,r,o=t[e],a=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){a++;continue}if("componentClose"===n.type){if(0===a)return r;a--}}throw new Error("Missing closing component token `"+o.value+"`")}(l,t),h=e(t.slice(l+1,u),n),i=o.default.cloneElement(s,{},h),m.push(i),u<t.length-1&&(b=e(t.slice(u+1),n),m=m.concat(b))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(f["interpolation-child-"+t]=e)})),(0,a.default)(f))}(l,n)}catch(e){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},8:function(e,t){e.exports=window.yoast.styledComponents},82:function(e,t,n){"use strict";var r=n(0),o=n(2),a=n.n(o),s=n(1);const i=e=>{let{data:t,mapChartDataToTableData:n,dataTableCaption:o,dataTableHeaderLabels:a,isDataTableVisuallyHidden:i}=e;return t.length!==a.length?Object(r.createElement)("p",null,Object(s.__)("The number of headers and header labels don't match.","wordpress-seo")):Object(r.createElement)("div",{className:i?"screen-reader-text":null},Object(r.createElement)("table",null,Object(r.createElement)("caption",null,o),Object(r.createElement)("thead",null,Object(r.createElement)("tr",null,a.map((e,t)=>Object(r.createElement)("th",{key:t},e)))),Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,t.map((e,t)=>Object(r.createElement)("td",{key:t},n(e.y)))))))};i.propTypes={data:a.a.arrayOf(a.a.shape({x:a.a.number,y:a.a.number})).isRequired,mapChartDataToTableData:a.a.func,dataTableCaption:a.a.string.isRequired,dataTableHeaderLabels:a.a.array.isRequired,isDataTableVisuallyHidden:a.a.bool},i.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};var c=i;const l=e=>{let{data:t,width:n,height:o,fillColor:a,strokeColor:s,strokeWidth:i,className:l,mapChartDataToTableData:u,dataTableCaption:p,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h}=e;const b=Math.max(1,Math.max(...t.map(e=>e.x))),m=Math.max(1,Math.max(...t.map(e=>e.y))),f=o-i,y=t.map(e=>`${e.x/b*n},${f-e.y/m*f+i}`).join(" "),g=`0,${f+i} `+y+` ${n},${f+i}`;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("svg",{width:n,height:o,viewBox:`0 0 ${n} ${o}`,className:l,role:"img","aria-hidden":"true",focusable:"false"},Object(r.createElement)("polygon",{fill:a,points:g}),Object(r.createElement)("polyline",{fill:"none",stroke:s,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",points:y})),u&&Object(r.createElement)(c,{data:t,mapChartDataToTableData:u,dataTableCaption:p,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h}))};l.propTypes={data:a.a.arrayOf(a.a.shape({x:a.a.number,y:a.a.number})).isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,fillColor:a.a.string,strokeColor:a.a.string,strokeWidth:a.a.number,className:a.a.string,mapChartDataToTableData:a.a.func,dataTableCaption:a.a.string.isRequired,dataTableHeaderLabels:a.a.array.isRequired,isDataTableVisuallyHidden:a.a.bool},l.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0},t.a=l},9:function(e,t){e.exports=window.yoast.componentsNew},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));var r=n(10),o=n.n(r),a=n(0),s=n(8),i=n.n(s),c=n(42),l=n.n(c),u=n(2),p=n.n(u),d=n(1),h=n(9),b=n(17),m=n(11),f=n(38);const y=i.a.p`
	color: ${b.colors.$color_pink_dark};
	font-size: 14px;
	font-weight: 700;
	margin: 13px 0 10px;
`,g=i()(h.SvgIcon)`
	margin-right: 5px;
	vertical-align: middle;
`,w=i.a.button`
	position: absolute;
	top: 9px;
	right: 9px;
	border: none;
    background: none;
    cursor: pointer;
`,j=i.a.p`
	font-size: 13px;
	font-weight: 500;
	margin: 10px 0 13px;
`,O=i.a.div`
	position: relative;
	background: ${e=>e.isTitleShortened?"#F5F7F7":"transparent"};
	border: 1px solid #C7C7C7;
	border-left: 4px solid${b.colors.$color_pink_dark};
	padding: 0 16px;
	margin-bottom: 1.5em;
`,v=e=>{const[t,n]=Object(a.useState)(null);return Object(a.useEffect)(()=>{e&&!t&&Object(f.b)().then(e=>n(e))},[t]),t};v.propTypes={limit:p.a.bool.isRequired};const E=e=>{let{limit:t,usage:n,isTitleShortened:r,isFreeAccount:o}=e;const s=Object(d.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
Object(d.__)("Your are tracking %1$s out of %2$s keyphrases included in your free account.","wordpress-seo"),n,t),i=Object(d.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
Object(d.__)("Your are tracking %1$s out of %2$s keyphrases included in your account.","wordpress-seo"),n,t),c=o?s:i,l=Object(d.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
Object(d.__)("Keyphrases tracked: %1$s/%2$s","wordpress-seo"),n,t),u=r?l:c;return Object(a.createElement)(y,null,r&&Object(a.createElement)(g,{icon:"exclamation-triangle",color:b.colors.$color_pink_dark,size:"14px"}),u)};E.propTypes={limit:p.a.number.isRequired,usage:p.a.number.isRequired,isTitleShortened:p.a.bool,isFreeAccount:p.a.bool};const k=Object(m.makeOutboundLink)(),_=e=>{let{discount:t,months:n}=e;const r=Object(a.createElement)(k,{href:wpseoAdminGlobalL10n["links.wincher.upgrade"],style:{fontWeight:600}},Object(d.sprintf)(/* Translators: %s : Expands to "Wincher". */
Object(d.__)("Click here to upgrade your %s plan","wordpress-seo"),"Wincher"));if(!t||!n)return Object(a.createElement)(j,null,r);const o=100*t,s=Object(d.sprintf)(
/* Translators: %1$s expands to upgrade account link.
   * %2$s expands to the upgrade discount value.
   * %3$s expands to the upgrade discount duration e.g. 2 months.
   */
Object(d.__)("%1$s and get an exclusive %2$s discount for %3$s month(s).","wordpress-seo"),"{{wincherAccountUpgradeLink/}}",o+"%",n);return Object(a.createElement)(j,null,l()({mixedString:s,components:{wincherAccountUpgradeLink:r}}))};_.propTypes={discount:p.a.number,months:p.a.number};const T=e=>{let{onClose:t,isTitleShortened:n,trackingInfo:r}=e;const s=(()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)(()=>{e||Object(f.e)().then(e=>t(e))},[e]),e})();if(null===r)return null;const{limit:i,usage:c}=r;if(!(i&&c/i>=.8))return null;const l=Boolean(null==s?void 0:s.discount);return Object(a.createElement)(O,{isTitleShortened:n},t&&Object(a.createElement)(w,{"aria-label":Object(d.__)("Close the upgrade callout","wordpress-seo"),onClick:t},Object(a.createElement)(h.SvgIcon,{icon:"times-circle",color:b.colors.$color_pink_dark,size:"14px"})),Object(a.createElement)(E,o()({},r,{isTitleShortened:n,isFreeAccount:l})),Object(a.createElement)(_,{discount:null==s?void 0:s.discount,months:null==s?void 0:s.months}))};T.propTypes={onClose:p.a.func,isTitleShortened:p.a.bool,trackingInfo:p.a.object},t.a=T}});