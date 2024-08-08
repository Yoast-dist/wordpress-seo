(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,s=window.wp.data,a=window.wp.domReady;var r=e.n(a);const n=window.wp.element,l=window.wp.hooks,i=window.yoast.uiLibrary,o=window.lodash,c=window.yoast.reduxJsToolkit,m="adminUrl",d=(0,c.createSlice)({name:m,initialState:"",reducers:{setAdminUrl:(e,{payload:t})=>t}}),y=(d.getInitialState,{selectAdminUrl:e=>(0,o.get)(e,m,"")});y.selectAdminLink=(0,c.createSelector)([y.selectAdminUrl,(e,t)=>t],((e,t="")=>{try{return new URL(t,e).href}catch(t){return e}})),d.actions,d.reducer;const u=window.wp.url,p="linkParams",w=(0,c.createSlice)({name:p,initialState:{},reducers:{setLinkParams:(e,{payload:t})=>t}}),g=w.getInitialState,f={selectLinkParam:(e,t,s={})=>(0,o.get)(e,`${p}.${t}`,s),selectLinkParams:e=>(0,o.get)(e,p,{})};f.selectLink=(0,c.createSelector)([f.selectLinkParams,(e,t)=>t,(e,t,s={})=>s],((e,t,s)=>(0,u.addQueryArgs)(t,{...e,...s})));const h=w.actions,E=w.reducer,v=(0,c.createSlice)({name:"notifications",initialState:{},reducers:{addNotification:{reducer:(e,{payload:t})=>{e[t.id]={id:t.id,variant:t.variant,size:t.size,title:t.title,description:t.description}},prepare:({id:e,variant:t="info",size:s="default",title:a,description:r})=>({payload:{id:e||(0,c.nanoid)(),variant:t,size:s,title:a||"",description:r}})},removeNotification:(e,{payload:t})=>(0,o.omit)(e,t)}}),b=(v.getInitialState,v.actions,v.reducer,"pluginUrl"),x=(0,c.createSlice)({name:b,initialState:"",reducers:{setPluginUrl:(e,{payload:t})=>t}}),_=x.getInitialState,N={selectPluginUrl:e=>(0,o.get)(e,b,"")};N.selectImageLink=(0,c.createSelector)([N.selectPluginUrl,(e,t,s="images")=>s,(e,t)=>t],((e,t,s)=>[(0,o.trimEnd)(e,"/"),(0,o.trim)(t,"/"),(0,o.trimStart)(s,"/")].join("/")));const k=x.actions,L=x.reducer,P=window.wp.apiFetch;var S=e.n(P);const R="request",I="success",O="error",C="idle",$="loading",q="showPlay",j="askPermission",A="isPlaying",M="wistiaEmbedPermission",B=(0,c.createSlice)({name:M,initialState:{value:!1,status:C,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,{payload:t})=>{e.value=Boolean(t)}},extraReducers:e=>{e.addCase(`${M}/${R}`,(e=>{e.status=$})),e.addCase(`${M}/${I}`,((e,{payload:t})=>{e.status="success",e.value=Boolean(t&&t.value)})),e.addCase(`${M}/${O}`,((e,{payload:t})=>{e.status="error",e.value=Boolean(t&&t.value),e.error={code:(0,o.get)(t,"error.code",500),message:(0,o.get)(t,"error.message","Unknown")}}))}}),z=B.getInitialState,T={selectWistiaEmbedPermission:e=>(0,o.get)(e,M,{value:!1,status:C}),selectWistiaEmbedPermissionValue:e=>(0,o.get)(e,[M,"value"],!1),selectWistiaEmbedPermissionStatus:e=>(0,o.get)(e,[M,"status"],C),selectWistiaEmbedPermissionError:e=>(0,o.get)(e,[M,"error"],{})},U={...B.actions,setWistiaEmbedPermission:function*(e){yield{type:`${M}/${R}`};try{return yield{type:M,payload:e},{type:`${M}/${I}`,payload:{value:e}}}catch(t){return{type:`${M}/${O}`,payload:{error:t,value:e}}}}},W={[M]:async({payload:e})=>S()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(e)}})},F=B.reducer,Y=window.wp.i18n,H=window.yoast.propTypes;var V=e.n(H);V().string.isRequired;const Z=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))})),D=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),G=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:a,upsellLink:r,isProductCopy:l,title:o,upsellLabel:c,newToText:m,bundleNote:d})=>{const{onClose:y,initialFocus:u}=(0,i.useModalContext)(),p={a:(0,t.createElement)(X,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(D,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"yst-px-10 yst-pt-10 yst-introduction-gradient yst-text-center"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(be,{videoId:"vmrahpfjxp",thumbnail:s,wistiaEmbedPermission:a}),(0,t.createElement)(i.Badge,{className:"yst-absolute yst-top-0 yst-right-2 yst-mt-2 yst-ml-2",variant:"info"},"Beta")),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase yst-flex yst-gap-2 yst-items-center"},m))),(0,t.createElement)("div",{className:"yst-px-10 yst-pb-10 yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},o),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},l?(0,n.createInterpolateElement)((0,Y.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,Y.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for product titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p):(0,n.createInterpolateElement)((0,Y.sprintf)(/* translators: %1$s and %2$s are anchor tags; %3$s is the arrow icon. */
(0,Y.__)("Let AI do some of the thinking for you and help you save time. Get high-quality suggestions for titles and meta descriptions to make your content rank high and look good on social media. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),p))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},(0,t.createElement)(i.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:r,target:"_blank",ref:u},(0,t.createElement)(Z,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),c,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,Y.__)("(Opens in a new browser tab)","wordpress-seo")))),d,(0,t.createElement)(i.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:y},(0,Y.__)("Close","wordpress-seo"))))};G.propTypes={learnMoreLink:V().string.isRequired,upsellLink:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired,title:V().string,upsellLabel:V().string,newToText:V().string,isProductCopy:V().bool,bundleNote:V().oneOfType([V().string,V().element])},G.defaultProps={title:(0,Y.__)("Use AI to write your titles & meta descriptions!","wordpress-seo"),upsellLabel:(0,Y.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,Y.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium"),newToText:(0,Y.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,Y.__)("New in %1$s","wordpress-seo"),"Yoast SEO Premium"),isProductCopy:!1,bundleNote:""};var J;function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},K.apply(this,arguments)}V().string,V().node.isRequired,V().node.isRequired,V().node,V().oneOf(Object.keys({lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}));const Q=e=>t.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),J||(J=t.createElement("path",{fill:"#fff",d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0Zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0 1 38.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2Zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0 1 55.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 0 0 106.4-39.6l61.8 107.2a283.9 283.9 0 0 1-168.2 54.8ZM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4Z"}))),X=({href:e,children:s,...a})=>(0,t.createElement)(i.Link,{target:"_blank",rel:"noopener noreferrer",...a,href:e},s,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,Y.__)("(Opens in a new browser tab)","wordpress-seo")));X.propTypes={href:V().string.isRequired,children:V().node},X.defaultProps={children:null};const ee=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));var te,se,ae;function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},re.apply(this,arguments)}const ne=e=>t.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),te||(te=t.createElement("defs",null,t.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),se||(se=t.createElement("path",{d:"M250 392.04 98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z",className:"star-rating-half_svg__cls-1"})),ae||(ae=t.createElement("path",{d:"m250 9.04 73.67 149.27.93 1.88 2.08.3 164.72 23.94-119.19 116.19-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 184.43l164.72-23.9 2.08-.3.93-1.88L250 9.04m0-9-77.25 156.49L0 181.64l125 121.89-29.51 172L250 394.3l154.51 81.23-29.51-172 125-121.89-172.75-25.11L250 0Z",className:"star-rating-half_svg__cls-1"})),t.createElement("path",{d:"m500 181.64-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z",style:{fill:"#f3f4f6"}}));function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},le.apply(this,arguments)}const ie=e=>t.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),t.createElement("path",{d:"m250 0 77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z",style:{fill:"#fbbf24"}}));var oe,ce,me,de,ye,ue,pe,we,ge;function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},fe.apply(this,arguments)}const he=e=>t.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),oe||(oe=t.createElement("path",{fill:"#a4286a",d:"M80 0h340a80 80 0 0 1 80 80v420H80a80 80 0 0 1-80-80V80A80 80 0 0 1 80 0z"})),ce||(ce=t.createElement("path",{fill:"#6c2548",d:"M437.61 2 155.89 500H500V80a80 80 0 0 0-62.39-78z"})),me||(me=t.createElement("path",{fill:"#fff",d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 0 1 0 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z"})),de||(de=t.createElement("circle",{cx:368.33,cy:124.68,r:97.34,fill:"#9fda4f",transform:"rotate(-45 368.335 124.68)"})),ye||(ye=t.createElement("path",{fill:"#77b227",d:"m416.2 39.93-95.74 169.51A97.34 97.34 0 1 0 416.2 39.93z"})),ue||(ue=t.createElement("path",{fill:"#fec228",d:"m294.78 254.75-.15-.08-.13-.07a63.6 63.6 0 0 0-62.56 110.76h.13a63.6 63.6 0 0 0 62.71-110.67z"})),pe||(pe=t.createElement("path",{fill:"#f49a00",d:"m294.5 254.59-62.56 110.76a63.6 63.6 0 1 0 62.56-110.76z"})),we||(we=t.createElement("path",{fill:"#ff4e47",d:"M222.31 450.07A38.16 38.16 0 0 0 203 416.83a38.18 38.18 0 1 0 19.41 33.27z"})),ge||(ge=t.createElement("path",{fill:"#ed261f",d:"m202.9 416.8-37.54 66.48a38.17 38.17 0 0 0 37.54-66.48z"}))),Ee=({link:e,linkProps:s,promotions:a})=>{const r=(0,n.useMemo)((()=>(0,Y.__)("Use AI to generate titles and meta descriptions, automatically redirect deleted pages, get 24/7 support, and much, much more!","wordpress-seo")),[]),l=(0,n.createInterpolateElement)((0,Y.sprintf)(/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
(0,Y.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:(0,t.createElement)("span",{className:"yst-whitespace-nowrap"})}),o=a.includes("black-friday-2023-promotion"),c=(0,n.createInterpolateElement)((0,Y.sprintf)(/* translators: %1$s and %2$s expand to strong tags. */
(0,Y.__)("%1$sSAVE 30%%%2$s on your 12 month subscription","wordpress-seo"),"<strong>","</strong>"),{strong:(0,t.createElement)("strong",null)});return(0,t.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},(0,t.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none yst-relative yst-z-10 yst-mt-[-2.6rem]"},(0,t.createElement)(he,null)),o&&(0,t.createElement)("div",{className:"sidebar__sale_banner_container"},(0,t.createElement)("div",{className:"sidebar__sale_banner"},(0,t.createElement)("span",{className:"banner_text"},(0,Y.__)("BLACK FRIDAY - 30% OFF","wordpress-seo")))),(0,t.createElement)(i.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},l),(0,t.createElement)("p",{className:"yst-mt-2"},r),o&&(0,t.createElement)("div",{className:"yst-text-center yst-border-t-[1px] yst-border-white yst-italic yst-mt-3"},(0,t.createElement)("p",{className:"yst-text-[10px] yst-my-3 yst-mx-0"},c)),(0,t.createElement)(i.Button,{as:"a",variant:"upsell",href:e,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500",...s},(0,t.createElement)("span",null,o?(0,Y.__)("Claim your 30% off now!","wordpress-seo"):l),(0,t.createElement)(ee,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),(0,t.createElement)("p",{className:"yst-text-center yst-text-xs yst-mx-2 yst-font-light yst-leading-5 yst-mt-2"},(0,Y.__)("Only $/€/£99 per year (ex VAT)","wordpress-seo"),(0,t.createElement)("br",null),(0,Y.__)("30-day money back guarantee.","wordpress-seo")),(0,t.createElement)("hr",{className:"yst-border-t yst-border-primary-300 yst-my-4"}),(0,t.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},(0,Y.__)("Read reviews from real users","wordpress-seo")),(0,t.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},(0,t.createElement)(Q,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)("span",{className:"yst-flex yst-gap-1"},(0,t.createElement)(ie,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(ie,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(ie,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(ie,{className:"yst-w-5 yst-h-5"}),(0,t.createElement)(ne,{className:"yst-w-5 yst-h-5"})),(0,t.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};Ee.propTypes={link:V().string.isRequired,linkProps:V().object,promotions:V().array},Ee.defaultProps={linkProps:{},promotions:[]},V().node.isRequired;const ve=window.yoast.reactHelmet,be=({videoId:e,thumbnail:s,wistiaEmbedPermission:a})=>{const[r,l]=(0,n.useState)(a.value?A:q),o=(0,n.useCallback)((()=>l(A)),[l]),c=(0,n.useCallback)((()=>{a.value?o():l(j)}),[a.value,o,l]),m=(0,n.useCallback)((()=>l(q)),[l]),d=(0,n.useCallback)((()=>{a.set(!0),o()}),[a.set,o]);return(0,t.createElement)(t.Fragment,null,a.value&&(0,t.createElement)(ve.Helmet,null,(0,t.createElement)("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0})),(0,t.createElement)("div",{className:"yst-relative yst-w-full yst-h-0 yst-pt-[56.25%] yst-overflow-hidden yst-rounded-md yst-drop-shadow-md yst-bg-white"},r===q&&(0,t.createElement)("button",{type:"button",className:"yst-absolute yst-inset-0 yst-button yst-p-0 yst-border-none yst-bg-white yst-transition-opacity yst-duration-1000 yst-opacity-100",onClick:c},(0,t.createElement)("img",{className:"yst-w-full yst-h-auto",alt:"",loading:"lazy",decoding:"async",...s})),r===j&&(0,t.createElement)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-flex-col yst-items-center yst-justify-center yst-bg-white"},(0,t.createElement)("p",{className:"yst-max-w-xs yst-mx-auto yst-text-center"},a.status===$&&(0,t.createElement)(i.Spinner,null),a.status!==$&&(0,Y.sprintf)(/* translators: %1$s expands to Yoast SEO. %2$s expands to Wistia. */
(0,Y.__)("To see this video, you need to allow %1$s to load embedded videos from %2$s.","wordpress-seo"),"Yoast SEO","Wistia")),(0,t.createElement)("div",{className:"yst-flex yst-mt-6 yst-gap-x-4"},(0,t.createElement)(i.Button,{type:"button",variant:"secondary",onClick:m,disabled:a.status===$},(0,Y.__)("Deny","wordpress-seo")),(0,t.createElement)(i.Button,{type:"button",variant:"primary",onClick:d,disabled:a.status===$},(0,Y.__)("Allow","wordpress-seo")))),a.value&&r===A&&(0,t.createElement)("div",{className:"yst-absolute yst-w-full yst-h-full yst-top-0 yst-left-0"},null===e&&(0,t.createElement)(i.Spinner,{className:"yst-h-full yst-mx-auto"}),null!==e&&(0,t.createElement)("div",{className:`wistia_embed wistia_async_${e} videoFoam=true`}))))};be.propTypes={videoId:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired};const xe=({learnMoreLink:e,thumbnail:s,wistiaEmbedPermission:a,upsellLink:r,upsellLabel:l})=>{const{onClose:o,initialFocus:c}=(0,i.useModalContext)(),m={a:(0,t.createElement)(X,{href:e,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:(0,t.createElement)(D,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"}),br:(0,t.createElement)("br",null)};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"yst-px-10 yst-pt-10 yst-introduction-gradient yst-text-center"},(0,t.createElement)("div",{className:"yst-relative yst-w-full"},(0,t.createElement)(be,{videoId:"vmrahpfjxp",thumbnail:s,wistiaEmbedPermission:a}),(0,t.createElement)(i.Badge,{className:"yst-absolute yst-right-0 yst-mr-4 yst-text-center yst-justify-center",variant:"info",style:{top:"-8px"}},(0,Y.__)("Beta","wordpress-seo-premium"))),(0,t.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("span",{className:"yst-introduction-modal-uppercase yst-flex yst-gap-2 yst-items-center"},(0,t.createElement)("span",{className:"yst-logo-icon"}),"Yoast SEO Premium"))),(0,t.createElement)("div",{className:"yst-px-10 yst-pb-10 yst-flex yst-flex-col yst-items-center"},(0,t.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},(0,t.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},(0,Y.sprintf)(/* translators: %s: Expands to "Yoast AI" */
(0,Y.__)("Optimize your SEO content with %s","wordpress-seo"),"Yoast AI")),(0,t.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},(0,n.createInterpolateElement)((0,Y.sprintf)(/* translators: %1$s is a break tag; %2$s and %3$s are anchor tags; %4$s is the arrow icon. */
(0,Y.__)("Make content editing a breeze! Optimize your SEO content with quick, actionable suggestions at the click of a button.%1$s%2$sLearn more%3$s%4$s","wordpress-seo"),"<br/>","<a>","<ArrowNarrowRightIcon />","</a>"),m))),(0,t.createElement)("div",{className:"yst-w-full yst-flex yst-mt-6"},(0,t.createElement)(i.Button,{as:"a",className:"yst-grow",size:"extra-large",variant:"upsell",href:r,target:"_blank",ref:c},(0,t.createElement)(Z,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),l,(0,t.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
(0,Y.__)("(Opens in a new browser tab)","wordpress-seo")))),(0,t.createElement)(i.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:o},(0,Y.__)("Close","wordpress-seo"))))};xe.propTypes={learnMoreLink:V().string.isRequired,upsellLink:V().string.isRequired,thumbnail:V().shape({src:V().string.isRequired,width:V().string,height:V().string}).isRequired,wistiaEmbedPermission:V().shape({value:V().bool.isRequired,status:V().string.isRequired,set:V().func.isRequired}).isRequired,upsellLabel:V().string},xe.defaultProps={upsellLabel:(0,Y.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
(0,Y.__)("Unlock with %1$s","wordpress-seo"),"Yoast SEO Premium")};const _e="yoast-seo/introductions",Ne=()=>{const e=(0,s.useSelect)((e=>e(_e).selectLink("https://yoa.st/ai-fix-assessments-upsell-learn-more")),[]),a=(0,s.useSelect)((e=>e(_e).selectLink("https://yoa.st/ai-fix-assessments-upsell")),[]),r=(0,s.useSelect)((e=>e(_e).selectImageLink("ai-fix-assessments-thumbnail.png")),[]),l=(0,n.useMemo)((()=>({src:r,width:"432",height:"244"})),[r]),i=(0,s.useSelect)((e=>e(_e).selectWistiaEmbedPermissionValue()),[]),o=(0,s.useSelect)((e=>e(_e).selectWistiaEmbedPermissionStatus()),[]),{setWistiaEmbedPermission:c}=(0,s.useDispatch)(_e),m=(0,n.useMemo)((()=>({value:i,status:o,set:c})),[i,o,c]);return(0,t.createElement)(xe,{learnMoreLink:e,upsellLink:a,thumbnail:l,wistiaEmbedPermission:m})};window.YoastSEO=window.YoastSEO||{};const ke=(0,n.createContext)({}),Le=({children:e,initialComponents:a})=>{const[r,l]=(0,n.useState)(a),i=(0,s.useSelect)((e=>e(_e).selectIntroductions()),[]),c=(0,n.useCallback)(((e,t)=>{(0,o.find)(i,{id:e})?l((s=>({...s,[e]:t}))):console.error("Warning: Introductions received a registration for an unknown key:",e)}),[i,l]);return(0,n.useEffect)((()=>{window.YoastSEO._registerIntroductionComponent=c}),[c]),(0,t.createElement)(ke.Provider,{value:r},e)};Le.propTypes={children:V().node.isRequired,initialComponents:V().object.isRequired};const Pe=()=>{const e=(0,s.useSelect)((e=>e(_e).selectCurrentIntroduction()),[]),a=(0,n.useContext)(ke),r=(0,n.useMemo)((()=>null==a?void 0:a[null==e?void 0:e.id]),[e,a]);return r?(0,t.createElement)(r,null):null},Se=({children:e})=>{const[s,a]=(0,n.useState)(!0),r=(0,n.useRef)(null),l=(0,n.useCallback)((()=>a(!1)),[]);return(0,t.createElement)(i.Modal,{className:"yst-introduction-modal yst-h-[calc(100vh - 1rem)] sm:yst-h-[calc(100vh - 2rem)] md:yst-h-[calc(100vh - 5rem)]) yst-overflow-y-auto",isOpen:s,onClose:l,initialFocus:r},(0,t.createElement)(i.Modal.Panel,{className:"yst-max-w-lg yst-p-0 yst-rounded-3xl"},e))};Se.propTypes={children:V().node.isRequired};const Re="introductions",Ie=(0,c.createEntityAdapter)({selectId:e=>e.id,sortComparer:(e,t)=>e.priority===t.priority?0:e.priority<t.priority?-1:1}),Oe=e=>({id:e.id||(0,c.nanoid)(),priority:e.priority||0}),Ce=(0,c.createSlice)({name:Re,initialState:Ie.getInitialState({current:0}),reducers:{addIntroduction:{reducer:Ie.addOne,prepare:e=>({payload:Oe(e)})},addIntroductions:{reducer:Ie.addMany,prepare:e=>({payload:(0,o.map)(e,Oe)})},setIntroductions:{reducer:Ie.setAll,prepare:e=>({payload:(0,o.map)(e,Oe)})}}}),$e=Ce.getInitialState,qe=Ie.getSelectors((e=>(0,o.get)(e,Re,{}))),je={selectCurrentIntroductionIndex:e=>(0,o.get)(e,[Re,"current"],0),selectIntroduction:qe.selectById,selectIntroductions:qe.selectAll};je.selectCurrentIntroduction=(0,c.createSelector)([je.selectCurrentIntroductionIndex,je.selectIntroductions],((e,t)=>t[e]));const Ae=Ce.actions,Me=Ce.reducer,Be="wpseoIntroductions";r()((()=>{const e=(0,o.get)(window,`${Be}.introductions`,[]);if((0,o.isEmpty)(e))return;((e={})=>{(0,s.register)((e=>(0,s.createReduxStore)(_e,{actions:{...Ae,...h,...k,...U},selectors:{...je,...f,...N,...T},initialState:(0,o.merge)({},{[Re]:$e(),[p]:g(),[b]:_(),[M]:z()},e),reducer:(0,s.combineReducers)({[Re]:Me,[p]:E,[b]:L,[M]:F}),controls:{...W}}))(e))})({[p]:(0,o.get)(window,`${Be}.linkParams`,{}),[b]:(0,o.get)(window,`${Be}.pluginUrl`,""),[M]:{value:"1"===(0,o.get)(window,`${Be}.wistiaEmbedPermission`,!1)}}),(0,s.dispatch)(_e).setIntroductions(e);const a={isRtl:Boolean((0,o.get)(window,`${Be}.isRtl`,!1))},r={"ai-fix-assessments-upsell":Ne},c=document.createElement("div");c.id="wpseo-introductions",document.body.appendChild(c),(0,n.render)((0,t.createElement)(i.Root,{context:a},(0,t.createElement)(Le,{initialComponents:r},(0,t.createElement)(Se,null,(0,t.createElement)(Pe,null)))),c,(()=>{(0,l.doAction)("yoast.introductions.ready")}))}))})();