!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=293)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){function s(){return e.exports=s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,s.apply(this,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},130:function(e,t,s){"use strict";var r=s(3);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));t.a=n},15:function(e,t){e.exports=window.wp.components},17:function(e,t){e.exports=window.wp.url},170:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));const r=()=>{const e=document.getElementById("wpcontent"),t=document.getElementById("adminmenuwrap");e&&t&&(e.style.minHeight=t.offsetHeight+"px")}},197:function(e,t,s){"use strict";var r=s(3);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));t.a=n},2:function(e,t){e.exports=window.yoast.propTypes},20:function(e,t){e.exports=window.yoast.reduxJsToolkit},232:function(e,t,s){"use strict";var r=s(3);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.a=n},29:function(e,t,s){var r;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)s.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},293:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(15),a=s(5),l=s(51),c=s.n(l),o=s(7),i=s(4),u=s(170),p=s(30),m=s(11),d=s.n(m),y=s(197),b=s(1),f=s(17),O=s(29),j=s.n(O),g=s(88),h=s(2),w=s.n(h),E=s(86);const v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(var s=arguments.length,r=new Array(s>2?s-2:0),n=2;n<s;n++)r[n-2]=arguments[n];return Object(a.useSelect)(t=>{var s,n;return null===(s=(n=t("@yoast/support"))[e])||void 0===s?void 0:s.call(n,...r)},t)},x=e=>{let{id:t,children:s,title:n,description:a=null}=e;const l=v("selectPreference",[],"isPremium");return Object(r.createElement)(E.a,{id:t,title:n,description:a,variant:l?"lg":"xl"},s)};x.propTypes={id:w.a.string,children:w.a.node.isRequired,title:w.a.node.isRequired,description:w.a.node};var _=s(232);const k=e=>{let{imageSrc:t,title:s,description:n,linkHref:a,linkText:l}=e;return Object(r.createElement)(o.Card,null,Object(r.createElement)(o.Card.Header,{className:"yst-h-auto yst-p-0"},Object(r.createElement)("img",{className:"yst-w-full yst-transition yst-duration-200",src:t,alt:"",width:500,height:250,loading:"lazy",decoding:"async"})),Object(r.createElement)(o.Card.Content,{className:"yst-flex yst-flex-col yst-gap-3"},Object(r.createElement)(o.Title,{as:"h3"},s),n),Object(r.createElement)(o.Link,{href:a,className:"yst-flex yst-items-center yst-mt-[18px] yst-no-underline yst-font-medium yst-text-primary-500",target:"_blank"},l,Object(r.createElement)("span",{className:"yst-sr-only"},Object(b.__)("(Opens in a new browser tab)","wordpress-seo")),Object(r.createElement)(_.a,{className:"yst-h-4 yst-w-4 yst-ml-1 yst-icon-rtl"})))};k.propTypes={imageSrc:w.a.string.isRequired,title:w.a.string.isRequired,description:w.a.string.isRequired,linkHref:w.a.string.isRequired,linkText:w.a.string.isRequired};const N=()=>{document.querySelector("#beacon-container .BeaconFabButtonFrame iframe")?window.Beacon("open"):document.querySelector("#yoast-helpscout-beacon button").click()},S=()=>{const e=v("selectPreference",[],"isPremium",!1),t=v("selectUpsellSettingsAsProps"),s=v("selectPreference",[],"pluginUrl",""),n=v("selectLinkParams"),a=v("selectLink",[],"https://yoa.st/3t6"),l=v("selectLink",[],"https://yoa.st/jj"),c=v("selectLink",[],"https://yoa.st/help-center-support-card"),i=v("selectLink",[],"https://yoa.st/support-forums-support-card"),u=v("selectLink",[],"https://yoa.st/github-repository-support-card"),p=v("selectLink",[],"https://yoa.st/contact-support-to-unlock-premium-support-section"),m=Object(r.useMemo)(()=>[{title:Object(r.createElement)("span",null,"How do I set up ",Object(r.createElement)("strong",null,"canonical URLs"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/canonical-urls-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I use ",Object(r.createElement)("strong",null,"XML sitemaps"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/xml-sitemaps-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I implement ",Object(r.createElement)("strong",null,"breadcrumbs"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/implement-breadcrumbs-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I ",Object(r.createElement)("strong",null,"submit my sitemap")," to search engines?"),link:Object(f.addQueryArgs)("https://yoa.st/submit-sitemap-support-faq",n)},{title:Object(r.createElement)("span",null,"How do I edit my ",Object(r.createElement)("strong",null,"robots.txt file"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/edit-robots-txt-support-faq",n)},{title:Object(r.createElement)("span",null,"What are the ",Object(r.createElement)("strong",null,"meta robots advanced settings"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/meta-robots-settings-support-faq",n)},{title:Object(r.createElement)("span",null,"Where can I find a ",Object(r.createElement)("strong",null,"glossary")," of SEO terms?"),link:Object(f.addQueryArgs)("https://yoa.st/seo-terms-vocabulary-support-faq",n)},{title:Object(r.createElement)("span",null,"What are ",Object(r.createElement)("strong",null,"transition words"),"?"),link:Object(f.addQueryArgs)("https://yoa.st/transition-words-support-faq",n)}],[]);return Object(r.createElement)("div",{className:"yst-p-4 min-[783px]:yst-p-8"},Object(r.createElement)("div",{className:j()("yst-flex yst-flex-grow yst-flex-wrap",!e&&"xl:yst-pr-[17.5rem]")},Object(r.createElement)(o.Paper,{as:"main",className:"yst-flex-grow yst-mb-8 xl:yst-mb-0"},Object(r.createElement)(o.Paper.Header,null,Object(r.createElement)("div",{className:"yst-max-w-screen-sm"},Object(r.createElement)(o.Title,null,Object(b.__)("Support","wordpress-seo")),Object(r.createElement)("p",{className:"yst-text-tiny yst-mt-3"},Object(b.__)("If you have any questions, need a hand with a technical issue, or just want to say hi, we've got you covered. Get in touch with us and we'll be happy to assist you!","wordpress-seo")))),Object(r.createElement)(o.Paper.Content,null,Object(r.createElement)("div",{className:"yst-max-w-6xl"},Object(r.createElement)(x,{title:Object(b.__)("Frequently asked questions","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Here, you'll find answers to commonly asked questions about using %1$s. If you don't see your question listed, you can have a look at the section below.","wordpress-seo"),"Yoast SEO")},Object(r.createElement)("ul",null,m.map((e,t)=>{let{title:s,link:n}=e;return Object(r.createElement)(r.Fragment,{key:"faq-"+t},t>0&&Object(r.createElement)("hr",{className:"yst-my-3"}),Object(r.createElement)("li",null,Object(r.createElement)(o.Link,{href:n,className:"yst-flex yst-items-center yst-font-medium yst-no-underline",target:"_blank"},s,Object(r.createElement)(y.a,{className:"yst-inline-block yst-ml-1.5 yst-h-3 yst-w-3 yst-icon-rtl"}))))}))),Object(r.createElement)("hr",{className:"yst-my-8"}),Object(r.createElement)(x,{title:Object(b.__)("Additional resources","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Need help with %1$s? These resources are a great place to start!","wordpress-seo"),"Yoast SEO")},Object(r.createElement)("div",{className:"yst-grid yst-gap-6 yst-grid-cols-3 max-sm:yst-grid-cols-1"},Object(r.createElement)(k,{imageSrc:s+"/images/support/help_center.png",title:Object(b.sprintf)(
/* translators: %1$s expands to Yoast. */
Object(b.__)("%1$s's help center","wordpress-seo"),"Yoast"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Have a look at our help center to find articles, tutorials, and other resources to help you get the most out of %1$s!","wordpress-seo"),"Yoast SEO"),linkHref:c,linkText:Object(b.__)("Visit our help center","wordpress-seo")}),Object(r.createElement)(k,{imageSrc:s+"/images/support/support_forums.png",title:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("WordPress support forum for %1$s","wordpress-seo"),"Yoast SEO"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("In the WordPress support forum for %1$s you can find answers or ask for help from %1$s users in the WordPress community.","wordpress-seo"),"Yoast SEO"),linkHref:i,linkText:Object(b.__)("Visit WordPress forum","wordpress-seo")}),Object(r.createElement)(k,{imageSrc:s+"/images/support/github.png",title:Object(b.__)("Raise a bug report on GitHub","wordpress-seo"),description:Object(b.sprintf)(
/* translators: %1$s expands to Yoast SEO. */
Object(b.__)("Have you stumbled upon a bug while using %1$s? Please raise a bug report on our GitHub repository to let us know about the issue!","wordpress-seo"),"Yoast SEO"),linkHref:u,linkText:Object(b.__)("Write a bug report","wordpress-seo")}))),Object(r.createElement)("hr",{className:"yst-my-8"}),Object(r.createElement)(x,{title:Object(r.createElement)("div",{className:"yst-flex yst-items-center yst-gap-1.5"},Object(r.createElement)("span",null,Object(b.__)("Contact our support team","wordpress-seo")),e&&Object(r.createElement)(o.Badge,{variant:"upsell"},"Premium")),description:Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",null,Object(b.__)("If you don't find the answers you're looking for and need personalized help, you can get 24/7 support from one of our support engineers.","wordpress-seo")),Object(r.createElement)("span",{className:"yst-block yst-mt-4"},Object(r.createInterpolateElement)(Object(b.sprintf)(
/* translators: %1$s expands to an opening span tag, %2$s expands to a closing span tag. */
Object(b.__)("%1$sSupport languages:%2$s English & Spanish","wordpress-seo"),"<span>","</span>"),{span:Object(r.createElement)("span",{className:"yst-font-medium yst-text-slate-800"})})))},Object(r.createElement)(o.FeatureUpsell,d()({shouldUpsell:!e,variant:"card",cardLink:p,cardText:Object(b.sprintf)(
/* translators: %1$s expands to Premium. */
Object(b.__)("Unlock with %1$s","wordpress-seo"),"Premium")},t),Object(r.createElement)("div",{className:j()("yst-flex",!e&&"yst-opacity-50")},Object(r.createElement)("div",{className:"yst-mr-6"},Object(r.createElement)("p",null,Object(b.__)("Our support team is here to answer any questions you may have. Fill out the (pop-up) contact form, and we'll get back to you as soon as possible!","wordpress-seo")),Object(r.createElement)(o.Button,{variant:"secondary",className:"yst-mt-4",onClick:N},Object(b.__)("Contact our support team","wordpress-seo"),Object(r.createElement)(y.a,{className:"yst-inline-block yst-ml-1.5 yst-h-3 yst-w-3 yst-icon-rtl"}))),Object(r.createElement)("img",{src:s+"/images/support-team.svg",alt:"",width:125,height:100,loading:"lazy",decoding:"async"}))))))),!e&&Object(r.createElement)(g.d,null,Object(r.createElement)(g.c,{link:l,linkProps:t}),Object(r.createElement)(g.a,{link:a}))))};var L=s(20);const P=Object(L.createSlice)({name:"preferences",initialState:{},reducers:{}}),R=P.getInitialState,q={selectPreference:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(i.get)(e,"preferences."+t,s)},selectPreferences:e=>Object(i.get)(e,"preferences",{})};q.selectUpsellSettingsAsProps=Object(L.createSelector)([e=>q.selectPreference(e,"upsellSettings",{}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"premiumCtbId";return t}],(e,t)=>({"data-action":null==e?void 0:e.actionId,"data-ctb-id":null==e?void 0:e[t]}));const M=P.actions,z=P.reducer,I=e=>{let{initialState:t}=e;return Object(a.createReduxStore)("@yoast/support",{actions:{...p.g,...M},selectors:{...p.i,...q},initialState:Object(i.merge)({},{[p.a]:Object(p.d)(),preferences:R()},t),reducer:Object(a.combineReducers)({[p.a]:p.h,preferences:z})})};c()(()=>{const e=document.getElementById("yoast-seo-support");if(!e)return;!function(){let{initialState:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a.register)(I({initialState:e}))}({initialState:{[p.a]:Object(i.get)(window,"wpseoScriptData.linkParams",{}),preferences:Object(i.get)(window,"wpseoScriptData.preferences",{})}}),Object(u.a)();const t=Object(a.select)("@yoast/support").selectPreference("isRtl",!1);Object(r.render)(Object(r.createElement)(o.Root,{context:{isRtl:t}},Object(r.createElement)(n.SlotFillProvider,null,Object(r.createElement)(S,null))),e)})},3:function(e,t){e.exports=window.React},30:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"d",(function(){return o})),s.d(t,"i",(function(){return i})),s.d(t,"g",(function(){return u})),s.d(t,"h",(function(){return p})),s.d(t,"b",(function(){return m})),s.d(t,"e",(function(){return y})),s.d(t,"l",(function(){return b})),s.d(t,"j",(function(){return f})),s.d(t,"k",(function(){return O})),s.d(t,"c",(function(){return j})),s.d(t,"f",(function(){return h})),s.d(t,"o",(function(){return w})),s.d(t,"m",(function(){return E})),s.d(t,"n",(function(){return v}));var r=s(20),n=s(17),a=s(4);const l="linkParams",c=Object(r.createSlice)({name:l,initialState:{},reducers:{setLinkParams:(e,t)=>{let{payload:s}=t;return s}}}),o=c.getInitialState,i={selectLinkParam:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(a.get)(e,`${l}.${t}`,s)},selectLinkParams:e=>Object(a.get)(e,l,{})};i.selectLink=Object(r.createSelector)([i.selectLinkParams,(e,t)=>t],(e,t)=>Object(n.addQueryArgs)(t,e));const u=c.actions,p=c.reducer,m="notifications",d=Object(r.createSlice)({name:m,initialState:{},reducers:{addNotification:{reducer:(e,t)=>{let{payload:s}=t;e[s.id]={id:s.id,variant:s.variant,size:s.size,title:s.title,description:s.description}},prepare:e=>{let{id:t,variant:s="info",size:n="default",title:a,description:l}=e;return{payload:{id:t||Object(r.nanoid)(),variant:s,size:n,title:a||"",description:l}}}},removeNotification:(e,t)=>{let{payload:s}=t;return Object(a.omit)(e,s)}}}),y=d.getInitialState,b={selectNotifications:e=>Object(a.get)(e,m,{}),selectNotification:(e,t)=>Object(a.get)(e,[m,t],null)},f=d.actions,O=d.reducer,j="pluginUrl",g=Object(r.createSlice)({name:j,initialState:"",reducers:{setPluginUrl:(e,t)=>{let{payload:s}=t;return s}}}),h=g.getInitialState,w={selectPluginUrl:e=>Object(a.get)(e,j,"")};w.selectImageLink=Object(r.createSelector)([w.selectPluginUrl,function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"images";return s},(e,t)=>t],(e,t,s)=>[Object(a.trimEnd)(e,"/"),Object(a.trim)(t,"/"),Object(a.trimStart)(s,"/")].join("/"));const E=g.actions,v=g.reducer},4:function(e,t){e.exports=window.lodash},5:function(e,t){e.exports=window.wp.data},51:function(e,t){e.exports=window.wp.domReady},7:function(e,t){e.exports=window.yoast.uiLibrary},86:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s(0),n=s(7),a=s(2),l=s.n(a);const c={variant:{lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}},o=e=>{let{id:t,children:s,title:a,description:l=null,variant:o="2xl"}=e;return Object(r.createElement)("section",{id:t,className:c.variant[o].grid},Object(r.createElement)("div",{className:c.variant[o].col1},Object(r.createElement)("div",{className:"yst-max-w-screen-sm"},Object(r.createElement)(n.Title,{as:"h2",size:"4"},a),l&&Object(r.createElement)("p",{className:"yst-mt-2"},l))),Object(r.createElement)("fieldset",{className:"yst-min-w-0 yst-mt-8 "+c.variant[o].col2},Object(r.createElement)("legend",{className:"yst-sr-only"},a),Object(r.createElement)("div",{className:"yst-space-y-8"},s)))};o.propTypes={id:l.a.string,children:l.a.node.isRequired,title:l.a.node.isRequired,description:l.a.node,variant:l.a.oneOf(Object.keys(c.variant))}},88:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return b})),s.d(t,"c",(function(){return B})),s.d(t,"d",(function(){return C}));var r=s(0),n=s(1),a=s(7),l=s(2),c=s.n(l);const o=e=>{let{link:t}=e;const s=Object(r.useMemo)(()=>Object(r.createInterpolateElement)(Object(n.sprintf)(
/* translators: %1$s expands to "Yoast SEO" academy, which is a clickable link. */
Object(n.__)("Want to learn SEO from Team Yoast? Check out our %1$s!","wordpress-seo"),"<link/>"),{link:Object(r.createElement)("a",{href:t,target:"_blank",rel:"noopener"},"Yoast SEO academy")}),[]);return Object(r.createElement)(a.Paper,{as:"div",className:"yst-p-6 yst-space-y-3"},Object(r.createElement)(a.Title,{as:"h2",size:"4",className:"yst-text-base yst-text-primary-500"},Object(n.__)("Learn SEO","wordpress-seo")),Object(r.createElement)("p",null,s,Object(r.createElement)("br",null),Object(n.__)("We have both free and premium online courses to learn everything you need to know about SEO.","wordpress-seo")),Object(r.createElement)(a.Link,{href:t,className:"yst-block",target:"_blank",rel:"noopener"},Object(n.sprintf)(
/* translators: %1$s expands to "Yoast SEO academy". */
Object(n.__)("Check out %1$s","wordpress-seo"),"Yoast SEO academy")))};o.propTypes={link:c.a.string.isRequired};var i=s(130),u=s(3),p=u.forwardRef((function(e,t){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),u.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))})),m=s(11),d=s.n(m);const y=e=>{let{href:t,children:s,...l}=e;return Object(r.createElement)(a.Link,d()({target:"_blank",rel:"noopener noreferrer"},l,{href:t}),s,Object(r.createElement)("span",{className:"yst-sr-only"},Object(n.__)("(Opens in a new browser tab)","wordpress-seo")))};y.propTypes={href:c.a.string.isRequired,children:c.a.node},y.defaultProps={children:null};const b=e=>{let{imageLink:t,learnMoreLink:s,upsellLink:l}=e;const{onClose:c,initialFocus:o}=Object(a.useModalContext)();return Object(r.createElement)("div",{className:"yst-flex yst-flex-col yst-items-center yst-p-10"},Object(r.createElement)("div",{className:"yst-relative"},Object(r.createElement)("img",{className:"yst-rounded-md yst-drop-shadow-md",src:t,width:"432",height:"244",alt:"",loading:"lazy",decoding:"async"}),Object(r.createElement)(a.Badge,{className:"yst-absolute yst-top-0 yst-right-2 yst-mt-2 yst-ml-2",variant:"info"},"Beta")),Object(r.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium"},Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-500"},Object(n.sprintf)(
/* translators: %1$s expands to Yoast SEO Premium. */
Object(n.__)("New to %1$s","wordpress-seo"),"Yoast SEO Premium"))," ",Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-700"},"21.0")),Object(r.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},Object(r.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},Object(n.__)("Generate titles & descriptions with Yoast AI!","wordpress-seo")),Object(r.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},Object(r.createInterpolateElement)(Object(n.sprintf)(
/* translators: %1$s and %2$s are anchor tag; %3$s is the arrow icon. */
Object(n.__)("Speed up your workflow with generative AI. Get high-quality title and description suggestions for your search and social appearance. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),{a:Object(r.createElement)(y,{href:s,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:Object(r.createElement)(p,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})}))),Object(r.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},Object(r.createElement)(a.Button,{as:"a",className:"yst-grow",size:"large",variant:"upsell",href:l,target:"_blank",ref:o},Object(r.createElement)(i.a,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),Object(n.__)("Unlock with Premium","wordpress-seo"),Object(r.createElement)("span",{className:"yst-sr-only"},Object(n.__)("(Opens in a new browser tab)","wordpress-seo")))),Object(r.createElement)(a.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:c},Object(n.__)("Close","wordpress-seo")))};var f;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function j(e){return u.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),f||(f=u.createElement("path",{d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0138.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0155.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 00106.4-39.6l61.8 107.2a283.9 283.9 0 01-168.2 54.8zM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4z",fill:"#fff"})))}b.propTypes={imageLink:c.a.string.isRequired,learnMoreLink:c.a.string.isRequired,upsellLink:c.a.string.isRequired},s(86);var g,h,w,E,v,x,_,k,N,S,L,P,R,q,M=s(197);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function I(e){return u.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),g||(g=u.createElement("defs",null,u.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),h||(h=u.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 392.04L98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z"})),w||(w=u.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 33.51l73.67 149.27.93 1.88 2.08.3L491.4 208.9 372.21 325.09l-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 208.9 173.32 185l2.08-.3.93-1.88L250 33.51m0-9L172.75 181 0 206.11 125 328 95.49 500 250 418.77 404.51 500 375 328l125-121.89L327.25 181 250 24.47z",transform:"translate(0 -24.47)"})),E||(E=u.createElement("path",{fill:"#f3f4f6",d:"M500 181.64l-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z"})))}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function T(e){return u.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),v||(v=u.createElement("path",{fill:"#fbbf24",d:"M250 0l77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z"})))}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function A(e){return u.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),x||(x=u.createElement("path",{d:"M80 0h340a80 80 0 0180 80v420H80a80 80 0 01-80-80V80A80 80 0 0180 0z",fill:"#a4286a"})),_||(_=u.createElement("path",{d:"M437.61 2L155.89 500H500V80a80 80 0 00-62.39-78z",fill:"#6c2548"})),k||(k=u.createElement("path",{d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 010 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z",fill:"#fff"})),N||(N=u.createElement("circle",{cx:368.33,cy:124.68,r:97.34,transform:"rotate(-45 368.335 124.68)",fill:"#9fda4f"})),S||(S=u.createElement("path",{d:"M416.2 39.93l-95.74 169.51A97.34 97.34 0 10416.2 39.93z",fill:"#77b227"})),L||(L=u.createElement("path",{d:"M294.78 254.75l-.15-.08-.13-.07a63.6 63.6 0 00-62.56 110.76h.13a63.6 63.6 0 0062.71-110.67z",fill:"#fec228"})),P||(P=u.createElement("path",{d:"M294.5 254.59l-62.56 110.76a63.6 63.6 0 1062.56-110.76z",fill:"#f49a00"})),R||(R=u.createElement("path",{d:"M222.31 450.07A38.16 38.16 0 00203 416.83a38.18 38.18 0 1019.41 33.27z",fill:"#ff4e47"})),q||(q=u.createElement("path",{d:"M202.9 416.8l-37.54 66.48a38.17 38.17 0 0037.54-66.48z",fill:"#ed261f"})))}const B=e=>{let{link:t,linkProps:s}=e;const l=Object(r.useMemo)(()=>Object(r.createInterpolateElement)(Object(n.sprintf)(
/* translators: %1$s and %2$s expand to opening and closing <strong> tags. */
Object(n.__)("Be more efficient in creating titles and meta descriptions with the help of AI. %1$sGet 24/7 support%2$s and boost your website’s visibility.","wordpress-seo"),"<strong>","</strong>"),{strong:Object(r.createElement)("strong",null)}),[]),c=Object(r.createInterpolateElement)(Object(n.sprintf)(
/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
Object(n.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:Object(r.createElement)("span",{className:"yst-whitespace-nowrap"})});return Object(r.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},Object(r.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mt-[-2.6rem] yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none"},Object(r.createElement)(A,null)),Object(r.createElement)(a.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},c),Object(r.createElement)("p",{className:"yst-mt-2"},l),Object(r.createElement)(a.Button,d()({as:"a",variant:"upsell",href:t,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500"},s),Object(r.createElement)("span",null,c),Object(r.createElement)(M.a,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),Object(r.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},Object(r.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},Object(n.__)("Read reviews from real users","wordpress-seo")),Object(r.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},Object(r.createElement)(j,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)("span",{className:"yst-flex yst-gap-1"},Object(r.createElement)(T,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(T,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(T,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(T,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(I,{className:"yst-w-5 yst-h-5"})),Object(r.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};B.propTypes={link:c.a.string.isRequired,linkProps:c.a.object},B.defaultProps={linkProps:{}};const C=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"xl:yst-max-w-3xl xl:yst-fixed xl:yst-right-8 xl:yst-w-[16rem]"},Object(r.createElement)("div",{className:"yst-grid yst-grid-cols-1 sm:yst-grid-cols-2 min-[783px]:yst-grid-cols-1 lg:yst-grid-cols-2 xl:yst-grid-cols-1 yst-gap-4"},t))};C.propTypes={children:c.a.node.isRequired}}});