(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.i18n,o=window.wp.components,r=window.yoast.componentsNew,n=window.yoast.helpers,a=window.yoast.propTypes;var l=e.n(a);const i=window.yoast.styledComponents;var c=e.n(i);const d=c().div`
	display: flex;
	margin-top: 8px;
`;class p extends t.Component{render(){return(0,t.createElement)(d,null,(0,t.createElement)(r.Toggle,{id:this.props.id,labelText:(0,s.__)("Mark as cornerstone content","wordpress-seo"),isEnabled:this.props.isEnabled,onSetToggleState:this.props.onToggle,onToggleDisabled:this.props.onToggleDisabled}))}}p.propTypes={id:l().string,isEnabled:l().bool,onToggle:l().func,onToggleDisabled:l().func},p.defaultProps={id:"cornerstone-toggle",isEnabled:!0,onToggle:()=>{},onToggleDisabled:()=>{}};const u=p;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},h.apply(this,arguments)}const m=c()(r.Collapsible)`
	h2 > button {
		padding-left: 24px;
		padding-top: 16px;

		&:hover {
			background-color: #f0f0f0;
		}
	}

	div[class^="collapsible_content"] {
		padding: 24px 0;
		margin: 0 24px;
		border-top: 1px solid rgba(0,0,0,0.2);
	}

`,g=e=>(0,t.createElement)(m,h({hasPadding:!0,hasSeparator:!0},e)),y=e=>{const[s,o]=(0,t.useState)(!1),{prefixIcon:n}=e;return(0,t.createElement)("div",{className:"yoast components-panel__body "+(s?"is-opened":"")},(0,t.createElement)("h2",{className:"components-panel__body-title"},(0,t.createElement)("button",{onClick:function(){o(!s)},className:"components-button components-panel__body-toggle",type:"button",id:e.buttonId},(0,t.createElement)("span",{className:"yoast-icon-span",style:{fill:`${n&&n.color||""}`}},n&&(0,t.createElement)(r.SvgIcon,{icon:n.icon,color:n.color,size:n.size})),(0,t.createElement)("span",{className:"yoast-title-container"},(0,t.createElement)("div",{className:"yoast-title"},e.title),(0,t.createElement)("div",{className:"yoast-subtitle"},e.subTitle)),e.hasBetaBadgeLabel&&(0,t.createElement)(r.BetaBadge,null),(0,t.createElement)("span",{className:"yoast-chevron","aria-hidden":"true"}))),s&&e.children)},b=y;y.propTypes={title:l().string.isRequired,children:l().oneOfType([l().node,l().arrayOf(l().node)]).isRequired,prefixIcon:l().object,subTitle:l().string,hasBetaBadgeLabel:l().bool,buttonId:l().string},y.defaultProps={prefixIcon:null,subTitle:"",hasBetaBadgeLabel:!1,buttonId:null};const w=(0,n.makeOutboundLink)();function f({isCornerstone:e,onChange:a,learnMoreUrl:l,location:i}){const c="metabox"===i?g:b;return(0,t.createElement)(c,{id:(0,n.join)(["yoast-cornerstone-collapsible",i]),title:(0,s.__)("Cornerstone content","wordpress-seo")},(0,t.createElement)(r.HelpText,null,(0,s.__)("Cornerstone content should be the most important and extensive articles on your site.","wordpress-seo")+" ",(0,t.createElement)(w,{href:l},(0,s.__)("Learn more about Cornerstone Content.","wordpress-seo"))),(0,t.createElement)(u,{id:(0,n.join)(["yoast-cornerstone",i]),isEnabled:e,onToggle:a}),(0,t.createElement)(o.Slot,{name:"YoastAfterCornerstoneToggle"}))}f.propTypes={isCornerstone:l().bool,onChange:l().func,learnMoreUrl:l().string.isRequired,location:l().string},f.defaultProps={isCornerstone:!0,onChange:()=>{},location:""};const k=window.wp.compose,_=window.wp.data,x=window.yoast.externals.contexts,E=window.wp.apiFetch;var v=e.n(E);const C=c().div`
	min-width: 600px;

	@media screen and ( max-width: 680px ) {
		min-width: 0;
		width: 86vw;
	}
`,R=c().div`
	@media screen and ( min-width: 600px ) {
		max-width: 420px;
	}
`,N=(c()(r.Icon)`
	float: ${(0,n.getDirectionalStyle)("right","left")};
	margin: ${(0,n.getDirectionalStyle)("0 0 16px 16px","0 16px 16px 0")};

	&& {
		width: 150px;
		height: 150px;

		@media screen and ( max-width: 680px ) {
			width: 80px;
			height: 80px;
		}
	}
`,"yoast yoast-gutenberg-modal"),B=e=>{const{title:s,className:r,showYoastIcon:n,additionalClassName:a,...l}=e,i=n?(0,t.createElement)("span",{className:"yoast-icon"}):null;return(0,t.createElement)(o.Modal,h({title:s,className:`${r} ${a}`,icon:i},l),e.children)};B.propTypes={title:l().string,className:l().string,showYoastIcon:l().bool,children:l().oneOfType([l().node,l().arrayOf(l().node)]),additionalClassName:l().string},B.defaultProps={title:"Yoast SEO",className:N,showYoastIcon:!0,children:null,additionalClassName:""};const S=B,L=window.React;var M,I;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},O.apply(this,arguments)}const T=e=>L.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 425 456.27"},e),M||(M=L.createElement("path",{d:"M73 405.26a66.79 66.79 0 0 1-6.54-1.7 64.75 64.75 0 0 1-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 0 1-5.08-4.19 69.21 69.21 0 0 1-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 0 1-3.44-5.64 68.29 68.29 0 0 1-8.29-32.55V142.13a68.26 68.26 0 0 1 8.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0 1 14.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0 1 73 75.09a68.75 68.75 0 0 1 13.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 0 0 0 142.13v196.09A86.84 86.84 0 0 0 86.75 425h11.32v-18.35H86.75A68.75 68.75 0 0 1 73 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 0 1 8.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 0 1 391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 0 1 8.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 0 0-56.45-81.28z"})),I||(I=L.createElement("path",{stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81,d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 0 1 0 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z"}))),$=window.lodash,P=e=>(0,t.createElement)("div",{className:"yoast components-panel__body"},(0,t.createElement)("h2",{className:"components-panel__body-title"},(0,t.createElement)("button",{id:e.id,onClick:e.onClick,className:"components-button components-panel__body-toggle",type:"button"},e.prefixIcon&&(0,t.createElement)("span",{className:"yoast-icon-span",style:{fill:`${e.prefixIcon&&e.prefixIcon.color||""}`}},(0,t.createElement)(r.SvgIcon,{size:e.prefixIcon.size,icon:e.prefixIcon.icon})),(0,t.createElement)("span",{className:"yoast-title-container"},(0,t.createElement)("div",{className:"yoast-title"},e.title),(0,t.createElement)("div",{className:"yoast-subtitle"},e.subTitle)),e.children,e.suffixIcon&&(0,t.createElement)(r.SvgIcon,{size:e.suffixIcon.size,icon:e.suffixIcon.icon}),e.SuffixHeroIcon))),A=P;P.propTypes={onClick:l().func.isRequired,title:l().string.isRequired,id:l().string,subTitle:l().string,suffixIcon:l().object,SuffixHeroIcon:l().object,prefixIcon:l().object,children:l().node},P.defaultProps={id:"",suffixIcon:null,SuffixHeroIcon:null,prefixIcon:null,subTitle:"",children:null};const F=e=>{let t=!0;if("blur"===(null==e?void 0:e.type)){const{relatedTarget:s}=e;if(s){const e=["media-modal","wp-core-ui"];t=(0,$.intersection)(e,Array.from(s.classList)).length!==e.length}}return t},K=({id:e,postTypeName:o,children:r,title:n,isOpen:a,close:l,open:i,shouldCloseOnClickOutside:c,showChangesWarning:d,SuffixHeroIcon:p})=>{const u=(0,t.useCallback)((e=>{F(e)&&l()}),[l]);return(0,t.createElement)(t.Fragment,null,a&&(0,t.createElement)(x.LocationProvider,{value:"modal"},(0,t.createElement)(S,{title:n,onRequestClose:u,additionalClassName:"yoast-collapsible-modal yoast-post-settings-modal",id:"id",shouldCloseOnClickOutside:c},(0,t.createElement)("div",{className:"yoast-content-container"},(0,t.createElement)("div",{className:"yoast-modal-content"},r)),(0,t.createElement)("div",{className:"yoast-notice-container"},(0,t.createElement)("hr",null),(0,t.createElement)("div",{className:"yoast-button-container"},d&&(0,t.createElement)("p",null,/* Translators: %s translates to the Post Label in singular form */
(0,s.sprintf)((0,s.__)("Make sure to save your %s for changes to take effect","wordpress-seo"),o)),(0,t.createElement)("button",{className:"yoast-button yoast-button--primary yoast-button--post-settings-modal",type:"button",onClick:u},/* Translators: %s translates to the Post Label in singular form */
(0,s.sprintf)((0,s.__)("Return to your %s","wordpress-seo"),o)))))),(0,t.createElement)(A,{id:e+"-open-button",title:n,SuffixHeroIcon:p,suffixIcon:p?null:{size:"20px",icon:"pencil-square"},onClick:i}))};K.propTypes={id:l().string.isRequired,postTypeName:l().string.isRequired,children:l().oneOfType([l().node,l().arrayOf(l().node)]).isRequired,title:l().string.isRequired,isOpen:l().bool.isRequired,open:l().func.isRequired,close:l().func.isRequired,shouldCloseOnClickOutside:l().bool,showChangesWarning:l().bool,SuffixHeroIcon:l().object},K.defaultProps={shouldCloseOnClickOutside:!0,showChangesWarning:!0};class U extends t.Component{constructor(e){super(e),this.onModalOpen=this.onModalOpen.bind(this),this.onModalClose=this.onModalClose.bind(this),this.onLinkClick=this.onLinkClick.bind(this),this.listenToMessages=this.listenToMessages.bind(this)}onModalOpen(){this.props.keyphrase.trim()?this.props.onOpen(this.props.location):this.props.onOpenWithNoKeyphrase()}onModalClose(e){F(e)&&this.props.onClose()}onLinkClick(e){if(e.preventDefault(),!this.props.keyphrase.trim())return void this.props.onOpenWithNoKeyphrase();const t=e.target.href,s=["top="+(window.top.outerHeight/2+window.top.screenY-285),"left="+(window.top.outerWidth/2+window.top.screenX-170),"width=340","height=570","resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(t,"SEMrush_login",s.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.listenToMessages,!1)}async listenToMessages(e){const{data:t,source:s,origin:o}=e;"https://oauth.semrush.com"===o&&this.popup===s&&("semrush:oauth:success"===t.type&&(this.popup.close(),window.removeEventListener("message",this.listenToMessages,!1),await this.performAuthenticationRequest(t)),"semrush:oauth:denied"===t.type&&(this.popup.close(),window.removeEventListener("message",this.listenToMessages,!1),this.props.onAuthentication(!1)))}async performAuthenticationRequest(e){try{const t=new URL(e.url).searchParams.get("code"),s=await v()({path:"yoast/v1/semrush/authenticate",method:"POST",data:{code:t}});200===s.status?(this.props.onAuthentication(!0),this.onModalOpen(),this.popup.close()):console.error(s.error)}catch(e){console.error(e.message)}}render(){const{keyphrase:e,location:n,whichModalOpen:a,isLoggedIn:l,shouldCloseOnClickOutside:i}=this.props;return(0,t.createElement)(t.Fragment,null,l&&(0,t.createElement)("div",{className:"yoast"},(0,t.createElement)(r.NewButton,{variant:"secondary",id:`yoast-get-related-keyphrases-${n}`,onClick:this.onModalOpen},(0,s.__)("Get related keyphrases","wordpress-seo"))),e&&a===n&&(0,t.createElement)(S,{title:(0,s.__)("Related keyphrases","wordpress-seo"),onRequestClose:this.onModalClose,icon:(0,t.createElement)(T,null),additionalClassName:"yoast-related-keyphrases-modal",shouldCloseOnClickOutside:i},(0,t.createElement)(C,{className:"yoast-gutenberg-modal__content yoast-related-keyphrases-modal__content"},(0,t.createElement)(o.Slot,{name:"YoastRelatedKeyphrases"}))),!l&&(0,t.createElement)("div",{className:"yoast"},(0,t.createElement)(r.ButtonStyledLink,{variant:"secondary",id:`yoast-get-related-keyphrases-${n}`,href:"https://oauth.semrush.com/oauth2/authorize?ref=1513012826&client_id=yoast&redirect_uri=https%3A%2F%2Foauth.semrush.com%2Foauth2%2Fyoast%2Fsuccess&response_type=code&scope=user.id",onClick:this.onLinkClick},(0,s.__)("Get related keyphrases","wordpress-seo"),(0,t.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("(Opens in a new browser tab)","wordpress-seo")))))}}U.propTypes={keyphrase:l().string,location:l().string,whichModalOpen:l().oneOf(["none","metabox","sidebar"]),isLoggedIn:l().bool,onOpen:l().func.isRequired,onOpenWithNoKeyphrase:l().func.isRequired,onClose:l().func.isRequired,onAuthentication:l().func.isRequired,shouldCloseOnClickOutside:l().bool},U.defaultProps={keyphrase:"",location:"",whichModalOpen:"none",isLoggedIn:!1,shouldCloseOnClickOutside:!0};const q=U,H=(0,k.compose)([(0,_.withSelect)((e=>{const{getSEMrushModalOpen:t,getSEMrushLoginStatus:s,getIsElementorEditor:o}=e("yoast-seo/editor");return{whichModalOpen:t(),isLoggedIn:s(),shouldCloseOnClickOutside:!o()}})),(0,_.withDispatch)((e=>{const{setSEMrushNoKeyphraseMessage:t,setSEMrushOpenModal:s,setSEMrushDismissModal:o,setSEMrushLoginStatus:r}=e("yoast-seo/editor");return{onOpenWithNoKeyphrase:()=>{t()},onOpen:e=>{s(e)},onClose:()=>{o()},onAuthentication:e=>{r(e)}}}))])(q),z=window.yoast.styleGuide,D=(0,n.makeOutboundLink)(c().a`
	display: inline-block;
	position: relative;
	outline: none;
	text-decoration: none;
	border-radius: 100%;
	width: 24px;
	height: 24px;
	margin: -4px 0;
	vertical-align: middle;

	color: ${z.colors.$color_help_text};
	
	&:hover,
	&:focus {
		color: ${z.colors.$color_snippet_focus};	
	}
	
	// Overwrite the default blue active color for links.
	&:active {
		color: ${z.colors.$color_help_text};	
	}

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		padding: 2px;
		content: "\f223";
	}
`),W=z.colors.$color_bad,j=z.colors.$palette_error_background,Y=z.colors.$color_grey_text_light,G=z.colors.$palette_error_text,V=c().div`
	display: flex;
	flex-direction: column;
`,Q=c().label`
	font-size: var(--yoast-font-size-default);
	font-weight: var(--yoast-font-weight-bold);
	${(0,n.getDirectionalStyle)("margin-right: 4px","margin-left: 4px")};
`,J=c().span`
	margin-bottom: 0.5em;
`,X=c()(r.InputField)`
	flex: 1 !important;
	box-sizing: border-box;
	max-width: 100%;
	margin: 0; // Reset margins inherited from WordPress.

	// Hide native X in Edge and IE11.
	&::-ms-clear {
		display: none;
	}

	&.has-error {
		border-color: ${W} !important;
		background-color: ${j} !important;

		&:focus {
			box-shadow: 0 0 2px ${W} !important;
		}
	}
`,Z=c().ul`
	color: ${G};
	list-style-type: disc;
	list-style-position: outside;
	margin: 0;
	margin-left: 1.2em;
`,ee=c().li`
	color: ${G};
	margin: 0 0 0.5em 0;
`,te=(0,r.addFocusStyle)(c().button`
		border: 1px solid transparent;
		box-shadow: none;
		background: none;
		flex: 0 0 32px;
		height: 32px;
		max-width: 32px;
		padding: 0;
		cursor: pointer;
	`);te.propTypes={type:l().string,focusColor:l().string,focusBackgroundColor:l().string,focusBorderColor:l().string},te.defaultProps={type:"button",focusColor:z.colors.$color_button_text_hover,focusBackgroundColor:"transparent",focusBorderColor:z.colors.$color_blue};const se=c()(r.SvgIcon)`
	margin-top: 4px;
`,oe=c().div`
	display: flex;
	flex-direction: row;
	align-items: center;

	&.has-remove-keyword-button {
		${X} {
			${(0,n.getDirectionalStyle)("padding-right: 40px","padding-left: 40px")};
		}

		${te} {
			${(0,n.getDirectionalStyle)("margin-left: -32px","margin-right: -32px")};
		}
	}
`;class re extends t.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e){this.props.onChange(e.target.value)}renderLabel(){const{id:e,label:s,helpLink:o}=this.props;return(0,t.createElement)(J,null,(0,t.createElement)(Q,{htmlFor:e},s),o)}renderErrorMessages(){const e=[...this.props.errorMessages];return!(0,$.isEmpty)(e)&&(0,t.createElement)(Z,null,e.map(((e,s)=>(0,t.createElement)(ee,{key:s},(0,t.createElement)("span",{role:"alert"},e)))))}render(){const{id:e,showLabel:s,keyword:o,onRemoveKeyword:r,onBlurKeyword:n,onFocusKeyword:a,hasError:l}=this.props,i=!s,c=r!==$.noop;return(0,t.createElement)(V,null,s&&this.renderLabel(),l&&this.renderErrorMessages(),(0,t.createElement)(oe,{className:c?"has-remove-keyword-button":null},(0,t.createElement)(X,{"aria-label":i?this.props.label:null,type:"text",id:e,className:l?"has-error":null,onChange:this.handleChange,onFocus:a,onBlur:n,value:o,autoComplete:"off"}),c&&(0,t.createElement)(te,{onClick:r,focusBoxShadowColor:"#084A67"},(0,t.createElement)(se,{size:"18px",icon:"times-circle",color:Y}))))}}re.propTypes={id:l().string.isRequired,showLabel:l().bool,keyword:l().string,onChange:l().func.isRequired,onRemoveKeyword:l().func,onBlurKeyword:l().func,onFocusKeyword:l().func,label:l().string.isRequired,helpLink:l().node,hasError:l().bool,errorMessages:l().arrayOf(l().string)},re.defaultProps={showLabel:!0,keyword:"",onRemoveKeyword:$.noop,onBlurKeyword:$.noop,onFocusKeyword:$.noop,helpLink:null,hasError:!1,errorMessages:[]};const ne=re,ae=c().div`
	padding: 16px;
	/* Necessary to compensate negative top margin of the collapsible after the keyword input. */
	border-bottom: 1px solid transparent;
`;class le extends t.Component{constructor(e){super(e),this.validate=this.validate.bind(this)}static renderHelpLink(e){return e?(0,t.createElement)(D,{href:e,className:"dashicons"},(0,t.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("Help on choosing the perfect focus keyphrase","wordpress-seo"))):null}validate(){const e=[...this.props.errors],{keyword:t,displayNoKeyphraseMessage:o,displayNoKeyphrasForTrackingMessage:r}=this.props;return 0===t.trim().length&&(o&&e.push((0,s.__)("Please enter a focus keyphrase first to get related keyphrases","wordpress-seo")),r&&e.push((0,s.__)("Please enter a focus keyphrase first to track keyphrase performance","wordpress-seo"))),t.includes(",")&&e.push((0,s.__)("Are you trying to use multiple keyphrases? You should add them separately below.","wordpress-seo")),t.length>191&&e.push((0,s.__)("Your keyphrase is too long. It can be a maximum of 191 characters.","wordpress-seo")),e}render(){const e=this.validate();return(0,t.createElement)(x.LocationConsumer,null,(r=>(0,t.createElement)("div",{style:"sidebar"===r?{borderBottom:"1px solid #f0f0f0"}:{}},(0,t.createElement)(ae,{location:r},(0,t.createElement)(ne,{id:`focus-keyword-input-${r}`,onChange:this.props.onFocusKeywordChange,keyword:this.props.keyword,label:(0,s.__)("Focus keyphrase","wordpress-seo"),helpLink:le.renderHelpLink(this.props.helpLink),onBlurKeyword:this.props.onBlurKeyword,onFocusKeyword:this.props.onFocusKeyword,hasError:e.length>0,errorMessages:e}),this.props.isSEMrushIntegrationActive&&(0,t.createElement)(H,{location:r,keyphrase:this.props.keyword})),(0,t.createElement)(o.Slot,{name:`YoastAfterKeywordInput${r.charAt(0).toUpperCase()+r.slice(1)}`}))))}}le.propTypes={keyword:l().string,onFocusKeywordChange:l().func.isRequired,onFocusKeyword:l().func.isRequired,onBlurKeyword:l().func.isRequired,isSEMrushIntegrationActive:l().bool,displayNoKeyphraseMessage:l().bool,displayNoKeyphrasForTrackingMessage:l().bool,errors:l().arrayOf(l().string),helpLink:l().string},le.defaultProps={keyword:"",isSEMrushIntegrationActive:!1,displayNoKeyphraseMessage:!1,displayNoKeyphrasForTrackingMessage:!1,errors:[],helpLink:""};const ie=(0,k.compose)([(0,_.withSelect)((e=>{const{getFocusKeyphrase:t,getSEMrushNoKeyphraseMessage:s,getIsSEMrushIntegrationActive:o,hasWincherNoKeyphrase:r,getFocusKeyphraseErrors:n}=e("yoast-seo/editor");return{keyword:t(),displayNoKeyphraseMessage:s(),displayNoKeyphrasForTrackingMessage:r(),errors:n(),isSEMrushIntegrationActive:o(),helpLink:wpseoAdminL10n["shortlinks.focus_keyword_info"]}})),(0,_.withDispatch)((e=>{const{setFocusKeyword:t,setMarkerPauseStatus:s}=e("yoast-seo/editor");return{onFocusKeywordChange:t,onFocusKeyword:()=>s(!0),onBlurKeyword:()=>s(!1)}}))])(le),ce=window.yoast.analysis;function de(e,t=""){const s=e.getIdentifier(),o={score:e.score,rating:ce.interpreters.scoreToRating(e.score),hasMarks:e.hasMarks(),marker:e.getMarker(),id:s,text:e.text,markerId:t.length>0?`${t}:${s}`:s,hasBetaBadge:e.hasBetaBadge(),hasJumps:e.hasJumps(),editFieldName:e.editFieldName};return"ok"===o.rating&&(o.rating="OK"),o}function pe(e,t){switch(e.rating){case"error":t.errorsResults.push(e);break;case"feedback":t.considerationsResults.push(e);break;case"bad":t.problemsResults.push(e);break;case"OK":t.improvementsResults.push(e);break;case"good":t.goodResults.push(e)}return t}function ue(e){switch(e){case"loading":return{icon:"loading-spinner",color:z.colors.$color_green_medium_light};case"not-set":return{icon:"seo-score-none",color:z.colors.$color_score_icon};case"noindex":return{icon:"seo-score-none",color:z.colors.$color_noindex};case"good":return{icon:"seo-score-good",color:z.colors.$color_green_medium};case"ok":return{icon:"seo-score-ok",color:z.colors.$color_ok};default:return{icon:"seo-score-bad",color:z.colors.$color_red}}}function he(e,t=""){let s={errorsResults:[],problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[]};if(!e)return s;for(let o=0;o<e.length;o++){const r=e[o];r.text&&(s=pe(de(r,t),s))}return s}function me({target:e,children:s}){let o=e;return"string"==typeof e&&(o=document.getElementById(e)),o?(0,t.createPortal)(s,o):null}me.propTypes={target:l().oneOfType([l().string,l().object]).isRequired,children:l().node.isRequired};const ge=({target:e,scoreIndicator:s})=>(0,t.createElement)(me,{target:e},(0,t.createElement)(r.SvgIcon,ue(s)));ge.propTypes={target:l().string.isRequired,scoreIndicator:l().string.isRequired};const ye=ge,be=window.yoast.analysisReport,we=window.yoast.uiLibrary,fe=L.forwardRef((function(e,t){return L.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),L.createElement("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}))})),ke=window.wp.hooks,_e=window.wp.url,xe=()=>[(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$sAI%2$s: Better SEO titles and meta descriptions, faster.","wordpress-seo"),"<strong>","</strong>"),(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$sMultiple keywords%2$s: Rank higher for more searches.","wordpress-seo"),"<strong>","</strong>"),(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$sSuper fast%2$s internal linking suggestions.","wordpress-seo"),"<strong>","</strong>"),(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$sNo more broken links%2$s: Automatic redirect manager.","wordpress-seo"),"<strong>","</strong>"),(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$sAppealing social previews%2$s people actually want to click on.","wordpress-seo"),"<strong>","</strong>"),(0,s.sprintf)(/* translators: %1$s expands to a strong opening tag, %2$s expands to a strong closing tag. */
(0,s.__)("%1$s24/7 support%2$s: Also on evenings and weekends.","wordpress-seo"),"<strong>","</strong>")],Ee=c().div`
  padding: 25px 32px 32px;
  color: #303030;
`,ve=c().ul`
  margin: 0;
  padding: 0;

  li {
    list-style-image: var(--yoast-svg-icon-check);
    margin: 0.5rem 0 0 1.5rem;
    line-height: 1.4em;

    &::marker {
      font-size: 1.5rem;
    }
  }
`,Ce=c().span`
  display: block;
  margin-top: 4px;
`,Re=c().h2`
  margin-top: 0;
  margin-bottom: 0.25rem;
  color: #303030;
  font-size: 0.8125rem;
  font-weight: 600;
`,Ne=c().p`
  display: block;
  margin: 0.25rem 0 1rem 0 !important;
  max-width: 420px;
`,Be=c().hr`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-top: 0;
  border-bottom: 1px solid #E2E8F0;
`,Se=c().div`
  text-align: center;
`,Le=c().a`
  width: 100%;
`,Me=(0,n.makeOutboundLink)(Le);class Ie extends t.Component{constructor(e){super(e),this.state={defaultPrice:"99"}}createBenefitsList(e){return e.length>0&&(0,t.createElement)(ve,{role:"list"},e.map(((e,s)=>(0,t.createElement)("li",{key:`upsell-benefit-${s}`},(0,t.createInterpolateElement)(e,{strong:(0,t.createElement)("strong",null)})))))}render(){const e=(0,_.select)("yoast-seo/editor").isPromotionActive("black-friday-2023-promotion"),{defaultPrice:o}=this.state,r=e?"69.30":null,n=r||o;return(0,t.createElement)(t.Fragment,null,e&&(0,t.createElement)("div",{className:"yst-flex yst-justify-between yst-items-center yst-text-lg yst-content-between yst-bg-black yst-text-amber-300 yst-h-9 yst-border-amber-300 yst-border-y yst-border-x-0 yst-border-solid yst-px-6"},(0,t.createElement)("div",null,(0,s.__)("BLACK FRIDAY","wordpress-seo")),(0,t.createElement)("div",null,(0,s.__)("30% OFF","wordpress-seo"))),(0,t.createElement)(Ee,null,(0,t.createElement)(Re,null,this.props.title),(0,t.createElement)(Ne,null,this.props.description),(0,t.createElement)(Se,null,(0,t.createElement)(Me,this.props.upsellButton,this.props.upsellButtonText,this.props.upsellButtonHasCaret&&(0,t.createElement)("span",{"aria-hidden":"true",className:"yoast-button-upsell__caret"})),(0,t.createElement)("div",{className:"yst-text-slate-600 yst-my-4"},r&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"yst-text-slate-500 yst-line-through"},o)," "),(0,t.createElement)("span",{className:"yst-text-slate-900 yst-text-2xl yst-font-bold"},n)," ",(0,s.__)("$ USD / € EUR / £ GBP per year (ex. VAT)","wordpress-seo")),(0,t.createElement)(Ce,{id:this.props.upsellButton["aria-describedby"]},this.props.upsellButtonLabel)),(0,t.createElement)(Be,null),(0,t.createElement)(Re,null,this.props.benefitsTitle),this.createBenefitsList(this.props.benefits)))}}Ie.propTypes={title:l().node,benefits:l().array,benefitsTitle:l().node,description:l().node,upsellButton:l().object,upsellButtonText:l().string.isRequired,upsellButtonLabel:l().string,upsellButtonHasCaret:l().bool},Ie.defaultProps={title:null,description:null,benefits:[],benefitsTitle:null,upsellButton:{href:"",className:"button button-primary"},upsellButtonLabel:"",upsellButtonHasCaret:!0};const Oe=Ie,Te=(0,s.__)("Check your text on even more SEO criteria and get an enhanced keyphrase analysis, making it easier to optimize your content.","wordpress-seo"),$e=e=>{const{locationContext:o}=(0,x.useRootContext)(),r=(0,_e.addQueryArgs)(wpseoAdminL10n[e.buyLink],{context:o});return(0,t.createElement)(Oe,{title:(0,s.__)("Get more help with writing content that ranks","wordpress-seo"),description:e.description,benefitsTitle:/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.sprintf)("%s also gives you:","Yoast SEO Premium"),benefits:xe(),upsellButtonText:(0,s.sprintf)(/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.__)("Unlock with %s","wordpress-seo"),"Yoast SEO Premium"),upsellButton:{href:r,className:"yoast-button-upsell",rel:null,"data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2","data-action":"load-nfd-ctb"},upsellButtonLabel:(0,s.__)("1 year of premium support and updates included!","wordpress-seo")})};$e.propTypes={buyLink:l().string.isRequired,description:l().string},$e.defaultProps={description:Te};const Pe=$e;class Ae extends t.Component{constructor(e){super(e);const t=this.props.results;this.state={mappedResults:{}},null!==t&&(this.state={mappedResults:he(t,this.props.keywordKey)}),this.handleMarkButtonClick=this.handleMarkButtonClick.bind(this),this.handleEditButtonClick=this.handleEditButtonClick.bind(this),this.handleResultsChange=this.handleResultsChange.bind(this),this.renderHighlightingUpsell=this.renderHighlightingUpsell.bind(this),this.createMarkButton=this.createMarkButton.bind(this)}componentDidUpdate(e){null!==this.props.results&&this.props.results!==e.results&&this.setState({mappedResults:he(this.props.results,this.props.keywordKey)})}createMarkButton({ariaLabel:e,id:s,className:o,status:n,onClick:a,isPressed:l}){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.IconButtonToggle,{marksButtonStatus:n,className:o,onClick:a,id:s,icon:"eye",pressed:l,ariaLabel:e}),this.props.shouldUpsellHighlighting&&(0,t.createElement)("div",{className:"yst-root"},(0,t.createElement)(we.Badge,{className:"yst-absolute yst-px-[3px] yst-py-[3px] yst--right-[6.5px] yst--top-[6.5px]",size:"small",variant:"upsell"},(0,t.createElement)(fe,{className:"yst-w-2.5 yst-h-2.5 yst-shrink-0",role:"img","aria-hidden":!0,focusable:!1}))))}deactivateMarker(){this.props.setActiveMarker(null),this.props.setMarkerPauseStatus(!1),this.removeMarkers()}activateMarker(e,t){this.props.setActiveMarker(e),t()}handleMarkButtonClick(e,t){const s=this.props.keywordKey.length>0?`${this.props.keywordKey}:${e}`:e;s===this.props.activeMarker?this.deactivateMarker():this.activateMarker(s,t)}handleResultsChange(e,t,s){const o=this.props.keywordKey.length>0?`${this.props.keywordKey}:${e}`:e;o===this.props.activeMarker&&(s?(0,$.isUndefined)(t)||this.activateMarker(o,t):this.deactivateMarker())}focusOnKeyphraseField(e){const t=this.props.keywordKey,s=""===t?"focus-keyword-input-"+e:"yoast-keyword-input-"+t+"-"+e,o=document.getElementById(s);o.focus(),o.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}focusOnGooglePreviewField(e,t){let s;s="metaDescriptionKeyword"===e||"metaDescriptionLength"===e?"description":"titleWidth"===e||"keyphraseInSEOTitle"===e?"title":"slug";const o=document.getElementById("yoast-google-preview-"+s+"-"+t);o.focus(),o.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}handleEditButtonClick(e){const t=this.props.location;"functionWordsInKeyphrase"!==e&&"keyphraseLength"!==e?(["metaDescriptionKeyword","metaDescriptionLength","titleWidth","keyphraseInSEOTitle","slugKeyword"].includes(e)&&this.handleGooglePreviewFocus(t,e),(0,ke.doAction)("yoast.focus.input",e)):this.focusOnKeyphraseField(t)}handleGooglePreviewFocus(e,t){if("sidebar"===e)document.getElementById("yoast-search-appearance-modal-open-button").click(),setTimeout((()=>this.focusOnGooglePreviewField(t,"modal")),500);else{const s=document.getElementById("yoast-snippet-editor-metabox");s&&"false"===s.getAttribute("aria-expanded")?(s.click(),setTimeout((()=>this.focusOnGooglePreviewField(t,e)),100)):this.focusOnGooglePreviewField(t,e)}}removeMarkers(){window.YoastSEO.analysis.applyMarks(new ce.Paper("",{}),[])}renderHighlightingUpsell(e,o){const r=(0,s.__)("Highlight areas of improvement in your text, no more searching for a needle in a haystack, straight to optimizing! Now also in Elementor!","wordpress-seo");return e&&(0,t.createElement)(S,{title:(0,s.__)("Unlock Premium SEO analysis","wordpress-seo"),onRequestClose:o,additionalClassName:"",className:`${N} yoast-gutenberg-modal__box yoast-gutenberg-modal__no-padding`,id:"yoast-premium-seo-analysis-highlighting-modal",shouldCloseOnClickOutside:!0},(0,t.createElement)(R,null,(0,t.createElement)(Pe,{buyLink:this.props.highlightingUpsellLink,description:r})))}render(){const{mappedResults:e}=this.state,{errorsResults:o,improvementsResults:r,goodResults:n,considerationsResults:a,problemsResults:l}=e,{upsellResults:i,resultCategoryLabels:c}=this.props,d={errors:(0,s.__)("Errors","wordpress-seo"),problems:(0,s.__)("Problems","wordpress-seo"),improvements:(0,s.__)("Improvements","wordpress-seo"),considerations:(0,s.__)("Considerations","wordpress-seo"),goodResults:(0,s.__)("Good results","wordpress-seo")},p=Object.assign(d,c);let u=this.props.marksButtonStatus;return"enabled"===u&&this.props.shortcodesForParsing.length>0&&(u="disabled"),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(be.ContentAnalysis,{errorsResults:o,problemsResults:l,upsellResults:i,improvementsResults:r,considerationsResults:a,goodResults:n,activeMarker:this.props.activeMarker,onMarkButtonClick:this.handleMarkButtonClick,onEditButtonClick:this.handleEditButtonClick,marksButtonClassName:this.props.marksButtonClassName,editButtonClassName:this.props.editButtonClassName,marksButtonStatus:u,headingLevel:3,keywordKey:this.props.keywordKey,isPremium:this.props.isPremium,resultCategoryLabels:p,onResultChange:this.handleResultsChange,shouldUpsellHighlighting:this.props.shouldUpsellHighlighting,renderHighlightingUpsell:this.renderHighlightingUpsell,markButtonFactory:this.createMarkButton}))}}Ae.propTypes={results:l().array,upsellResults:l().array,marksButtonClassName:l().string,editButtonClassName:l().string,marksButtonStatus:l().oneOf(["enabled","disabled","hidden"]),setActiveMarker:l().func.isRequired,setMarkerPauseStatus:l().func.isRequired,activeMarker:l().string,keywordKey:l().string,location:l().string,isPremium:l().bool,resultCategoryLabels:l().shape({errors:l().string,problems:l().string,improvements:l().string,considerations:l().string,goodResults:l().string}),shortcodesForParsing:l().array,shouldUpsellHighlighting:l().bool,highlightingUpsellLink:l().string},Ae.defaultProps={results:null,upsellResults:[],marksButtonStatus:"enabled",marksButtonClassName:"",editButtonClassName:"",activeMarker:null,keywordKey:"",location:"",isPremium:!1,resultCategoryLabels:{},shortcodesForParsing:[],shouldUpsellHighlighting:!1,highlightingUpsellLink:""};const Fe=Ae,Ke=(0,k.compose)([(0,_.withSelect)((e=>{const{getActiveMarker:t,getIsPremium:s,getShortcodesForParsing:o}=e("yoast-seo/editor");return{activeMarker:t(),isPremium:s(),shortcodesForParsing:o()}})),(0,_.withDispatch)((e=>{const{setActiveMarker:t,setMarkerPauseStatus:s}=e("yoast-seo/editor");return{setActiveMarker:t,setMarkerPauseStatus:s}}))])(Fe);function Ue(e){return(0,$.isNil)(e)||(e/=10),function(e){switch(e){case"feedback":return{className:"na",screenReaderText:(0,s.__)("Feedback","wordpress-seo"),screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""};case"bad":return{className:"bad",screenReaderText:(0,s.__)("Needs improvement","wordpress-seo"),screenReaderReadabilityText:(0,s.__)("Needs improvement","wordpress-seo"),screenReaderInclusiveLanguageText:(0,s.__)("Needs improvement","wordpress-seo")};case"ok":return{className:"ok",screenReaderText:(0,s.__)("OK SEO score","wordpress-seo"),screenReaderReadabilityText:(0,s.__)("OK","wordpress-seo"),screenReaderInclusiveLanguageText:(0,s.__)("Potentially non-inclusive","wordpress-seo")};case"good":return{className:"good",screenReaderText:(0,s.__)("Good SEO score","wordpress-seo"),screenReaderReadabilityText:(0,s.__)("Good","wordpress-seo"),screenReaderInclusiveLanguageText:(0,s.__)("Good","wordpress-seo")};default:return{className:"loading",screenReaderText:"",screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""}}}(ce.interpreters.scoreToRating(e))}const qe=c().span`
	font-size: 1em;
	font-weight: bold;
	margin: 0 0 8px;
	display: block;
`,He=c().div`
	padding: 16px;
`,ze=c()(D)`
	margin: -8px 0 -4px 4px;
`;class De extends t.Component{renderResults(e){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(qe,null,(0,s.__)("Analysis results","wordpress-seo"),(0,t.createElement)(ze,{href:wpseoAdminL10n["shortlinks.readability_analysis_info"],className:"dashicons"},(0,t.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("Learn more about the readability analysis","wordpress-seo")))),(0,t.createElement)(Ke,{results:this.props.results,upsellResults:e,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:this.props.marksButtonStatus,highlightingUpsellLink:"shortlinks.upsell.sidebar.highlighting_readability_analysis",shouldUpsellHighlighting:this.props.shouldUpsellHighlighting}))}getUpsellResults(e,t){let o=wpseoAdminL10n["shortlinks.upsell.metabox.word_complexity"];return"sidebar"===e&&(o=wpseoAdminL10n["shortlinks.upsell.sidebar.word_complexity"]),o=(0,_e.addQueryArgs)(o,{context:t}),function(){const e=ce.helpers.getLanguagesWithWordComplexity(),t=window.wpseoScriptData.metabox.contentLocale,s=ce.languageProcessing.getLanguage(t);return e.includes(s)}()?[{score:0,rating:"upsell",hasMarks:!1,id:"wordComplexity",text:(0,s.sprintf)(
/* Translators: %1$s is a span tag that adds styling to 'Word complexity', %2$s is a closing span tag.
       %3$s is an anchor tag with a link to yoast.com, %4$s is a closing anchor tag.*/
(0,s.__)("%1$sWord complexity%2$s: Is your vocabulary suited for a larger audience? %3$sYoast SEO Premium will tell you!%4$s","wordpress-seo"),"<span style='text-decoration: underline'>","</span>",`<a href="${o}" data-action="load-nfd-ctb" data-ctb-id="f6a84663-465f-4cb5-8ba5-f7a6d72224b2" target="_blank">`,"</a>"),markerId:"wordComplexity"}]:[]}render(){const e=Ue(this.props.overallScore);return(0,$.isNil)(this.props.overallScore)&&(e.className="loading"),(0,t.createElement)(x.LocationConsumer,null,(o=>(0,t.createElement)(x.RootContext.Consumer,null,(({locationContext:r})=>{let n=[];return this.props.shouldUpsell&&(n=this.getUpsellResults(o,r)),"sidebar"===o?(0,t.createElement)(b,{title:(0,s.__)("Readability analysis","wordpress-seo"),titleScreenReaderText:e.screenReaderReadabilityText,prefixIcon:ue(e.className),prefixIconCollapsed:ue(e.className),id:`yoast-readability-analysis-collapsible-${o}`},this.renderResults(n)):"metabox"===o?(0,t.createElement)(me,{target:"wpseo-metabox-readability-root"},(0,t.createElement)(He,null,(0,t.createElement)(ye,{target:"wpseo-readability-score-icon",scoreIndicator:e.className}),this.renderResults(n))):void 0}))))}}De.propTypes={results:l().array.isRequired,marksButtonStatus:l().string.isRequired,overallScore:l().number,shouldUpsell:l().bool,shouldUpsellHighlighting:l().bool},De.defaultProps={overallScore:null,shouldUpsell:!1,shouldUpsellHighlighting:!1};const We=(0,_.withSelect)((e=>{const{getReadabilityResults:t,getMarkButtonStatus:s}=e("yoast-seo/editor");return{...t(),marksButtonStatus:s()}}))(De);function je(){return(0,$.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}const Ye=c().p`
	color: ${z.colors.$color_upsell_text};
	margin: 0;
	padding-right: 8px;
`,Ge=c().div`
	font-size: 1em;
	display: flex;
	flex-direction: ${e=>"horizontal"===e.alignment?"row":"column"};
	${(0,n.getDirectionalStyle)("border-left","border-right")}: 4px solid ${z.colors.$color_pink_dark};
	margin: 16px 0;
	padding: 0 0 0 8px;
	max-width: 600px;

	> ${Ye} {
		margin-bottom: ${e=>"vertical"===e.alignment&&"16px"};
	}
`,Ve=c()(r.SvgIcon)`
	margin: ${(0,n.getDirectionalStyle)("0 0 0 4px","0 4px 0 0")};
	transform: ${(0,n.getDirectionalStyle)("rotate(0deg)","rotate(180deg)")};
`,Qe=(0,n.makeOutboundLink)(r.UpsellLinkButton),Je=e=>{const{alignment:o,url:r}=e;return(0,t.createElement)(Ge,{alignment:o},(0,t.createElement)(Ye,null,(0,s.sprintf)(/* translators: %s expands to Yoast SEO Premium */
(0,s.__)("%s looks at more than just your main keyword. It analyzes different word forms, plurals, and past tenses. This helps your website perform even better in searches!","wordpress-seo"),"Yoast SEO Premium")),(0,t.createElement)("div",null,(0,t.createElement)(Qe,{href:r,className:"UpsellLinkButton","data-action":"load-nfd-ctb","data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2"},(0,s.sprintf)(/* translators: %s expands to Premium */
(0,s.__)("Go %s!","wordpress-seo"),"Premium"),(0,t.createElement)(Ve,{icon:"arrow-right",size:"8px",color:z.colors.$color_black}))))};Je.propTypes={alignment:l().oneOf(["horizontal","vertical"]),url:l().string.isRequired},Je.defaultProps={alignment:"vertical"};const Xe=Je,Ze=e=>(0,t.createElement)(Oe,{title:(0,s.__)("Write more natural and engaging content","wordpress-seo"),description:(0,s.sprintf)(/* translators: %s expands to "Yoast SEO Premium" */
(0,s.__)("Synonyms help users understand your copy better. It’s easier to read for both users and Google. In %s, you can add synonyms for your focus keyphrase, and we’ll help you optimize for them.","wordpress-seo"),"Yoast SEO Premium"),benefitsTitle:/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.sprintf)("%s also gives you:","Yoast SEO Premium"),benefits:xe(),upsellButtonText:(0,s.sprintf)(/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.__)("Unlock with %s","wordpress-seo"),"Yoast SEO Premium"),upsellButton:{href:e.buyLink,className:"yoast-button-upsell",rel:null,"data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2","data-action":"load-nfd-ctb"},upsellButtonLabel:(0,s.__)("1 year free support and updates included!","wordpress-seo")});Ze.propTypes={buyLink:l().string.isRequired};const et=Ze,tt=e=>(0,t.createElement)(Oe,{title:(0,s.__)("Reach a wider audience","wordpress-seo"),description:(0,s.__)("Get help optimizing for up to 5 related keyphrases. This helps you reach a wider audience and get more traffic.","wordpress-seo"),benefitsTitle:/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.sprintf)("%s also gives you:","Yoast SEO Premium"),benefits:xe(),upsellButtonText:(0,s.sprintf)(/* translators: %s expands to 'Yoast SEO Premium'. */
(0,s.__)("Unlock with %s","wordpress-seo"),"Yoast SEO Premium"),upsellButton:{href:e.buyLink,className:"yoast-button-upsell",rel:null,"data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2","data-action":"load-nfd-ctb"},upsellButtonLabel:(0,s.__)("1 year free support and updates included!","wordpress-seo")});tt.propTypes={buyLink:l().string.isRequired};const st=tt,ot=c().button`
	// Increase specificity to override WP rules.
	&& {
		display: flex;
		align-items: center;
	}

	.yoast-svg-icon {
		margin: 1px 7px 0 0;
		fill: currentColor;
	}
`,rt={open:(0,s.__)("Open","wordpress-seo"),heading:"",closeIconButton:(0,s.__)("Close","wordpress-seo"),closeButton:""},nt=e=>{const[s,o]=(0,t.useState)(!1),n=Object.assign({},rt,e.labels),a=(0,t.useCallback)((()=>o(!1)),[]),l=(0,t.useCallback)((()=>o(!0)),[]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(ot,{type:"button",onClick:l,className:`${e.classes.openButton} yoast-modal__button-open`},e.openButtonIcon&&(0,t.createElement)(r.SvgIcon,{icon:e.openButtonIcon,size:"13px"}),n.open),s&&(0,t.createElement)(S,{onRequestClose:a,className:e.className,title:n.heading},e.children))};nt.propTypes={openButtonIcon:l().string,labels:l().shape({open:l().string,modalAriaLabel:l().string.isRequired,heading:l().string,closeIconButton:l().string,closeButton:l().string}).isRequired,classes:l().shape({openButton:l().string,closeIconButton:l().string,closeButton:l().string}),className:l().string,children:l().any.isRequired},nt.defaultProps={className:N,openButtonIcon:"",classes:{}};const at=nt;function lt({location:e}){return(0,t.createElement)(o.Slot,{name:`yoast-synonyms-${e}`})}lt.propTypes={location:l().string.isRequired};const it=c().span`
	font-size: 1em;
	font-weight: bold;
	margin: 1.5em 0 1em;
	display: block;
`;class ct extends t.Component{renderSynonymsUpsell(e,o){const r={className:`${N} yoast-gutenberg-modal__box yoast-gutenberg-modal__no-padding`,classes:{openButton:"wpseo-keyword-synonyms button-link"},labels:{open:"+ "+(0,s.__)("Add synonyms","wordpress-seo"),modalAriaLabel:(0,s.__)("Add synonyms","wordpress-seo"),heading:(0,s.__)("Add synonyms","wordpress-seo")}},n=wpseoAdminL10n["sidebar"===e.toLowerCase()?"shortlinks.upsell.sidebar.focus_keyword_synonyms_button":"shortlinks.upsell.metabox.focus_keyword_synonyms_button"];return(0,t.createElement)(at,r,(0,t.createElement)(R,null,(0,t.createElement)(et,{buyLink:(0,_e.addQueryArgs)(n,{context:o})})))}renderMultipleKeywordsUpsell(e,o){const r={className:`${N} yoast-gutenberg-modal__box yoast-gutenberg-modal__no-padding`,classes:{openButton:"wpseo-multiple-keywords button-link"},labels:{open:"+ "+(0,s.__)("Add related keyphrase","wordpress-seo"),modalAriaLabel:(0,s.__)("Add related keyphrases","wordpress-seo"),heading:(0,s.__)("Add related keyphrases","wordpress-seo")}},n=wpseoAdminL10n["sidebar"===e.toLowerCase()?"shortlinks.upsell.sidebar.focus_keyword_additional_button":"shortlinks.upsell.metabox.focus_keyword_additional_button"];return(0,t.createElement)(at,r,(0,t.createElement)(R,null,(0,t.createElement)(st,{buyLink:(0,_e.addQueryArgs)(n,{context:o})})))}renderWordFormsUpsell(e,s){let o="sidebar"===e?wpseoAdminL10n["shortlinks.upsell.sidebar.morphology_upsell_sidebar"]:wpseoAdminL10n["shortlinks.upsell.sidebar.morphology_upsell_metabox"];return o=(0,_e.addQueryArgs)(o,{context:s}),(0,t.createElement)(Xe,{url:o,alignment:"sidebar"===e?"vertical":"horizontal"})}renderTabIcon(e,s){return"metabox"!==e?null:(0,t.createElement)(ye,{target:"wpseo-seo-score-icon",scoreIndicator:s})}getUpsellResults(e,t){let o=wpseoAdminL10n["shortlinks.upsell.metabox.keyphrase_distribution"];return"sidebar"===e&&(o=wpseoAdminL10n["shortlinks.upsell.sidebar.keyphrase_distribution"]),o=(0,_e.addQueryArgs)(o,{context:t}),[{score:0,rating:"upsell",hasMarks:!1,hasJumps:!1,id:"keyphraseDistribution",text:(0,s.sprintf)(
/* Translators: %1$s is a span tag that adds styling to 'Keyphrase distribution', %2$s is a closing span tag.
     %3%s is an anchor tag with a link to yoast.com, %4$s is a closing anchor tag.*/
(0,s.__)("%1$sKeyphrase distribution%2$s: Have you evenly distributed your focus keyphrase throughout the whole text? %3$sYoast SEO Premium will tell you!%4$s","wordpress-seo"),"<span style='text-decoration: underline'>","</span>",`<a href="${o}" data-action="load-nfd-ctb" data-ctb-id="f6a84663-465f-4cb5-8ba5-f7a6d72224b2" target="_blank">`,"</a>"),markerId:"keyphraseDistribution"}]}render(){const e=Ue(this.props.overallScore),o=je().isPremium;return"loading"!==e.className&&""===this.props.keyword&&(e.className="na",e.screenReaderReadabilityText=(0,s.__)("Enter a focus keyphrase to calculate the SEO score","wordpress-seo")),(0,t.createElement)(x.LocationConsumer,null,(r=>(0,t.createElement)(x.RootContext.Consumer,null,(({locationContext:n})=>{const a="metabox"===r?g:b;let l=[];return this.props.shouldUpsell&&(l=this.getUpsellResults(r,n)),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{title:o?(0,s.__)("Premium SEO analysis","wordpress-seo"):(0,s.__)("SEO analysis","wordpress-seo"),titleScreenReaderText:e.screenReaderReadabilityText,prefixIcon:ue(e.className),prefixIconCollapsed:ue(e.className),subTitle:this.props.keyword,id:`yoast-seo-analysis-collapsible-${r}`},(0,t.createElement)(lt,{location:r}),this.props.shouldUpsell&&(0,t.createElement)(t.Fragment,null,this.renderSynonymsUpsell(r,n),this.renderMultipleKeywordsUpsell(r,n)),this.props.shouldUpsellWordFormRecognition&&this.renderWordFormsUpsell(r,n),(0,t.createElement)(it,null,(0,s.__)("Analysis results","wordpress-seo")),(0,t.createElement)(Ke,{results:this.props.results,upsellResults:l,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",editButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:this.props.marksButtonStatus,location:r,shouldUpsellHighlighting:this.props.shouldUpsellHighlighting,highlightingUpsellLink:"shortlinks.upsell.sidebar.highlighting_seo_analysis"})),this.renderTabIcon(r,e.className))}))))}}ct.propTypes={results:l().array,marksButtonStatus:l().string,keyword:l().string,shouldUpsell:l().bool,shouldUpsellWordFormRecognition:l().bool,overallScore:l().number,shouldUpsellHighlighting:l().bool},ct.defaultProps={results:[],marksButtonStatus:null,keyword:"",shouldUpsell:!1,shouldUpsellWordFormRecognition:!1,overallScore:null,shouldUpsellHighlighting:!1};const dt=(0,_.withSelect)(((e,t)=>{const{getFocusKeyphrase:s,getMarksButtonStatus:o,getResultsForKeyword:r}=e("yoast-seo/editor"),n=s();return{...r(n),marksButtonStatus:t.hideMarksButtons?"disabled":o(),keyword:n}}))(ct);function pt(){const e=je();return(0,$.get)(e,"multilingualPluginActive",!1)}const ut=c().span`
	font-size: 1em;
	font-weight: bold;
	margin: 0 0 8px;
	display: block;
`,ht=c().div`
	padding: 16px;
`,mt=c()(D)`
	margin: -8px 0 -4px 4px;
`,gt=c().p`
	min-height: 24px;
	margin: 12px 0 0 0;
	padding: 0;
	display: flex;
	align-items: flex-start;
`,yt=c()(r.SvgIcon)`
	margin: 3px 11px 0 0; // icon 13 + 11 right margin = 24 for the 8px grid.
`,bt=e=>{const o=wpseoAdminL10n["shortlinks.inclusive_language_analysis_info"];function n(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(ut,null,(0,s.__)("Analysis results","wordpress-seo"),(0,t.createElement)(mt,{href:o,className:"dashicons"},(0,t.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("Learn more about the inclusive language analysis","wordpress-seo")))),(0,t.createElement)(Ke,{results:e.results,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:e.marksButtonStatus,resultCategoryLabels:{problems:(0,s.__)("Non-inclusive","wordpress-seo"),improvements:(0,s.__)("Potentially non-inclusive","wordpress-seo")},highlightingUpsellLink:"shortlinks.upsell.sidebar.highlighting_inclusive_analysis",shouldUpsellHighlighting:e.shouldUpsellHighlighting}))}const a=(0,t.createInterpolateElement)((0,s.sprintf)(/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag. */
(0,s.__)("%1$sInclusive language%2$s: We haven't detected any potentially non-inclusive phrases. Great work!","wordpress-seo"),"<a>","</a>"),{a:(0,t.createElement)("a",{href:o,target:"_blank",rel:"noreferrer"})});function l(){const e=(0,s.__)("We noticed that you are using a multilingual plugin. Please be aware that this analysis feedback is intended only for texts written in English.","wordpress-seo");return(0,t.createElement)(r.Alert,{type:"info"},e)}function i(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(ut,null,(0,s.__)("Analysis results","wordpress-seo"),(0,t.createElement)(mt,{href:o,className:"dashicons"},(0,t.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,s.__)("Learn more about the inclusive language analysis","wordpress-seo")))),(0,t.createElement)(gt,null,(0,t.createElement)(yt,{icon:"circle",color:"#7ad03a",size:"13px"}),(0,t.createElement)("span",null,a)))}const c=Ue(e.overallScore);return(0,$.isNil)(e.overallScore)&&(c.className="loading"),(0,t.createElement)(x.LocationConsumer,null,(o=>{return"sidebar"===o?(r=e.results,a=c,(0,t.createElement)(b,{title:(0,s.__)("Inclusive language","wordpress-seo"),titleScreenReaderText:a.screenReaderInclusiveLanguageText,prefixIcon:ue(a.className),prefixIconCollapsed:ue(a.className),id:"yoast-inclusive-language-analysis-collapsible-sidebar"},pt()?l():null,r.length>=1?n():i())):"metabox"===o?function(e,s){return(0,t.createElement)(me,{target:"wpseo-metabox-inclusive-language-root"},(0,t.createElement)(ht,null,(0,t.createElement)(ye,{target:"wpseo-inclusive-language-score-icon",scoreIndicator:s.className}),pt()?l():null,e.length>=1?n():i()))}(e.results,c):void 0;var r,a}))};bt.propTypes={results:l().array,marksButtonStatus:l().oneOf(["enabled","disabled","hidden"]).isRequired,overallScore:l().number,shouldUpsellHighlighting:l().bool},bt.defaultProps={results:[],overallScore:null,shouldUpsellHighlighting:!1};const wt=(0,_.withSelect)((e=>{const{getInclusiveLanguageResults:t,getMarkButtonStatus:s}=e("yoast-seo/editor");return{...t(),marksButtonStatus:s()}}))(bt);window.yoast=window.yoast||{},window.yoast.externals=window.yoast.externals||{},window.yoast.externals.components={CollapsibleCornerstone:f,KeywordInput:ie,ReadabilityAnalysis:We,SeoAnalysis:dt,InclusiveLanguageAnalysis:wt}})();