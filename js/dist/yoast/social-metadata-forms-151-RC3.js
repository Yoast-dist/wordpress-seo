!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=t.SET_SOCIAL_TITLE="SET_SOCIAL_TITLE",n=t.SET_SOCIAL_DESCRIPTION="SET_SOCIAL_DESCRIPTION",r=t.SET_SOCIAL_IMAGE_URL="SET_SOCIAL_IMAGE_URL",a=t.SET_SOCIAL_IMAGE_TYPE="SET_SOCIAL_IMAGE_TYPE",l=t.SET_SOCIAL_IMAGE_ID="SET_SOCIAL_IMAGE_ID",s=t.SET_SOCIAL_IMAGE="SET_SOCIAL_IMAGE",c=t.CLEAR_SOCIAL_IMAGE="CLEAR_SOCIAL_IMAGE";t.setSocialPreviewTitle=((e,t)=>({type:o,platform:t,title:e})),t.setSocialPreviewDescription=((e,t)=>({type:n,platform:t,description:e})),t.setSocialPreviewImageUrl=((e,t)=>({type:r,platform:t,imageUrl:e})),t.setSocialPreviewImageType=((e,t)=>({type:a,platform:t,imageType:e})),t.setSocialPreviewImageId=((e,t)=>({type:l,platform:t,imageId:e})),t.setSocialPreviewImage=((e,t)=>({type:s,platform:t,image:e})),t.clearSocialPreviewImage=(e=>({type:c,platform:e}))},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.yoast.replacementVariableEditor},function(e,t,i){e.exports=i(14)()},function(e,t){e.exports=React},function(e,t){e.exports=window.yoast.styledComponents},function(e,t,i){"use strict";window.yoast=window.yoast||{},window.yoast.socialMetadataForms=i(7)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectorsFactory=t.actions=t.SocialMetadataPreviewForm=t.socialReducer=void 0;var o=i(8);Object.defineProperty(t,"socialReducer",{enumerable:!0,get:function(){return o.socialReducer}});var n=i(11);Object.defineProperty(t,"SocialMetadataPreviewForm",{enumerable:!0,get:function(){return l(n).default}});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(0)),a=l(i(18));function l(e){return e&&e.__esModule?e:{default:e}}t.actions=r,t.selectorsFactory=a.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(9);Object.defineProperty(t,"socialReducer",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},n=i(10),r=i(0);const a={title:"",description:"",warnings:[],image:{bytes:null,type:null,height:null,width:null,url:"",id:null,alt:""}};function l(e=a,t){switch(t.type){case r.SET_SOCIAL_TITLE:return o({},e,{title:t.title});case r.SET_SOCIAL_DESCRIPTION:return o({},e,{description:t.description});case r.SET_SOCIAL_IMAGE:return o({},e,{image:o({},t.image)});case r.SET_SOCIAL_IMAGE_URL:return o({},e,{image:o({},e.image,{url:t.imageUrl})});case r.SET_SOCIAL_IMAGE_TYPE:return o({},e,{image:o({},e.image,{type:t.imageType})});case r.SET_SOCIAL_IMAGE_ID:return o({},e,{image:o({},e.image,{id:t.imageId})});case r.CLEAR_SOCIAL_IMAGE:return o({},e,{image:{bytes:null,type:null,height:null,width:null,url:"",id:null,alt:""}});default:return e}}function s(e,t){return(i,o)=>{const n=o.platform;return void 0===i?a:n!==t?i:e(i,o)}}const c=(0,n.combineReducers)({facebook:s(l,"facebook"),twitter:s(l,"twitter")});t.default=c},function(e,t){e.exports=window.yoast.redux},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withCaretStyle=void 0;var o=i(1),n=i(12),r=i(2),a=i(13),l=p(i(3)),s=i(4),c=p(s),u=p(i(5)),d=p(i(16));function p(e){return e&&e.__esModule?e:{default:e}}const m=e=>e?a.colors.$color_snippet_focus:a.colors.$color_snippet_hover,f=u.default.div.withConfig({displayName:"SocialMetadataPreviewForm__CaretContainer",componentId:"qzuyqr-0"})(["position:relative;"]),g=u.default.div.withConfig({displayName:"SocialMetadataPreviewForm__Caret",componentId:"qzuyqr-1"})(["display:",";::before{position:absolute;top:-2px;",":-25px;width:24px;height:24px;background-image:url( "," );color:",';background-size:24px;background-repeat:no-repeat;background-position:center;content:"";}'],e=>e.isActive||e.isHovered?"block":"none",(0,n.getDirectionalStyle)("left","right"),e=>(0,n.getDirectionalStyle)((0,a.angleRight)(m(e.isActive)),(0,a.angleLeft)(m(e.isActive))),e=>m(e.isActive));g.propTypes={isActive:l.default.bool,isHovered:l.default.bool},g.defaultProps={isActive:!1,isHovered:!1};const I=e=>(function t(i){t.propTypes={isActive:l.default.bool.isRequired,isHovered:l.default.bool.isRequired};const o=i.isActive,n=i.isHovered,r=function(e,t){var i={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=e[o]);return i}(i,["isActive","isHovered"]);return c.default.createElement(f,null,c.default.createElement(g,{isActive:o,isHovered:n}),c.default.createElement(e,r))});t.withCaretStyle=I;const v=I(d.default);class _ extends s.Component{constructor(e){super(e),this.onImageEnter=e.onMouseHover.bind(this,"image"),this.onTitleEnter=e.onMouseHover.bind(this,"title"),this.onDescriptionEnter=e.onMouseHover.bind(this,"description"),this.onLeave=e.onMouseHover.bind(this,""),this.onImageSelectBlur=e.onSelect.bind(this,""),this.onSelectTitleEditor=this.onSelectEditor.bind(this,"title"),this.onSelectDescriptionEditor=this.onSelectEditor.bind(this,"description"),this.onDeselectEditor=this.onSelectEditor.bind(this,""),this.onTitleEditorRef=this.onSetEditorRef.bind(this,"title"),this.onDescriptionEditorRef=this.onSetEditorRef.bind(this,"description")}onSelectEditor(e){this.props.onSelect(e)}onSetEditorRef(e,t){this.props.setEditorRef(e,t)}render(){var e=this.props;const t=e.socialMediumName,i=e.onSelectImageClick,a=e.onRemoveImageClick,l=e.title,u=e.titleInputPlaceholder,d=e.description,p=e.descriptionInputPlaceholder,m=e.onTitleChange,f=e.onDescriptionChange,g=e.hoveredField,I=e.activeField,_=e.isPremium,y=e.replacementVariables,E=e.recommendedReplacementVariables,h=e.imageWarnings,b=e.imageUrl,S=e.idSuffix,w=!!b,C=(0,o.sprintf)((0,o.__)("%s image","yoast-components"),t),T=(0,o.sprintf)((0,o.__)("%s title","yoast-components"),t),R=(0,o.sprintf)((0,o.__)("%s description","yoast-components"),t),O=t.toLowerCase();return c.default.createElement(s.Fragment,null,c.default.createElement(v,{title:C,onClick:i,onRemoveImageClick:a,warnings:h,imageSelected:w,onMouseEnter:this.onImageEnter,onMouseLeave:this.onLeave,isActive:"image"===I,isHovered:"image"===g,imageUrl:b,isPremium:_,imageUrlInputId:(0,n.join)([O,"url-input",S]),selectImageButtonId:(0,n.join)([O,"select-button",S]),replaceImageButtonId:(0,n.join)([O,"replace-button",S]),removeImageButtonId:(0,n.join)([O,"remove-button",S])}),c.default.createElement(r.ReplacementVariableEditor,{onChange:m,content:l,placeholder:u,replacementVariables:y,recommendedReplacementVariables:E,type:"title",fieldId:(0,n.join)([O,"title-input",S]),label:T,onMouseEnter:this.onTitleEnter,onMouseLeave:this.onLeave,isActive:"title"===I,isHovered:"title"===g,withCaret:!0,onFocus:this.onSelectTitleEditor,onBlur:this.onDeselectEditor,editorRef:this.onTitleEditorRef}),c.default.createElement(r.ReplacementVariableEditor,{onChange:f,content:d,placeholder:p,replacementVariables:y,recommendedReplacementVariables:E,type:"description",fieldId:(0,n.join)([O,"description-input",S]),label:R,onMouseEnter:this.onDescriptionEnter,onMouseLeave:this.onLeave,isActive:"description"===I,isHovered:"description"===g,withCaret:!0,onFocus:this.onSelectDescriptionEditor,onBlur:this.onDeselectEditor,editorRef:this.onDescriptionEditorRef}))}}_.propTypes={socialMediumName:l.default.oneOf(["Twitter","Facebook"]).isRequired,onSelectImageClick:l.default.func.isRequired,onRemoveImageClick:l.default.func.isRequired,title:l.default.string.isRequired,description:l.default.string.isRequired,onTitleChange:l.default.func.isRequired,onDescriptionChange:l.default.func.isRequired,isPremium:l.default.bool,hoveredField:l.default.string,activeField:l.default.string,onSelect:l.default.func,replacementVariables:r.replacementVariablesShape,recommendedReplacementVariables:l.default.arrayOf(l.default.string),imageWarnings:l.default.array,imageUrl:l.default.string,titleInputPlaceholder:l.default.string,descriptionInputPlaceholder:l.default.string,setEditorRef:l.default.func,onMouseHover:l.default.func,idSuffix:l.default.string},_.defaultProps={replacementVariables:[],recommendedReplacementVariables:[],imageWarnings:[],hoveredField:"",activeField:"",onSelect:()=>{},imageUrl:"",titleInputPlaceholder:"",descriptionInputPlaceholder:"",isPremium:!1,setEditorRef:()=>{},onMouseHover:()=>{},idSuffix:""},t.default=_},function(e,t){e.exports=window.yoast.helpers},function(e,t){e.exports=window.yoast.styleGuide},function(e,t,i){"use strict";var o=i(15);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,r,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return i.PropTypes=i,i}},function(e,t,i){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),n=i(17),r=i(2),a=u(i(3)),l=i(4),s=u(l),c=u(i(5));function u(e){return e&&e.__esModule?e:{default:e}}const d=(0,c.default)(r.StandardButton).withConfig({displayName:"ImageSelect__UndoButton",componentId:"sc-14m0d81-0"})(["background:none!important;border:none;padding:0!important;color:#a00;text-decoration:underline;cursor:pointer;box-shadow:none;&:hover{color:#F00;}&:focus{color:#F00;}"]),p=(0,c.default)(n.InputField).withConfig({displayName:"ImageSelect__UrlInputField",componentId:"sc-14m0d81-1"})(["min-width:100%;"]),m=c.default.div.withConfig({displayName:"ImageSelect__ColumnWrapper",componentId:"sc-14m0d81-2"})(["display:flex;flex-direction:column;"]),f=c.default.div.withConfig({displayName:"ImageSelect__RowWrapper",componentId:"sc-14m0d81-3"})(["display:flex;margin:10px 0 0 0;"]),g=c.default.div.withConfig({displayName:"ImageSelect__DivWithMargin",componentId:"sc-14m0d81-4"})(["margin-top:24px;"]),I=({imageSelected:e,onClick:t,onRemoveImageClick:i,selectImageButtonId:n,replaceImageButtonId:a,removeImageButtonId:c})=>s.default.createElement(l.Fragment,null,s.default.createElement(r.StandardButton,{id:e?a:n,onClick:t},e?(0,o.__)("Replace image","yoast-components"):(0,o.__)("Select image","yoast-components")),e&&s.default.createElement(d,{id:c,onClick:i},(0,o.__)("Remove image","yoast-components")));I.propTypes={imageSelected:a.default.bool.isRequired,onClick:a.default.func.isRequired,onRemoveImageClick:a.default.func.isRequired,selectImageButtonId:a.default.string.isRequired,replaceImageButtonId:a.default.string.isRequired,removeImageButtonId:a.default.string.isRequired};const v=({title:e,warnings:t,imageSelected:i,onClick:o,onRemoveImageClick:r,imageUrl:a,isPremium:l,onMouseEnter:c,onMouseLeave:u,imageUrlInputId:d,selectImageButtonId:v,replaceImageButtonId:_,removeImageButtonId:y})=>{const E={imageSelected:i,onClick:o,onRemoveImageClick:r,selectImageButtonId:v,replaceImageButtonId:_,removeImageButtonId:y};return s.default.createElement(g,{onMouseEnter:c,onMouseLeave:u},s.default.createElement(n.SimulatedLabel,null,e),t.length>0&&i&&t.map((e,t)=>s.default.createElement(n.Alert,{key:`warning${t}`,type:"warning"},e)),l?s.default.createElement(I,E):s.default.createElement(m,null,s.default.createElement(p,{id:d,value:a,disabled:"disabled"}),s.default.createElement(f,null,s.default.createElement(I,E))))};v.propTypes={title:a.default.string.isRequired,imageSelected:a.default.bool.isRequired,isPremium:a.default.bool.isRequired,warnings:a.default.arrayOf(a.default.string),imageUrl:a.default.string,onMouseEnter:a.default.func,onMouseLeave:a.default.func,imageUrlInputId:a.default.string,onClick:a.default.func,onRemoveImageClick:a.default.func,selectImageButtonId:a.default.string,replaceImageButtonId:a.default.string,removeImageButtonId:a.default.string},v.defaultProps={warnings:[],imageUrl:"",onMouseEnter:()=>{},onMouseLeave:()=>{},onClick:()=>{},onRemoveImageClick:()=>{},imageUrlInputId:"",selectImageButtonId:"",replaceImageButtonId:"",removeImageButtonId:""},t.default=v},function(e,t){e.exports=window.yoast.componentsNew},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(19);t.default=(e=>{const t={getFacebookData:t=>(0,o.get)(t,`${e}.facebook`,{}),getFacebookTitle:e=>t.getFacebookData(e).title,getFacebookDescription:e=>t.getFacebookData(e).description,getFacebookImageUrl:e=>t.getFacebookData(e).image.url,getFacebookImageType:e=>t.getFacebookData(e).image.type,getTwitterData:t=>(0,o.get)(t,`${e}.twitter`,{}),getTwitterTitle:e=>t.getTwitterData(e).title,getTwitterDescription:e=>t.getTwitterData(e).description,getTwitterImageUrl:e=>t.getTwitterData(e).image.url,getTwitterImageType:e=>t.getTwitterData(e).image.type};return t})},function(e,t){e.exports=window.lodash}]);