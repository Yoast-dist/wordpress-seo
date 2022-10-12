!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=299)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class s extends Error{constructor(e,t){super(e),this.name="ParseError",this.parseString=t}}},138:function(e,t,n){"use strict";function s(e,t){const n=new URL(e);return n.searchParams.delete(t),n.href}function i(e,t,n){window.history.pushState(e,t,n)}n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}))},15:function(e,t){e.exports=window.yoast.styleGuide},17:function(e,t){e.exports=window.jQuery},2:function(e,t){e.exports=window.wp.i18n},299:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(17),r=n.n(i),o=n(2),a=n(7),d=n(15),c=n(1),l=n.n(c),u=n(138),p=n(94),g=n(8),x=n.n(g);const m=x.a.div`
	margin-top: 8px;
`,w=x.a.pre`
	overflow-x: scroll;
	max-width: 500px;
	border: 1px solid;
	padding: 16px;
`;function h(e){let{title:t,value:n}=e;return n?Object(s.createElement)("p",null,Object(s.createElement)("strong",null,t),Object(s.createElement)("br",null),n):null}function b(e){let{title:t,value:n}=e;return n?Object(s.createElement)("details",null,Object(s.createElement)("summary",null,t),Object(s.createElement)(w,null,n)):null}function y(e){let{message:t,error:n}=e;return Object(s.createElement)(a.Alert,{type:"error"},Object(s.createElement)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(s.createElement)("details",null,Object(s.createElement)("summary",null,Object(o.__)("Error details","wordpress-seo")),Object(s.createElement)(m,null,Object(s.createElement)(h,{title:Object(o.__)("Request URL","wordpress-seo"),value:n.url}),Object(s.createElement)(h,{title:Object(o.__)("Request method","wordpress-seo"),value:n.method}),Object(s.createElement)(h,{title:Object(o.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(s.createElement)(h,{title:Object(o.__)("Error message","wordpress-seo"),value:n.message}),Object(s.createElement)(b,{title:Object(o.__)("Response","wordpress-seo"),value:n.parseString}),Object(s.createElement)(b,{title:Object(o.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}h.propTypes={title:l.a.string.isRequired,value:l.a.any},h.defaultProps={value:""},b.propTypes={title:l.a.string.isRequired,value:l.a.string},b.defaultProps={value:""},y.propTypes={message:l.a.string.isRequired,error:l.a.oneOfType([l.a.instanceOf(Error),l.a.instanceOf(p.a)]).isRequired};var f=n(135);class O extends s.Component{constructor(e){super(e),this.settings=yoastIndexingData,this.state={state:"idle",processed:0,error:null,amount:parseInt(this.settings.amount,10),firstTime:"1"===this.settings.firstTime},this.startIndexing=this.startIndexing.bind(this),this.stopIndexing=this.stopIndexing.bind(this)}async doIndexingRequest(e,t){const n=await fetch(e,{method:"POST",headers:{"X-WP-Nonce":t}}),s=await n.text();let i;try{i=JSON.parse(s)}catch(e){throw new f.a("Error parsing the response to JSON.",s)}if(!n.ok){const t=i.data?i.data.stackTrace:"";throw new p.a(i.message,e,"POST",n.status,t)}return i}async doPreIndexingAction(e){"function"==typeof this.props.preIndexingActions[e]&&await this.props.preIndexingActions[e](this.settings)}async doPostIndexingAction(e,t){"function"==typeof this.props.indexingActions[e]&&await this.props.indexingActions[e](t.objects,this.settings)}async doIndexing(e){let t=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[e];for(;this.isState("in_progress")&&!1!==t;)try{await this.doPreIndexingAction(e);const n=await this.doIndexingRequest(t,this.settings.restApi.nonce);await this.doPostIndexingAction(e,n),this.setState(e=>({processed:e.processed+n.objects.length,firstTime:!1})),t=n.next_url}catch(e){this.setState({state:"errored",error:e,firstTime:!1})}}async index(){for(const e of Object.keys(this.settings.restApi.indexing_endpoints))await this.doIndexing(e);this.isState("errored")||this.isState("idle")||this.completeIndexing()}async startIndexing(){this.setState({processed:0,state:"in_progress"},this.index)}completeIndexing(){this.setState({state:"completed"})}stopIndexing(){this.setState(e=>({state:"idle",processed:0,amount:e.amount-e.processed}))}componentDidMount(){if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){const e=Object(u.b)(window.location.href,"start-indexation");Object(u.a)(null,document.title,e),this.startIndexing()}}componentDidUpdate(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}isState(e){return this.state.state===e}renderFirstIndexationNotice(){return Object(s.createElement)(a.Alert,{type:"info"},Object(o.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}renderStartButton(){return Object(s.createElement)(a.NewButton,{variant:"primary",onClick:this.startIndexing},Object(o.__)("Start SEO data optimization","wordpress-seo"))}renderStopButton(){return Object(s.createElement)(a.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(o.__)("Stop SEO data optimization","wordpress-seo"))}renderDisabledTool(){return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("p",null,Object(s.createElement)(a.NewButton,{variant:"secondary",disabled:!0},Object(o.__)("Start SEO data optimization","wordpress-seo"))),Object(s.createElement)(a.Alert,{type:"info"},Object(o.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}renderProgressBar(){return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(a.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:d.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(s.createElement)("p",{style:{color:d.colors.$palette_grey_text}},Object(o.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}renderErrorAlert(){return Object(s.createElement)(y,{message:yoastIndexingData.errorMessage,error:this.state.error})}renderTool(){return Object(s.createElement)(s.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}render(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(s.createElement)(a.Alert,{type:"success"},Object(o.__)("SEO data optimization complete","wordpress-seo")):this.settings.showAlreadyOptimizedMessage?Object(s.createElement)(a.Alert,{type:"success"},Object(o.__)("SEO data is already optimized","wordpress-seo")):this.renderTool()}}O.propTypes={indexingActions:l.a.object,preIndexingActions:l.a.object,indexingStateCallback:l.a.func},O.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:()=>{}};var j=O;let E;function _(){E||(E=document.getElementById("yoast-seo-indexing-action")),E&&Object(s.render)(Object(s.createElement)(j,{preIndexingActions:window.yoast.indexing.preIndexingActions,indexingActions:window.yoast.indexing.indexingActions}),E)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.preIndexingActions={},window.yoast.indexing.indexingActions={},window.yoast.indexing.registerPreIndexingAction=(e,t)=>{window.yoast.indexing.preIndexingActions[e]=t,_()},window.yoast.indexing.registerIndexingAction=(e,t)=>{window.yoast.indexing.indexingActions[e]=t,_()},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)},r()((function(){_()}))},7:function(e,t){e.exports=window.yoast.componentsNew},8:function(e,t){e.exports=window.yoast.styledComponents},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class s extends Error{constructor(e,t,n,s,i){super(e),this.name="RequestError",this.url=t,this.method=n,this.statusCode=s,this.stackTrace=i}}}});