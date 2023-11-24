!function(e){var t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=265)}({0:function(e,t){e.exports=window.wp.element},11:function(e,t){e.exports=window.yoast.helpers},16:function(e,t){e.exports=window.yoast.styleGuide},176:function(e,t){e.exports=window.yoast.analysisReport},265:function(e,t,s){"use strict";s.r(t);var o=s(0),r=s(9),n=s(16),i=s(176),a=s(11);class c extends o.Component{constructor(){super(),this.state={statistics:null,feed:null,isDataFetched:!1}}componentDidMount(){const e=jQuery("#wpseo-dashboard-overview-hide");e.is(":checked")&&this.fetchData(),e.on("click",()=>{this.fetchData()})}fetchData(){this.state.isDataFetched||(this.getStatistics(),this.getFeed(),this.setState({isDataFetched:!0}))}static getColorFromScore(e){return n.colors["$color_"+e]||n.colors.$color_grey}getStatistics(){wpseoApi.get("statistics",e=>{const t={};e&&e.seo_scores&&(t.seoScores=e.seo_scores.map(e=>({value:parseInt(e.count,10),color:c.getColorFromScore(e.seo_rank),html:`<a href="${e.link}">${e.label}</a>`})),t.header=jQuery(`<div>${e.header}</div>`).text(),this.setState({statistics:t}))})}getFeed(){Object(a.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then(e=>{e.items=e.items.map(e=>(e.description=jQuery(`<div>${e.description}</div>`).text(),e.description=e.description.replace(`The post ${e.title} appeared first on Yoast.`,"").trim(),e)),this.setState({feed:e})}).catch(e=>console.log(e))}getSeoAssessment(){return null===this.state.statistics?null:Object(o.createElement)(i.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}getYoastFeed(){return null===this.state.feed?null:Object(o.createElement)(r.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}render(){const e=[this.getSeoAssessment(),this.getYoastFeed()].filter(e=>null!==e);return 0===e.length?null:Object(o.createElement)("div",null,e)}}const d=document.getElementById("yoast-seo-dashboard-widget");d&&Object(o.render)(Object(o.createElement)(c,null),d)},9:function(e,t){e.exports=window.yoast.componentsNew}});