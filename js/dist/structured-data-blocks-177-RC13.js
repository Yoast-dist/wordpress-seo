!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=369)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},12:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},134:function(e,t){e.exports=window.wp.blocks},138:function(e,t){e.exports=window.wp.isShallowEqual},14:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},146:function(e,t){e.exports=window.wp.blockEditor},15:function(e,t){e.exports=window.yoast.styledComponents},16:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},17:function(e,t,n){var s=n(69);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}},18:function(e,t,n){var s=n(41),o=n(14);e.exports=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?o(e):t}},2:function(e,t){e.exports=window.wp.i18n},213:function(e,t){e.exports=window.wp.editor},22:function(e,t){e.exports=window.wp.components},221:function(e,t){e.exports=window.wp.a11y},25:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},n.apply(this,arguments)}e.exports=n},29:function(e,t,n){var s=n(88),o=n(89),r=n(90);e.exports=function(e){return s(e)||o(e)||r()}},3:function(e,t){e.exports=window.lodash},369:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(2),r=n(134),i=n(25),a=n.n(i),c=n(37),u=n.n(c),l=n(8),p=n.n(l),d=n(9),h=n.n(d),m=n(14),f=n.n(m),b=n(17),v=n.n(b),y=n(18),w=n.n(y),g=n(12),j=n.n(g),O=n(16),k=n.n(O),x=n(1),S=n.n(x),_=n(15),C=n.n(_),E=n(221),q=n(3);var N=function(e){return function(t){v()(i,t);var n,o,r=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j()(n);if(o){var s=j()(this).constructor;e=Reflect.construct(t,arguments,s)}else e=t.apply(this,arguments);return w()(this,e)});function i(){return p()(this,i),r.apply(this,arguments)}return h()(i,[{key:"render",value:function(){return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(e,this.props)," ")}}]),i}(s.Component)},D=n(138),T=n(22),F=n(146);var R=N(F.RichText),A=N(F.RichText.Content),Q=function(e){v()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=j()(t);if(n){var o=j()(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return w()(this,e)});function i(e){var t;return p()(this,i),(t=r.call(this,e)).onSelectImage=t.onSelectImage.bind(f()(t)),t.onInsertStep=t.onInsertStep.bind(f()(t)),t.onRemoveStep=t.onRemoveStep.bind(f()(t)),t.onMoveStepUp=t.onMoveStepUp.bind(f()(t)),t.onMoveStepDown=t.onMoveStepDown.bind(f()(t)),t.onFocusText=t.onFocusText.bind(f()(t)),t.onFocusTitle=t.onFocusTitle.bind(f()(t)),t.onChangeTitle=t.onChangeTitle.bind(f()(t)),t.onChangeText=t.onChangeText.bind(f()(t)),t}return h()(i,[{key:"onInsertStep",value:function(){this.props.insertStep(this.props.index)}},{key:"onRemoveStep",value:function(){this.props.removeStep(this.props.index)}},{key:"onMoveStepUp",value:function(){this.props.isFirst||this.props.onMoveUp(this.props.index)}},{key:"onMoveStepDown",value:function(){this.props.isLast||this.props.onMoveDown(this.props.index)}},{key:"onFocusTitle",value:function(){this.props.onFocus(this.props.index,"name")}},{key:"onFocusText",value:function(){this.props.onFocus(this.props.index,"text")}},{key:"onChangeTitle",value:function(e){var t=this.props,n=t.onChange,s=t.index,o=t.step,r=o.text;n(e,r,o.name,r,s)}},{key:"onChangeText",value:function(e){var t=this.props,n=t.onChange,s=t.index,o=t.step,r=o.text,i=o.name;n(i,e,i,r,s)}},{key:"getMediaUploadButton",value:function(e){return Object(s.createElement)(T.IconButton,{className:"schema-how-to-step-button how-to-step-add-media",icon:"insert",onClick:e.open},Object(o.__)("Add image","wordpress-seo"))}},{key:"getButtons",value:function(){var e=this.props.step;return Object(s.createElement)("div",{className:"schema-how-to-step-button-container"},!i.getImageSrc(e.text)&&Object(s.createElement)(F.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),Object(s.createElement)(T.IconButton,{className:"schema-how-to-step-button",icon:"trash",label:Object(o.__)("Delete step","wordpress-seo"),onClick:this.onRemoveStep}),Object(s.createElement)(T.IconButton,{className:"schema-how-to-step-button",icon:"insert",label:Object(o.__)("Insert step","wordpress-seo"),onClick:this.onInsertStep}))}},{key:"getMover",value:function(){return Object(s.createElement)("div",{className:"schema-how-to-step-mover"},Object(s.createElement)(T.IconButton,{className:"editor-block-mover__control",onClick:this.onMoveStepUp,icon:"arrow-up-alt2",label:Object(o.__)("Move step up","wordpress-seo"),"aria-disabled":this.props.isFirst}),Object(s.createElement)(T.IconButton,{className:"editor-block-mover__control",onClick:this.onMoveStepDown,icon:"arrow-down-alt2",label:Object(o.__)("Move step down","wordpress-seo"),"aria-disabled":this.props.isLast}))}},{key:"onSelectImage",value:function(e){var t=this.props,n=t.index,o=t.step,r=o.name,i=o.text,a=i.slice(),c=Object(s.createElement)("img",{key:e.id,alt:e.alt,src:e.url});a.push?a.push(c):a=[a,c],this.props.onChange(r,a,r,i,n)}},{key:"shouldComponentUpdate",value:function(e){return!Object(D.isShallowEqualObjects)(e,this.props)}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.step,r=e.isSelected,i=e.subElement,a=e.isUnorderedList,c=n.id,u=n.name,l=n.text;return Object(s.createElement)("li",{className:"schema-how-to-step",key:c},Object(s.createElement)("span",{className:"schema-how-to-step-number"},a?"•":t+1+"."),Object(s.createElement)(R,{className:"schema-how-to-step-name",tagName:"p",key:"".concat(c,"-name"),value:u,onChange:this.onChangeTitle,isSelected:r&&"name"===i,placeholder:Object(o.__)("Enter a step title","wordpress-seo"),unstableOnFocus:this.onFocusTitle,keepPlaceholderOnFocus:!0,formattingControls:["italic","strikethrough","link"]}),Object(s.createElement)(R,{className:"schema-how-to-step-text",tagName:"p",key:"".concat(c,"-text"),value:l,onChange:this.onChangeText,isSelected:r&&"text"===i,placeholder:Object(o.__)("Enter a step description","wordpress-seo"),unstableOnFocus:this.onFocusText,keepPlaceholderOnFocus:!0}),r&&Object(s.createElement)("div",{className:"schema-how-to-step-controls-container"},this.getMover(),this.getButtons()))}}],[{key:"getImageSrc",value:function(e){if(!e||!e.filter)return!1;var t=e.filter((function(e){return e&&e.type&&"img"===e.type}))[0];return!!t&&t.props.src}},{key:"Content",value:function(e){return Object(s.createElement)("li",{className:"schema-how-to-step",id:e.id,key:e.id},Object(s.createElement)(A,{tagName:"strong",className:"schema-how-to-step-name",key:e.id+"-name",value:e.name}),Object(s.createElement)(A,{tagName:"p",className:"schema-how-to-step-text",key:e.id+"-text",value:e.text}))}}]),i}(s.Component);Q.propTypes={index:S.a.number.isRequired,step:S.a.object.isRequired,onChange:S.a.func.isRequired,insertStep:S.a.func.isRequired,removeStep:S.a.func.isRequired,onFocus:S.a.func.isRequired,onMoveUp:S.a.func.isRequired,onMoveDown:S.a.func.isRequired,subElement:S.a.string,isSelected:S.a.bool.isRequired,isFirst:S.a.bool.isRequired,isLast:S.a.bool.isRequired,isUnorderedList:S.a.bool},Q.defaultProps={isUnorderedList:!1,subElement:""};var I,M=n(29),B=n.n(M);function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(e,10)||t}var U=N(F.RichText.Content),P=C()(T.TextControl)(I||(I=k()(["\n\t&&& {\n\t\tmargin-bottom: 32px;\n\t}\n"]))),H=function(e){v()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=j()(t);if(n){var o=j()(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return w()(this,e)});function i(e){var t;p()(this,i),(t=r.call(this,e)).state={focus:""},t.changeStep=t.changeStep.bind(f()(t)),t.insertStep=t.insertStep.bind(f()(t)),t.removeStep=t.removeStep.bind(f()(t)),t.swapSteps=t.swapSteps.bind(f()(t)),t.setFocus=t.setFocus.bind(f()(t)),t.addCSSClasses=t.addCSSClasses.bind(f()(t)),t.getListTypeHelp=t.getListTypeHelp.bind(f()(t)),t.toggleListType=t.toggleListType.bind(f()(t)),t.setDurationText=t.setDurationText.bind(f()(t)),t.setFocusToStep=t.setFocusToStep.bind(f()(t)),t.moveStepUp=t.moveStepUp.bind(f()(t)),t.moveStepDown=t.moveStepDown.bind(f()(t)),t.focusDescription=t.focusDescription.bind(f()(t)),t.addDuration=t.addDuration.bind(f()(t)),t.removeDuration=t.removeDuration.bind(f()(t)),t.onChangeDescription=t.onChangeDescription.bind(f()(t)),t.onChangeDays=t.onChangeDays.bind(f()(t)),t.onChangeHours=t.onChangeHours.bind(f()(t)),t.onChangeMinutes=t.onChangeMinutes.bind(f()(t)),t.onAddStepButtonClick=t.onAddStepButtonClick.bind(f()(t)),t.daysInput=Object(s.createRef)(),t.addDurationButton=Object(s.createRef)();var n=t.getDefaultDurationText();return t.setDefaultDurationText(n),t}return h()(i,[{key:"getDefaultDurationText",value:function(){var e=Object(q.get)(window,"wp.hooks.applyFilters"),t=Object(o.__)("Time needed:","wordpress-seo");return e&&(t=e("wpseo_duration_text",t)),t}},{key:"setDurationText",value:function(e){this.props.setAttributes({durationText:e})}},{key:"setDefaultDurationText",value:function(e){this.props.setAttributes({defaultDurationText:e})}},{key:"onAddStepButtonClick",value:function(){this.insertStep(null,[],[],!1)}},{key:"changeStep",value:function(e,t,n,o,r){var i=this.props.attributes.steps?this.props.attributes.steps.slice():[];if(!(r>=i.length)&&i[r].name===n&&i[r].text===o){i[r]={id:i[r].id,name:e,text:t,jsonName:Object(s.renderToString)(e),jsonText:Object(s.renderToString)(t)};var a=Q.getImageSrc(t);a&&(i[r].jsonImageSrc=a),this.props.setAttributes({steps:i})}}},{key:"insertStep",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=this.props.attributes.steps?this.props.attributes.steps.slice():[];null===e&&(e=r.length-1),r.splice(e+1,0,{id:i.generateId("how-to-step"),name:t,text:n,jsonName:"",jsonText:""}),this.props.setAttributes({steps:r}),s?setTimeout(this.setFocus.bind(this,"".concat(e+1,":name"))):Object(E.speak)(Object(o.__)("New step added","wordpress-seo"))}},{key:"swapSteps",value:function(e,t){var n=this.props.attributes.steps?this.props.attributes.steps.slice():[],s=n[e];n[e]=n[t],n[t]=s,this.props.setAttributes({steps:n});var o=this.state.focus.split(":"),r=u()(o,2),i=r[0],a=r[1];i==="".concat(e)&&this.setFocus("".concat(t,":").concat(a)),i==="".concat(t)&&this.setFocus("".concat(e,":").concat(a))}},{key:"removeStep",value:function(e){var t=this.props.attributes.steps?this.props.attributes.steps.slice():[];t.splice(e,1),this.props.setAttributes({steps:t});var n="description";t[e]?n="".concat(e,":name"):t[e-1]&&(n="".concat(e-1,":text")),this.setFocus(n)}},{key:"setFocus",value:function(e){e!==this.state.focus&&this.setState({focus:e})}},{key:"setFocusToStep",value:function(e,t){this.setFocus("".concat(e,":").concat(t))}},{key:"moveStepUp",value:function(e){this.swapSteps(e,e-1)}},{key:"moveStepDown",value:function(e){this.swapSteps(e,e+1)}},{key:"getSteps",value:function(){var e=this;if(!this.props.attributes.steps)return null;var t=this.state.focus.split(":"),n=u()(t,2),o=n[0],r=n[1];return this.props.attributes.steps.map((function(t,n){return Object(s.createElement)(Q,{key:t.id,step:t,index:n,onChange:e.changeStep,insertStep:e.insertStep,removeStep:e.removeStep,onFocus:e.setFocusToStep,subElement:r,onMoveUp:e.moveStepUp,onMoveDown:e.moveStepDown,isFirst:0===n,isLast:n===e.props.attributes.steps.length-1,isSelected:o==="".concat(n),isUnorderedList:e.props.attributes.unorderedList})}))}},{key:"formatDuration",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return"";var n=e.replace(/^[0]+/,"");return""===n?0:null!==t?Math.min(Math.max(0,parseInt(n,10)),t):Math.max(0,parseInt(n,10))}},{key:"getAddStepButton",value:function(){return Object(s.createElement)(T.IconButton,{icon:"insert",onClick:this.onAddStepButtonClick,className:"schema-how-to-add-step"},Object(o.__)("Add step","wordpress-seo"))}},{key:"addCSSClasses",value:function(e){this.props.setAttributes({additionalListCssClasses:e})}},{key:"toggleListType",value:function(e){this.props.setAttributes({unorderedList:e})}},{key:"getListTypeHelp",value:function(e){return e?Object(o.__)("Showing step items as an unordered list","wordpress-seo"):Object(o.__)("Showing step items as an ordered list.","wordpress-seo")}},{key:"focusDescription",value:function(){this.setFocus("description")}},{key:"onChangeDescription",value:function(e){this.props.setAttributes({description:e,jsonDescription:Object(s.renderToString)(e)})}},{key:"addDuration",value:function(){var e=this;this.props.setAttributes({hasDuration:!0}),setTimeout((function(){return e.daysInput.current.focus()}))}},{key:"removeDuration",value:function(){var e=this;this.props.setAttributes({hasDuration:!1}),setTimeout((function(){e.addDurationButton.current instanceof s.Component||e.addDurationButton.current.focus()}))}},{key:"onChangeDays",value:function(e){var t=this.formatDuration(e.target.value);this.props.setAttributes({days:Object(q.toString)(t)})}},{key:"onChangeHours",value:function(e){var t=this.formatDuration(e.target.value,23);this.props.setAttributes({hours:Object(q.toString)(t)})}},{key:"onChangeMinutes",value:function(e){var t=this.formatDuration(e.target.value,59);this.props.setAttributes({minutes:Object(q.toString)(t)})}},{key:"getDuration",value:function(){var e=this.props.attributes;return e.hasDuration?Object(s.createElement)("fieldset",{className:"schema-how-to-duration"},Object(s.createElement)("span",{className:"schema-how-to-duration-flex-container",role:"presentation"},Object(s.createElement)("legend",{className:"schema-how-to-duration-legend"},e.durationText||this.getDefaultDurationText()),Object(s.createElement)("span",{className:"schema-how-to-duration-time-input"},Object(s.createElement)("label",{htmlFor:"schema-how-to-duration-days",className:"screen-reader-text"},Object(o.__)("days","wordpress-seo")),Object(s.createElement)("input",{id:"schema-how-to-duration-days",className:"schema-how-to-duration-input",type:"number",value:e.days,onChange:this.onChangeDays,placeholder:"DD",ref:this.daysInput}),Object(s.createElement)("label",{htmlFor:"schema-how-to-duration-hours",className:"screen-reader-text"},Object(o.__)("hours","wordpress-seo")),Object(s.createElement)("input",{id:"schema-how-to-duration-hours",className:"schema-how-to-duration-input",type:"number",value:e.hours,onChange:this.onChangeHours,placeholder:"HH"}),Object(s.createElement)("span",{"aria-hidden":"true"},":"),Object(s.createElement)("label",{htmlFor:"schema-how-to-duration-minutes",className:"screen-reader-text"},Object(o.__)("minutes","wordpress-seo")),Object(s.createElement)("input",{id:"schema-how-to-duration-minutes",className:"schema-how-to-duration-input",type:"number",value:e.minutes,onChange:this.onChangeMinutes,placeholder:"MM"}),Object(s.createElement)(T.IconButton,{className:"schema-how-to-duration-delete-button",icon:"trash",label:Object(o.__)("Delete total time","wordpress-seo"),onClick:this.removeDuration})))):Object(s.createElement)(T.IconButton,{onClick:this.addDuration,className:"schema-how-to-duration-button",ref:this.addDurationButton,icon:"insert"},Object(o.__)("Add total time","wordpress-seo"))}},{key:"getSidebar",value:function(e,t,n){return n===this.getDefaultDurationText()&&(n=""),Object(s.createElement)(F.InspectorControls,null,Object(s.createElement)(T.PanelBody,{title:Object(o.__)("Settings","wordpress-seo"),className:"blocks-font-size"},Object(s.createElement)(P,{label:Object(o.__)("CSS class(es) to apply to the steps","wordpress-seo"),value:t,onChange:this.addCSSClasses,help:Object(o.__)("Optional. This can give you better control over the styling of the steps.","wordpress-seo")}),Object(s.createElement)(P,{label:Object(o.__)("Describe the duration of the instruction:","wordpress-seo"),value:n,onChange:this.setDurationText,help:Object(o.__)("Optional. Customize how you want to describe the duration of the instruction","wordpress-seo"),placeholder:this.getDefaultDurationText()}),Object(s.createElement)(T.ToggleControl,{label:Object(o.__)("Unordered list","wordpress-seo"),checked:e||!1,onChange:this.toggleListType,help:this.getListTypeHelp})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=["schema-how-to",e.className].filter((function(e){return e})).join(" "),r=["schema-how-to-steps",t.additionalListCssClasses].filter((function(e){return e})).join(" ");return Object(s.createElement)("div",{className:n},this.getDuration(),Object(s.createElement)(F.RichText,{tagName:"p",className:"schema-how-to-description",value:t.description,isSelected:"description"===this.state.focus,unstableOnFocus:this.focusDescription,onChange:this.onChangeDescription,placeholder:Object(o.__)("Enter a description","wordpress-seo"),keepPlaceholderOnFocus:!0}),Object(s.createElement)("ul",{className:r},this.getSteps()),Object(s.createElement)("div",{className:"schema-how-to-buttons"},this.getAddStepButton()),this.getSidebar(t.unorderedList,t.additionalListCssClasses,t.durationText))}}],[{key:"generateId",value:function(e){return"".concat(e,"-").concat((new Date).getTime())}},{key:"getStepsContent",value:function(e){return e?e.map((function(e){return Object(s.createElement)(Q.Content,a()({},e,{key:e.id}))})):null}},{key:"Content",value:function(e){var t=e.steps,n=e.hasDuration,r=e.days,a=e.hours,c=e.minutes,u=e.description,l=e.unorderedList,p=e.additionalListCssClasses,d=e.className,h=e.durationText,m=e.defaultDurationText,f=["schema-how-to",d].filter((function(e){return e})).join(" "),b=["schema-how-to-steps",p].filter((function(e){return e})).join(" "),v=function(e){var t,n,s,r,i,a=(s=(t={days:L(e.days),hours:L(e.hours),minutes:L(e.minutes)}).hours,r=t.minutes,i=[],0!==(n=t.days)&&i.push(Object(o.sprintf)(Object(o._n)("%d day","%d days",n,"wordpress-seo"),n)),0!==s&&i.push(Object(o.sprintf)(Object(o._n)("%d hour","%d hours",s,"wordpress-seo"),s)),0!==r&&i.push(Object(o.sprintf)(Object(o._n)("%d minute","%d minutes",r,"wordpress-seo"),r)),i);return 1===a.length?a[0]:2===a.length?o.sprintf.apply(void 0,[
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(o.__)("%s and %s","wordpress-seo")].concat(B()(a))):3===a.length?o.sprintf.apply(void 0,[
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(o.__)("%s, %s and %s","wordpress-seo")].concat(B()(a))):""}({days:r,hours:a,minutes:c});return Object(s.createElement)("div",{className:f},n&&"string"==typeof v&&v.length>0&&Object(s.createElement)("p",{className:"schema-how-to-total-time"},Object(s.createElement)("span",{className:"schema-how-to-duration-time-text"},h||m," "),v+". "),Object(s.createElement)(U,{tagName:"p",className:"schema-how-to-description",value:u}),l?Object(s.createElement)("ul",{className:b},i.getStepsContent(t)):Object(s.createElement)("ol",{className:b},i.getStepsContent(t)))}}]),i}(s.Component);function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(e,10)||t}function Y(e){var t,n,s,r,i,a=(s=(t={days:z(e.days),hours:z(e.hours),minutes:z(e.minutes)}).hours,r=t.minutes,i=[],0!==(n=t.days)&&i.push(Object(o.sprintf)(Object(o._n)("%d day","%d days",n,"wordpress-seo"),n)),0!==s&&i.push(Object(o.sprintf)(Object(o._n)("%d hour","%d hours",s,"wordpress-seo"),s)),0!==r&&i.push(Object(o.sprintf)(Object(o._n)("%d minute","%d minutes",r,"wordpress-seo"),r)),i);return 1===a.length?a[0]:2===a.length?o.sprintf.apply(void 0,[
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(o.__)("%s and %s","wordpress-seo")].concat(B()(a))):3===a.length?o.sprintf.apply(void 0,[
/* translators: %s expands to a unit of time (e.g. 1 day). */
Object(o.__)("%s, %s and %s","wordpress-seo")].concat(B()(a))):""}H.propTypes={attributes:S.a.object.isRequired,setAttributes:S.a.func.isRequired,className:S.a.string},H.defaultProps={className:""};var G=function(e){return Object(s.createElement)("li",{className:"schema-how-to-step",key:e.id},Object(s.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",Object(s.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ")};function J(e){var t=e.attributes.steps,n=e.attributes,r=n.hasDuration,i=n.days,c=n.hours,u=n.minutes,l=n.description,p=n.unorderedList,d=n.additionalListCssClasses,h=n.className;t=t?t.map((function(e){return Object(s.createElement)(G,a()({},e,{key:e.id}))})):null;var m=["schema-how-to",h].filter((function(e){return e})).join(" "),f=["schema-how-to-steps",d].filter((function(e){return e})).join(" "),b=Y({days:i,hours:c,minutes:u});return Object(s.createElement)("div",{className:m},r&&"string"==typeof b&&b.length>0&&Object(s.createElement)("p",{className:"schema-how-to-total-time"},Object(o.__)("Time needed:","wordpress-seo")," ",b+". "),Object(s.createElement)("p",{className:"schema-how-to-description"},l)," ",p?Object(s.createElement)("ul",{className:f},t):Object(s.createElement)("ol",{className:f},t))}function K(e){return Object(s.createElement)("li",{className:"schema-how-to-step",key:e.id},Object(s.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",Object(s.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ")}function V(e){var t=e.attributes,n=t.steps,o=t.hasDuration,r=t.days,i=t.hours,c=t.minutes,u=t.description,l=t.unorderedList,p=t.additionalListCssClasses,d=t.className,h=t.durationText,m=t.defaultDurationText,f=["schema-how-to",d].filter((function(e){return e})).join(" "),b=["schema-how-to-steps",p].filter((function(e){return e})).join(" "),v=Y({days:r,hours:i,minutes:c}),y=n.map((function(e){return Object(s.createElement)(K,a()({},e,{key:e.id}))}));return Object(s.createElement)("div",{className:f},o&&"string"==typeof v&&v.length>0&&Object(s.createElement)("p",{className:"schema-how-to-total-time"},Object(s.createElement)("span",{className:"schema-how-to-duration-time-text"},h||m," "),v+". "),Object(s.createElement)("p",{className:"schema-how-to-description"},u)," ",l?Object(s.createElement)("ul",{className:b},y):Object(s.createElement)("ol",{className:b},y))}J.propTypes={attributes:S.a.object},V.propTypes={attributes:S.a.object.isRequired};var W={v8_2:J,v11_4:V},X={hasDuration:{type:"boolean"},days:{type:"string"},hours:{type:"string"},minutes:{type:"string"},description:{type:"array",source:"children",selector:".schema-how-to-description"},jsonDescription:{type:"string"},steps:{type:"array"},additionalListCssClasses:{type:"string"},unorderedList:{type:"boolean"},durationText:{type:"string"},defaultDurationText:{type:"string"}},Z=n(213);var $=N(Z.RichText.Content),ee=function(e){v()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=j()(t);if(n){var o=j()(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return w()(this,e)});function i(e){var t;return p()(this,i),(t=r.call(this,e)).onSelectImage=t.onSelectImage.bind(f()(t)),t.onFocusAnswer=t.onFocusAnswer.bind(f()(t)),t.onFocusQuestion=t.onFocusQuestion.bind(f()(t)),t.onChangeAnswer=t.onChangeAnswer.bind(f()(t)),t.onChangeQuestion=t.onChangeQuestion.bind(f()(t)),t.onInsertQuestion=t.onInsertQuestion.bind(f()(t)),t.onRemoveQuestion=t.onRemoveQuestion.bind(f()(t)),t.onMoveDown=t.onMoveDown.bind(f()(t)),t.onMoveUp=t.onMoveUp.bind(f()(t)),t}return h()(i,[{key:"getMediaUploadButton",value:function(e){return Object(s.createElement)(T.IconButton,{className:"schema-faq-section-button faq-section-add-media",icon:"insert",onClick:e.open},Object(o.__)("Add image","wordpress-seo"))}},{key:"onFocusQuestion",value:function(){this.props.onFocus("question",this.props.index)}},{key:"onFocusAnswer",value:function(){this.props.onFocus("answer",this.props.index)}},{key:"onChangeQuestion",value:function(e){var t=this.props,n=t.index,s=t.onChange,o=t.attributes,r=o.answer;s(e,r,o.question,r,n)}},{key:"onChangeAnswer",value:function(e){var t=this.props,n=t.index,s=t.onChange,o=t.attributes,r=o.answer,i=o.question;s(i,e,i,r,n)}},{key:"onInsertQuestion",value:function(){this.props.insertQuestion(this.props.index)}},{key:"onRemoveQuestion",value:function(){this.props.removeQuestion(this.props.index)}},{key:"onMoveUp",value:function(){this.props.isFirst||this.props.onMoveUp(this.props.index)}},{key:"onMoveDown",value:function(){this.props.isLast||this.props.onMoveDown(this.props.index)}},{key:"getButtons",value:function(){var e=this.props.attributes;return Object(s.createElement)("div",{className:"schema-faq-section-button-container"},Object(s.createElement)(Z.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),Object(s.createElement)(T.IconButton,{className:"schema-faq-section-button",icon:"trash",label:Object(o.__)("Delete question","wordpress-seo"),onClick:this.onRemoveQuestion}),Object(s.createElement)(T.IconButton,{className:"schema-faq-section-button",icon:"insert",label:Object(o.__)("Insert question","wordpress-seo"),onClick:this.onInsertQuestion}))}},{key:"getMover",value:function(){return Object(s.createElement)("div",{className:"schema-faq-section-mover"},Object(s.createElement)(T.IconButton,{className:"editor-block-mover__control",onClick:this.onMoveUp,icon:"arrow-up-alt2",label:Object(o.__)("Move question up","wordpress-seo"),"aria-disabled":this.props.isFirst}),Object(s.createElement)(T.IconButton,{className:"editor-block-mover__control",onClick:this.onMoveDown,icon:"arrow-down-alt2",label:Object(o.__)("Move question down","wordpress-seo"),"aria-disabled":this.props.isLast}))}},{key:"onSelectImage",value:function(e){var t=this.props,n=t.attributes,o=n.answer,r=n.question,i=t.index,a=o.slice(),c=Object(s.createElement)("img",{key:e.id,alt:e.alt,src:e.url});a.push?a.push(c):a=[a,c],this.props.onChange(r,a,r,o,i)}},{key:"shouldComponentUpdate",value:function(e){return!Object(D.isShallowEqualObjects)(e,this.props)}},{key:"render",value:function(){var e=this.props,t=e.subElement,n=e.attributes,r=e.isSelected,i=n.id,a=n.question,c=n.answer;return Object(s.createElement)("div",{className:"schema-faq-section",key:i},Object(s.createElement)(Z.RichText,{className:"schema-faq-question",tagName:"p",key:i+"-question",value:a,onChange:this.onChangeQuestion,isSelected:r&&"question"===t,unstableOnFocus:this.onFocusQuestion,placeholder:Object(o.__)("Enter a question","wordpress-seo"),keepPlaceholderOnFocus:!0,formattingControls:["italic","strikethrough","link"]}),Object(s.createElement)(Z.RichText,{className:"schema-faq-answer",tagName:"p",key:i+"-answer",value:c,onChange:this.onChangeAnswer,isSelected:r&&"answer"===t,unstableOnFocus:this.onFocusAnswer,placeholder:Object(o.__)("Enter the answer to the question","wordpress-seo"),keepPlaceholderOnFocus:!0}),r&&Object(s.createElement)("div",{className:"schema-faq-section-controls-container"},this.getMover(),this.getButtons()))}}],[{key:"getImageSrc",value:function(e){if(!e||!e.filter)return!1;var t=e.filter((function(e){return e&&e.type&&"img"===e.type}))[0];return!!t&&t.props.src}},{key:"Content",value:function(e){return Object(s.createElement)("div",{className:"schema-faq-section",id:e.id,key:e.id},Object(s.createElement)($,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),Object(s.createElement)($,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}}]),i}(s.Component);ee.propTypes={index:S.a.number.isRequired,attributes:S.a.object.isRequired,onChange:S.a.func.isRequired,insertQuestion:S.a.func.isRequired,removeQuestion:S.a.func.isRequired,onFocus:S.a.func.isRequired,onMoveUp:S.a.func.isRequired,onMoveDown:S.a.func.isRequired,subElement:S.a.string,isSelected:S.a.bool.isRequired,isFirst:S.a.bool.isRequired,isLast:S.a.bool.isRequired},ee.defaultProps={subElement:""};var te=N(ee.Content),ne=function(e){v()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=j()(t);if(n){var o=j()(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return w()(this,e)});function i(e){var t;return p()(this,i),(t=r.call(this,e)).state={focus:""},t.changeQuestion=t.changeQuestion.bind(f()(t)),t.insertQuestion=t.insertQuestion.bind(f()(t)),t.removeQuestion=t.removeQuestion.bind(f()(t)),t.swapQuestions=t.swapQuestions.bind(f()(t)),t.moveQuestionDown=t.moveQuestionDown.bind(f()(t)),t.moveQuestionUp=t.moveQuestionUp.bind(f()(t)),t.setFocus=t.setFocus.bind(f()(t)),t.onAddQuestionButtonClick=t.onAddQuestionButtonClick.bind(f()(t)),t}return h()(i,[{key:"onAddQuestionButtonClick",value:function(){this.insertQuestion(null,[],[],!1)}},{key:"changeQuestion",value:function(e,t,n,o,r){var i=this.props.attributes.questions?this.props.attributes.questions.slice():[];if(!(r>=i.length)&&i[r].question===n&&i[r].answer===o){i[r]={id:i[r].id,question:e,answer:t,jsonQuestion:Object(s.renderToString)(e),jsonAnswer:Object(s.renderToString)(t)};var a=ee.getImageSrc(t);a&&(i[r].jsonImageSrc=a),this.props.setAttributes({questions:i})}}},{key:"insertQuestion",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=this.props.attributes.questions?this.props.attributes.questions.slice():[];null===e&&(e=r.length-1),r.splice(e+1,0,{id:i.generateId("faq-question"),question:t,answer:n,jsonQuestion:"",jsonAnswer:""}),this.props.setAttributes({questions:r}),s?setTimeout(this.setFocus.bind(this,"question",e)):Object(E.speak)(Object(o.__)("New question added","wordpress-seo"))}},{key:"swapQuestions",value:function(e,t){var n=this.props.attributes.questions?this.props.attributes.questions.slice():[],s=n[e];n[e]=n[t],n[t]=s,this.props.setAttributes({questions:n});var o=this.state.focus.split(":"),r=u()(o,2),i=r[0],a=r[1];i==="".concat(e)?this.setFocus(a,t):i==="".concat(t)&&this.setFocus(a,e)}},{key:"moveQuestionUp",value:function(e){this.swapQuestions(e,e-1)}},{key:"moveQuestionDown",value:function(e){this.swapQuestions(e,e+1)}},{key:"removeQuestion",value:function(e){var t=this.props.attributes.questions?this.props.attributes.questions.slice():[];t.splice(e,1),this.props.setAttributes({questions:t});var n=0;t[e]?n=e:t[e-1]&&(n=e-1),this.setFocus("question",n)}},{key:"setFocus",value:function(e,t){var n="".concat(t,":").concat(e);n!==this.state.focus&&this.setState({focus:n})}},{key:"getAddQuestionButton",value:function(){return Object(s.createElement)(T.IconButton,{icon:"insert",onClick:this.onAddQuestionButtonClick,className:"schema-faq-add-question"},Object(o.__)("Add question","wordpress-seo"))}},{key:"getQuestions",value:function(){var e=this,t=this.props.attributes;if(!t.questions)return null;var n=this.state.focus.split(":"),o=u()(n,2),r=o[0],i=o[1];return t.questions.map((function(n,o){return Object(s.createElement)(ee,{index:o,key:n.id,attributes:n,insertQuestion:e.insertQuestion,removeQuestion:e.removeQuestion,onChange:e.changeQuestion,onFocus:e.setFocus,isSelected:r==="".concat(o),subElement:i,onMoveUp:e.moveQuestionUp,onMoveDown:e.moveQuestionDown,isFirst:0===o,isLast:o===t.questions.length-1})}))}},{key:"render",value:function(){var e=["schema-faq",this.props.className].filter((function(e){return e})).join(" ");return Object(s.createElement)("div",{className:e},Object(s.createElement)("div",null,this.getQuestions()),Object(s.createElement)("div",{className:"schema-faq-buttons"},this.getAddQuestionButton()))}}],[{key:"generateId",value:function(e){return"".concat(e,"-").concat((new Date).getTime())}},{key:"Content",value:function(e){var t=e.questions,n=e.className,o=t?t.map((function(e,t){return Object(s.createElement)(te,a()({key:t},e))})):null,r=["schema-faq",n].filter((function(e){return e})).join(" ");return Object(s.createElement)("div",{className:r},o)}}]),i}(s.Component);function se(e){var t=N(F.RichText.Content);return Object(s.createElement)("div",{className:"schema-faq-section",key:e.id},Object(s.createElement)(t,{tagName:"strong",className:"schema-faq-question",key:e.id+"-question",value:e.question}),Object(s.createElement)(t,{tagName:"p",className:"schema-faq-answer",key:e.id+"-answer",value:e.answer}))}function oe(e){var t=e.attributes,n=t.questions,o=t.className,r=N(se),i=n?n.map((function(e,t){return Object(s.createElement)(r,a()({key:t},e))})):null,c=["schema-faq",o].filter((function(e){return e})).join(" ");return Object(s.createElement)("div",{className:c},i)}ne.propTypes={attributes:S.a.object.isRequired,setAttributes:S.a.func.isRequired,className:S.a.string},ne.defaultProps={className:""},oe.propTypes={attributes:S.a.object.isRequired};var re={v13_1:oe},ie={questions:{type:"array"},additionalListCssClasses:{type:"string"}};Object(r.registerBlockType)("yoast/how-to-block",{title:Object(o.__)("Yoast How-to","wordpress-seo"),description:Object(o.__)("Create a How-to guide in an SEO-friendly way. You can only use one How-to block per post.","wordpress-seo"),icon:"editor-ol",category:"yoast-structured-data-blocks",keywords:[Object(o.__)("How-to","wordpress-seo"),Object(o.__)("How to","wordpress-seo"),Object(o.__)("Schema","wordpress-seo"),Object(o.__)("SEO","wordpress-seo"),Object(o.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{steps:[{id:H.generateId("how-to-step"),name:[],text:[]},{id:H.generateId("how-to-step"),name:[],text:[]}]}},supports:{multiple:!1},attributes:X,edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className;return t.steps&&0!==t.steps.length||(t.steps=[{id:H.generateId("how-to-step"),name:[],text:[]}]),Object(s.createElement)(H,{attributes:t,setAttributes:n,className:o})},save:function(e){var t=e.attributes;return Object(s.createElement)(H.Content,t)},deprecated:[{attributes:X,save:W.v11_4},{attributes:X,save:W.v8_2}]}),Object(r.registerBlockType)("yoast/faq-block",{title:Object(o.__)("Yoast FAQ","wordpress-seo"),description:Object(o.__)("List your Frequently Asked Questions in an SEO-friendly way. You can only use one FAQ block per post.","wordpress-seo"),icon:"editor-ul",category:"yoast-structured-data-blocks",keywords:[Object(o.__)("FAQ","wordpress-seo"),Object(o.__)("Frequently Asked Questions","wordpress-seo"),Object(o.__)("Schema","wordpress-seo"),Object(o.__)("SEO","wordpress-seo"),Object(o.__)("Structured Data","wordpress-seo-premium")],example:{attributes:{questions:[{id:ne.generateId("faq-question"),question:[],answer:[]},{id:ne.generateId("faq-question"),question:[],answer:[]},{id:ne.generateId("faq-question"),question:[],answer:[]}]}},attributes:ie,edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className;return t.questions&&0!==t.questions.length||(t.questions=[{id:ne.generateId("faq-question"),question:[],answer:[]}]),Object(s.createElement)(ne,{attributes:t,setAttributes:n,className:o})},save:function(e){var t=e.attributes;return Object(s.createElement)(ne.Content,t)},deprecated:[{attributes:ie,save:re.v13_1}]})},37:function(e,t,n){var s=n(95),o=n(96),r=n(97);e.exports=function(e,t){return s(e)||o(e,t)||r()}},41:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},69:function(e,t){function n(t,s){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,s)}e.exports=n},8:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},88:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},89:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},9:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}e.exports=function(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}},90:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},95:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},96:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],_n=!0,s=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(_n=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);_n=!0);}catch(e){s=!0,o=e}finally{try{_n||null==i.return||i.return()}finally{if(s)throw o}}return n}}},97:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}});