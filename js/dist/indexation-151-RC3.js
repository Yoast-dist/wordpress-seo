(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[11],{20:function(e,t){e.exports=window.yoast.styleGuide},3:function(e,t){e.exports=window.wp.i18n},4:function(e,t){e.exports=window.wp.element},463:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(4),i=n(3),s=n(5),a=n(20);function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var s=t[o](i),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}("next")})}}var u={},p={};window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.registerPreIndexingAction=function(e,t){u[e]=t},window.yoast.indexing.registerIndexingAction=function(e,t){p[e]=t},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)};var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.settings=yoastIndexingData,n.state={inProgress:!1,processed:0,amount:n.settings.amount,error:null},n.startIndexing=n.startIndexing.bind(n),n.stopIndexing=n.stopIndexing.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"doIndexingRequest",value:function(){var e=c(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"X-WP-Nonce":n}});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"doPreIndexingAction",value:function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof u[t]){e.next=3;break}return e.next=3,u[t](this.settings);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"doPostIndexingAction",value:function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof p[t]){e.next=3;break}return e.next=3,p[t](n.objects,this.settings);case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"doIndexing",value:function(){var e=c(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.settings.restApi.root+this.settings.restApi.endpoints[t];case 1:if(!(this.state.inProgress&&!1!==n&&this.state.processed<=this.state.amount)){e.next=11;break}return e.prev=2,e.delegateYield(regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.doPreIndexingAction(t);case 2:return e.next=4,r.doIndexingRequest(n,r.settings.restApi.nonce);case 4:return o=e.sent,e.next=7,r.doPostIndexingAction(t,o);case 7:r.setState(function(e){return{processed:e.processed+o.objects.length}}),n=o.next_url;case 9:case"end":return e.stop()}},e,r)})(),"t0",4);case 4:e.next=9;break;case 6:e.prev=6,e.t1=e.catch(2),this.setState({inProgress:!1,error:e.t1});case 9:e.next=1;break;case 11:case"end":return e.stop()}},e,this,[[2,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"index",value:function(){var e=c(regeneratorRuntime.mark(function e(){var t,n,r,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,r=void 0,e.prev=3,o=Object.keys(this.settings.restApi.endpoints)[Symbol.iterator]();case 5:if(t=(i=o.next()).done){e.next=12;break}return s=i.value,e.next=9,this.doIndexing(s);case 9:t=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n=!0,r=e.t0;case 18:e.prev=18,e.prev=19,!t&&o.return&&o.return();case 21:if(e.prev=21,!n){e.next=24;break}throw r;case 24:return e.finish(21);case 25:return e.finish(18);case 26:!this.state.error&&this.state.inProgress&&this.completeIndexing();case 27:case"end":return e.stop()}},e,this,[[3,14,18,26],[19,,21,25]])}));return function(){return e.apply(this,arguments)}}()},{key:"startIndexing",value:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({processed:0,inProgress:!0,error:null},this.index);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"completeIndexing",value:function(){this.setState(function(e){return{inProgress:!1,processed:e.amount}})}},{key:"stopIndexing",value:function(){this.setState(function(e){return{inProgress:!1,amount:e.amount-e.processed}})}},{key:"render",value:function(){return this.settings.disabled?wp.element.createElement(o.Fragment,null,wp.element.createElement("p",null,wp.element.createElement(s.NewButton,{variant:"secondary",disabled:!0},(0,i.__)("Start SEO data optimization","wordpress-seo"))),wp.element.createElement(s.Alert,{type:"info"},(0,i.__)("This button to optimize the SEO data for your website is disabled for non-production environments.","wordpress-seo"))):this.state.processed>=this.state.amount?wp.element.createElement(s.Alert,{type:"success"},(0,i.__)("SEO data optimization complete","wordpress-seo")):wp.element.createElement(o.Fragment,null,this.state.inProgress&&wp.element.createElement(o.Fragment,null,wp.element.createElement(s.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:a.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),wp.element.createElement("p",{style:{color:a.colors.$palette_grey_text}},(0,i.__)("Optimizing SEO data... This may take a while.","wordpress-seo"))),this.state.error&&wp.element.createElement(s.Alert,{type:"error"},(0,i.__)("Oops, something has gone wrong and we couldn't complete the optimization of your SEO data. Please click the button again to re-start the process.","wordpress-seo")),this.state.inProgress?wp.element.createElement(s.NewButton,{variant:"secondary",onClick:this.stopIndexing},(0,i.__)("Stop SEO data optimization","wordpress-seo")):wp.element.createElement(s.NewButton,{variant:"primary",onClick:this.startIndexing},(0,i.__)("Start SEO data optimization","wordpress-seo")))}}]),t}();jQuery(document).ready(function(){var e=document.getElementById("yoast-seo-indexing-action");e&&(0,o.render)(wp.element.createElement(d,null),e)})},5:function(e,t){e.exports=window.yoast.componentsNew}},[[463,0]]]);