!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=216)}({0:function(e,t){e.exports=window.wp.element},10:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},107:function(e,t){e.exports=window.wp.domReady},11:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},13:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},14:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h}));var r=n(31),o=n.n(r),s=n(10),c=n.n(s),i=n(11),a=n.n(i),l=n(21),u=n.n(l),p=n(22),f=n.n(p),d=n(13),m=n.n(d),b=n(0),x=n(24),y=n(26),O=n(86);var j=[],_=null,w=function(e){u()(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var o=m()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)});function s(e){var t;return c()(this,s),(t=r.call(this,e)).state={registeredComponents:[]},t}return a()(s,[{key:"registerComponent",value:function(e,t){this.setState({registeredComponents:[].concat(o()(this.state.registeredComponents),[{key:e,Component:t}])})}},{key:"render",value:function(){return this.state.registeredComponents.map((function(e){var t=e.Component,n=e.key;return Object(b.createElement)(t,{key:n})}))}}]),s}(b.Component);function v(e,t){var n=Object(y.a)();_=Object(b.createRef)();var r={isRtl:n.isRtl};Object(b.render)(Object(b.createElement)(O.a,{theme:r,location:"sidebar"},Object(b.createElement)(x.SlotFillProvider,null,Object(b.createElement)(b.Fragment,null,t,Object(b.createElement)(w,{ref:_})))),document.getElementById(e)),j.forEach((function(e){_.current.registerComponent(e.key,e.Component)}))}function h(e,t){null===_||null===_.current?j.push({key:e,Component:t}):_.current.registerComponent(e,t)}},2:function(e,t){e.exports=window.yoast.propTypes},21:function(e,t,n){var r=n(60);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},216:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),o=n(107),s=n.n(o),c=n(3),i=n(140),a=n(6);function l(){return Object(r.createElement)("ul",{className:"step-list"},Object(r.createElement)("li",{className:"step-complete"},Object(r.createElement)("div",{className:"step-first-div","aria-hidden":"true"},Object(r.createElement)("div",{className:"step-second-div"})),Object(r.createElement)("span",{className:"step-list-complete-circle"},Object(r.createElement)("span",{className:"complete-check-icon"}))),Object(r.createElement)("li",{className:"step-current"},Object(r.createElement)("span",{className:"step-list-current-circle","aria-current":"step"},Object(r.createElement)("span",{className:"step-list-current-inner-circle","aria-hidden":"true"}))))}function u(){return Object(r.createElement)("div",{className:"installation-success-page"},Object(r.createElement)("h1",{className:"installation-success-title"},Object(c.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(c.__)("You've successfully installed %s!","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("div",{className:"installation-success-content"},Object(r.createElement)("div",{className:"installation-success-steps"},Object(r.createElement)(l,null)),Object(r.createElement)("div",{className:"installation-success-cards"},Object(r.createElement)("div",{id:"installation-success-card-optimized-site",className:"installation-success-card"},Object(r.createElement)("h2",null,Object(c.__)("Your site is now easy to find for search engines!","wordpress-seo")),Object(r.createElement)("p",null,Object(c.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(c.__)("%s rolls out the red carpet for the search bots, which helps your site perform better in search engines.","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("div",{className:"card-button-section"},Object(r.createElement)("img",{className:"man-with-tablet",src:window.wpseoInstallationSuccess.pluginUrl+"/images/man_with_tablet.png",alt:Object(c.__)("Man holding a tablet.","wordpress-seo")}))),Object(r.createElement)("div",{id:"installation-success-card-configuration-workout",className:"installation-success-card active"},Object(r.createElement)("h2",null,Object(c.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(c.__)("Configure %s!","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("p",null,Object(c.sprintf)(
/* translators: %s expands to Yoast SEO. */
Object(c.__)("Set the essential %s settings in a few steps.","wordpress-seo"),"Yoast SEO")),Object(r.createElement)("img",{src:window.wpseoInstallationSuccess.pluginUrl+"/images/mirrored_fit_bubble_woman_1_optim.svg",alt:""}),Object(r.createElement)("div",{className:"card-button-section"},Object(r.createElement)(a.ButtonStyledLink,{id:"installation-successful-configuration-workout-link",href:window.wpseoInstallationSuccess.configurationWorkoutUrl,variant:"primary"},Object(c.__)("Start configuration workout!","wordpress-seo")))))),Object(r.createElement)("a",{id:"installation-success-skip-link",href:"/wp-admin/admin.php?page=wpseo_dashboard"},
/* translators: %s expands to ' »'. */
Object(c.sprintf)(Object(c.__)("Skip%s","wordpress-seo")," »")))}s()((function(){Object(i.b)("wpseo-installation-successful-free",Object(r.createElement)(u,null))}))},22:function(e,t,n){var r=n(43).default,o=n(14);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},24:function(e,t){e.exports=window.wp.components},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4);function o(){return Object(r.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}},3:function(e,t){e.exports=window.wp.i18n},31:function(e,t,n){var r=n(83),o=n(84),s=n(53),c=n(85);e.exports=function(e){return r(e)||o(e)||s(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},38:function(e,t){e.exports=window.yoast.externals.contexts},4:function(e,t){e.exports=window.lodash},43:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},50:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},53:function(e,t,n){var r=n(50);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6:function(e,t){e.exports=window.yoast.componentsNew},60:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e,t){e.exports=window.yoast.styledComponents},83:function(e,t,n){var r=n(50);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},84:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},85:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},86:function(e,t,n){"use strict";var r=n(0),o=n(2),s=n.n(o),c=n(8),i=n(38),a=function(e){var t=e.theme,n=e.location,o=e.children;return Object(r.createElement)(i.LocationProvider,{value:n},Object(r.createElement)(c.ThemeProvider,{theme:t},o))};a.propTypes={theme:s.a.object.isRequired,location:s.a.oneOf(["sidebar","metabox","modal"]).isRequired,children:s.a.element.isRequired},t.a=a}});