(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[9],{10:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UPDATE_WORDS_TO_HIGHLIGHT=t.REFRESH=t.REMOVE_REPLACEMENT_VARIABLE=t.UPDATE_REPLACEMENT_VARIABLE=t.UPDATE_DATA=t.SWITCH_MODE=void 0,t.switchMode=function(e){return{type:n,mode:e}},t.updateData=function(e){return{type:r,data:e}},t.updateReplacementVariable=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n="string"==typeof t?(0,a.decodeHTML)(t):t;return{type:o,name:e,value:n,label:i}},t.updateWordsToHighlight=function(e){return{type:c,wordsToHighlight:e}},t.removeReplacementVariable=function(e){return{type:s,name:e}},t.refreshSnippetEditor=function(){return{type:p,time:(new Date).getMilliseconds()}};var a=i(7),n=t.SWITCH_MODE="SNIPPET_EDITOR_SWITCH_MODE",r=t.UPDATE_DATA="SNIPPET_EDITOR_UPDATE_DATA",o=t.UPDATE_REPLACEMENT_VARIABLE="SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",s=t.REMOVE_REPLACEMENT_VARIABLE="SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",p=t.REFRESH="SNIPPET_EDITOR_REFRESH",c=t.UPDATE_WORDS_TO_HIGHLIGHT="SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT"},2:function(e,t){e.exports=window.lodash},255:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isGutenbergDataAvailable=void 0;var a=i(2);t.isGutenbergDataAvailable=function(){return!(0,a.isNil)(window.wp)&&!(0,a.isNil)(wp.data)&&!(0,a.isNil)(wp.data.select("core/editor"))&&(0,a.isFunction)(wp.data.select("core/editor").getEditedPostAttribute)}},417:function(e,t,i){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(i(418)),n=i(2),r=i(10),o=i(255);!function(){var e=["content","title","snippet_title","snippet_meta","primary_category","data_page_title","data_meta_desc","excerpt"],t={},i={},s=function(e,t){this._app=e,this._app.registerPlugin("replaceVariablePlugin",{status:"ready"}),this._store=t,this.replaceVariables=this.replaceVariables.bind(this),this.registerReplacements(),this.registerModifications(),this.registerEvents(),this.subscribeToGutenberg()};s.prototype.registerReplacements=function(){this.addReplacement(new a.default("%%currentdate%%","currentdate")),this.addReplacement(new a.default("%%currentday%%","currentday")),this.addReplacement(new a.default("%%currentmonth%%","currentmonth")),this.addReplacement(new a.default("%%currenttime%%","currenttime")),this.addReplacement(new a.default("%%currentyear%%","currentyear")),this.addReplacement(new a.default("%%date%%","date")),this.addReplacement(new a.default("%%userid%%","userid")),this.addReplacement(new a.default("%%id%%","id")),this.addReplacement(new a.default("%%page%%","page")),this.addReplacement(new a.default("%%searchphrase%%","searchphrase")),this.addReplacement(new a.default("%%sitedesc%%","sitedesc")),this.addReplacement(new a.default("%%sitename%%","sitename")),this.addReplacement(new a.default("%%category%%","category")),this.addReplacement(new a.default("%%focuskw%%","keyword",{source:"app",aliases:["%%keyword%%"]})),this.addReplacement(new a.default("%%term_description%%","text",{source:"app",scope:["term","category","tag"],aliases:["%%tag_description%%","%%category_description%%"]})),this.addReplacement(new a.default("%%term_title%%","term_title",{scope:["term"]})),this.addReplacement(new a.default("%%term_hierarchy%%","term_hierarchy",{scope:["term"]})),this.addReplacement(new a.default("%%title%%","title",{source:"app",scope:["post","term","page"]})),this.addReplacement(new a.default("%%parent_title%%","title",{source:"app",scope:["page","category"]})),this.addReplacement(new a.default("%%excerpt%%","excerpt",{source:"app",scope:["post"],aliases:["%%excerpt_only%%"]})),this.addReplacement(new a.default("%%primary_category%%","primaryCategory",{source:"app",scope:["post"]})),this.addReplacement(new a.default("%%sep%%(\\s*%%sep%%)*","sep"))},s.prototype.registerEvents=function(){var e=wpseoReplaceVarsL10n.scope;"post"===e&&jQuery(".categorydiv").each(this.bindTaxonomyEvents.bind(this)),"post"!==e&&"page"!==e||jQuery("#postcustomstuff > #list-table").each(this.bindFieldEvents.bind(this))},s.prototype.subscribeToGutenberg=function(){var e=this;if((0,o.isGutenbergDataAvailable)()){var t={0:""},i=null,a=window.wp.data;a.subscribe(function(){var r=a.select("core/editor").getEditedPostAttribute("parent");if(void 0!==r&&i!==r)return i=r,r<1?(e._currentParentPageTitle="",void e.declareReloaded()):(0,n.isUndefined)(t[r])?void wp.api.loadPromise.done(function(){new wp.api.models.Page({id:r}).fetch().then(function(i){e._currentParentPageTitle=i.title.rendered,t[r]=e._currentParentPageTitle,e.declareReloaded()}).fail(function(){e._currentParentPageTitle="",e.declareReloaded()})}):(e._currentParentPageTitle=t[r],void e.declareReloaded())})}},s.prototype.addReplacement=function(e){t[e.placeholder]=e},s.prototype.removeReplacement=function(e){delete t[e.getPlaceholder()]},s.prototype.registerModifications=function(){var t=this.replaceVariables.bind(this);(0,n.forEach)(e,function(e){this._app.registerModification(e,t,"replaceVariablePlugin",10)}.bind(this))},s.prototype.replaceVariables=function(e){return(0,n.isUndefined)(e)||(e=this.parentReplace(e),e=this.replaceCustomTaxonomy(e),e=this.replaceByStore(e),e=this.replacePlaceholders(e)),e},s.prototype.replaceByStore=function(e){var t=this._store.getState().snippetEditor.replacementVariables;return(0,n.forEach)(t,function(t){""!==t.value&&(e=e.replace("%%"+t.name+"%%",t.value))}),e},s.prototype.getReplacementSource=function(e){return"app"===e.source?this._app.rawData:"direct"===e.source?"direct":wpseoReplaceVarsL10n.replace_vars},s.prototype.getReplacement=function(e){var t=this.getReplacementSource(e.options);return!1===e.inScope(wpseoReplaceVarsL10n.scope)?"":"direct"===t?e.replacement:t[e.replacement]||""},s.prototype.replacePlaceholders=function(e){return(0,n.forEach)(t,function(t){e=e.replace(new RegExp(t.getPlaceholder(!0),"g"),this.getReplacement(t))}.bind(this)),e},s.prototype.declareReloaded=function(){this._app.pluginReloaded("replaceVariablePlugin"),this._store.dispatch((0,r.refreshSnippetEditor)())},s.prototype.getCategoryName=function(e){var t=e.parent("label").clone();return t.children().remove(),t.text().trim()},s.prototype.parseTaxonomies=function(e,t){(0,n.isUndefined)(i[t])&&(i[t]={});var a=[];(0,n.forEach)(e,function(e){var n=(e=jQuery(e)).val(),r=this.getCategoryName(e),o=e.prop("checked");i[t][n]={label:r,checked:o},o&&-1===a.indexOf(r)&&a.push(r)}.bind(this)),"category"!==t&&(t="ct_"+t),this._store.dispatch((0,r.updateReplacementVariable)(t,a.join(", ")))},s.prototype.getAvailableTaxonomies=function(e){var t=jQuery(e).find("input[type=checkbox]"),i=jQuery(e).attr("id").replace("taxonomy-","");t.length>0&&this.parseTaxonomies(t,i),this.declareReloaded()},s.prototype.bindTaxonomyEvents=function(e,t){(t=jQuery(t)).on("wpListAddEnd",".categorychecklist",this.getAvailableTaxonomies.bind(this,t)),t.on("change","input[type=checkbox]",this.getAvailableTaxonomies.bind(this,t)),this.getAvailableTaxonomies(t)},s.prototype.replaceCustomTaxonomy=function(e){return(0,n.forEach)(i,function(t,i){var a="%%ct_"+i+"%%";"category"===i&&(a="%%"+i+"%%"),e=e.replace(a,this.getTaxonomyReplaceVar(i))}.bind(this)),e},s.prototype.getTaxonomyReplaceVar=function(e){var t=[],a=i[e];return!0===(0,n.isUndefined)(a)?"":((0,n.forEach)(a,function(e){!1!==e.checked&&t.push(e.label)}),jQuery.unique(t).join(", "))},s.prototype.parseFields=function(e){jQuery(e).each(function(e,t){var i=jQuery("#"+t.id+"-key").val(),n=jQuery("#"+t.id+"-value").val(),o="cf_"+this.sanitizeCustomFieldNames(i),s=i+" (custom field)";this._store.dispatch((0,r.updateReplacementVariable)(o,n,s)),this.addReplacement(new a.default("%%"+o+"%%",n,{source:"direct"}))}.bind(this))},s.prototype.removeFields=function(e){jQuery(e).each(function(e,t){var i=jQuery("#"+t.id+"-key").val();this.removeReplacement("%%cf_"+this.sanitizeCustomFieldNames(i)+"%%")}.bind(this))},s.prototype.sanitizeCustomFieldNames=function(e){return e.replace(/\s/g,"_")},s.prototype.getAvailableFields=function(e){this.removeCustomFields();var t=jQuery(e).find("#the-list > tr:visible[id]");t.length>0&&this.parseFields(t),this.declareReloaded()},s.prototype.bindFieldEvents=function(e,t){var i=(t=jQuery(t)).find("#the-list");i.on("wpListDelEnd.wpseoCustomFields",this.getAvailableFields.bind(this,t)),i.on("wpListAddEnd.wpseoCustomFields",this.getAvailableFields.bind(this,t)),i.on("input.wpseoCustomFields",".textarea",this.getAvailableFields.bind(this,t)),i.on("click.wpseoCustomFields",".button + .updatemeta",this.getAvailableFields.bind(this,t)),this.getAvailableFields(t)},s.prototype.removeCustomFields=function(){var e=(0,n.filter)(t,function(e,t){return t.indexOf("%%cf_")>-1});(0,n.forEach)(e,function(e){this._store.dispatch((0,r.removeReplacementVariable)((0,n.trim)(e.placeholder,"%%"))),this.removeReplacement(e)}.bind(this))},s.prototype.parentReplace=function(e){var t=jQuery("#parent_id, #parent").eq(0);return this.hasParentTitle(t)&&(e=e.replace(/%%parent_title%%/,this.getParentTitleReplacement(t))),(0,o.isGutenbergDataAvailable)()&&!(0,n.isUndefined)(this._currentParentPageTitle)&&(e=e.replace(/%%parent_title%%/,this._currentParentPageTitle)),e},s.prototype.hasParentTitle=function(e){return!(0,n.isUndefined)(e)&&!(0,n.isUndefined)(e.prop("options"))},s.prototype.getParentTitleReplacement=function(e){var t=e.find("option:selected").text();return t===wpseoReplaceVarsL10n.no_parent_text?"":t},s.ReplaceVar=a.default,window.YoastReplaceVarPlugin=s}()},418:function(e,t,i){"use strict";var a=i(2);!function(){var t={source:"wpseoReplaceVarsL10n",scope:[],aliases:[]},i=function(e,i,n){this.placeholder=e,this.replacement=i,this.options=(0,a.defaults)(n,t)};i.prototype.getPlaceholder=function(e){return(e=e||!1)&&this.hasAlias()?this.placeholder+"|"+this.getAliases().join("|"):this.placeholder},i.prototype.setSource=function(e){this.options.source=e},i.prototype.hasScope=function(){return!(0,a.isEmpty)(this.options.scope)},i.prototype.addScope=function(e){this.hasScope()||(this.options.scope=[]),this.options.scope.push(e)},i.prototype.inScope=function(e){return!this.hasScope()||(0,a.indexOf)(this.options.scope,e)>-1},i.prototype.hasAlias=function(){return!(0,a.isEmpty)(this.options.aliases)},i.prototype.addAlias=function(e){this.hasAlias()||(this.options.aliases=[]),this.options.aliases.push(e)},i.prototype.getAliases=function(){return this.options.aliases},e.exports=i}()},7:function(e,t){e.exports=window.yoast.helpers}},[[417,0]]]);