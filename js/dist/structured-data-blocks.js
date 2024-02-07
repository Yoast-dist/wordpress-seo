(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.i18n,o=window.wp.blocks;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},n.apply(this,arguments)}const i=window.yoast.propTypes;var r=e.n(i);const a=window.yoast.styledComponents;var u=e.n(a);const c=window.wp.a11y,p=window.lodash,h=function(e){return class extends t.Component{render(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,this.props)," ")}}},l=window.wp.isShallowEqual,d=window.wp.components,m=window.wp.blockEditor,w=h(m.RichText.Content);class g extends t.Component{constructor(e){super(e),this.onSelectImage=this.onSelectImage.bind(this),this.onInsertStep=this.onInsertStep.bind(this),this.onRemoveStep=this.onRemoveStep.bind(this),this.onMoveStepUp=this.onMoveStepUp.bind(this),this.onMoveStepDown=this.onMoveStepDown.bind(this),this.onFocusText=this.onFocusText.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeText=this.onChangeText.bind(this)}onInsertStep(){this.props.insertStep(this.props.index)}onRemoveStep(){this.props.removeStep(this.props.index)}onMoveStepUp(){this.props.isFirst||this.props.onMoveUp(this.props.index)}onMoveStepDown(){this.props.isLast||this.props.onMoveDown(this.props.index)}onFocusTitle(){this.props.onFocus(this.props.index,"name")}onFocusText(){this.props.onFocus(this.props.index,"text")}onChangeTitle(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(e,o,n,o,s)}onChangeText(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(n,e,n,o,s)}getMediaUploadButton(e){return(0,t.createElement)(d.Button,{className:"schema-how-to-step-button how-to-step-add-media",icon:"insert",onClick:e.open},(0,s.__)("Add image","wordpress-seo"))}getButtons(){const{step:e}=this.props;return(0,t.createElement)("div",{className:"schema-how-to-step-button-container"},!g.getImageSrc(e.text)&&(0,t.createElement)(m.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),(0,t.createElement)(d.Button,{className:"schema-how-to-step-button",icon:"trash",label:(0,s.__)("Delete step","wordpress-seo"),onClick:this.onRemoveStep}),(0,t.createElement)(d.Button,{className:"schema-how-to-step-button",icon:"insert",label:(0,s.__)("Insert step","wordpress-seo"),onClick:this.onInsertStep}))}getMover(){return(0,t.createElement)("div",{className:"schema-how-to-step-mover"},(0,t.createElement)(d.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepUp,icon:"arrow-up-alt2",label:(0,s.__)("Move step up","wordpress-seo"),"aria-disabled":this.props.isFirst}),(0,t.createElement)(d.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepDown,icon:"arrow-down-alt2",label:(0,s.__)("Move step down","wordpress-seo"),"aria-disabled":this.props.isLast}))}onSelectImage(e){const{index:s,step:{name:o,text:n}}=this.props;let i=n.slice();const r=(0,t.createElement)("img",{className:`wp-image-${e.id}`,alt:e.alt,src:e.url,style:"max-width:100%;"});i.push?i.push(r):i=[i,r],this.props.onChange(o,i,o,n,s)}static getImageSrc(e){if(!e||!e.filter)return!1;const t=e.filter((e=>e&&e.type&&"img"===e.type))[0];return!!t&&t.props.src}shouldComponentUpdate(e){return!(0,l.isShallowEqualObjects)(e,this.props)}static Content(e){return(0,t.createElement)("li",{className:"schema-how-to-step",id:e.id,key:e.id},(0,t.createElement)(w,{tagName:"strong",className:"schema-how-to-step-name",key:e.id+"-name",value:e.name}),(0,t.createElement)(w,{tagName:"p",className:"schema-how-to-step-text",key:e.id+"-text",value:e.text}))}render(){const{index:e,step:o,isSelected:n,isUnorderedList:i}=this.props,{id:r,name:a,text:u}=o;return(0,t.createElement)("li",{className:"schema-how-to-step",key:r},(0,t.createElement)("span",{className:"schema-how-to-step-number"},i?"•":e+1+"."),(0,t.createElement)(m.RichText,{identifier:`${r}-name`,className:"schema-how-to-step-name",tagName:"p",key:`${r}-name`,value:a,onChange:this.onChangeTitle,onFocus:this.onFocusTitle,unstableOnFocus:this.onFocusTitle,placeholder:(0,s.__)("Enter a step title","wordpress-seo"),allowedFormats:["core/italic","core/strikethrough","core/link","core/annotation"]}),(0,t.createElement)(m.RichText,{identifier:`${r}-text`,className:"schema-how-to-step-text",tagName:"p",key:`${r}-text`,value:u,onChange:this.onChangeText,onFocus:this.onFocusText,unstableOnFocus:this.onFocusText,placeholder:(0,s.__)("Enter a step description","wordpress-seo")}),n&&(0,t.createElement)("div",{className:"schema-how-to-step-controls-container"},this.getMover(),this.getButtons()))}}function b(e,t=0){return parseInt(e,10)||t}g.propTypes={index:r().number.isRequired,step:r().object.isRequired,onChange:r().func.isRequired,insertStep:r().func.isRequired,removeStep:r().func.isRequired,onFocus:r().func.isRequired,onMoveUp:r().func.isRequired,onMoveDown:r().func.isRequired,isSelected:r().bool.isRequired,isFirst:r().bool.isRequired,isLast:r().bool.isRequired,isUnorderedList:r().bool},g.defaultProps={isUnorderedList:!1};const f=h(m.RichText.Content),v=u()(d.TextControl)`
	&&& {
		margin-bottom: 32px;
	}
`;class y extends t.Component{constructor(e){super(e),this.state={focus:""},this.changeStep=this.changeStep.bind(this),this.insertStep=this.insertStep.bind(this),this.removeStep=this.removeStep.bind(this),this.swapSteps=this.swapSteps.bind(this),this.setFocus=this.setFocus.bind(this),this.addCSSClasses=this.addCSSClasses.bind(this),this.getListTypeHelp=this.getListTypeHelp.bind(this),this.toggleListType=this.toggleListType.bind(this),this.setDurationText=this.setDurationText.bind(this),this.setFocusToStep=this.setFocusToStep.bind(this),this.moveStepUp=this.moveStepUp.bind(this),this.moveStepDown=this.moveStepDown.bind(this),this.focusDescription=this.focusDescription.bind(this),this.addDuration=this.addDuration.bind(this),this.removeDuration=this.removeDuration.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.onChangeDays=this.onChangeDays.bind(this),this.onChangeHours=this.onChangeHours.bind(this),this.onChangeMinutes=this.onChangeMinutes.bind(this),this.onAddStepButtonClick=this.onAddStepButtonClick.bind(this),this.daysInput=(0,t.createRef)(),this.addDurationButton=(0,t.createRef)();const s=this.getDefaultDurationText();this.setDefaultDurationText(s)}getDefaultDurationText(){const e=(0,p.get)(window,"wp.hooks.applyFilters");let t=(0,s.__)("Time needed:","wordpress-seo");return e&&(t=e("wpseo_duration_text",t)),t}setDurationText(e){this.props.setAttributes({durationText:e})}setDefaultDurationText(e){this.props.setAttributes({defaultDurationText:e})}onAddStepButtonClick(){this.insertStep(null,[],[],!1)}static generateId(e){return`${e}-${(new Date).getTime()}`}changeStep(e,s,o,n,i){const r=this.props.attributes.steps?this.props.attributes.steps.slice():[];if(i>=r.length)return;if(r[i].name!==o||r[i].text!==n)return;r[i]={id:r[i].id,name:e,text:s,jsonName:(0,t.renderToString)(e),jsonText:(0,t.renderToString)(s)};const a=g.getImageSrc(s);a&&(r[i].jsonImageSrc=a),this.props.setAttributes({steps:r})}insertStep(e=null,t=[],o=[],n=!0){const i=this.props.attributes.steps?this.props.attributes.steps.slice():[];null===e&&(e=i.length-1),i.splice(e+1,0,{id:y.generateId("how-to-step"),name:t,text:o,jsonName:"",jsonText:""}),this.props.setAttributes({steps:i}),n?setTimeout(this.setFocus.bind(this,`${e+1}:name`)):(0,c.speak)((0,s.__)("New step added","wordpress-seo"))}swapSteps(e,t){const s=this.props.attributes.steps?this.props.attributes.steps.slice():[],o=s[e];s[e]=s[t],s[t]=o,this.props.setAttributes({steps:s});const[n,i]=this.state.focus.split(":");n===`${e}`&&this.setFocus(`${t}:${i}`),n===`${t}`&&this.setFocus(`${e}:${i}`)}removeStep(e){const t=this.props.attributes.steps?this.props.attributes.steps.slice():[];t.splice(e,1),this.props.setAttributes({steps:t});let s="description";t[e]?s=`${e}:name`:t[e-1]&&(s=e-1+":text"),this.setFocus(s)}setFocus(e){e!==this.state.focus&&this.setState({focus:e})}setFocusToStep(e,t){this.setFocus(`${e}:${t}`)}moveStepUp(e){this.swapSteps(e,e-1)}moveStepDown(e){this.swapSteps(e,e+1)}getSteps(){if(!this.props.attributes.steps)return null;const[e]=this.state.focus.split(":");return this.props.attributes.steps.map(((s,o)=>(0,t.createElement)(g,{key:s.id,step:s,index:o,onChange:this.changeStep,insertStep:this.insertStep,removeStep:this.removeStep,onFocus:this.setFocusToStep,onMoveUp:this.moveStepUp,onMoveDown:this.moveStepDown,isFirst:0===o,isLast:o===this.props.attributes.steps.length-1,isSelected:e===`${o}`,isUnorderedList:this.props.attributes.unorderedList})))}formatDuration(e,t=null){if(""===e)return"";const s=e.replace(/^[0]+/,"");return""===s?0:null!==t?Math.min(Math.max(0,parseInt(s,10)),t):Math.max(0,parseInt(s,10))}static getStepsContent(e){return e?e.map((e=>(0,t.createElement)(g.Content,n({},e,{key:e.id})))):null}static Content(e){const{steps:o,hasDuration:n,days:i,hours:r,minutes:a,description:u,unorderedList:c,additionalListCssClasses:p,className:h,durationText:l,defaultDurationText:d}=e,m=["schema-how-to",h].filter((e=>e)).join(" "),w=["schema-how-to-steps",p].filter((e=>e)).join(" "),g=function(e){const t=function({days:e,hours:t,minutes:o}){const n=[];return 0!==e&&n.push((0,s.sprintf)((0,s._n)("%d day","%d days",e,"wordpress-seo"),e)),0!==t&&n.push((0,s.sprintf)((0,s._n)("%d hour","%d hours",t,"wordpress-seo"),t)),0!==o&&n.push((0,s.sprintf)((0,s._n)("%d minute","%d minutes",o,"wordpress-seo"),o)),n}({days:b(e.days),hours:b(e.hours),minutes:b(e.minutes)});return 1===t.length?t[0]:2===t.length?(0,s.sprintf)(/* translators: %s expands to a unit of time (e.g. 1 day). */
(0,s.__)("%s and %s","wordpress-seo"),...t):3===t.length?(0,s.sprintf)(/* translators: %s expands to a unit of time (e.g. 1 day). */
(0,s.__)("%s, %s and %s","wordpress-seo"),...t):""}({days:i,hours:r,minutes:a});return(0,t.createElement)("div",{className:m},n&&"string"==typeof g&&g.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,t.createElement)("span",{className:"schema-how-to-duration-time-text"},l||d," "),g+". "),(0,t.createElement)(f,{tagName:"p",className:"schema-how-to-description",value:u}),c?(0,t.createElement)("ul",{className:w},y.getStepsContent(o)):(0,t.createElement)("ol",{className:w},y.getStepsContent(o)))}getAddStepButton(){return(0,t.createElement)(d.Button,{icon:"insert",onClick:this.onAddStepButtonClick,className:"schema-how-to-add-step"},(0,s.__)("Add step","wordpress-seo"))}addCSSClasses(e){this.props.setAttributes({additionalListCssClasses:e})}toggleListType(e){this.props.setAttributes({unorderedList:e})}getListTypeHelp(e){return e?(0,s.__)("Showing step items as an unordered list","wordpress-seo"):(0,s.__)("Showing step items as an ordered list.","wordpress-seo")}focusDescription(){this.setFocus("description")}onChangeDescription(e){this.props.setAttributes({description:e,jsonDescription:(0,t.renderToString)(e)})}addDuration(){this.props.setAttributes({hasDuration:!0}),setTimeout((()=>this.daysInput.current.focus()))}removeDuration(){this.props.setAttributes({hasDuration:!1}),setTimeout((()=>{this.addDurationButton.current instanceof t.Component||this.addDurationButton.current.focus()}))}onChangeDays(e){const t=this.formatDuration(e.target.value);this.props.setAttributes({days:(0,p.toString)(t)})}onChangeHours(e){const t=this.formatDuration(e.target.value,23);this.props.setAttributes({hours:(0,p.toString)(t)})}onChangeMinutes(e){const t=this.formatDuration(e.target.value,59);this.props.setAttributes({minutes:(0,p.toString)(t)})}getDuration(){const{attributes:e}=this.props;return e.hasDuration?(0,t.createElement)("fieldset",{className:"schema-how-to-duration"},(0,t.createElement)("span",{className:"schema-how-to-duration-flex-container",role:"presentation"},(0,t.createElement)("legend",{className:"schema-how-to-duration-legend"},e.durationText||this.getDefaultDurationText()),(0,t.createElement)("span",{className:"schema-how-to-duration-time-input"},(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-days",className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("days","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-days",className:"schema-how-to-duration-input",type:"number",value:e.days,onChange:this.onChangeDays,placeholder:"DD",ref:this.daysInput}),(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-hours",className:"screen-reader-text"},(0,s.__)("hours","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-hours",className:"schema-how-to-duration-input",type:"number",value:e.hours,onChange:this.onChangeHours,placeholder:"HH"}),(0,t.createElement)("span",{"aria-hidden":"true"},":"),(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-minutes",className:"screen-reader-text"},(0,s.__)("minutes","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-minutes",className:"schema-how-to-duration-input",type:"number",value:e.minutes,onChange:this.onChangeMinutes,placeholder:"MM"}),(0,t.createElement)(d.Button,{className:"schema-how-to-duration-delete-button",icon:"trash",label:(0,s.__)("Delete total time","wordpress-seo"),onClick:this.removeDuration})))):(0,t.createElement)(d.Button,{onClick:this.addDuration,className:"schema-how-to-duration-button",ref:this.addDurationButton,icon:"insert"},(0,s.__)("Add total time","wordpress-seo"))}getSidebar(e,o,n){return n===this.getDefaultDurationText()&&(n=""),(0,t.createElement)(m.InspectorControls,null,(0,t.createElement)(d.PanelBody,{title:(0,s.__)("Settings","wordpress-seo"),className:"blocks-font-size"},(0,t.createElement)(v,{label:(0,s.__)("CSS class(es) to apply to the steps","wordpress-seo"),value:o,onChange:this.addCSSClasses,help:(0,s.__)("Optional. This can give you better control over the styling of the steps.","wordpress-seo")}),(0,t.createElement)(v,{label:(0,s.__)("Describe the duration of the instruction:","wordpress-seo"),value:n,onChange:this.setDurationText,help:(0,s.__)("Optional. Customize how you want to describe the duration of the instruction","wordpress-seo"),placeholder:this.getDefaultDurationText()}),(0,t.createElement)(d.ToggleControl,{label:(0,s.__)("Unordered list","wordpress-seo"),checked:e||!1,onChange:this.toggleListType,help:this.getListTypeHelp})))}render(){const{attributes:e,className:o}=this.props,n=["schema-how-to",o].filter((e=>e)).join(" "),i=["schema-how-to-steps",e.additionalListCssClasses].filter((e=>e)).join(" ");return(0,t.createElement)("div",{className:n},this.getDuration(),(0,t.createElement)(m.RichText,{identifier:"description",tagName:"p",className:"schema-how-to-description",value:e.description,onChange:this.onChangeDescription,onFocus:this.focusDescription,unstableOnFocus:this.focusDescription,placeholder:(0,s.__)("Enter a description","wordpress-seo")}),(0,t.createElement)("ul",{className:i},this.getSteps()),(0,t.createElement)("div",{className:"schema-how-to-buttons"},this.getAddStepButton()),this.getSidebar(e.unorderedList,e.additionalListCssClasses,e.durationText))}}function C(e,t=0){return parseInt(e,10)||t}function _(e){const t=function({days:e,hours:t,minutes:o}){const n=[];return 0!==e&&n.push((0,s.sprintf)((0,s._n)("%d day","%d days",e,"wordpress-seo"),e)),0!==t&&n.push((0,s.sprintf)((0,s._n)("%d hour","%d hours",t,"wordpress-seo"),t)),0!==o&&n.push((0,s.sprintf)((0,s._n)("%d minute","%d minutes",o,"wordpress-seo"),o)),n}({days:C(e.days),hours:C(e.hours),minutes:C(e.minutes)});return 1===t.length?t[0]:2===t.length?(0,s.sprintf)(/* translators: %s expands to a unit of time (e.g. 1 day). */
(0,s.__)("%s and %s","wordpress-seo"),...t):3===t.length?(0,s.sprintf)(/* translators: %s expands to a unit of time (e.g. 1 day). */
(0,s.__)("%s, %s and %s","wordpress-seo"),...t):""}y.propTypes={attributes:r().object.isRequired,setAttributes:r().func.isRequired,className:r().string},y.defaultProps={className:""};const S=e=>(0,t.createElement)("li",{className:"schema-how-to-step",key:e.id},(0,t.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",(0,t.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ");function q(e){let{steps:o}=e.attributes;const{hasDuration:i,days:r,hours:a,minutes:u,description:c,unorderedList:p,additionalListCssClasses:h,className:l}=e.attributes;o=o?o.map((e=>(0,t.createElement)(S,n({},e,{key:e.id})))):null;const d=["schema-how-to",l].filter((e=>e)).join(" "),m=["schema-how-to-steps",h].filter((e=>e)).join(" "),w=_({days:r,hours:a,minutes:u});return(0,t.createElement)("div",{className:d},i&&"string"==typeof w&&w.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,s.__)("Time needed:","wordpress-seo")," ",w+". "),(0,t.createElement)("p",{className:"schema-how-to-description"},c)," ",p?(0,t.createElement)("ul",{className:m},o):(0,t.createElement)("ol",{className:m},o))}function E(e){return(0,t.createElement)("li",{className:"schema-how-to-step",key:e.id},(0,t.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",(0,t.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ")}function N(e){const{steps:s,hasDuration:o,days:i,hours:r,minutes:a,description:u,unorderedList:c,additionalListCssClasses:p,className:h,durationText:l,defaultDurationText:d}=e.attributes,m=["schema-how-to",h].filter((e=>e)).join(" "),w=["schema-how-to-steps",p].filter((e=>e)).join(" "),g=_({days:i,hours:r,minutes:a});let b=[];return s&&(b=s.map((e=>(0,t.createElement)(E,n({},e,{key:e.id}))))),(0,t.createElement)("div",{className:m},o&&"string"==typeof g&&g.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,t.createElement)("span",{className:"schema-how-to-duration-time-text"},l||d," "),g+". "),(0,t.createElement)("p",{className:"schema-how-to-description"},u)," ",c?(0,t.createElement)("ul",{className:w},b):(0,t.createElement)("ol",{className:w},b))}q.propTypes={attributes:r().object},N.propTypes={attributes:r().object.isRequired};const x={v8_2:q,v11_4:N},D={hasDuration:{type:"boolean"},days:{type:"string"},hours:{type:"string"},minutes:{type:"string"},description:{type:"string",source:"html",selector:".schema-how-to-description"},jsonDescription:{type:"string"},steps:{type:"array"},additionalListCssClasses:{type:"string"},unorderedList:{type:"boolean"},durationText:{type:"string"},defaultDurationText:{type:"string"}},T=h(m.RichText.Content);class F extends t.Component{constructor(e){super(e),this.onSelectImage=this.onSelectImage.bind(this),this.onFocusAnswer=this.onFocusAnswer.bind(this),this.onFocusQuestion=this.onFocusQuestion.bind(this),this.onChangeAnswer=this.onChangeAnswer.bind(this),this.onChangeQuestion=this.onChangeQuestion.bind(this),this.onInsertQuestion=this.onInsertQuestion.bind(this),this.onRemoveQuestion=this.onRemoveQuestion.bind(this),this.onMoveDown=this.onMoveDown.bind(this),this.onMoveUp=this.onMoveUp.bind(this)}getMediaUploadButton(e){return(0,t.createElement)(d.Button,{className:"schema-faq-section-button faq-section-add-media",icon:"insert",onClick:e.open},(0,s.__)("Add image","wordpress-seo"))}onFocusQuestion(){this.props.onFocus("question",this.props.index)}onFocusAnswer(){this.props.onFocus("answer",this.props.index)}onChangeQuestion(e){const{index:t,onChange:s,attributes:{answer:o,question:n}}=this.props;s(e,o,n,o,t)}onChangeAnswer(e){const{index:t,onChange:s,attributes:{answer:o,question:n}}=this.props;s(n,e,n,o,t)}onInsertQuestion(){this.props.insertQuestion(this.props.index)}onRemoveQuestion(){this.props.removeQuestion(this.props.index)}onMoveUp(){this.props.isFirst||this.props.onMoveUp(this.props.index)}onMoveDown(){this.props.isLast||this.props.onMoveDown(this.props.index)}getButtons(){const{attributes:e}=this.props;return(0,t.createElement)("div",{className:"schema-faq-section-button-container"},(0,t.createElement)(m.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),(0,t.createElement)(d.Button,{className:"schema-faq-section-button",icon:"trash",label:(0,s.__)("Delete question","wordpress-seo"),onClick:this.onRemoveQuestion}),(0,t.createElement)(d.Button,{className:"schema-faq-section-button",icon:"insert",label:(0,s.__)("Insert question","wordpress-seo"),onClick:this.onInsertQuestion}))}getMover(){return(0,t.createElement)("div",{className:"schema-faq-section-mover"},(0,t.createElement)(d.Button,{className:"editor-block-mover__control",onClick:this.onMoveUp,icon:"arrow-up-alt2",label:(0,s.__)("Move question up","wordpress-seo"),"aria-disabled":this.props.isFirst}),(0,t.createElement)(d.Button,{className:"editor-block-mover__control",onClick:this.onMoveDown,icon:"arrow-down-alt2",label:(0,s.__)("Move question down","wordpress-seo"),"aria-disabled":this.props.isLast}))}onSelectImage(e){const{attributes:{answer:s,question:o},index:n}=this.props;let i=s.slice();const r=(0,t.createElement)("img",{className:`wp-image-${e.id}`,alt:e.alt,src:e.url,style:"max-width:100%;"});i.push?i.push(r):i=[i,r],this.props.onChange(o,i,o,s,n)}static getImageSrc(e){if(!e||!e.filter)return!1;const t=e.filter((e=>e&&e.type&&"img"===e.type))[0];return!!t&&t.props.src}static Content(e){return(0,t.createElement)("div",{className:"schema-faq-section",id:e.id,key:e.id},(0,t.createElement)(T,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),(0,t.createElement)(T,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}shouldComponentUpdate(e){return!(0,l.isShallowEqualObjects)(e,this.props)}render(){const{attributes:e,isSelected:o}=this.props,{id:n,question:i,answer:r}=e;return(0,t.createElement)("div",{className:"schema-faq-section",key:n},(0,t.createElement)(m.RichText,{identifier:n+"-question",className:"schema-faq-question",tagName:"p",key:n+"-question",value:i,onChange:this.onChangeQuestion,onFocus:this.onFocusQuestion,unstableOnFocus:this.onFocusQuestion,placeholder:(0,s.__)("Enter a question","wordpress-seo"),allowedFormats:["core/italic","core/strikethrough","core/link","core/annotation"]}),(0,t.createElement)(m.RichText,{identifier:n+"-answer",className:"schema-faq-answer",tagName:"p",key:n+"-answer",value:r,onChange:this.onChangeAnswer,onFocus:this.onFocusAnswer,unstableOnFocus:this.onFocusAnswer,placeholder:(0,s.__)("Enter the answer to the question","wordpress-seo")}),o&&(0,t.createElement)("div",{className:"schema-faq-section-controls-container"},this.getMover(),this.getButtons()))}}F.propTypes={index:r().number.isRequired,attributes:r().object.isRequired,onChange:r().func.isRequired,insertQuestion:r().func.isRequired,removeQuestion:r().func.isRequired,onFocus:r().func.isRequired,onMoveUp:r().func.isRequired,onMoveDown:r().func.isRequired,isSelected:r().bool.isRequired,isFirst:r().bool.isRequired,isLast:r().bool.isRequired};const k=h(F.Content);class Q extends t.Component{constructor(e){super(e),this.state={focus:""},this.changeQuestion=this.changeQuestion.bind(this),this.insertQuestion=this.insertQuestion.bind(this),this.removeQuestion=this.removeQuestion.bind(this),this.swapQuestions=this.swapQuestions.bind(this),this.moveQuestionDown=this.moveQuestionDown.bind(this),this.moveQuestionUp=this.moveQuestionUp.bind(this),this.setFocus=this.setFocus.bind(this),this.onAddQuestionButtonClick=this.onAddQuestionButtonClick.bind(this)}static generateId(e){return`${e}-${(new Date).getTime()}`}onAddQuestionButtonClick(){this.insertQuestion(null,[],[],!1)}changeQuestion(e,s,o,n,i){const r=this.props.attributes.questions?this.props.attributes.questions.slice():[];if(i>=r.length)return;if(r[i].question!==o||r[i].answer!==n)return;r[i]={id:r[i].id,question:e,answer:s,jsonQuestion:(0,t.renderToString)(e),jsonAnswer:(0,t.renderToString)(s)};const a=F.getImageSrc(s);a&&(r[i].jsonImageSrc=a),this.props.setAttributes({questions:r})}insertQuestion(e=null,t=[],o=[],n=!0){const i=this.props.attributes.questions?this.props.attributes.questions.slice():[];null===e&&(e=i.length-1),i.splice(e+1,0,{id:Q.generateId("faq-question"),question:t,answer:o,jsonQuestion:"",jsonAnswer:""}),this.props.setAttributes({questions:i}),n?setTimeout(this.setFocus.bind(this,"question",e)):(0,c.speak)((0,s.__)("New question added","wordpress-seo"))}swapQuestions(e,t){const s=this.props.attributes.questions?this.props.attributes.questions.slice():[],o=s[e];s[e]=s[t],s[t]=o,this.props.setAttributes({questions:s});const[n,i]=this.state.focus.split(":");n===`${e}`?this.setFocus(i,t):n===`${t}`&&this.setFocus(i,e)}moveQuestionUp(e){this.swapQuestions(e,e-1)}moveQuestionDown(e){this.swapQuestions(e,e+1)}removeQuestion(e){const t=this.props.attributes.questions?this.props.attributes.questions.slice():[];t.splice(e,1),this.props.setAttributes({questions:t});let s=0;t[e]?s=e:t[e-1]&&(s=e-1),this.setFocus("question",s)}setFocus(e,t){const s=`${t}:${e}`;s!==this.state.focus&&this.setState({focus:s})}getAddQuestionButton(){return(0,t.createElement)(d.Button,{icon:"insert",onClick:this.onAddQuestionButtonClick,className:"schema-faq-add-question"},(0,s.__)("Add question","wordpress-seo"))}getQuestions(){const{attributes:e}=this.props;if(!e.questions)return null;const[s]=this.state.focus.split(":");return e.questions.map(((o,n)=>(0,t.createElement)(F,{index:n,key:o.id,attributes:o,insertQuestion:this.insertQuestion,removeQuestion:this.removeQuestion,onChange:this.changeQuestion,onFocus:this.setFocus,isSelected:s===`${n}`,onMoveUp:this.moveQuestionUp,onMoveDown:this.moveQuestionDown,isFirst:0===n,isLast:n===e.questions.length-1})))}static Content(e){const{questions:s,className:o}=e,i=s?s.map(((e,s)=>(0,t.createElement)(k,n({key:s},e)))):null,r=["schema-faq",o].filter((e=>e)).join(" ");return(0,t.createElement)("div",{className:r},i)}render(){const{className:e}=this.props,s=["schema-faq",e].filter((e=>e)).join(" ");return(0,t.createElement)("div",{className:s},(0,t.createElement)("div",null,this.getQuestions()),(0,t.createElement)("div",{className:"schema-faq-buttons"},this.getAddQuestionButton()))}}function A(e){const s=h(m.RichText.Content);return(0,t.createElement)("div",{className:"schema-faq-section",key:e.id},(0,t.createElement)(s,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),(0,t.createElement)(s,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}function M(e){const{questions:s,className:o}=e.attributes,i=h(A),r=s?s.map(((e,s)=>(0,t.createElement)(i,n({key:s},e)))):null,a=["schema-faq",o].filter((e=>e)).join(" ");return(0,t.createElement)("div",{className:a},r)}Q.propTypes={attributes:r().object.isRequired,setAttributes:r().func.isRequired,className:r().string},Q.defaultProps={className:""},M.propTypes={attributes:r().object.isRequired};const R={v13_1:M},I={questions:{type:"array"},additionalListCssClasses:{type:"string"}};(0,o.registerBlockType)("yoast/how-to-block",{title:(0,s.__)("Yoast How-to","wordpress-seo"),description:(0,s.__)("Create a How-to guide in an SEO-friendly way. You can only use one How-to block per post.","wordpress-seo"),icon:"editor-ol",category:"yoast-structured-data-blocks",keywords:[(0,s.__)("How-to","wordpress-seo"),(0,s.__)("How to","wordpress-seo"),(0,s.__)("Schema","wordpress-seo"),(0,s.__)("SEO","wordpress-seo"),(0,s.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{steps:[{id:y.generateId("how-to-step"),name:[],text:[]},{id:y.generateId("how-to-step"),name:[],text:[]}]}},supports:{multiple:!1},attributes:D,edit:({attributes:e,setAttributes:s,className:o})=>(e.steps&&0!==e.steps.length||(e.steps=[{id:y.generateId("how-to-step"),name:[],text:[]}]),(0,t.createElement)(y,{attributes:e,setAttributes:s,className:o})),save:function({attributes:e}){return(0,t.createElement)(y.Content,e)},deprecated:[{attributes:D,save:x.v11_4},{attributes:D,save:x.v8_2}]}),(0,o.registerBlockType)("yoast/faq-block",{title:(0,s.__)("Yoast FAQ","wordpress-seo"),description:(0,s.__)("List your Frequently Asked Questions in an SEO-friendly way.","wordpress-seo"),icon:"editor-ul",category:"yoast-structured-data-blocks",keywords:[(0,s.__)("FAQ","wordpress-seo"),(0,s.__)("Frequently Asked Questions","wordpress-seo"),(0,s.__)("Schema","wordpress-seo"),(0,s.__)("SEO","wordpress-seo"),(0,s.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{questions:[{id:Q.generateId("faq-question"),question:[],answer:[]},{id:Q.generateId("faq-question"),question:[],answer:[]},{id:Q.generateId("faq-question"),question:[],answer:[]}]}},attributes:I,edit:({attributes:e,setAttributes:s,className:o})=>(e.questions&&0!==e.questions.length||(e.questions=[{id:Q.generateId("faq-question"),question:[],answer:[]}]),(0,t.createElement)(Q,{attributes:e,setAttributes:s,className:o})),save:function({attributes:e}){return(0,t.createElement)(Q.Content,e)},deprecated:[{attributes:I,save:R.v13_1}]})})();