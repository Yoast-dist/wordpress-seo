(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.lodash,n=window.wp.i18n,r=window.yoast.styledComponents;var o=e.n(r);const i=window.yoast.helpers,a=window.yoast.componentsNew,c=(e,s)=>{try{return(0,t.createInterpolateElement)(e,s)}catch(t){return console.error("Error in translation for:",e,t),e}},l=window.ReactJSXRuntime,d=({className:e=""})=>(0,l.jsx)(a.Alert,{type:"warning",className:e,children:(0,n.sprintf)(/* translators: %s: Expands to "Wincher". */ /* translators: %s: Expands to "Wincher". */
(0,n.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher")}),h=({onReconnect:e,className:t=""})=>{const s=(0,n.sprintf)(/* translators: %s expands to a link to open the Wincher login popup. */ /* translators: %s expands to a link to open the Wincher login popup. */
(0,n.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"<reconnectToWincher/>","Wincher");return(0,l.jsx)(a.Alert,{type:"error",className:t,children:c(s,{reconnectToWincher:(0,l.jsx)("a",{href:"#",onClick:t=>{t.preventDefault(),e()},children:(0,n.sprintf)(/* translators: %s : Expands to "Wincher". */ /* translators: %s : Expands to "Wincher". */
(0,n.__)("reconnect to %s","wordpress-seo"),"Wincher")})})})},p=window.yoast.styleGuide,u=window.wp.apiFetch;var w=e.n(u);async function m(e){try{return await w()(e)}catch(e){return e.error&&e.status?e:e instanceof Response&&await e.json()}}const g=o().p`
	color: ${p.colors.$color_pink_dark};
	font-size: 14px;
	font-weight: 700;
	margin: 13px 0 10px;
`,y=o()(a.SvgIcon)`
	margin-right: 5px;
	vertical-align: middle;
`,b=o().button`
	position: absolute;
	top: 9px;
	right: 9px;
	border: none;
	background: none;
	cursor: pointer;
`,f=o().p`
	font-size: 13px;
	font-weight: 500;
	margin: 10px 0 13px;
`,x=o().div`
	position: relative;
	background: ${e=>e.isTitleShortened?"#f5f7f7":"transparent"};
	border: 1px solid #c7c7c7;
	border-left: 4px solid${p.colors.$color_pink_dark};
	padding: 0 16px;
	margin-bottom: 1.5em;
`,k=({limit:e,usage:t,isTitleShortened:s=!1,isFreeAccount:r=!1})=>{const o=(0,n.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,n.__)("Your are tracking %1$s out of %2$s keyphrases included in your free account.","wordpress-seo"),t,e),i=(0,n.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,n.__)("Your are tracking %1$s out of %2$s keyphrases included in your account.","wordpress-seo"),t,e),a=r?o:i,c=(0,n.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,n.__)("Keyphrases tracked: %1$s/%2$s","wordpress-seo"),t,e),d=s?c:a;return(0,l.jsxs)(g,{children:[s&&(0,l.jsx)(y,{icon:"exclamation-triangle",color:p.colors.$color_pink_dark,size:"14px"}),d]})},j=(0,i.makeOutboundLink)(),_=({discount:e,months:t})=>{const s=(0,l.jsx)(j,{href:wpseoAdminGlobalL10n["links.wincher.upgrade"],style:{fontWeight:600},children:(0,n.sprintf)(/* Translators: %s : Expands to "Wincher". */ /* Translators: %s : Expands to "Wincher". */
(0,n.__)("Click here to upgrade your %s plan","wordpress-seo"),"Wincher")});if(!e||!t)return(0,l.jsx)(f,{children:s});const r=100*e,o=(0,n.sprintf)(
/* Translators: %1$s expands to upgrade account link.
   * %2$s expands to the upgrade discount value.
   * %3$s expands to the upgrade discount duration e.g. 2 months.
   */
/* Translators: %1$s expands to upgrade account link.
   * %2$s expands to the upgrade discount value.
   * %3$s expands to the upgrade discount duration e.g. 2 months.
   */
(0,n.__)("%1$s and get an exclusive %2$s discount for %3$s month(s).","wordpress-seo"),"<wincherAccountUpgradeLink/>",r+"%",t);return(0,l.jsx)(f,{children:c(o,{wincherAccountUpgradeLink:s})})},v=({onClose:e=null,isTitleShortened:s=!1,trackingInfo:r=null})=>{const o=(()=>{const[e,s]=(0,t.useState)(null);return(0,t.useEffect)(()=>{e||async function(){return await m({path:"yoast/v1/wincher/account/upgrade-campaign",method:"GET"})}().then(e=>s(e))},[e]),e})();if(null===r)return null;const{limit:i,usage:c}=r;if(!(i&&c/i>=.8))return null;const d=Boolean(null==o?void 0:o.discount);return(0,l.jsxs)(x,{isTitleShortened:s,children:[e&&(0,l.jsx)(b,{type:"button","aria-label":/* translators: Hidden accessibility text. */ /* translators: Hidden accessibility text. */
(0,n.__)("Close the upgrade callout","wordpress-seo"),onClick:e,children:(0,l.jsx)(a.SvgIcon,{icon:"times-circle",color:p.colors.$color_pink_dark,size:"14px"})}),(0,l.jsx)(k,{...r,isTitleShortened:s,isFreeAccount:d}),(0,l.jsx)(_,{discount:null==o?void 0:o.discount,months:null==o?void 0:o.months})]})},C=(window.moment,({data:e,mapChartDataToTableData:t=null,dataTableCaption:s,dataTableHeaderLabels:r,isDataTableVisuallyHidden:o=!0})=>e.length!==r.length?(0,l.jsx)("p",{children:(0,n.__)("The number of headers and header labels don't match.","wordpress-seo")}):(0,l.jsx)("div",{className:o?"screen-reader-text":null,children:(0,l.jsxs)("table",{children:[(0,l.jsx)("caption",{children:s}),(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:r.map((e,t)=>(0,l.jsx)("th",{children:e},t))})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:e.map((e,s)=>(0,l.jsx)("td",{children:t(e.y)},s))})})]})})),E=({data:e,width:s,height:n,fillColor:r=null,strokeColor:o="#000000",strokeWidth:i=1,className:a="",mapChartDataToTableData:c=null,dataTableCaption:d,dataTableHeaderLabels:h,isDataTableVisuallyHidden:p=!0})=>{const u=Math.max(1,Math.max(...e.map(e=>e.x))),w=Math.max(1,Math.max(...e.map(e=>e.y))),m=n-i,g=e.map(e=>`${e.x/u*s},${m-e.y/w*m+i}`).join(" "),y=`0,${m+i} `+g+` ${s},${m+i}`;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsxs)("svg",{width:s,height:n,viewBox:`0 0 ${s} ${n}`,className:a,role:"img","aria-hidden":"true",focusable:"false",children:[(0,l.jsx)("polygon",{fill:r,points:y}),(0,l.jsx)("polyline",{fill:"none",stroke:o,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",points:g})]}),c&&(0,l.jsx)(C,{data:e,mapChartDataToTableData:c,dataTableCaption:d,dataTableHeaderLabels:h,isDataTableVisuallyHidden:p})]})};function S(e){return Math.round(100*e)}function T({chartData:e={}}){if((0,s.isEmpty)(e)||(0,s.isEmpty)(e.position))return"?";const t=function(e){return Array.from({length:e.position.history.length},(e,t)=>t+1).map(e=>(0,n.sprintf)((0,n._n)("%d day","%d days",e,"wordpress-seo"),e))}(e),r=e.position.history.map((e,t)=>({x:t,y:31-e.value}));return(0,l.jsx)(E,{width:66,height:24,data:r,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",mapChartDataToTableData:S,dataTableCaption:(0,n.__)("Keyphrase position in the last 90 days on a scale from 0 to 30.","wordpress-seo"),dataTableHeaderLabels:t})}function D(e){return!e||!e.position||e.position.value>30?"> 30":e.position.value}o()(a.SvgIcon)`
	margin-left: 2px;
	flex-shrink: 0;
	rotate: ${e=>e.isImproving?"-90deg":"90deg"};
`,o().span`
	color: ${e=>e.isImproving?"#69AB56":"#DC3332"};
	font-size: 13px;
	font-weight: 600;
	line-height: 20px;
	margin-right: 2px;
	margin-left: 12px;
`,o().td`
	padding-right: 0 !important;

	& > div {
		margin: 0px;
	}
`,o().td`
	padding-left: 2px !important;
`,o().td.attrs({className:"yoast-table--nopadding"})`
	& > div {
		justify-content: center;
	}
`,o().div`
	display: flex;
	align-items: center;
	& > a {
		box-sizing: border-box;
	}
`,o().button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    display: flex;
    align-items: center;
`,o().tr`
	background-color: ${e=>e.isEnabled?"#FFFFFF":"#F9F9F9"} !important;
`;const L=(0,i.makeOutboundLink)(),N=(0,i.makeOutboundLink)(),I=(0,i.makeOutboundLink)(),W=(0,i.makeOutboundLink)(),$=o().div`
	& .wincher-performance-report-alert {
		margin-bottom: 1em;
	}
`,A=o().table`
	pointer-events: none;
	user-select: none;
`,P=o().div`
	position: relative;
	width: 100%;
	overflow-y: auto;
`,F=o().div`
	margin: 0;
	-webkit-filter: blur(4px);
	-moz-filter: blur(4px);
	-o-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
`,H=o().p`
	top: 47%;
	left: 50%;
	position: absolute;
`,B=({websiteId:e,id:t})=>`https://app.wincher.com/websites/${e}/keywords?serp=${t}&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast`,O=({isLoggedIn:e,onConnectAction:t})=>e?null:(0,l.jsx)(H,{children:(0,l.jsx)(a.NewButton,{onClick:t,variant:"primary",style:{left:"-50%",backgroundColor:"#2371b0"},children:(0,n.sprintf)(/* translators: %s expands to Wincher */ /* translators: %s expands to Wincher */
(0,n.__)("Connect with %s","wordpress-seo"),"Wincher")})}),R=({isBlurred:e,children:t})=>e?(0,l.jsx)("td",{children:(0,l.jsx)(F,{children:t})}):(0,l.jsx)("td",{children:t}),G=({keyphrase:e,websiteId:t,isBlurred:s})=>(0,l.jsxs)("tr",{children:[(0,l.jsx)(R,{isBlurred:s,children:e.keyword}),(0,l.jsx)(R,{isBlurred:s,children:D(e)}),(0,l.jsx)(R,{isBlurred:s,className:"yoast-table--nopadding",children:(0,l.jsx)(T,{chartData:e})}),(0,l.jsx)(R,{isBlurred:s,className:"yoast-table--nobreak",children:(0,l.jsx)(L,{href:B({websiteId:t,id:e.id}),children:(0,n.__)("View","wordpress-seo")})})]}),Y=()=>(0,l.jsx)(a.Alert,{type:"error",className:"wincher-performance-report-alert",children:(0,n.__)("Network Error: Unable to connect to the server. Please check your internet connection and try again later.","wordpress-seo")}),z=({data:e})=>!(0,s.isEmpty)(e)&&(0,s.isEmpty)(e.results)?(0,l.jsx)(a.Alert,{type:"success",className:"wincher-performance-report-alert",children:(0,n.sprintf)(/* translators: %1$s and %2$s: Expands to "Wincher". */ /* translators: %1$s and %2$s: Expands to "Wincher". */
(0,n.__)('You have successfully connected with %1$s. Your %2$s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher","Wincher")}):(0,l.jsx)(a.Alert,{type:"success",className:"wincher-performance-report-alert",children:(0,n.sprintf)(/* translators: %s: Expands to "Wincher". */ /* translators: %s: Expands to "Wincher". */
(0,n.__)("You have successfully connected with %s.","wordpress-seo"),"Wincher")}),M=({data:e,onConnectAction:t,isConnectSuccess:s,isNetworkError:n,isFailedRequest:r})=>n?(0,l.jsx)(Y,{}):s?(0,l.jsx)(z,{data:e}):r?(0,l.jsx)(h,{onReconnect:t,className:"wincher-performance-report-alert"}):null,q=({data:e,onConnectAction:t,isNetworkError:n,isConnectSuccess:r})=>{const o=(e=>e&&[401,403,404].includes(e.status))(e);return n||r||o?(0,l.jsx)(M,{data:e,onConnectAction:t,isConnectSuccess:r,isNetworkError:n,isFailedRequest:o}):!e||(0,s.isEmpty)(e.results)?(0,l.jsx)(d,{className:"wincher-performance-report-alert"}):null},K=({isLoggedIn:e})=>{const t=(0,n.sprintf)(/* translators: %s expands to a link to Wincher login */ /* translators: %s expands to a link to Wincher login */
(0,n.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"<wincherAccountLink/>"),s=(0,n.sprintf)(/* translators: %s expands to a link to Wincher login */ /* translators: %s expands to a link to Wincher login */
(0,n.__)("This overview will show you your top performing keyphrases in Google. Connect with %s to get started.","wordpress-seo"),"<wincherLink/>"),r=e?t:s;return(0,l.jsx)("p",{children:c(r,{wincherAccountLink:(0,l.jsx)(I,{href:wpseoAdminGlobalL10n["links.wincher.login"],children:(0,n.sprintf)(/* translators: %s : Expands to "Wincher". */ /* translators: %s : Expands to "Wincher". */
(0,n.__)("%s account","wordpress-seo"),"Wincher")}),wincherLink:(0,l.jsx)(W,{href:wpseoAdminGlobalL10n["links.wincher.about"],children:"Wincher"})})})},U=({isBlurred:e,children:t})=>e?(0,l.jsx)(A,{className:"yoast yoast-table",children:t}):(0,l.jsx)("table",{className:"yoast yoast-table",children:t}),V=({className:e="wincher-seo-performance",data:r,websiteId:o,isLoggedIn:i,isConnectSuccess:a,isNetworkError:c,onConnectAction:d})=>{const h=!i,p=(e=>e&&!(0,s.isEmpty)(e)&&!(0,s.isEmpty)(e.results))(r),u=(e=>{const[s,n]=(0,t.useState)(null);return(0,t.useEffect)(()=>{e&&!s&&async function(){return await m({path:"yoast/v1/wincher/account/limit",method:"GET"})}().then(e=>n(e))},[s]),s})(i);return(0,l.jsxs)($,{className:e,children:[i&&(0,l.jsx)(v,{isTitleShortened:!0,trackingInfo:u}),(0,l.jsx)(q,{data:r,onConnectAction:d,isNetworkError:c,isConnectSuccess:a&&i}),p&&(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(K,{isLoggedIn:i}),(0,l.jsxs)(P,{children:[(0,l.jsxs)(U,{isBlurred:h,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",abbr:(0,n.__)("Keyphrase","wordpress-seo"),children:(0,n.__)("Keyphrase","wordpress-seo")}),(0,l.jsx)("th",{scope:"col",abbr:(0,n.__)("Position","wordpress-seo"),children:(0,n.__)("Position","wordpress-seo")}),(0,l.jsx)("th",{scope:"col",abbr:(0,n.__)("Position over time","wordpress-seo"),children:(0,n.__)("Position over time","wordpress-seo")}),(0,l.jsx)("td",{className:"yoast-table--nobreak"})]})}),(0,l.jsx)("tbody",{children:(0,s.map)(r.results,(e,t)=>(0,l.jsx)(G,{keyphrase:e,websiteId:o,isBlurred:h},`keyphrase-${t}`))})]}),(0,l.jsx)(O,{isLoggedIn:i,onConnectAction:d})]}),(0,l.jsx)("p",{style:{marginBottom:0,position:"relative"},children:(0,l.jsx)(N,{href:wpseoAdminGlobalL10n["links.wincher.login"],children:(0,n.sprintf)(/* translators: %s expands to Wincher */ /* translators: %s expands to Wincher */
(0,n.__)("Get more insights over at %s","wordpress-seo"),"Wincher")})})]})]})};class X{constructor(e,t={},s={}){this.url=e,this.origin=new URL(e).origin,this.eventHandlers=Object.assign({success:{type:"",callback:()=>{}},error:{type:"",callback:()=>{}}},t),this.options=Object.assign({height:570,width:340,title:""},s),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}createPopup(){const{height:e,width:t,title:s}=this.options,n=["top="+(window.top.outerHeight/2+window.top.screenY-e/2),"left="+(window.top.outerWidth/2+window.top.screenX-t/2),"width="+t,"height="+e,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,s,n.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}async messageHandler(e){const{data:t,source:s,origin:n}=e;n===this.origin&&this.popup===s&&(t.type===this.eventHandlers.success.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.success.callback(t)),t.type===this.eventHandlers.error.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.error.callback(t)))}getPopup(){return this.popup}isClosed(){return!this.popup||this.popup.closed}focus(){this.isClosed()||this.popup.focus()}}class J extends t.Component{constructor(){super(),this.state={wincherData:{},wincherWebsiteId:wpseoWincherDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoWincherDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1,isConnectSuccess:!1,isNetworkError:!1},this.onConnect=this.onConnect.bind(this),this.getWincherData=this.getWincherData.bind(this),this.performAuthenticationRequest=this.performAuthenticationRequest.bind(this),this.onConnectSuccess=this.onConnectSuccess.bind(this),this.onNetworkDisconnectionError=this.onNetworkDisconnectionError.bind(this)}componentDidMount(){const e=jQuery("#wpseo-wincher-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",()=>{this.fetchData()})}fetchData(){this.state.isDataFetched||(this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}async getWincherData(){const e=await async function(e=null,t=null,s=null,n){return await m({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:e,permalink:s,startAt:t},signal:n})}();if(200===e.status){const t=(0,s.filter)(e.results,e=>!(0,s.isEmpty)(e.position)),n=(0,s.sortBy)(t,e=>e.position.value).splice(0,5);this.setState({wincherData:{results:n,status:e.status}})}else this.setState({wincherData:{results:[],status:e.status}})}async performAuthenticationRequest(e){if(200!==(await async function(e){const{code:t,websiteId:s}=e;return await m({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:t,websiteId:s}})}(e)).status)return;this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:e.websiteId.toString()}),await this.getWincherData();const t=this.loginPopup.getPopup();t&&t.close()}async onConnectSuccess(e){this.setState({isConnectSuccess:!0,isNetworkError:!1}),await this.performAuthenticationRequest(e)}async onNetworkDisconnectionError(){this.setState({isConnectSuccess:!1,isNetworkError:!0})}async onConnect(){if(this.loginPopup&&!this.loginPopup.isClosed())return void this.loginPopup.focus();const{url:e}=await async function(){return await m({path:"yoast/v1/wincher/authorization-url",method:"GET"})}();e&&void 0!==e?(this.loginPopup=new X(e,{success:{type:"wincher:oauth:success",callback:e=>this.onConnectSuccess(e)},error:{type:"wincher:oauth:error",callback:()=>{}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup()):this.onNetworkDisconnectionError()}render(){return(0,l.jsx)(V,{data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,isConnectSuccess:this.state.isConnectSuccess,isNetworkError:this.state.isNetworkError,onConnectAction:this.onConnect},"wincher-performance-report")}}const Q=document.getElementById("yoast-seo-wincher-dashboard-widget");Q&&(0,t.createRoot)(Q).render((0,l.jsx)(J,{}))})();