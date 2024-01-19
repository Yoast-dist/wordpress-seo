window.yoast=window.yoast||{},window.yoast.analysisReport=function(t){var e={};function s(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=408)}({0:function(t,e){t.exports=window.yoast.propTypes},1:function(t,e){t.exports=window.wp.element},10:function(t,e){t.exports=window.yoast.helpers},2:function(t,e){t.exports=window.lodash},3:function(t,e){t.exports=window.React},4:function(t,e){t.exports=window.wp.i18n},408:function(t,e,s){"use strict";s.r(e),s.d(e,"ContentAnalysis",(function(){return M})),s.d(e,"AnalysisResult",(function(){return E})),s.d(e,"AnalysisList",(function(){return v})),s.d(e,"renderRatingToColor",(function(){return O})),s.d(e,"SiteSEOReport",(function(){return I}));var r=s(1),n=s(4),o=s(3),a=s.n(o),i=s(5),l=s.n(i),u=s(0),d=s.n(u),c=s(71),p=s.n(c),m=s(6),g=s(2),h=s(9),b=s(10);const{stripTagsFromHtmlString:k}=b.strings,B=["a","b","strong","em","i"],f=l.a.li`
	// This is the height of the IconButtonToggle.
	min-height: 24px;
	padding: 0;
	display: flex;
	align-items: flex-start;
	position: relative;
`,C=l()(h.SvgIcon)`
	margin: 3px 11px 0 0; // icon 13 + 11 right margin = 24 for the 8px grid.
`,y=l.a.p`
	margin: 0 16px 0 0;
	flex: 1 1 auto;
	color: ${t=>t.suppressedText?"rgba(30,30,30,0.5)":"inherit"};
`,x=({ariaLabel:t,id:e,className:s,status:n,onClick:o,isPressed:a})=>Object(r.createElement)(h.IconButtonToggle,{marksButtonStatus:n,className:s,onClick:o,id:e,icon:"eye",pressed:a,ariaLabel:t}),R=({markButtonFactory:t,...e})=>{const[s,n]=Object(o.useState)(!1),a=Object(o.useCallback)(()=>n(!1),[]),i=Object(o.useCallback)(()=>n(!0),[]);t=t||x;const{id:l,marker:u,hasMarksButton:d}=e;let c=null;return function(t){return!t.hasMarksButton||"hidden"===t.marksButtonStatus}(e)||(c=t({onClick:e.shouldUpsellHighlighting?i:e.onButtonClickMarks,status:e.marksButtonStatus,className:e.marksButtonClassName,id:e.buttonIdMarks,isPressed:e.pressed,ariaLabel:e.ariaLabelMarks})),Object(o.useEffect)(()=>{e.onResultChange(l,u,d)},[l,u,d]),Object(r.createElement)(f,null,Object(r.createElement)(C,{icon:"circle",color:e.bulletColor,size:"13px"}),Object(r.createElement)(y,{suppressedText:e.suppressedText},e.hasBetaBadgeLabel&&Object(r.createElement)(h.BetaBadge,null),Object(r.createElement)("span",{dangerouslySetInnerHTML:{__html:k(e.text,B)}})),c,e.renderHighlightingUpsell(s,a),e.hasEditButton&&e.isPremium&&Object(r.createElement)(h.IconCTAEditButton,{className:e.editButtonClassName,onClick:e.onButtonClickEdit,id:e.buttonIdEdit,icon:"edit",ariaLabel:e.ariaLabelEdit}))};R.propTypes={text:d.a.string.isRequired,suppressedText:d.a.bool,bulletColor:d.a.string.isRequired,hasMarksButton:d.a.bool.isRequired,hasEditButton:d.a.bool,buttonIdMarks:d.a.string.isRequired,buttonIdEdit:d.a.string,pressed:d.a.bool.isRequired,ariaLabelMarks:d.a.string.isRequired,ariaLabelEdit:d.a.string,onButtonClickMarks:d.a.func.isRequired,onButtonClickEdit:d.a.func,marksButtonStatus:d.a.string,marksButtonClassName:d.a.string,markButtonFactory:d.a.func,editButtonClassName:d.a.string,hasBetaBadgeLabel:d.a.bool,isPremium:d.a.bool,onResultChange:d.a.func,id:d.a.string,marker:d.a.oneOfType([d.a.func,d.a.array]),shouldUpsellHighlighting:d.a.bool,renderHighlightingUpsell:d.a.func},R.defaultProps={suppressedText:!1,marksButtonStatus:"enabled",marksButtonClassName:"",editButtonClassName:"",hasBetaBadgeLabel:!1,hasEditButton:!1,buttonIdEdit:"",ariaLabelEdit:"",onButtonClickEdit:g.noop,isPremium:!1,onResultChange:g.noop,id:"",marker:g.noop,shouldUpsellHighlighting:!1,renderHighlightingUpsell:g.noop};var E=R;const w=l.a.ul`
	margin: 8px 0;
	padding: 0;
	list-style: none;
`;function O(t){switch(t){case"good":return m.colors.$color_good;case"OK":return m.colors.$color_ok;case"bad":return m.colors.$color_bad;default:return m.colors.$color_score_icon}}function v(t){return Object(r.createElement)(w,{role:"list"},t.results.map(e=>{const s=O(e.rating),o=e.markerId===t.marksButtonActivatedResult,a=e.id+"Mark",i=e.id+"Edit";let l="";l="disabled"===t.marksButtonStatus?Object(n.__)("Marks are disabled in current view","wordpress-seo"):o?Object(n.__)("Remove highlight from the text","wordpress-seo"):Object(n.__)("Highlight this result in the text","wordpress-seo");const u=e.editFieldName,d=""===u?"":Object(n.sprintf)(
/* Translators: %1$s refers to the name of the field that should be edited (keyphrase, meta description,
       slug or SEO title). */
Object(n.__)("Edit your %1$s","wordpress-seo"),u);return Object(r.createElement)(E,{key:e.id,id:e.id,text:e.text,marker:e.marker,bulletColor:s,hasMarksButton:e.hasMarks,hasEditButton:e.hasJumps,ariaLabelMarks:l,ariaLabelEdit:d,pressed:o,suppressedText:"upsell"===e.rating,buttonIdMarks:a,buttonIdEdit:i,onButtonClickMarks:()=>t.onMarksButtonClick(e.id,e.marker),onButtonClickEdit:()=>t.onEditButtonClick(e.id),marksButtonClassName:t.marksButtonClassName,editButtonClassName:t.editButtonClassName,marksButtonStatus:t.marksButtonStatus,hasBetaBadgeLabel:e.hasBetaBadge,isPremium:t.isPremium,onResultChange:t.onResultChange,markButtonFactory:t.markButtonFactory,shouldUpsellHighlighting:t.shouldUpsellHighlighting,renderHighlightingUpsell:t.renderHighlightingUpsell})}))}v.propTypes={results:d.a.array.isRequired,marksButtonActivatedResult:d.a.string,marksButtonStatus:d.a.string,marksButtonClassName:d.a.string,editButtonClassName:d.a.string,markButtonFactory:d.a.func,onMarksButtonClick:d.a.func,onEditButtonClick:d.a.func,isPremium:d.a.bool,onResultChange:d.a.func,shouldUpsellHighlighting:d.a.bool,renderHighlightingUpsell:d.a.func},v.defaultProps={marksButtonActivatedResult:"",marksButtonStatus:"enabled",marksButtonClassName:"",editButtonClassName:"",onMarksButtonClick:p.a,onEditButtonClick:p.a,isPremium:!1,onResultChange:p.a,shouldUpsellHighlighting:!1,renderHighlightingUpsell:p.a};const j=l.a.div`
	width: 100%;
	background-color: white;
	border-bottom: 1px solid transparent; // Avoid parent and child margin collapsing.
`,_=l()(h.Collapsible)`
	margin-bottom: 8px;

	button:first-child svg {
		margin: -2px 8px 0 -2px; // Compensate icon size set to 18px.
	}

	${h.StyledIconsButton} {
		padding: 8px 0;
		color: ${m.colors.$color_blue}
	}
`;class N extends a.a.Component{renderCollapsible(t,e,s){return Object(r.createElement)(_,{initialIsOpen:!0,title:`${t} (${s.length})`,prefixIcon:{icon:"angle-up",color:m.colors.$color_grey_dark,size:"18px"},prefixIconCollapsed:{icon:"angle-down",color:m.colors.$color_grey_dark,size:"18px"},suffixIcon:null,suffixIconCollapsed:null,headingProps:{level:e,fontSize:"13px",fontWeight:"bold"}},Object(r.createElement)(v,{results:s,marksButtonActivatedResult:this.props.activeMarker,marksButtonStatus:this.props.marksButtonStatus,marksButtonClassName:this.props.marksButtonClassName,editButtonClassName:this.props.editButtonClassName,markButtonFactory:this.props.markButtonFactory,onMarksButtonClick:this.props.onMarkButtonClick,onEditButtonClick:this.props.onEditButtonClick,isPremium:this.props.isPremium,onResultChange:this.props.onResultChange,shouldUpsellHighlighting:this.props.shouldUpsellHighlighting,renderHighlightingUpsell:this.props.renderHighlightingUpsell}))}render(){const{problemsResults:t,improvementsResults:e,goodResults:s,considerationsResults:o,errorsResults:a,upsellResults:i,headingLevel:l,resultCategoryLabels:u}=this.props,d=a.length,c=t.length,p=e.length,m=o.length,g=s.length,h=i.length,b={errors:Object(n.__)("Errors","wordpress-seo"),problems:Object(n.__)("Problems","wordpress-seo"),improvements:Object(n.__)("Improvements","wordpress-seo"),considerations:Object(n.__)("Considerations","wordpress-seo"),goodResults:Object(n.__)("Good results","wordpress-seo")},k=Object.assign(b,u);return Object(r.createElement)(j,null,d>0&&this.renderCollapsible(k.errors,l,a),c+h>0&&this.renderCollapsible(k.problems,l,[...i,...t]),p>0&&this.renderCollapsible(k.improvements,l,e),m>0&&this.renderCollapsible(k.considerations,l,o),g>0&&this.renderCollapsible(k.goodResults,l,s))}}N.propTypes={onMarkButtonClick:d.a.func,onEditButtonClick:d.a.func,problemsResults:d.a.array,improvementsResults:d.a.array,goodResults:d.a.array,considerationsResults:d.a.array,errorsResults:d.a.array,upsellResults:d.a.array,headingLevel:d.a.number,marksButtonStatus:d.a.string,marksButtonClassName:d.a.string,markButtonFactory:d.a.func,editButtonClassName:d.a.string,activeMarker:d.a.string,isPremium:d.a.bool,resultCategoryLabels:d.a.shape({errors:d.a.string,problems:d.a.string,improvements:d.a.string,considerations:d.a.string,goodResults:d.a.string}),onResultChange:d.a.func,shouldUpsellHighlighting:d.a.bool,renderHighlightingUpsell:d.a.func},N.defaultProps={onMarkButtonClick:()=>{},onEditButtonClick:()=>{},problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[],errorsResults:[],upsellResults:[],headingLevel:4,marksButtonStatus:"enabled",marksButtonClassName:"",markButtonFactory:null,editButtonClassName:"",activeMarker:"",isPremium:!1,resultCategoryLabels:{},onResultChange:()=>{},shouldUpsellHighlighting:!1,renderHighlightingUpsell:()=>{}};var M=N;const S=l.a.div`
`,H=l.a.p`
	font-size: 14px;
`,P=t=>Object(r.createElement)(S,{className:t.className},Object(r.createElement)(H,{className:t.className+"__text"},t.seoAssessmentText),Object(r.createElement)(h.StackedProgressBar,{className:"progress",items:t.seoAssessmentItems,barHeight:t.barHeight}),Object(r.createElement)(h.ScoreAssessments,{className:"assessments",items:t.seoAssessmentItems}));P.propTypes={className:d.a.string,seoAssessmentText:d.a.string,seoAssessmentItems:d.a.arrayOf(d.a.shape({html:d.a.string.isRequired,value:d.a.number.isRequired,color:d.a.string.isRequired})),barHeight:d.a.string},P.defaultProps={className:"seo-assessment",seoAssessmentText:"SEO Assessment",seoAssessmentItems:null,barHeight:"24px"};var I=P},5:function(t,e){t.exports=window.yoast.styledComponents},6:function(t,e){t.exports=window.yoast.styleGuide},71:function(t,e){t.exports=window.lodash.noop},9:function(t,e){t.exports=window.yoast.componentsNew}});