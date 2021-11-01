!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=340)}({0:function(t,e){t.exports=window.wp.element},10:function(t,e){t.exports=window.yoast.helpers},101:function(t,e){t.exports=window.yoast.analysisReport},11:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},13:function(t,e,n){var o=n(69);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},14:function(t,e,n){var o=n(35),r=n(11);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},2:function(t,e){t.exports=window.lodash},26:function(t,e){t.exports=window.yoast.styleGuide},3:function(t,e){t.exports=window.wp.i18n},340:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o),s=n(7),i=n.n(s),c=n(13),u=n.n(c),a=n(14),f=n.n(a),l=n(8),p=n.n(l),d=n(0),y=n(5),h=n(26),b=n(101),v=n(10),m=n(58);var w=function(t){u()(s,t);var e,n,o=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=p()(e);if(n){var r=p()(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return f()(this,t)});function s(){var t;return r()(this,s),(t=o.call(this)).state={statistics:null,feed:null,isDataFetched:!1},t}return i()(s,[{key:"componentDidMount",value:function(){var t=this,e=jQuery("#wpseo-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",(function(){t.fetchData()}))}},{key:"fetchData",value:function(){this.state.isDataFetched||(this.getStatistics(),this.getFeed(),this.setState({isDataFetched:!0}))}},{key:"getStatistics",value:function(){var t=this;wpseoApi.get("statistics",(function(e){var n={};e&&e.seo_scores&&(n.seoScores=e.seo_scores.map((function(t){return{value:parseInt(t.count,10),color:s.getColorFromScore(t.seo_rank),html:'<a href="'.concat(t.link,'">').concat(t.label,"</a>")}})),n.header=jQuery("<div>".concat(e.header,"</div>")).text(),t.setState({statistics:n}))}))}},{key:"getFeed",value:function(){var t=this;Object(v.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then((function(e){e.items=e.items.map((function(t){return t.description=jQuery("<div>".concat(t.description,"</div>")).text(),t.description=t.description.replace("The post ".concat(t.title," appeared first on Yoast."),"").trim(),t})),t.setState({feed:e})})).catch((function(t){return console.log(t)}))}},{key:"getSeoAssessment",value:function(){return null===this.state.statistics?null:Object(d.createElement)(b.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}},{key:"getYoastFeed",value:function(){return null===this.state.feed?null:Object(d.createElement)(y.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}},{key:"render",value:function(){var t=[this.getSeoAssessment(),this.getYoastFeed()].filter((function(t){return null!==t}));return 0===t.length?null:Object(d.createElement)("div",null,t)}}],[{key:"getColorFromScore",value:function(t){return h.colors["$color_".concat(t)]||h.colors.$color_grey}}]),s}(d.Component),g=document.getElementById("yoast-seo-dashboard-widget");g&&(Object(m.setYoastComponentsL10n)(),Object(d.render)(Object(d.createElement)(w,null),g))},35:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},5:function(t,e){t.exports=window.yoast.componentsNew},58:function(t,e,n){"use strict";n.r(e),n.d(e,"setTextdomainL10n",(function(){return s})),n.d(e,"setYoastComponentsL10n",(function(){return i})),n.d(e,"setWordPressSeoL10n",(function(){return c}));var o=n(3),r=n(2);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",n=Object(r.get)(window,[e,t,"locale_data",t],!1);!1===n?Object(o.setLocaleData)({"":{}},t):Object(o.setLocaleData)(n,t)}function i(){s("yoast-components")}function c(){s("wordpress-seo")}},6:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},69:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},7:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},8:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n}});