(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[9],{1:function(e,t){e.exports=window.lodash},120:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(1);const r=()=>!Object(n.isNil)(window.wp)&&!Object(n.isNil)(wp.data)&&!Object(n.isNil)(wp.data.select("core/editor"))&&Object(n.isFunction)(wp.data.select("core/editor").getEditedPostAttribute)},414:function(e,t,i){"use strict";i.r(t);var n=i(1),r={source:"wpseoReplaceVarsL10n",scope:[],aliases:[]},a=function(e,t,i){this.placeholder=e,this.replacement=t,this.options=Object(n.defaults)(i,r)};a.prototype.getPlaceholder=function(e){return(e=e||!1)&&this.hasAlias()?this.placeholder+"|"+this.getAliases().join("|"):this.placeholder},a.prototype.setSource=function(e){this.options.source=e},a.prototype.hasScope=function(){return!Object(n.isEmpty)(this.options.scope)},a.prototype.addScope=function(e){this.hasScope()||(this.options.scope=[]),this.options.scope.push(e)},a.prototype.inScope=function(e){return!this.hasScope()||Object(n.indexOf)(this.options.scope,e)>-1},a.prototype.hasAlias=function(){return!Object(n.isEmpty)(this.options.aliases)},a.prototype.addAlias=function(e){this.hasAlias()||(this.options.aliases=[]),this.options.aliases.push(e)},a.prototype.getAliases=function(){return this.options.aliases};var o=a,s=i(7),c=i(120);!function(){var e=["content","title","snippet_title","snippet_meta","primary_category","data_page_title","data_meta_desc","excerpt"],t={},i={},r=function(e,t){this._app=e,this._app.registerPlugin("replaceVariablePlugin",{status:"ready"}),this._store=t,this.replaceVariables=this.replaceVariables.bind(this),this.registerReplacements(),this.registerModifications(),this.registerEvents(),this.subscribeToGutenberg()};r.prototype.registerReplacements=function(){this.addReplacement(new o("%%currentdate%%","currentdate")),this.addReplacement(new o("%%currentday%%","currentday")),this.addReplacement(new o("%%currentmonth%%","currentmonth")),this.addReplacement(new o("%%currenttime%%","currenttime")),this.addReplacement(new o("%%currentyear%%","currentyear")),this.addReplacement(new o("%%date%%","date")),this.addReplacement(new o("%%userid%%","userid")),this.addReplacement(new o("%%id%%","id")),this.addReplacement(new o("%%page%%","page")),this.addReplacement(new o("%%searchphrase%%","searchphrase")),this.addReplacement(new o("%%sitedesc%%","sitedesc")),this.addReplacement(new o("%%sitename%%","sitename")),this.addReplacement(new o("%%category%%","category")),this.addReplacement(new o("%%focuskw%%","keyword",{source:"app",aliases:["%%keyword%%"]})),this.addReplacement(new o("%%term_description%%","text",{source:"app",scope:["term","category","tag"],aliases:["%%tag_description%%","%%category_description%%"]})),this.addReplacement(new o("%%term_title%%","term_title",{scope:["term"]})),this.addReplacement(new o("%%term_hierarchy%%","term_hierarchy",{scope:["term"]})),this.addReplacement(new o("%%title%%","title",{source:"app",scope:["post","term","page"]})),this.addReplacement(new o("%%parent_title%%","title",{source:"app",scope:["page","category"]})),this.addReplacement(new o("%%excerpt%%","excerpt",{source:"app",scope:["post"],aliases:["%%excerpt_only%%"]})),this.addReplacement(new o("%%primary_category%%","primaryCategory",{source:"app",scope:["post"]})),this.addReplacement(new o("%%sep%%(\\s*%%sep%%)*","sep"))},r.prototype.registerEvents=function(){const e=wpseoReplaceVarsL10n.scope;"post"===e&&jQuery(".categorydiv").each(this.bindTaxonomyEvents.bind(this)),"post"!==e&&"page"!==e||jQuery("#postcustomstuff > #list-table").each(this.bindFieldEvents.bind(this))},r.prototype.subscribeToGutenberg=function(){if(!Object(c.a)())return;const e={0:""};let t=null;const i=window.wp.data;i.subscribe(()=>{const r=i.select("core/editor").getEditedPostAttribute("parent");if(void 0!==r&&t!==r)return t=r,r<1?(this._currentParentPageTitle="",void this.declareReloaded()):Object(n.isUndefined)(e[r])?void wp.api.loadPromise.done(()=>{new wp.api.models.Page({id:r}).fetch().then(t=>{this._currentParentPageTitle=t.title.rendered,e[r]=this._currentParentPageTitle,this.declareReloaded()}).fail(()=>{this._currentParentPageTitle="",this.declareReloaded()})}):(this._currentParentPageTitle=e[r],void this.declareReloaded())})},r.prototype.addReplacement=function(e){t[e.placeholder]=e},r.prototype.removeReplacement=function(e){delete t[e.getPlaceholder()]},r.prototype.registerModifications=function(){var t=this.replaceVariables.bind(this);Object(n.forEach)(e,function(e){this._app.registerModification(e,t,"replaceVariablePlugin",10)}.bind(this))},r.prototype.replaceVariables=function(e){return Object(n.isUndefined)(e)||(e=this.parentReplace(e),e=this.replaceCustomTaxonomy(e),e=this.replaceByStore(e),e=this.replacePlaceholders(e)),e},r.prototype.replaceByStore=function(e){const t=this._store.getState().snippetEditor.replacementVariables;return Object(n.forEach)(t,t=>{""!==t.value&&(e=e.replace("%%"+t.name+"%%",t.value))}),e},r.prototype.getReplacementSource=function(e){return"app"===e.source?this._app.rawData:"direct"===e.source?"direct":wpseoReplaceVarsL10n.replace_vars},r.prototype.getReplacement=function(e){var t=this.getReplacementSource(e.options);return!1===e.inScope(wpseoReplaceVarsL10n.scope)?"":"direct"===t?e.replacement:t[e.replacement]||""},r.prototype.replacePlaceholders=function(e){return Object(n.forEach)(t,function(t){e=e.replace(new RegExp(t.getPlaceholder(!0),"g"),this.getReplacement(t))}.bind(this)),e},r.prototype.declareReloaded=function(){this._app.pluginReloaded("replaceVariablePlugin"),this._store.dispatch(Object(s.g)())},r.prototype.getCategoryName=function(e){var t=e.parent("label").clone();return t.children().remove(),t.text().trim()},r.prototype.parseTaxonomies=function(e,t){Object(n.isUndefined)(i[t])&&(i[t]={});const r=[];Object(n.forEach)(e,function(e){const n=(e=jQuery(e)).val(),a=this.getCategoryName(e),o=e.prop("checked");i[t][n]={label:a,checked:o},o&&-1===r.indexOf(a)&&r.push(a)}.bind(this)),"category"!==t&&(t="ct_"+t),this._store.dispatch(Object(s.k)(t,r.join(", ")))},r.prototype.getAvailableTaxonomies=function(e){var t=jQuery(e).find("input[type=checkbox]"),i=jQuery(e).attr("id").replace("taxonomy-","");t.length>0&&this.parseTaxonomies(t,i),this.declareReloaded()},r.prototype.bindTaxonomyEvents=function(e,t){(t=jQuery(t)).on("wpListAddEnd",".categorychecklist",this.getAvailableTaxonomies.bind(this,t)),t.on("change","input[type=checkbox]",this.getAvailableTaxonomies.bind(this,t)),this.getAvailableTaxonomies(t)},r.prototype.replaceCustomTaxonomy=function(e){return Object(n.forEach)(i,function(t,i){var n="%%ct_"+i+"%%";"category"===i&&(n="%%"+i+"%%"),e=e.replace(n,this.getTaxonomyReplaceVar(i))}.bind(this)),e},r.prototype.getTaxonomyReplaceVar=function(e){var t=[],r=i[e];return!0===Object(n.isUndefined)(r)?"":(Object(n.forEach)(r,function(e){!1!==e.checked&&t.push(e.label)}),jQuery.unique(t).join(", "))},r.prototype.parseFields=function(e){jQuery(e).each(function(e,t){var i=jQuery("#"+t.id+"-key").val(),n=jQuery("#"+t.id+"-value").val();const r="cf_"+this.sanitizeCustomFieldNames(i),a=i+" (custom field)";this._store.dispatch(Object(s.k)(r,n,a)),this.addReplacement(new o(`%%${r}%%`,n,{source:"direct"}))}.bind(this))},r.prototype.removeFields=function(e){jQuery(e).each(function(e,t){var i=jQuery("#"+t.id+"-key").val();this.removeReplacement("%%cf_"+this.sanitizeCustomFieldNames(i)+"%%")}.bind(this))},r.prototype.sanitizeCustomFieldNames=function(e){return e.replace(/\s/g,"_")},r.prototype.getAvailableFields=function(e){this.removeCustomFields();var t=jQuery(e).find("#the-list > tr:visible[id]");t.length>0&&this.parseFields(t),this.declareReloaded()},r.prototype.bindFieldEvents=function(e,t){var i=(t=jQuery(t)).find("#the-list");i.on("wpListDelEnd.wpseoCustomFields",this.getAvailableFields.bind(this,t)),i.on("wpListAddEnd.wpseoCustomFields",this.getAvailableFields.bind(this,t)),i.on("input.wpseoCustomFields",".textarea",this.getAvailableFields.bind(this,t)),i.on("click.wpseoCustomFields",".button + .updatemeta",this.getAvailableFields.bind(this,t)),this.getAvailableFields(t)},r.prototype.removeCustomFields=function(){var e=Object(n.filter)(t,function(e,t){return t.indexOf("%%cf_")>-1});Object(n.forEach)(e,function(e){this._store.dispatch(Object(s.h)(Object(n.trim)(e.placeholder,"%%"))),this.removeReplacement(e)}.bind(this))},r.prototype.parentReplace=function(e){const t=jQuery("#parent_id, #parent").eq(0);return this.hasParentTitle(t)&&(e=e.replace(/%%parent_title%%/,this.getParentTitleReplacement(t))),Object(c.a)()&&!Object(n.isUndefined)(this._currentParentPageTitle)&&(e=e.replace(/%%parent_title%%/,this._currentParentPageTitle)),e},r.prototype.hasParentTitle=function(e){return!Object(n.isUndefined)(e)&&!Object(n.isUndefined)(e.prop("options"))},r.prototype.getParentTitleReplacement=function(e){var t=e.find("option:selected").text();return t===wpseoReplaceVarsL10n.no_parent_text?"":t},r.ReplaceVar=o,window.YoastReplaceVarPlugin=r}()},7:function(e,t,i){"use strict";i.d(t,"c",function(){return r}),i.d(t,"d",function(){return a}),i.d(t,"e",function(){return o}),i.d(t,"b",function(){return s}),i.d(t,"a",function(){return c}),i.d(t,"f",function(){return p}),i.d(t,"i",function(){return d}),i.d(t,"j",function(){return l}),i.d(t,"k",function(){return u}),i.d(t,"l",function(){return h}),i.d(t,"h",function(){return f}),i.d(t,"g",function(){return m});var n=i(8);const r="SNIPPET_EDITOR_SWITCH_MODE",a="SNIPPET_EDITOR_UPDATE_DATA",o="SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",s="SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",c="SNIPPET_EDITOR_REFRESH",p="SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT";function d(e){return{type:r,mode:e}}function l(e){return{type:a,data:e}}function u(e,t,i=""){const r="string"==typeof t?Object(n.decodeHTML)(t):t;return{type:o,name:e,value:r,label:i}}function h(e){return{type:p,wordsToHighlight:e}}function f(e){return{type:s,name:e}}function m(){return{type:c,time:(new Date).getMilliseconds()}}},8:function(e,t){e.exports=window.yoast.helpers}},[[414,0]]]);