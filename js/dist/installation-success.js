!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=237)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},104:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var s=n(0),i=n(13),a=n(17),r=n(66);const o=[];let l=null;class c extends s.Component{constructor(e){super(e),this.state={registeredComponents:[]}}registerComponent(e,t){this.setState({registeredComponents:[...this.state.registeredComponents,{key:e,Component:t}]})}render(){return this.state.registeredComponents.map(e=>{let{Component:t,key:n}=e;return Object(s.createElement)(t,{key:n})})}}function u(e,t){const n=Object(a.a)();l=Object(s.createRef)();const u={isRtl:n.isRtl};Object(s.render)(Object(s.createElement)(r.a,{theme:u,location:"sidebar"},Object(s.createElement)(i.SlotFillProvider,null,Object(s.createElement)(s.Fragment,null,t,Object(s.createElement)(c,{ref:l})))),document.getElementById(e)),o.forEach(e=>{l.current.registerComponent(e.key,e.Component)})}function d(e,t){null===l||null===l.current?o.push({key:e,Component:t}):l.current.registerComponent(e,t)}},11:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=c(n(3)),o=c(n(1)),l=c(n(22));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},y=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];if(!n.length)return e;for(var i={},a=Object.keys(e),r=0;r<a.length;r++){var o=a[r];-1===n.indexOf(o)&&(i[o]=e[o])}return i}function m(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function f(e){return!isNaN(parseFloat(e))&&isFinite(e)}function h(e){return"string"==typeof e&&e.search("%")===e.length-1&&f(e.substr(0,e.length-1))}function b(e,t){e&&"function"==typeof e&&e(t)}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var s="auto",a="visible";f(e.height)?(s=e.height<0||"0"===e.height?0:e.height,a="hidden"):h(e.height)&&(s="0%"===e.height?0:e.height,a="hidden"),n.animationStateClasses=i({},d,e.animationStateClasses);var r=n.getStaticStateClasses(s);return n.state={animationStateClasses:r,height:s,overflow:a,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,s,i=this,a=this.props,r=a.delay,o=a.duration,c=a.height,d=a.onAnimationEnd,y=a.onAnimationStart;if(this.contentElement&&c!==e.height){var p;this.showContent(t.height),this.contentElement.style.overflow="hidden";var g=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=o+r,w=null,O={height:null,overflow:"hidden"},x="auto"===t.height;f(c)?(w=c<0||"0"===c?0:c,O.height=w):h(c)?(w="0%"===c?0:c,O.height=w):(w=g,O.height="auto",O.overflow=null),x&&(O.height=w,w=g);var j=(0,l.default)((u(p={},this.animationStateClasses.animating,!0),u(p,this.animationStateClasses.animatingUp,"auto"===e.height||c<e.height),u(p,this.animationStateClasses.animatingDown,"auto"===c||c>e.height),u(p,this.animationStateClasses.animatingToHeightZero,0===O.height),u(p,this.animationStateClasses.animatingToHeightAuto,"auto"===O.height),u(p,this.animationStateClasses.animatingToHeightSpecific,O.height>0),p)),E=this.getStaticStateClasses(O.height);this.setState({animationStateClasses:j,height:w,overflow:"hidden",shouldUseTransitions:!x}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),x?(O.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){i.setState(O),b(y,{newHeight:O.height})},(s=[])[0]=requestAnimationFrame((function(){s[1]=requestAnimationFrame((function(){n()}))})),s),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:E,shouldUseTransitions:!1}),i.hideContent(O.height),b(d,{newHeight:O.height})}),v)):(b(y,{newHeight:w}),this.timeoutID=setTimeout((function(){O.animationStateClasses=E,O.shouldUseTransitions=!1,i.setState(O),"auto"!==c&&i.hideContent(w),b(d,{newHeight:w})}),v))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,l.default)((u(t={},this.animationStateClasses.static,!0),u(t,this.animationStateClasses.staticHeightZero,0===e),u(t,this.animationStateClasses.staticHeightSpecific,e>0),u(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,s=n.animateOpacity,a=n.applyInlineTransitions,o=n.children,c=n.className,d=n.contentClassName,m=n.delay,f=n.duration,h=n.easing,b=n.id,g=n.style,v=this.state,w=v.height,O=v.overflow,x=v.animationStateClasses,j=v.shouldUseTransitions,E=i({},g,{height:w,overflow:O||g.overflow});j&&a&&(E.transition="height "+f+"ms "+h+" "+m+"ms",g.transition&&(E.transition=g.transition+", "+E.transition),E.WebkitTransition=E.transition);var S={};s&&(S.transition="opacity "+f+"ms "+h+" "+m+"ms",S.WebkitTransition=S.transition,0===w&&(S.opacity=0));var T=(0,l.default)((u(e={},x,!0),u(e,c,c),e)),C=void 0!==this.props["aria-hidden"]?this.props["aria-hidden"]:0===w;return r.default.createElement("div",i({},p.apply(void 0,[this.props].concat(y)),{"aria-hidden":C,className:T,id:b,style:E}),r.default.createElement("div",{className:d,style:S,ref:function(e){return t.contentElement=e}},o))}}]),t}(r.default.Component);g.propTypes={"aria-hidden":o.default.bool,animateOpacity:o.default.bool,animationStateClasses:o.default.object,applyInlineTransitions:o.default.bool,children:o.default.any.isRequired,className:o.default.string,contentClassName:o.default.string,delay:o.default.number,duration:o.default.number,easing:o.default.string,height:function(e,t,n){var i=e[t];return"number"==typeof i&&i>=0||h(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+(void 0===i?"undefined":s(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:o.default.string,onAnimationEnd:o.default.func,onAnimationStart:o.default.func,style:o.default.object},g.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=g},13:function(e,t){e.exports=window.wp.components},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h}));var s=n(0),i=n(183),a=n(1),r=n.n(a),o=n(71),l=n(47);const{slideDuration:c,delayUntilStepFaded:u}=o.b,d=`yst-transition-opacity ${c} yst-absolute yst-inset-0 yst-border-2 yst-flex yst-items-center yst-justify-center yst-rounded-full`;function y(e){return`${d} ${e?"yst-opacity-100":u+" yst-opacity-0"}`}function p(e){let{isVisible:t}=e;return Object(s.createElement)("span",{className:"yst-bg-white yst-border-primary-500 "+y(t)},Object(s.createElement)("span",{className:"yst-h-2.5 yst-w-2.5 yst-rounded-full yst-bg-primary-500"}))}function m(e){let{isVisible:t}=e;return Object(s.createElement)("span",{className:"yst-bg-primary-500 yst-border-primary-500 "+y(t)},Object(s.createElement)(i.a,{className:"yst-w-5 yst-h-5 yst-text-white","aria-hidden":"true"}))}function f(e){let{isVisible:t}=e;return Object(s.createElement)("span",{className:"yst-bg-white yst-border-gray-300 "+y(t)},Object(s.createElement)("span",{className:"yst-h-2.5 yst-w-2.5 yst-rounded-full yst-bg-transparent"}))}function h(e){let{activationDelay:t,deactivationDelay:n,isFinished:i}=e;const{activeStepIndex:a,stepIndex:r,lastStepIndex:o}=Object(l.c)(),c=r===o,u=a===r,[d,y]=Object(s.useState)(()=>!!u&&!c);return Object(s.useEffect)(()=>{if(u){const e=setTimeout(()=>{y(!0)},t);return()=>clearTimeout(e)}const e=setTimeout(()=>{y(!1)},n);return()=>clearTimeout(e)},[u,c,t,n]),Object(s.createElement)("span",{className:"yst-relative yst-z-10 yst-w-8 yst-h-8 yst-rounded-full"},Object(s.createElement)(f,{isVisible:!0}),Object(s.createElement)(m,{isVisible:i}),Object(s.createElement)(p,{isVisible:d&&!c}))}p.propTypes={isVisible:r.a.bool},p.defaultProps={isVisible:!0},m.propTypes={isVisible:r.a.bool},m.defaultProps={isVisible:!0},f.propTypes={isVisible:r.a.bool},f.defaultProps={isVisible:!0},h.propTypes={isFinished:r.a.bool.isRequired,activationDelay:r.a.number,deactivationDelay:r.a.number},h.defaultProps={activationDelay:0,deactivationDelay:0}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(4);function i(){return Object(s.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}},182:function(e,t,n){"use strict";var s=n(3);const i=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}));t.a=i},183:function(e,t,n){"use strict";var s=n(3);const i=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.a=i},19:function(e,t){e.exports=window.yoast.externals.contexts},2:function(e,t){e.exports=window.wp.i18n},22:function(e,t,n){var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)&&s.length){var r=i.apply(null,s);r&&e.push(r)}else if("object"===a)for(var o in s)n.call(s,o)&&s[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()},237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var s=n(0),i=n(62),a=n.n(i),r=n(2),o=n(104),l=n(162);function c(){return Object(s.createElement)("div",{className:"yst-mt-6 yst-inset-0 yst-mx-auto yst-my-6 yst-flex yst-items-center yst-w-[440px]","aria-hidden":"true"},Object(s.createElement)("span",{className:"yst-relative yst-shrink-0 yst-z-10 yst-w-8 yst-h-8 yst-rounded-full"},Object(s.createElement)(l.b,{isVisible:!0})),Object(s.createElement)("div",{className:"yst-h-0.5 yst-w-full yst-bg-primary-500"}),Object(s.createElement)("span",{className:"yst-relative yst-shrink-0 yst-z-10 yst-w-8 yst-h-8 yst-rounded-full"},Object(s.createElement)(l.a,{isVisible:!0})))}function u(){return Object(s.createElement)("div",{className:"yst-root yst-my-auto yst-flex yst-flex-col yst-h-[90vh] yst-justify-center"},Object(s.createElement)("h1",{className:"yst-text-4xl yst-text-gray-900 yst-w-[350px] yst-font-extrabold yst-leading-10 yst-mx-auto yst-my-6 yst-text-center yst-tracking-tight"},Object(s.createInterpolateElement)(Object(r.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(r.__)("You've successfully installed %s!","wordpress-seo"),"<span>Yoast SEO</span>"),{span:Object(s.createElement)("span",{className:"yst-text-primary-500"})})),Object(s.createElement)("div",{className:"installation-success-content"},Object(s.createElement)("div",{className:"yst-hidden md:yst-block"},Object(s.createElement)(c,null)),Object(s.createElement)("div",{className:"yst-flex yst-flex-col md:yst-flex-row yst-justify-center yst-items-center yst-gap-6"},Object(s.createElement)("div",{id:"installation-success-card-optimized-site",className:"yst-shrink-0 yst-bg-white yst-rounded-lg yst-p-6 yst-flex yst-flex-col yst-max-w-sm yst-shadow-md yst-h-4/5 yst-leading-6"},Object(s.createElement)("h2",{className:"yst-tracking-tight yst-text-gray-900 yst-text-2xl yst-leading-8 yst-font-extrabold"},Object(r.__)("Your site is already easier to find for search engines.","wordpress-seo")),Object(s.createElement)("p",{className:"yst-text-gray-500 yst-text-base yst-my-4"},Object(r.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(r.__)("%s rolls out the red carpet for the search bots, which helps your site perform better in search engines.","wordpress-seo"),"Yoast SEO")),Object(s.createElement)("div",{className:"card-button-section"},Object(s.createElement)("img",{className:"yst-my-0 yst-mx-auto yst-w-[150px] yst-h-[120px]",src:window.wpseoInstallationSuccess.pluginUrl+"/images/man_with_tablet.png",alt:Object(r.__)("Man holding a tablet.","wordpress-seo")}))),Object(s.createElement)("div",{id:"installation-success-card-configuration",className:"yst-shrink-0 yst-shadow-xl yst-bg-primary-500 yst-rounded-lg yst-p-6 yst-flex yst-flex-col yst-max-w-sm yst-h-4/5 yst-leading-6"},Object(s.createElement)("h2",{className:" yst-text-white yst-text-2xl yst-leading-8 yst-font-extrabold"},Object(r.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(r.__)("For the best ranking results: configure %s!","wordpress-seo"),"Yoast SEO")),Object(s.createElement)("p",{className:"yst-font-medium yst-text-white yst-text-base yst-my-4"},Object(r.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(r.__)("Set the essential %s settings for your site in a few steps.","wordpress-seo"),"Yoast SEO")),Object(s.createElement)("img",{className:"yst-my-6 yst-mx-auto yst-w-[150px] yst-h-[120px]",src:window.wpseoInstallationSuccess.pluginUrl+"/images/indexables_3_left_bubble_optm.svg",alt:""}),Object(s.createElement)("div",{className:"yst-flex yst-grow-1 yst-mt-auto"},Object(s.createElement)("a",{id:"installation-successful-configuration-link",href:window.wpseoInstallationSuccess.firstTimeConfigurationUrl,className:"yst-inline-flex yst-items-center yst-w-full yst-justify-center yst-no-underline yst-px-6 yst-py-3 yst-border yst-border-transparent yst-text-base yst-font-medium yst-rounded-md yst-shadow-none yst-text-primary-500 yst-bg-white hover:yst-bg-gray-50 focus:yst-outline-none focus:yst-ring-2 focus:yst-ring-offset-2 focus:yst-ring-white yst-ring-offset-2 yst-ring-offset-primary-500"},Object(r.__)("Start first-time configuration!","wordpress-seo"),Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"yst-ml-3 yst-mr-1 yst-h-5 yst-w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Object(s.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}))))),Object(s.createElement)("a",{id:"installation-success-skip-link",className:"yst-bottom-12 yst-right-0 yst-mr-5 yst-self-end yst-text-base md:yst-absolute",href:"/wp-admin/admin.php?page=wpseo_dashboard"},
/* translators: %s expands to ' »'. */
Object(r.sprintf)(Object(r.__)("Skip%s","wordpress-seo")," »")))))}a()(()=>{Object(o.b)("wpseo-installation-successful-free",Object(s.createElement)(u,null))})},3:function(e,t){e.exports=window.React},4:function(e,t){e.exports=window.lodash},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return I}));var s=n(11),i=n.n(s),a=n(0),r=n(2),o=n(111),l=n.n(o),c=n(1),u=n.n(c),d=n(71),y=n(162);function p(e,t,n){return t&&!n?"yst-text-primary-500":e?"yst-text-gray-900":"yst-text-gray-500"}function m(e){let{name:t,description:n,isFinished:s,children:i}=e;const{stepIndex:r,activeStepIndex:o,lastStepIndex:l}=E(),c=o===r,u=l===r,[m,f]=Object(a.useState)(p(s,c,u));return Object(a.useEffect)(()=>{if(c){const e=p(s,c,u),t=setTimeout(()=>f(e),d.c.delayBeforeOpening);return()=>clearTimeout(t)}const e=p(s,c,u);f(e)},[o,s,u,p]),Object(a.createElement)("div",{className:"yst-relative yst-flex yst-items-center yst-group","aria-current":c?"step":null},Object(a.createElement)("span",{className:"yst-flex yst-items-center","aria-hidden":c?"true":null},Object(a.createElement)(y.c,{activationDelay:d.c.delayBeforeOpening,deactivationDelay:0,isFinished:s})),Object(a.createElement)("span",{className:"yst-ml-4 yst-min-w-0 yst-flex yst-flex-col"},Object(a.createElement)("span",{className:"yst-transition-colors yst-duration-500 yst-text-xs yst-font-[650] yst-tracking-wide yst-uppercase "+m},t),n&&Object(a.createElement)("span",{className:"yst-text-sm yst-text-gray-500"},n)),i)}m.propTypes={name:u.a.string.isRequired,isFinished:u.a.bool.isRequired,description:u.a.string,children:u.a.node},m.defaultProps={description:"",children:[]};var f=n(52);const{slideDuration:h,delayBeforeOpening:b,delayBeforeFadingIn:g,delayBeforeClosing:v}=d.c,{fadeDuration:w,delayUntilStepFaded:O,slideDuration:x}=d.b,j=Object(a.createContext)();function E(){const e=Object(a.useContext)(j);if(!e)throw new Error("Stepper compound components cannot be rendered outside the Stepper component");return e}function S(e){let{beforeGo:t,children:n,destination:s,...r}=e;const{stepIndex:o,setActiveStepIndex:l,lastStepIndex:c}=E(),u=Object(a.useCallback)(()=>{l("string"==typeof s?"last"===s?c:0:o+s)},[o,c,l,s]),d=Object(a.useCallback)(async()=>{let e=!0;t&&(e=!1,e=await t()),e&&u()},[u,t]);return Object(a.createElement)("button",i()({type:"button",onClick:d},r),n)}function T(e){let{children:t,...n}=e;const{stepIndex:s,setActiveStepIndex:r}=E(),o=Object(a.useCallback)(()=>{r(s)},[r,s]);return Object(a.createElement)("button",i()({type:"button",onClick:o,className:"yst-button yst-button--secondary yst-button--small"},n),t)}function C(e){let{children:t}=e;const{lastStepIndex:n,stepIndex:s,activeStepIndex:i}=E();return Object(a.createElement)(a.Fragment,null,s!==n&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"yst--ml-px yst-absolute yst-left-4 yst-w-0.5 yst-h-full yst-bg-gray-300 yst--bottom-6","aria-hidden":"true"}),Object(a.createElement)("div",{className:`yst-h-12 yst-transition-transform ${O} yst-ease-linear ${x} ${s<i?"yst-scale-y-1":"yst-scale-y-0"} yst-origin-top yst--ml-px yst-absolute yst-left-4 yst-w-0.5 yst-bg-primary-500 yst-top-8`,"aria-hidden":"true"})),t)}function N(e){let{id:t,message:n,className:s}=e;return Object(a.createElement)(f.a,{id:t,type:"error",isVisible:!!n,className:s},
/* translators: %1$s expands to the error message returned by the server */
Object(r.sprintf)(Object(r.__)("An error has occurred: %1$s","wordpress-seo"),n))}function _(e){let{children:t}=e;const{activeStepIndex:n,stepIndex:s}=E(),i=n===s,[r,o]=Object(a.useState)(i?"auto":0),[c,u]=Object(a.useState)(!i);return Object(a.useEffect)(()=>{i?(o("auto"),setTimeout(()=>u(!1),g)):(u(!0),o(0))},[i]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(l.a,{id:"content-"+s,delay:0===r?v:b,height:r,easing:"ease-in-out",duration:h},Object(a.createElement)("div",{className:`yst-transition-opacity ${w} yst-relative yst-ml-12 yst-mt-4 yst-pb-1 ${c?"yst-opacity-0 yst-pointer-events-none":"yst-opacity-100"}`},t)))}function I(e){let{children:t,setActiveStepIndex:n,activeStepIndex:s,isStepperFinished:i}=e;return Object(a.createElement)("ol",null,t.map((e,r)=>Object(a.createElement)("li",{key:`${e.props.name}-${r}`,className:(r===t.length-1?"":"yst-pb-8")+" yst-mb-0 yst-relative yst-max-w-none"},Object(a.createElement)(j.Provider,{value:{stepIndex:r,activeStepIndex:s,setActiveStepIndex:n,lastStepIndex:t.length-1,isStepperFinished:i}},e))))}S.propTypes={beforeGo:u.a.func,children:u.a.node,destination:u.a.oneOfType([u.a.number,u.a.oneOf(["first","last"])])},S.defaultProps={beforeGo:null,children:Object(a.createElement)(a.Fragment,null,Object(r.__)("Continue","wordpress-seo")),destination:1},T.propTypes={children:u.a.node},T.defaultProps={children:Object(a.createElement)(a.Fragment,null,Object(r.__)("Edit","wordpress-seo"))},C.propTypes={children:u.a.node.isRequired},N.propTypes={id:u.a.string.isRequired,message:u.a.string.isRequired,className:u.a.string},N.defaultProps={className:""},_.propTypes={children:u.a.node.isRequired},I.propTypes={setActiveStepIndex:u.a.func.isRequired,activeStepIndex:u.a.number.isRequired,isStepperFinished:u.a.bool,children:u.a.node.isRequired},I.defaultProps={isStepperFinished:!1},C.Content=_,C.Error=N,C.Header=m,C.GoButton=S,C.EditButton=T},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f}));var s=n(0),i=n(3),a=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))})),r=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),o=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}))})),l=n(182),c=n(1),u=n(22),d=n.n(u),y=n(111),p=n.n(y);function m(e){let t,n,{type:i,children:c,className:u}=e;switch(i){case"info":t=Object(s.createElement)(a,{"aria-hidden":"true",className:"yst-flex-shrink-0 yst-w-5 yst-h-5 yst-text-blue-500"}),n="yst-bg-blue-100 yst-text-blue-800";break;case"warning":t=Object(s.createElement)(r,{"aria-hidden":"true",className:"yst-flex-shrink-0 yst-w-5 yst-h-5 yst-text-yellow-500"}),n="yst-bg-yellow-100 yst-text-yellow-800";break;case"error":t=Object(s.createElement)(o,{"aria-hidden":"true",className:"yst-flex-shrink-0 yst-w-5 yst-h-5 yst-text-red-500"}),n="yst-bg-red-100 yst-text-red-800";break;case"success":t=Object(s.createElement)(l.a,{"aria-hidden":"true",className:"yst-flex-shrink-0 yst-w-5 yst-h-5 yst-text-emerald-600"}),n="yst-bg-green-100 yst-text-green-800"}return Object(s.createElement)("div",{className:d()("yst-flex yst-p-4 yst-rounded-md",n,u)},t,Object(s.createElement)("div",{className:"yst-flex-1 yst-ml-3 yst-text-sm"},c))}function f(e){let{id:t,isVisible:n,expandDuration:i,type:a,children:r,className:o}=e;const[l,c]=Object(s.useState)(n?"yst-opacity-100":"yst-opacity-0"),u=Object(s.useCallback)(()=>{c("yst-opacity-100")});return Object(s.createElement)(p.a,{id:t,height:n?"auto":0,easing:"linear",duration:i,onAnimationEnd:u},Object(s.createElement)(m,{type:a,className:d()("yst-transition-opacity yst-duration-300 yst-mt-4",l,o)},r))}m.propTypes={type:c.PropTypes.oneOf(["info","warning","error","success"]),children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired,className:c.PropTypes.string},m.defaultProps={type:"info",className:""},f.propTypes={id:c.PropTypes.string.isRequired,isVisible:c.PropTypes.bool.isRequired,type:c.PropTypes.oneOf(["info","warning","error","success"]),children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired,expandDuration:c.PropTypes.number,className:c.PropTypes.string},f.defaultProps={expandDuration:400,type:"info",className:""}},62:function(e,t){e.exports=window.wp.domReady},66:function(e,t,n){"use strict";var s=n(0),i=n(1),a=n.n(i),r=n(8),o=n(19);const l=e=>{let{theme:t,location:n,children:i}=e;return Object(s.createElement)(o.LocationProvider,{value:n},Object(s.createElement)(r.ThemeProvider,{theme:t},i))};l.propTypes={theme:a.a.object.isRequired,location:a.a.oneOf(["sidebar","metabox","modal"]).isRequired,children:a.a.element.isRequired},t.a=l},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));const s={slideDuration:500,fadeDuration:200,delayBeforeOpening:900,delayBeforeFadingIn:1400,delayBeforeClosing:200},i={fadeDuration:"yst-duration-200",slideDuration:"yst-duration-500",delayBeforeOpening:"yst-delay-[900ms]",delayUntilStepFaded:"yst-delay-200"};function a(e){if(!Array.isArray(e)||0===e.length)return 0;const t=e.findIndex(e=>!1===e);return-1!==t?t:e.every(Boolean)?e.length-1:0}},8:function(e,t){e.exports=window.yoast.styledComponents}});