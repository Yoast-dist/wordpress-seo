!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=305)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.yoast.styledComponents},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t,n,r,s){super(e),this.name="RequestError",this.url=t,this.method=n,this.statusCode=r,this.stackTrace=s}}},16:function(e,t){e.exports=window.yoast.styleGuide},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t){super(e),this.name="ParseError",this.parseString=t}}},191:function(e,t,n){"use strict";function r(e,t){const n=new URL(e);return n.searchParams.delete(t),n.href}function s(e,t,n){window.history.pushState(e,t,n)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}))},2:function(e,t){e.exports=window.yoast.propTypes},21:function(e,t){e.exports=window.jQuery},305:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(21),i=n.n(s),o=n(1),a=n(8),c=n(16),d=n(2),l=n.n(d),u=n(191),p=n(9),g=n(10),m=n.n(g),h=n(128);const{stripTagsFromHtmlString:x}=p.strings,w=["a","p"],b=m.a.div`
	margin-top: 8px;
`,f=m.a.pre`
	overflow-x: scroll;
	max-width: 500px;
	border: 1px solid;
	padding: 16px;
`;function y(e){let{title:t,value:n}=e;return n?Object(r.createElement)("p",null,Object(r.createElement)("strong",null,t),Object(r.createElement)("br",null),n):null}function O(e){let{title:t,value:n}=e;return n?Object(r.createElement)("details",null,Object(r.createElement)("summary",null,t),Object(r.createElement)(f,null,n)):null}function j(e){let{message:t,error:n}=e;return Object(r.createElement)(a.Alert,{type:"error"},Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:x(t,w)}}),Object(r.createElement)("details",null,Object(r.createElement)("summary",null,Object(o.__)("Error details","wordpress-seo")),Object(r.createElement)(b,null,Object(r.createElement)(y,{title:Object(o.__)("Request URL","wordpress-seo"),value:n.url}),Object(r.createElement)(y,{title:Object(o.__)("Request method","wordpress-seo"),value:n.method}),Object(r.createElement)(y,{title:Object(o.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(r.createElement)(y,{title:Object(o.__)("Error message","wordpress-seo"),value:n.message}),Object(r.createElement)(O,{title:Object(o.__)("Response","wordpress-seo"),value:n.parseString}),Object(r.createElement)(O,{title:Object(o.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}y.propTypes={title:l.a.string.isRequired,value:l.a.any},y.defaultProps={value:""},O.propTypes={title:l.a.string.isRequired,value:l.a.string},O.defaultProps={value:""},j.propTypes={message:l.a.string.isRequired,error:l.a.oneOfType([l.a.instanceOf(Error),l.a.instanceOf(h.a)]).isRequired};var E=n(173);class S extends r.Component{constructor(e){super(e),this.settings=yoastIndexingData,this.state={state:"idle",processed:0,error:null,amount:parseInt(this.settings.amount,10),firstTime:"1"===this.settings.firstTime},this.startIndexing=this.startIndexing.bind(this),this.stopIndexing=this.stopIndexing.bind(this)}async doIndexingRequest(e,t){const n=await fetch(e,{method:"POST",headers:{"X-WP-Nonce":t}}),r=await n.text();let s;try{s=JSON.parse(r)}catch(e){throw new E.a("Error parsing the response to JSON.",r)}if(!n.ok){const t=s.data?s.data.stackTrace:"";throw new h.a(s.message,e,"POST",n.status,t)}return s}async doPreIndexingAction(e){"function"==typeof this.props.preIndexingActions[e]&&await this.props.preIndexingActions[e](this.settings)}async doPostIndexingAction(e,t){"function"==typeof this.props.indexingActions[e]&&await this.props.indexingActions[e](t.objects,this.settings)}async doIndexing(e){let t=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[e];for(;this.isState("in_progress")&&!1!==t;)try{await this.doPreIndexingAction(e);const n=await this.doIndexingRequest(t,this.settings.restApi.nonce);await this.doPostIndexingAction(e,n),this.setState(e=>({processed:e.processed+n.objects.length,firstTime:!1})),t=n.next_url}catch(e){this.setState({state:"errored",error:e,firstTime:!1})}}async index(){for(const e of Object.keys(this.settings.restApi.indexing_endpoints))await this.doIndexing(e);this.isState("errored")||this.isState("idle")||this.completeIndexing()}async startIndexing(){this.setState({processed:0,state:"in_progress"},this.index)}completeIndexing(){this.setState({state:"completed"})}stopIndexing(){this.setState(e=>({state:"idle",processed:0,amount:e.amount-e.processed}))}componentDidMount(){if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){const e=Object(u.b)(window.location.href,"start-indexation");Object(u.a)(null,document.title,e),this.startIndexing()}}componentDidUpdate(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}isState(e){return this.state.state===e}renderFirstIndexationNotice(){return Object(r.createElement)(a.Alert,{type:"info"},Object(o.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}renderStartButton(){return Object(r.createElement)(a.NewButton,{variant:"primary",onClick:this.startIndexing},Object(o.__)("Start SEO data optimization","wordpress-seo"))}renderStopButton(){return Object(r.createElement)(a.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(o.__)("Stop SEO data optimization","wordpress-seo"))}renderDisabledTool(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("p",null,Object(r.createElement)(a.NewButton,{variant:"secondary",disabled:!0},Object(o.__)("Start SEO data optimization","wordpress-seo"))),Object(r.createElement)(a.Alert,{type:"info"},Object(o.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}renderProgressBar(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:c.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(r.createElement)("p",{style:{color:c.colors.$palette_grey_text}},Object(o.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}renderErrorAlert(){return Object(r.createElement)(j,{message:yoastIndexingData.errorMessage,error:this.state.error})}renderTool(){return Object(r.createElement)(r.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}render(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(r.createElement)(a.Alert,{type:"success"},Object(o.__)("SEO data optimization complete","wordpress-seo")):this.renderTool()}}S.propTypes={indexingActions:l.a.object,preIndexingActions:l.a.object,indexingStateCallback:l.a.func},S.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:()=>{}};var _=S;let I;function A(){I||(I=document.getElementById("yoast-seo-indexing-action")),I&&Object(r.render)(Object(r.createElement)(_,{preIndexingActions:window.yoast.indexing.preIndexingActions,indexingActions:window.yoast.indexing.indexingActions}),I)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.preIndexingActions={},window.yoast.indexing.indexingActions={},window.yoast.indexing.registerPreIndexingAction=(e,t)=>{window.yoast.indexing.preIndexingActions[e]=t,A()},window.yoast.indexing.registerIndexingAction=(e,t)=>{window.yoast.indexing.indexingActions[e]=t,A()},i()((function(){A()}))},8:function(e,t){e.exports=window.yoast.componentsNew},9:function(e,t){e.exports=window.yoast.helpers}});