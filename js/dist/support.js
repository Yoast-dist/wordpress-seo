!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=302)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function s(){return e.exports=s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,s.apply(this,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},102:function(e,t){e.exports=window.yoast.reactHelmet},12:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return n}));const r={request:"request",success:"success",error:"error"},a={idle:"idle",loading:"loading",success:"success",error:"error"},n={showPlay:"showPlay",askPermission:"askPermission",isPlaying:"isPlaying"}},13:function(e,t){e.exports=window.yoast.reduxJsToolkit},138:function(e,t,s){"use strict";var r=s(3);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));t.a=a},14:function(e,t){e.exports=window.wp.url},182:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));const r=()=>{const e=document.getElementById("wpcontent"),t=document.getElementById("adminmenuwrap");e&&t&&(e.style.minHeight=t.offsetHeight+"px")}},19:function(e,t){e.exports=window.wp.components},2:function(e,t){e.exports=window.yoast.propTypes},207:function(e,t,s){"use strict";var r=s(3);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));t.a=a},244:function(e,t,s){"use strict";var r=s(3);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.a=a},25:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"e",(function(){return o})),s.d(t,"k",(function(){return i})),s.d(t,"i",(function(){return u})),s.d(t,"j",(function(){return m})),s.d(t,"b",(function(){return d})),s.d(t,"f",(function(){return y})),s.d(t,"n",(function(){return b})),s.d(t,"l",(function(){return f})),s.d(t,"m",(function(){return O})),s.d(t,"c",(function(){return j})),s.d(t,"g",(function(){return w})),s.d(t,"q",(function(){return h})),s.d(t,"o",(function(){return E})),s.d(t,"p",(function(){return v})),s.d(t,"d",(function(){return N})),s.d(t,"h",(function(){return S})),s.d(t,"u",(function(){return L})),s.d(t,"r",(function(){return q})),s.d(t,"s",(function(){return R})),s.d(t,"t",(function(){return $}));var r=s(13),a=s(14),n=s(4);const l="linkParams",c=Object(r.createSlice)({name:l,initialState:{},reducers:{setLinkParams:(e,t)=>{let{payload:s}=t;return s}}}),o=c.getInitialState,i={selectLinkParam:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(n.get)(e,`${l}.${t}`,s)},selectLinkParams:e=>Object(n.get)(e,l,{})};i.selectLink=Object(r.createSelector)([i.selectLinkParams,(e,t)=>t],(e,t)=>Object(a.addQueryArgs)(t,e));const u=c.actions,m=c.reducer,d="notifications",p=Object(r.createSlice)({name:d,initialState:{},reducers:{addNotification:{reducer:(e,t)=>{let{payload:s}=t;e[s.id]={id:s.id,variant:s.variant,size:s.size,title:s.title,description:s.description}},prepare:e=>{let{id:t,variant:s="info",size:a="default",title:n,description:l}=e;return{payload:{id:t||Object(r.nanoid)(),variant:s,size:a,title:n||"",description:l}}}},removeNotification:(e,t)=>{let{payload:s}=t;return Object(n.omit)(e,s)}}}),y=p.getInitialState,b={selectNotifications:e=>Object(n.get)(e,d,{}),selectNotification:(e,t)=>Object(n.get)(e,[d,t],null)},f=p.actions,O=p.reducer,j="pluginUrl",g=Object(r.createSlice)({name:j,initialState:"",reducers:{setPluginUrl:(e,t)=>{let{payload:s}=t;return s}}}),w=g.getInitialState,h={selectPluginUrl:e=>Object(n.get)(e,j,"")};h.selectImageLink=Object(r.createSelector)([h.selectPluginUrl,function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"images";return s},(e,t)=>t],(e,t,s)=>[Object(n.trimEnd)(e,"/"),Object(n.trim)(t,"/"),Object(n.trimStart)(s,"/")].join("/"));const E=g.actions,v=g.reducer;var x=s(26),_=s.n(x),k=s(12);const N="wistiaEmbedPermission",P=Object(r.createSlice)({name:N,initialState:{value:!1,status:k.b.idle,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,t)=>{let{payload:s}=t;e.value=Boolean(s)}},extraReducers:e=>{e.addCase(`${N}/${k.a.request}`,e=>{e.status=k.b.loading}),e.addCase(`${N}/${k.a.success}`,(e,t)=>{let{payload:s}=t;e.status=k.b.success,e.value=Boolean(s&&s.value)}),e.addCase(`${N}/${k.a.error}`,(e,t)=>{let{payload:s}=t;e.status=k.b.error,e.value=Boolean(s&&s.value),e.error={code:Object(n.get)(s,"error.code",500),message:Object(n.get)(s,"error.message","Unknown")}})}}),S=P.getInitialState,L={selectWistiaEmbedPermission:e=>Object(n.get)(e,N,{value:!1,status:k.b.idle}),selectWistiaEmbedPermissionValue:e=>Object(n.get)(e,[N,"value"],!1),selectWistiaEmbedPermissionStatus:e=>Object(n.get)(e,[N,"status"],k.b.idle),selectWistiaEmbedPermissionError:e=>Object(n.get)(e,[N,"error"],{})},q={...P.actions,setWistiaEmbedPermission:function*(e){yield{type:`${N}/${k.a.request}`};try{return yield{type:N,payload:e},{type:`${N}/${k.a.success}`,payload:{value:e}}}catch(t){return{type:`${N}/${k.a.error}`,payload:{error:t,value:e}}}}},R={[N]:async e=>{let{payload:t}=e;return _()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(t)}})}},$=P.reducer},26:function(e,t){e.exports=window.wp.apiFetch},29:function(e,t,s){var r;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)s.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},3:function(e,t){e.exports=window.React},302:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(19),n=s(5),l=s(52),c=s.n(l),o=s(6),i=s(4),u=s(182),m=s(25),d=s(10),p=s.n(d),y=s(207),b=s(1),f=s(14),O=s(29),j=s.n(O),g=s(93),w=s(2),h=s.n(w),E=s(91);const v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(var s=arguments.length,r=new Array(s>2?s-2:0),a=2;a<s;a++)r[a-2]=arguments[a];return Object(n.useSelect)(t=>{var s,a;return null===(s=(a=t("@yoast/support"))[e])||void 0===s?void 0:s.call(a,...r)},t)},x=e=>{let{id:t,children:s,title:a,description:n=null}=e;const l=v("selectPreference",[],"isPremium");return Object(r.createElement)(E.a,{id:t,title:a,description:n,variant:l?"lg":"xl"},s)};x.propTypes={id:h.a.string,children:h.a.node.isRequired,title:h.a.node.isRequired,description:h.a.node};var _=s(244);const k=e=>{let{imageSrc:t,title:s,description:a,linkHref:n,linkText:l}=e;return Object(r.createElement)(o.Card,null,Object(r.createElement)(o.Card.Header,{className:"yst-h-auto yst-p-0"},Object(r.createElement)("img",{className:"yst-w-full yst-transition yst-duration-200",src:t,alt:"",width:500,height:250,loading:"lazy",decoding:"async"})),Object(r.createElement)(o.Card.Content,{className:"yst-flex yst-flex-col yst-gap-3"},Object(r.createElement)(o.Title,{as:"h3"},s),a),Object(r.createElement)(o.Link,{href:n,className:"yst-flex yst-items-center yst-mt-[18px] yst-no-underline yst-font-medium yst-text-primary-500",target:"_blank"},l,Object(r.createElement)("span",{className:"yst-sr-only"},
/* translators: Hidden accessibility text. */
Object(b.__)("(Opens in a new browser tab)","wordpress-seo")),Object(r.createElement)(_.a,{className:"yst-h-4 yst-w-4 yst-ml-1 yst-icon-rtl"})))};k.propTypes={imageSrc:h.a.string.isRequired,title:h.a.string.isRequired,description:h.a.string.isRequired,linkHref:h.a.string.isRequired,linkText:h.a.string.isRequired};const N=()=>{document.querySelector("#beacon-container .BeaconFabButtonFrame iframe")?window.Beacon("open"):document.querySelector("#yoast-helpscout-beacon button").click()},P=()=>{const e=v("selectPreference",[],"isPremium",!1),t=v("selectPreference",[],"promotions",[]),s=v("selectUpsellSettingsAsProps"),a=v("selectPreference",[],"pluginUrl",""),n=v("selectLinkParams"),l=v("selectLink",[],"https://yoa.st/3t6"),c=v("selectLink",[],"https://yoa.st/jj"),i=v("selectLink",[],"https://yoa.st/help-center-support-card"),u=v("selectLink",[],"https://yoa.st/support-forums-support-card"),m=v("selectLink",[],"https://yoa.st/github-repository-support-card"),d=v("selectLink",[],"https://yoa.st/contact-support-to-unlock-premium-support-section"),O=Object(r.useMemo)(()=>[{title:Object(r.createElement)("span",null,"How do I set up ",Object(r.createElement)("strong",null,"canonical URLs"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/canonical-urls-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I use ",Object(r.createElement)("strong",null,"XML sitemaps"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/xml-sitemaps-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I implement ",Object(r.createElement)("strong",null,"breadcrumbs"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/implement-breadcrumbs-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I ",Object(r.createElement)("strong",null,"submit my sitemap")," to search engines?"),link:Object(f.addQueryArgs)("https://yoa.st/submit-sitemap-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I edit my ",Object(r.createElement)("strong",null,"robots.txt file"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/edit-robots-txt-support-faq",n)},{title:Object(r.createElement)("span",null,"What are the ",Object(r.createElement)("strong",null,"meta robots advanced settings"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/meta-robots-settings-support-faq",n)},{title:Object(r.createElement)("span",null,"Where can I find a ",Object(r.createElement)("strong",null,"glossary")," of SEO terms?"),link:Object(f.addQueryArgs)("https://yoa.st/seo-terms-vocabulary-support-faq",n)},{title:Object(r.createElement)("span",null,"What are ",Object(r.createElement)("strong",null,"transition words"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/transition-words-support-faq",n)}],[]);return Object(r.createElement)("div",{className:"yst-p-4 min-[783px]:yst-p-8"},Object(r.createElement)("div",{className:j()("yst-flex yst-flex-grow yst-flex-wrap",!e&&"xl:yst-pr-[17.5rem]")},Object(r.createElement)(o.Paper,{as:"main",className:"yst-flex-grow yst-mb-8 xl:yst-mb-0"},Object(r.createElement)(o.Paper.Header,null,Object(r.createElement)("div",{className:"yst-max-w-screen-sm"},Object(r.createElement)(o.Title,null,Object(b.__)("Support","wordpress-seo")),Object(r.createElement)("p",{className:"yst-text-tiny yst-mt-3"},Object(b.__)("If you have any questions, need a hand with a technical issue, or just want to say hi, we've got you covered. Get in touch with us and we'll be happy to assist you!","wordpress-seo")))),Object(r.createElement)(o.Paper.Content,null,Object(r.createElement)("div",{className:"yst-max-w-6xl"},Object(r.createElement)(x,{title:Object(b.__)("Frequently asked questions","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Here, you'll find answers to commonly asked questions about using %1$s. If you don't see your question listed, you can have a look at the section below.","wordpress-seo"),"Yoast SEO")},Object(r.createElement)("ul",null,O.map((e,t)=>{let{title:s,link:a}=e;return Object(r.createElement)(r.Fragment,{key:"faq-"+t},t>0&&Object(r.createElement)("hr",{className:"yst-my-3"}),Object(r.createElement)("li",null,Object(r.createElement)(o.Link,{href:a,className:"yst-flex yst-items-center yst-font-medium yst-no-underline",target:"_blank"},s,Object(r.createElement)(y.a,{className:"yst-inline-block yst-ml-1.5 yst-h-3 yst-w-3 yst-icon-rtl"}))))}))),Object(r.createElement)("hr",{className:"yst-my-8"}),Object(r.createElement)(x,{title:Object(b.__)("Additional resources","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Need help with %1$s? These resources are a great place to start!","wordpress-seo"),"Yoast SEO")},Object(r.createElement)("div",{className:"yst-grid yst-gap-6 yst-grid-cols-3 max-sm:yst-grid-cols-1"},Object(r.createElement)(k,{imageSrc:a+"/images/support/help_center.png",title:Object(b.sprintf)(
/* translators: %1$s expands to Yoast. */
Object(b.__)("%1$s's help center","wordpress-seo"),"Yoast"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Have a look at our help center to find articles, tutorials, and other resources to help you get the most out of %1$s!","wordpress-seo"),"Yoast SEO"),linkHref:i,linkText:Object(b.__)("Visit our help center","wordpress-seo")}),Object(r.createElement)(k,{imageSrc:a+"/images/support/support_forums.png",title:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("WordPress support forum for %1$s","wordpress-seo"),"Yoast SEO"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("In the WordPress support forum for %1$s you can find answers or ask for help from %1$s users in the WordPress community.","wordpress-seo"),"Yoast SEO"),linkHref:u,linkText:Object(b.__)("Visit WordPress forum","wordpress-seo")}),Object(r.createElement)(k,{imageSrc:a+"/images/support/github.png",title:Object(b.__)("Raise a bug report on GitHub","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Have you stumbled upon a bug while using %1$s? Please raise a bug report on our GitHub repository to let us know about the issue!","wordpress-seo"),"Yoast SEO"),linkHref:m,linkText:Object(b.__)("Write a bug report","wordpress-seo")}))),Object(r.createElement)("hr",{className:"yst-my-8"}),Object(r.createElement)(x,{title:Object(r.createElement)("div",{className:"yst-flex yst-items-center yst-gap-1.5"},Object(r.createElement)("span",null,Object(b.__)("Contact our support team","wordpress-seo")),e&&Object(r.createElement)(o.Badge,{variant:"upsell"},"Premium")),description:Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",null,Object(b.__)("If you don't find the answers you're looking for and need personalized help, you can get 24/7 support from one of our support engineers.","wordpress-seo")),Object(r.createElement)("span",{className:"yst-block yst-mt-4"},Object(r.createInterpolateElement)(Object(b.sprintf)(
/* translators: %1$s expands to an opening span tag, %2$s expands to a closing span tag. */
Object(b.__)("%1$sSupport languages:%2$s English & Spanish","wordpress-seo"),"<span>","</span>"),{span:Object(r.createElement)("span",{className:"yst-font-medium yst-text-slate-800"})})))},Object(r.createElement)(o.FeatureUpsell,p()({shouldUpsell:!e,variant:"card",cardLink:d,cardText:Object(b.sprintf)(
/* translators: %1$s expands to Premium. */
Object(b.__)("Unlock with %1$s","wordpress-seo"),"Premium")},s),Object(r.createElement)("div",{className:j()("yst-flex",!e&&"yst-opacity-50")},Object(r.createElement)("div",{className:"yst-mr-6"},Object(r.createElement)("p",null,Object(b.__)("Our support team is here to answer any questions you may have. Fill out the (pop-up) contact form, and we'll get back to you as soon as possible!","wordpress-seo")),Object(r.createElement)(o.Button,{variant:"secondary",className:"yst-mt-4",onClick:N},Object(b.__)("Contact our support team","wordpress-seo"),Object(r.createElement)(y.a,{className:"yst-inline-block yst-ml-1.5 yst-h-3 yst-w-3 yst-icon-rtl"}))),Object(r.createElement)("img",{src:a+"/images/support-team.svg",alt:"",width:125,height:100,loading:"lazy",decoding:"async"}))))))),!e&&Object(r.createElement)(g.e,null,Object(r.createElement)(g.d,{link:c,linkProps:s,promotions:t}),Object(r.createElement)(g.a,{link:l}))))};var S=s(13);const L=Object(S.createSlice)({name:"preferences",initialState:{},reducers:{}}),q=L.getInitialState,R={selectPreference:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(i.get)(e,"preferences."+t,s)},selectPreferences:e=>Object(i.get)(e,"preferences",{})};R.selectUpsellSettingsAsProps=Object(S.createSelector)([e=>R.selectPreference(e,"upsellSettings",{}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"premiumCtbId";return t}],(e,t)=>({"data-action":null==e?void 0:e.actionId,"data-ctb-id":null==e?void 0:e[t]}));const $=L.actions,I=L.reducer,C=e=>{let{initialState:t}=e;return Object(n.createReduxStore)("@yoast/support",{actions:{...m.i,...$},selectors:{...m.k,...R},initialState:Object(i.merge)({},{[m.a]:Object(m.e)(),preferences:q()},t),reducer:Object(n.combineReducers)({[m.a]:m.j,preferences:I})})};c()(()=>{const e=document.getElementById("yoast-seo-support");if(!e)return;!function(){let{initialState:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.register)(C({initialState:e}))}({initialState:{[m.a]:Object(i.get)(window,"wpseoScriptData.linkParams",{}),preferences:Object(i.get)(window,"wpseoScriptData.preferences",{})}}),Object(u.a)();const t=Object(n.select)("@yoast/support").selectPreference("isRtl",!1);Object(r.render)(Object(r.createElement)(o.Root,{context:{isRtl:t}},Object(r.createElement)(a.SlotFillProvider,null,Object(r.createElement)(P,null))),e)})},4:function(e,t){e.exports=window.lodash},5:function(e,t){e.exports=window.wp.data},52:function(e,t){e.exports=window.wp.domReady},6:function(e,t){e.exports=window.yoast.uiLibrary},91:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s(0),a=s(6),n=s(2),l=s.n(n);const c={variant:{lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}},o=e=>{let{id:t,children:s,title:n,description:l=null,variant:o="2xl"}=e;return Object(r.createElement)("section",{id:t,className:c.variant[o].grid},Object(r.createElement)("div",{className:c.variant[o].col1},Object(r.createElement)("div",{className:"yst-max-w-screen-sm"},Object(r.createElement)(a.Title,{as:"h2",size:"4"},n),l&&Object(r.createElement)("p",{className:"yst-mt-2"},l))),Object(r.createElement)("fieldset",{className:"yst-min-w-0 yst-mt-8 "+c.variant[o].col2},Object(r.createElement)("legend",{className:"yst-sr-only"},n),Object(r.createElement)("div",{className:"yst-space-y-8"},s)))};o.propTypes={id:l.a.string,children:l.a.node.isRequired,title:l.a.node.isRequired,description:l.a.node,variant:l.a.oneOf(Object.keys(c.variant))}},93:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return j})),s.d(t,"d",(function(){return T})),s.d(t,"e",(function(){return A})),s.d(t,"f",(function(){return Y}));var r=s(0),a=s(1),n=s(6),l=s(2),c=s.n(l);const o=e=>{let{link:t}=e;const s=Object(r.useMemo)(()=>Object(r.createInterpolateElement)(Object(a.sprintf)(
/* translators: %1$s expands to "Yoast SEO" academy, which is a clickable link. */
Object(a.__)("Want to learn SEO from Team Yoast? Check out our %1$s!","wordpress-seo"),"<link/>"),{link:Object(r.createElement)("a",{href:t,target:"_blank",rel:"noopener"},"Yoast SEO academy")}),[]);return Object(r.createElement)(n.Paper,{as:"div",className:"yst-p-6 yst-space-y-3"},Object(r.createElement)(n.Title,{as:"h2",size:"4",className:"yst-text-base yst-text-primary-500"},Object(a.__)("Learn SEO","wordpress-seo")),Object(r.createElement)("p",null,s,Object(r.createElement)("br",null),Object(a.__)("We have both free and premium online courses to learn everything you need to know about SEO.","wordpress-seo")),Object(r.createElement)(n.Link,{href:t,className:"yst-block",target:"_blank",rel:"noopener"},Object(a.sprintf)(
/* translators: %1$s expands to "Yoast SEO academy". */
Object(a.__)("Check out %1$s","wordpress-seo"),"Yoast SEO academy")))};o.propTypes={link:c.a.string.isRequired};var i=s(138),u=s(3),m=u.forwardRef((function(e,t){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),u.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));const d=e=>{let{learnMoreLink:t,upsellLink:s,thumbnail:l,wistiaEmbedPermission:c}=e;const{onClose:o,initialFocus:u}=Object(n.useModalContext)();return Object(r.createElement)("div",{className:"yst-flex yst-flex-col yst-items-center yst-p-10"},Object(r.createElement)("div",{className:"yst-relative yst-w-full"},Object(r.createElement)(Y,{videoId:"vmrahpfjxp",thumbnail:l,wistiaEmbedPermission:c}),Object(r.createElement)(n.Badge,{className:"yst-absolute yst-top-0 yst-right-2 yst-mt-2 yst-ml-2",variant:"info"},"Beta")),Object(r.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium"},Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-500"},Object(a.sprintf)(
/* translators: %1$s expands to Yoast SEO Premium. */
Object(a.__)("New to %1$s","wordpress-seo"),"Yoast SEO Premium"))," ",Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-700"},"21.0")),Object(r.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},Object(r.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},Object(a.__)("Generate titles & descriptions with Yoast AI!","wordpress-seo")),Object(r.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},Object(r.createInterpolateElement)(Object(a.sprintf)(
/* translators: %1$s and %2$s are anchor tag; %3$s is the arrow icon. */
Object(a.__)("Speed up your workflow with generative AI. Get high-quality title and description suggestions for your search and social appearance. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),{a:Object(r.createElement)(j,{href:t,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:Object(r.createElement)(m,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})}))),Object(r.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},Object(r.createElement)(n.Button,{as:"a",className:"yst-grow",size:"large",variant:"upsell",href:s,target:"_blank",ref:u},Object(r.createElement)(i.a,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),Object(a.__)("Unlock with Premium","wordpress-seo"),Object(r.createElement)("span",{className:"yst-sr-only"},
/* translators: Hidden accessibility text. */
Object(a.__)("(Opens in a new browser tab)","wordpress-seo")))),Object(r.createElement)(n.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:o},Object(a.__)("Close","wordpress-seo")))};var p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function b(e){return u.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),p||(p=u.createElement("path",{d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0138.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0155.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 00106.4-39.6l61.8 107.2a283.9 283.9 0 01-168.2 54.8zM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4z",fill:"#fff"})))}d.propTypes={learnMoreLink:c.a.string.isRequired,upsellLink:c.a.string.isRequired,thumbnail:c.a.shape({src:c.a.string.isRequired,width:c.a.string,height:c.a.string}).isRequired,wistiaEmbedPermission:c.a.shape({value:c.a.bool.isRequired,status:c.a.string.isRequired,set:c.a.func.isRequired}).isRequired},s(91);var f=s(10),O=s.n(f);const j=e=>{let{href:t,children:s,...l}=e;return Object(r.createElement)(n.Link,O()({target:"_blank",rel:"noopener noreferrer"},l,{href:t}),s,Object(r.createElement)("span",{className:"yst-sr-only"},
/* translators: Hidden accessibility text. */
Object(a.__)("(Opens in a new browser tab)","wordpress-seo")))};j.propTypes={href:c.a.string.isRequired,children:c.a.node},j.defaultProps={children:null};var g,w,h,E,v,x,_,k,N,P,S,L,q,R,$=s(207);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function C(e){return u.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),g||(g=u.createElement("defs",null,u.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),w||(w=u.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 392.04L98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z"})),h||(h=u.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 33.51l73.67 149.27.93 1.88 2.08.3L491.4 208.9 372.21 325.09l-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 208.9 173.32 185l2.08-.3.93-1.88L250 33.51m0-9L172.75 181 0 206.11 125 328 95.49 500 250 418.77 404.51 500 375 328l125-121.89L327.25 181 250 24.47z",transform:"translate(0 -24.47)"})),E||(E=u.createElement("path",{fill:"#f3f4f6",d:"M500 181.64l-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z"})))}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function M(e){return u.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),v||(v=u.createElement("path",{fill:"#fbbf24",d:"M250 0l77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z"})))}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function B(e){return u.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),x||(x=u.createElement("path",{d:"M80 0h340a80 80 0 0180 80v420H80a80 80 0 01-80-80V80A80 80 0 0180 0z",fill:"#a4286a"})),_||(_=u.createElement("path",{d:"M437.61 2L155.89 500H500V80a80 80 0 00-62.39-78z",fill:"#6c2548"})),k||(k=u.createElement("path",{d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 010 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z",fill:"#fff"})),N||(N=u.createElement("circle",{cx:368.33,cy:124.68,r:97.34,transform:"rotate(-45 368.335 124.68)",fill:"#9fda4f"})),P||(P=u.createElement("path",{d:"M416.2 39.93l-95.74 169.51A97.34 97.34 0 10416.2 39.93z",fill:"#77b227"})),S||(S=u.createElement("path",{d:"M294.78 254.75l-.15-.08-.13-.07a63.6 63.6 0 00-62.56 110.76h.13a63.6 63.6 0 0062.71-110.67z",fill:"#fec228"})),L||(L=u.createElement("path",{d:"M294.5 254.59l-62.56 110.76a63.6 63.6 0 1062.56-110.76z",fill:"#f49a00"})),q||(q=u.createElement("path",{d:"M222.31 450.07A38.16 38.16 0 00203 416.83a38.18 38.18 0 1019.41 33.27z",fill:"#ff4e47"})),R||(R=u.createElement("path",{d:"M202.9 416.8l-37.54 66.48a38.17 38.17 0 0037.54-66.48z",fill:"#ed261f"})))}const T=e=>{let{link:t,linkProps:s,promotions:l}=e;const c=Object(r.useMemo)(()=>Object(a.__)("Use AI to generate titles and meta descriptions, automatically redirect deleted pages, get 24/7 support and much, much more!","wordpress-seo"),[]),o=Object(r.createInterpolateElement)(Object(a.sprintf)(
/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
Object(a.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:Object(r.createElement)("span",{className:"yst-whitespace-nowrap"})}),i=l.includes("black-friday-2023-promotion"),u=Object(r.createInterpolateElement)(Object(a.sprintf)(
/* translators: %1$s and %2$s expand to strong tags. */
Object(a.__)("%1$sSAVE 30%%%2$s on your 12 month subscription","wordpress-seo"),"<strong>","</strong>"),{strong:Object(r.createElement)("strong",null)});return Object(r.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},Object(r.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none yst-relative yst-z-10 yst-mt-[-2.6rem]"},Object(r.createElement)(B,null)),i&&Object(r.createElement)("div",{className:"sidebar__sale_banner_container"},Object(r.createElement)("div",{className:"sidebar__sale_banner"},Object(r.createElement)("span",{className:"banner_text"},Object(a.__)("BLACK FRIDAY - 30% OFF","wordpress-seo")))),Object(r.createElement)(n.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},o),Object(r.createElement)("p",{className:"yst-mt-2"},c),i&&Object(r.createElement)("div",{className:"yst-text-center yst-border-t-[1px] yst-border-white yst-italic yst-mt-3"},Object(r.createElement)("p",{className:"yst-text-[10px] yst-my-3 yst-mx-0"},u)),Object(r.createElement)(n.Button,O()({as:"a",variant:"upsell",href:t,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500"},s),Object(r.createElement)("span",null,i?Object(a.__)("Claim your 30% off now!","wordpress-seo"):o),Object(r.createElement)($.a,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),Object(r.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},Object(r.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},Object(a.__)("Read reviews from real users","wordpress-seo")),Object(r.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},Object(r.createElement)(b,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)("span",{className:"yst-flex yst-gap-1"},Object(r.createElement)(M,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(M,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(M,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(M,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(C,{className:"yst-w-5 yst-h-5"})),Object(r.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};T.propTypes={link:c.a.string.isRequired,linkProps:c.a.object,promotions:c.a.array},T.defaultProps={linkProps:{},promotions:[]};const A=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"xl:yst-max-w-3xl xl:yst-fixed xl:yst-right-8 xl:yst-w-[16rem]"},Object(r.createElement)("div",{className:"yst-grid yst-grid-cols-1 sm:yst-grid-cols-2 min-[783px]:yst-grid-cols-1 lg:yst-grid-cols-2 xl:yst-grid-cols-1 yst-gap-4"},t))};A.propTypes={children:c.a.node.isRequired};var W=s(102),F=s(12);const Y=e=>{let{videoId:t,thumbnail:s,wistiaEmbedPermission:l}=e;const[c,o]=Object(r.useState)(l.value?F.c.isPlaying:F.c.showPlay),i=Object(r.useCallback)(()=>o(F.c.isPlaying),[o]),u=Object(r.useCallback)(()=>{l.value?i():o(F.c.askPermission)},[l.value,i,o]),m=Object(r.useCallback)(()=>o(F.c.showPlay),[o]),d=Object(r.useCallback)(()=>{l.set(!0),i()},[l.set,i]);return Object(r.createElement)(r.Fragment,null,l.value&&Object(r.createElement)(W.Helmet,null,Object(r.createElement)("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0})),Object(r.createElement)("div",{className:"yst-relative yst-w-full yst-h-0 yst-pt-[56.25%] yst-overflow-hidden yst-rounded-md yst-drop-shadow-md yst-bg-white"},c===F.c.showPlay&&Object(r.createElement)("button",{className:"yst-absolute yst-inset-0 yst-button yst-p-0 yst-border-none yst-bg-white yst-transition-opacity yst-duration-1000 yst-opacity-100",onClick:u},Object(r.createElement)("img",O()({className:"yst-w-full yst-h-auto",alt:"",loading:"lazy",decoding:"async"},s))),c===F.c.askPermission&&Object(r.createElement)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-flex-col yst-items-center yst-justify-center yst-bg-white"},Object(r.createElement)("p",{className:"yst-max-w-xs yst-mx-auto yst-text-center"},l.status===F.b.loading&&Object(r.createElement)(n.Spinner,null),l.status!==F.b.loading&&Object(a.sprintf)(
/* translators: %1$s expands to Yoast SEO. %2$s expands to Wistia. */
Object(a.__)("To see this video, you need to allow %1$s to load embedded videos from %2$s.","wordpress-seo"),"Yoast SEO","Wistia")),Object(r.createElement)("div",{className:"yst-flex yst-mt-6 yst-gap-x-4"},Object(r.createElement)(n.Button,{type:"button",variant:"secondary",onClick:m,disabled:l.status===F.b.loading},Object(a.__)("Deny","wordpress-seo")),Object(r.createElement)(n.Button,{type:"button",variant:"primary",onClick:d,disabled:l.status===F.b.loading},Object(a.__)("Allow","wordpress-seo")))),l.value&&c===F.c.isPlaying&&Object(r.createElement)("div",{className:"yst-absolute yst-w-full yst-h-full yst-top-0 yst-left-0"},null===t&&Object(r.createElement)(n.Spinner,{className:"yst-h-full yst-mx-auto"}),null!==t&&Object(r.createElement)("div",{className:`wistia_embed wistia_async_${t} videoFoam=true`}))))};Y.propTypes={videoId:c.a.string.isRequired,thumbnail:c.a.shape({src:c.a.string.isRequired,width:c.a.string,height:c.a.string}).isRequired,wistiaEmbedPermission:c.a.shape({value:c.a.bool.isRequired,status:c.a.string.isRequired,set:c.a.func.isRequired}).isRequired}}});