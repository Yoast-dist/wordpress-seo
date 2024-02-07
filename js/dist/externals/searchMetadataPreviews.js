(()=>{var e={8141:(e,t,n)=>{"use strict";var i=n(4836);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=i(n(404));e.exports=t.default},404:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},6679:e=>{"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},139:e=>{"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},3759:e=>{"use strict";e.exports=function(e,t,n,i,o,r,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,i,o,r,s,a],c=0;(l=new Error(t.replace(/%s/g,(function(){return p[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},3620:(e,t,n)=>{"use strict";var i=n(139);e.exports=i},6746:(e,t,n)=>{"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(n(9196)),r=a(n(9156)),s=a(n(6743));function a(e){return e&&e.__esModule?e:{default:e}}var l=void 0;function p(e,t){var n,s,a,c,d,u,h,g,m=[],f={};for(u=0;u<e.length;u++)if("string"!==(d=e[u]).type){if(!t.hasOwnProperty(d.value)||void 0===t[d.value])throw new Error("Invalid interpolation, missing component node: `"+d.value+"`");if("object"!==i(t[d.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+d.value+"`","\n> "+l);if("componentClose"===d.type)throw new Error("Missing opening component token: `"+d.value+"`");if("componentOpen"===d.type){n=t[d.value],a=u;break}m.push(t[d.value])}else m.push(d.value);return n&&(c=function(e,t){var n,i,o=t[e],r=0;for(i=e+1;i<t.length;i++)if((n=t[i]).value===o.value){if("componentOpen"===n.type){r++;continue}if("componentClose"===n.type){if(0===r)return i;r--}}throw new Error("Missing closing component token `"+o.value+"`")}(a,e),h=p(e.slice(a+1,c),t),s=o.default.cloneElement(n,{},h),m.push(s),c<e.length-1&&(g=p(e.slice(c+1),t),m=m.concat(g))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(f["interpolation-child-"+t]=e)})),(0,r.default)(f))}t.Z=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(l=t,!n)return t;if("object"!==(void 0===n?"undefined":i(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var r=(0,s.default)(t);try{return p(r,n)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},6743:e=>{"use strict";function t(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(t)}},9156:(e,t,n)=>{"use strict";var i=n(9196),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,r=n(139),s=n(3759),a=n(3620),l=".",p=":",c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator";function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,i={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return i[e]}))):t.toString(36);var n,i}function h(e,t,n,i){var r,a=typeof e;if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===o)return n(i,e,""===t?l+u(e,0):t),1;var g=0,m=""===t?l:t+p;if(Array.isArray(e))for(var f=0;f<e.length;f++)g+=h(r=e[f],m+u(r,f),n,i);else{var v=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(v)for(var x,b=v.call(e),E=0;!(x=b.next()).done;)g+=h(r=x.value,m+u(r,E++),n,i);else if("object"===a){var y=""+e;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===y?"object with keys {"+Object.keys(e).join(", ")+"}":y,"")}}return g}var g=/\/+/g;function m(e){return(""+e).replace(g,"$&/")}var f,v,x=b,b=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)};function E(e,t,n,i){this.result=e,this.keyPrefix=t,this.func=n,this.context=i,this.count=0}function y(e,t,n){var o,s,a=e.result,l=e.keyPrefix,p=e.func,c=e.context,d=p.call(c,t,e.count++);Array.isArray(d)?w(d,a,n,r.thatReturnsArgument):null!=d&&(i.isValidElement(d)&&(o=d,s=l+(!d.key||t&&t.key===d.key?"":m(d.key)+"/")+n,d=i.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),a.push(d))}function w(e,t,n,i,o){var r="";null!=n&&(r=m(n)+"/");var s=E.getPooled(t,r,i,o);!function(e,t,n){null==e||h(e,"",t,n)}(e,y,s),E.release(s)}E.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f=function(e,t,n,i){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n,i),r}return new o(e,t,n,i)},(v=E).instancePool=[],v.getPooled=f||x,v.poolSize||(v.poolSize=10),v.release=function(e){var t=this;s(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(i.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,r.thatReturnsArgument);return t}},6871:(e,t,n)=>{"use strict";function i(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function r(e,t){try{var n=this.props,i=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,i)}finally{this.props=n,this.state=i}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,p="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+p+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=i,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var i=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,i)}}return e}n.r(t),n.d(t,{polyfill:()=>s}),i.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},9183:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}t.default=e}(n(5890));var i=a(n(8141)),o=a(n(6679)),r=a(n(9196)),s=a(n(7743));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}n(953);var p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,i.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},d=function(e){var t,n;function i(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).onEnter=function(e,n){var i=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),p(e,i),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var i=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,i),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var i=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,r=n?i+" "+o:o;t.removeClasses(e,n?"appear":"enter"),p(e,r),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),p(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),p(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,i="string"==typeof n,o=i?(i&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:i?o+"-active":n[e+"Active"],doneClassName:i?o+"-done":n[e+"Done"]}},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=i.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),i=n.className,o=n.activeClassName,r=n.doneClassName;i&&c(e,i),o&&c(e,o),r&&c(e,r)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,p(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,r.default.createElement(s.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(r.default.Component);d.defaultProps={classNames:""},d.propTypes={};var u=d;t.default=u,e.exports=t.default},1534:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,s(n(5890));var i=s(n(9196)),o=n(1850),r=s(n(5357));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t,n;function s(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=s.prototype;return a.handleLifecycle=function(e,t,n){var r,s=this.props.children,a=i.default.Children.toArray(s)[t];a.props[e]&&(r=a.props)[e].apply(r,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},a.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),s=i.default.Children.toArray(t),a=s[0],l=s[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,i.default.createElement(r.default,o,n?i.default.cloneElement(a,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):i.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},s}(i.default.Component);a.propTypes={};var l=a;t.default=l,e.exports=t.default},7743:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(5890)),o=a(n(9196)),r=a(n(1850)),s=n(6871);function a(e){return e&&e.__esModule?e:{default:e}}n(953);var l="unmounted";t.UNMOUNTED=l;var p="exited";t.EXITED=p;var c="entering";t.ENTERING=c;var d="entered";t.ENTERED=d;var u="exiting";t.EXITING=u;var h=function(e){var t,n;function i(t,n){var i;i=e.call(this,t,n)||this;var o,r=n.transitionGroup,s=r&&!r.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?s?(o=p,i.appearStatus=c):o=d:o=t.unmountOnExit||t.mountOnEnter?l:p,i.state={status:o},i.nextCallback=null,i}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.getChildContext=function(){return{transitionGroup:null}},i.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:p}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==d&&(t=c):n!==c&&n!==d||(t=u)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=r.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:l})},s.performEnter=function(e,t){var n=this,i=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,r=this.getTimeouts(),s=o?r.appear:r.enter;t||i?(this.props.onEnter(e,o),this.safeSetState({status:c},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:d},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,i=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:u},(function(){t.props.onExiting(e),t.onTransitionEnd(e,i.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var i=null==t&&!this.props.addEndListener;e&&!i?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,i=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete i.in,delete i.mountOnEnter,delete i.unmountOnExit,delete i.appear,delete i.enter,delete i.exit,delete i.timeout,delete i.addEndListener,delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,"function"==typeof n)return n(e,i);var r=o.default.Children.only(n);return o.default.cloneElement(r,i)},i}(o.default.Component);function g(){}h.contextTypes={transitionGroup:i.object},h.childContextTypes={transitionGroup:function(){}},h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},h.UNMOUNTED=0,h.EXITED=1,h.ENTERING=2,h.ENTERED=3,h.EXITING=4;var m=(0,s.polyfill)(h);t.default=m},5357:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var i=a(n(5890)),o=a(n(9196)),r=n(6871),s=n(7368);function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=function(e){var t,n;function i(t,n){var i,o=(i=e.call(this,t,n)||this).handleExited.bind(p(p(i)));return i.state={handleExited:o,firstRender:!0},i}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=i.prototype;return r.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},r.componentDidMount=function(){this.appeared=!0,this.mounted=!0},r.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(e,t){var n=t.children,i=t.handleExited;return{children:t.firstRender?(0,s.getInitialChildMapping)(e,i):(0,s.getNextChildMapping)(e,n,i),firstRender:!1}},r.handleExited=function(e,t){var n=(0,s.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},r.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),r=c(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r:o.default.createElement(t,i,r)},i}(o.default.Component);d.childContextTypes={transitionGroup:i.default.object.isRequired},d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};var u=(0,r.polyfill)(d);t.default=u,e.exports=t.default},4832:(e,t,n)=>{"use strict";var i=a(n(9183)),o=a(n(1534)),r=a(n(5357)),s=a(n(7743));function a(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:s.default,TransitionGroup:r.default,ReplaceTransition:o.default,CSSTransition:i.default}},7368:(e,t,n)=>{"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=r,t.getInitialChildMapping=function(e,t){return o(e.children,(function(n){return(0,i.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:s(n,"appear",e),enter:s(n,"enter",e),exit:s(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var a=o(e.children),l=r(t,a);return Object.keys(l).forEach((function(o){var r=l[o];if((0,i.isValidElement)(r)){var p=o in t,c=o in a,d=t[o],u=(0,i.isValidElement)(d)&&!d.props.in;!c||p&&!u?c||!p||u?c&&p&&(0,i.isValidElement)(d)&&(l[o]=(0,i.cloneElement)(r,{onExited:n.bind(null,r),in:d.props.in,exit:s(r,"exit",e),enter:s(r,"enter",e)})):l[o]=(0,i.cloneElement)(r,{in:!1}):l[o]=(0,i.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:s(r,"exit",e),enter:s(r,"enter",e)})}})),l};var i=n(9196);function o(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function r(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var i,o=Object.create(null),r=[];for(var s in e)s in t?r.length&&(o[s]=r,r=[]):r.push(s);var a={};for(var l in t){if(o[l])for(i=0;i<o[l].length;i++){var p=o[l][i];a[o[l][i]]=n(p)}a[l]=n(l)}for(i=0;i<r.length;i++)a[r[i]]=n(r[i]);return a}function s(e,t,n){return null!=n[t]?n[t]:e.props[t]}},953:(e,t,n)=>{"use strict";var i;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(i=n(5890))&&i.__esModule,t.timeoutsShape=null,t.classNamesShape=null},9196:e=>{"use strict";e.exports=window.React},1850:e=>{"use strict";e.exports=window.ReactDOM},5890:e=>{"use strict";e.exports=window.yoast.propTypes},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{FixedWidthContainer:()=>f,HelpTextWrapper:()=>F,SnippetEditor:()=>Qe,SnippetPreview:()=>Me,getDescriptionProgress:()=>Fe,getTitleProgress:()=>Pe,lengthProgressShape:()=>Ae});const e=window.wp.element;var t=n(9196),o=n.n(t);const r=window.yoast.styledComponents;var s=n.n(r),a=n(5890),l=n.n(a);const p=window.lodash.debounce;var c=n.n(p);const d=window.wp.i18n,u=s().div`
	overflow: auto;
	width: ${e=>e.widthValue}px;
	padding: 0 ${e=>e.paddingValue}px;
	max-width: 100%;
	box-sizing: border-box;
`,h=s().div`
	width: ${e=>e.widthValue}px;
`,g=s().div`
	text-align: center;
	margin: 1em 0 5px;
`,m=s().div`
	display: inline-block;
	box-sizing: border-box;

	&:before{
		display: inline-block;
		margin-right: 10px;
		font-size: 20px;
		line-height: inherit;
		vertical-align: text-top;
		content: "\\21c4";
		box-sizing: border-box;
	}
`;class f extends t.Component{constructor(e){super(e),this.state={showScrollHint:!1},this.setContainerRef=this.setContainerRef.bind(this),this.determineSize=c()(this.determineSize.bind(this),100)}setContainerRef(e){if(!e)return null;this._container=e,this.determineSize(),window.addEventListener("resize",this.determineSize)}determineSize(){const e=this._container.offsetWidth;this.setState({showScrollHint:e<this.props.width})}componentWillUnmount(){window.removeEventListener("resize",this.determineSize)}render(){const{width:t,padding:n,children:i,className:r,id:s}=this.props,a=t-2*n;return(0,e.createElement)(o().Fragment,null,(0,e.createElement)(u,{id:s,className:r,widthValue:t,paddingValue:n,ref:this.setContainerRef},(0,e.createElement)(h,{widthValue:a},i)),this.state.showScrollHint&&(0,e.createElement)(g,null,(0,e.createElement)(m,null,(0,d.__)("Scroll to see the preview content.","wordpress-seo"))))}}f.propTypes={id:l().string,width:l().number.isRequired,padding:l().number,children:l().node.isRequired,className:l().string},f.defaultProps={id:"",padding:0,className:""};const v=window.lodash.uniqueId;var x=n.n(v);const b=window.yoast.componentsNew,E=window.yoast.helpers,y=window.yoast.styleGuide;var w=n(4832);const S=s().div`
	& > :first-child {
		overflow: hidden;
		transition: height ${e=>`${e.duration}ms`} ease-out;
	}
`;class C extends o().Component{resetHeight(e){e.style.height="0"}setHeight(e){const t=function(e){return Math.max(e.clientHeight,e.offsetHeight,e.scrollHeight)}(e);e.style.height=t+"px"}removeHeight(e){e.style.height=null}render(){return(0,e.createElement)(S,{duration:this.props.duration},(0,e.createElement)(w.CSSTransition,{in:this.props.isOpen,timeout:this.props.duration,classNames:"slide",unmountOnExit:!0,onEnter:this.resetHeight,onEntering:this.setHeight,onEntered:this.removeHeight,onExit:this.setHeight,onExiting:this.resetHeight},this.props.children))}}C.propTypes={isOpen:l().bool.isRequired,duration:l().number,children:l().node},C.defaultProps={duration:300,children:[]};const R=s().div`
	max-width: 600px;
	font-weight: normal;
	// Don't apply a bottom margin to avoid "jumpiness".
	margin: ${(0,E.getDirectionalStyle)("0 20px 0 25px","0 20px 0 15px")};
`,_=s().div`
	max-width: ${e=>e.panelMaxWidth};
`,M=s()(b.Button)`
	min-width: 14px;
	min-height: 14px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid transparent;
	box-shadow: none;
	display: block;
	margin: -44px -10px 10px 0;
	background-color: transparent;
	float: ${(0,E.getDirectionalStyle)("right","left")};
	padding: ${(0,E.getDirectionalStyle)("3px 0 0 6px","3px 0 0 5px")};

	&:hover {
		color: ${y.colors.$color_blue};
	}
	&:focus {
		border: 1px solid ${y.colors.$color_blue};
		outline: none;
		box-shadow: 0 0 3px ${(0,y.rgba)(y.colors.$color_blue_dark,.8)};

		svg {
			fill: ${y.colors.$color_blue};
			color: ${y.colors.$color_blue};
		}
	}
	&:active {
		box-shadow: none;
	}
`,T=s()(b.SvgIcon)`
	&:hover {
		fill: ${y.colors.$color_blue};
	}
`;class P extends o().Component{constructor(e){super(e),this.state={isExpanded:!1},this.uniqueId=x()("yoast-help-"),this.onButtonClick=this.onButtonClick.bind(this)}onButtonClick(){this.setState((e=>({isExpanded:!e.isExpanded})))}render(){const t=`${this.uniqueId}-panel`,{isExpanded:n}=this.state;return(0,e.createElement)(R,{className:this.props.className},(0,e.createElement)(M,{className:this.props.className+"__button",onClick:this.onButtonClick,"aria-expanded":n,"aria-controls":n?t:null,"aria-label":this.props.helpTextButtonLabel},(0,e.createElement)(T,{size:"16px",color:y.colors.$color_grey_text,icon:"question-circle"})),(0,e.createElement)(C,{isOpen:n},(0,e.createElement)(_,{id:t,className:this.props.className+"__panel",panelMaxWidth:this.props.panelMaxWidth},(0,e.createElement)(b.HelpText,null,this.props.helpText))))}}P.propTypes={className:l().string,helpTextButtonLabel:l().string.isRequired,panelMaxWidth:l().string,helpText:l().oneOfType([l().string,l().array])},P.defaultProps={className:"yoast-help",panelMaxWidth:null,helpText:""};const F=P;function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},A.apply(this,arguments)}var D=n(6746);const N=window.lodash.truncate;var k=n.n(N);const O=window.yoast.analysis,I=window.lodash,V=s().span`
	color: #70757a;
	line-height: 1.7;
`;function j(n){const{shoppingData:i}=n,o=(0,d.sprintf)((0,d.__)("Rating: %s","wordpress-seo"),(0,I.round)(2*i.rating,1)+"/10"),r=(0,d.sprintf)((0,d.__)("%s reviews","wordpress-seo"),i.reviewCount);
/* Translators: %s expands to the actual rating, e.g. 8/10. */return(0,e.createElement)(V,null,i.reviewCount>0&&(0,e.createElement)(t.Fragment,null,(0,e.createElement)(b.StarRating,{rating:i.rating}),(0,e.createElement)("span",null," ",o," · "),(0,e.createElement)("span",null,r," · ")),i.price&&(0,e.createElement)(t.Fragment,null,(0,e.createElement)("span",{dangerouslySetInnerHTML:{__html:i.price}})),i.availability&&(0,e.createElement)("span",null,` · ${(0,I.capitalize)(i.availability)}`))}const L=j;j.propTypes={shoppingData:l().shape({rating:l().number,reviewCount:l().number,availability:l().string,price:l().string}).isRequired};const U=s().div`
	display: flex;
	margin-top: -16px;
	line-height: 1.6;
`,$=s().div`
	flex: 1;
	max-width: 50%;
`,B=s().div`
	flex: 1;
	max-width: 25%;
`,z=s().div`
	color: #70757a;
`;function H(t){const{shoppingData:n}=t;return(0,e.createElement)(U,null,n.rating>0&&(0,e.createElement)($,{className:"yoast-shopping-data-preview__column"},(0,e.createElement)("div",{className:"yoast-shopping-data-preview__upper"},(0,d.__)("Rating","wordpress-seo")),(0,e.createElement)(z,{className:"yoast-shopping-data-preview__lower"},(0,e.createElement)("span",null,(0,I.round)(2*n.rating,1),"/10 "),(0,e.createElement)(b.StarRating,{rating:n.rating}),(0,e.createElement)("span",null," (",n.reviewCount,")"))),n.price&&(0,e.createElement)(B,{className:"yoast-shopping-data-preview__column"},(0,e.createElement)("div",{className:"yoast-shopping-data-preview__upper"},(0,d.__)("Price","wordpress-seo")),(0,e.createElement)(z,{className:"yoast-shopping-data-preview__lower",dangerouslySetInnerHTML:{__html:n.price}})),n.availability&&(0,e.createElement)(B,{className:"yoast-shopping-data-preview__column"},(0,e.createElement)("div",{className:"yoast-shopping-data-preview__upper"},(0,d.__)("Availability","wordpress-seo")),(0,e.createElement)(z,{className:"yoast-shopping-data-preview__lower"},(0,I.capitalize)(n.availability))))}const W=H;H.propTypes={shoppingData:l().shape({rating:l().number,reviewCount:l().number,availability:l().string,price:l().string}).isRequired};const q="mobile",G="desktop",Q=[G,q],K=q,{transliterate:X,createRegexFromArray:Y,replaceDiacritics:J}=O.languageProcessing,Z=600,ee=s()(f)`
	background-color: #fff;
	font-family: arial, sans-serif;
	box-sizing: border-box;
`,te=s().div`
	border-bottom: 1px hidden #fff;
	border-radius: 8px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
	max-width: ${400}px;
	box-sizing: border-box;
	font-size: 14px;
`,ne=s().div`
	cursor: pointer;
	position: relative;
`;function ie(e,t,n){return s()(e)`
		&::before {
			display: block;
			position: absolute;
			top: 0;
			${(0,E.getDirectionalStyle)("left","right")}: ${()=>n===G?"-22px":"-40px"};
			width: 22px;
			height: 22px;
			background-image: url( ${(0,E.getDirectionalStyle)((0,y.angleRight)(t),(0,y.angleLeft)(t))} );
			background-size: 24px;
			background-repeat: no-repeat;
			background-position: center;
			content: "";
		}
	`}const oe=s().div`
	color: ${e=>e.screenMode===G?"#1a0dab":"#1558d6"};
	text-decoration: none;
	font-size: ${e=>(e.screenMode,"20px")};
	line-height: ${e=>e.screenMode===G?"1.3":"26px"};
	font-weight: normal;
	margin: 0;
	display: inline-block;
	overflow: hidden;
	max-width: ${Z}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,re=s()(oe)`
	max-width: ${Z}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,se=s().span`
	display: inline-block;
	max-width: ${e=>e.screenMode===G?240:100}px;
	overflow: hidden;
	vertical-align: top;

	text-overflow: ellipsis;
	margin-left: 4px;
`,ae=s().span`
	white-space: nowrap;
`,le=s().span`
	display: inline-block;
	max-height: 52px; // max two lines of text
	padding-top: 1px;
	vertical-align: top;
	overflow: hidden;
	text-overflow: ellipsis;
`,pe=s().div`
	display: inline-block;
	cursor: pointer;
	position: relative;
	width: calc( 100% + 7px );
	white-space: nowrap;
	font-size: 14px;
	line-height: 16px;
	vertical-align: top;
`;pe.displayName="BaseUrl";const ce=s()(pe)`
	display: flex;
	align-items: center;
	overflow: hidden;
	justify-content: space-between;
	text-overflow: ellipsis;
	max-width: 100%;
	margin-bottom: 12px;
	padding-top: 1px;
	line-height: 20px;
	vertical-align: bottom;
`;ce.displayName="BaseUrlOverflowContainer";const de=s().span`
	font-size: ${e=>e.screenMode===G?"14px":"12px"};
	line-height: ${e=>e.screenMode===G?"1.3":"20px"};
	color: ${e=>e.screenMode===G?"#4d5156":"#3c4043"};
	flex-grow: 1;
`,ue=s().span`
	color: ${e=>e.screenMode===G?"#4d5156":"#70757a"};
`,he=s().div`
width: 28px;
height: 28px;
margin-right: 12px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
background: #f1f3f4;
min-width: 28px;
`;ce.displayName="SnippetPreview__BaseUrlOverflowContainer";const ge=s().div`
	color: ${e=>(e.isDescriptionPlaceholder,"#4d5156")};
	cursor: pointer;
	position: relative;
	max-width: ${Z}px;
	padding-top: ${e=>e.screenMode===G?"0":"1px"};
	font-size: 14px;
	line-height: 1.58;
`,me=s().div`
	color: ${"#3c4043"};
	font-size: 14px;
	cursor: pointer;
	position: relative;
	line-height: 1.4;
	max-width: ${Z}px;

	/* Clearing pseudo element to contain the floated image. */
	&:after {
		display: table;
		content: "";
		clear: both;
	}
`,fe=s().div`
	float: right;
	width: 104px;
	height: 104px;
	margin: 4px 0 4px 16px;
	border-radius: 8px;
	overflow: hidden;
`,ve=s().img`
	/* Higher specificity is necessary to make sure inherited CSS rules don't alter the image ratio. */
	&&& {
		display: block;
		width: 104px;
		height: 104px;
		object-fit: cover;
	}
`,xe=s().div`
	padding: 12px 16px;

	&:first-child {
		margin-bottom: -16px;
	}
`,be=s().div`
	line-height: 18x; 
	font-size: 14px; 
	color: black;
	max-width: ${e=>e.screenMode===G?"100%":"300px"};
	overflow: hidden;
`,Ee=s().div`
`,ye=s().span`
	display: inline-block;
	height: 18px;
	line-height: 18px;
	padding-left: 8px;
	vertical-align:bottom;
`,we=s().span`
	color: ${e=>e.screenMode===G?"#777":"#70757a"};
`,Se=s().img`
	width: 18px;
	height: 18px;
	margin: 0 5px;
	vertical-align: middle;
`,Ce=s().div`
	background-size: 100% 100%;
	display: inline-block;
	height: 12px;
	width: 12px;
	margin-bottom: -1px;
	opacity: 0.46;
	margin-right: 6px;
	background-image: url( ${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABr0lEQVR4AbWWJYCUURhFD04Zi7hrLzgFd4nzV9x6wKHinmYb7g4zq71gIw2LWBnZ3Q8df/fh96Tn/t2HVIw4CVKk+fSFNCkSxInxW1pFkhLmoMRjVvFLmkEX5ocuZuBVPw5jv8hh+iEU5QEmuMK+prz7RN3dPMMEGQYzxpH/lGjzou5jgl7mAvOdZfcbF+jbm3MAbFZ7VX9SJnlL1D8UMyjLe+BrAYDb+jJUr59JrlNWRtcqX9GkrPCR4QBAf4qYJAkQoyQrbKKs8RiaEjEI0GvvQ1mLMC9xaBFFBaZS1TbMSwJSomg39erDF+TxpCCNOXjGQJTCvG6qn4ZPzkcxA61Tjhaf4KMj+6Q3XvW6Lopraa8IozRQxIi0a7NXorULc5JyHX/3F3q+0PsFYytVTaGgjz/AvCyiegE69IUsPxHNBMpa738i6tGWlzkAABjKe/+j9YeRHGVd9oWRnwe2ewDASp/L/UqoPQ5AmFeYZMavBP8dAJz0GWWDHQlzXApMdz4KYUfKICcxkKeOfGmQyrIPcgE9m+g/+kT812/Nr3+0kqzitxQjoKXh6xfor99nlEdFjyvH15gAAAAASUVORK5CYII="} );
`,Re=e=>{try{return decodeURI(e)}catch(t){return e}},_e=({screenMode:t})=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:t===G?"#4d5156":"#70757a",style:{width:"18px"}},(0,e.createElement)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}));_e.propTypes={screenMode:l().string.isRequired};class Me extends t.PureComponent{constructor(e){super(e),this.state={title:e.title,description:e.description,isDescriptionPlaceholder:!0},this.setTitleRef=this.setTitleRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this)}setTitleRef(e){this._titleElement=e}setDescriptionRef(e){this._descriptionElement=e}hasOverflowedContent(e){return Math.abs(e.clientHeight-e.scrollHeight)>=2}fitTitle(){const e=this._titleElement;if(this.hasOverflowedContent(e)){let t=this.state.title;const n=e.clientWidth/3;t.length>n&&(t=t.substring(0,n));const i=this.dropLastWord(t);this.setState({title:i})}}dropLastWord(e){const t=e.split(" ");return t.pop(),t.join(" ")}getTitle(){return this.props.title!==this.state.title?this.state.title+" ...":this.props.title}getDescription(){return this.props.description?k()(this.props.description,{length:156,separator:" ",omission:" ..."}):(0,d.__)("Please provide a meta description by editing the snippet below. If you don’t, Google will try to find a relevant part of your post to show in the search results.","wordpress-seo")}renderDate(){const t=this.props.mode===G?"—":"－";return this.props.date&&(0,e.createElement)(we,{screenMode:this.props.mode},this.props.date," ",t," ")}addCaretStyles(e,t){const{mode:n,hoveredField:i,activeField:o}=this.props;return o===e?ie(t,y.colors.$color_snippet_active,n):i===e?ie(t,y.colors.$color_snippet_hover,n):t}getBreadcrumbs(e){const{breadcrumbs:t}=this.props;let n;try{n=new URL(e)}catch(t){return{hostname:e,breadcrumbs:""}}const i=Re(n.hostname);let o=t||n.pathname.split("/");return o=o.filter((e=>Boolean(e))).map((e=>Re(e))),{hostname:i,breadcrumbs:" › "+o.join(" › ")}}renderUrl(){const{url:t,onMouseUp:n,onMouseEnter:i,onMouseLeave:r,mode:s,faviconSrc:a,siteName:l}=this.props,p=s===q,{hostname:c,breadcrumbs:u}=this.getBreadcrumbs(t),h=this.addCaretStyles("url",pe);return(0,e.createElement)(o().Fragment,null,(0,e.createElement)(b.ScreenReaderText,null,/* translators: Hidden accessibility text. */
(0,d.__)("Url preview","wordpress-seo")+":"),(0,e.createElement)(h,null,(0,e.createElement)(ce,{onMouseUp:n.bind(null,"url"),onMouseEnter:i.bind(null,"url"),onMouseLeave:r.bind(null),screenMode:s},(0,e.createElement)(he,null,(0,e.createElement)(Se,{src:a||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC",alt:""})),(0,e.createElement)(de,{screenMode:s},(0,e.createElement)(be,{screenMode:s},l),(0,e.createElement)(ue,{screenMode:s},c),(0,e.createElement)(se,{screenMode:s},u),!p&&(0,e.createElement)(ye,null,(0,e.createElement)(_e,{screenMode:s}))),p&&(0,e.createElement)(_e,{screenMode:s}))))}componentDidUpdate(e){const t={};this.props.title!==e.title&&(t.title=this.props.title),this.props.description!==e.description&&(t.description=this.props.description),this.setState({...t,isDescriptionPlaceholder:!this.props.description}),this.props.mode===q&&(clearTimeout(this.fitTitleTimeout),this.fitTitleTimeout=setTimeout((()=>{this.fitTitle()}),10))}componentDidMount(){this.setState({isDescriptionPlaceholder:!this.props.description})}componentWillUnmount(){clearTimeout(this.fitTitleTimeout)}renderDescription(){const{wordsToHighlight:t,locale:n,onMouseUp:i,onMouseLeave:o,onMouseEnter:r,mode:s,mobileImageSrc:a}=this.props,l=this.renderDate(),p={isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,onMouseUp:i.bind(null,"description"),onMouseEnter:r.bind(null,"description"),onMouseLeave:o.bind(null)};if(s===G){const i=this.addCaretStyles("description",ge);return(0,e.createElement)(i,A({},p,{ref:this.setDescriptionRef}),l,function(t,n,i,o){if(0===n.length)return i;let r=i;const s=[];n.forEach((function(e){s.push(e);const n=X(e,t);n!==e&&s.push(n)}));const a=Y(s,!1,"",!1);return r=r.replace(a,(function(e){return`{{strong}}${e}{{/strong}}`})),(0,D.Z)({mixedString:r,components:{strong:(0,e.createElement)("strong",null)}})}(n,t,this.getDescription()))}if(s===q){const t=this.addCaretStyles("description",me);return(0,e.createElement)(t,p,(0,e.createElement)(me,{isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,ref:this.setDescriptionRef},a&&(0,e.createElement)(fe,null,(0,e.createElement)(ve,{src:a,alt:""})),l,this.getDescription()))}return null}renderProductData(t){const{mode:n,shoppingData:i}=this.props;if(0===Object.values(i).length)return null;const o={availability:i.availability||"",price:i.price?(0,E.decodeHTML)(i.price):"",rating:i.rating||0,reviewCount:i.reviewCount||0};return n===G?(0,e.createElement)(t,{className:"yoast-shopping-data-preview--desktop"},(0,e.createElement)(b.ScreenReaderText,null,/* translators: Hidden accessibility text. */
(0,d.__)("Shopping data preview:","wordpress-seo")),(0,e.createElement)(L,{shoppingData:o})):n===q?(0,e.createElement)(t,{className:"yoast-shopping-data-preview--mobile"},(0,e.createElement)(b.ScreenReaderText,null,/* translators: Hidden accessibility text. */
(0,d.__)("Shopping data preview:","wordpress-seo")),(0,e.createElement)(W,{shoppingData:o})):null}render(){const{onMouseUp:t,onMouseLeave:n,onMouseEnter:i,mode:o,isAmp:r}=this.props,{PartContainer:s,Container:a,TitleUnbounded:l,SnippetTitle:p}=this.getPreparedComponents(o),c=o===G,u=c||!r?null:(0,e.createElement)(Ce,null);return(0,e.createElement)("section",null,(0,e.createElement)(a,{id:"yoast-snippet-preview-container",width:c?640:null,padding:20},(0,e.createElement)(s,null,this.renderUrl(),(0,e.createElement)(b.ScreenReaderText,null,(0,d.__)("SEO title preview","wordpress-seo")+":"),(0,e.createElement)(p,{onMouseUp:t.bind(null,"title"),onMouseEnter:i.bind(null,"title"),onMouseLeave:n.bind(null)},(0,e.createElement)(re,{screenMode:o},(0,e.createElement)(l,{ref:this.setTitleRef},this.getTitle()))),u),(0,e.createElement)(s,null,(0,e.createElement)(b.ScreenReaderText,null,(0,d.__)("Meta description preview:","wordpress-seo")),this.renderDescription()),this.renderProductData(s)))}getPreparedComponents(e){return{PartContainer:e===G?Ee:xe,Container:e===G?ee:te,TitleUnbounded:e===G?ae:le,SnippetTitle:this.addCaretStyles("title",ne)}}}Me.propTypes={title:l().string.isRequired,url:l().string.isRequired,siteName:l().string.isRequired,description:l().string.isRequired,date:l().string,breadcrumbs:l().array,hoveredField:l().string,activeField:l().string,keyword:l().string,wordsToHighlight:l().array,locale:l().string,mode:l().oneOf(Q),isAmp:l().bool,faviconSrc:l().string,mobileImageSrc:l().string,shoppingData:l().object,onMouseUp:l().func.isRequired,onHover:l().func,onMouseEnter:l().func,onMouseLeave:l().func},Me.defaultProps={date:"",keyword:"",wordsToHighlight:[],breadcrumbs:null,locale:"en",hoveredField:"",activeField:"",mode:K,isAmp:!1,faviconSrc:"",mobileImageSrc:"",shoppingData:{},onHover:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};const Te=window.yoast.replacementVariableEditor,Pe=e=>{const t=O.helpers.measureTextWidth(e),n=new O.assessments.seo.PageTitleWidthAssessment({scores:{widthTooShort:9}},!0),i=n.calculateScore(t);return{max:n.getMaximumLength(),actual:t,score:i}},Fe=(e,t,n,i,o)=>{const r=O.languageProcessing.countMetaDescriptionLength(t,e),s=n&&!i?new O.assessments.seo.MetaDescriptionLengthAssessment({scores:{tooLong:3,tooShort:3}}):new O.assessments.seo.MetaDescriptionLengthAssessment,a=s.calculateScore(r,o);return{max:s.getMaximumLength(o),actual:r,score:a}},Ae=l().shape({max:l().number,actual:l().number,score:l().number}),De=s().input`
	border: none;
	width: 100%;
	height: inherit;
	line-height: 1.71428571; // 24px based on 14px font-size
	font-family: inherit;
	font-size: inherit;
	color: inherit;

	&:focus {
		outline: 0;
	}
`,Ne=(0,y.withCaretStyles)(b.VariableEditorInputContainer);class ke extends o().Component{constructor(e){super(e),this.elements={title:null,slug:null,description:null},this.uniqueId=x()("snippet-editor-field-"),this.setRef=this.setRef.bind(this),this.setTitleRef=this.setTitleRef.bind(this),this.setSlugRef=this.setSlugRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.triggerReplacementVariableSuggestions=this.triggerReplacementVariableSuggestions.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onFocusSlug=this.onFocusSlug.bind(this),this.focusSlug=this.focusSlug.bind(this),this.onChangeSlug=this.onChangeSlug.bind(this),this.onFocusDescription=this.onFocusDescription.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this)}setRef(e,t){this.elements[e]=t}setTitleRef(e){this.setRef("title",e)}setSlugRef(e){this.setRef("slug",e)}setDescriptionRef(e){this.setRef("description",e)}componentDidUpdate(e){e.activeField!==this.props.activeField&&this.focusOnActiveFieldChange()}focusOnActiveFieldChange(){const{activeField:e}=this.props,t=e?this.elements[e]:null;t&&t.focus()}triggerReplacementVariableSuggestions(e){this.elements[e].triggerReplacementVariableSuggestions()}onFocusTitle(){this.props.onFocus("title")}onChangeTitle(e){this.props.onChange("title",e)}onFocusSlug(){this.props.onFocus("slug")}focusSlug(){this.elements.slug.focus()}onChangeSlug(e){this.props.onChange("slug",e.target.value)}onFocusDescription(){this.props.onFocus("description")}onChangeDescription(e){this.props.onChange("description",e)}render(){const{activeField:t,hoveredField:n,onReplacementVariableSearchChange:i,replacementVariables:o,recommendedReplacementVariables:r,titleLengthProgress:s,descriptionLengthProgress:a,onBlur:l,descriptionEditorFieldPlaceholder:p,data:{title:c,slug:u,description:h},containerPadding:g,titleInputId:m,slugInputId:f,descriptionInputId:v}=this.props,x=`${this.uniqueId}-slug`;return(0,e.createElement)(Te.StyledEditor,{padding:g},(0,e.createElement)(Te.ReplacementVariableEditor,{withCaret:!0,label:(0,d.__)("SEO title","wordpress-seo"),onFocus:this.onFocusTitle,onBlur:l,isActive:"title"===t,isHovered:"title"===n,editorRef:this.setTitleRef,replacementVariables:o,recommendedReplacementVariables:r,content:c,onChange:this.onChangeTitle,onSearchChange:i,fieldId:m,type:"title"}),(0,e.createElement)(b.ProgressBar,{max:s.max,value:s.actual,progressColor:this.getProgressColor(s.score)}),(0,e.createElement)(b.SimulatedLabel,{id:x,onClick:this.onFocusSlug},(0,d.__)("Slug","wordpress-seo")),(0,e.createElement)(Ne,{onClick:this.focusSlug,isActive:"slug"===t,isHovered:"slug"===n},(0,e.createElement)(De,{value:u,onChange:this.onChangeSlug,onFocus:this.onFocusSlug,onBlur:l,ref:this.setSlugRef,"aria-labelledby":this.uniqueId+"-slug",id:f})),(0,e.createElement)(Te.ReplacementVariableEditor,{withCaret:!0,type:"description",placeholder:p,label:(0,d.__)("Meta description","wordpress-seo"),onFocus:this.onFocusDescription,onBlur:l,isActive:"description"===t,isHovered:"description"===n,editorRef:this.setDescriptionRef,replacementVariables:o,recommendedReplacementVariables:r,content:h,onChange:this.onChangeDescription,onSearchChange:i,fieldId:v}),(0,e.createElement)(b.ProgressBar,{max:a.max,value:a.actual,progressColor:this.getProgressColor(a.score)}))}getProgressColor(e){return e>=7?y.colors.$color_good:e>=5?y.colors.$color_ok:y.colors.$color_bad}}ke.propTypes={replacementVariables:Te.replacementVariablesShape,recommendedReplacementVariables:Te.recommendedReplacementVariablesShape,onChange:l().func.isRequired,onFocus:l().func,onBlur:l().func,onReplacementVariableSearchChange:l().func,data:l().shape({title:l().string.isRequired,slug:l().string.isRequired,description:l().string.isRequired}).isRequired,activeField:l().oneOf(["title","slug","description"]),hoveredField:l().oneOf(["title","slug","description"]),titleLengthProgress:Ae,descriptionLengthProgress:Ae,descriptionEditorFieldPlaceholder:l().string,containerPadding:l().string,titleInputId:l().string,slugInputId:l().string,descriptionInputId:l().string},ke.defaultProps={replacementVariables:[],recommendedReplacementVariables:[],onFocus:()=>{},onBlur:()=>{},onReplacementVariableSearchChange:null,activeField:null,hoveredField:null,titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},descriptionEditorFieldPlaceholder:null,containerPadding:"0 20px",titleInputId:"yoast-google-preview-title",slugInputId:"yoast-google-preview-slug",descriptionInputId:"yoast-google-preview-description"};const Oe=ke,Ie=s().fieldset`
	border: 0;
	padding: 0;
	margin: 0 0 16px;
`,Ve=s().legend`
	margin: 8px 0;
	padding: 0;
	color: ${y.colors.$color_headings};
	font-size: 14px;
	font-weight: 600;
`,je=s()(b.Label)`
	${(0,E.getDirectionalStyle)("margin-right: 16px","margin-left: 16px")};
	color: inherit;
	font-size: 14px;
	line-height: 1.71428571;
	cursor: pointer;
	/* Helps RTL in Chrome */
	display: inline-block;
`,Le=s()(b.Input)`
	&& {
		${(0,E.getDirectionalStyle)("margin: 0 8px 0 0","margin: 0 0 0 8px")};
		cursor: pointer;
	}
`;class Ue extends t.Component{constructor(e){super(e),this.switchToMobile=this.props.onChange.bind(this,"mobile"),this.switchToDesktop=this.props.onChange.bind(this,"desktop")}render(){const{active:t,mobileModeInputId:n,desktopModeInputId:i}=this.props,o=n.length>0?n:"yoast-google-preview-mode-mobile",r=i.length>0?i:"yoast-google-preview-mode-desktop";return(0,e.createElement)(Ie,null,(0,e.createElement)(Ve,null,(0,d.__)("Preview as:","wordpress-seo")),(0,e.createElement)(Le,{onChange:this.switchToMobile,type:"radio",name:"screen",value:"mobile",optionalAttributes:{id:o,checked:t===q}}),(0,e.createElement)(je,{for:o},(0,d.__)("Mobile result","wordpress-seo")),(0,e.createElement)(Le,{onChange:this.switchToDesktop,type:"radio",name:"screen",value:"desktop",optionalAttributes:{id:r,checked:t===G}}),(0,e.createElement)(je,{for:r},(0,d.__)("Desktop result","wordpress-seo")))}}Ue.propTypes={onChange:l().func.isRequired,active:l().oneOf(Q),mobileModeInputId:l().string,desktopModeInputId:l().string},Ue.defaultProps={active:q,mobileModeInputId:"",desktopModeInputId:""};const $e=Ue,Be=s().legend`
	margin: 0 0 16px;
	padding: 0;
	color: ${y.colors.$color_headings};
	font-size: 12px;
	font-weight: 300;
`,ze=s()(b.Button)`
	height: 33px;
	border: 1px solid #dbdbdb;
	box-shadow: none;
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
`,He=s()(ze)`
	margin: ${(0,E.getDirectionalStyle)("10px 0 0 4px","10px 4px 0 0")};
	fill: ${y.colors.$color_grey_dark};
	padding-left: 8px;

	& svg {
		${(0,E.getDirectionalStyle)("margin-right","margin-left")}: 7px;
	}
`,We=s()(ze)`
	margin-top: 24px;
`,qe=new RegExp("(%%sep%%|%%sitename%%)","g");class Ge extends o().Component{constructor(e){super(e);const t=this.mapDataToMeasurements(e.data);this.state={isOpen:!e.showCloseButton,activeField:null,hoveredField:null,titleLengthProgress:Pe(t.filteredSEOTitle),descriptionLengthProgress:Fe(t.description,this.props.date,this.props.isCornerstone,this.props.isTaxonomy,this.props.locale)},this.setFieldFocus=this.setFieldFocus.bind(this),this.unsetFieldFocus=this.unsetFieldFocus.bind(this),this.onChangeMode=this.onChangeMode.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.setEditButtonRef=this.setEditButtonRef.bind(this),this.handleChange=this.handleChange.bind(this),this.haveReplaceVarsChanged=this.haveReplaceVarsChanged.bind(this)}shallowCompareData(e,t){let n=!1;return e.data.description===t.data.description&&e.data.slug===t.data.slug&&e.data.title===t.data.title&&e.isCornerstone===t.isCornerstone&&e.isTaxonomy===t.isTaxonomy&&e.locale===t.locale||(n=!0),this.haveReplaceVarsChanged(e.replacementVariables,t.replacementVariables)&&(n=!0),n}haveReplaceVarsChanged(e,t){return JSON.stringify(e)!==JSON.stringify(t)}componentDidUpdate(e){if(this.shallowCompareData(this.props,e)){const e=this.mapDataToMeasurements(this.props.data,this.props.replacementVariables);this.setState({titleLengthProgress:Pe(e.filteredSEOTitle),descriptionLengthProgress:Fe(e.description,this.props.date,this.props.isCornerstone,this.props.isTaxonomy,this.props.locale)}),this.props.onChangeAnalysisData(e)}}handleChange(e,t){this.props.onChange(e,t);const n=this.mapDataToMeasurements({...this.props.data,[e]:t});this.props.onChangeAnalysisData(n)}renderEditor(){const{data:t,descriptionEditorFieldPlaceholder:n,onReplacementVariableSearchChange:i,replacementVariables:r,recommendedReplacementVariables:s,hasPaperStyle:a,showCloseButton:l,idSuffix:p}=this.props,{activeField:c,hoveredField:u,isOpen:h,titleLengthProgress:g,descriptionLengthProgress:m}=this.state;return h?(0,e.createElement)(o().Fragment,null,(0,e.createElement)(Oe,{data:t,activeField:c,hoveredField:u,onChange:this.handleChange,onFocus:this.setFieldFocus,onBlur:this.unsetFieldFocus,onReplacementVariableSearchChange:i,replacementVariables:r,recommendedReplacementVariables:s,titleLengthProgress:g,descriptionLengthProgress:m,descriptionEditorFieldPlaceholder:n,containerPadding:a?"0 20px":"0",titleInputId:(0,E.join)(["yoast-google-preview-title",p]),slugInputId:(0,E.join)(["yoast-google-preview-slug",p]),descriptionInputId:(0,E.join)(["yoast-google-preview-description",p])}),l&&(0,e.createElement)(We,{onClick:this.close},(0,d.__)("Close snippet editor","wordpress-seo"))):null}setFieldFocus(e){e=this.mapFieldToEditor(e),this.setState({activeField:e})}unsetFieldFocus(){this.setState({activeField:null})}onChangeMode(e){this.props.onChange("mode",e)}onMouseUp(e){this.state.isOpen?this.setFieldFocus(e):this.open().then(this.setFieldFocus.bind(this,e))}onMouseEnter(e){this.setState({hoveredField:this.mapFieldToEditor(e)})}onMouseLeave(){this.setState({hoveredField:null})}open(){return new Promise((e=>{this.setState({isOpen:!0},e)}))}close(){this.setState({isOpen:!1,activeField:null},(()=>{this._editButton.focus()}))}processReplacementVariables(e,t=this.props.replacementVariables){if(this.props.applyReplacementVariables)return this.props.applyReplacementVariables(e);for(const{name:n,value:i}of t)e=e.replace(new RegExp("%%"+(0,I.escapeRegExp)(n)+"%%","g"),i);return e}mapDataToMeasurements(e,t=this.props.replacementVariables){const{baseUrl:n,mapEditorDataToPreview:i}=this.props;let o=this.processReplacementVariables(e.description,t);o=O.languageProcessing.stripSpaces(o);const r=n.replace(/^https?:\/\//i,""),s=e.title.replace(qe,""),a={title:this.processReplacementVariables(e.title,t),url:n+e.slug,description:o,filteredSEOTitle:this.processReplacementVariables(s,t)};return i?i(a,{shortenedBaseUrl:r}):a}mapDataToPreview(e){return{title:e.title,url:e.url,description:e.description}}mapFieldToPreview(e){return"slug"===e&&(e="url"),e}mapFieldToEditor(e){return"url"===e&&(e="slug"),e}setEditButtonRef(e){this._editButton=e}render(){const{data:t,mode:n,date:i,locale:o,keyword:r,wordsToHighlight:s,showCloseButton:a,faviconSrc:l,mobileImageSrc:p,idSuffix:c,shoppingData:u,siteName:h}=this.props,{activeField:g,hoveredField:m,isOpen:f}=this.state,v=this.mapDataToMeasurements(t),x=this.mapDataToPreview(v);return(0,e.createElement)(b.ErrorBoundary,null,(0,e.createElement)("div",null,(0,e.createElement)(Be,null,(0,d.__)("Determine how your post should look in the search results.","wordpress-seo")),(0,e.createElement)($e,{onChange:this.onChangeMode,active:n,mobileModeInputId:(0,E.join)(["yoast-google-preview-mode-mobile",c]),desktopModeInputId:(0,E.join)(["yoast-google-preview-mode-desktop",c])}),(0,e.createElement)(Me,A({keyword:r,wordsToHighlight:s,mode:n,date:i,siteName:h,activeField:this.mapFieldToPreview(g),hoveredField:this.mapFieldToPreview(m),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseUp:this.onMouseUp,locale:o,faviconSrc:l,mobileImageSrc:p,shoppingData:u},x)),a&&(0,e.createElement)(He,{onClick:f?this.close:this.open,"aria-expanded":f,ref:this.setEditButtonRef},(0,e.createElement)(b.SvgIcon,{icon:"edit"}),(0,d.__)("Edit snippet","wordpress-seo")),this.renderEditor()))}}Ge.propTypes={onReplacementVariableSearchChange:l().func,replacementVariables:Te.replacementVariablesShape,recommendedReplacementVariables:Te.recommendedReplacementVariablesShape,data:l().shape({title:l().string.isRequired,slug:l().string.isRequired,description:l().string.isRequired}).isRequired,descriptionEditorFieldPlaceholder:l().string,baseUrl:l().string.isRequired,mode:l().oneOf(Q),date:l().string,onChange:l().func.isRequired,onChangeAnalysisData:l().func,titleLengthProgress:Ae,descriptionLengthProgress:Ae,applyReplacementVariables:l().func,mapEditorDataToPreview:l().func,keyword:l().string,wordsToHighlight:l().array,locale:l().string,hasPaperStyle:l().bool,showCloseButton:l().bool,faviconSrc:l().string,mobileImageSrc:l().string,idSuffix:l().string,shoppingData:l().object,isCornerstone:l().bool,isTaxonomy:l().bool,siteName:l().string.isRequired},Ge.defaultProps={mode:K,date:"",wordsToHighlight:[],onReplacementVariableSearchChange:null,replacementVariables:[],recommendedReplacementVariables:[],titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},applyReplacementVariables:null,mapEditorDataToPreview:null,keyword:"",locale:"en",descriptionEditorFieldPlaceholder:"",onChangeAnalysisData:I.noop,hasPaperStyle:!0,showCloseButton:!0,faviconSrc:"",mobileImageSrc:"",idSuffix:"",shoppingData:{},isCornerstone:!1,isTaxonomy:!1};const Qe=Ge})(),(window.yoast=window.yoast||{}).searchMetadataPreviews=i})();