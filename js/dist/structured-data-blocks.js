!function(e){var t={};function s(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=300)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function s(){return e.exports=s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,s.apply(this,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},109:function(e,t){e.exports=window.wp.blocks},112:function(e,t){e.exports=window.wp.blockEditor},155:function(e,t){e.exports=window.wp.isShallowEqual},19:function(e,t){e.exports=window.wp.components},2:function(e,t){e.exports=window.yoast.propTypes},231:function(e,t){e.exports=window.wp.a11y},300:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(1),i=s(109),r=s(10),a=s.n(r),c=s(2),u=s.n(c),p=s(9),h=s.n(p),l=s(231),d=s(4),m=function(e){return class extends o.Component{render(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(e,this.props)," ")}}},b=s(155),w=s(19),g=s(112);const j=m(g.RichText),O=m(g.RichText.Content);class f extends o.Component{constructor(e){super(e),this.onSelectImage=this.onSelectImage.bind(this),this.onInsertStep=this.onInsertStep.bind(this),this.onRemoveStep=this.onRemoveStep.bind(this),this.onMoveStepUp=this.onMoveStepUp.bind(this),this.onMoveStepDown=this.onMoveStepDown.bind(this),this.onFocusText=this.onFocusText.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeText=this.onChangeText.bind(this)}onInsertStep(){this.props.insertStep(this.props.index)}onRemoveStep(){this.props.removeStep(this.props.index)}onMoveStepUp(){this.props.isFirst||this.props.onMoveUp(this.props.index)}onMoveStepDown(){this.props.isLast||this.props.onMoveDown(this.props.index)}onFocusTitle(){this.props.onFocus(this.props.index,"name")}onFocusText(){this.props.onFocus(this.props.index,"text")}onChangeTitle(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(e,o,n,o,s)}onChangeText(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(n,e,n,o,s)}getMediaUploadButton(e){return Object(o.createElement)(w.Button,{className:"schema-how-to-step-button how-to-step-add-media",icon:"insert",onClick:e.open},Object(n.__)("Add image","wordpress-seo"))}getButtons(){const{step:e}=this.props;return Object(o.createElement)("div",{className:"schema-how-to-step-button-container"},!f.getImageSrc(e.text)&&Object(o.createElement)(g.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),Object(o.createElement)(w.Button,{className:"schema-how-to-step-button",icon:"trash",label:Object(n.__)("Delete step","wordpress-seo"),onClick:this.onRemoveStep}),Object(o.createElement)(w.Button,{className:"schema-how-to-step-button",icon:"insert",label:Object(n.__)("Insert step","wordpress-seo"),onClick:this.onInsertStep}))}getMover(){return Object(o.createElement)("div",{className:"schema-how-to-step-mover"},Object(o.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepUp,icon:"arrow-up-alt2",label:Object(n.__)("Move step up","wordpress-seo"),"aria-disabled":this.props.isFirst}),Object(o.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepDown,icon:"arrow-down-alt2",label:Object(n.__)("Move step down","wordpress-seo"),"aria-disabled":this.props.isLast}))}onSelectImage(e){const{index:t,step:{name:s,text:n}}=this.props;let i=n.slice();const r=Object(o.createElement)("img",{className:"wp-image-"+e.id,alt:e.alt,src:e.url,style:"max-width:100%;"});i.push?i.push(r):i=[i,r],this.props.onChange(s,i,s,n,t)}static getImageSrc(e){if(!e||!e.filter)return!1;const t=e.filter(e=>e&&e.type&&"img"===e.type)[0];return!!t&&t.props.src}shouldComponentUpdate(e){return!Object(b.isShallowEqualObjects)(e,this.props)}static Content(e){return Object(o.createElement)("li",{className:"schema-how-to-step",id:e.id,key:e.id},Object(o.createElement)(O,{tagName:"strong",className:"schema-how-to-step-name",key:e.id+"-name",value:e.name}),Object(o.createElement)(O,{tagName:"p",className:"schema-how-to-step-text",key:e.id+"-text",value:e.text}))}render(){const{index:e,step:t,isSelected:s,isUnorderedList:i}=this.props,{id:r,name:a,text:c}=t;return Object(o.createElement)("li",{className:"schema-how-to-step",key:r},Object(o.createElement)("span",{className:"schema-how-to-step-number"},i?"•":e+1+"."),Object(o.createElement)(j,{identifier:r+"-name",className:"schema-how-to-step-name",tagName:"p",key:r+"-name",value:a,onChange:this.onChangeTitle,onFocus:this.onFocusTitle,unstableOnFocus:this.onFocusTitle,placeholder:Object(n.__)("Enter a step title","wordpress-seo"),allowedFormats:["core/italic","core/strikethrough","core/link","core/annotation"]}),Object(o.createElement)(j,{identifier:r+"-text",className:"schema-how-to-step-text",tagName:"p",key:r+"-text",value:c,onChange:this.onChangeText,onFocus:this.onFocusText,unstableOnFocus:this.onFocusText,placeholder:Object(n.__)("Enter a step description","wordpress-seo")}),s&&Object(o.createElement)("div",{className:"schema-how-to-step-controls-container"},this.getMover(),this.getButtons()))}}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(e,10)||t}f.propTypes={index:u.a.number.isRequired,step:u.a.object.isRequired,onChange:u.a.func.isRequired,insertStep:u.a.func.isRequired,removeStep:u.a.func.isRequired,onFocus:u.a.func.isRequired,onMoveUp:u.a.func.isRequired,onMoveDown:u.a.func.isRequired,isSelected:u.a.bool.isRequired,isFirst:u.a.bool.isRequired,isLast:u.a.bool.isRequired,isUnorderedList:u.a.bool},f.defaultProps={isUnorderedList:!1};const y=m(g.RichText.Content),_=h()(w.TextControl)`
	&&& {
		margin-bottom: 32px;
	}
`;class x extends o.Component{constructor(e){super(e),this.state={focus:""},this.changeStep=this.changeStep.bind(this),this.insertStep=this.insertStep.bind(this),this.removeStep=this.removeStep.bind(this),this.swapSteps=this.swapSteps.bind(this),this.setFocus=this.setFocus.bind(this),this.addCSSClasses=this.addCSSClasses.bind(this),this.getListTypeHelp=this.getListTypeHelp.bind(this),this.toggleListType=this.toggleListType.bind(this),this.setDurationText=this.setDurationText.bind(this),this.setFocusToStep=this.setFocusToStep.bind(this),this.moveStepUp=this.moveStepUp.bind(this),this.moveStepDown=this.moveStepDown.bind(this),this.focusDescription=this.focusDescription.bind(this),this.addDuration=this.addDuration.bind(this),this.removeDuration=this.removeDuration.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.onChangeDays=this.onChangeDays.bind(this),this.onChangeHours=this.onChangeHours.bind(this),this.onChangeMinutes=this.onChangeMinutes.bind(this),this.onAddStepButtonClick=this.onAddStepButtonClick.bind(this),this.daysInput=Object(o.createRef)(),this.addDurationButton=Object(o.createRef)();const t=this.getDefaultDurationText();this.setDefaultDurationText(t)}getDefaultDurationText(){const e=Object(d.get)(window,"wp.hooks.applyFilters");let t=Object(n.__)("Time needed:","wordpress-seo");return e&&(t=e("wpseo_duration_text",t)),t}setDurationText(e){this.props.setAttributes({durationText:e})}setDefaultDurationText(e){this.props.setAttributes({defaultDurationText:e})}onAddStepButtonClick(){this.insertStep(null,[],[],!1)}static generateId(e){return`${e}-${(new Date).getTime()}`}changeStep(e,t,s,n,i){const r=this.props.attributes.steps?this.props.attributes.steps.slice():[];if(i>=r.length)return;if(r[i].name!==s||r[i].text!==n)return;r[i]={id:r[i].id,name:e,text:t,jsonName:Object(o.renderToString)(e),jsonText:Object(o.renderToString)(t)};const a=f.getImageSrc(t);a&&(r[i].jsonImageSrc=a),this.props.setAttributes({steps:r})}insertStep(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=this.props.attributes.steps?this.props.attributes.steps.slice():[];null===e&&(e=i.length-1),i.splice(e+1,0,{id:x.generateId("how-to-step"),name:t,text:s,jsonName:"",jsonText:""}),this.props.setAttributes({steps:i}),o?setTimeout(this.setFocus.bind(this,e+1+":name")):Object(l.speak)(Object(n.__)("New step added","wordpress-seo"))}swapSteps(e,t){const s=this.props.attributes.steps?this.props.attributes.steps.slice():[],o=s[e];s[e]=s[t],s[t]=o,this.props.setAttributes({steps:s});const[n,i]=this.state.focus.split(":");n===""+e&&this.setFocus(`${t}:${i}`),n===""+t&&this.setFocus(`${e}:${i}`)}removeStep(e){const t=this.props.attributes.steps?this.props.attributes.steps.slice():[];t.splice(e,1),this.props.setAttributes({steps:t});let s="description";t[e]?s=e+":name":t[e-1]&&(s=e-1+":text"),this.setFocus(s)}setFocus(e){e!==this.state.focus&&this.setState({focus:e})}setFocusToStep(e,t){this.setFocus(`${e}:${t}`)}moveStepUp(e){this.swapSteps(e,e-1)}moveStepDown(e){this.swapSteps(e,e+1)}getSteps(){if(!this.props.attributes.steps)return null;const[e]=this.state.focus.split(":");return this.props.attributes.steps.map((t,s)=>Object(o.createElement)(f,{key:t.id,step:t,index:s,onChange:this.changeStep,insertStep:this.insertStep,removeStep:this.removeStep,onFocus:this.setFocusToStep,onMoveUp:this.moveStepUp,onMoveDown:this.moveStepDown,isFirst:0===s,isLast:s===this.props.attributes.steps.length-1,isSelected:e===""+s,isUnorderedList:this.props.attributes.unorderedList}))}formatDuration(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return"";const s=e.replace(/^[0]+/,"");return""===s?0:null!==t?Math.min(Math.max(0,parseInt(s,10)),t):Math.max(0,parseInt(s,10))}static getStepsContent(e){return e?e.map(e=>Object(o.createElement)(f.Content,a()({},e,{key:e.id}))):null}static Content(e){const{steps:t,hasDuration:s,days:i,hours:r,minutes:a,description:c,unorderedList:u,additionalListCssClasses:p,className:h,durationText:l,defaultDurationText:d}=e,m=["schema-how-to",h].filter(e=>e).join(" "),b=["schema-how-to-steps",p].filter(e=>e).join(" "),w=function(e){const t=function(e){let{days:t,hours:s,minutes:o}=e;const i=[];return 0!==t&&i.push(Object(n.sprintf)(Object(n._n)("%d day","%d days",t,"wordpress-seo"),t)),0!==s&&i.push(Object(n.sprintf)(Object(n._n)("%d hour","%d hours",s,"wordpress-seo"),s)),0!==o&&i.push(Object(n.sprintf)(Object(n._n)("%d minute","%d minutes",o,"wordpress-seo"),o)),i}({days:v(e.days),hours:v(e.hours),minutes:v(e.minutes)});return 1===t.length?t[0]:2===t.length?Object(n.sprintf)(
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(n.__)("%s and %s","wordpress-seo"),...t):3===t.length?Object(n.sprintf)(
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(n.__)("%s, %s and %s","wordpress-seo"),...t):""}({days:i,hours:r,minutes:a});return Object(o.createElement)("div",{className:m},s&&"string"==typeof w&&w.length>0&&Object(o.createElement)("p",{className:"schema-how-to-total-time"},Object(o.createElement)("span",{className:"schema-how-to-duration-time-text"},l||d," "),w+". "),Object(o.createElement)(y,{tagName:"p",className:"schema-how-to-description",value:c}),u?Object(o.createElement)("ul",{className:b},x.getStepsContent(t)):Object(o.createElement)("ol",{className:b},x.getStepsContent(t)))}getAddStepButton(){return Object(o.createElement)(w.Button,{icon:"insert",onClick:this.onAddStepButtonClick,className:"schema-how-to-add-step"},Object(n.__)("Add step","wordpress-seo"))}addCSSClasses(e){this.props.setAttributes({additionalListCssClasses:e})}toggleListType(e){this.props.setAttributes({unorderedList:e})}getListTypeHelp(e){return e?Object(n.__)("Showing step items as an unordered list","wordpress-seo"):Object(n.__)("Showing step items as an ordered list.","wordpress-seo")}focusDescription(){this.setFocus("description")}onChangeDescription(e){this.props.setAttributes({description:e,jsonDescription:Object(o.renderToString)(e)})}addDuration(){this.props.setAttributes({hasDuration:!0}),setTimeout(()=>this.daysInput.current.focus())}removeDuration(){this.props.setAttributes({hasDuration:!1}),setTimeout(()=>{this.addDurationButton.current instanceof o.Component||this.addDurationButton.current.focus()})}onChangeDays(e){const t=this.formatDuration(e.target.value);this.props.setAttributes({days:Object(d.toString)(t)})}onChangeHours(e){const t=this.formatDuration(e.target.value,23);this.props.setAttributes({hours:Object(d.toString)(t)})}onChangeMinutes(e){const t=this.formatDuration(e.target.value,59);this.props.setAttributes({minutes:Object(d.toString)(t)})}getDuration(){const{attributes:e}=this.props;return e.hasDuration?Object(o.createElement)("fieldset",{className:"schema-how-to-duration"},Object(o.createElement)("span",{className:"schema-how-to-duration-flex-container",role:"presentation"},Object(o.createElement)("legend",{className:"schema-how-to-duration-legend"},e.durationText||this.getDefaultDurationText()),Object(o.createElement)("span",{className:"schema-how-to-duration-time-input"},Object(o.createElement)("label",{htmlFor:"schema-how-to-duration-days",className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(n.__)("days","wordpress-seo")),Object(o.createElement)("input",{id:"schema-how-to-duration-days",className:"schema-how-to-duration-input",type:"number",value:e.days,onChange:this.onChangeDays,placeholder:"DD",ref:this.daysInput}),Object(o.createElement)("label",{htmlFor:"schema-how-to-duration-hours",className:"screen-reader-text"},Object(n.__)("hours","wordpress-seo")),Object(o.createElement)("input",{id:"schema-how-to-duration-hours",className:"schema-how-to-duration-input",type:"number",value:e.hours,onChange:this.onChangeHours,placeholder:"HH"}),Object(o.createElement)("span",{"aria-hidden":"true"},":"),Object(o.createElement)("label",{htmlFor:"schema-how-to-duration-minutes",className:"screen-reader-text"},Object(n.__)("minutes","wordpress-seo")),Object(o.createElement)("input",{id:"schema-how-to-duration-minutes",className:"schema-how-to-duration-input",type:"number",value:e.minutes,onChange:this.onChangeMinutes,placeholder:"MM"}),Object(o.createElement)(w.Button,{className:"schema-how-to-duration-delete-button",icon:"trash",label:Object(n.__)("Delete total time","wordpress-seo"),onClick:this.removeDuration})))):Object(o.createElement)(w.Button,{onClick:this.addDuration,className:"schema-how-to-duration-button",ref:this.addDurationButton,icon:"insert"},Object(n.__)("Add total time","wordpress-seo"))}getSidebar(e,t,s){return s===this.getDefaultDurationText()&&(s=""),Object(o.createElement)(g.InspectorControls,null,Object(o.createElement)(w.PanelBody,{title:Object(n.__)("Settings","wordpress-seo"),className:"blocks-font-size"},Object(o.createElement)(_,{label:Object(n.__)("CSS class(es) to apply to the steps","wordpress-seo"),value:t,onChange:this.addCSSClasses,help:Object(n.__)("Optional. This can give you better control over the styling of the steps.","wordpress-seo")}),Object(o.createElement)(_,{label:Object(n.__)("Describe the duration of the instruction:","wordpress-seo"),value:s,onChange:this.setDurationText,help:Object(n.__)("Optional. Customize how you want to describe the duration of the instruction","wordpress-seo"),placeholder:this.getDefaultDurationText()}),Object(o.createElement)(w.ToggleControl,{label:Object(n.__)("Unordered list","wordpress-seo"),checked:e||!1,onChange:this.toggleListType,help:this.getListTypeHelp})))}render(){const{attributes:e,className:t}=this.props,s=["schema-how-to",t].filter(e=>e).join(" "),i=["schema-how-to-steps",e.additionalListCssClasses].filter(e=>e).join(" ");return Object(o.createElement)("div",{className:s},this.getDuration(),Object(o.createElement)(g.RichText,{identifier:"description",tagName:"p",className:"schema-how-to-description",value:e.description,onChange:this.onChangeDescription,onFocus:this.focusDescription,unstableOnFocus:this.focusDescription,placeholder:Object(n.__)("Enter a description","wordpress-seo")}),Object(o.createElement)("ul",{className:i},this.getSteps()),Object(o.createElement)("div",{className:"schema-how-to-buttons"},this.getAddStepButton()),this.getSidebar(e.unorderedList,e.additionalListCssClasses,e.durationText))}}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(e,10)||t}function S(e){const t=function(e){let{days:t,hours:s,minutes:o}=e;const i=[];return 0!==t&&i.push(Object(n.sprintf)(Object(n._n)("%d day","%d days",t,"wordpress-seo"),t)),0!==s&&i.push(Object(n.sprintf)(Object(n._n)("%d hour","%d hours",s,"wordpress-seo"),s)),0!==o&&i.push(Object(n.sprintf)(Object(n._n)("%d minute","%d minutes",o,"wordpress-seo"),o)),i}({days:C(e.days),hours:C(e.hours),minutes:C(e.minutes)});return 1===t.length?t[0]:2===t.length?Object(n.sprintf)(
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(n.__)("%s and %s","wordpress-seo"),...t):3===t.length?Object(n.sprintf)(
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(n.__)("%s, %s and %s","wordpress-seo"),...t):""}x.propTypes={attributes:u.a.object.isRequired,setAttributes:u.a.func.isRequired,className:u.a.string},x.defaultProps={className:""};const q=e=>Object(o.createElement)("li",{className:"schema-how-to-step",key:e.id},Object(o.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",Object(o.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ");function E(e){let{steps:t}=e.attributes;const{hasDuration:s,days:i,hours:r,minutes:c,description:u,unorderedList:p,additionalListCssClasses:h,className:l}=e.attributes;t=t?t.map(e=>Object(o.createElement)(q,a()({},e,{key:e.id}))):null;const d=["schema-how-to",l].filter(e=>e).join(" "),m=["schema-how-to-steps",h].filter(e=>e).join(" "),b=S({days:i,hours:r,minutes:c});return Object(o.createElement)("div",{className:d},s&&"string"==typeof b&&b.length>0&&Object(o.createElement)("p",{className:"schema-how-to-total-time"},Object(n.__)("Time needed:","wordpress-seo")," ",b+". "),Object(o.createElement)("p",{className:"schema-how-to-description"},u)," ",p?Object(o.createElement)("ul",{className:m},t):Object(o.createElement)("ol",{className:m},t))}function N(e){return Object(o.createElement)("li",{className:"schema-how-to-step",key:e.id},Object(o.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",Object(o.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ")}function D(e){const{steps:t,hasDuration:s,days:n,hours:i,minutes:r,description:c,unorderedList:u,additionalListCssClasses:p,className:h,durationText:l,defaultDurationText:d}=e.attributes,m=["schema-how-to",h].filter(e=>e).join(" "),b=["schema-how-to-steps",p].filter(e=>e).join(" "),w=S({days:n,hours:i,minutes:r}),g=t.map(e=>Object(o.createElement)(N,a()({},e,{key:e.id})));return Object(o.createElement)("div",{className:m},s&&"string"==typeof w&&w.length>0&&Object(o.createElement)("p",{className:"schema-how-to-total-time"},Object(o.createElement)("span",{className:"schema-how-to-duration-time-text"},l||d," "),w+". "),Object(o.createElement)("p",{className:"schema-how-to-description"},c)," ",u?Object(o.createElement)("ul",{className:b},g):Object(o.createElement)("ol",{className:b},g))}E.propTypes={attributes:u.a.object},D.propTypes={attributes:u.a.object.isRequired};var T={v8_2:E,v11_4:D};const F={hasDuration:{type:"boolean"},days:{type:"string"},hours:{type:"string"},minutes:{type:"string"},description:{type:"string",source:"html",selector:".schema-how-to-description"},jsonDescription:{type:"string"},steps:{type:"array"},additionalListCssClasses:{type:"string"},unorderedList:{type:"boolean"},durationText:{type:"string"},defaultDurationText:{type:"string"}},k=m(g.RichText.Content);class Q extends o.Component{constructor(e){super(e),this.onSelectImage=this.onSelectImage.bind(this),this.onFocusAnswer=this.onFocusAnswer.bind(this),this.onFocusQuestion=this.onFocusQuestion.bind(this),this.onChangeAnswer=this.onChangeAnswer.bind(this),this.onChangeQuestion=this.onChangeQuestion.bind(this),this.onInsertQuestion=this.onInsertQuestion.bind(this),this.onRemoveQuestion=this.onRemoveQuestion.bind(this),this.onMoveDown=this.onMoveDown.bind(this),this.onMoveUp=this.onMoveUp.bind(this)}getMediaUploadButton(e){return Object(o.createElement)(w.Button,{className:"schema-faq-section-button faq-section-add-media",icon:"insert",onClick:e.open},Object(n.__)("Add image","wordpress-seo"))}onFocusQuestion(){this.props.onFocus("question",this.props.index)}onFocusAnswer(){this.props.onFocus("answer",this.props.index)}onChangeQuestion(e){const{index:t,onChange:s,attributes:{answer:o,question:n}}=this.props;s(e,o,n,o,t)}onChangeAnswer(e){const{index:t,onChange:s,attributes:{answer:o,question:n}}=this.props;s(n,e,n,o,t)}onInsertQuestion(){this.props.insertQuestion(this.props.index)}onRemoveQuestion(){this.props.removeQuestion(this.props.index)}onMoveUp(){this.props.isFirst||this.props.onMoveUp(this.props.index)}onMoveDown(){this.props.isLast||this.props.onMoveDown(this.props.index)}getButtons(){const{attributes:e}=this.props;return Object(o.createElement)("div",{className:"schema-faq-section-button-container"},Object(o.createElement)(g.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),Object(o.createElement)(w.Button,{className:"schema-faq-section-button",icon:"trash",label:Object(n.__)("Delete question","wordpress-seo"),onClick:this.onRemoveQuestion}),Object(o.createElement)(w.Button,{className:"schema-faq-section-button",icon:"insert",label:Object(n.__)("Insert question","wordpress-seo"),onClick:this.onInsertQuestion}))}getMover(){return Object(o.createElement)("div",{className:"schema-faq-section-mover"},Object(o.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveUp,icon:"arrow-up-alt2",label:Object(n.__)("Move question up","wordpress-seo"),"aria-disabled":this.props.isFirst}),Object(o.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveDown,icon:"arrow-down-alt2",label:Object(n.__)("Move question down","wordpress-seo"),"aria-disabled":this.props.isLast}))}onSelectImage(e){const{attributes:{answer:t,question:s},index:n}=this.props;let i=t.slice();const r=Object(o.createElement)("img",{className:"wp-image-"+e.id,alt:e.alt,src:e.url,style:"max-width:100%;"});i.push?i.push(r):i=[i,r],this.props.onChange(s,i,s,t,n)}static getImageSrc(e){if(!e||!e.filter)return!1;const t=e.filter(e=>e&&e.type&&"img"===e.type)[0];return!!t&&t.props.src}static Content(e){return Object(o.createElement)("div",{className:"schema-faq-section",id:e.id,key:e.id},Object(o.createElement)(k,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),Object(o.createElement)(k,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}shouldComponentUpdate(e){return!Object(b.isShallowEqualObjects)(e,this.props)}render(){const{attributes:e,isSelected:t}=this.props,{id:s,question:i,answer:r}=e;return Object(o.createElement)("div",{className:"schema-faq-section",key:s},Object(o.createElement)(g.RichText,{identifier:s+"-question",className:"schema-faq-question",tagName:"p",key:s+"-question",value:i,onChange:this.onChangeQuestion,onFocus:this.onFocusQuestion,unstableOnFocus:this.onFocusQuestion,placeholder:Object(n.__)("Enter a question","wordpress-seo"),allowedFormats:["core/italic","core/strikethrough","core/link","core/annotation"]}),Object(o.createElement)(g.RichText,{identifier:s+"-answer",className:"schema-faq-answer",tagName:"p",key:s+"-answer",value:r,onChange:this.onChangeAnswer,onFocus:this.onFocusAnswer,unstableOnFocus:this.onFocusAnswer,placeholder:Object(n.__)("Enter the answer to the question","wordpress-seo")}),t&&Object(o.createElement)("div",{className:"schema-faq-section-controls-container"},this.getMover(),this.getButtons()))}}Q.propTypes={index:u.a.number.isRequired,attributes:u.a.object.isRequired,onChange:u.a.func.isRequired,insertQuestion:u.a.func.isRequired,removeQuestion:u.a.func.isRequired,onFocus:u.a.func.isRequired,onMoveUp:u.a.func.isRequired,onMoveDown:u.a.func.isRequired,isSelected:u.a.bool.isRequired,isFirst:u.a.bool.isRequired,isLast:u.a.bool.isRequired};const A=m(Q.Content);class M extends o.Component{constructor(e){super(e),this.state={focus:""},this.changeQuestion=this.changeQuestion.bind(this),this.insertQuestion=this.insertQuestion.bind(this),this.removeQuestion=this.removeQuestion.bind(this),this.swapQuestions=this.swapQuestions.bind(this),this.moveQuestionDown=this.moveQuestionDown.bind(this),this.moveQuestionUp=this.moveQuestionUp.bind(this),this.setFocus=this.setFocus.bind(this),this.onAddQuestionButtonClick=this.onAddQuestionButtonClick.bind(this)}static generateId(e){return`${e}-${(new Date).getTime()}`}onAddQuestionButtonClick(){this.insertQuestion(null,[],[],!1)}changeQuestion(e,t,s,n,i){const r=this.props.attributes.questions?this.props.attributes.questions.slice():[];if(i>=r.length)return;if(r[i].question!==s||r[i].answer!==n)return;r[i]={id:r[i].id,question:e,answer:t,jsonQuestion:Object(o.renderToString)(e),jsonAnswer:Object(o.renderToString)(t)};const a=Q.getImageSrc(t);a&&(r[i].jsonImageSrc=a),this.props.setAttributes({questions:r})}insertQuestion(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=this.props.attributes.questions?this.props.attributes.questions.slice():[];null===e&&(e=i.length-1),i.splice(e+1,0,{id:M.generateId("faq-question"),question:t,answer:s,jsonQuestion:"",jsonAnswer:""}),this.props.setAttributes({questions:i}),o?setTimeout(this.setFocus.bind(this,"question",e)):Object(l.speak)(Object(n.__)("New question added","wordpress-seo"))}swapQuestions(e,t){const s=this.props.attributes.questions?this.props.attributes.questions.slice():[],o=s[e];s[e]=s[t],s[t]=o,this.props.setAttributes({questions:s});const[n,i]=this.state.focus.split(":");n===""+e?this.setFocus(i,t):n===""+t&&this.setFocus(i,e)}moveQuestionUp(e){this.swapQuestions(e,e-1)}moveQuestionDown(e){this.swapQuestions(e,e+1)}removeQuestion(e){const t=this.props.attributes.questions?this.props.attributes.questions.slice():[];t.splice(e,1),this.props.setAttributes({questions:t});let s=0;t[e]?s=e:t[e-1]&&(s=e-1),this.setFocus("question",s)}setFocus(e,t){const s=`${t}:${e}`;s!==this.state.focus&&this.setState({focus:s})}getAddQuestionButton(){return Object(o.createElement)(w.Button,{icon:"insert",onClick:this.onAddQuestionButtonClick,className:"schema-faq-add-question"},Object(n.__)("Add question","wordpress-seo"))}getQuestions(){const{attributes:e}=this.props;if(!e.questions)return null;const[t]=this.state.focus.split(":");return e.questions.map((s,n)=>Object(o.createElement)(Q,{index:n,key:s.id,attributes:s,insertQuestion:this.insertQuestion,removeQuestion:this.removeQuestion,onChange:this.changeQuestion,onFocus:this.setFocus,isSelected:t===""+n,onMoveUp:this.moveQuestionUp,onMoveDown:this.moveQuestionDown,isFirst:0===n,isLast:n===e.questions.length-1}))}static Content(e){const{questions:t,className:s}=e,n=t?t.map((e,t)=>Object(o.createElement)(A,a()({key:t},e))):null,i=["schema-faq",s].filter(e=>e).join(" ");return Object(o.createElement)("div",{className:i},n)}render(){const{className:e}=this.props,t=["schema-faq",e].filter(e=>e).join(" ");return Object(o.createElement)("div",{className:t},Object(o.createElement)("div",null,this.getQuestions()),Object(o.createElement)("div",{className:"schema-faq-buttons"},this.getAddQuestionButton()))}}function R(e){const t=m(g.RichText.Content);return Object(o.createElement)("div",{className:"schema-faq-section",key:e.id},Object(o.createElement)(t,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),Object(o.createElement)(t,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}function I(e){const{questions:t,className:s}=e.attributes,n=m(R),i=t?t.map((e,t)=>Object(o.createElement)(n,a()({key:t},e))):null,r=["schema-faq",s].filter(e=>e).join(" ");return Object(o.createElement)("div",{className:r},i)}M.propTypes={attributes:u.a.object.isRequired,setAttributes:u.a.func.isRequired,className:u.a.string},M.defaultProps={className:""},I.propTypes={attributes:u.a.object.isRequired};var B={v13_1:I};const L={questions:{type:"array"},additionalListCssClasses:{type:"string"}};Object(i.registerBlockType)("yoast/how-to-block",{title:Object(n.__)("Yoast How-to","wordpress-seo"),description:Object(n.__)("Create a How-to guide in an SEO-friendly way. You can only use one How-to block per post.","wordpress-seo"),icon:"editor-ol",category:"yoast-structured-data-blocks",keywords:[Object(n.__)("How-to","wordpress-seo"),Object(n.__)("How to","wordpress-seo"),Object(n.__)("Schema","wordpress-seo"),Object(n.__)("SEO","wordpress-seo"),Object(n.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{steps:[{id:x.generateId("how-to-step"),name:[],text:[]},{id:x.generateId("how-to-step"),name:[],text:[]}]}},supports:{multiple:!1},attributes:F,edit:e=>{let{attributes:t,setAttributes:s,className:n}=e;return t.steps&&0!==t.steps.length||(t.steps=[{id:x.generateId("how-to-step"),name:[],text:[]}]),Object(o.createElement)(x,{attributes:t,setAttributes:s,className:n})},save:function(e){let{attributes:t}=e;return Object(o.createElement)(x.Content,t)},deprecated:[{attributes:F,save:T.v11_4},{attributes:F,save:T.v8_2}]}),Object(i.registerBlockType)("yoast/faq-block",{title:Object(n.__)("Yoast FAQ","wordpress-seo"),description:Object(n.__)("List your Frequently Asked Questions in an SEO-friendly way. You can only use one FAQ block per post.","wordpress-seo"),icon:"editor-ul",category:"yoast-structured-data-blocks",keywords:[Object(n.__)("FAQ","wordpress-seo"),Object(n.__)("Frequently Asked Questions","wordpress-seo"),Object(n.__)("Schema","wordpress-seo"),Object(n.__)("SEO","wordpress-seo"),Object(n.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{questions:[{id:M.generateId("faq-question"),question:[],answer:[]},{id:M.generateId("faq-question"),question:[],answer:[]},{id:M.generateId("faq-question"),question:[],answer:[]}]}},attributes:L,edit:e=>{let{attributes:t,setAttributes:s,className:n}=e;return t.questions&&0!==t.questions.length||(t.questions=[{id:M.generateId("faq-question"),question:[],answer:[]}]),Object(o.createElement)(M,{attributes:t,setAttributes:s,className:n})},save:function(e){let{attributes:t}=e;return Object(o.createElement)(M.Content,t)},deprecated:[{attributes:L,save:B.v13_1}]})},4:function(e,t){e.exports=window.lodash},9:function(e,t){e.exports=window.yoast.styledComponents}});