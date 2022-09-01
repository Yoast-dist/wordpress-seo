!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=281)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return g}));var a=n(0),r=n(1),s=n.n(r),o=n(2),i=n(4),c=n(86),l=n.n(c),u=n(7),d=n(9),p=n(76),h=()=>Object(a.createElement)("p",{className:"yoast-wincher-seo-performance-modal__loading-message"},Object(o.__)("Tracking the ranking position...","wordpress-seo")," ",Object(a.createElement)(u.SvgIcon,{icon:"loading-spinner"}));const b=Object(d.makeOutboundLink)();function m(e){return Math.round(100*e)}function f(e){let{chartData:t}=e;if(Object(i.isEmpty)(t)||Object(i.isEmpty)(t.position))return"?";const n=function(e){return Array.from({length:e.position.history.length},(e,t)=>t+1).map(e=>Object(o.sprintf)(Object(o._n)("%d day","%d days",e,"wordpress-seo"),e))}(t),r=t.position.history.map((e,t)=>({x:t,y:101-e.value}));return Object(a.createElement)(p.a,{width:66,height:24,data:r,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",className:"yoast-related-keyphrases-modal__chart",mapChartDataToTableData:m,dataTableCaption:Object(o.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:n})}function y(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}function g(e){const{keyphrase:t,rowData:n,onTrackKeyphrase:r,onUntrackKeyphrase:s,isFocusKeyphrase:c,isDisabled:d,isLoading:p}=e,m=!Object(i.isEmpty)(n),g=Object(a.useCallback)(()=>{d||(m?s(t,n.id):r(t))},[t,r,s,m,n,d]);return Object(a.createElement)("tr",null,Object(a.createElement)("td",{className:"yoast-table--nopadding"},function(e){let{keyphrase:t,isEnabled:n,toggleAction:r,isLoading:s}=e;return s?Object(a.createElement)(u.SvgIcon,{icon:"loading-spinner"}):Object(a.createElement)(u.Toggle,{id:"toggle-keyphrase-tracking-"+t,className:"wincher-toggle",isEnabled:n,onSetToggleState:r,showToggleStateLabel:!1})}({keyphrase:t,isEnabled:m,toggleAction:g,isLoading:p})),Object(a.createElement)("td",null,t,c&&Object(a.createElement)("span",null,"*")),function(e){const{rowData:t,websiteId:n}=e,r=!Object(i.isEmpty)(t),s=t&&t.updated_at&&l()(t.updated_at)>=l()().subtract(7,"days"),c=t?Object(o.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",n,t.id):null;return r?s?Object(a.createElement)(a.Fragment,null,Object(a.createElement)("td",null,y(t)),Object(a.createElement)("td",{className:"yoast-table--nopadding"},Object(a.createElement)(f,{chartData:t})),Object(a.createElement)("td",{className:"yoast-table--nobreak"},Object(a.createElement)(b,{href:c},Object(o.__)("View","wordpress-seo")))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(a.createElement)(h,null))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("td",null,"?"),Object(a.createElement)("td",{className:"yoast-table--nopadding"},"?"),Object(a.createElement)("td",{className:"yoast-table--nobreak"}))}(e))}f.propTypes={chartData:s.a.object},f.defaultProps={chartData:{}},g.propTypes={rowData:s.a.object,keyphrase:s.a.string.isRequired,onTrackKeyphrase:s.a.func,onUntrackKeyphrase:s.a.func,isFocusKeyphrase:s.a.bool,isDisabled:s.a.bool,isLoading:s.a.bool,websiteId:s.a.string},g.defaultProps={rowData:{},onTrackKeyphrase:()=>{},onUntrackKeyphrase:()=>{},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.url=e,this.origin=new URL(e).origin,this.eventHandlers=Object.assign({success:{type:"",callback:()=>{}},error:{type:"",callback:()=>{}}},t),this.options=Object.assign({height:570,width:340,title:""},n),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}createPopup(){const{height:e,width:t,title:n}=this.options,a=["top="+(window.top.outerHeight/2+window.top.screenY-e/2),"left="+(window.top.outerWidth/2+window.top.screenX-t/2),"width="+t,"height="+e,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,n,a.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}async messageHandler(e){const{data:t,source:n,origin:a}=e;a===this.origin&&this.popup===n&&(t.type===this.eventHandlers.success.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.success.callback(t)),t.type===this.eventHandlers.error.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.error.callback(t)))}getPopup(){return this.popup}isClosed(){return!this.popup||this.popup.closed}focus(){this.isClosed()||this.popup.focus()}}},108:function(e,t,n){"use strict";var a=n(0),r=n(1),s=n.n(r),o=n(2),i=n(24),c=n.n(i),l=n(7);const u=e=>{const t=Object(o.sprintf)(
/* translators: %s expands to a link to open the Wincher login popup. */
Object(o.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"{{reconnectToWincher/}}","Wincher");return Object(a.createElement)(l.Alert,{type:"error"},c()({mixedString:t,components:{reconnectToWincher:Object(a.createElement)("a",{href:"#",onClick:t=>{t.preventDefault(),e.onReconnect()}},Object(o.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(o.__)("reconnect to %s","wordpress-seo"),"Wincher"))}}))};u.propTypes={onReconnect:s.a.func.isRequired},t.a=u},115:function(e,t,n){"use strict";var a=n(3),r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,s=n(83),o=n(116),i=n(117),c="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,a={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return a[e]}))):t.toString(36);var n,a}var u=/\/+/g;function d(e){return(""+e).replace(u,"$&/")}var p,h,b=m,m=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function f(e,t,n,a){this.result=e,this.keyPrefix=t,this.func=n,this.context=a,this.count=0}function y(e,t,n){var r,o,i=e.result,c=e.keyPrefix,l=e.func,u=e.context,p=l.call(u,t,e.count++);Array.isArray(p)?g(p,i,n,s.thatReturnsArgument):null!=p&&(a.isValidElement(p)&&(r=p,o=c+(!p.key||t&&t.key===p.key?"":d(p.key)+"/")+n,p=a.cloneElement(r,{key:o},void 0!==r.props?r.props.children:void 0)),i.push(p))}function g(e,t,n,a,s){var i="";null!=n&&(i=d(n)+"/");var u=f.getPooled(t,i,a,s);!function(e,t,n){null==e||function e(t,n,a,s){var i,u=typeof t;if("undefined"!==u&&"boolean"!==u||(t=null),null===t||"string"===u||"number"===u||"object"===u&&t.$$typeof===r)return a(s,t,""===n?"."+l(t,0):n),1;var d=0,p=""===n?".":n+":";if(Array.isArray(t))for(var h=0;h<t.length;h++)d+=e(i=t[h],p+l(i,h),a,s);else{var b=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(b)for(var m,f=b.call(t),y=0;!(m=f.next()).done;)d+=e(i=m.value,p+l(i,y++),a,s);else if("object"===u){var g=""+t;o(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(t).join(", ")+"}":g,"")}}return d}(e,"",t,n)}(e,y,u),f.release(u)}f.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},p=function(e,t,n,a){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n,a),r}return new this(e,t,n,a)},(h=f).instancePool=[],h.getPooled=p||b,h.poolSize||(h.poolSize=10),h.release=function(e){o(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(a.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;o(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)g(e[n],t,n,s.thatReturnsArgument);return t}},116:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,s,o,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,s,o,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},117:function(e,t,n){"use strict";var a=n(83);e.exports=a},118:function(e,t,n){"use strict";function a(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(a)}},144:function(e,t){e.exports=window.yoast.analysisReport},15:function(e,t){e.exports=window.yoast.styleGuide},2:function(e,t){e.exports=window.wp.i18n},22:function(e,t){e.exports=window.wp.apiFetch},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(n(3)),s=i(n(115)),o=i(n(118));function i(e){return e&&e.__esModule?e:{default:e}}var c=void 0;t.default=function(e){var t=e.mixedString,n=e.components,i=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":a(n))){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var l=(0,o.default)(t);try{return function e(t,n){var o,i,l,u,d,p,h,b,m=[],f={};for(p=0;p<t.length;p++)if("string"!==(d=t[p]).type){if(!n.hasOwnProperty(d.value)||void 0===n[d.value])throw new Error("Invalid interpolation, missing component node: `"+d.value+"`");if("object"!==a(n[d.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+d.value+"`","\n> "+c);if("componentClose"===d.type)throw new Error("Missing opening component token: `"+d.value+"`");if("componentOpen"===d.type){o=n[d.value],l=p;break}m.push(n[d.value])}else m.push(d.value);return o&&(u=function(e,t){var n,a,r=t[e],s=0;for(a=e+1;a<t.length;a++)if((n=t[a]).value===r.value){if("componentOpen"===n.type){s++;continue}if("componentClose"===n.type){if(0===s)return a;s--}}throw new Error("Missing closing component token `"+r.value+"`")}(l,t),h=e(t.slice(l+1,u),n),i=r.default.cloneElement(o,{},h),m.push(i),u<t.length-1&&(b=e(t.slice(u+1),n),m=m.concat(b))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(f["interpolation-child-"+t]=e)})),(0,s.default)(f))}(l,n)}catch(e){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(7),s=n(15),o=n(144),i=n(9),c=n(1),l=n.n(c),u=n(8),d=n.n(u),p=n(2),h=n(4),b=n(24),m=n.n(b);const f=Object(i.makeOutboundLink)(),y=Object(i.makeOutboundLink)();var g=()=>{const e=Object(p.sprintf)(Object(p.__)(
/* translators: %1$s expands to a link to Wincher, %2$s expands to a link to the keyphrase tracking article on Yoast.com */
"Connect %1$s with %2$s to track the ranking position of your site in the search results based on your keyphrase(s). %3$s","wordpress-seo"),"Yoast SEO","{{wincherLink/}}","{{wincherReadMoreLink/}}");return Object(a.createElement)("p",null,m()({mixedString:e,components:{wincherLink:Object(a.createElement)(f,{href:wpseoAdminGlobalL10n["links.wincher.website"]},"Wincher"),wincherReadMoreLink:Object(a.createElement)(y,{href:wpseoAdminL10n["shortlinks.wincher.seo_performance"]},Object(p.__)("Read more about keyphrase tracking with Wincher","wordpress-seo"))}}))},w=()=>Object(a.createElement)(r.Alert,{type:"warning"},Object(p.sprintf)(
/* translators: %s: Expands to "Wincher". */
Object(p.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher")),j=n(103),O=n(108);const v=Object(i.makeOutboundLink)(),E=Object(i.makeOutboundLink)(),k=Object(i.makeOutboundLink)(),_=d.a.div`
`,T=d.a.div`
	font-size: 14px;
`,D=d.a.h3`
	margin: 8px 0;
	font-size: 1em;
`,S=d.a.div`
	width: 100%;
	overflow-y: auto;
`,L=e=>{const{websiteId:t,id:n}=e;return Object(p.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",t,n)},x=e=>{const{className:t,onConnectAction:n}=e;return Object(a.createElement)(T,{className:t+"__text"},Object(a.createElement)(g,null),Object(a.createElement)("div",{className:"yoast"},Object(a.createElement)(r.NewButton,{variant:"secondary",id:"yoast-connect-wincher-dashboard-widget",onClick:n},Object(p.sprintf)(
/* translators: %s expands to Wincher */
Object(p.__)("Connect with %s","wordpress-seo"),"Wincher"))))};x.propTypes={className:l.a.string,onConnectAction:l.a.func.isRequired},x.defaultProps={className:""};const P=e=>{let{keyphrase:t,websiteId:n}=e;const{id:r,keyword:s}=t;return Object(a.createElement)("tr",null,Object(a.createElement)("td",null,s),Object(a.createElement)("td",null,Object(j.c)(t)),Object(a.createElement)("td",{className:"yoast-table--nopadding"},Object(a.createElement)(j.a,{chartData:t})),Object(a.createElement)("td",{className:"yoast-table--nobreak"},Object(a.createElement)(v,{href:L({websiteId:n,id:r})},Object(p.__)("View","wordpress-seo"))))};P.propTypes={keyphrase:l.a.object.isRequired,websiteId:l.a.string.isRequired};const R=e=>{const{isLoggedIn:t,data:n,onConnectAction:r}=e;return t?n&&[401,403,404].includes(n.status)?Object(a.createElement)(O.a,{onReconnect:r}):!n||Object(h.isEmpty)(n.results)?Object(a.createElement)(w,null):null:Object(a.createElement)(x,e)};R.propTypes={isLoggedIn:l.a.bool.isRequired,data:l.a.object.isRequired,onConnectAction:l.a.func.isRequired};const C=()=>{const e=Object(p.sprintf)(
/* translators: %s expands to a link to Wincher login */
Object(p.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"{{wincherAccountLink/}}");return Object(a.createElement)("p",null,m()({mixedString:e,components:{wincherAccountLink:Object(a.createElement)(k,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(p.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(p.__)("%s account","wordpress-seo"),"Wincher"))}}))},I=e=>{const{className:t,websiteId:n,isLoggedIn:r,data:s}=e;return Object(a.createElement)(_,{className:t},Object(a.createElement)(D,{className:t+"__header"},Object(p.__)("Top performing keyphrases on your site","wordpress-seo")),Object(a.createElement)(R,e),r&&s&&!Object(h.isEmpty)(s)&&!Object(h.isEmpty)(s.results)&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(C,null),Object(a.createElement)(S,null,Object(a.createElement)("table",{className:"yoast yoast-table"},Object(a.createElement)("thead",null,Object(a.createElement)("tr",null,Object(a.createElement)("th",{scope:"col",abbr:Object(p.__)("Keyphrase","wordpress-seo")},Object(p.__)("Keyphrase","wordpress-seo")),Object(a.createElement)("th",{scope:"col",abbr:Object(p.__)("Position","wordpress-seo")},Object(p.__)("Position","wordpress-seo")),Object(a.createElement)("th",{scope:"col",abbr:Object(p.__)("Position over time","wordpress-seo")},Object(p.__)("Position over time","wordpress-seo")),Object(a.createElement)("td",{className:"yoast-table--nobreak"}))),Object(a.createElement)("tbody",null,Object(h.map)(s.results,(e,t)=>Object(a.createElement)(P,{key:"keyphrase-"+t,keyphrase:e,websiteId:n}))))),Object(a.createElement)("p",{style:{marginBottom:0,position:"relative"}},Object(a.createElement)(E,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(p.sprintf)(
/* translators: %s expands to Wincher */
Object(p.__)("Get more insights over at %s","wordpress-seo"),"Wincher")))))};I.propTypes={className:l.a.string,data:l.a.object.isRequired,websiteId:l.a.string.isRequired,isLoggedIn:l.a.bool.isRequired},I.defaultProps={className:"wincher-seo-performance"};var W=I,A=n(44),N=n(107);class H extends a.Component{constructor(){super(),this.state={statistics:null,feed:null,wincherData:{},wincherWebsiteId:wpseoDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1},this.onConnect=this.onConnect.bind(this),this.getWincherData=this.getWincherData.bind(this),this.performAuthenticationRequest=this.performAuthenticationRequest.bind(this)}componentDidMount(){const e=jQuery("#wpseo-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",()=>{this.fetchData()})}fetchData(){this.state.isDataFetched||(this.getStatistics(),this.getFeed(),this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}static getColorFromScore(e){return s.colors["$color_"+e]||s.colors.$color_grey}getStatistics(){wpseoApi.get("statistics",e=>{const t={};e&&e.seo_scores&&(t.seoScores=e.seo_scores.map(e=>({value:parseInt(e.count,10),color:H.getColorFromScore(e.seo_rank),html:`<a href="${e.link}">${e.label}</a>`})),t.header=jQuery(`<div>${e.header}</div>`).text(),this.setState({statistics:t}))})}getFeed(){Object(i.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then(e=>{e.items=e.items.map(e=>(e.description=jQuery(`<div>${e.description}</div>`).text(),e.description=e.description.replace(`The post ${e.title} appeared first on Yoast.`,"").trim(),e)),this.setState({feed:e})}).catch(e=>console.log(e))}async getWincherData(){const e=await Object(A.c)();if(200===e.status){const t=Object(h.filter)(e.results,e=>!Object(h.isEmpty)(e.position)),n=Object(h.sortBy)(t,e=>e.position.value).splice(0,5);this.setState({wincherData:{results:n,status:e.status}})}else this.setState({wincherData:{results:[],status:e.status}})}getSeoAssessment(){return null===this.state.statistics?null:Object(a.createElement)(o.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}getYoastFeed(){return null===this.state.feed?null:Object(a.createElement)(r.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}async performAuthenticationRequest(e){if(200!==(await Object(A.a)(e)).status)return;this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:e.websiteId.toString()}),await this.getWincherData();const t=this.loginPopup.getPopup();t&&t.close()}async onConnect(){if(this.loginPopup&&!this.loginPopup.isClosed())return void this.loginPopup.focus();const{url:e}=await Object(A.b)();this.loginPopup=new N.a(e,{success:{type:"wincher:oauth:success",callback:e=>this.performAuthenticationRequest(e)},error:{type:"wincher:oauth:error",callback:()=>{}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup()}getWincherSEOPerformance(){if("0"!==wpseoDashboardWidgetL10n.is_wincher_active&&this.state.wincherIsLoggedIn)return Object(a.createElement)(W,{key:"wincher-performance-report",data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,onConnectAction:this.onConnect})}render(){const e=[this.getSeoAssessment(),this.getWincherSEOPerformance(),this.getYoastFeed()].filter(e=>null!==e);return 0===e.length?null:Object(a.createElement)("div",null,e)}}const q=document.getElementById("yoast-seo-dashboard-widget");q&&Object(a.render)(Object(a.createElement)(H,null),q)},3:function(e,t){e.exports=window.React},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(22),r=n.n(a);async function s(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;try{const r=await e();return!!r&&(r.status===a?t(r):n(r))}catch(e){console.error(e.message)}}async function o(e){try{return await r()(e)}catch(e){return e.error&&e.status?e:e instanceof Response&&await e.json()}}},4:function(e,t){e.exports=window.lodash},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l}));var a=n(4),r=n(30);async function s(){return await Object(r.a)({path:"yoast/v1/wincher/authorization-url",method:"GET"})}async function o(e){const{code:t,websiteId:n}=e;return await Object(r.a)({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:t,websiteId:n}})}async function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;return await Object(r.a)({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:e,permalink:t},signal:n})}async function c(e){return Object(a.isArray)(e)||(e=[e]),await Object(r.a)({path:"yoast/v1/wincher/keyphrases/track",method:"POST",data:{keyphrases:e}})}async function l(e){return await Object(r.a)({path:"yoast/v1/wincher/keyphrases/untrack",method:"DELETE",data:{keyphraseID:e}})}},7:function(e,t){e.exports=window.yoast.componentsNew},76:function(e,t,n){"use strict";var a=n(0),r=n(1),s=n.n(r),o=n(2);const i=e=>{let{data:t,mapChartDataToTableData:n,dataTableCaption:r,dataTableHeaderLabels:s,isDataTableVisuallyHidden:i}=e;return t.length!==s.length?Object(a.createElement)("p",null,Object(o.__)("The number of headers and header labels don't match.","wordpress-seo")):Object(a.createElement)("div",{className:i?"screen-reader-text":null},Object(a.createElement)("table",null,Object(a.createElement)("caption",null,r),Object(a.createElement)("thead",null,Object(a.createElement)("tr",null,s.map((e,t)=>Object(a.createElement)("th",{key:t},e)))),Object(a.createElement)("tbody",null,Object(a.createElement)("tr",null,t.map((e,t)=>Object(a.createElement)("td",{key:t},n(e.y)))))))};i.propTypes={data:s.a.arrayOf(s.a.shape({x:s.a.number,y:s.a.number})).isRequired,mapChartDataToTableData:s.a.func,dataTableCaption:s.a.string.isRequired,dataTableHeaderLabels:s.a.array.isRequired,isDataTableVisuallyHidden:s.a.bool},i.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};var c=i;const l=e=>{let{data:t,width:n,height:r,fillColor:s,strokeColor:o,strokeWidth:i,className:l,mapChartDataToTableData:u,dataTableCaption:d,dataTableHeaderLabels:p,isDataTableVisuallyHidden:h}=e;const b=Math.max(1,Math.max(...t.map(e=>e.x))),m=Math.max(1,Math.max(...t.map(e=>e.y))),f=r-i,y=t.map(e=>`${e.x/b*n},${f-e.y/m*f+i}`).join(" "),g=`0,${f+i} `+y+` ${n},${f+i}`;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("svg",{width:n,height:r,viewBox:`0 0 ${n} ${r}`,className:l,role:"img","aria-hidden":"true",focusable:"false"},Object(a.createElement)("polygon",{fill:s,points:g}),Object(a.createElement)("polyline",{fill:"none",stroke:o,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",points:y})),u&&Object(a.createElement)(c,{data:t,mapChartDataToTableData:u,dataTableCaption:d,dataTableHeaderLabels:p,isDataTableVisuallyHidden:h}))};l.propTypes={data:s.a.arrayOf(s.a.shape({x:s.a.number,y:s.a.number})).isRequired,width:s.a.number.isRequired,height:s.a.number.isRequired,fillColor:s.a.string,strokeColor:s.a.string,strokeWidth:s.a.number,className:s.a.string,mapChartDataToTableData:s.a.func,dataTableCaption:s.a.string.isRequired,dataTableHeaderLabels:s.a.array.isRequired,isDataTableVisuallyHidden:s.a.bool},l.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0},t.a=l},8:function(e,t){e.exports=window.yoast.styledComponents},83:function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},86:function(e,t){e.exports=window.moment},9:function(e,t){e.exports=window.yoast.helpers}});