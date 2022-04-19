!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=201)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},11:function(e,t){e.exports=window.yoast.styleGuide},13:function(e,t){e.exports=window.jQuery},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t){super(e),this.name="ParseError",this.parseString=t}}},168:function(e,t,n){"use strict";var r=n(0),s=n(2),i=n(6),o=n(11),a=n(1),c=n.n(a),d=n(92),l=n(7),u=n.n(l);const p=u.a.div`
	margin-top: 8px;
`,g=u.a.pre`
	overflow-x: scroll;
	max-width: 500px;
	border: 1px solid;
	padding: 16px;
`;function m(e){let{title:t,value:n}=e;return n?Object(r.createElement)("p",null,Object(r.createElement)("strong",null,t),Object(r.createElement)("br",null),n):null}function h(e){let{title:t,value:n}=e;return n?Object(r.createElement)("details",null,Object(r.createElement)("summary",null,t),Object(r.createElement)(g,null,n)):null}function x(e){let{message:t,error:n}=e;return Object(r.createElement)(i.Alert,{type:"error"},Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(r.createElement)("details",null,Object(r.createElement)("summary",null,Object(s.__)("Error details","wordpress-seo")),Object(r.createElement)(p,null,Object(r.createElement)(m,{title:Object(s.__)("Request URL","wordpress-seo"),value:n.url}),Object(r.createElement)(m,{title:Object(s.__)("Request method","wordpress-seo"),value:n.method}),Object(r.createElement)(m,{title:Object(s.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(r.createElement)(m,{title:Object(s.__)("Error message","wordpress-seo"),value:n.message}),Object(r.createElement)(h,{title:Object(s.__)("Response","wordpress-seo"),value:n.parseString}),Object(r.createElement)(h,{title:Object(s.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}m.propTypes={title:c.a.string.isRequired,value:c.a.any},m.defaultProps={value:""},h.propTypes={title:c.a.string.isRequired,value:c.a.string},h.defaultProps={value:""},x.propTypes={message:c.a.string.isRequired,error:c.a.oneOfType([c.a.instanceOf(Error),c.a.instanceOf(d.a)]).isRequired};var w=n(131);class b extends r.Component{constructor(e){super(e),this.settings=yoastIndexingData,this.state={state:"idle",processed:0,error:null,amount:parseInt(this.settings.amount,10),firstTime:"1"===this.settings.firstTime},this.startIndexing=this.startIndexing.bind(this),this.stopIndexing=this.stopIndexing.bind(this)}async doIndexingRequest(e,t){const n=await fetch(e,{method:"POST",headers:{"X-WP-Nonce":t}}),r=await n.text();let s;try{s=JSON.parse(r)}catch(e){throw new w.a("Error parsing the response to JSON.",r)}if(!n.ok){const t=s.data?s.data.stackTrace:"";throw new d.a(s.message,e,"POST",n.status,t)}return s}async doPreIndexingAction(e){"function"==typeof this.props.preIndexingActions[e]&&await this.props.preIndexingActions[e](this.settings)}async doPostIndexingAction(e,t){"function"==typeof this.props.indexingActions[e]&&await this.props.indexingActions[e](t.objects,this.settings)}async doIndexing(e){let t=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[e];for(;this.isState("in_progress")&&!1!==t;)try{await this.doPreIndexingAction(e);const n=await this.doIndexingRequest(t,this.settings.restApi.nonce);await this.doPostIndexingAction(e,n),this.setState(e=>({processed:e.processed+n.objects.length,firstTime:!1})),t=n.next_url}catch(e){this.setState({state:"errored",error:e,firstTime:!1})}}async index(){for(const e of Object.keys(this.settings.restApi.indexing_endpoints))await this.doIndexing(e);this.isState("errored")||this.isState("idle")||this.completeIndexing()}async startIndexing(){this.setState({processed:0,state:"in_progress"},this.index)}completeIndexing(){this.setState({state:"completed"})}stopIndexing(){this.setState(e=>({state:"idle",processed:0,amount:e.amount-e.processed}))}componentDidMount(){var e,t;if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){const n=function(e,t){const n=new URL(e);return n.searchParams.delete("start-indexation"),n.href}(window.location.href);null,e=document.title,t=n,window.history.pushState(null,e,t),this.startIndexing()}}componentDidUpdate(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}isState(e){return this.state.state===e}renderFirstIndexationNotice(){return Object(r.createElement)(i.Alert,{type:"info"},Object(s.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}renderStartButton(){return Object(r.createElement)(i.NewButton,{variant:"primary",onClick:this.startIndexing},Object(s.__)("Start SEO data optimization","wordpress-seo"))}renderStopButton(){return Object(r.createElement)(i.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(s.__)("Stop SEO data optimization","wordpress-seo"))}renderDisabledTool(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("p",null,Object(r.createElement)(i.NewButton,{variant:"secondary",disabled:!0},Object(s.__)("Start SEO data optimization","wordpress-seo"))),Object(r.createElement)(i.Alert,{type:"info"},Object(s.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}renderProgressBar(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:o.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(r.createElement)("p",{style:{color:o.colors.$palette_grey_text}},Object(s.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}renderErrorAlert(){return Object(r.createElement)(x,{message:yoastIndexingData.errorMessage,error:this.state.error})}renderTool(){return Object(r.createElement)(r.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}render(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(r.createElement)(i.Alert,{type:"success"},Object(s.__)("SEO data optimization complete","wordpress-seo")):this.renderTool()}}b.propTypes={indexingActions:c.a.object,preIndexingActions:c.a.object,indexingStateCallback:c.a.func},b.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:()=>{}},t.a=b},2:function(e,t){e.exports=window.wp.i18n},201:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(13),i=n.n(s),o=n(168);const a={},c={};let d;function l(){d||(d=document.getElementById("yoast-seo-indexing-action")),d&&Object(r.render)(Object(r.createElement)(o.a,{preIndexingActions:a,indexingActions:c}),d)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.registerPreIndexingAction=(e,t)=>{a[e]=t,l()},window.yoast.indexing.registerIndexingAction=(e,t)=>{c[e]=t,l()},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)},i()((function(){l()}))},6:function(e,t){e.exports=window.yoast.componentsNew},7:function(e,t){e.exports=window.yoast.styledComponents},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t,n,r,s){super(e),this.name="RequestError",this.url=t,this.method=n,this.statusCode=r,this.stackTrace=s}}}});