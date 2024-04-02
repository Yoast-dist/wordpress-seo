(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,s=window.wp.components,a=window.wp.data,r=window.wp.domReady;var i=e.n(r);const n=window.wp.element,o=window.yoast.uiLibrary,l=window.lodash,d=window.yoast.reduxJsToolkit,c=window.wp.url,u="linkParams",y=(0,d.createSlice)({name:u,initialState:{},reducers:{setLinkParams:(e,{payload:t})=>t}}),m=y.getInitialState,p={selectLinkParam:(e,t,s={})=>(0,l.get)(e,`${u}.${t}`,s),selectLinkParams:e=>(0,l.get)(e,u,{})};p.selectLink=(0,d.createSelector)([p.selectLinkParams,(e,t)=>t,(e,t,s={})=>s],((e,t,s)=>(0,c.addQueryArgs)(t,{...e,...s})));const g=y.actions,h=y.reducer,w=(0,d.createSlice)({name:"notifications",initialState:{},reducers:{addNotification:{reducer:(e,{payload:t})=>{e[t.id]={id:t.id,variant:t.variant,size:t.size,title:t.title,description:t.description}},prepare:({id:e,variant:t="info",size:s="default",title:a,description:r})=>({payload:{id:e||(0,d.nanoid)(),variant:t,size:s,title:a||"",description:r}})},removeNotification:(e,{payload:t})=>(0,l.omit)(e,t)}}),f=(w.getInitialState,w.actions,w.reducer,"pluginUrl"),k=(0,d.createSlice)({name:f,initialState:"",reducers:{setPluginUrl:(e,{payload:t})=>t}}),_=(k.getInitialState,{selectPluginUrl:e=>(0,l.get)(e,f,"")});_.selectImageLink=(0,d.createSelector)([_.selectPluginUrl,(e,t,s="images")=>s,(e,t)=>t],((e,t,s)=>[(0,l.trimEnd)(e,"/"),(0,l.trim)(t,"/"),(0,l.trimStart)(s,"/")].join("/"))),k.actions,k.reducer,window.wp.apiFetch;const E="wistiaEmbedPermission",b=(0,d.createSlice)({name:E,initialState:{value:!1,status:"idle",error:{}},reducers:{setWistiaEmbedPermissionValue:(e,{payload:t})=>{e.value=Boolean(t)}},extraReducers:e=>{e.addCase(`${E}/request`,(e=>{e.status="loading"})),e.addCase(`${E}/success`,((e,{payload:t})=>{e.status="success",e.value=Boolean(t&&t.value)})),e.addCase(`${E}/error`,((e,{payload:t})=>{e.status="error",e.value=Boolean(t&&t.value),e.error={code:(0,l.get)(t,"error.code",500),message:(0,l.get)(t,"error.message","Unknown")}}))}});b.getInitialState,b.actions,b.reducer;const v=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))})),S=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))})),L=t.forwardRef((function(e,s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s},e),t.createElement("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),P=window.wp.i18n,O="@yoast/academy",A=(e,t=[],...s)=>(0,a.useSelect)((t=>{var a,r;return null===(a=(r=t(O))[e])||void 0===a?void 0:a.call(r,...s)}),t),x=(e,t)=>!(!(0,l.isEmpty)(e)&&!t)||Object.values(e).every((e=>!0===e)),I=()=>{const e=A("selectLinkParams"),s=A("selectPreference",[],"pluginUrl",""),a=A("selectPreference",[],"isPremium",""),r=A("selectPreference",[],"isWooActive",""),i=A("selectPreference",[],"isLocalActive",""),d=A("selectUpsellSettingsAsProps"),u=(0,o.useSvgAria)(),y=(0,n.useMemo)((()=>[{id:"seo_for_beginners",title:"SEO for beginners",description:(0,P.__)("In this free course, you'll get quick wins to make your site rank higher in Google, Bing, and Yahoo.","wordpress-seo"),image:`${s}/images/academy/seo_for_beginners.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-seo-beginners-start",e),dependencies:{},hasTrial:!0},{id:"seo_for_wp",title:"Yoast SEO for WordPress (block editor)",description:(0,P.sprintf)((0,P.__)("In this course, you'll learn about how to set up and use the %1$s for WordPress plugin so it makes SEO even easier. This course is meant for users of the block editor.","wordpress-seo"),"Yoast SEO"),image:`${s}/images/academy/seo_for_wp.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-seo-wordpress-block-editor-start",e),dependencies:{},hasTrial:!0},{id:"all_around_seo",title:"All-around SEO",description:(0,P.__)("In this course, you'll learn practical SEO skills on every key aspect of SEO, to make your site stand out.","wordpress-seo"),image:`${s}/images/academy/all_around_seo.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-all-around-seo-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-all-around-seo-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"wp_for_beginners",title:"WordPress for beginners",description:(0,P.__)("Do you want to set up your own WordPress site? This course will teach you the ins and outs of creating and maintaining a WordPress website!","wordpress-seo"),image:`${s}/images/academy/wp_for_beginners.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-wordpress-beginners-start",e),dependencies:{},hasTrial:!0},{id:"copywriting",title:"SEO copywriting",description:(0,P.__)("In this course, you'll learn how to write awesome copy that is optimized for ranking in search engines.","wordpress-seo"),image:`${s}/images/academy/copywriting.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-seo-copywriting-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-seo-copywriting-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"structured_data_for_beginners",title:"Structured data for beginners",description:(0,P.__)("Learn how to make your site stand out from the crowd by adding structured data!","wordpress-seo"),image:`${s}/images/academy/structured_data_for_beginners.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-structured-data-beginners-start",e),dependencies:{},hasTrial:!0},{id:"keyword_research",title:"Keyword research",description:(0,P.__)("Do you know the essential first step of good SEO? It's keyword research. In this training, you'll learn how to research and select the keywords that will guide searchers to your pages.","wordpress-seo"),image:`${s}/images/academy/keyword_research.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-keyword-research-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-keyword-research-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"block_editor",title:"Block editor training",description:(0,P.__)("Start creating block-tastic content with the new WordPress block editor! Learn all about the block editor and what you can do with it.","wordpress-seo"),image:`${s}/images/academy/block_editor.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-block-editor-start",e),dependencies:{},hasTrial:!0},{id:"site_structure",title:"Site structure",description:(0,P.__)("A clear site structure benefits your users and is of great importance for SEO. Still, most people seem to forget about this. Get ahead of your competition and learn how to improve your site structure!","wordpress-seo"),image:`${s}/images/academy/site_structure.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-site-structure-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-site-structure-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"local",title:"Local SEO",description:(0,P.__)("Do you own a local business? This course will teach you how to make sure your local audience can find you in the search results and on Google Maps!","wordpress-seo"),image:`${s}/images/academy/local.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-local-seo-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-local-seo-unlock",e),dependencies:{LOCAL:i},hasTrial:!0},{id:"ecommerce",title:"Ecommerce SEO",description:(0,P.__)("Learn how to optimize your online shop for your customers and for search engines!","wordpress-seo"),image:`${s}/images/academy/ecommerce.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-ecommerce-seo-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-ecommerce-seo-unlock",e),dependencies:{WOO:r},hasTrial:!0},{id:"understanding_structured_data",title:"Understanding structured data",description:(0,P.__)("Do you want to take a deep dive into structured data? In this course, you'll learn the theory related to structured data in detail.","wordpress-seo"),image:`${s}/images/academy/understanding_structured_data.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-understanding-structured-data-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-understanding-structured-data-unlock",e),dependencies:{PREMIUM:a},hasTrial:!1},{id:"multilingual",title:"International SEO",description:(0,P.__)("Are you selling in countries all over the world? In this course, you’ll learn all about setting up and managing a site that targets people in different languages and locales.","wordpress-seo"),image:`${s}/images/academy/multilingual.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-international-seo-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-international-seo-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"crawlability",title:"Technical SEO: Crawlability and indexability",description:(0,P.__)("You have to make it possible for search engines to find your site, so they can display it in the search results. We'll tell you all about how that works in this course!","wordpress-seo"),image:`${s}/images/academy/crawlability.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-technical-seo-crawlability-indexability-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-technical-seo-crawlability-indexability-unlock",e),dependencies:{PREMIUM:a},hasTrial:!0},{id:"hosting_and_server",title:"Technical SEO: Hosting and server configuration",description:(0,P.__)("Choosing the right type of hosting for your site is the basis of a solid Technical SEO strategy. Learn all about it in this course!","wordpress-seo"),image:`${s}/images/academy/hosting_and_server.png`,startLink:(0,c.addQueryArgs)("https://yoa.st/academy-technical-seo-hosting-server-configuration-start",e),upsellLink:(0,c.addQueryArgs)("https://yoa.st/academy-technical-seo-hosting-server-configuration-unlock",e),dependencies:{PREMIUM:a},hasTrial:!1}]),[e]);return(0,t.createElement)("div",{className:"yst-p-4 min-[783px]:yst-p-8 yst-mb-8 xl:yst-mb-0"},(0,t.createElement)(o.Paper,{as:"main"},(0,t.createElement)("header",{className:"yst-p-8 yst-border-b yst-border-slate-200"},(0,t.createElement)("div",{className:"yst-max-w-screen-sm"},(0,t.createElement)(o.Title,null,(0,P.__)("Academy","wordpress-seo")),(0,t.createElement)("p",{className:"yst-text-tiny yst-mt-3"},a&&(0,P.sprintf)((0,P.__)("Learn vital SEO skills that you can apply at once! Let us take you by the hand and give you practical SEO tips to help you outrank your competitors. Maximize your SEO game! Because your %s subscription gives you unlimited access to all courses.","wordpress-seo"),"Yoast SEO Premium"),!a&&(0,t.createElement)(t.Fragment,null,(0,P.sprintf)((0,P.__)("Learn vital SEO skills that you can apply at once! Let us take you by the hand and give you practical SEO tips to help you outrank your competitors. %s comes with five free courses.","wordpress-seo"),"Yoast SEO")," ",(0,t.createElement)(o.Link,{href:(0,c.addQueryArgs)("https://yoa.st/academy-page-upsell/",e),target:"_blank",...d},(0,P.sprintf)((0,P.__)("Maximize your SEO game by purchasing %s, which grants you unlimited access to all courses.","wordpress-seo"),"Yoast SEO Premium")))))),(0,t.createElement)("div",{className:"yst-h-full yst-p-8"},(0,t.createElement)("div",{className:"yst-max-w-6xl yst-grid yst-gap-6 yst-grid-cols-1 sm:yst-grid-cols-2 min-[783px]:yst-grid-cols-1 lg:yst-grid-cols-2 xl:yst-grid-cols-4"},y.map((e=>(0,t.createElement)(o.Card,{key:`card-course-${e.id}`},(0,t.createElement)(o.Card.Header,{className:"yst-h-auto yst-p-0"},(0,t.createElement)("img",{className:"yst-w-full yst-transition yst-duration-200",src:e.image,alt:"",width:500,height:250,loading:"lazy",decoding:"async"}),((e,t)=>!(0,l.isEmpty)(e)&&(t||e.WOO||e.LOCAL))(e.dependencies,a)&&(0,t.createElement)("div",{className:"yst-absolute yst-top-2 yst-right-2 yst-flex yst-gap-1.5"},(0,t.createElement)(o.Badge,{size:"small",variant:"upsell"},(0,P.__)("Premium","wordpress-seo")))),(0,t.createElement)(o.Card.Content,{className:"yst-flex yst-flex-col yst-gap-3"},(0,t.createElement)(o.Title,{as:"h3"},e.title),e.description,!x(e.dependencies,a)&&(0,t.createElement)(o.Link,{href:e.startLink,className:"yst-flex yst-items-center yst-mt-3 yst-no-underline yst-font-medium yst-text-primary-500",target:"_blank"},(0,P.__)("Start free trial lesson","wordpress-seo"),(0,t.createElement)("span",{className:"yst-sr-only"},(0,P.__)("(Opens in a new browser tab)","wordpress-seo")),(0,t.createElement)(L,{className:"yst-h-4 yst-w-4 yst-ml-1 yst-icon-rtl"}))),(0,t.createElement)(o.Card.Footer,null,(0,t.createElement)(t.Fragment,null,!x(e.dependencies,a)&&(0,t.createElement)(o.Button,{as:"a",id:`button-get-course-${e.id}`,className:"yst-gap-2 yst-w-full yst-px-2",variant:"upsell",href:null==e?void 0:e.upsellLink,target:"_blank",rel:"noopener",...d},(0,t.createElement)(v,{className:"yst-w-5 yst-h-5 yst--ml-1 yst-shrink-0",...u}),(0,P.sprintf)((0,P.__)("Unlock with %1$s","wordpress-seo"),"Premium")),x(e.dependencies,a)&&(0,t.createElement)(o.Button,{as:"a",id:`button-start-course-${e.id}`,className:"yst-gap-2 yst-w-full yst-px-2 yst-leading-5",variant:"primary",href:e.startLink,target:"_blank",rel:"noopener"},(0,P.__)("Start the course","wordpress-seo"),(0,t.createElement)(S,{className:"yst--mr-1 yst-ml-1 yst-h-5 yst-w-5 yst-text-white"})))))))))))},Q=()=>({...(0,l.get)(window,"wpseoScriptData.preferences",{})}),$=(0,d.createSlice)({name:"preferences",initialState:Q(),reducers:{}}),M={selectPreference:(e,t,s={})=>(0,l.get)(e,`preferences.${t}`,s),selectPreferences:e=>(0,l.get)(e,"preferences",{})};M.selectUpsellSettingsAsProps=(0,d.createSelector)([e=>M.selectPreference(e,"upsellSettings",{}),(e,t="premiumCtbId")=>t],((e,t)=>({"data-action":null==e?void 0:e.actionId,"data-ctb-id":null==e?void 0:e[t]})));const T=$.actions,R=$.reducer;i()((()=>{const e=document.getElementById("yoast-seo-academy");if(!e)return;(({initialState:e={}}={})=>{(0,a.register)((({initialState:e})=>(0,a.createReduxStore)(O,{actions:{...g,...T},selectors:{...p,...M},initialState:(0,l.merge)({},{[u]:m(),preferences:Q()},e),reducer:(0,a.combineReducers)({[u]:h,preferences:R})}))({initialState:e}))})({initialState:{[u]:(0,l.get)(window,"wpseoScriptData.linkParams",{})}}),(()=>{const e=document.getElementById("wpcontent"),t=document.getElementById("adminmenuwrap");e&&t&&(e.style.minHeight=`${t.offsetHeight}px`)})();const r=(0,a.select)(O).selectPreference("isRtl",!1);(0,n.render)((0,t.createElement)(o.Root,{context:{isRtl:r}},(0,t.createElement)(s.SlotFillProvider,null,(0,t.createElement)(I,null))),e)}))})();