(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,s=window.wp.data,r=window.wp.domReady;var a=e.n(r);const n=window.wp.element,i=window.wp.hooks,o=window.yoast.uiLibrary,l=window.lodash,c=window.yoast.reduxJsToolkit,d="adminUrl",m=(0,c.createSlice)({name:d,initialState:"",reducers:{setAdminUrl:(e,{payload:t})=>t}}),u=(m.getInitialState,{selectAdminUrl:e=>(0,l.get)(e,d,"")});u.selectAdminLink=(0,c.createSelector)([u.selectAdminUrl,(e,t)=>t],((e,t="")=>{try{return new URL(t,e).href}catch(t){return e}})),m.actions,m.reducer;const y=window.wp.url,p="linkParams",w=(0,c.createSlice)({name:p,initialState:{},reducers:{setLinkParams:(e,{payload:t})=>t}}),g=w.getInitialState,f={selectLinkParam:(e,t,s={})=>(0,l.get)(e,`${p}.${t}`,s),selectLinkParams:e=>(0,l.get)(e,p,{})};f.selectLink=(0,c.createSelector)([f.selectLinkParams,(e,t)=>t,(e,t,s={})=>s],((e,t,s)=>(0,y.addQueryArgs)(t,{...e,...s})));const h=w.actions,E=w.reducer,v=(0,c.createSlice)({name:"notifications",initialState:{},reducers:{addNotification:{reducer:(e,{payload:t})=>{e[t.id]={id:t.id,variant:t.variant,size:t.size,title:t.title,description:t.description}},prepare:({id:e,variant:t="info",size:s="default",title:r,description:a})=>({payload:{id:e||(0,c.nanoid)(),variant:t,size:s,title:r||"",description:a}})},removeNotification:(e,{payload:t})=>(0,l.omit)(e,t)}}),b=(v.getInitialState,v.actions,v.reducer,"pluginUrl"),x=(0,c.createSlice)({name:b,initialState:"",reducers:{setPluginUrl:(e,{payload:t})=>t}}),_=x.getInitialState,k={selectPluginUrl:e=>(0,l.get)(e,b,"")};k.selectImageLink=(0,c.createSelector)([k.selectPluginUrl,(e,t,s="images")=>s,(e,t)=>t],((e,t,s)=>[(0,l.trimEnd)(e,"/"),(0,l.trim)(t,"/"),(0,l.trimStart)(s,"/")].join("/")));const N=x.actions,R=x.reducer,S=window.wp.apiFetch;var P=e.n(S);const L="request",C="success",O="error",q="idle",$="loading",I="showPlay",A="askPermission",B="isPlaying",j="wistiaEmbedPermission",z=(0,c.createSlice)({name:j,initialState:{value:!1,status:q,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,{payload:t})=>{e.value=Boolean(t)}},extraReducers:e=>{e.addCase(`${j}/${L}`,(e=>{e.status=$})),e.addCase(`${j}/${C}`,((e,{payload:t})=>{e.status="success",e.value=Boolean(t&&t.value)})),e.addCase(`${j}/${O}`,((e,{payload:t})=>{e.status="error",e.value=Boolean(t&&t.value),e.error={code:(0,l.get)(t,"error.code",500),message:(0,l.get)(t,"error.message","Unknown")}}))}}),T=z.getInitialState,M={selectWistiaEmbedPermission:e=>(0,l.get)(e,j,{value:!1,status:q}),selectWistiaEmbedPermissionValue:e=>(0,l.get)(e,[j,"value"],!1),selectWistiaEmbedPermissionStatus:e=>(0,l.get)(e,[j,"status"],q),selectWistiaEmbedPermissionError:e=>(0,l.get)(e,[j,"error"],{})},U={...z.actions,setWistiaEmbedPermission:function*(e){yield{type:`${j}/${L}`};try{return yield{type:j,payload:e},{type:`${j}/${C}`,payload:{value:e}}}catch(t){return{type:`${j}/${O}`,payload:{error:t,value:e}}}}},F={[j]:async({payload:e})=>P()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(e)}})},Y=z.reducer,H=window.wp.i18n,W=window.yoast.propTypes;var V=e.n(W);V().string.isRequired;const D=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))})),Z=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),G=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:r,upsellLink:a,isProductCopy:i,title:l,upsellLabel:c,newToText:d,bundleNote:m})=>{const{onClose:u,initialFocus:y}=(0,o.useModalContext)(),p={a:(0,t.createElement)(ye,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(Z,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"yst-px-10 yst-pt-10 yst-introduction-gradient yst-text-center"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(Be,{videoId:"vmrahpfjxp",thumbnail:s,wistiaEmbedPermission:r}),(0,t.createElement)(o.Badge,{className:"yst-absolute yst-top-2 yst-end-4",variant:"info"},"Beta")),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase yst-flex yst-gap-2 yst-items-center"},(0,t.createElement)("span",{className:"yst-logo-icon"}),d))),(0,t.createElement)("div",{className:"yst-px-10 yst-pb-4 yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},l),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},i?(0,n.createInterpolateElement)((0,H.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,H.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for product titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p):(0,n.createInterpolateElement)((0,H.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,H.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},(0,t.createElement)(o.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:a,target:"_blank",ref:y},(0,t.createElement)(D,{className:"yst--ms-1 yst-me-2 yst-h-5 yst-w-5"}),c,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,H.__)("(Opens in a new browser tab)","wordpress-seo")))),m,(0,t.createElement)(o.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:u},(0,H.__)("Close","wordpress-seo"))))};G.propTypes={learnMoreLink:V().string.isRequired,upsellLink:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired,title:V().string,upsellLabel:V().string,newToText:V().string,isProductCopy:V().bool,bundleNote:V().oneOfType([V().string,V().element])},G.defaultProps={title:(0,H.__)("Use AI to write your titles & meta descriptions!","wordpress-seo"),upsellLabel:(0,H.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,H.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium"),newToText:"Yoast SEO Premium",isProductCopy:!1,bundleNote:""};const K=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:r,upsellLink:a,upsellLabel:i})=>{const{onClose:l,initialFocus:c}=(0,o.useModalContext)(),d={a:(0,t.createElement)(ye,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(Z,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"}),br:(0,t.createElement)("br",null)};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"yst-px-10 yst-pt-10 yst-introduction-gradient yst-text-center"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(Be,{videoId:"vun9z1dpfh",thumbnail:s,wistiaEmbedPermission:r}),(0,t.createElement)(o.Badge,{className:"yst-absolute yst-end-4 yst-text-center yst-justify-center",variant:"info",style:{top:"-8px"}},(0,H.__)("Beta","wordpress-seo-premium"))),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase yst-flex yst-gap-2 yst-items-center"},(0,t.createElement)("span",{className:"yst-logo-icon"}),"Yoast SEO Premium"))),(0,t.createElement)("div",{className:"yst-px-10 yst-pb-4 yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},(0,H.sprintf)(/* translators: %s: Expands to "Yoast AI" */
(0,H.__)("Optimize your SEO content with %s","wordpress-seo"),"Yoast AI")),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},(0,n.createInterpolateElement)((0,H.sprintf)(/* translators: %1$s is a break tag; %2$s and %3$s are anchor tags; %4$s is the arrow icon. */
(0,H.__)("Make content editing a breeze! Optimize your SEO content with quick, actionable suggestions at the click of a button.%1$s%2$sLearn more%3$s%4$s","wordpress-seo"),"<br/>","<a>","<ArrowNarrowRightIcon />","</a>"),d))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-6"},(0,t.createElement)(o.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:a,target:"_blank",ref:c},(0,t.createElement)(D,{className:"yst--ms-1 yst-me-2 yst-h-5 yst-w-5"}),i,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,H.__)("(Opens in a new browser tab)","wordpress-seo")))),(0,t.createElement)(o.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:l},(0,H.__)("Close","wordpress-seo"))))};K.propTypes={learnMoreLink:V().string.isRequired,upsellLink:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired,upsellLabel:V().string},K.defaultProps={upsellLabel:(0,H.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,H.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium")};const J=({handleRefreshClick:e,supportLink:s})=>(0,t.createElement)("div",{className:"yst-flex yst-gap-2"},(0,t.createElement)(o.Button,{onClick:e},(0,H.__)("Refresh this page","wordpress-seo")),(0,t.createElement)(o.Button,{variant:"secondary",as:"a",href:s,target:"_blank",rel:"noopener"},(0,H.__)("Contact support","wordpress-seo")));J.propTypes={handleRefreshClick:V().func.isRequired,supportLink:V().string.isRequired};const Q=({handleRefreshClick:e,supportLink:s})=>(0,t.createElement)("div",{className:"yst-grid yst-grid-cols-1 yst-gap-y-2"},(0,t.createElement)(o.Button,{className:"yst-order-last",onClick:e},(0,H.__)("Refresh this page","wordpress-seo")),(0,t.createElement)(o.Button,{variant:"secondary",as:"a",href:s,target:"_blank",rel:"noopener"},(0,H.__)("Contact support","wordpress-seo")));Q.propTypes={handleRefreshClick:V().func.isRequired,supportLink:V().string.isRequired};const X=({error:e,children:s})=>(0,t.createElement)("div",{role:"alert",className:"yst-max-w-screen-sm yst-p-8 yst-space-y-4"},(0,t.createElement)(o.Title,null,(0,H.__)("Something went wrong. An unexpected error occurred.","wordpress-seo")),(0,t.createElement)("p",null,(0,H.__)("We're very sorry, but it seems like the following error has interrupted our application:","wordpress-seo")),(0,t.createElement)(o.Alert,{variant:"error"},(null==e?void 0:e.message)||(0,H.__)("Undefined error message.","wordpress-seo")),(0,t.createElement)("p",null,(0,H.__)("Unfortunately, this means that any unsaved changes in this section will be lost. You can try and refresh this page to resolve the problem. If this error still occurs, please get in touch with our support team, and we'll get you all the help you need!","wordpress-seo")),s);X.propTypes={error:V().object.isRequired,children:V().node},X.VerticalButtons=Q,X.HorizontalButtons=J;var ee;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},te.apply(this,arguments)}V().string,V().node.isRequired,V().node.isRequired,V().node,V().oneOf(Object.keys({lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}));const se=e=>t.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),ee||(ee=t.createElement("path",{fill:"#fff",d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0Zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0 1 38.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2Zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0 1 55.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 0 0 106.4-39.6l61.8 107.2a283.9 283.9 0 0 1-168.2 54.8ZM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4Z"}))),re=window.ReactDOM;var ae,ne,ie;(ne=ae||(ae={})).Pop="POP",ne.Push="PUSH",ne.Replace="REPLACE",function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(ie||(ie={})),new Set(["lazy","caseSensitive","path","id","index","children"]),Error;const oe=["post","put","patch","delete"],le=(new Set(oe),["get",...oe]);new Set(le),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred"),t.Component,t.startTransition,new Promise((()=>{})),t.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(e){}var ce,de,me,ue;new Map,t.startTransition,re.flushSync,t.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(ue=ce||(ce={})).UseScrollRestoration="useScrollRestoration",ue.UseSubmit="useSubmit",ue.UseSubmitFetcher="useSubmitFetcher",ue.UseFetcher="useFetcher",ue.useViewTransitionState="useViewTransitionState",(me=de||(de={})).UseFetcher="useFetcher",me.UseFetchers="useFetchers",me.UseScrollRestoration="useScrollRestoration",V().string.isRequired,V().string;const ye=({href:e,children:s,...r})=>(0,t.createElement)(o.Link,{target:"_blank",rel:"noopener noreferrer",...r,href:e},s,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,H.__)("(Opens in a new browser tab)","wordpress-seo")));ye.propTypes={href:V().string.isRequired,children:V().node},ye.defaultProps={children:null};const pe=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));var we,ge,fe;function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},he.apply(this,arguments)}const Ee=e=>t.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),we||(we=t.createElement("defs",null,t.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),ge||(ge=t.createElement("path",{d:"M250 392.04 98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z",className:"star-rating-half_svg__cls-1"})),fe||(fe=t.createElement("path",{d:"m250 9.04 73.67 149.27.93 1.88 2.08.3 164.72 23.94-119.19 116.19-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 184.43l164.72-23.9 2.08-.3.93-1.88L250 9.04m0-9-77.25 156.49L0 181.64l125 121.89-29.51 172L250 394.3l154.51 81.23-29.51-172 125-121.89-172.75-25.11L250 0Z",className:"star-rating-half_svg__cls-1"})),t.createElement("path",{d:"m500 181.64-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z",style:{fill:"#f3f4f6"}}));function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},ve.apply(this,arguments)}const be=e=>t.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),t.createElement("path",{d:"m250 0 77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z",style:{fill:"#fbbf24"}}));var xe,_e,ke,Ne,Re,Se,Pe,Le,Ce;function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},Oe.apply(this,arguments)}const qe=e=>t.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),xe||(xe=t.createElement("path",{fill:"#a4286a",d:"M80 0h340a80 80 0 0 1 80 80v420H80a80 80 0 0 1-80-80V80A80 80 0 0 1 80 0z"})),_e||(_e=t.createElement("path",{fill:"#6c2548",d:"M437.61 2 155.89 500H500V80a80 80 0 0 0-62.39-78z"})),ke||(ke=t.createElement("path",{fill:"#fff",d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 0 1 0 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z"})),Ne||(Ne=t.createElement("circle",{cx:368.33,cy:124.68,r:97.34,fill:"#9fda4f",transform:"rotate(-45 368.335 124.68)"})),Re||(Re=t.createElement("path",{fill:"#77b227",d:"m416.2 39.93-95.74 169.51A97.34 97.34 0 1 0 416.2 39.93z"})),Se||(Se=t.createElement("path",{fill:"#fec228",d:"m294.78 254.75-.15-.08-.13-.07a63.6 63.6 0 0 0-62.56 110.76h.13a63.6 63.6 0 0 0 62.71-110.67z"})),Pe||(Pe=t.createElement("path",{fill:"#f49a00",d:"m294.5 254.59-62.56 110.76a63.6 63.6 0 1 0 62.56-110.76z"})),Le||(Le=t.createElement("path",{fill:"#ff4e47",d:"M222.31 450.07A38.16 38.16 0 0 0 203 416.83a38.18 38.18 0 1 0 19.41 33.27z"})),Ce||(Ce=t.createElement("path",{fill:"#ed261f",d:"m202.9 416.8-37.54 66.48a38.17 38.17 0 0 0 37.54-66.48z"}))),$e=({link:e,linkProps:s,isPromotionActive:r})=>{let a=(0,n.useMemo)((()=>(0,H.__)("Use AI to generate titles and meta descriptions, automatically redirect deleted pages, get 24/7 support, and much, much more!","wordpress-seo")),[]),i=(0,n.createInterpolateElement)((0,H.sprintf)(/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
(0,H.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:(0,t.createElement)("span",{className:"yst-whitespace-nowrap"})});const l=r("black-friday-2024-promotion");return l&&(a=(0,n.useMemo)((()=>(0,H.__)("If you were thinking about upgrading, now's the time! 30% OFF ends 3rd Dec 11am (CET)","wordpress-seo")),[]),i=(0,n.createInterpolateElement)((0,H.sprintf)(/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
(0,H.__)("%1$sBuy%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:(0,t.createElement)("span",{className:"yst-whitespace-nowrap"})})),(0,t.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},(0,t.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none yst-relative yst-z-10 yst-mt-[-2.6rem]"},(0,t.createElement)(qe,null)),l&&(0,t.createElement)("div",{className:"sidebar__sale_banner_container"},(0,t.createElement)("div",{className:"sidebar__sale_banner"},(0,t.createElement)("span",{className:"banner_text"},(0,H.__)("30% OFF - BLACK FRIDAY","wordpress-seo")))),(0,t.createElement)(o.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},i),(0,t.createElement)("p",{className:"yst-mt-2"},a),(0,t.createElement)(o.Button,{as:"a",variant:"upsell",href:e,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500",...s},(0,t.createElement)("span",null,l?(0,H.__)("Buy now","wordpress-seo"):i),(0,t.createElement)(pe,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),(0,t.createElement)("p",{className:"yst-text-center yst-text-xs yst-mx-2 yst-font-light yst-leading-5 yst-mt-2"},!l&&(0,t.createElement)(t.Fragment,null,(0,H.__)("Only $/€/£99 per year (ex VAT)","wordpress-seo"),(0,t.createElement)("br",null)),(0,H.__)("30-day money back guarantee.","wordpress-seo")),(0,t.createElement)("hr",{className:"yst-border-t yst-border-primary-300 yst-my-4"}),(0,t.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},(0,H.__)("Read reviews from real users","wordpress-seo")),(0,t.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},(0,t.createElement)(se,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)("span",{className:"yst-flex yst-gap-1"},(0,t.createElement)(be,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(be,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(be,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(be,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(Ee,{className:"yst-w-5 yst-h-5"})),(0,t.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};$e.propTypes={link:V().string.isRequired,linkProps:V().object,isPromotionActive:V().func},$e.defaultProps={linkProps:{},isPromotionActive:l.noop};const Ie=({premiumLink:e,premiumUpsellConfig:s,isPromotionActive:r})=>{const a=r("black-friday-2024-promotion");return(0,t.createElement)(o.Paper,{as:"div",className:"xl:yst-max-w-3xl"},a&&(0,t.createElement)("div",{className:"yst-rounded-t-lg yst-h-9 yst-flex yst-justify-between yst-items-center yst-bg-black yst-text-amber-300 yst-px-4 yst-text-lg yst-border-b yst-border-amber-300 yst-border-solid yst-font-semibold"},(0,t.createElement)("div",null,(0,H.__)("30% OFF","wordpress-seo")),(0,t.createElement)("div",null,(0,H.__)("BLACK FRIDAY","wordpress-seo"))),(0,t.createElement)("div",{className:"yst-p-6 yst-flex yst-flex-col"},(0,t.createElement)(o.Title,{as:"h2",size:"4",className:"yst-text-xl yst-text-primary-500"},(0,H.sprintf)(/* translators: %s expands to "Yoast SEO" Premium */
(0,H.__)("Upgrade to %s","wordpress-seo"),"Yoast SEO Premium")),(0,t.createElement)("ul",{className:"yst-grid yst-grid-cols-1 sm:yst-grid-cols-2 yst-gap-x-6 yst-list-disc yst-ps-[1em] yst-list-outside yst-text-slate-800 yst-mt-6"},[(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$sAI%2$s: Better SEO titles and meta descriptions, faster.","wordpress-seo"),"<strong>","</strong>"),(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$sMultiple keywords%2$s: Rank higher for more searches.","wordpress-seo"),"<strong>","</strong>"),(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$sSuper fast%2$s internal linking suggestions.","wordpress-seo"),"<strong>","</strong>"),(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$sNo more broken links%2$s: Automatic redirect manager.","wordpress-seo"),"<strong>","</strong>"),(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$sAppealing social previews%2$s people actually want to click on.","wordpress-seo"),"<strong>","</strong>"),(0,H.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,H.__)("%1$s24/7 support%2$s: Also on evenings and weekends.","wordpress-seo"),"<strong>","</strong>")].map(((e,s)=>(0,t.createElement)("li",{key:`upsell-benefit-${s}`},(0,n.createInterpolateElement)(e,{strong:(0,t.createElement)("span",{className:"yst-font-semibold"})}))))),(0,t.createElement)(o.Button,{as:"a",variant:"upsell",size:"extra-large",href:e,className:"yst-gap-2 yst-mt-4",target:"_blank",rel:"noopener",...s},a?(0,H.__)("Claim your 30% off now!","wordpress-seo"):(0,H.sprintf)(/* translators: %s expands to "Yoast SEO" Premium */
(0,H.__)("Explore %s now!","wordpress-seo"),"Yoast SEO Premium"),(0,t.createElement)(pe,{className:"yst-w-4 yst-h-4 yst-icon-rtl"}))))};Ie.propTypes={premiumLink:V().string.isRequired,premiumUpsellConfig:V().object,isPromotionActive:V().func},Ie.defaultProps={premiumUpsellConfig:{},isPromotionActive:l.noop},V().string.isRequired,V().object.isRequired,V().string.isRequired,V().func.isRequired,t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))})),V().bool.isRequired,V().func,V().func,V().string.isRequired,V().string.isRequired,V().string.isRequired,V().string.isRequired;const Ae=window.yoast.reactHelmet,Be=({videoId:e,thumbnail:s,wistiaEmbedPermission:r})=>{const[a,i]=(0,n.useState)(r.value?B:I),l=(0,n.useCallback)((()=>i(B)),[i]),c=(0,n.useCallback)((()=>{r.value?l():i(A)}),[r.value,l,i]),d=(0,n.useCallback)((()=>i(I)),[i]),m=(0,n.useCallback)((()=>{r.set(!0),l()}),[r.set,l]);return(0,t.createElement)(t.Fragment,null,r.value&&(0,t.createElement)(Ae.Helmet,null,(0,t.createElement)("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0})),(0,t.createElement)("div",{className:"yst-relative yst-w-full yst-h-0 yst-pt-[56.25%] yst-overflow-hidden yst-rounded-md yst-drop-shadow-md yst-bg-white"},a===I&&(0,t.createElement)("button",{type:"button",className:"yst-absolute yst-inset-0 yst-button yst-p-0 yst-border-none yst-bg-white yst-transition-opacity yst-duration-1000 yst-opacity-100",onClick:c},(0,t.createElement)("img",{className:"yst-w-full yst-h-auto",alt:"",loading:"lazy",decoding:"async",...s})),a===A&&(0,t.createElement)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-flex-col yst-items-center yst-justify-center yst-bg-white"},(0,t.createElement)("p",{className:"yst-max-w-xs yst-mx-auto yst-text-center"},r.status===$&&(0,t.createElement)(o.Spinner,null),r.status!==$&&(0,H.sprintf)(/* translators: %1$s expands to Yoast SEO. %2$s expands to Wistia. */
(0,H.__)("To see this video, you need to allow %1$s to load embedded videos from %2$s.","wordpress-seo"),"Yoast SEO","Wistia")),(0,t.createElement)("div",{className:"yst-flex yst-mt-6 yst-gap-x-4"},(0,t.createElement)(o.Button,{type:"button",variant:"secondary",onClick:d,disabled:r.status===$},(0,H.__)("Deny","wordpress-seo")),(0,t.createElement)(o.Button,{type:"button",variant:"primary",onClick:m,disabled:r.status===$},(0,H.__)("Allow","wordpress-seo")))),r.value&&a===B&&(0,t.createElement)("div",{className:"yst-absolute yst-w-full yst-h-full yst-top-0 yst-right-0"},null===e&&(0,t.createElement)(o.Spinner,{className:"yst-h-full yst-mx-auto"}),null!==e&&(0,t.createElement)("div",{className:`wistia_embed wistia_async_${e} videoFoam=true`}))))};Be.propTypes={videoId:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired},t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),V().bool.isRequired,V().func.isRequired,V().func,V().string;const je="yoast-seo/introductions";window.YoastSEO=window.YoastSEO||{};const ze=(0,n.createContext)({}),Te=({children:e,initialComponents:r})=>{const[a,i]=(0,n.useState)(r),o=(0,s.useSelect)((e=>e(je).selectIntroductions()),[]),c=(0,n.useCallback)(((e,t)=>{(0,l.find)(o,{id:e})?i((s=>({...s,[e]:t}))):console.error("Warning: Introductions received a registration for an unknown key:",e)}),[o,i]);return(0,n.useEffect)((()=>{window.YoastSEO._registerIntroductionComponent=c}),[c]),(0,t.createElement)(ze.Provider,{value:a},e)};Te.propTypes={children:V().node.isRequired,initialComponents:V().object.isRequired};const Me=()=>{const e=(0,s.useSelect)((e=>e(je).selectCurrentIntroduction()),[]),r=(0,n.useContext)(ze),a=(0,n.useMemo)((()=>null==r?void 0:r[null==e?void 0:e.id]),[e,r]);return a?(0,t.createElement)(a,null):null},Ue=({children:e})=>{const[s,r]=(0,n.useState)(!0),a=(0,n.useRef)(null),i=(0,n.useCallback)((()=>r(!1)),[]);return(0,t.createElement)(o.Modal,{className:"yst-introduction-modal yst-h-[calc(100vh - 1rem)] sm:yst-h-[calc(100vh - 2rem)] md:yst-h-[calc(100vh - 5rem)]) yst-overflow-y-auto",isOpen:s,onClose:i,initialFocus:a},(0,t.createElement)(o.Modal.Panel,{className:"yst-max-w-lg yst-p-0 yst-rounded-3xl"},e))};Ue.propTypes={children:V().node.isRequired};const Fe="introductions",Ye=(0,c.createEntityAdapter)({selectId:e=>e.id,sortComparer:(e,t)=>e.priority===t.priority?0:e.priority<t.priority?-1:1}),He=e=>({id:e.id||(0,c.nanoid)(),priority:e.priority||0}),We=(0,c.createSlice)({name:Fe,initialState:Ye.getInitialState({current:0}),reducers:{addIntroduction:{reducer:Ye.addOne,prepare:e=>({payload:He(e)})},addIntroductions:{reducer:Ye.addMany,prepare:e=>({payload:(0,l.map)(e,He)})},setIntroductions:{reducer:Ye.setAll,prepare:e=>({payload:(0,l.map)(e,He)})}}}),Ve=We.getInitialState,De=Ye.getSelectors((e=>(0,l.get)(e,Fe,{}))),Ze={selectCurrentIntroductionIndex:e=>(0,l.get)(e,[Fe,"current"],0),selectIntroduction:De.selectById,selectIntroductions:De.selectAll};Ze.selectCurrentIntroduction=(0,c.createSelector)([Ze.selectCurrentIntroductionIndex,Ze.selectIntroductions],((e,t)=>t[e]));const Ge=We.actions,Ke=We.reducer,Je="wpseoIntroductions";a()((()=>{const e=(0,l.get)(window,`${Je}.introductions`,[]);if((0,l.isEmpty)(e))return;const r={};if((0,l.isEmpty)(r))return;((e={})=>{(0,s.register)((e=>(0,s.createReduxStore)(je,{actions:{...Ge,...h,...N,...U},selectors:{...Ze,...f,...k,...M},initialState:(0,l.merge)({},{[Fe]:Ve(),[p]:g(),[b]:_(),[j]:T()},e),reducer:(0,s.combineReducers)({[Fe]:Ke,[p]:E,[b]:R,[j]:Y}),controls:{...F}}))(e))})({[p]:(0,l.get)(window,`${Je}.linkParams`,{}),[b]:(0,l.get)(window,`${Je}.pluginUrl`,""),[j]:{value:"1"===(0,l.get)(window,`${Je}.wistiaEmbedPermission`,!1)}}),(0,s.dispatch)(je).setIntroductions(e);const a={isRtl:Boolean((0,l.get)(window,`${Je}.isRtl`,!1))},c=document.createElement("div");c.id="wpseo-introductions",document.body.appendChild(c),(0,n.render)((0,t.createElement)(o.Root,{context:a},(0,t.createElement)(Te,{initialComponents:r},(0,t.createElement)(Ue,null,(0,t.createElement)(Me,null)))),c,(()=>{(0,i.doAction)("yoast.introductions.ready")}))}))})();