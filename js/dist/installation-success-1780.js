!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=193)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},106:function(e,t){e.exports=window.wp.domReady},11:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return E}));var r=n(28),o=n.n(r),c=n(9),s=n.n(c),i=n(11),a=n.n(i),l=n(18),u=n.n(l),p=n(19),f=n.n(p),m=n(12),d=n.n(m),b=n(0),O=n(21),j=n(22),y=n(70);var w=[],v=null,h=function(e){u()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)});function c(e){var t;return s()(this,c),(t=r.call(this,e)).state={registeredComponents:[]},t}return a()(c,[{key:"registerComponent",value:function(e,t){this.setState({registeredComponents:[].concat(o()(this.state.registeredComponents),[{key:e,Component:t}])})}},{key:"render",value:function(){return this.state.registeredComponents.map((function(e){var t=e.Component,n=e.key;return Object(b.createElement)(t,{key:n})}))}}]),c}(b.Component);function g(e,t){var n=Object(j.a)();v=Object(b.createRef)();var r={isRtl:n.isRtl};Object(b.render)(Object(b.createElement)(y.a,{theme:r,location:"sidebar"},Object(b.createElement)(O.SlotFillProvider,null,Object(b.createElement)(b.Fragment,null,t,Object(b.createElement)(h,{ref:v})))),document.getElementById(e)),w.forEach((function(e){v.current.registerComponent(e.key,e.Component)}))}function E(e,t){null===v||null===v.current?w.push({key:e,Component:t}):v.current.registerComponent(e,t)}},12:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},14:function(e,t){e.exports=window.yoast.styledComponents},18:function(e,t,n){var r=n(49);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},19:function(e,t,n){var r=n(35),o=n(10);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},193:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),o=n(106),c=n.n(o),s=n(2),i=n(118),a=n(44),l=n(4);function u(){return Object(r.createElement)("ul",{className:"step-list"},Object(r.createElement)("li",{className:"step-complete"},Object(r.createElement)("div",{className:"step-first-div","aria-hidden":"true"},Object(r.createElement)("div",{className:"step-second-div"})),Object(r.createElement)("span",{className:"step-list-complete-circle"},Object(r.createElement)("span",{className:"complete-check-icon"}))),Object(r.createElement)("li",{className:"step-current"},Object(r.createElement)("span",{className:"step-list-current-circle","aria-current":"step"},Object(r.createElement)("span",{className:"step-list-current-inner-circle","aria-hidden":"true"}))))}function p(){return Object(r.createElement)("div",{className:"installation-success-page"},Object(r.createElement)("h1",{className:"installation-success-title"},Object(s.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(s.__)("You've successfully installed %s!","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("div",{className:"installation-success-content"},Object(r.createElement)("div",{className:"installation-success-steps"},Object(r.createElement)(u,null)),Object(r.createElement)("div",{className:"installation-success-cards"},Object(r.createElement)("div",{id:"installation-success-card-optimized-site",className:"installation-success-card"},Object(r.createElement)("h2",null,Object(s.__)("Your site is now easy to find for search engines!","wordpress-seo")),Object(r.createElement)("p",null,Object(s.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(s.__)("%s rolls out the red carpet for the search bots, which helps your site perform better in search engines.","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("div",{className:"card-button-section"},Object(r.createElement)("img",{className:"man-with-tablet",src:window.wpseoInstallationSuccess.pluginUrl+"/images/man_with_tablet.png",alt:Object(s.__)("Man holding a tablet.","wordpress-seo")}))),Object(r.createElement)("div",{id:"installation-success-card-configuration-workout",className:"installation-success-card active"},Object(r.createElement)("h2",null,Object(s.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(s.__)("Configure %s!","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("p",null,Object(s.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(s.__)("Set the essential %s settings in a few steps.","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("img",{src:window.wpseoInstallationSuccess.pluginUrl+"/images/mirrored_fit_bubble_woman_1_optim.svg",alt:""}),Object(r.createElement)("div",{className:"card-button-section"},Object(r.createElement)(l.ButtonStyledLink,{id:"installation-successful-configuration-workout-link",href:window.wpseoInstallationSuccess.configurationWorkoutUrl,variant:"primary"},Object(s.__)("Start configuration workout!","wordpress-seo")))))),Object(r.createElement)("a",{id:"installation-success-skip-link",href:"/wp-admin/admin.php?page=wpseo_dashboard"},
/* translators: %s expands to ' »'. */
Object(s.sprintf)(Object(s.__)("Skip%s","wordpress-seo")," »")))}Object(a.setWordPressSeoL10n)(),c()((function(){Object(i.b)("wpseo-installation-successful-free",Object(r.createElement)(p,null))}))},2:function(e,t){e.exports=window.wp.i18n},21:function(e,t){e.exports=window.wp.components},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3);function o(){return Object(r.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}},28:function(e,t,n){var r=n(67),o=n(68),c=n(69);e.exports=function(e){return r(e)||o(e)||c()}},29:function(e,t){e.exports=window.yoast.externals.contexts},3:function(e,t){e.exports=window.lodash},35:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},4:function(e,t){e.exports=window.yoast.componentsNew},44:function(e,t,n){"use strict";n.r(t),n.d(t,"setTextdomainL10n",(function(){return c})),n.d(t,"setYoastComponentsL10n",(function(){return s})),n.d(t,"setWordPressSeoL10n",(function(){return i}));var r=n(2),o=n(3);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",n=Object(o.get)(window,[t,e,"locale_data",e],!1);"yoast-components"===e&&(e="wordpress-seo"),!1===n?Object(r.setLocaleData)({"":{}},e):Object(r.setLocaleData)(n,e)}function s(){c("yoast-components")}function i(){c("wordpress-seo")}},49:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},67:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},68:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},69:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},70:function(e,t,n){"use strict";var r=n(0),o=n(1),c=n.n(o),s=n(14),i=n(29),a=function(e){var t=e.theme,n=e.location,o=e.children;return Object(r.createElement)(i.LocationProvider,{value:n},Object(r.createElement)(s.ThemeProvider,{theme:t},o))};a.propTypes={theme:c.a.object.isRequired,location:c.a.oneOf(["sidebar","metabox","modal"]).isRequired,children:c.a.element.isRequired},t.a=a},9:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}});