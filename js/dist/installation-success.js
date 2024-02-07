(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.domReady;var n=e.n(s);const r=window.wp.i18n,a=window.wp.components,o=window.yoast.propTypes;var i=e.n(o);const l=window.yoast.styledComponents,c=window.yoast.externals.contexts,y=({theme:e,location:s,children:n})=>(0,t.createElement)(c.LocationProvider,{value:s},(0,t.createElement)(l.ThemeProvider,{theme:e},n));y.propTypes={theme:i().object.isRequired,location:i().oneOf(["sidebar","metabox","modal"]).isRequired,children:i().element.isRequired};const m=y,d=[];let u=null;class p extends t.Component{constructor(e){super(e),this.state={registeredComponents:[]}}registerComponent(e,t){this.setState({registeredComponents:[...this.state.registeredComponents,{key:e,Component:t}]})}render(){return this.state.registeredComponents.map((({Component:e,key:s})=>(0,t.createElement)(e,{key:s})))}}const f=window.React,w=f.forwardRef((function(e,t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),f.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))})),g=f.forwardRef((function(e,t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"}))}));function h(){return(0,t.createElement)("div",{className:"yst-root yst-my-auto yst-flex yst-flex-col yst-h-[90vh] yst-justify-center"},(0,t.createElement)("h1",{className:"yst-text-4xl yst-text-gray-900 yst-w-[350px] yst-font-extrabold yst-leading-10 yst-mx-auto yst-mt-6 yst-mb-16 yst-text-center yst-tracking-tight"},(0,t.createInterpolateElement)((0,r.sprintf)(/* translators: %s expands to Yoast SEO. */
(0,r.__)("You've successfully installed %s!","wordpress-seo"),"<span>Yoast SEO</span>"),{span:(0,t.createElement)("span",{className:"yst-text-primary-500"})})),(0,t.createElement)("div",{className:"installation-success-content"},(0,t.createElement)("div",{className:"yst-flex yst-flex-col md:yst-flex-row yst-justify-center yst-items-center yst-gap-8"},(0,t.createElement)("div",{id:"installation-success-card-optimized-site",className:"yst-shrink-0 yst-bg-white yst-rounded-lg yst-p-6 yst-flex yst-flex-col yst-max-w-sm yst-shadow-md yst-h-4/5 yst-leading-6"},(0,t.createElement)("h2",{className:"yst-tracking-tight yst-text-gray-900 yst-text-2xl yst-leading-8 yst-font-extrabold"},(0,r.__)("Your site is already easier to find for search engines.","wordpress-seo")),(0,t.createElement)("p",{className:"yst-text-gray-500 yst-text-base yst-my-4"},(0,r.sprintf)(/* translators: %s expands to Yoast SEO. */
(0,r.__)("%s rolls out the red carpet for the search bots, which helps your site perform better in search engines.","wordpress-seo"),"Yoast SEO")),(0,t.createElement)("div",{className:"card-button-section"}),(0,t.createElement)("div",{className:"yst-bg-green-100 yst-w-20 yst-h-20 yst-rounded-full yst-mx-auto yst-my-2 yst-flex yst-items-center yst-justify-center"},(0,t.createElement)(w,{className:"yst-w-8 yst-text-green-600"}))),(0,t.createElement)("div",null,(0,t.createElement)(g,{className:"yst-w-8 yst-text-gray-500"})),(0,t.createElement)("div",{id:"installation-success-card-configuration",className:"yst-shrink-0 yst-shadow-xl yst-bg-primary-500 yst-rounded-lg yst-p-6 yst-flex yst-flex-col yst-max-w-sm yst-h-4/5 yst-leading-6"},(0,t.createElement)("h2",{className:" yst-text-white yst-text-2xl yst-leading-8 yst-font-extrabold"},(0,r.sprintf)(/* translators: %s expands to Yoast SEO. */
(0,r.__)("For the best ranking results: configure %s!","wordpress-seo"),"Yoast SEO")),(0,t.createElement)("p",{className:"yst-font-medium yst-text-white yst-text-base yst-my-4"},(0,r.sprintf)(/* translators: %s expands to Yoast SEO. */
(0,r.__)("Set the essential %s settings for your site in a few steps.","wordpress-seo"),"Yoast SEO")),(0,t.createElement)("img",{className:"yst-my-6 yst-mx-auto yst-w-[150px] yst-h-[120px]",src:window.wpseoInstallationSuccess.pluginUrl+"/images/indexables_3_left_bubble_optm.svg",alt:""}),(0,t.createElement)("div",{className:"yst-flex yst-grow-1 yst-mt-auto"},(0,t.createElement)("a",{id:"installation-successful-configuration-link",href:window.wpseoInstallationSuccess.firstTimeConfigurationUrl,className:"yst-inline-flex yst-items-center yst-w-full yst-justify-center yst-no-underline yst-px-6 yst-py-3 yst-border yst-border-transparent yst-text-base yst-font-medium yst-rounded-md yst-shadow-none yst-text-primary-500 yst-bg-white hover:yst-bg-gray-50 focus:yst-outline-none focus:yst-ring-2 focus:yst-ring-offset-2 focus:yst-ring-white yst-ring-offset-2 yst-ring-offset-primary-500","data-hiive-event-name":"clicked_start_first_time_configuration"},(0,r.__)("Start first-time configuration!","wordpress-seo"),(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"yst-ml-3 yst-mr-1 yst-h-5 yst-w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}))))),(0,t.createElement)("a",{id:"installation-success-skip-link",className:"yst-bottom-12 yst-right-0 yst-mr-5 yst-self-end yst-text-base md:yst-absolute",href:"/wp-admin/admin.php?page=wpseo_dashboard","data-hiive-event-name":"clicked_skip_button | installation successful screen"},/* translators: %s expands to ' »'. */
(0,r.sprintf)((0,r.__)("Skip%s","wordpress-seo")," »")))))}n()((()=>{const e={isRtl:getL10nObject().isRtl};!function({target:e,children:s,theme:n,location:r}){u=(0,t.createRef)(),(0,t.render)((0,t.createElement)(m,{theme:n,location:r},(0,t.createElement)(a.SlotFillProvider,null,(0,t.createElement)(t.Fragment,null,s,(0,t.createElement)(p,{ref:u})))),document.getElementById(e)),d.forEach((e=>{u.current.registerComponent(e.key,e.Component)}))}({target:"wpseo-installation-successful-free",children:(0,t.createElement)(h,null),location:"sidebar",theme:e})}))})();