!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=304)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function s(){return e.exports=s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,s.apply(this,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},106:function(e,t){e.exports=window.yoast.reactHelmet},12:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return a}));const r={request:"request",success:"success",error:"error"},n={idle:"idle",loading:"loading",success:"success",error:"error"},a={showPlay:"showPlay",askPermission:"askPermission",isPlaying:"isPlaying"}},13:function(e,t){e.exports=window.yoast.reduxJsToolkit},139:function(e,t,s){"use strict";var r=s(3);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));t.a=n},14:function(e,t){e.exports=window.wp.url},2:function(e,t){e.exports=window.yoast.propTypes},208:function(e,t,s){"use strict";var r=s(3);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));t.a=n},27:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"e",(function(){return o})),s.d(t,"k",(function(){return l})),s.d(t,"i",(function(){return d})),s.d(t,"j",(function(){return u})),s.d(t,"b",(function(){return m})),s.d(t,"f",(function(){return p})),s.d(t,"n",(function(){return b})),s.d(t,"l",(function(){return f})),s.d(t,"m",(function(){return O})),s.d(t,"c",(function(){return j})),s.d(t,"g",(function(){return g})),s.d(t,"q",(function(){return h})),s.d(t,"o",(function(){return v})),s.d(t,"p",(function(){return E})),s.d(t,"d",(function(){return N})),s.d(t,"h",(function(){return S})),s.d(t,"u",(function(){return L})),s.d(t,"r",(function(){return R})),s.d(t,"s",(function(){return I})),s.d(t,"t",(function(){return C}));var r=s(13),n=s(14),a=s(4);const c="linkParams",i=Object(r.createSlice)({name:c,initialState:{},reducers:{setLinkParams:(e,t)=>{let{payload:s}=t;return s}}}),o=i.getInitialState,l={selectLinkParam:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(a.get)(e,`${c}.${t}`,s)},selectLinkParams:e=>Object(a.get)(e,c,{})};l.selectLink=Object(r.createSelector)([l.selectLinkParams,(e,t)=>t],(e,t)=>Object(n.addQueryArgs)(t,e));const d=i.actions,u=i.reducer,m="notifications",y=Object(r.createSlice)({name:m,initialState:{},reducers:{addNotification:{reducer:(e,t)=>{let{payload:s}=t;e[s.id]={id:s.id,variant:s.variant,size:s.size,title:s.title,description:s.description}},prepare:e=>{let{id:t,variant:s="info",size:n="default",title:a,description:c}=e;return{payload:{id:t||Object(r.nanoid)(),variant:s,size:n,title:a||"",description:c}}}},removeNotification:(e,t)=>{let{payload:s}=t;return Object(a.omit)(e,s)}}}),p=y.getInitialState,b={selectNotifications:e=>Object(a.get)(e,m,{}),selectNotification:(e,t)=>Object(a.get)(e,[m,t],null)},f=y.actions,O=y.reducer,j="pluginUrl",w=Object(r.createSlice)({name:j,initialState:"",reducers:{setPluginUrl:(e,t)=>{let{payload:s}=t;return s}}}),g=w.getInitialState,h={selectPluginUrl:e=>Object(a.get)(e,j,"")};h.selectImageLink=Object(r.createSelector)([h.selectPluginUrl,function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"images";return s},(e,t)=>t],(e,t,s)=>[Object(a.trimEnd)(e,"/"),Object(a.trim)(t,"/"),Object(a.trimStart)(s,"/")].join("/"));const v=w.actions,E=w.reducer;var x=s(28),_=s.n(x),k=s(12);const N="wistiaEmbedPermission",P=Object(r.createSlice)({name:N,initialState:{value:!1,status:k.b.idle,error:{}},reducers:{setWistiaEmbedPermissionValue:(e,t)=>{let{payload:s}=t;e.value=Boolean(s)}},extraReducers:e=>{e.addCase(`${N}/${k.a.request}`,e=>{e.status=k.b.loading}),e.addCase(`${N}/${k.a.success}`,(e,t)=>{let{payload:s}=t;e.status=k.b.success,e.value=Boolean(s&&s.value)}),e.addCase(`${N}/${k.a.error}`,(e,t)=>{let{payload:s}=t;e.status=k.b.error,e.value=Boolean(s&&s.value),e.error={code:Object(a.get)(s,"error.code",500),message:Object(a.get)(s,"error.message","Unknown")}})}}),S=P.getInitialState,L={selectWistiaEmbedPermission:e=>Object(a.get)(e,N,{value:!1,status:k.b.idle}),selectWistiaEmbedPermissionValue:e=>Object(a.get)(e,[N,"value"],!1),selectWistiaEmbedPermissionStatus:e=>Object(a.get)(e,[N,"status"],k.b.idle),selectWistiaEmbedPermissionError:e=>Object(a.get)(e,[N,"error"],{})},R={...P.actions,setWistiaEmbedPermission:function*(e){yield{type:`${N}/${k.a.request}`};try{return yield{type:N,payload:e},{type:`${N}/${k.a.success}`,payload:{value:e}}}catch(t){return{type:`${N}/${k.a.error}`,payload:{error:t,value:e}}}}},I={[N]:async e=>{let{payload:t}=e;return _()({path:"/yoast/v1/wistia_embed_permission",method:"POST",data:{value:Boolean(t)}})}},C=P.reducer},28:function(e,t){e.exports=window.wp.apiFetch},3:function(e,t){e.exports=window.React},304:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(5),a=s(54),c=s.n(a),i=s(42),o=s(6),l=s(4),d=s(27),u=s(88);const m=()=>{const e=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectLink("https://www.yoa.st/ai-generator-learn-more"),[]),t=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectLink("https://yoa.st/ai-generator-upsell"),[]),s=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectImageLink("ai-generator-preview.png"),[]),a=Object(r.useMemo)(()=>({src:s,width:"432",height:"244"}),[s]),c=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectWistiaEmbedPermissionValue(),[]),i=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectWistiaEmbedPermissionStatus(),[]),{setWistiaEmbedPermission:o}=Object(n.useDispatch)("yoast-seo/introductions"),l=Object(r.useMemo)(()=>({value:c,status:i,set:o}),[c,i,o]);return Object(r.createElement)(u.b,{learnMoreLink:e,upsellLink:t,thumbnail:a,wistiaEmbedPermission:l})};var y=s(2),p=s.n(y);window.YoastSEO=window.YoastSEO||{};const b=Object(r.createContext)({}),f=e=>{let{children:t,initialComponents:s}=e;const[a,c]=Object(r.useState)(s),i=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectIntroductions(),[]),o=Object(r.useCallback)((e,t)=>{Object(l.find)(i,{id:e})?c(s=>({...s,[e]:t})):console.error("Warning: Introductions received a registration for an unknown key:",e)},[i,c]);return Object(r.useEffect)(()=>{window.YoastSEO._registerIntroductionComponent=o},[o]),Object(r.createElement)(b.Provider,{value:a},t)};f.propTypes={children:p.a.node.isRequired,initialComponents:p.a.object.isRequired};const O=()=>{const e=Object(n.useSelect)(e=>e("yoast-seo/introductions").selectCurrentIntroduction(),[]),t=Object(r.useContext)(b),s=Object(r.useMemo)(()=>null==t?void 0:t[null==e?void 0:e.id],[e,t]);return s?Object(r.createElement)(s,null):null},j=e=>{let{children:t}=e;const[s,n]=Object(r.useState)(!0),a=Object(r.useRef)(null),c=Object(r.useCallback)(()=>n(!1),[]);return Object(r.createElement)(o.Modal,{className:"yst-introduction-modal yst-h-[calc(100vh - 1rem)] sm:yst-h-[calc(100vh - 2rem)] md:yst-h-[calc(100vh - 5rem)]) yst-overflow-y-auto",isOpen:s,onClose:c,initialFocus:a},Object(r.createElement)(o.Modal.Panel,{className:"yst-max-w-lg yst-p-0 yst-bg-gradient-to-b yst-from-[#EDD2E1] yst-rounded-3xl"},t))};j.propTypes={children:p.a.node.isRequired};var w=s(13);const g=Object(w.createEntityAdapter)({selectId:e=>e.id,sortComparer:(e,t)=>e.priority===t.priority?0:e.priority<t.priority?-1:1}),h=e=>({id:e.id||Object(w.nanoid)(),priority:e.priority||0}),v=Object(w.createSlice)({name:"introductions",initialState:g.getInitialState({current:0}),reducers:{addIntroduction:{reducer:g.addOne,prepare:e=>({payload:h(e)})},addIntroductions:{reducer:g.addMany,prepare:e=>({payload:Object(l.map)(e,h)})},setIntroductions:{reducer:g.setAll,prepare:e=>({payload:Object(l.map)(e,h)})}}}),E=v.getInitialState,x=g.getSelectors(e=>Object(l.get)(e,"introductions",{})),_={selectCurrentIntroductionIndex:e=>Object(l.get)(e,["introductions","current"],0),selectIntroduction:x.selectById,selectIntroductions:x.selectAll};_.selectCurrentIntroduction=Object(w.createSelector)([_.selectCurrentIntroductionIndex,_.selectIntroductions],(e,t)=>t[e]);const k=v.actions,N=v.reducer,P=e=>Object(n.createReduxStore)("yoast-seo/introductions",{actions:{...k,...d.i,...d.o,...d.r},selectors:{..._,...d.k,...d.q,...d.u},initialState:Object(l.merge)({},{introductions:E(),[d.a]:Object(d.e)(),[d.c]:Object(d.g)(),[d.d]:Object(d.h)()},e),reducer:Object(n.combineReducers)({introductions:N,[d.a]:d.j,[d.c]:d.p,[d.d]:d.t}),controls:{...d.s}}),S="wpseoIntroductions";c()(()=>{const e=Object(l.get)(window,S+".introductions",[]);if(Object(l.isEmpty)(e))return;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.register)(P(e))}({[d.a]:Object(l.get)(window,S+".linkParams",{}),[d.c]:Object(l.get)(window,S+".pluginUrl",""),[d.d]:{value:"1"===Object(l.get)(window,S+".wistiaEmbedPermission",!1)}}),Object(n.dispatch)("yoast-seo/introductions").setIntroductions(e);const t={isRtl:Boolean(Object(l.get)(window,S+".isRtl",!1))},s={"ai-generate-titles-and-descriptions-upsell":m},a=document.createElement("div");a.id="wpseo-introductions",document.body.appendChild(a),Object(r.render)(Object(r.createElement)(o.Root,{context:t},Object(r.createElement)(f,{initialComponents:s},Object(r.createElement)(j,null,Object(r.createElement)(O,null)))),a,()=>{Object(i.doAction)("yoast.introductions.ready")})})},4:function(e,t){e.exports=window.lodash},42:function(e,t){e.exports=window.wp.hooks},5:function(e,t){e.exports=window.wp.data},54:function(e,t){e.exports=window.wp.domReady},6:function(e,t){e.exports=window.yoast.uiLibrary},88:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return m})),s.d(t,"c",(function(){return j})),s.d(t,"d",(function(){return A})),s.d(t,"e",(function(){return W})),s.d(t,"f",(function(){return F}));var r=s(0),n=s(1),a=s(6),c=s(2),i=s.n(c);const o=e=>{let{link:t}=e;const s=Object(r.useMemo)(()=>Object(r.createInterpolateElement)(Object(n.sprintf)(/* translators: %1$s expands to "Yoast SEO" academy, which is a clickable link. */
Object(n.__)("Want to learn SEO from Team Yoast? Check out our %1$s!","wordpress-seo"),"<link/>"),{link:Object(r.createElement)("a",{href:t,target:"_blank",rel:"noopener"},"Yoast SEO academy")}),[]);return Object(r.createElement)(a.Paper,{as:"div",className:"yst-p-6 yst-space-y-3"},Object(r.createElement)(a.Title,{as:"h2",size:"4",className:"yst-text-base yst-text-primary-500"},Object(n.__)("Learn SEO","wordpress-seo")),Object(r.createElement)("p",null,s,Object(r.createElement)("br",null),Object(n.__)("We have both free and premium online courses to learn everything you need to know about SEO.","wordpress-seo")),Object(r.createElement)(a.Link,{href:t,className:"yst-block",target:"_blank",rel:"noopener"},Object(n.sprintf)(/* translators: %1$s expands to "Yoast SEO academy". */
Object(n.__)("Check out %1$s","wordpress-seo"),"Yoast SEO academy")))};o.propTypes={link:i.a.string.isRequired};var l=s(139),d=s(3),u=d.forwardRef((function(e,t){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),d.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));const m=e=>{let{learnMoreLink:t,upsellLink:s,thumbnail:c,wistiaEmbedPermission:i}=e;const{onClose:o,initialFocus:d}=Object(a.useModalContext)();return Object(r.createElement)("div",{className:"yst-flex yst-flex-col yst-items-center yst-p-10"},Object(r.createElement)("div",{className:"yst-relative yst-w-full"},Object(r.createElement)(F,{videoId:"vmrahpfjxp",thumbnail:c,wistiaEmbedPermission:i}),Object(r.createElement)(a.Badge,{className:"yst-absolute yst-top-0 yst-right-2 yst-mt-2 yst-ml-2",variant:"info"},"Beta")),Object(r.createElement)("div",{className:"yst-mt-6 yst-text-xs yst-font-medium"},Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-500"},Object(n.sprintf)(/* translators: %1$s expands to Yoast SEO Premium. */
Object(n.__)("New to %1$s","wordpress-seo"),"Yoast SEO Premium"))," ",Object(r.createElement)("span",{className:"yst-uppercase yst-text-slate-700"},"21.0")),Object(r.createElement)("div",{className:"yst-mt-4 yst-mx-1.5 yst-text-center"},Object(r.createElement)("h3",{className:"yst-text-slate-900 yst-text-lg yst-font-medium"},Object(n.__)("Generate titles & descriptions with Yoast AI!","wordpress-seo")),Object(r.createElement)("div",{className:"yst-mt-2 yst-text-slate-600 yst-text-sm"},Object(r.createInterpolateElement)(Object(n.sprintf)(/* translators: %1$s and %2$s are anchor tag; %3$s is the arrow icon. */
Object(n.__)("Speed up your workflow with generative AI. Get high-quality title and description suggestions for your search and social appearance. %1$sLearn more%2$s%3$s","wordpress-seo"),"<a>","<ArrowNarrowRightIcon />","</a>"),{a:Object(r.createElement)(j,{href:t,className:"yst-inline-flex yst-items-center yst-gap-1 yst-no-underline yst-font-medium",variant:"primary"}),ArrowNarrowRightIcon:Object(r.createElement)(u,{className:"yst-w-4 yst-h-4 rtl:yst-rotate-180"})}))),Object(r.createElement)("div",{className:"yst-w-full yst-flex yst-mt-10"},Object(r.createElement)(a.Button,{as:"a",className:"yst-grow",size:"large",variant:"upsell",href:s,target:"_blank",ref:d},Object(r.createElement)(l.a,{className:"yst--ml-1 yst-mr-2 yst-h-5 yst-w-5"}),Object(n.__)("Unlock with Premium","wordpress-seo"),Object(r.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
Object(n.__)("(Opens in a new browser tab)","wordpress-seo")))),Object(r.createElement)(a.Button,{as:"a",className:"yst-mt-4",variant:"tertiary",onClick:o},Object(n.__)("Close","wordpress-seo")))};var y;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function b(e){return d.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1000 1000"},e),y||(y=d.createElement("path",{d:"M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm87.2 412.4c0-21.9 4.3-40.2 13.1-54.4s24-27.1 45.9-38.2l10.1-4.9c17.8-9 22.4-16.7 22.4-26 0-11.1-9.5-19.1-25-19.1-18.3 0-32.2 9.5-41.8 28.9l-24.7-24.8c5.4-11.6 14.1-20.9 25.8-28.1a70.8 70.8 0 0138.9-11.1c17.8 0 33.3 4.6 45.9 14.2s19.4 22.7 19.4 39.4c0 26.6-15 42.9-43.1 57.3l-15.7 8c-16.8 8.5-25.1 16-27.4 29.4h85.4v35.4H587.2zm-82.1 373.3c-157.8 0-285.7-127.9-285.7-285.7s127.9-285.7 285.7-285.7a286.4 286.4 0 0155.9 5.5l-55.9 116.9c-90 0-163.3 73.3-163.3 163.3s73.3 163.3 163.3 163.3a162.8 162.8 0 00106.4-39.6l61.8 107.2a283.9 283.9 0 01-168.2 54.8zM705 704.1l-70.7-122.5H492.9l70.7-122.4H705l70.7 122.4z",fill:"#fff"})))}m.propTypes={learnMoreLink:i.a.string.isRequired,upsellLink:i.a.string.isRequired,thumbnail:i.a.shape({src:i.a.string.isRequired,width:i.a.string,height:i.a.string}).isRequired,wistiaEmbedPermission:i.a.shape({value:i.a.bool.isRequired,status:i.a.string.isRequired,set:i.a.func.isRequired}).isRequired},s(94);var f=s(10),O=s.n(f);const j=e=>{let{href:t,children:s,...c}=e;return Object(r.createElement)(a.Link,O()({target:"_blank",rel:"noopener noreferrer"},c,{href:t}),s,Object(r.createElement)("span",{className:"yst-sr-only"},/* translators: Hidden accessibility text. */
Object(n.__)("(Opens in a new browser tab)","wordpress-seo")))};j.propTypes={href:i.a.string.isRequired,children:i.a.node},j.defaultProps={children:null};var w,g,h,v,E,x,_,k,N,P,S,L,R,I,C=s(208);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function q(e){return d.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",id:"star-rating-half_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),w||(w=d.createElement("defs",null,d.createElement("style",null,".star-rating-half_svg__cls-1{fill:#fbbf24}"))),g||(g=d.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 392.04L98.15 471.87l29-169.09L4.3 183.03l169.77-24.67L250 4.52l75.93 153.84 169.77 24.67-122.85 119.75 29 169.09L250 392.04z"})),h||(h=d.createElement("path",{className:"star-rating-half_svg__cls-1",d:"M250 33.51l73.67 149.27.93 1.88 2.08.3L491.4 208.9 372.21 325.09l-1.51 1.47.36 2.07 28.14 164.06-147.34-77.46-1.86-1-1.86 1-147.34 77.46 28.14-164.06.36-2.07-1.51-1.47L8.6 208.9 173.32 185l2.08-.3.93-1.88L250 33.51m0-9L172.75 181 0 206.11 125 328 95.49 500 250 418.77 404.51 500 375 328l125-121.89L327.25 181 250 24.47z",transform:"translate(0 -24.47)"})),v||(v=d.createElement("path",{fill:"#f3f4f6",d:"M500 181.64l-172.75-25.11L250 0v394.3l154.51 81.23L375 303.48l125-121.84z"})))}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function z(e){return d.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 500 475.53"},e),E||(E=d.createElement("path",{fill:"#fbbf24",d:"M250 0l77.25 156.53L500 181.64 375 303.48l29.51 172.05L250 394.3 95.49 475.53 125 303.48 0 181.64l172.75-25.11L250 0z"})))}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function T(e){return d.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 500 500"},e),x||(x=d.createElement("path",{d:"M80 0h340a80 80 0 0180 80v420H80a80 80 0 01-80-80V80A80 80 0 0180 0z",fill:"#a4286a"})),_||(_=d.createElement("path",{d:"M437.61 2L155.89 500H500V80a80 80 0 00-62.39-78z",fill:"#6c2548"})),k||(k=d.createElement("path",{d:"M74.4 337.3v34.9c21.6-.9 38.5-8 52.8-22.5s27.4-38 39.9-72.9l92.6-248h-44.8L140.3 236l-37-116.2h-41l54.4 139.8a57.54 57.54 0 010 41.8c-5.5 14.2-15.4 30.9-42.3 35.9z",fill:"#fff"})),N||(N=d.createElement("circle",{cx:368.33,cy:124.68,r:97.34,transform:"rotate(-45 368.335 124.68)",fill:"#9fda4f"})),P||(P=d.createElement("path",{d:"M416.2 39.93l-95.74 169.51A97.34 97.34 0 10416.2 39.93z",fill:"#77b227"})),S||(S=d.createElement("path",{d:"M294.78 254.75l-.15-.08-.13-.07a63.6 63.6 0 00-62.56 110.76h.13a63.6 63.6 0 0062.71-110.67z",fill:"#fec228"})),L||(L=d.createElement("path",{d:"M294.5 254.59l-62.56 110.76a63.6 63.6 0 1062.56-110.76z",fill:"#f49a00"})),R||(R=d.createElement("path",{d:"M222.31 450.07A38.16 38.16 0 00203 416.83a38.18 38.18 0 1019.41 33.27z",fill:"#ff4e47"})),I||(I=d.createElement("path",{d:"M202.9 416.8l-37.54 66.48a38.17 38.17 0 0037.54-66.48z",fill:"#ed261f"})))}const A=e=>{let{link:t,linkProps:s,promotions:c}=e;const i=Object(r.useMemo)(()=>Object(n.__)("Use AI to generate titles and meta descriptions, automatically redirect deleted pages, get 24/7 support and much, much more!","wordpress-seo"),[]),o=Object(r.createInterpolateElement)(Object(n.sprintf)(/* translators: %1$s and %2$s expand to a span wrap to avoid linebreaks. %3$s expands to "Yoast SEO Premium". */
Object(n.__)("%1$sGet%2$s %3$s","wordpress-seo"),"<nowrap>","</nowrap>","Yoast SEO Premium"),{nowrap:Object(r.createElement)("span",{className:"yst-whitespace-nowrap"})}),l=c.includes("black-friday-2023-promotion"),d=Object(r.createInterpolateElement)(Object(n.sprintf)(/* translators: %1$s and %2$s expand to strong tags. */
Object(n.__)("%1$sSAVE 30%%%2$s on your 12 month subscription","wordpress-seo"),"<strong>","</strong>"),{strong:Object(r.createElement)("strong",null)});return Object(r.createElement)("div",{className:"yst-p-6 yst-rounded-lg yst-text-white yst-bg-primary-500 yst-shadow"},Object(r.createElement)("figure",{className:"yst-logo-square yst-w-16 yst-h-16 yst-mx-auto yst-overflow-hidden yst-border yst-border-white yst-rounded-xl yst-rounded-br-none yst-relative yst-z-10 yst-mt-[-2.6rem]"},Object(r.createElement)(T,null)),l&&Object(r.createElement)("div",{className:"sidebar__sale_banner_container"},Object(r.createElement)("div",{className:"sidebar__sale_banner"},Object(r.createElement)("span",{className:"banner_text"},Object(n.__)("BLACK FRIDAY - 30% OFF","wordpress-seo")))),Object(r.createElement)(a.Title,{as:"h2",className:"yst-mt-6 yst-text-base yst-font-extrabold yst-text-white"},o),Object(r.createElement)("p",{className:"yst-mt-2"},i),l&&Object(r.createElement)("div",{className:"yst-text-center yst-border-t-[1px] yst-border-white yst-italic yst-mt-3"},Object(r.createElement)("p",{className:"yst-text-[10px] yst-my-3 yst-mx-0"},d)),Object(r.createElement)(a.Button,O()({as:"a",variant:"upsell",href:t,target:"_blank",rel:"noopener",className:"yst-flex yst-justify-center yst-gap-2 yst-mt-4 focus:yst-ring-offset-primary-500"},s),Object(r.createElement)("span",null,l?Object(n.__)("Claim your 30% off now!","wordpress-seo"):o),Object(r.createElement)(C.a,{className:"yst-w-4 yst-h-4 yst-icon-rtl"})),Object(r.createElement)("a",{className:"yst-block yst-mt-4 yst-no-underline",href:"https://www.g2.com/products/yoast-yoast/reviews",target:"_blank",rel:"noopener noreferrer"},Object(r.createElement)("span",{className:"yst-font-medium yst-text-white hover:yst-underline"},Object(n.__)("Read reviews from real users","wordpress-seo")),Object(r.createElement)("span",{className:"yst-flex yst-gap-2 yst-mt-2 yst-items-center"},Object(r.createElement)(b,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)("span",{className:"yst-flex yst-gap-1"},Object(r.createElement)(z,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(z,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(z,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(z,{className:"yst-w-5 yst-h-5"}),Object(r.createElement)(q,{className:"yst-w-5 yst-h-5"})),Object(r.createElement)("span",{className:"yst-text-sm yst-font-semibold yst-text-white"},"4.6 / 5"))))};A.propTypes={link:i.a.string.isRequired,linkProps:i.a.object,promotions:i.a.array},A.defaultProps={linkProps:{},promotions:[]};const W=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"xl:yst-max-w-3xl xl:yst-fixed xl:yst-right-8 xl:yst-w-[16rem]"},Object(r.createElement)("div",{className:"yst-grid yst-grid-cols-1 sm:yst-grid-cols-2 min-[783px]:yst-grid-cols-1 lg:yst-grid-cols-2 xl:yst-grid-cols-1 yst-gap-4"},t))};W.propTypes={children:i.a.node.isRequired};var Y=s(106),H=s(12);const F=e=>{let{videoId:t,thumbnail:s,wistiaEmbedPermission:c}=e;const[i,o]=Object(r.useState)(c.value?H.c.isPlaying:H.c.showPlay),l=Object(r.useCallback)(()=>o(H.c.isPlaying),[o]),d=Object(r.useCallback)(()=>{c.value?l():o(H.c.askPermission)},[c.value,l,o]),u=Object(r.useCallback)(()=>o(H.c.showPlay),[o]),m=Object(r.useCallback)(()=>{c.set(!0),l()},[c.set,l]);return Object(r.createElement)(r.Fragment,null,c.value&&Object(r.createElement)(Y.Helmet,null,Object(r.createElement)("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0})),Object(r.createElement)("div",{className:"yst-relative yst-w-full yst-h-0 yst-pt-[56.25%] yst-overflow-hidden yst-rounded-md yst-drop-shadow-md yst-bg-white"},i===H.c.showPlay&&Object(r.createElement)("button",{className:"yst-absolute yst-inset-0 yst-button yst-p-0 yst-border-none yst-bg-white yst-transition-opacity yst-duration-1000 yst-opacity-100",onClick:d},Object(r.createElement)("img",O()({className:"yst-w-full yst-h-auto",alt:"",loading:"lazy",decoding:"async"},s))),i===H.c.askPermission&&Object(r.createElement)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-flex-col yst-items-center yst-justify-center yst-bg-white"},Object(r.createElement)("p",{className:"yst-max-w-xs yst-mx-auto yst-text-center"},c.status===H.b.loading&&Object(r.createElement)(a.Spinner,null),c.status!==H.b.loading&&Object(n.sprintf)(/* translators: %1$s expands to Yoast SEO. %2$s expands to Wistia. */
Object(n.__)("To see this video, you need to allow %1$s to load embedded videos from %2$s.","wordpress-seo"),"Yoast SEO","Wistia")),Object(r.createElement)("div",{className:"yst-flex yst-mt-6 yst-gap-x-4"},Object(r.createElement)(a.Button,{type:"button",variant:"secondary",onClick:u,disabled:c.status===H.b.loading},Object(n.__)("Deny","wordpress-seo")),Object(r.createElement)(a.Button,{type:"button",variant:"primary",onClick:m,disabled:c.status===H.b.loading},Object(n.__)("Allow","wordpress-seo")))),c.value&&i===H.c.isPlaying&&Object(r.createElement)("div",{className:"yst-absolute yst-w-full yst-h-full yst-top-0 yst-left-0"},null===t&&Object(r.createElement)(a.Spinner,{className:"yst-h-full yst-mx-auto"}),null!==t&&Object(r.createElement)("div",{className:`wistia_embed wistia_async_${t} videoFoam=true`}))))};F.propTypes={videoId:i.a.string.isRequired,thumbnail:i.a.shape({src:i.a.string.isRequired,width:i.a.string,height:i.a.string}).isRequired,wistiaEmbedPermission:i.a.shape({value:i.a.bool.isRequired,status:i.a.string.isRequired,set:i.a.func.isRequired}).isRequired}},94:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s(0),n=s(6),a=s(2),c=s.n(a);const i={variant:{lg:{grid:"yst-grid lg:yst-grid-cols-3 lg:yst-gap-12",col1:"yst-col-span-1",col2:"lg:yst-mt-0 lg:yst-col-span-2"},xl:{grid:"yst-grid xl:yst-grid-cols-3 xl:yst-gap-12",col1:"yst-col-span-1",col2:"xl:yst-mt-0 xl:yst-col-span-2"},"2xl":{grid:"yst-grid 2xl:yst-grid-cols-3 2xl:yst-gap-12",col1:"yst-col-span-1",col2:"2xl:yst-mt-0 2xl:yst-col-span-2"}}},o=e=>{let{id:t,children:s,title:a,description:c=null,variant:o="2xl"}=e;return Object(r.createElement)("section",{id:t,className:i.variant[o].grid},Object(r.createElement)("div",{className:i.variant[o].col1},Object(r.createElement)("div",{className:"yst-max-w-screen-sm"},Object(r.createElement)(n.Title,{as:"h2",size:"4"},a),c&&Object(r.createElement)("p",{className:"yst-mt-2"},c))),Object(r.createElement)("fieldset",{className:"yst-min-w-0 yst-mt-8 "+i.variant[o].col2},Object(r.createElement)("legend",{className:"yst-sr-only"},a),Object(r.createElement)("div",{className:"yst-space-y-8"},s)))};o.propTypes={id:c.a.string,children:c.a.node.isRequired,title:c.a.node.isRequired,description:c.a.node,variant:c.a.oneOf(Object.keys(i.variant))}}});