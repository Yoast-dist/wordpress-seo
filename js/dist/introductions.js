(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,s=window.wp.data,a=window.wp.domReady;var r=e.n(a);const n=window.wp.element,i=window.wp.hooks,l=window.yoast.uiLibrary,o=window.lodash,c=window.yoast.reduxJsToolkit,m=window.wp.url,d="linkParams",y=(0,c.createSlice)({name:d,initialState:{},reducers:{setLinkParams:(e,{payload:t})=>t}}),u=y.getInitialState,p={selectLinkParam:(e,t,s={})=>(0,o.get)(e,`${d}.${t}`,s),selectLinkParams:e=>(0,o.get)(e,d,{})};p.selectLink=(0,c.createSelector)([p.selectLinkParams,(e,t)=>t,(e,t,s={})=>s],((e,t,s)=>(0,m.addQueryArgs)(t,{...e,...s})));const w=y.actions,g=y.reducer,f=(0,c.createSlice)({name:"notifications",initialState:{},reducers:{addNotification:{reducer:(e,{payload:t})=>{e[t.id]={id:t.id,variant:t.variant,size:t.size,title:t.title,description:t.description}},prepare:({id:e,variant:t="info",size:s="default",title:a,description:r})=>({payload:{id:e||(0,c.nanoid)(),variant:t,size:s,title:a||"",description:r}})},removeNotification:(e,{payload:t})=>(0,o.omit)(e,t)}}),h=(f.getInitialState,f.actions,f.reducer,"pluginUrl"),E=(0,c.createSlice)({name:h,initialState:"",reducers:{setPluginUrl:(e,{payload:t})=>t}}),v=E.getInitialState,b={selectPluginUrl:e=>(0,o.get)(e,h,"")};b.selectImageLink=(0,c.createSelector)([b.selectPluginUrl,(e,t,s="images")=>s,(e,t)=>t],((e,t,s)=>[(0,o.trimEnd)(e,"/"),(0,o.trim)(t,"/"),(0,o.trimStart)(s,"/")].join("/")));const x=E.actions,_=E.reducer,N=window.wp.apiFetch;var k=e.n(N);const P="request",L="success",R="error",S="idle",I="loading",O="showPlay",C="askPermission",$="isPlaying",q="wistiaEmbedPermission",j=(0,c.createSlice)({name:q,initialState:{value:!1,status:S,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,{payload:t})=>{e.value=Boolean(t)}},extraReducers:e=>{e.addCase(`${q}/${P}`,(e=>{e.status=I})),e.addCase(`${q}/${L}`,((e,{payload:t})=>{e.status="success",e.value=Boolean(t&&t.value)})),e.addCase(`${q}/${R}`,((e,{payload:t})=>{e.status="error",e.value=Boolean(t&&t.value),e.error={code:(0,o.get)(t,"error.code",500),message:(0,o.get)(t,"error.message","Unknown")}}))}}),M=j.getInitialState,B={selectWistiaEmbedPermission:e=>(0,o.get)(e,q,{value:!1,status:S}),selectWistiaEmbedPermissionValue:e=>(0,o.get)(e,[q,"value"],!1),selectWistiaEmbedPermissionStatus:e=>(0,o.get)(e,[q,"status"],S),selectWistiaEmbedPermissionError:e=>(0,o.get)(e,[q,"error"],{})},z={...j.actions,setWistiaEmbedPermission:function*(e){yield{type:`${q}/${P}`};try{return yield{type:q,payload:e},{type:`${q}/${L}`,payload:{value:e}}}catch(t){return{type:`${q}/${R}`,payload:{error:t,value:e}}}}},A={[q]:async({payload:e})=>k()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(e)}})},T=j.reducer,W=window.wp.i18n,Y=window.yoast.propTypes;var F=e.n(Y);F().string.isRequired;const H=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))})),U=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),V=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:a,upsellLink:r,isProductCopy:i,title:o,upsellLabel:c,newToText:m,bundleNote:d})=>{const{onClose:y,initialFocus:u}=(0,l.useModalContext)(),p={a:(0,t.createElement)(J,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(U,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})};return(0,t.createElement)("div",{className:"yst-flex yst-flex-col yst-items-center yst-p-10"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(he,{videoId:"vmrahpfjxp",thumbnail:s,wistiaEmbedPermission:a}),(0,t.createElement)(l.Badge,{className:"yst-absolute yst-top-0 yst-right-2 yst-mt-2 yst-ml-2",variant:"info"},"Beta")),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase"},m)),(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},o),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},i?(0,n.createInterpolateElement)((0,W.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,W.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for product titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p):(0,n.createInterpolateElement)((0,W.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,W.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},(0,t.createElement)(l.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:r,target:"_blank",ref:u},(0,t.createElement)(H,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),c,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,W.__)("(Opens in a new browser tab)","wordpress-seo")))),d,(0,t.createElement)(l.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:y},(0,W.__)("Close","wordpress-seo")))};V.propTypes={learnMoreLink:F().string.isRequired,upsellLink:F().string.isRequired,thumbnail:F().shape({src:F().string.isRequired,width:F().string,height:F().string}).isRequired,wistiaEmbedPermission:F().shape({value:F().bool.isRequired,status:F().string.isRequired,set:F().func.isRequired}).isRequired,title:F().string,upsellLabel:F().string,newToText:F().string,isProductCopy:F().bool,bundleNote:F().oneOfType([F().string,F().element])},V.defaultProps={title:(0,W.__)("Use AI to write your titles & meta descriptions!","wordpress-seo"),upsellLabel:(0,W.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,W.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium"),newToText:(0,W.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,W.__)("New in %1$s","wordpress-seo"),"Yoast SEO Premium"),isProductCopy:!1,bundleNote:""};var Z;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},D.apply(this,arguments)}F().string,F().node.isRequired,F().node.isRequired,F().node,F().oneOf(Object.keys({lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}));const G=e=>t.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),Z||(Z=t.createElement("path",{fill:"#fff",d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0Zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0 1 38.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2Zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0 1 55.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 0 0 106.4-39.6l61.8 107.2a283.9 283.9 0 0 1-168.2 54.8ZM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4Z"}))),J=({href:e,children:s,...a})=>(0,t.createElement)(l.Link,{target:"_blank",rel:"noopener noreferrer",...a,href:e},s,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,W.__)("(Opens in a new browser tab)","wordpress-seo")));J.propTypes={href:F().string.isRequired,children:F().node},J.defaultProps={children:null};const K=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));var Q,X,ee;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},te.apply(this,arguments)}const se=e=>t.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),Q||(Q=t.createElement("defs",null,t.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),X||(X=t.createElement("path",{d:"M250 392.04 98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z",className:"star-rating-half_svg__cls-1"})),ee||(ee=t.createElement("path",{d:"m250 9.04 73.67 149.27.93 1.88 2.08.3 164.72 23.94-119.19 116.19-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 184.43l164.72-23.9 2.08-.3.93-1.88L250 9.04m0-9-77.25 156.49L0 181.64l125 121.89-29.51 172L250 394.3l154.51 81.23-29.51-172 125-121.89-172.75-25.11L250 0Z",className:"star-rating-half_svg__cls-1"})),t.createElement("path",{d:"m500 181.64-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z",style:{fill:"#f3f4f6"}}));function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},ae.apply(this,arguments)}const re=e=>t.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),t.createElement("path",{d:"m250 0 77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z",style:{fill:"#fbbf24"}}));var ne,ie,le,oe,ce,me,de,ye,ue;function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},pe.apply(this,arguments)}const we=e=>t.createElement("svg",pe({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),ne||(ne=t.createElement("path",{fill:"#a4286a",d:"M80 0h340a80 80 0 0 1 80 80v420H80a80 80 0 0 1-80-80V80A80 80 0 0 1 80 0z"})),ie||(ie=t.createElement("path",{fill:"#6c2548",d:"M437.61 2 155.89 500H500V80a80 80 0 0 0-62.39-78z"})),le||(le=t.createElement("path",{fill:"#fff",d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 0 1 0 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z"})),oe||(oe=t.createElement("circle",{cx:368.33,cy:124.68,r:97.34,fill:"#9fda4f",transform:"rotate(-45 368.335 124.68)"})),ce||(ce=t.createElement("path",{fill:"#77b227",d:"m416.2 39.93-95.74 169.51A97.34 97.34 0 1 0 416.2 39.93z"})),me||(me=t.createElement("path",{fill:"#fec228",d:"m294.78 254.75-.15-.08-.13-.07a63.6 63.6 0 0 0-62.56 110.76h.13a63.6 63.6 0 0 0 62.71-110.67z"})),de||(de=t.createElement("path",{fill:"#f49a00",d:"m294.5 254.59-62.56 110.76a63.6 63.6 0 1 0 62.56-110.76z"})),ye||(ye=t.createElement("path",{fill:"#ff4e47",d:"M222.31 450.07A38.16 38.16 0 0 0 203 416.83a38.18 38.18 0 1 0 19.41 33.27z"})),ue||(ue=t.createElement("path",{fill:"#ed261f",d:"m202.9 416.8-37.54 66.48a38.17 38.17 0 0 0 37.54-66.48z"}))),ge=({link:e,linkProps:s,promotions:a})=>{const r=(0,n.useMemo)((()=>(0,W.__)("Use AI to generate titles and meta descriptions, automatically redirect deleted pages, get 24/7 support, and much, much more!","wordpress-seo")),[]),i=(0,n.createInterpolateElement)((0,W.sprintf)(/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
(0,W.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:(0,t.createElement)("span",{className:"yst-whitespace-nowrap"})}),o=a.includes("black-friday-2023-promotion"),c=(0,n.createInterpolateElement)((0,W.sprintf)(/* translators: %1$s and %2$s expand to strong tags. */
(0,W.__)("%1$sSAVE 30%%%2$s on your 12 month subscription","wordpress-seo"),"<strong>","</strong>"),{strong:(0,t.createElement)("strong",null)});return(0,t.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},(0,t.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none yst-relative yst-z-10 yst-mt-[-2.6rem]"},(0,t.createElement)(we,null)),o&&(0,t.createElement)("div",{className:"sidebar__sale_banner_container"},(0,t.createElement)("div",{className:"sidebar__sale_banner"},(0,t.createElement)("span",{className:"banner_text"},(0,W.__)("BLACK FRIDAY - 30% OFF","wordpress-seo")))),(0,t.createElement)(l.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},i),(0,t.createElement)("p",{className:"yst-mt-2"},r),o&&(0,t.createElement)("div",{className:"yst-text-center yst-border-t-[1px] yst-border-white yst-italic yst-mt-3"},(0,t.createElement)("p",{className:"yst-text-[10px] yst-my-3 yst-mx-0"},c)),(0,t.createElement)(l.Button,{as:"a",variant:"upsell",href:e,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500",...s},(0,t.createElement)("span",null,o?(0,W.__)("Claim your 30% off now!","wordpress-seo"):i),(0,t.createElement)(K,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),(0,t.createElement)("p",{className:"yst-text-center yst-text-xs yst-mx-2 yst-font-light yst-leading-5 yst-mt-2"},(0,W.__)("Only $/€/£99 per year (ex VAT)","wordpress-seo"),(0,t.createElement)("br",null),(0,W.__)("30-day money back guarantee.","wordpress-seo")),(0,t.createElement)("hr",{className:"yst-border-t yst-border-primary-300 yst-my-4"}),(0,t.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},(0,W.__)("Read reviews from real users","wordpress-seo")),(0,t.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},(0,t.createElement)(G,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)("span",{className:"yst-flex yst-gap-1"},(0,t.createElement)(re,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(re,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(re,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(re,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(se,{className:"yst-w-5 yst-h-5"})),(0,t.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};ge.propTypes={link:F().string.isRequired,linkProps:F().object,promotions:F().array},ge.defaultProps={linkProps:{},promotions:[]},F().node.isRequired;const fe=window.yoast.reactHelmet,he=({videoId:e,thumbnail:s,wistiaEmbedPermission:a})=>{const[r,i]=(0,n.useState)(a.value?$:O),o=(0,n.useCallback)((()=>i($)),[i]),c=(0,n.useCallback)((()=>{a.value?o():i(C)}),[a.value,o,i]),m=(0,n.useCallback)((()=>i(O)),[i]),d=(0,n.useCallback)((()=>{a.set(!0),o()}),[a.set,o]);return(0,t.createElement)(t.Fragment,null,a.value&&(0,t.createElement)(fe.Helmet,null,(0,t.createElement)("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0})),(0,t.createElement)("div",{className:"yst-relative yst-w-full yst-h-0 yst-pt-[56.25%] yst-overflow-hidden yst-rounded-md yst-drop-shadow-md yst-bg-white"},r===O&&(0,t.createElement)("button",{type:"button",className:"yst-absolute yst-inset-0 yst-button yst-p-0 yst-border-none yst-bg-white yst-transition-opacity yst-duration-1000 yst-opacity-100",onClick:c},(0,t.createElement)("img",{className:"yst-w-full yst-h-auto",alt:"",loading:"lazy",decoding:"async",...s})),r===C&&(0,t.createElement)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-flex-col yst-items-center yst-justify-center yst-bg-white"},(0,t.createElement)("p",{className:"yst-max-w-xs yst-mx-auto yst-text-center"},a.status===I&&(0,t.createElement)(l.Spinner,null),a.status!==I&&(0,W.sprintf)(/* translators: %1$s expands to Yoast SEO. %2$s expands to Wistia. */
(0,W.__)("To see this video, you need to allow %1$s to load embedded videos from %2$s.","wordpress-seo"),"Yoast SEO","Wistia")),(0,t.createElement)("div",{className:"yst-flex yst-mt-6 yst-gap-x-4"},(0,t.createElement)(l.Button,{type:"button",variant:"secondary",onClick:m,disabled:a.status===I},(0,W.__)("Deny","wordpress-seo")),(0,t.createElement)(l.Button,{type:"button",variant:"primary",onClick:d,disabled:a.status===I},(0,W.__)("Allow","wordpress-seo")))),a.value&&r===$&&(0,t.createElement)("div",{className:"yst-absolute yst-w-full yst-h-full yst-top-0 yst-left-0"},null===e&&(0,t.createElement)(l.Spinner,{className:"yst-h-full yst-mx-auto"}),null!==e&&(0,t.createElement)("div",{className:`wistia_embed wistia_async_${e} videoFoam=true`}))))};he.propTypes={videoId:F().string.isRequired,thumbnail:F().shape({src:F().string.isRequired,width:F().string,height:F().string}).isRequired,wistiaEmbedPermission:F().shape({value:F().bool.isRequired,status:F().string.isRequired,set:F().func.isRequired}).isRequired};const Ee=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:a,upsellLink:r,upsellLabel:i})=>{const{onClose:o,initialFocus:c}=(0,l.useModalContext)(),m={a:(0,t.createElement)(J,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(U,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"}),br:(0,t.createElement)("br",null)};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"yst-px-10 yst-pt-10 yst-introduction-gradient yst-text-center"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(he,{videoId:"vmrahpfjxp",thumbnail:s,wistiaEmbedPermission:a}),(0,t.createElement)(l.Badge,{className:"yst-absolute yst-right-0 yst-mr-4 yst-text-center yst-justify-center",variant:"info",style:{top:"-8px"}},(0,W.__)("Beta","wordpress-seo-premium"))),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase yst-flex yst-gap-2 yst-items-center"},(0,t.createElement)("span",{className:"yst-logo-icon"}),"Yoast SEO Premium"))),(0,t.createElement)("div",{className:"yst-px-10 yst-pb-10 yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},(0,W.sprintf)(/* translators: %s: Expands to "Yoast AI" */
(0,W.__)("Optimize your SEO content with %s","wordpress-seo"),"Yoast AI")),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},(0,n.createInterpolateElement)((0,W.sprintf)(/* translators: %1$s is a break tag; %2$s and %3$s are anchor tags; %4$s is the arrow icon. */
(0,W.__)("Make content editing a breeze! Optimize your SEO content with quick, actionable suggestions at the click of a button.%1$s%2$sLearn more%3$s%4$s","wordpress-seo"),"<br/>","<a>","<ArrowNarrowRightIcon />","</a>"),m))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-6"},(0,t.createElement)(l.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:r,target:"_blank",ref:c},(0,t.createElement)(H,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),i,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,W.__)("(Opens in a new browser tab)","wordpress-seo")))),(0,t.createElement)(l.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:o},(0,W.__)("Close","wordpress-seo"))))};Ee.propTypes={learnMoreLink:F().string.isRequired,upsellLink:F().string.isRequired,thumbnail:F().shape({src:F().string.isRequired,width:F().string,height:F().string}).isRequired,wistiaEmbedPermission:F().shape({value:F().bool.isRequired,status:F().string.isRequired,set:F().func.isRequired}).isRequired,upsellLabel:F().string},Ee.defaultProps={upsellLabel:(0,W.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,W.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium")};const ve="yoast-seo/introductions",be=()=>{const e=(0,s.useSelect)((e=>e(ve).selectLink("https://yoa.st/ai-fix-assessments-upsell-learn-more")),[]),a=(0,s.useSelect)((e=>e(ve).selectLink("https://yoa.st/ai-fix-assessments-upsell")),[]),r=(0,s.useSelect)((e=>e(ve).selectImageLink("ai-fix-assessments-thumbnail.png")),[]),i=(0,n.useMemo)((()=>({src:r,width:"432",height:"244"})),[r]),l=(0,s.useSelect)((e=>e(ve).selectWistiaEmbedPermissionValue()),[]),o=(0,s.useSelect)((e=>e(ve).selectWistiaEmbedPermissionStatus()),[]),{setWistiaEmbedPermission:c}=(0,s.useDispatch)(ve),m=(0,n.useMemo)((()=>({value:l,status:o,set:c})),[l,o,c]);return(0,t.createElement)(Ee,{learnMoreLink:e,upsellLink:a,thumbnail:i,wistiaEmbedPermission:m})};window.YoastSEO=window.YoastSEO||{};const xe=(0,n.createContext)({}),_e=({children:e,initialComponents:a})=>{const[r,i]=(0,n.useState)(a),l=(0,s.useSelect)((e=>e(ve).selectIntroductions()),[]),c=(0,n.useCallback)(((e,t)=>{(0,o.find)(l,{id:e})?i((s=>({...s,[e]:t}))):console.error("Warning: Introductions received a registration for an unknown key:",e)}),[l,i]);return(0,n.useEffect)((()=>{window.YoastSEO._registerIntroductionComponent=c}),[c]),(0,t.createElement)(xe.Provider,{value:r},e)};_e.propTypes={children:F().node.isRequired,initialComponents:F().object.isRequired};const Ne=()=>{const e=(0,s.useSelect)((e=>e(ve).selectCurrentIntroduction()),[]),a=(0,n.useContext)(xe),r=(0,n.useMemo)((()=>null==a?void 0:a[null==e?void 0:e.id]),[e,a]);return r?(0,t.createElement)(r,null):null},ke=({children:e})=>{const[s,a]=(0,n.useState)(!0),r=(0,n.useRef)(null),i=(0,n.useCallback)((()=>a(!1)),[]);return(0,t.createElement)(l.Modal,{className:"yst-introduction-modal yst-h-[calc(100vh - 1rem)] sm:yst-h-[calc(100vh - 2rem)] md:yst-h-[calc(100vh - 5rem)]) yst-overflow-y-auto",isOpen:s,onClose:i,initialFocus:r},(0,t.createElement)(l.Modal.Panel,{className:"yst-max-w-lg yst-p-0 yst-rounded-3xl"},e))};ke.propTypes={children:F().node.isRequired};const Pe="introductions",Le=(0,c.createEntityAdapter)({selectId:e=>e.id,sortComparer:(e,t)=>e.priority===t.priority?0:e.priority<t.priority?-1:1}),Re=e=>({id:e.id||(0,c.nanoid)(),priority:e.priority||0}),Se=(0,c.createSlice)({name:Pe,initialState:Le.getInitialState({current:0}),reducers:{addIntroduction:{reducer:Le.addOne,prepare:e=>({payload:Re(e)})},addIntroductions:{reducer:Le.addMany,prepare:e=>({payload:(0,o.map)(e,Re)})},setIntroductions:{reducer:Le.setAll,prepare:e=>({payload:(0,o.map)(e,Re)})}}}),Ie=Se.getInitialState,Oe=Le.getSelectors((e=>(0,o.get)(e,Pe,{}))),Ce={selectCurrentIntroductionIndex:e=>(0,o.get)(e,[Pe,"current"],0),selectIntroduction:Oe.selectById,selectIntroductions:Oe.selectAll};Ce.selectCurrentIntroduction=(0,c.createSelector)([Ce.selectCurrentIntroductionIndex,Ce.selectIntroductions],((e,t)=>t[e]));const $e=Se.actions,qe=Se.reducer,je="wpseoIntroductions";r()((()=>{const e=(0,o.get)(window,`${je}.introductions`,[]);if((0,o.isEmpty)(e))return;((e={})=>{(0,s.register)((e=>(0,s.createReduxStore)(ve,{actions:{...$e,...w,...x,...z},selectors:{...Ce,...p,...b,...B},initialState:(0,o.merge)({},{[Pe]:Ie(),[d]:u(),[h]:v(),[q]:M()},e),reducer:(0,s.combineReducers)({[Pe]:qe,[d]:g,[h]:_,[q]:T}),controls:{...A}}))(e))})({[d]:(0,o.get)(window,`${je}.linkParams`,{}),[h]:(0,o.get)(window,`${je}.pluginUrl`,""),[q]:{value:"1"===(0,o.get)(window,`${je}.wistiaEmbedPermission`,!1)}}),(0,s.dispatch)(ve).setIntroductions(e);const a={isRtl:Boolean((0,o.get)(window,`${je}.isRtl`,!1))},r={"ai-fix-assessments-upsell":be},c=document.createElement("div");c.id="wpseo-introductions",document.body.appendChild(c),(0,n.render)((0,t.createElement)(l.Root,{context:a},(0,t.createElement)(_e,{initialComponents:r},(0,t.createElement)(ke,null,(0,t.createElement)(Ne,null)))),c,(()=>{(0,i.doAction)("yoast.introductions.ready")}))}))})();