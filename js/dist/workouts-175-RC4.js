!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=360)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){e.exports=window.yoast.helpers},11:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},12:function(e,t){e.exports=window.yoast.styledComponents},13:function(e,t,n){var o=n(69);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},14:function(e,t,n){var o=n(35),r=n(11);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(33),r=n.n(o),i=n(0),u=n(1),s=n.n(u),a=n(3),c=n(4),l=n(5);function p(e){var t=e.name,n=e.title,o=e.subtitle,u=e.usps,s=e.image,p=e.finishableSteps,d=e.finishedSteps,f=e.upsell,b=e.workout,w=e.badges,m=Object(c.useDispatch)("yoast-seo/workouts"),y=m.openWorkout,h=m.toggleWorkout,k=Object(c.useSelect)((function(e){return e("yoast-seo/workouts").getActiveWorkout()}),[]),O=Object(i.useState)(!1),g=r()(O,2),v=g[0],j=g[1],S=Object(i.useState)(!1),E=r()(S,2),x=E[0],_=E[1],R=f,W=Object(i.useCallback)((function(){return j(!1)}),[]),P=Object(i.useCallback)((function(){return j(!0)}),[]),C=b;Object(i.useEffect)((function(){p&&d&&d.length===p.length?_(!0):_(!1)}),[d,p]);var T=Object(i.useMemo)((function(){return d&&0!==d.length?d.length<p.length?Object(a.__)("Continue workout!","wordpress-seo"):Object(a.__)("Do workout again","wordpress-seo"):Object(a.__)("Start workout!","wordpress-seo")}),[d,p]),L=Object(i.useCallback)((function(){b?(y(t),x&&h(t)):P()}),[b,x,y,h]);return Object(i.createElement)(i.Fragment,null,!k&&Object(i.createElement)("div",{className:"card card-small"},Object(i.createElement)("h2",null,n," ",w),Object(i.createElement)("h3",null,o),Object(i.createElement)("ul",null,u.map((function(e,t){return Object(i.createElement)("li",{key:"".concat(n,"-").concat(t)},e)}))),s&&Object(i.createElement)("img",{src:s,alt:""}),Object(i.createElement)("span",null,Object(i.createElement)(l.Button,{onClick:L},T),p&&d&&Object(i.createElement)(i.Fragment,null,Object(i.createElement)(l.ProgressBar,{id:"".concat(n,"-workout-progress"),max:p.length,value:d.length}),Object(i.createElement)("label",{htmlFor:"".concat(n,"-workout-progress")},Object(i.createElement)("em",null,Object(a.sprintf)(// translators: %1$s: number of finished steps, %2$s: number of finishable steps
Object(a.__)("%1$s/%2$s steps completed","wordpress-seo"),d.length,p.length))))),f&&v&&Object(i.createElement)(R,{onRequestClose:W})),b&&k===t&&Object(i.createElement)(C,null))}p.propTypes={name:s.a.string.isRequired,title:s.a.string.isRequired,subtitle:s.a.string.isRequired,usps:s.a.arrayOf(s.a.string).isRequired,finishableSteps:s.a.arrayOf(s.a.string),finishedSteps:s.a.arrayOf(s.a.string),image:s.a.string,upsell:s.a.func,workout:s.a.func,badges:s.a.arrayOf(s.a.element)},p.defaultProps={image:null,upsell:null,workout:null,badges:[],finishableSteps:null,finishedSteps:null}},143:function(e,t,n){"use strict";var o=n(27),r=n.n(o),i=n(37),u=n.n(i),s=n(0),a=n(1),c=n.n(a),l=n(18),p=n(3),d=n(10),f=function(e){var t=e.title,n=e.upsellLink,o=e.addOn,i=e.additionalClassNames,a=e.onRequestClose,c=u()(e,["title","upsellLink","addOn","additionalClassNames","onRequestClose"]),f=Object(d.makeOutboundLink)();return Object(s.createElement)(l.Modal,r()({title:t,className:i,onRequestClose:a},c),Object(s.createElement)("div",{className:"yoast-content-container"},Object(s.createElement)("div",{className:"yoast-modal-content"},e.children)),Object(s.createElement)("div",{className:"yoast-notice-container"},Object(s.createElement)("hr",null),Object(s.createElement)("div",{className:"yoast-button-container"},Object(s.createElement)(f,{href:n,className:"yoast-button-upsell"},Object(p.sprintf)(
/* translators: %s : Expands to the add-on name. */
Object(p.__)("Buy %s","wordpress-seo"),o)))))};f.propTypes={title:c.a.string.isRequired,upsellLink:c.a.string.isRequired,addOn:c.a.string.isRequired,onRequestClose:c.a.func.isRequired,additionalClassNames:c.a.string,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)])},f.defaultProps={additionalClassNames:"",children:null},t.a=f},157:function(e,t){e.exports=window.wp.domReady},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return j}));var o=n(30),r=n.n(o),i=n(6),u=n.n(i),s=n(7),a=n.n(s),c=n(13),l=n.n(c),p=n(14),d=n.n(p),f=n(8),b=n.n(f),w=n(0),m=n(18),y=n(20),h=n(92);var k=[],O=null,g=function(e){l()(i,e);var t,n,o=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=b()(t);if(n){var r=b()(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return d()(this,e)});function i(e){var t;return u()(this,i),(t=o.call(this,e)).state={registeredComponents:[]},t}return a()(i,[{key:"registerComponent",value:function(e,t){this.setState({registeredComponents:[].concat(r()(this.state.registeredComponents),[{key:e,Component:t}])})}},{key:"render",value:function(){return this.state.registeredComponents.map((function(e){var t=e.Component,n=e.key;return Object(w.createElement)(t,{key:n})}))}}]),i}(w.Component);function v(e,t){var n=Object(y.a)();O=Object(w.createRef)();var o={isRtl:n.isRtl};Object(w.render)(Object(w.createElement)(h.a,{theme:o,location:"sidebar"},Object(w.createElement)(m.SlotFillProvider,null,Object(w.createElement)(w.Fragment,null,t,Object(w.createElement)(g,{ref:O})))),document.getElementById(e)),k.forEach((function(e){O.current.registerComponent(e.key,e.Component)}))}function j(e,t){null===O||null===O.current?k.push({key:e,Component:t}):O.current.registerComponent(e,t)}},18:function(e,t){e.exports=window.wp.components},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(0),r=n(1),i=n.n(r),u=n(3),s=n(4),a=n(142),c=n(143),l=n(41),p=function(e){return Object(o.createElement)(c.a,{title:"Get Yoast SEO Premium!",addOn:"Premium",upsellLink:"https://www.yoast.com",onRequestClose:e.onRequestClose},Object(o.createElement)("p",null,"You should definitely buy Premium"))};function d(e){var t=e.workout,n=e.badges,r=Object(s.useSelect)("yoast-seo/workouts").getFinishedSteps(l.c.cornerstone);return Object(o.createElement)(a.a,{name:l.c.cornerstone,title:Object(u.__)("The cornerstone approach","wordpress-seo"),subtitle:Object(u.__)("Rank with articles you want to rank with","wordpress-seo"),usps:[Object(u.__)("On your site you have a few articles that are the most important. You want to rank highest in Google with these articles. At Yoast, we call these articles cornerstone articles. Take the following 4 steps in order to start ranking with your cornerstone articles!","wordpress-seo")],image:"",finishableSteps:l.a.cornerstone,finishedSteps:r,upsell:p,workout:t,badges:n})}d.propTypes={workout:i.a.func,badges:i.a.arrayOf(i.a.element)},d.defaultProps={workout:null,badges:[]}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(0),r=n(1),i=n.n(r),u=n(3),s=n(4),a=n(142),c=n(143),l=n(41),p=function(e){return Object(o.createElement)(c.a,{title:"Get Yoast SEO Premium!",addOn:"Premium",upsellLink:"https://www.yoast.com",onRequestClose:e.onRequestClose},Object(o.createElement)("p",null,"You should definitely buy Premium"))};function d(e){var t=e.workout,n=e.badges,r=Object(s.useSelect)("yoast-seo/workouts").getFinishedSteps(l.c.orphaned);return Object(o.createElement)(a.a,{name:l.c.orphaned,title:Object(u.__)("Orphaned content","wordpress-seo"),subtitle:Object(u.__)("Clean up your unlinked content to make sure people can find it","wordpress-seo"),usps:[Object(u.__)("Orphaned content is content that doesn’t get any links from other posts or pages on your site. As a result of that, this content is hard to find, for both Google and visitors. Posts and pages need internal links to them, to fit into a site’s structure and to be findable. With this workout we'll help you update your orphaned content and make sure you have links pointing towards them!","wordpress-seo")],image:"",finishableSteps:l.a.orphaned,finishedSteps:r,upsell:p,workout:t,badges:n})}d.propTypes={workout:i.a.func,badges:i.a.arrayOf(i.a.element)},d.defaultProps={workout:null,badges:[]}},19:function(e,t){e.exports=window.wp.compose},2:function(e,t){e.exports=window.lodash},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(2);function r(){return Object(o.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}},25:function(e,t){e.exports=window.regeneratorRuntime},27:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},28:function(e,t,n){"use strict";n.r(t),n.d(t,"LocationContext",(function(){return r})),n.d(t,"LocationProvider",(function(){return i})),n.d(t,"LocationConsumer",(function(){return u}));var o=n(0),r=Object(o.createContext)("location"),i=r.Provider,u=r.Consumer},3:function(e,t){e.exports=window.wp.i18n},30:function(e,t,n){var o=n(87),r=n(88),i=n(89);e.exports=function(e){return o(e)||r(e)||i()}},33:function(e,t,n){var o=n(83),r=n(84),i=n(85);e.exports=function(e,t){return o(e)||r(e,t)||i()}},35:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},360:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"REGISTER_WORKOUT",(function(){return F})),n.d(o,"FINISH_STEPS",(function(){return G})),n.d(o,"TOGGLE_WORKOUT",(function(){return U})),n.d(o,"SET_WORKOUTS",(function(){return K})),n.d(o,"OPEN_WORKOUT",(function(){return M})),n.d(o,"CLEAR_ACTIVE_WORKOUT",(function(){return Y})),n.d(o,"TOGGLE_STEP",(function(){return X})),n.d(o,"MOVE_INDEXABLES",(function(){return V})),n.d(o,"CLEAR_INDEXABLES",(function(){return $})),n.d(o,"CLEAR_INDEXABLES_IN_STEPS",(function(){return H})),n.d(o,"registerWorkout",(function(){return J})),n.d(o,"finishSteps",(function(){return z})),n.d(o,"toggleWorkout",(function(){return Q})),n.d(o,"initWorkouts",(function(){return Z})),n.d(o,"openWorkout",(function(){return ee})),n.d(o,"clearActiveWorkout",(function(){return te})),n.d(o,"toggleStep",(function(){return ne})),n.d(o,"moveIndexables",(function(){return oe})),n.d(o,"clearIndexables",(function(){return re})),n.d(o,"clearIndexablesInSteps",(function(){return ie}));var r={};n.r(r),n.d(r,"getWorkouts",(function(){return ue})),n.d(r,"getFinishedSteps",(function(){return se})),n.d(r,"getIndexablesByStep",(function(){return ae})),n.d(r,"getFinishedWorkouts",(function(){return ce})),n.d(r,"getLoading",(function(){return le})),n.d(r,"getActiveWorkout",(function(){return pe}));var i=n(0),u=n(4),s=n(18),a=n(157),c=n.n(a),l=n(45),p=n.n(l),d=n(25),f=n.n(d),b=n(64),w=n.n(b),m=n(19),y=n(2),h=n(9),k=n.n(h),O=n(1),g=n.n(O),v=n(3),j=n(5);function S(e){return Object(i.createElement)(s.Slot,{name:e.name},(function(t){return 0===t.length?e.children:t}))}S.propTypes={name:g.a.string.isRequired,children:g.a.oneOfType([g.a.node,g.a.arrayOf(g.a.node)])},S.defaultProps={children:null};var E,x=n(188),_=n(189),R=n(41);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=window.wpseoWorkoutsData.workouts,T=(E={},k()(E,R.c.cornerstone,(function(){return Object(i.createElement)(x.a,{badges:[Object(i.createElement)(j.PremiumBadge,{key:"premium-badge-cornerstone-workout"})]})})),k()(E,R.c.orphaned,(function(){return Object(i.createElement)(_.a,{badges:[Object(i.createElement)(j.NewBadge,{key:"new-badge-orphaned-workout"}),Object(i.createElement)(j.PremiumBadge,{key:"premium-badge-orphaned-workout"})]})})),E);function L(e){var t=e.activeWorkout,n=e.clearActiveWorkout,o=e.openWorkout,r=e.workouts,u=e.loading,a=e.initWorkouts,c=e.saveWorkouts;Object(i.useEffect)((function(){if(!0===u)return a(C),void(window.location.hash&&window.location.hash.length>1&&o(window.location.hash.substr(1)));c(r)}),[r,u]);var l=Object(i.useMemo)((function(){var e=Object.keys(r);return Object(y.sortBy)(e.map((function(e){return P(P({},r[e]),{},{id:e})})),"priority").map((function(e){if(T[e.id]){var t=T[e.id];return Object(i.createElement)(S,{key:e.id,name:"".concat(e.id)},Object(i.createElement)(t,null))}return Object(i.createElement)(s.Slot,{key:e.id,name:"".concat(e.id)})}))}),[r]);return Object(i.createElement)("div",null,Object(i.createElement)("h1",null,Object(v.__)("SEO workouts","wordpress-seo-premium")),Object(i.createElement)("p",null,Object(v.__)("Getting your site in shape and keeping it SEO fit can be challenging. Let us help you get started by taking on the most common SEO challenges, with these step by step SEO workouts.","wordpress-seo")),t&&Object(i.createElement)(j.Button,{onClick:n},Object(v.__)("← Back to all workouts","worpdress-seo")),Object(i.createElement)("div",{className:t?"":"workflows__index__grid"},l))}L.propTypes={activeWorkout:g.a.string.isRequired,clearActiveWorkout:g.a.func.isRequired,openWorkout:g.a.func.isRequired,workouts:g.a.object.isRequired,loading:g.a.bool.isRequired,initWorkouts:g.a.func.isRequired,saveWorkouts:g.a.func.isRequired};var B=function(e){var t=Object(y.cloneDeep)(e);return Object.keys(e).forEach((function(n){Object.keys(e[n].indexablesByStep).forEach((function(e){t[n].indexablesByStep[e]=t[n].indexablesByStep[e].filter((function(e){return!e.purge}))}))})),t};function A(_x){return I.apply(this,arguments)}function I(){return(I=p()(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w()({path:"yoast/v1/workouts",method:"POST",data:B(t)});case 3:return n=e.sent,e.next=6,n.json;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0.message),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var q,N,D=Object(m.compose)([Object(u.withSelect)((function(e){var t=e("yoast-seo/workouts").getWorkouts(),n=e("yoast-seo/workouts").getLoading(),o=e("yoast-seo/workouts").getActiveWorkout(),r=e("yoast-seo/workouts").getFinishedWorkouts(),i=e("yoast-seo/workouts").getIndexablesByStep;return{workouts:t,loading:n,activeWorkout:o,finishedWorkouts:r,isStepFinished:function(e,n){return t[e].finishedSteps.includes(n)},getIndexablesByStep:i}})),Object(u.withDispatch)((function(e){var t=e("yoast-seo/workouts");return{finishSteps:t.finishSteps,toggleStep:t.toggleStep,toggleWorkout:t.toggleWorkout,initWorkouts:t.initWorkouts,clearActiveWorkout:t.clearActiveWorkout,openWorkout:t.openWorkout,moveIndexables:t.moveIndexables,clearIndexablesInSteps:t.clearIndexablesInSteps,saveWorkouts:A}}))])(L),F="REGISTER_WORKOUT",G="FINISH_STEPS",U="TOGGLE_WORKOUT",K="SET_WORKOUTS",M="OPEN_WORKOUT",Y="CLEAR_ACTIVE_WORKOUT",X="TOGGLE_STEP",V="MOVE_INDEXABLES",$="CLEAR_INDEXABLES",H="CLEAR_INDEXABLES_IN_STEPS",J=function(e,t){return{type:F,payload:{key:e,priority:t}}},z=function(e,t){return{type:G,workout:e,steps:t}},Q=function(e){return{type:U,workout:e}},Z=function(e){return{type:K,workouts:e}},ee=function(e){return window.location.hash=e,{type:M,workout:e}},te=function(){return window.location.hash="",{type:Y}},ne=function(e,t){return{type:X,workout:e,step:t}},oe=function(e,t,n,o){return{type:V,workout:e,indexables:t,fromStep:n,toStep:o}},re=function(e){return{type:$,workout:e}},ie=function(e,t){return{type:H,workout:e,steps:t}},ue=function(e){return e.workouts},se=function(e,t){return Object(y.get)(e,"workouts.".concat(t,".finishedSteps"),[])},ae=function(e,t,n){return e.workouts[t].indexablesByStep[n]},ce=function(e){var t=[];return Object.keys(e.workouts).forEach((function(n){R.a[n]&&e.workouts[n].finishedSteps.length===R.a[n].length&&t.push(n)})),t},le=function(e){return e.loading},pe=function(e){return e.activeWorkout};function de(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return fe(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var be={loading:!0,activeWorkout:"",workouts:{cornerstone:{priority:50,finishedSteps:[],indexablesByStep:(q={},k()(q,R.b.cornerstone.addLinks,[]),k()(q,R.b.cornerstone.checkLinks,[]),k()(q,R.b.cornerstone.chooseCornerstones,[]),k()(q,R.b.orphaned.improved,[]),k()(q,R.b.orphaned.skipped,[]),q)},orphaned:{priority:50,finishedSteps:[],indexablesByStep:(N={},k()(N,R.b.orphaned.improveRemove,Object(y.get)(window,"wpseoPremiumWorkoutsData.orphaned",[])),k()(N,R.b.orphaned.update,[]),k()(N,R.b.orphaned.addLinks,[]),k()(N,R.b.orphaned.removed,[]),k()(N,R.b.orphaned.noindexed,[]),k()(N,R.b.orphaned.improved,[]),k()(N,R.b.orphaned.skipped,[]),N)}}},we=n(169),me=n(58);Object(me.setWordPressSeoL10n)();var ye=Object(u.createReduxStore)("yoast-seo/workouts",{reducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,n=arguments.length>1?arguments[1]:void 0,o=Object(y.cloneDeep)(t);switch(n.type){case F:return o.workouts[n.payload.key].priority=n.payload.priority,o;case G:return o.workouts[n.workout].finishedSteps=Object(y.union)(t.workouts[n.workout].finishedSteps,n.steps),o;case X:return t.workouts[n.workout].finishedSteps.includes(n.step)?((e=t.workouts[n.workout].finishedSteps.indexOf(n.step))>-1&&(o.workouts[n.workout].finishedSteps=t.workouts[n.workout].finishedSteps.slice(),o.workouts[n.workout].finishedSteps.splice(e,1)),o):(o.workouts[n.workout].finishedSteps=Object(y.union)(t.workouts[n.workout].finishedSteps,[n.step]),o);case U:if(R.a[n.workout].length===t.workouts[n.workout].finishedSteps.length){o.workouts[n.workout].finishedSteps=[];var r,i=de(R.a[n.workout]);try{for(i.s();!(r=i.n()).done;){var u=r.value;o.workouts[n.workout].indexablesByStep[u]=be.workouts[n.workout].indexablesByStep[u]}}catch(e){i.e(e)}finally{i.f()}}else o.workouts[n.workout].finishedSteps=R.a[n.workout];return o;case M:return o.activeWorkout=n.workout,o;case Y:return o.activeWorkout="",o;case K:return o.workouts=Object(y.merge)(o.workouts,n.workouts),o.loading=!1,o;case V:return n.indexables.forEach((function(e){if(""!==n.fromStep){var t=o.workouts[n.workout].indexablesByStep[n.fromStep].findIndex((function(t){return t.id===e.id}));o.workouts[n.workout].indexablesByStep[n.fromStep][t].purge=!0,o.workouts[n.workout].indexablesByStep[n.fromStep][t].movedTo=n.toStep}if(""!==n.toStep){var r=o.workouts[n.workout].indexablesByStep[n.toStep].findIndex((function(t){return t.id===e.id}));-1===r?o.workouts[n.workout].indexablesByStep[n.toStep].push(e):(o.workouts[n.workout].indexablesByStep[n.toStep][r].purge=!1,o.workouts[n.workout].indexablesByStep[n.toStep][r].movedTo="")}})),o;case $:return o.workouts[n.workout].indexablesByStep=be.workouts[n.workout].indexablesByStep,o;case H:var s,a=de(n.steps);try{for(a.s();!(s=a.n()).done;){var c=s.value;o.workouts[n.workout].indexablesByStep[c]=[]}}catch(e){a.e(e)}finally{a.f()}return o;default:return t}},actions:o,selectors:r});Object(u.register)(ye),window.wpseoWorkoutsData=window.wpseoWorkoutsData||{},window.wpseoWorkoutsData.registerWorkout=function(e,t,n){Object(u.dispatch)("yoast-seo/workouts").registerWorkout(e,t),Object(we.a)(e,(function(){return Object(i.createElement)(s.Fill,{name:"".concat(e)},Object(i.createElement)(n,null))}))},c()((function(){Object(we.b)("wpseo-workouts-container-free",Object(i.createElement)(D,null))}))},37:function(e,t,n){var o=n(86);e.exports=function(e,t){if(null==e)return{};var n,r,i=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},4:function(e,t){e.exports=window.wp.data},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var o={cornerstone:"cornerstone",orphaned:"orphaned"},r={cornerstone:{chooseCornerstones:"chooseCornerstones",checkLinks:"checkLinks",addLinks:"addLinks",improved:"improved",skipped:"skipped"},orphaned:{improveRemove:"improveRemove",update:"update",addLinks:"addLinks",removed:"removed",noindexed:"noindexed",improved:"improved",skipped:"skipped"}},i={cornerstone:[r.cornerstone.chooseCornerstones,r.cornerstone.checkLinks,r.cornerstone.addLinks],orphaned:[r.orphaned.improveRemove,r.orphaned.update,r.orphaned.addLinks]}},45:function(e,t){function n(e,t,n,o,r,i,u){try{var s=e[i](u),a=s.value}catch(e){return void n(e)}s.done?t(a):Promise.resolve(a).then(o,r)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(r,i){var u=e.apply(t,o);function s(e){n(u,r,i,s,a,"next",e)}function a(e){n(u,r,i,s,a,"throw",e)}s(void 0)}))}}},5:function(e,t){e.exports=window.yoast.componentsNew},58:function(e,t,n){"use strict";n.r(t),n.d(t,"setTextdomainL10n",(function(){return i})),n.d(t,"setYoastComponentsL10n",(function(){return u})),n.d(t,"setWordPressSeoL10n",(function(){return s}));var o=n(3),r=n(2);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",n=Object(r.get)(window,[t,e,"locale_data",e],!1);!1===n?Object(o.setLocaleData)({"":{}},e):Object(o.setLocaleData)(n,e)}function u(){i("yoast-components")}function s(){i("wordpress-seo")}},6:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},64:function(e,t){e.exports=window.wp.apiFetch},69:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},7:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},8:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},83:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},84:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],_n=!0,o=!1,r=void 0;try{for(var i,u=e[Symbol.iterator]();!(_n=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);_n=!0);}catch(e){o=!0,r=e}finally{try{_n||null==u.return||u.return()}finally{if(o)throw r}}return n}}},85:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},86:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}},87:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},88:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},89:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},9:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},92:function(e,t,n){"use strict";var o=n(0),r=n(1),i=n.n(r),u=n(12),s=n(28),a=function(e){var t=e.theme,n=e.location,r=e.children;return Object(o.createElement)(s.LocationProvider,{value:n},Object(o.createElement)(u.ThemeProvider,{theme:t},r))};a.propTypes={theme:i.a.object.isRequired,location:i.a.oneOf(["sidebar","metabox","modal"]).isRequired,children:i.a.element.isRequired},t.a=a}});