!function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=301)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},12:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n}));const s={request:"request",success:"success",error:"error"},a={idle:"idle",loading:"loading",success:"success",error:"error"},n={showPlay:"showPlay",askPermission:"askPermission",isPlaying:"isPlaying"}},13:function(e,t){e.exports=window.yoast.reduxJsToolkit},137:function(e,t,r){"use strict";var s=r(3);const a=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));t.a=a},14:function(e,t){e.exports=window.wp.url},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const s=()=>{const e=document.getElementById("wpcontent"),t=document.getElementById("adminmenuwrap");e&&t&&(e.style.minHeight=t.offsetHeight+"px")}},19:function(e,t){e.exports=window.wp.components},242:function(e,t,r){"use strict";var s=r(3);const a=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.a=a},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"k",(function(){return l})),r.d(t,"i",(function(){return d})),r.d(t,"j",(function(){return u})),r.d(t,"b",(function(){return y})),r.d(t,"f",(function(){return m})),r.d(t,"n",(function(){return g})),r.d(t,"l",(function(){return b})),r.d(t,"m",(function(){return h})),r.d(t,"c",(function(){return f})),r.d(t,"g",(function(){return w})),r.d(t,"q",(function(){return j})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return _})),r.d(t,"d",(function(){return P})),r.d(t,"h",(function(){return x})),r.d(t,"u",(function(){return A})),r.d(t,"r",(function(){return M})),r.d(t,"s",(function(){return I})),r.d(t,"t",(function(){return Q}));var s=r(13),a=r(14),n=r(4);const i="linkParams",o=Object(s.createSlice)({name:i,initialState:{},reducers:{setLinkParams:(e,t)=>{let{payload:r}=t;return r}}}),c=o.getInitialState,l={selectLinkParam:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(n.get)(e,`${i}.${t}`,r)},selectLinkParams:e=>Object(n.get)(e,i,{})};l.selectLink=Object(s.createSelector)([l.selectLinkParams,(e,t)=>t],(e,t)=>Object(a.addQueryArgs)(t,e));const d=o.actions,u=o.reducer,y="notifications",p=Object(s.createSlice)({name:y,initialState:{},reducers:{addNotification:{reducer:(e,t)=>{let{payload:r}=t;e[r.id]={id:r.id,variant:r.variant,size:r.size,title:r.title,description:r.description}},prepare:e=>{let{id:t,variant:r="info",size:a="default",title:n,description:i}=e;return{payload:{id:t||Object(s.nanoid)(),variant:r,size:a,title:n||"",description:i}}}},removeNotification:(e,t)=>{let{payload:r}=t;return Object(n.omit)(e,r)}}}),m=p.getInitialState,g={selectNotifications:e=>Object(n.get)(e,y,{}),selectNotification:(e,t)=>Object(n.get)(e,[y,t],null)},b=p.actions,h=p.reducer,f="pluginUrl",O=Object(s.createSlice)({name:f,initialState:"",reducers:{setPluginUrl:(e,t)=>{let{payload:r}=t;return r}}}),w=O.getInitialState,j={selectPluginUrl:e=>Object(n.get)(e,f,"")};j.selectImageLink=Object(s.createSelector)([j.selectPluginUrl,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"images";return r},(e,t)=>t],(e,t,r)=>[Object(n.trimEnd)(e,"/"),Object(n.trim)(t,"/"),Object(n.trimStart)(r,"/")].join("/"));const k=O.actions,_=O.reducer;var v=r(26),E=r.n(v),S=r(12);const P="wistiaEmbedPermission",L=Object(s.createSlice)({name:P,initialState:{value:!1,status:S.b.idle,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,t)=>{let{payload:r}=t;e.value=Boolean(r)}},extraReducers:e=>{e.addCase(`${P}/${S.a.request}`,e=>{e.status=S.b.loading}),e.addCase(`${P}/${S.a.success}`,(e,t)=>{let{payload:r}=t;e.status=S.b.success,e.value=Boolean(r&&r.value)}),e.addCase(`${P}/${S.a.error}`,(e,t)=>{let{payload:r}=t;e.status=S.b.error,e.value=Boolean(r&&r.value),e.error={code:Object(n.get)(r,"error.code",500),message:Object(n.get)(r,"error.message","Unknown")}})}}),x=L.getInitialState,A={selectWistiaEmbedPermission:e=>Object(n.get)(e,P,{value:!1,status:S.b.idle}),selectWistiaEmbedPermissionValue:e=>Object(n.get)(e,[P,"value"],!1),selectWistiaEmbedPermissionStatus:e=>Object(n.get)(e,[P,"status"],S.b.idle),selectWistiaEmbedPermissionError:e=>Object(n.get)(e,[P,"error"],{})},M={...L.actions,setWistiaEmbedPermission:function*(e){yield{type:`${P}/${S.a.request}`};try{return yield{type:P,payload:e},{type:`${P}/${S.a.success}`,payload:{value:e}}}catch(t){return{type:`${P}/${S.a.error}`,payload:{error:t,value:e}}}}},I={[P]:async e=>{let{payload:t}=e;return E()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(t)}})}},Q=L.reducer},26:function(e,t){e.exports=window.wp.apiFetch},281:function(e,t,r){"use strict";var s=r(3);const a=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))}));t.a=a},3:function(e,t){e.exports=window.React},301:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r(19),n=r(5),i=r(52),o=r.n(i),c=r(6),l=r(4),d=r(181),u=r(25),y=r(11),p=r.n(y),m=r(137),g=r(281),b=r(242),h=r(1),f=r(14);var O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(var r=arguments.length,s=new Array(r>2?r-2:0),a=2;a<r;a++)s[a-2]=arguments[a];return Object(n.useSelect)(t=>{var r,a;return null===(r=(a=t("@yoast/academy"))[e])||void 0===r?void 0:r.call(a,...s)},t)};const w=(e,t)=>!(!Object(l.isEmpty)(e)&&!t)||Object.values(e).every(e=>!0===e);var j=()=>{const e=O("selectLinkParams"),t=O("selectPreference",[],"pluginUrl",""),r=O("selectPreference",[],"isPremium",""),a=O("selectPreference",[],"isWooActive",""),n=O("selectPreference",[],"isLocalActive",""),i=O("selectUpsellSettingsAsProps"),o=Object(c.useSvgAria)(),d=Object(s.useMemo)(()=>[{id:"seo_for_beginners",title:"SEO for beginners",description:Object(h.__)("In this free course, you'll get quick wins to make your site rank higher in Google, Bing, and Yahoo.","wordpress-seo"),image:t+"/images/academy/seo_for_beginners.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-seo-beginners-start",e),dependencies:{},hasTrial:!0},{id:"seo_for_wp",title:"Yoast SEO for WordPress (block editor)",description:Object(h.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(h.__)("In this course, you'll learn about how to set up and use the %1$s for WordPress plugin so it makes SEO even easier. This course is meant for users of the block editor.","wordpress-seo"),"Yoast SEO"),image:t+"/images/academy/seo_for_wp.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-seo-wordpress-block-editor-start",e),dependencies:{},hasTrial:!0},{id:"all_around_seo",title:"All-around SEO",description:Object(h.__)("In this course, you'll learn practical SEO skills on every key aspect of SEO, to make your site stand out.","wordpress-seo"),image:t+"/images/academy/all_around_seo.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-all-around-seo-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-all-around-seo-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"wp_for_beginners",title:"WordPress for beginners",description:Object(h.__)("Do you want to set up your own WordPress site? This course will teach you the ins and outs of creating and maintaining a WordPress website!","wordpress-seo"),image:t+"/images/academy/wp_for_beginners.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-wordpress-beginners-start",e),dependencies:{},hasTrial:!0},{id:"copywriting",title:"SEO copywriting",description:Object(h.__)("In this course, you'll learn how to write awesome copy that is optimized for ranking in search engines.","wordpress-seo"),image:t+"/images/academy/copywriting.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-seo-copywriting-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-seo-copywriting-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"structured_data_for_beginners",title:"Structured data for beginners",description:Object(h.__)("Learn how to make your site stand out from the crowd by adding structured data!","wordpress-seo"),image:t+"/images/academy/structured_data_for_beginners.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-structured-data-beginners-start",e),dependencies:{},hasTrial:!0},{id:"keyword_research",title:"Keyword research",description:Object(h.__)("Do you know the essential first step of good SEO? It's keyword research. In this training, you'll learn how to research and select the keywords that will guide searchers to your pages.","wordpress-seo"),image:t+"/images/academy/keyword_research.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-keyword-research-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-keyword-research-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"block_editor",title:"Block editor training",description:Object(h.__)("Start creating block-tastic content with the new WordPress block editor! Learn all about the block editor and what you can do with it.","wordpress-seo"),image:t+"/images/academy/block_editor.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-block-editor-start",e),dependencies:{},hasTrial:!0},{id:"site_structure",title:"Site structure",description:Object(h.__)("A clear site structure benefits your users and is of great importance for SEO. Still, most people seem to forget about this. Get ahead of your competition and learn how to improve your site structure!","wordpress-seo"),image:t+"/images/academy/site_structure.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-site-structure-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-site-structure-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"local",title:"Local SEO",description:Object(h.__)("Do you own a local business? This course will teach you how to make sure your local audience can find you in the search results and on Google Maps!","wordpress-seo"),image:t+"/images/academy/local.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-local-seo-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-local-seo-unlock",e),dependencies:{LOCAL:n},hasTrial:!0},{id:"ecommerce",title:"Ecommerce SEO",description:Object(h.__)("Learn how to optimize your online shop for your customers and for search engines!","wordpress-seo"),image:t+"/images/academy/ecommerce.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-ecommerce-seo-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-ecommerce-seo-unlock",e),dependencies:{WOO:a},hasTrial:!0},{id:"understanding_structured_data",title:"Understanding structured data",description:Object(h.__)("Do you want to take a deep dive into structured data? In this course, you'll learn the theory related to structured data in detail.","wordpress-seo"),image:t+"/images/academy/understanding_structured_data.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-understanding-structured-data-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-understanding-structured-data-unlock",e),dependencies:{PREMIUM:r},hasTrial:!1},{id:"multilingual",title:"International SEO",description:Object(h.__)("Are you selling in countries all over the world? In this course, you’ll learn all about setting up and managing a site that targets people in different languages and locales.","wordpress-seo"),image:t+"/images/academy/multilingual.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-international-seo-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-international-seo-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"crawlability",title:"Technical SEO: Crawlability and indexability",description:Object(h.__)("You have to make it possible for search engines to find your site, so they can display it in the search results. We'll tell you all about how that works in this course!","wordpress-seo"),image:t+"/images/academy/crawlability.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-technical-seo-crawlability-indexability-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-technical-seo-crawlability-indexability-unlock",e),dependencies:{PREMIUM:r},hasTrial:!0},{id:"hosting_and_server",title:"Technical SEO: Hosting and server configuration",description:Object(h.__)("Choosing the right type of hosting for your site is the basis of a solid Technical SEO strategy. Learn all about it in this course!","wordpress-seo"),image:t+"/images/academy/hosting_and_server.png",startLink:Object(f.addQueryArgs)("https://yoa.st/academy-technical-seo-hosting-server-configuration-start",e),upsellLink:Object(f.addQueryArgs)("https://yoa.st/academy-technical-seo-hosting-server-configuration-unlock",e),dependencies:{PREMIUM:r},hasTrial:!1}],[e]);return Object(s.createElement)("div",{className:"yst-p-4 min-[783px]:yst-p-8 yst-mb-8 xl:yst-mb-0"},Object(s.createElement)(c.Paper,{as:"main"},Object(s.createElement)("header",{className:"yst-p-8 yst-border-b yst-border-slate-200"},Object(s.createElement)("div",{className:"yst-max-w-screen-sm"},Object(s.createElement)(c.Title,null,Object(h.__)("Academy","wordpress-seo")),Object(s.createElement)("p",{className:"yst-text-tiny yst-mt-3"},r&&Object(h.sprintf)(// translators: %s for Yoast SEO Premium.
Object(h.__)("Learn vital SEO skills that you can apply at once! Let us take you by the hand and give you practical SEO tips to help you outrank your competitors. Maximize your SEO game! Because your %s subscription gives you unlimited access to all courses.","wordpress-seo"),"Yoast SEO Premium"),!r&&Object(s.createElement)(s.Fragment,null,Object(h.sprintf)(// translators: %s for Yoast SEO.
Object(h.__)("Learn vital SEO skills that you can apply at once! Let us take you by the hand and give you practical SEO tips to help you outrank your competitors. %s comes with five free courses.","wordpress-seo"),"Yoast SEO")," ",Object(s.createElement)(c.Link,p()({href:Object(f.addQueryArgs)("https://yoa.st/academy-page-upsell/",e),target:"_blank"},i),Object(h.sprintf)(// translators: %s for Yoast SEO Premium.
Object(h.__)("Maximize your SEO game by purchasing %s, which grants you unlimited access to all courses.","wordpress-seo"),"Yoast SEO Premium")))))),Object(s.createElement)("div",{className:"yst-h-full yst-p-8"},Object(s.createElement)("div",{className:"yst-max-w-6xl yst-grid yst-gap-6 yst-grid-cols-1 sm:yst-grid-cols-2 min-[783px]:yst-grid-cols-1 lg:yst-grid-cols-2 xl:yst-grid-cols-4"},d.map(e=>Object(s.createElement)(c.Card,{key:"card-course-"+e.id},Object(s.createElement)(c.Card.Header,{className:"yst-h-auto yst-p-0"},Object(s.createElement)("img",{className:"yst-w-full yst-transition yst-duration-200",src:e.image,alt:"",width:500,height:250,loading:"lazy",decoding:"async"}),((e,t)=>!Object(l.isEmpty)(e)&&(t||e.WOO||e.LOCAL))(e.dependencies,r)&&Object(s.createElement)("div",{className:"yst-absolute yst-top-2 yst-right-2 yst-flex yst-gap-1.5"},Object(s.createElement)(c.Badge,{size:"small",variant:"upsell"},Object(h.__)("Premium","wordpress-seo")))),Object(s.createElement)(c.Card.Content,{className:"yst-flex yst-flex-col yst-gap-3"},Object(s.createElement)(c.Title,{as:"h3"},e.title),e.description,!w(e.dependencies,r)&&Object(s.createElement)(c.Link,{href:e.startLink,className:"yst-flex yst-items-center yst-mt-3 yst-no-underline yst-font-medium yst-text-primary-500",target:"_blank"},Object(h.__)("Start free trial lesson","wordpress-seo"),Object(s.createElement)("span",{className:"yst-sr-only"},Object(h.__)("(Opens in a new browser tab)","wordpress-seo")),Object(s.createElement)(b.a,{className:"yst-h-4 yst-w-4 yst-ml-1 yst-icon-rtl"}))),Object(s.createElement)(c.Card.Footer,null,Object(s.createElement)(s.Fragment,null,!w(e.dependencies,r)&&Object(s.createElement)(c.Button,p()({as:"a",id:"button-get-course-"+e.id,className:"yst-gap-2 yst-w-full yst-px-2",variant:"upsell",href:null==e?void 0:e.upsellLink,target:"_blank",rel:"noopener"},i),Object(s.createElement)(m.a,p()({className:"yst-w-5 yst-h-5 yst--ml-1 yst-shrink-0"},o)),Object(h.sprintf)(
/* translators: %1$s expands to Premium. */
Object(h.__)("Unlock with %1$s","wordpress-seo"),"Premium")),w(e.dependencies,r)&&Object(s.createElement)(c.Button,{as:"a",id:"button-start-course-"+e.id,className:"yst-gap-2 yst-w-full yst-px-2 yst-leading-5",variant:"primary",href:e.startLink,target:"_blank",rel:"noopener"},Object(h.__)("Start the course","wordpress-seo"),Object(s.createElement)(g.a,{className:"yst--mr-1 yst-ml-1 yst-h-5 yst-w-5 yst-text-white"}))))))))))},k=r(13);const _=()=>({...Object(l.get)(window,"wpseoScriptData.preferences",{})}),v=Object(k.createSlice)({name:"preferences",initialState:_(),reducers:{}}),E={selectPreference:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(l.get)(e,"preferences."+t,r)},selectPreferences:e=>Object(l.get)(e,"preferences",{})};E.selectUpsellSettingsAsProps=Object(k.createSelector)([e=>E.selectPreference(e,"upsellSettings",{}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"premiumCtbId";return t}],(e,t)=>({"data-action":null==e?void 0:e.actionId,"data-ctb-id":null==e?void 0:e[t]}));const S=v.actions;var P=v.reducer;const L=e=>{let{initialState:t}=e;return Object(n.createReduxStore)("@yoast/academy",{actions:{...u.i,...S},selectors:{...u.k,...E},initialState:Object(l.merge)({},{[u.a]:Object(u.e)(),preferences:_()},t),reducer:Object(n.combineReducers)({[u.a]:u.j,preferences:P})})};o()(()=>{const e=document.getElementById("yoast-seo-academy");if(!e)return;(function(){let{initialState:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.register)(L({initialState:e}))})({initialState:{[u.a]:Object(l.get)(window,"wpseoScriptData.linkParams",{})}}),Object(d.a)();const t=Object(n.select)("@yoast/academy").selectPreference("isRtl",!1);Object(s.render)(Object(s.createElement)(c.Root,{context:{isRtl:t}},Object(s.createElement)(a.SlotFillProvider,null,Object(s.createElement)(j,null))),e)})},4:function(e,t){e.exports=window.lodash},5:function(e,t){e.exports=window.wp.data},52:function(e,t){e.exports=window.wp.domReady},6:function(e,t){e.exports=window.yoast.uiLibrary}});