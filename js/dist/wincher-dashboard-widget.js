!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=296)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.yoast.styledComponents},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.url=e,this.origin=new URL(e).origin,this.eventHandlers=Object.assign({success:{type:"",callback:()=>{}},error:{type:"",callback:()=>{}}},t),this.options=Object.assign({height:570,width:340,title:""},n),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}createPopup(){const{height:e,width:t,title:n}=this.options,r=["top="+(window.top.outerHeight/2+window.top.screenY-e/2),"left="+(window.top.outerWidth/2+window.top.screenX-t/2),"width="+t,"height="+e,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,n,r.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}async messageHandler(e){const{data:t,source:n,origin:r}=e;r===this.origin&&this.popup===n&&(t.type===this.eventHandlers.success.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.success.callback(t)),t.type===this.eventHandlers.error.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.error.callback(t)))}getPopup(){return this.popup}isClosed(){return!this.popup||this.popup.closed}focus(){this.isClosed()||this.popup.focus()}}},106:function(e,t,n){"use strict";var r=n(0),a=n(2),o=n.n(a),s=n(1),i=n(25),c=n.n(i),l=n(7);const u=e=>{const t=Object(s.sprintf)(
/* translators: %s expands to a link to open the Wincher login popup. */
Object(s.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"{{reconnectToWincher/}}","Wincher");return Object(r.createElement)(l.Alert,{type:"error",className:e.className},c()({mixedString:t,components:{reconnectToWincher:Object(r.createElement)("a",{href:"#",onClick:t=>{t.preventDefault(),e.onReconnect()}},Object(s.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(s.__)("reconnect to %s","wordpress-seo"),"Wincher"))}}))};u.propTypes={onReconnect:o.a.func.isRequired,className:o.a.string},u.defaultProps={className:""},t.a=u},11:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},122:function(e,t,n){"use strict";var r=n(3),a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=n(90),s=n(123),i=n(124),c="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}var u=/\/+/g;function p(e){return(""+e).replace(u,"$&/")}var d,h,b=m,m=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function f(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function y(e,t,n){var a,s,i=e.result,c=e.keyPrefix,l=e.func,u=e.context,d=l.call(u,t,e.count++);Array.isArray(d)?w(d,i,n,o.thatReturnsArgument):null!=d&&(r.isValidElement(d)&&(a=d,s=c+(!d.key||t&&t.key===d.key?"":p(d.key)+"/")+n,d=r.cloneElement(a,{key:s},void 0!==a.props?a.props.children:void 0)),i.push(d))}function w(e,t,n,r,o){var i="";null!=n&&(i=p(n)+"/");var u=f.getPooled(t,i,r,o);!function(e,t,n){null==e||function e(t,n,r,o){var i,u=typeof t;if("undefined"!==u&&"boolean"!==u||(t=null),null===t||"string"===u||"number"===u||"object"===u&&t.$$typeof===a)return r(o,t,""===n?"."+l(t,0):n),1;var p=0,d=""===n?".":n+":";if(Array.isArray(t))for(var h=0;h<t.length;h++)p+=e(i=t[h],d+l(i,h),r,o);else{var b=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(b)for(var m,f=b.call(t),y=0;!(m=f.next()).done;)p+=e(i=m.value,d+l(i,y++),r,o);else if("object"===u){var w=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(t).join(", ")+"}":w,"")}}return p}(e,"",t,n)}(e,y,u),f.release(u)}f.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,n,r){if(this.instancePool.length){var a=this.instancePool.pop();return this.call(a,e,t,n,r),a}return new this(e,t,n,r)},(h=f).instancePool=[],h.getPooled=d||b,h.poolSize||(h.poolSize=10),h.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,o.thatReturnsArgument);return t}},123:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,s,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},124:function(e,t,n){"use strict";var r=n(90);e.exports=r},125:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},2:function(e,t){e.exports=window.yoast.propTypes},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(n(3)),o=i(n(122)),s=i(n(125));function i(e){return e&&e.__esModule?e:{default:e}}var c=void 0;t.default=function(e){var t=e.mixedString,n=e.components,i=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var l=(0,s.default)(t);try{return function e(t,n){var s,i,l,u,p,d,h,b,m=[],f={};for(d=0;d<t.length;d++)if("string"!==(p=t[d]).type){if(!n.hasOwnProperty(p.value)||void 0===n[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(n[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+c);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){s=n[p.value],l=d;break}m.push(n[p.value])}else m.push(p.value);return s&&(u=function(e,t){var n,r,a=t[e],o=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===a.value){if("componentOpen"===n.type){o++;continue}if("componentClose"===n.type){if(0===o)return r;o--}}throw new Error("Missing closing component token `"+a.value+"`")}(l,t),h=e(t.slice(l+1,u),n),i=a.default.cloneElement(s,{},h),m.push(i),u<t.length-1&&(b=e(t.slice(u+1),n),m=m.concat(b))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(f["interpolation-child-"+t]=e)})),(0,o.default)(f))}(l,n)}catch(e){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(28),a=n.n(r);async function o(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;try{const a=await e();return!!a&&(a.status===r?t(a):n(a))}catch(e){console.error(e.message)}}async function s(e){try{return await a()(e)}catch(e){return e.error&&e.status?e:e instanceof Response&&await e.json()}}},28:function(e,t){e.exports=window.wp.apiFetch},296:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),o=n.n(a),s=n(2),i=n.n(s),c=n(10),l=n.n(c),u=n(1),p=n(4),d=n(9),h=n(7);const b=e=>Object(r.createElement)(h.Alert,{type:"warning",className:e.className},Object(u.sprintf)(
/* translators: %s: Expands to "Wincher". */
Object(u.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher"));b.propTypes={className:i.a.string},b.defaultProps={className:""};var m=b,f=n(99),y=n(106),w=n(25),g=n.n(w);const j=Object(d.makeOutboundLink)(),O=Object(d.makeOutboundLink)(),v=Object(d.makeOutboundLink)(),E=Object(d.makeOutboundLink)(),k=l.a.div`
	& .wincher-performance-report-alert {
		margin-bottom: 1em;
	}
`,T=l.a.table`
	pointer-events: none;
	user-select: none;
`,_=l.a.div`
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
`,D=l.a.p`
	top: 47%;
	left: 50%;
	position: absolute; 
`,S=e=>{const{websiteId:t,id:n}=e;return Object(u.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",t,n)},x=e=>{const{isLoggedIn:t,onConnectAction:n}=e;return t?null:Object(r.createElement)(D,null,Object(r.createElement)(h.NewButton,{onClick:n,variant:"primary",style:{left:"-50%",backgroundColor:"#2371B0"}},Object(u.sprintf)(
/* translators: %s expands to Wincher */
Object(u.__)("Connect with %s","wordpress-seo"),"Wincher")))};x.propTypes={isLoggedIn:i.a.bool.isRequired,onConnectAction:i.a.func.isRequired};const R=e=>{let{isBlurred:t,children:n}=e;return t?Object(r.createElement)("td",null,Object(r.createElement)(C,null,n)):Object(r.createElement)("td",null,n)};R.propTypes={isBlurred:i.a.bool,children:i.a.oneOfType([i.a.string,i.a.number,i.a.object])};const N=e=>{let{keyphrase:t,websiteId:n,isBlurred:a}=e;const{id:o,keyword:s}=t;return Object(r.createElement)("tr",null,Object(r.createElement)(R,{isBlurred:a},s),Object(r.createElement)(R,{isBlurred:a},Object(f.c)(t)),Object(r.createElement)(R,{isBlurred:a,className:"yoast-table--nopadding"},Object(r.createElement)(f.a,{chartData:t})),Object(r.createElement)(R,{isBlurred:a,className:"yoast-table--nobreak"},Object(r.createElement)(j,{href:S({websiteId:n,id:o})},Object(u.__)("View","wordpress-seo"))))};N.propTypes={keyphrase:i.a.object.isRequired,websiteId:i.a.string.isRequired,isBlurred:i.a.bool};const P=()=>Object(r.createElement)(h.Alert,{type:"error",className:"wincher-performance-report-alert"},Object(u.sprintf)(Object(u.__)("Network Error: Unable to connect to the server. Please check your internet connection and try again later.","wordpress-seo"))),L=e=>{const{data:t}=e;return!Object(p.isEmpty)(t)&&Object(p.isEmpty)(t.results)?Object(r.createElement)(h.Alert,{type:"success",className:"wincher-performance-report-alert"},Object(u.sprintf)(
/* translators: %1$s and %2$s: Expands to "Wincher". */
Object(u.__)('You have successfully connected with %1$s. Your %2$s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher","Wincher")):Object(r.createElement)(h.Alert,{type:"success",className:"wincher-performance-report-alert"},Object(u.sprintf)(
/* translators: %s: Expands to "Wincher". */
Object(u.__)("You have successfully connected with %s.","wordpress-seo"),"Wincher"))};L.propTypes={data:i.a.object.isRequired};const I=e=>{const{data:t,onConnectAction:n,isConnectSuccess:a,isNetworkError:o}=e;return o?Object(r.createElement)(P,{data:t}):a?Object(r.createElement)(L,{data:t}):t&&[401,403,404].includes(t.status)?Object(r.createElement)(y.a,{onReconnect:n,className:"wincher-performance-report-alert"}):null};I.propTypes={data:i.a.object.isRequired,onConnectAction:i.a.func.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired};const A=e=>{const{data:t}=e;return Object(r.createElement)(I,e)||(!t||Object(p.isEmpty)(t.results)?Object(r.createElement)(m,{className:"wincher-performance-report-alert"}):null)};A.propTypes={data:i.a.object.isRequired,onConnectAction:i.a.func.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired};const q=e=>{let{isLoggedIn:t}=e;const n=Object(u.sprintf)(
/* translators: %s expands to a link to Wincher login */
Object(u.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"{{wincherAccountLink/}}"),a=Object(u.sprintf)(
/* translators: %s expands to a link to Wincher login */
Object(u.__)("This overview will show you your top performing keyphrases in Google. Connect with %s to get started.","wordpress-seo"),"{{wincherLink/}}"),o=t?n:a;return Object(r.createElement)("p",null,g()({mixedString:o,components:{wincherAccountLink:Object(r.createElement)(v,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(u.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(u.__)("%s account","wordpress-seo"),"Wincher")),wincherLink:Object(r.createElement)(E,{href:wpseoAdminGlobalL10n["links.wincher.about"]},Object(u.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(u.__)("%s","wordpress-seo"),"Wincher"))}}))};q.propTypes={isLoggedIn:i.a.bool.isRequired};const W={results:[{id:0,keyword:"wincher",position:{value:84,history:[{value:90},{value:89},{value:94},{value:98},{value:84}]}},{id:1,keyword:"rank tracker",position:{value:20,history:[{value:50},{value:30},{value:66},{value:15},{value:20}]}},{id:2,keyword:"performance",position:{value:2,history:[{value:44},{value:66},{value:18},{value:31},{value:2}]}}]},H=e=>{let{isBlurred:t,children:n}=e;return t?Object(r.createElement)(T,{className:"yoast yoast-table"},n):Object(r.createElement)("table",{className:"yoast yoast-table"},n)};H.propTypes={isBlurred:i.a.bool,children:i.a.any};const B=e=>{const{className:t,websiteId:n,isLoggedIn:a,onConnectAction:s,isConnectSuccess:i}=e,c=a?e.data:W,l=!a;return Object(r.createElement)(k,{className:t},Object(r.createElement)(A,o()({},e,{data:c,isConnectSuccess:i&&a})),c&&!Object(p.isEmpty)(c)&&!Object(p.isEmpty)(c.results)&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(q,{isLoggedIn:a}),Object(r.createElement)(_,null,Object(r.createElement)(H,{isBlurred:l},Object(r.createElement)("thead",null,Object(r.createElement)("tr",null,Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Keyphrase","wordpress-seo")},Object(u.__)("Keyphrase","wordpress-seo")),Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Position","wordpress-seo")},Object(u.__)("Position","wordpress-seo")),Object(r.createElement)("th",{scope:"col",abbr:Object(u.__)("Position over time","wordpress-seo")},Object(u.__)("Position over time","wordpress-seo")),Object(r.createElement)("td",{className:"yoast-table--nobreak"}))),Object(r.createElement)("tbody",null,Object(p.map)(c.results,(e,t)=>Object(r.createElement)(N,{key:"keyphrase-"+t,keyphrase:e,websiteId:n,isBlurred:l})))),Object(r.createElement)(x,{isLoggedIn:a,onConnectAction:s})),Object(r.createElement)("p",{style:{marginBottom:0,position:"relative"}},Object(r.createElement)(O,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(u.sprintf)(
/* translators: %s expands to Wincher */
Object(u.__)("Get more insights over at %s","wordpress-seo"),"Wincher")))))};B.propTypes={className:i.a.string,data:i.a.object.isRequired,websiteId:i.a.string.isRequired,isLoggedIn:i.a.bool.isRequired,isConnectSuccess:i.a.bool.isRequired,isNetworkError:i.a.bool.isRequired,onConnectAction:i.a.func.isRequired},B.defaultProps={className:"wincher-seo-performance"};var M=B,F=n(38),$=n(105);class K extends r.Component{constructor(){super(),this.state={wincherData:{},wincherWebsiteId:wpseoWincherDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoWincherDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1,isConnectSuccess:!1,isNetworkError:!1},this.onConnect=this.onConnect.bind(this),this.getWincherData=this.getWincherData.bind(this),this.performAuthenticationRequest=this.performAuthenticationRequest.bind(this),this.onConnectSuccess=this.onConnectSuccess.bind(this),this.onNetworkDisconnectionError=this.onNetworkDisconnectionError.bind(this)}componentDidMount(){const e=jQuery("#wpseo-wincher-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",()=>{this.fetchData()})}fetchData(){this.state.isDataFetched||(this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}async getWincherData(){const e=await Object(F.c)();if(200===e.status){const t=Object(p.filter)(e.results,e=>!Object(p.isEmpty)(e.position)),n=Object(p.sortBy)(t,e=>e.position.value).splice(0,5);this.setState({wincherData:{results:n,status:e.status}})}else this.setState({wincherData:{results:[],status:e.status}})}async performAuthenticationRequest(e){if(200!==(await Object(F.a)(e)).status)return;this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:e.websiteId.toString()}),await this.getWincherData();const t=this.loginPopup.getPopup();t&&t.close()}async onConnectSuccess(e){this.setState({isConnectSuccess:!0,isNetworkError:!1}),await this.performAuthenticationRequest(e)}async onNetworkDisconnectionError(){this.setState({isConnectSuccess:!1,isNetworkError:!0})}async onConnect(){if(this.loginPopup&&!this.loginPopup.isClosed())return void this.loginPopup.focus();const{url:e}=await Object(F.b)();e&&void 0!==e?(this.loginPopup=new $.a(e,{success:{type:"wincher:oauth:success",callback:e=>this.onConnectSuccess(e)},error:{type:"wincher:oauth:error",callback:()=>{}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup()):this.onNetworkDisconnectionError()}render(){return Object(r.createElement)(M,{key:"wincher-performance-report",data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,isConnectSuccess:this.state.isConnectSuccess,isNetworkError:this.state.isNetworkError,onConnectAction:this.onConnect})}}const V=document.getElementById("yoast-seo-wincher-dashboard-widget");V&&Object(r.render)(Object(r.createElement)(K,null),V)},3:function(e,t){e.exports=window.React},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l}));var r=n(4),a=n(27);async function o(){return await Object(a.a)({path:"yoast/v1/wincher/authorization-url",method:"GET"})}async function s(e){const{code:t,websiteId:n}=e;return await Object(a.a)({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:t,websiteId:n}})}async function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;return await Object(a.a)({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:e,permalink:t},signal:n})}async function c(e){return Object(r.isArray)(e)||(e=[e]),await Object(a.a)({path:"yoast/v1/wincher/keyphrases/track",method:"POST",data:{keyphrases:e}})}async function l(e){return await Object(a.a)({path:"yoast/v1/wincher/keyphrases/untrack",method:"DELETE",data:{keyphraseID:e}})}},4:function(e,t){e.exports=window.lodash},7:function(e,t){e.exports=window.yoast.componentsNew},76:function(e,t,n){"use strict";var r=n(0),a=n(2),o=n.n(a),s=n(1);const i=e=>{let{data:t,mapChartDataToTableData:n,dataTableCaption:a,dataTableHeaderLabels:o,isDataTableVisuallyHidden:i}=e;return t.length!==o.length?Object(r.createElement)("p",null,Object(s.__)("The number of headers and header labels don't match.","wordpress-seo")):Object(r.createElement)("div",{className:i?"screen-reader-text":null},Object(r.createElement)("table",null,Object(r.createElement)("caption",null,a),Object(r.createElement)("thead",null,Object(r.createElement)("tr",null,o.map((e,t)=>Object(r.createElement)("th",{key:t},e)))),Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,t.map((e,t)=>Object(r.createElement)("td",{key:t},n(e.y)))))))};i.propTypes={data:o.a.arrayOf(o.a.shape({x:o.a.number,y:o.a.number})).isRequired,mapChartDataToTableData:o.a.func,dataTableCaption:o.a.string.isRequired,dataTableHeaderLabels:o.a.array.isRequired,isDataTableVisuallyHidden:o.a.bool},i.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};var c=i;const l=e=>{let{data:t,width:n,height:a,fillColor:o,strokeColor:s,strokeWidth:i,className:l,mapChartDataToTableData:u,dataTableCaption:p,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h}=e;const b=Math.max(1,Math.max(...t.map(e=>e.x))),m=Math.max(1,Math.max(...t.map(e=>e.y))),f=a-i,y=t.map(e=>`${e.x/b*n},${f-e.y/m*f+i}`).join(" "),w=`0,${f+i} `+y+` ${n},${f+i}`;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("svg",{width:n,height:a,viewBox:`0 0 ${n} ${a}`,className:l,role:"img","aria-hidden":"true",focusable:"false"},Object(r.createElement)("polygon",{fill:o,points:w}),Object(r.createElement)("polyline",{fill:"none",stroke:s,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",points:y})),u&&Object(r.createElement)(c,{data:t,mapChartDataToTableData:u,dataTableCaption:p,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h}))};l.propTypes={data:o.a.arrayOf(o.a.shape({x:o.a.number,y:o.a.number})).isRequired,width:o.a.number.isRequired,height:o.a.number.isRequired,fillColor:o.a.string,strokeColor:o.a.string,strokeWidth:o.a.number,className:o.a.string,mapChartDataToTableData:o.a.func,dataTableCaption:o.a.string.isRequired,dataTableHeaderLabels:o.a.array.isRequired,isDataTableVisuallyHidden:o.a.bool},l.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0},t.a=l},84:function(e,t){e.exports=window.moment},9:function(e,t){e.exports=window.yoast.helpers},90:function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return w}));var r=n(0),a=n(2),o=n.n(a),s=n(1),i=n(4),c=n(84),l=n.n(c),u=n(7),p=n(9),d=n(76),h=()=>Object(r.createElement)("p",{className:"yoast-wincher-seo-performance-modal__loading-message"},Object(s.__)("Tracking the ranking position...","wordpress-seo")," ",Object(r.createElement)(u.SvgIcon,{icon:"loading-spinner"}));const b=Object(p.makeOutboundLink)();function m(e){return Math.round(100*e)}function f(e){let{chartData:t}=e;if(Object(i.isEmpty)(t)||Object(i.isEmpty)(t.position))return"?";const n=function(e){return Array.from({length:e.position.history.length},(e,t)=>t+1).map(e=>Object(s.sprintf)(Object(s._n)("%d day","%d days",e,"wordpress-seo"),e))}(t),a=t.position.history.map((e,t)=>({x:t,y:101-e.value}));return Object(r.createElement)(d.a,{width:66,height:24,data:a,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",className:"yoast-related-keyphrases-modal__chart",mapChartDataToTableData:m,dataTableCaption:Object(s.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:n})}function y(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}function w(e){const{keyphrase:t,rowData:n,onTrackKeyphrase:a,onUntrackKeyphrase:o,isFocusKeyphrase:c,isDisabled:p,isLoading:d}=e,m=!Object(i.isEmpty)(n),w=Object(r.useCallback)(()=>{p||(m?o(t,n.id):a(t))},[t,a,o,m,n,p]);return Object(r.createElement)("tr",null,Object(r.createElement)("td",{className:"yoast-table--nopadding"},function(e){let{keyphrase:t,isEnabled:n,toggleAction:a,isLoading:o}=e;return o?Object(r.createElement)(u.SvgIcon,{icon:"loading-spinner"}):Object(r.createElement)(u.Toggle,{id:"toggle-keyphrase-tracking-"+t,className:"wincher-toggle",isEnabled:n,onSetToggleState:a,showToggleStateLabel:!1})}({keyphrase:t,isEnabled:m,toggleAction:w,isLoading:d})),Object(r.createElement)("td",null,t,c&&Object(r.createElement)("span",null,"*")),function(e){const{rowData:t,websiteId:n}=e,a=!Object(i.isEmpty)(t),o=t&&t.updated_at&&l()(t.updated_at)>=l()().subtract(7,"days"),c=t?Object(s.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",n,t.id):null;return a?o?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,y(t)),Object(r.createElement)("td",{className:"yoast-table--nopadding"},Object(r.createElement)(f,{chartData:t})),Object(r.createElement)("td",{className:"yoast-table--nobreak"},Object(r.createElement)(b,{href:c},Object(s.__)("View","wordpress-seo")))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(r.createElement)(h,null))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,"?"),Object(r.createElement)("td",{className:"yoast-table--nopadding"},"?"),Object(r.createElement)("td",{className:"yoast-table--nobreak"}))}(e))}f.propTypes={chartData:o.a.object},f.defaultProps={chartData:{}},w.propTypes={rowData:o.a.object,keyphrase:o.a.string.isRequired,onTrackKeyphrase:o.a.func,onUntrackKeyphrase:o.a.func,isFocusKeyphrase:o.a.bool,isDisabled:o.a.bool,isLoading:o.a.bool,websiteId:o.a.string},w.defaultProps={rowData:{},onTrackKeyphrase:()=>{},onUntrackKeyphrase:()=>{},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""}}});