(()=>{"use strict";const e=window.React;var o,r;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},s.apply(this,arguments)}const n=window.wp.i18n,a=window.yoast.analysis,c=window.lodash,t=window.wp.element,i=window.yoast.componentsNew,d=window.yoast.styleGuide,l=window.yoast.propTypes;function u({score:e,label:o,scoreValue:r}){return(0,t.createElement)("div",{className:"yoast-analysis-check"},(0,t.createElement)(i.SvgIcon,function(e){switch(e){case"loading":return{icon:"loading-spinner",color:d.colors.$color_green_medium_light};case"not-set":return{icon:"seo-score-none",color:d.colors.$color_score_icon};case"noindex":return{icon:"seo-score-none",color:d.colors.$color_noindex};case"good":return{icon:"seo-score-good",color:d.colors.$color_green_medium};case"ok":return{icon:"seo-score-ok",color:d.colors.$color_ok};default:return{icon:"seo-score-bad",color:d.colors.$color_red}}}(e)),(0,t.createElement)("span",null," ",o," ",r&&(0,t.createElement)("strong",null,r)))}u.propTypes={score:l.string.isRequired,label:l.string.isRequired,scoreValue:l.string},u.defaultProps={scoreValue:""},window.yoast=window.yoast||{},window.yoast.frontendInspector={getIndicatorForScore:function(e){return(0,c.isNil)(e)||(e/=10),function(e){switch(e){case"feedback":return{className:"na",screenReaderText:(0,n.__)("Feedback","wordpress-seo"),screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""};case"bad":return{className:"bad",screenReaderText:(0,n.__)("Needs improvement","wordpress-seo"),screenReaderReadabilityText:(0,n.__)("Needs improvement","wordpress-seo"),screenReaderInclusiveLanguageText:(0,n.__)("Needs improvement","wordpress-seo")};case"ok":return{className:"ok",screenReaderText:(0,n.__)("OK SEO score","wordpress-seo"),screenReaderReadabilityText:(0,n.__)("OK","wordpress-seo"),screenReaderInclusiveLanguageText:(0,n.__)("Potentially non-inclusive","wordpress-seo")};case"good":return{className:"good",screenReaderText:(0,n.__)("Good SEO score","wordpress-seo"),screenReaderReadabilityText:(0,n.__)("Good","wordpress-seo"),screenReaderInclusiveLanguageText:(0,n.__)("Good","wordpress-seo")};default:return{className:"loading",screenReaderText:"",screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""}}}(a.interpreters.scoreToRating(e))},AnalysisCheck:u,YoastIcon:n=>e.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 425 456.27"},n),o||(o=e.createElement("path",{d:"M73 405.26a66.79 66.79 0 0 1-6.54-1.7 64.75 64.75 0 0 1-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 0 1-5.08-4.19 69.21 69.21 0 0 1-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 0 1-3.44-5.64 68.29 68.29 0 0 1-8.29-32.55V142.13a68.26 68.26 0 0 1 8.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0 1 14.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0 1 73 75.09a68.75 68.75 0 0 1 13.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 0 0 0 142.13v196.09A86.84 86.84 0 0 0 86.75 425h11.32v-18.35H86.75A68.75 68.75 0 0 1 73 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 0 1 8.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 0 1 391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 0 1 8.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 0 0-56.45-81.28z"})),r||(r=e.createElement("path",{stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81,d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 0 1 0 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z"})))}})();