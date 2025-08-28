(()=>{"use strict";var e={n:s=>{var t=s&&s.__esModule?()=>s.default:()=>s;return e.d(t,{a:t}),t},d:(s,t)=>{for(var r in t)e.o(t,r)&&!e.o(s,r)&&Object.defineProperty(s,r,{enumerable:!0,get:t[r]})},o:(e,s)=>Object.prototype.hasOwnProperty.call(e,s)};const s=window.wp.element,t=window.yoast.propTypes;var r=e.n(t);const o=window.yoast.styledComponents;var n=e.n(o);const i=window.wp.i18n,a=window.lodash,c=window.yoast.helpers,l=window.yoast.componentsNew,d=(e,t)=>{try{return(0,s.createInterpolateElement)(e,t)}catch(s){return console.error("Error in translation for:",e,s),e}},p=window.ReactJSXRuntime,h=e=>(0,p.jsx)(l.Alert,{type:"warning",className:e.className,children:(0,i.sprintf)(/* translators: %s: Expands to "Wincher". */
(0,i.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher")});h.propTypes={className:r().string},h.defaultProps={className:""};const u=h,w=window.moment;var g=e.n(w);const b=({data:e,mapChartDataToTableData:s,dataTableCaption:t,dataTableHeaderLabels:r,isDataTableVisuallyHidden:o})=>e.length!==r.length?(0,p.jsx)("p",{children:(0,i.__)("The number of headers and header labels don't match.","wordpress-seo")}):(0,p.jsx)("div",{className:o?"screen-reader-text":null,children:(0,p.jsxs)("table",{children:[(0,p.jsx)("caption",{children:t}),(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:r.map(((e,s)=>(0,p.jsx)("th",{children:e},s)))})}),(0,p.jsx)("tbody",{children:(0,p.jsx)("tr",{children:e.map(((e,t)=>(0,p.jsx)("td",{children:s(e.y)},t)))})})]})});b.propTypes={data:r().arrayOf(r().shape({x:r().number,y:r().number})).isRequired,mapChartDataToTableData:r().func,dataTableCaption:r().string.isRequired,dataTableHeaderLabels:r().array.isRequired,isDataTableVisuallyHidden:r().bool},b.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};const y=b,m=({data:e,width:t,height:r,fillColor:o,strokeColor:n,strokeWidth:i,className:a,mapChartDataToTableData:c,dataTableCaption:l,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h})=>{const u=Math.max(1,Math.max(...e.map((e=>e.x)))),w=Math.max(1,Math.max(...e.map((e=>e.y)))),g=r-i,b=e.map((e=>`${e.x/u*t},${g-e.y/w*g+i}`)).join(" "),m=`0,${g+i} `+b+` ${t},${g+i}`;return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)("svg",{width:t,height:r,viewBox:`0 0 ${t} ${r}`,className:a,role:"img","aria-hidden":"true",focusable:"false",children:[(0,p.jsx)("polygon",{fill:o,points:m}),(0,p.jsx)("polyline",{fill:"none",stroke:n,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",points:b})]}),c&&(0,p.jsx)(y,{data:e,mapChartDataToTableData:c,dataTableCaption:l,dataTableHeaderLabels:d,isDataTableVisuallyHidden:h})]})};m.propTypes={data:r().arrayOf(r().shape({x:r().number,y:r().number})).isRequired,width:r().number.isRequired,height:r().number.isRequired,fillColor:r().string,strokeColor:r().string,strokeWidth:r().number,className:r().string,mapChartDataToTableData:r().func,dataTableCaption:r().string.isRequired,dataTableHeaderLabels:r().array.isRequired,isDataTableVisuallyHidden:r().bool},m.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};const f=m,x=()=>(0,p.jsxs)("p",{className:"yoast-wincher-seo-performance-modal__loading-message",children:[(0,i.__)("Tracking the ranking position…","wordpress-seo")," ",(0,p.jsx)(l.SvgIcon,{icon:"loading-spinner"})]}),k=n()(l.SvgIcon)`
	margin-left: 2px;
	flex-shrink: 0;
	rotate: ${e=>e.isImproving?"-90deg":"90deg"};
`,j=n().span`
	color: ${e=>e.isImproving?"#69AB56":"#DC3332"};
	font-size: 13px;
	font-weight: 600;
	line-height: 20px;
	margin-right: 2px;
	margin-left: 12px;
`,v=n().td`
	padding-right: 0 !important;

	& > div {
		margin: 0px;
	}
`,T=n().td`
	padding-left: 2px !important;
`,_=n().td.attrs({className:"yoast-table--nopadding"})`
	& > div {
		justify-content: center;
	}
`,C=n().div`
	display: flex;
	align-items: center;
	& > a {
		box-sizing: border-box;
	}
`,D=n().button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    display: flex;
    align-items: center;
`,S=n().tr`
	background-color: ${e=>e.isEnabled?"#FFFFFF":"#F9F9F9"} !important;
`;function N(e){return Math.round(100*e)}function R({chartData:e}){if((0,a.isEmpty)(e)||(0,a.isEmpty)(e.position))return"?";const s=function(e){return Array.from({length:e.position.history.length},((e,s)=>s+1)).map((e=>(0,i.sprintf)((0,i._n)("%d day","%d days",e,"wordpress-seo"),e)))}(e),t=e.position.history.map(((e,s)=>({x:s,y:101-e.value})));return(0,p.jsx)(f,{width:66,height:24,data:t,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",mapChartDataToTableData:N,dataTableCaption:(0,i.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:s})}function L({keyphrase:e,isEnabled:s,toggleAction:t,isLoading:r}){return r?(0,p.jsx)(l.SvgIcon,{icon:"loading-spinner"}):(0,p.jsx)(l.Toggle,{id:`toggle-keyphrase-tracking-${e}`,className:"wincher-toggle",isEnabled:s,onSetToggleState:t,showToggleStateLabel:!1})}function I(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}R.propTypes={chartData:r().object},R.defaultProps={chartData:{}};const E=e=>g()(e).fromNow(),q=({rowData:e})=>{var t;if(null==e||null===(t=e.position)||void 0===t||!t.change)return(0,p.jsx)(R,{chartData:e});const r=e.position.change<0;return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(R,{chartData:e}),(0,p.jsx)(j,{isImproving:r,children:Math.abs(e.position.change)}),(0,p.jsx)(k,{icon:"caret-right",color:r?"#69AB56":"#DC3332",size:"14px",isImproving:r})]})};function A(e){const{rowData:t,websiteId:r,keyphrase:o,onSelectKeyphrases:n}=e,c=(0,s.useCallback)((()=>{n([o])}),[n,o]),d=!(0,a.isEmpty)(t),h=t&&t.updated_at&&g()(t.updated_at)>=g()().subtract(7,"days"),u=t?`https://app.wincher.com/websites/${r}/keywords?serp=${t.id}&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast`:null;return d?h?(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("td",{children:(0,p.jsxs)(C,{children:[I(t),(0,p.jsx)(l.ButtonStyledLink,{variant:"secondary",href:u,style:{height:28,marginLeft:12},rel:"noopener",target:"_blank",children:(0,i.__)("View","wordpress-seo")})]})}),(0,p.jsx)("td",{className:"yoast-table--nopadding",children:(0,p.jsx)(D,{type:"button",onClick:c,children:(0,p.jsx)(q,{rowData:t})})}),(0,p.jsx)("td",{children:E(t.updated_at)})]}):(0,p.jsx)("td",{className:"yoast-table--nopadding",colSpan:"3",children:(0,p.jsx)(x,{})}):(0,p.jsx)("td",{className:"yoast-table--nopadding",colSpan:"3",children:(0,p.jsx)("i",{children:(0,i.__)("Activate tracking to show the ranking position","wordpress-seo")})})}function $(e){var t;const{keyphrase:r,rowData:o,onTrackKeyphrase:n,onUntrackKeyphrase:i,isFocusKeyphrase:c,isDisabled:d,isLoading:h,isSelected:u,onSelectKeyphrases:w}=e,g=!(0,a.isEmpty)(o),b=!(0,a.isEmpty)(null==o||null===(t=o.position)||void 0===t?void 0:t.history),y=(0,s.useCallback)((()=>{d||(g?i(r,o.id):n(r))}),[r,n,i,g,o,d]),m=(0,s.useCallback)((()=>{w((e=>u?e.filter((e=>e!==r)):e.concat(r)))}),[w,u,r]);return(0,p.jsxs)(S,{isEnabled:g,children:[(0,p.jsx)(v,{children:b&&(0,p.jsx)(l.Checkbox,{id:"select-"+r,onChange:m,checked:u,label:""})}),(0,p.jsxs)(T,{children:[r,c&&(0,p.jsx)("span",{children:"*"})]}),A(e),(0,p.jsx)(_,{children:L({keyphrase:r,isEnabled:g,toggleAction:y,isLoading:h})})]})}q.propTypes={rowData:r().object},$.propTypes={rowData:r().object,keyphrase:r().string.isRequired,onTrackKeyphrase:r().func,onUntrackKeyphrase:r().func,isFocusKeyphrase:r().bool,isDisabled:r().bool,isLoading:r().bool,websiteId:r().string,isSelected:r().bool.isRequired,onSelectKeyphrases:r().func.isRequired},$.defaultProps={rowData:{},onTrackKeyphrase:()=>{},onUntrackKeyphrase:()=>{},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""};const P=e=>{const s=(0,i.sprintf)(/* translators: %s expands to a link to open the Wincher login popup. */
(0,i.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"<reconnectToWincher/>","Wincher");return(0,p.jsx)(l.Alert,{type:"error",className:e.className,children:d(s,{reconnectToWincher:(0,p.jsx)("a",{href:"#",onClick:s=>{s.preventDefault(),e.onReconnect()},children:(0,i.sprintf)(/* translators: %s : Expands to "Wincher". */
(0,i.__)("reconnect to %s","wordpress-seo"),"Wincher")})})})};P.propTypes={onReconnect:r().func.isRequired,className:r().string},P.defaultProps={className:""};const W=P,F=window.yoast.styleGuide,H=window.wp.apiFetch;var B=e.n(H);async function O(e){try{return await B()(e)}catch(e){return e.error&&e.status?e:e instanceof Response&&await e.json()}}const K=n().p`
	color: ${F.colors.$color_pink_dark};
	font-size: 14px;
	font-weight: 700;
	margin: 13px 0 10px;
`,z=n()(l.SvgIcon)`
	margin-right: 5px;
	vertical-align: middle;
`,G=n().button`
	position: absolute;
	top: 9px;
	right: 9px;
	border: none;
    background: none;
    cursor: pointer;
`,Y=n().p`
	font-size: 13px;
	font-weight: 500;
	margin: 10px 0 13px;
`,V=n().div`
	position: relative;
	background: ${e=>e.isTitleShortened?"#F5F7F7":"transparent"};
	border: 1px solid #C7C7C7;
	border-left: 4px solid${F.colors.$color_pink_dark};
	padding: 0 16px;
	margin-bottom: 1.5em;
`,M=e=>{const[t,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{e&&!t&&async function(){return await O({path:"yoast/v1/wincher/account/limit",method:"GET"})}().then((e=>r(e)))}),[t]),t};M.propTypes={limit:r().bool.isRequired};const U=({limit:e,usage:s,isTitleShortened:t,isFreeAccount:r})=>{const o=(0,i.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,i.__)("Your are tracking %1$s out of %2$s keyphrases included in your free account.","wordpress-seo"),s,e),n=(0,i.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,i.__)("Your are tracking %1$s out of %2$s keyphrases included in your account.","wordpress-seo"),s,e),a=r?o:n,c=(0,i.sprintf)(
/* Translators: %1$s expands to the number of used keywords.
   * %2$s expands to the account keywords limit.
   */
(0,i.__)("Keyphrases tracked: %1$s/%2$s","wordpress-seo"),s,e),l=t?c:a;return(0,p.jsxs)(K,{children:[t&&(0,p.jsx)(z,{icon:"exclamation-triangle",color:F.colors.$color_pink_dark,size:"14px"}),l]})};U.propTypes={limit:r().number.isRequired,usage:r().number.isRequired,isTitleShortened:r().bool,isFreeAccount:r().bool};const X=(0,c.makeOutboundLink)(),J=({discount:e,months:s})=>{const t=(0,p.jsx)(X,{href:wpseoAdminGlobalL10n["links.wincher.upgrade"],style:{fontWeight:600},children:(0,i.sprintf)(/* Translators: %s : Expands to "Wincher". */
(0,i.__)("Click here to upgrade your %s plan","wordpress-seo"),"Wincher")});if(!e||!s)return(0,p.jsx)(Y,{children:t});const r=100*e,o=(0,i.sprintf)(
/* Translators: %1$s expands to upgrade account link.
   * %2$s expands to the upgrade discount value.
   * %3$s expands to the upgrade discount duration e.g. 2 months.
   */
(0,i.__)("%1$s and get an exclusive %2$s discount for %3$s month(s).","wordpress-seo"),"<wincherAccountUpgradeLink/>",r+"%",s);return(0,p.jsx)(Y,{children:d(o,{wincherAccountUpgradeLink:t})})};J.propTypes={discount:r().number,months:r().number};const Q=({onClose:e,isTitleShortened:t,trackingInfo:r})=>{const o=(()=>{const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{e||async function(){return await O({path:"yoast/v1/wincher/account/upgrade-campaign",method:"GET"})}().then((e=>t(e)))}),[e]),e})();if(null===r)return null;const{limit:n,usage:a}=r;if(!(n&&a/n>=.8))return null;const c=Boolean(null==o?void 0:o.discount);return(0,p.jsxs)(V,{isTitleShortened:t,children:[e&&(0,p.jsx)(G,{type:"button","aria-label":(0,i.__)("Close the upgrade callout","wordpress-seo"),onClick:e,children:(0,p.jsx)(l.SvgIcon,{icon:"times-circle",color:F.colors.$color_pink_dark,size:"14px"})}),(0,p.jsx)(U,{...r,isTitleShortened:t,isFreeAccount:c}),(0,p.jsx)(J,{discount:null==o?void 0:o.discount,months:null==o?void 0:o.months})]})};Q.propTypes={onClose:r().func,isTitleShortened:r().bool,trackingInfo:r().object};const Z=Q,ee=(0,c.makeOutboundLink)(),se=(0,c.makeOutboundLink)(),te=(0,c.makeOutboundLink)(),re=(0,c.makeOutboundLink)(),oe=n().div`
	& .wincher-performance-report-alert {
		margin-bottom: 1em;
	}
`,ne=n().table`
	pointer-events: none;
	user-select: none;
`,ie=n().div`
	position: relative;
	width: 100%;
	overflow-y: auto;
`,ae=n().div`
	margin: 0;
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
`,ce=n().p`
	top: 47%;
	left: 50%;
	position: absolute;
`,le=e=>{const{websiteId:s,id:t}=e;return`https://app.wincher.com/websites/${s}/keywords?serp=${t}&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast`},de=e=>{const{isLoggedIn:s,onConnectAction:t}=e;return s?null:(0,p.jsx)(ce,{children:(0,p.jsx)(l.NewButton,{onClick:t,variant:"primary",style:{left:"-50%",backgroundColor:"#2371B0"},children:(0,i.sprintf)(/* translators: %s expands to Wincher */
(0,i.__)("Connect with %s","wordpress-seo"),"Wincher")})})};de.propTypes={isLoggedIn:r().bool.isRequired,onConnectAction:r().func.isRequired};const pe=({isBlurred:e,children:s})=>e?(0,p.jsx)("td",{children:(0,p.jsx)(ae,{children:s})}):(0,p.jsx)("td",{children:s});pe.propTypes={isBlurred:r().bool,children:r().oneOfType([r().string,r().number,r().object])};const he=({keyphrase:e,websiteId:s,isBlurred:t})=>{const{id:r,keyword:o}=e;return(0,p.jsxs)("tr",{children:[(0,p.jsx)(pe,{isBlurred:t,children:o}),(0,p.jsx)(pe,{isBlurred:t,children:I(e)}),(0,p.jsx)(pe,{isBlurred:t,className:"yoast-table--nopadding",children:(0,p.jsx)(R,{chartData:e})}),(0,p.jsx)(pe,{isBlurred:t,className:"yoast-table--nobreak",children:(0,p.jsx)(ee,{href:le({websiteId:s,id:r}),children:(0,i.__)("View","wordpress-seo")})})]})};he.propTypes={keyphrase:r().object.isRequired,websiteId:r().string.isRequired,isBlurred:r().bool};const ue=()=>(0,p.jsx)(l.Alert,{type:"error",className:"wincher-performance-report-alert",children:(0,i.__)("Network Error: Unable to connect to the server. Please check your internet connection and try again later.","wordpress-seo")}),we=e=>{const{data:s}=e;return!(0,a.isEmpty)(s)&&(0,a.isEmpty)(s.results)?(0,p.jsx)(l.Alert,{type:"success",className:"wincher-performance-report-alert",children:(0,i.sprintf)(/* translators: %1$s and %2$s: Expands to "Wincher". */
(0,i.__)('You have successfully connected with %1$s. Your %2$s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher","Wincher")}):(0,p.jsx)(l.Alert,{type:"success",className:"wincher-performance-report-alert",children:(0,i.sprintf)(/* translators: %s: Expands to "Wincher". */
(0,i.__)("You have successfully connected with %s.","wordpress-seo"),"Wincher")})};we.propTypes={data:r().object.isRequired};const ge=e=>{const{data:s,onConnectAction:t,isConnectSuccess:r,isNetworkError:o,isFailedRequest:n}=e;return o?(0,p.jsx)(ue,{data:s}):r?(0,p.jsx)(we,{data:s}):n?(0,p.jsx)(W,{onReconnect:t,className:"wincher-performance-report-alert"}):null};ge.propTypes={data:r().object.isRequired,onConnectAction:r().func.isRequired,isConnectSuccess:r().bool.isRequired,isNetworkError:r().bool.isRequired,isFailedRequest:r().bool.isRequired};const be=e=>{const{data:s,isNetworkError:t,isConnectSuccess:r}=e,o=(e=>e&&[401,403,404].includes(e.status))(s);return t||r||o?(0,p.jsx)(ge,{...e,isFailedRequest:o}):!s||(0,a.isEmpty)(s.results)?(0,p.jsx)(u,{className:"wincher-performance-report-alert"}):null};be.propTypes={data:r().object.isRequired,onConnectAction:r().func.isRequired,isConnectSuccess:r().bool.isRequired,isNetworkError:r().bool.isRequired};const ye=({isLoggedIn:e})=>{const s=(0,i.sprintf)(/* translators: %s expands to a link to Wincher login */
(0,i.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"<wincherAccountLink/>"),t=(0,i.sprintf)(/* translators: %s expands to a link to Wincher login */
(0,i.__)("This overview will show you your top performing keyphrases in Google. Connect with %s to get started.","wordpress-seo"),"<wincherLink/>"),r=e?s:t;return(0,p.jsx)("p",{children:d(r,{wincherAccountLink:(0,p.jsx)(te,{href:wpseoAdminGlobalL10n["links.wincher.login"],children:(0,i.sprintf)(/* translators: %s : Expands to "Wincher". */
(0,i.__)("%s account","wordpress-seo"),"Wincher")}),wincherLink:(0,p.jsx)(re,{href:wpseoAdminGlobalL10n["links.wincher.about"],children:"Wincher"})})})};ye.propTypes={isLoggedIn:r().bool.isRequired};const me={results:[{id:0,keyword:"wincher",position:{value:84,history:[{value:90},{value:89},{value:94},{value:98},{value:84}]}},{id:1,keyword:"rank tracker",position:{value:20,history:[{value:50},{value:30},{value:66},{value:15},{value:20}]}},{id:2,keyword:"performance",position:{value:2,history:[{value:44},{value:66},{value:18},{value:31},{value:2}]}}]},fe=({isBlurred:e,children:s})=>e?(0,p.jsx)(ne,{className:"yoast yoast-table",children:s}):(0,p.jsx)("table",{className:"yoast yoast-table",children:s});fe.propTypes={isBlurred:r().bool,children:r().any};const xe=e=>{const{className:t,websiteId:r,isLoggedIn:o,onConnectAction:n,isConnectSuccess:c}=e,l=o?e.data:me,d=!o,h=(e=>e&&!(0,a.isEmpty)(e)&&!(0,a.isEmpty)(e.results))(l),u=M(o);return(0,p.jsxs)(oe,{className:t,children:[o&&(0,p.jsx)(Z,{isTitleShortened:!0,trackingInfo:u}),(0,p.jsx)(be,{...e,data:l,isConnectSuccess:c&&o}),h&&(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(ye,{isLoggedIn:o}),(0,p.jsxs)(ie,{children:[(0,p.jsxs)(fe,{isBlurred:d,children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{scope:"col",abbr:(0,i.__)("Keyphrase","wordpress-seo"),children:(0,i.__)("Keyphrase","wordpress-seo")}),(0,p.jsx)("th",{scope:"col",abbr:(0,i.__)("Position","wordpress-seo"),children:(0,i.__)("Position","wordpress-seo")}),(0,p.jsx)("th",{scope:"col",abbr:(0,i.__)("Position over time","wordpress-seo"),children:(0,i.__)("Position over time","wordpress-seo")}),(0,p.jsx)("td",{className:"yoast-table--nobreak"})]})}),(0,p.jsx)("tbody",{children:(0,a.map)(l.results,((e,s)=>(0,p.jsx)(he,{keyphrase:e,websiteId:r,isBlurred:d},`keyphrase-${s}`)))})]}),(0,p.jsx)(de,{isLoggedIn:o,onConnectAction:n})]}),(0,p.jsx)("p",{style:{marginBottom:0,position:"relative"},children:(0,p.jsx)(se,{href:wpseoAdminGlobalL10n["links.wincher.login"],children:(0,i.sprintf)(/* translators: %s expands to Wincher */
(0,i.__)("Get more insights over at %s","wordpress-seo"),"Wincher")})})]})]})};xe.propTypes={className:r().string,data:r().object.isRequired,websiteId:r().string.isRequired,isLoggedIn:r().bool.isRequired,isConnectSuccess:r().bool.isRequired,isNetworkError:r().bool.isRequired,onConnectAction:r().func.isRequired},xe.defaultProps={className:"wincher-seo-performance"};const ke=xe;class je{constructor(e,s={},t={}){this.url=e,this.origin=new URL(e).origin,this.eventHandlers=Object.assign({success:{type:"",callback:()=>{}},error:{type:"",callback:()=>{}}},s),this.options=Object.assign({height:570,width:340,title:""},t),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}createPopup(){const{height:e,width:s,title:t}=this.options,r=["top="+(window.top.outerHeight/2+window.top.screenY-e/2),"left="+(window.top.outerWidth/2+window.top.screenX-s/2),"width="+s,"height="+e,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,t,r.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}async messageHandler(e){const{data:s,source:t,origin:r}=e;r===this.origin&&this.popup===t&&(s.type===this.eventHandlers.success.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.success.callback(s)),s.type===this.eventHandlers.error.type&&(this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),await this.eventHandlers.error.callback(s)))}getPopup(){return this.popup}isClosed(){return!this.popup||this.popup.closed}focus(){this.isClosed()||this.popup.focus()}}class ve extends s.Component{constructor(){super(),this.state={wincherData:{},wincherWebsiteId:wpseoWincherDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoWincherDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1,isConnectSuccess:!1,isNetworkError:!1},this.onConnect=this.onConnect.bind(this),this.getWincherData=this.getWincherData.bind(this),this.performAuthenticationRequest=this.performAuthenticationRequest.bind(this),this.onConnectSuccess=this.onConnectSuccess.bind(this),this.onNetworkDisconnectionError=this.onNetworkDisconnectionError.bind(this)}componentDidMount(){const e=jQuery("#wpseo-wincher-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",(()=>{this.fetchData()}))}fetchData(){this.state.isDataFetched||(this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}async getWincherData(){const e=await async function(e=null,s=null,t=null,r){return await O({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:e,permalink:t,startAt:s},signal:r})}();if(200===e.status){const s=(0,a.filter)(e.results,(e=>!(0,a.isEmpty)(e.position))),t=(0,a.sortBy)(s,(e=>e.position.value)).splice(0,5);this.setState({wincherData:{results:t,status:e.status}})}else this.setState({wincherData:{results:[],status:e.status}})}async performAuthenticationRequest(e){if(200!==(await async function(e){const{code:s,websiteId:t}=e;return await O({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:s,websiteId:t}})}(e)).status)return;this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:e.websiteId.toString()}),await this.getWincherData();const s=this.loginPopup.getPopup();s&&s.close()}async onConnectSuccess(e){this.setState({isConnectSuccess:!0,isNetworkError:!1}),await this.performAuthenticationRequest(e)}async onNetworkDisconnectionError(){this.setState({isConnectSuccess:!1,isNetworkError:!0})}async onConnect(){if(this.loginPopup&&!this.loginPopup.isClosed())return void this.loginPopup.focus();const{url:e}=await async function(){return await O({path:"yoast/v1/wincher/authorization-url",method:"GET"})}();e&&void 0!==e?(this.loginPopup=new je(e,{success:{type:"wincher:oauth:success",callback:e=>this.onConnectSuccess(e)},error:{type:"wincher:oauth:error",callback:()=>{}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup()):this.onNetworkDisconnectionError()}render(){return(0,p.jsx)(ke,{data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,isConnectSuccess:this.state.isConnectSuccess,isNetworkError:this.state.isNetworkError,onConnectAction:this.onConnect},"wincher-performance-report")}}const Te=document.getElementById("yoast-seo-wincher-dashboard-widget");Te&&(0,s.createRoot)(Te).render((0,p.jsx)(ve,{}))})();