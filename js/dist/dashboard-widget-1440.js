(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[5],{0:function(e,t){e.exports=React},10:function(e,t){e.exports=window.yoast.helpers},14:function(e,t){e.exports=ReactDOM},161:function(e,t){e.exports=window.yoast.analysisReport},2:function(e,t){e.exports=window.lodash},23:function(e,t){e.exports=window.yoast.styleGuide},3:function(e,t){e.exports=window.wp.i18n},62:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTextdomainL10n=r,t.setYoastComponentsL10n=function(){r("configuration-wizard.scss")},t.setWordPressSeoL10n=function(){r("wordpress-seo")};var n=o(3),s=o(2);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",o=(0,s.get)(window,[t,e,"locale_data",e],!1);!1===o?(0,n.setLocaleData)({"":{}},e):(0,n.setLocaleData)(o,e)}},741:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=p(o(0)),r=p(o(14)),i=o(9),a=o(23),c=o(161),u=o(10),l=o(62);function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={statistics:null,feed:null},e.getStatistics(),e.getFeed(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),n(t,[{key:"getStatistics",value:function(){var e=this;wpseoApi.get("statistics",function(o){var n={};n.seoScores=o.seo_scores.map(function(e){return{value:parseInt(e.count,10),color:t.getColorFromScore(e.seo_rank),html:'<a href="'+e.link+'">'+e.label+"</a>"}}),n.header=jQuery("<div>"+o.header+"</div>").text(),e.setState({statistics:n})})}},{key:"getFeed",value:function(){var e=this;(0,u.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then(function(t){t.items=t.items.map(function(e){return e.description=jQuery("<div>"+e.description+"</div>").text(),e.description=e.description.replace("The post "+e.title+" appeared first on Yoast.","").trim(),e}),e.setState({feed:t})}).catch(function(e){return console.log(e)})}},{key:"getSeoAssessment",value:function(){return null===this.state.statistics?null:wp.element.createElement(c.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}},{key:"getYoastFeed",value:function(){return null===this.state.feed?null:wp.element.createElement(i.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}},{key:"render",value:function(){var e=[this.getSeoAssessment(),this.getYoastFeed()].filter(function(e){return null!==e});return 0===e.length?null:wp.element.createElement("div",null,e)}}],[{key:"getColorFromScore",value:function(e){return a.colors["$color_"+e]||a.colors.$color_grey}}]),t}(),d=document.getElementById("yoast-seo-dashboard-widget");d&&((0,l.setYoastComponentsL10n)(),r.default.render(wp.element.createElement(f,null),d))},9:function(e,t){e.exports=window.yoast.componentsNew}},[[741,0]]]);