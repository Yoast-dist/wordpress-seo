(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[14],{10:function(e,t){e.exports=window.yoast.analysis},2:function(e,t){e.exports=window.lodash},306:function(e,t){e.exports=window.yoast.jed},483:function(e,t,o){"use strict";var s=function(e){return e&&e.__esModule?e:{default:e}}(o(306)),n=o(10),r=o(2);!function(e){var t=new s.default({domain:"js-text-analysis",locale_data:{"js-text-analysis":{"":{}}}}),o=function(t){this.totalCount=t,this.oncomplete=!1,this.setupAssessors(),e("#wpseo_count_total").html(t),jQuery("#wpseo_progressbar").progressbar({value:0})};function a(e){var t=parseInt(e.posts,10),s=parseInt(e.terms,10),n=new o(t+s);n.start(t,"post","post_id",function(){n.start(s,"term","term_id",!1)})}o.prototype.setupAssessors=function(){var e=new n.ContentAssessor(t),o=new n.TaxonomyAssessor(t);this.validAssessors={post:e,term:o}},o.prototype.start=function(e,t,o,s){if(!this.validAssessors.hasOwnProperty(t))throw new Error("Unknown fetch type of "+t+" given.");this.fetchType=t,this.itemsToFetch=e,this.idField=o,this.oncomplete=s,this.assessor=this.validAssessors[t],this.getItemsToRecalculate(1)},o.prototype.updateProgressBar=function(e){var t=jQuery("#wpseo_count").text(),o=parseInt(t,10)+e,s=o*(100/this.totalCount);jQuery("#wpseo_progressbar").progressbar("value",s),this.updateCountElement(o)},o.prototype.updateCountElement=function(e){jQuery("#wpseo_count").html(e)},o.prototype.calculateScores=function(e,t){for(var o=[],s=0;s<e;s++)o.push(this.getScore(t[s]));return o},o.prototype.getScore=function(e){return{item_id:this.getItemID(e),taxonomy:e.taxonomy?e.taxonomy:"",score:this.calculateItemScore(e)}},o.prototype.getItemID=function(e){return this.itemsToFetch--,e[this.idField]},o.prototype.calculateItemScore=function(e){var t=new n.Paper(e.text,{keyword:e.keyword,url:e.url,locale:wpseoAdminL10n.contentLocale,description:e.meta,title:e.pageTitle}),o=this.assessor;return o.assess(t),o.calculateOverallScore()},o.prototype.parseResponse=function(e){if(""!==e&&null!==e){if(!(0,r.isUndefined)(e.total_items)){var t=this.calculateScores(e.total_items,e.items);this.sendScores(t),this.updateProgressBar(e.total_items)}return(0,r.isUndefined)(e.next_page)?this.onCompleteRequest():this.getItemsToRecalculate(e.next_page),!0}this.onCompleteRequest()},o.prototype.onCompleteRequest=function(){!1!==this.oncomplete&&(this.oncomplete(),this.oncomplete=!1)},o.prototype.sendScores=function(e){jQuery.post(ajaxurl,{action:"wpseo_update_score",nonce:jQuery("#wpseo_recalculate_nonce").val(),scores:e,type:this.fetchType})},o.prototype.getItemsToRecalculate=function(e){jQuery.post(ajaxurl,{action:"wpseo_recalculate_scores",nonce:jQuery("#wpseo_recalculate_nonce").val(),paged:e,type:this.fetchType},this.parseResponse.bind(this),"json")},e(function(){var t=jQuery("#wpseo_recalculate_link");(0,r.isUndefined)(t)||(t.click(function(){jQuery("#wpseo_count").text(0),e.post(ajaxurl,{action:"wpseo_recalculate_total",nonce:jQuery("#wpseo_recalculate_nonce").val()},a,"json")}),t.data("open")&&t.trigger("click"))})}(jQuery)}},[[483,0]]]);