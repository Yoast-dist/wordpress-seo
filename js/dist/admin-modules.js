!function(e){var t={};function a(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(l,c,function(t){return e[t]}.bind(null,c));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=200)}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.element},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(1),c=a(2),n=a.n(c),r=a(3),o=a(5),s=a(7),i=a(8);function p(e){let{name:t,title:a,subtitle:c,usps:n,id:p,image:d,finishableSteps:m,finishedSteps:u,upsellLink:f,upsellText:h,workout:z,badges:E}=e;const{openWorkout:b,toggleWorkout:M}=Object(o.useDispatch)("yoast-seo/workouts"),w=Object(o.useSelect)(e=>e("yoast-seo/workouts").getActiveWorkout(),[]),[g,k]=Object(l.useState)(!1),v=z,O=d;Object(l.useEffect)(()=>{m&&u&&u.length===m.length?k(!0):k(!1)},[u,m]);const y=Object(l.useMemo)(()=>u&&0!==u.length?u.length<m.length?Object(r.__)("Continue workout!","wordpress-seo"):Object(r.__)("Do workout again","wordpress-seo"):Object(r.__)("Start workout!","wordpress-seo"),[u,m]),j=Object(l.useCallback)(()=>{b(t),g&&M(t)},[z,g,b,M]),F=Object(i.makeOutboundLink)(),B=h||Object(r.sprintf)(
/* translators: %s : Expands to the add-on name. */
Object(r.__)("Unlock with %s!","wordpress-seo"),"Premium"),A=z?"":" card-disabled";return Object(l.createElement)(l.Fragment,null,!w&&Object(l.createElement)("div",{id:p,className:"card card-small"+A},Object(l.createElement)("h2",null,a," ",E),Object(l.createElement)("h3",null,c),Object(l.createElement)("div",{className:"workout-card-content-flex"},Object(l.createElement)("ul",{id:p+"-usp-list",className:"yoast-list--usp"},n.map((e,t)=>Object(l.createElement)("li",{id:`${p}-usp-${t}`,key:`${p}-${t}`},e))),d&&Object(l.createElement)(O,null)),Object(l.createElement)("span",null,z&&Object(l.createElement)(s.NewButton,{id:p+"-action-button",className:"yoast-button yoast-button--"+(g?"secondary":"primary"),onClick:j},y),!z&&Object(l.createElement)(F,{id:p+"-upsell-button",href:f,className:"yoast-button yoast-button-upsell"},B,Object(l.createElement)("span",{"aria-hidden":"true",className:"yoast-button-upsell__caret"})),m&&u&&Object(l.createElement)("div",{className:"workout-card-progress"},Object(l.createElement)(s.ProgressBar,{id:p+"-progress",max:m.length,value:u.length}),Object(l.createElement)("label",{htmlFor:p+"-progress"},Object(l.createElement)("i",null,Object(r.sprintf)(// translators: %1$s: number of finished steps, %2$s: number of finishable steps
Object(r.__)("%1$s/%2$s steps completed","wordpress-seo"),u.length,m.length)))))),z&&w===t&&Object(l.createElement)(v,null))}p.propTypes={name:n.a.string.isRequired,title:n.a.string.isRequired,subtitle:n.a.string.isRequired,usps:n.a.arrayOf(n.a.string).isRequired,id:n.a.string,finishableSteps:n.a.arrayOf(n.a.string),finishedSteps:n.a.arrayOf(n.a.string),image:n.a.func,upsellLink:n.a.string,upsellText:n.a.string,workout:n.a.func,badges:n.a.arrayOf(n.a.element)},p.defaultProps={id:"",finishableSteps:null,finishedSteps:null,image:null,upsellLink:null,upsellText:null,workout:null,badges:[]}},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var l,c=a(1),n=a(2),r=a.n(n),o=a(3),s=a(5),i=a(128),p=a(0);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function m(e){return p.createElement("svg",d({viewBox:"0 0 296 317",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),l||(l=p.createElement("g",{transform:"matrix(-1 0 0 1 295.274 .96)",fill:"none"},p.createElement("circle",{fill:"#F0ECF0",cx:131.18,cy:184.261,r:131.18}),p.createElement("g",{fill:"#EAB881"},p.createElement("path",{d:"M236.42 96.56c-.15-.43-.29-.87-.44-1.3.15.43.29.87.44 1.3zm-31.98 59.96a11 11 0 00-2.11.82c.67-.3 1.4-.56 2.11-.82zm-2.11.82a58.65 58.65 0 00-6 2.81c2.67-1.11 4.56-2.11 6-2.81z"}),p.createElement("path",{d:"M293.49 164.27c-8.58-10.51-1.05-27.75-34.52-86.31-3-5.22-5.26-14.52-12.85-17.58-9.11-3.67-12.77-9.16-21.89-12.83-6.85-2.76-4-1.36-3.21-.49 1.49 1.67-2-1.31-5.72 7.13-.38.85 2.86 1.63 4 5 .36 1.07.49 1.14 1.23 1.33 4.71 1.2 6.52 6.89 4.2 10.06-.7-1.43.18-6-4.68-6.36 2 1.44 4.06 3.42 4 5.88 9.4 16.64 17.56 14 20 15 12.43 4.92-17.28 64.57 23 86.13-7.34-1.94-14.31-5.46-23.92-1.33 7.28-5.53 2.46-7.57.86-10.89-2.17-2.92-2.29-11.71-2.6-22.62a103.2 103.2 0 001.09 20.32 54.8 54.8 0 00-38-.12c5.19-1.21 15.45 48.34 20.15 53.9 3.8-1.4 23-8.57 35.17-14.11 21.52-9.81 34.94-25.76 35.44-28.31.24-1.47-.85-2.71-1.75-3.8zm-41.62-99.13c.06.1 8.87 19.59.56 1.21-.2-.44-.38-.84-.56-1.21z"}),p.createElement("path",{d:"M215.17 56.04c.46.17 2 1.49-.23-.93-.88 2.39-.6 4.42 2 6.74 1.06-3 0-3.51-1.77-5.81zm-4.33 23.82c.28-.07.36.05-.35-.38l.35.38z"})),p.createElement("path",{d:"M203.74 73.77c0 .4-.33-.06 2.94 2.38l-2.94-2.38zm5.26 4.27c2.3 2 3.13 2.53 2.19 1.77L209 78.04zm6.17-22c.05.06 1.79 2.31 1.83 2.38-.49-1.27-.83-2.01-1.83-2.38zm-.52 11.73c1.38-.08.73 1.34 2.16-.5.52-.67 1.91-3.21.71-2.6.56-2.33-.09-6.71-.19-4.75-.13 2.46-3.7 10.77-8.67 9.87a7.6 7.6 0 003.25.22c2.74-.39 2.36-.97 2.74-2.24zm-5.99 2.02a6.27 6.27 0 01-1.42-.59c.42.309.906.51 1.42.59z",fill:"#D38053"}),p.createElement("path",{d:"M214.2 69.33a4.13 4.13 0 01-.85 3.73c3.38-1.27 3.66-3.51 2.48-4.78-1.18-1.27-1.34.03-1.63 1.05zm-32.31 1.85c.11.84 2.61 2.33 3.3 2.78a13.33 13.33 0 01-3.3-2.78zm10 4.39c-.21.13-.45.1.31 0-.28-.12-.13-.1-.31 0zm-6.51-1.53a29.79 29.79 0 004.51 2.28c2.54-1.52.8.82-4.51-2.28z",fill:"#D38053"}),p.createElement("path",{d:"M202.61 77.13c-.91.35-5.67.26-10.41-1.57-6.74 1-6.41 12.08-1 12.4 8.18.48 10.11 3 13.48 1.92 6.82-2.28 2.4-11.62-2.07-12.75z",fill:"#EAB881"}),p.createElement("path",{d:"M217.52 64.67a4.92 4.92 0 012.54-.48c4.87.36 4 5 4.68 6.36 2.31-3.16.52-8.86-4.2-10.06-2.25-.57.56-2.91-7.86-7.27a10.79 10.79 0 014.84 11.45zm15.23 112.51c-6.79 1.78-17.9 1.65-21-5.2 3.71 11.1 9 26.86 12.86 37.68 2.88-.89 7.41-1.86 8.89-3.4-3.52-4.16-8.67-10.41-8.74-15.89-.07-5.48 2.92-11.16 7.99-13.19zm-26.31-20.36c-.14.17-.15 0 .53 1.27-.18-.46-.35-.89-.53-1.27z",fill:"#D38053"}),p.createElement("path",{d:"M246.11 86.55c-2.26-3.64-4.21.58 2.23-3.3-10.49 4.56-18.5-2.9-24.34-13.21-.05 1.82-1.23 3.13-2.61 4.36-9.64 8.64-10.89 4.95-12.39 3.64-8-7-3.86-2.44-6.09-1-.71.46 4.08 1 5.31 7.11a5.26 5.26 0 01-2.67 5.38c7.41 5.8 14.7 2.46 25.68-4.09 14.67 22.17 7.38 66.27 12.78 73.54 1.6 3.32 6.42 5.36-.86 10.89 9.61-4.13 16.58-.61 23.92 1.33-37.63-20.16-14.29-73.91-20.96-84.65z",fill:"#D38053"}),p.createElement("path",{d:"M190.92 211.52a81.3 81.3 0 00-9.26-12.14c6.41 7.94 17.18 24.84 9.26 12.14z",fill:"#A52A6A"}),p.createElement("path",{d:"M205.85 156.04c-31.36 13.6-26.45 13.21-42 8.34-18.87-5.91-37.14-.76-32.1-1.07 11.82-.72 29.07 49.31 35.44 66.88l62.17-10.35c.64 7.64-20.9-59.34-23.51-63.8z",fill:"#A52A6A"}),p.createElement("path",{d:"M214.23 180.31c-8.73 13.9-32.09 11.23-35.71-4.78 8 32.54 8.23 20.07-9.5 9.69 25.36 25.8 22.47 41.74 28.27 44.5 3.49 1.65 13.65-3.77 26.3-7.69 3.3-1 4.88-1.61 4.76-2.19l-14.12-39.53z",fill:"#7C2050"}),p.createElement("path",{d:"M192.93 72.9a3 3 0 01-.92 2.58 25.5 25.5 0 009.52 1.8c2.47-.02.6.27-8.6-4.38z",fill:"#EAB881"}),p.createElement("path",{d:"M220.06 64.19c-3.36-.25-1 1.37-4.23 4.09 1.18 1.27.9 3.51-2.48 4.78a4.07 4.07 0 00.85-3.73c-2.67 1.26-5.78.74-7-.13 4.38 2.46 8.07-2.64 9.69-7.37-2.58-2.31-2.87-4.34-2-6.74-1.19-1.31-4.4-3.35.19-.49a25 25 0 012.94-5.18c1.27-1.71 5.22-.83 1.65-3.46-1.76-1.3-8.08-2.63-8.81-2.59a4.11 4.11 0 00-3.06 1.53c-4.33-1.59-9.29-1.86-11.78 2-4.24-3.58-9.38 2.15-7.77 6.69 1.44 4-1.86.15-7.06 14.62-1.27 3.54 5.07 7 8.77 7.58 7.7 1.25-18.75-8.93 2.24-.45 3.4 2.66 5.28 1.49 10.44 1.8 1.08-.47 1-1.92 1.05-3.09 0-1.84 6.81 8.52 10.32 5.44 8.71-4.45 13.99-9.58 6.05-15.3z",fill:"#EAB881"}),p.createElement("path",{d:"M192.51 69.95c.38.94.28.45 0-2.57a4.18 4.18 0 000 2.57z",fill:"#EAB881"}),p.createElement("path",{d:"M194.68 57.19a15.87 15.87 0 00.36-1.77c-.14.62-.25 1.18-.36 1.77z",fill:"#D38053"}),p.createElement("path",{d:"M59 167.04c-7.75 3.79-5.09 3.25-3.46 3.59a74.937 74.937 0 003.46-3.59zm69-3.33l-.77-.17c.242.112.504.17.77.17z",fill:"#A52A6A"}),p.createElement("path",{d:"M200.06 262.44c1.23-17.17 10-35.47-31-77.22-8.89-9-13.84-13.86-31.69-19.13 6.35 7.45-.5 40.2-3.43 38.36-25.84-16.17-70.31-19.82-79.39-32.84 6.7-6.24-28.46 5.48-39.7 16.24-3.57 3.42-8.13 12.77-12.22 22.43 8.53 42.43 41.23 74.66 42.5 72 3.64-7.7 7.17-15.66 6.64-14.47 11.84 12.23 19.29 19.48 23.78 35.23A131 131 0 00201 295.25c-.06-16.21-1.3-27.79-.94-32.81zm-145.78-.4c.1 0 0-.08-1.06 2.38.36-.79.71-1.59 1.06-2.38z",fill:"#A52A6A"}),p.createElement("path",{d:"M53.29 267.84c5.65 7.53 33.06 17 44.3 27a280 280 0 01-35.06-36.66 203.23 203.23 0 0049.54 9.79l-47.15-13.12c.667-5.7 1.333-11.393 2-17.08-3.35 4.49-11.74 22.07-13.63 30.07zm125.12-18.17c-12.42-1.14-45.91 6.44-50.79 17 18.32-12.22 51.08-16.81 54.55.56-.17-1.02 12.83-16.03-3.76-17.56z",fill:"#7C2050"}),p.createElement("path",{d:"M124.39 155.75c0 .21.1.43.16.64-.06-.21-.11-.43-.16-.64zm-57.05-39.34c-.59 0-.52-.25 0 1.56 1.53 2.37.74 1.51 0-1.56zm56.8 38.33l.12.46-.12-.46zm-69.63 16.87c9.09 13 53.53 16.65 79.39 32.84 2.16 1.35 8.75-21.75 4.69-36.08-1.9-6.72-10.19-4.65-10.62-4.66-1 0-1.46-.64-1.83-1.66-.68-1.91-1.52-5.36-1.48-5.21-1.23 4.07-1.68 6.59-3.49 7.5-6.48 3.24-37.85-9.4-52.25-41 .62 2.53 1.06 5.26-1 3.64 3.8 16.54 5.92 26.64-13.41 44.63z",fill:"#EAB881"}),p.createElement("path",{d:"M107.65 148.64c-20.65-5.6-33.72-12.94-37.72-32.87-3.26 1.48-3.22-1.55-1 7.6 14.4 31.56 45.77 44.21 52.25 41 2.15-1.07 3.54-7.31 3.38-8-2.21-8.85 2.2-2.53-16.91-7.73z",fill:"#D38053"}),p.createElement("path",{d:"M140.75 66.31c-3-9.44-7.65-19.56-11.74-25.21a15.73 15.73 0 01-8.82-3.17c-7.48 8.26-15.45 4.83-16.65 0-1.68 5.91-9.62 9-14.83 5.74a6.35 6.35 0 004.78-2.95 18.42 18.42 0 01-15.21-2.12c-6-.8-4.66-.93-1.31 4.28 7.29 11.35 4.24 15-4.14 23.72C62.7 77.12 70.69 82.04 74 85.14c6.7 6.17 1.74 13-5.65 12.35 4.88 8.65 5.25 9.2 5.41 10.7.34 3.25-1 6.28-3.86 7.58 4 19.73 16.77 27.17 37.72 32.87 6.48 1.76 13.43 3.33 20 1.88 6.57-1.45 12.87-6.74 13.24-13.51.22-4.11-1.69-10-1.26-14 .68-6.64 5.94-5 6.24-21a112.12 112.12 0 00-5.1-35.45",fill:"#EAB881"}),p.createElement("path",{d:"M121.63 67.04c-.14 1.89.33 11.5 1.43 14.94 2.29 7.11 7.13 6.6 10.67 8.13 4.36 1.9 5.64 6.66-1.58 8.75-3.85 1.12-7.92 2.25-11.82 1.33 1.4 1.63 3.81 1.84 6 1.84 14.73 0 15.5-9 13.14-12.25-3.67-5.06-12.38-1.31-15.58-12.81-.81-2.74.11-8.51-2.26-9.93z",fill:"#D38053"}),p.createElement("path",{d:"M110.39 112.3c-10.66-3-13.86-7.32-14.77-5.86-1.15 1.83 18.2 12.62 29.48 6.84-5.03.06-9.69.44-14.71-.98zM86.23 73.61c1.75 0 7-6 8.82-7.15 3.63-2.2 7.63-1.08 11.78-2-.51-1.34-3.51-5.43-4.18-5.29-3.17.68-9.2.3-9.2.3s-13.18 14.27-7.22 14.14zm39.37-15.85c-5.09.43-3.23 1.61-2.29 5.5a18.92 18.92 0 0117.63 3.35c-5.31-8.47-9.64-9.34-15.34-8.85z",fill:"#000"}),p.createElement("path",{d:"M91.39 85.5c4.56 6.52 15.3 4.23 18.45-1.77-.92-5.69-16.99-9.33-18.45 1.77zm9.87 1.69c-6.09 3.06-8.18-7.15-1.85-7.15 4.07 0 5.74 5.19 1.85 7.15zm25.58-4.58c2.38 3.65 14 2.53 14.28-3.35-4.19-9.42-16-4.69-14.28 3.35zm8.47-1.63a3.56 3.56 0 01-5.31 1.29c-2.29-1.87-1-6.45 2.58-6a3.57 3.57 0 012.73 4.71z",fill:"#FFF"}),p.createElement("path",{d:"M126.72 79.53c1.76-6.07 10.8-8.36 14.4-.27 1.07 2.38.95-6.79-5.3-7.23-3.92-.28-10.17.09-9.49 10a11.4 11.4 0 01.39-2.5zm-27.31.51c-6.34 0-4.24 10.2 1.85 7.15 3.89-1.95 2.23-7.15-1.85-7.15z",fill:"#000"}),p.createElement("path",{d:"M132.6 76.26c-3.61-.44-4.87 4.14-2.58 6a3.4 3.4 0 102.58-6zm-63.68 47.11c-2.54-10.52-.32-4.66-9.77-9 5.12 9 12.19 18.98 9.77 9zM129 41.1c5.48 7.57 6.11 13.42 5.52 9.56a51.53 51.53 0 00-2.44-9.71 16.7 16.7 0 01-3.08.15z",fill:"#000"}),p.createElement("path",{d:"M137.16 26.23c3.42-12.58-5.26-13.54-7.57-11.18A10.51 10.51 0 00113.3 5.04c-3.11-5.35-12.48-8.78-24.25 2.14C88-.5 72.44 1.9 70.12 17.68c-5.8 1.09-8.67 4.26-10 6.8-5.74.56-24.3 24.19-25.12 32.06-.51 4.69 2 9.11 3.31 13.65.84 2.89 1.22 6 2.75 8.59 4 6.77 0 3.56 5 2.71 4.44-.75 16.29 5.15 22.4 16 3.66.32 7.38-.9 8.67-5.17 1.72-5.69-6.59-8.6-8.54-13.18-4.08-9.57 10.77-15 12.37-23.84 1-5.78-3.41-11.93-7.06-17.09 1.24 0 2.7.15 4.46.38-.16-.1-.3-.21-.45-.32a17.59 17.59 0 0015.66 2.44 6.35 6.35 0 01-4.78 2.95c5.21 3.24 13.15.17 14.83-5.74 1.2 4.84 9.14 8.31 16.65 0a16.12 16.12 0 0018.08.78 11.39 11.39 0 01-5.61-4.34c3.19.61 6.37-1.64 7.88-4.5 1.51-2.86 1.74-6.22 1.9-9.46a9.68 9.68 0 01-5.36 5.83zm-77.44 3.81l-.08-.11.08.11zm-.5-3.51v.09c0-.37.06-.82.09-1.36-.05.48-.07.89-.09 1.24v.03zm14.53 7.72a18.09 18.09 0 004.06 4 16.75 16.75 0 01-4.06-4.03v.03zm-.59-.86l.24.35-.24-.35z",fill:"#000"}),p.createElement("path",{d:"M97.49 76.04c-3.73.6-7.38 4.53-6.58 9 1-2.29 1.84-4.94 5.06-6.12 4.28-1.56 11.29-.39 13.75 4.36 1.38 2.65.02-9.24-12.23-7.24z",fill:"#000"}),p.createElement("path",{d:"M73.79 108.19c-.16-1.5-.53-2.05-5.41-10.7-6.11-10.84-17.95-16.75-22.38-16-7.48 1.27-15.82 21.55 15.3 33.82 8.33 3.28 13.12-1.13 12.49-7.12z",fill:"#EAB881"}),p.createElement("path",{d:"M96 105.92c2.11-2.9 10.26 2.05 16.39-5.72.79-1 1.41-4 3.31-3.71-5.06-.88-6.61 8.28-14.23 6.32-3.12-.81-9-5.15-10 11.67a58.56 58.56 0 014.53-8.56zm-33.55-5.55c4.3-10.34-20.92-21.24-19.6-7 .3 3.21 2.29 8.83 5.31 9.81-2.45-5.37.27-12.44 1.57-13.5 2-1.61 4.51.76 7.4 2.9-.13 1.68-2.51 2.46-2.65 4.09-.12 1.31 1.07 2.94 5.05 2a7.72 7.72 0 01-2.17 5 5.2 5.2 0 005.09-3.3zm130.32-29.93a3.7 3.7 0 01-.27-3.06c4.45-17.69 1.95-7.91-1.07-3.12-2.38 3.78-3.24 6.3.67 8.22 23 11.28 1.9-.25.67-2.04z",fill:"#D38053"}),p.createElement("path",{d:"M192.25 75.29c-2.41-1-6.47-3.9-6.5-5.61 0-1.15 4.89-8.09 3.9-14.36-1.07 1.71-6.51 12.19-6.39 14.2.23 3.86 9.09 5.81 8.99 5.77zm13.21-25.34c-.16 1.86-6.76 14.12-6.76 18.83.36 1.09 4.49 2.16 4.71 3.29-6.82-5.17 3.5-20.43 2.05-22.12z",fill:"#D38053"}))))}var u=a(30);function f(e){let{workout:t,badges:a,upsellLink:l,upsellText:n}=e;const r=Object(s.useSelect)(e=>e("yoast-seo/workouts").getFinishedSteps(u.c.cornerstone)),p=l||"https://yoa.st/workout-cornerstone-upsell";return Object(c.createElement)(i.a,{id:"cornerstone-workout-card",name:u.c.cornerstone,title:Object(o.__)("The cornerstone approach","wordpress-seo"),subtitle:Object(o.__)("Rank with articles you want to rank with","wordpress-seo"),usps:[Object(o.__)("Make your important articles rank higher","wordpress-seo"),Object(o.__)("Bring more visitors to your articles","wordpress-seo")],image:m,finishableSteps:u.a.cornerstone,finishedSteps:r,upsellLink:p,upsellText:n,workout:t,badges:a})}f.propTypes={workout:r.a.func,badges:r.a.arrayOf(r.a.element),upsellLink:r.a.string,upsellText:r.a.string},f.defaultProps={workout:null,badges:[],upsellLink:null,upsellText:null}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var l,c=a(1),n=a(2),r=a.n(n),o=a(3),s=a(5),i=a(128),p=a(0);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function m(e){return p.createElement("svg",d({viewBox:"0 0 299 322",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),l||(l=p.createElement("g",{transform:"matrix(-1 0 0 1 298.412 0)",fill:"none"},p.createElement("circle",{fill:"#F0ECF0",cx:131.2,cy:190.029,r:131.2}),p.createElement("path",{d:"M262.5 92.23c-1 1.2-3 2.9-7.5 5a18.4 18.4 0 01-10.9 1.6c-.5-1-1-2.2-1.7-3.3l.4-.2.3-.2a14 14 0 003.3-.2c2.4.2 4.7-.6 6.9-3.2 3.1-3.9 1.7-10.7-1.3-14.6 2.6 2.5 4 5.7 6.4 8.6a231 231 0 013.3 4c.1.4 1.5 1.8.8 2.5zm-90.9 98.2a17.1 17.1 0 014 14.3c-11-7.9-22-18.9-31.8-37.8 26.5 1 39.4 8.8 39.5 8.7 43-17.2 51.7 1.5 66.8-6.3 2.3 4.7 5.3 6.3 8.4 9.4-13.5-13.9 5.7-22-5.1-57.7 7.3 0 20.8-4.8 22.9-9.7 14.8 26.3 10.5 39.9 17.8 54.6.6 1.2 2.3 6.7 3.5 8.2 2 2.8 0 7.7-2.7 10.6-29.7 32.8-68.9 33.6-93.5 36.8-6.4-4.6-13.8-8.5-21.5-13.7-1-5.1-1.2-11.2-8.3-17.4z",fill:"#F9BF8C"}),p.createElement("path",{d:"M253.4 121.03c10.8 35.8-8.4 43.8 5.1 57.8-3-3.2-6-4.8-8.4-9.5a52.999 52.999 0 01-.3-2.2 50.2 50.2 0 01-.4-5v-2l.1-3.6.1-1.8.3-3.7.4-3.7.6-5.6a153.4 153.4 0 00.6-9.5v-2a69 69 0 00-.3-7.8l-.2-1.6a10.5 10.5 0 002.4.3v-.1zm-11-25.6l1.7 3.4h-.1c-1.9-.1-2.3-2.3-2.7-2.6l-.1-.2 1.2-.6z",fill:"#DB7A53"}),p.createElement("path",{d:"M219.7 95.53c-.7-1.6-3-3-5.5-3.6.1-.011.2-.011.3 0a8.4 8.4 0 005.1-1.3l-.3-.2a1.6 1.6 0 00.2 0 3.3 3.3 0 002.7-.6 34.2 34.2 0 006.4-4 5 5 0 002-2.8l.4.3c-.7 6.5 5.4 11.5 12.1 11.9l-.3.1-.4.2-1.2.6c-3.8 1.9-11 5.7-13.6 5.6-2.9 0-6.9-2.2-9.8-3.9 1.4-.5 2.3-1.2 1.9-2.3z",fill:"#DB7A53"}),p.createElement("path",{d:"M223.7 76.23v.3a3.7 3.7 0 01-.2 1.3c-1.3-.7-2.4-1.5-2.6-2.6a3.2 3.2 0 01.3-1.7 7.1 7.1 0 012.5 2.7z",fill:"#F9BF8C"}),p.createElement("path",{d:"M253.3 91.73c-2.1 2.6-4.5 3.4-6.9 3.2a13 13 0 005.2-2.3c-6 2.7-10.5 1.1-13.8-1.5a36.9 36.9 0 01-4.7-5.3c-1.1-1.6-1.8-2.8-2.1-2.9a3 3 0 000 .3l-.3-.3a2.4 2.4 0 00-.9-2 10.2 10.2 0 00-3.2-1.9 5.5 5.5 0 012.9.6c1.6.9 1 2.1 1.8 3.1a3.3 3.3 0 00.2-3.7c-.8-1.3-4-1.1-6.1-1.3a2.3 2.3 0 000-.2l.8-1a1.3 1.3 0 01-.7-.8c-.8-1.2-2.4-2-4.2-2.6l.1-.2a16.4 16.4 0 012.2-3.5c.7-.8 5.5-.3 6.1-.6a21 21 0 002.5.7l16.8 5.1a7.8 7.8 0 013 2.5c3 3.9 4.4 10.7 1.3 14.6z",fill:"#F9BF8C"}),p.createElement("path",{d:"M228.6 85.73a34.2 34.2 0 01-6.4 4 3.3 3.3 0 01-2.6.6c1.5-.6 2.1-2.3.7-2.8l-.8-3.8a10 10 0 002-.7v.1c.5.8.4 4-.4 4.6 1-.2 2.2-3.1 2.5-4a1.3 1.3 0 00-.6-1.5 5.2 5.2 0 00.8-.8 6.7 6.7 0 001.3-2 6.3 6.3 0 011.5-.4 10.2 10.2 0 013.2 1.9 2.4 2.4 0 01.9 2 5 5 0 01-2.1 2.8zm-5-16.3a16.4 16.4 0 00-2.2 3.5l-.1.2a39 39 0 00-2.4-.6 9 9 0 012.3 1 3.2 3.2 0 00-.3 1.7c.3 1.1 1.3 2 2.6 2.6a11.3 11.3 0 01-.9 1.8 9.3 9.3 0 01-2.7 3.3l-.5.3-3.4-15.4-2.1-.3a4.4 4.4 0 012.7-1.4 35.6 35.6 0 0113 2.7c-.5.3-5.3-.2-6 .6z",fill:"#F9BF8C"}),p.createElement("path",{d:"M219.4 83.23a6 6 0 01-2.8.7 7.8 7.8 0 01-1.5-.2 4 4 0 001.5.2 9.8 9.8 0 003-.2l.7 3.8c1.4.5.8 2.2-.7 2.8h-.1a1.6 1.6 0 01-.2 0 39 39 0 00-7-3c-.3-3.4-.6-6.7-2-9.7 1.7-2.8 3.2-5.6 1.7-6.6 0 1.3-1.1 3.4-2.4 5.4a13.3 13.3 0 00-1.2-1.7 13 13 0 00-5.2-3.6c.8-1.7 1.4-3.5 3.7-3.8a24.3 24.3 0 016.9.2l2.1.3 3.5 15.4z",fill:"#F9BF8C"}),p.createElement("path",{d:"M223.7 76.23a5 5 0 01.6 3.4 7 7 0 01.8-.3 6.7 6.7 0 01-1.3 2.1 5.2 5.2 0 01-.8.8 1.7 1.7 0 00-1.2-.2l-.2 1a10 10 0 01-2 .7 9.8 9.8 0 01-3 .2 6 6 0 002.8-.7l.5-.3a9.3 9.3 0 002.7-3.3 11.3 11.3 0 001-1.9 3.7 3.7 0 00.1-1.3v-.2zm1.6 1.3c.007.1.007.2 0 .3v-.3z",fill:"#DB7A53"}),p.createElement("path",{d:"M223 82.23c.524.3.773.92.6 1.5-.3.9-1.4 3.8-2.5 4 .8-.7 1-3.8.5-4.6v-.1l.3-1a1.7 1.7 0 011.1.2z",fill:"#DB7A53"}),p.createElement("path",{d:"M201.4 91.73a3.1 3.1 0 00-.8.7c-2-.9-3.9-2.7-5.7-3.4-.5-.1-2.7-.8-2.9-1.4a13.7 13.7 0 005.2 2 43 43 0 004.2 2v.1zm.1-2.2h.1a30.3 30.3 0 005.4.4 30 30 0 003.6 1.6c-2.6-.3-5.7-1-8-.4l-2.2-1.3a2.7 2.7 0 001.1-.3zm13 2.5a1.4 1.4 0 00-.3 0 10.6 10.6 0 00-2-.4h-.4a26.6 26.6 0 01-3-1.8l1.7-.1a3.2 3.2 0 001.3-.4 1.2 1.2 0 00.5-1l6.7 2.7-6.7-3.6a39 39 0 017 3c.1.2.3.2.4.3a8.4 8.4 0 01-5.2 1.3z",fill:"#F9BF8C"}),p.createElement("path",{d:"M225 79.33a7 7 0 00-.7.3 5 5 0 00-.6-3.4 7.1 7.1 0 00-2.5-2.7 9 9 0 00-2.2-1l2.3.7c1.8.5 3.4 1.3 4.2 2.6a1.3 1.3 0 00.6.6c.2 0-.5.7-.8 1.1v.3c2.2 0 5.4-.1 6.2 1.2a3.3 3.3 0 01-.2 3.8c-.8-1-.2-2.3-1.8-3.2a5.5 5.5 0 00-3-.6 6.3 6.3 0 00-1.4.3h-.1zm6 3.9a3 3 0 010-.3c.3 0 1 1.3 2 3a23.8 23.8 0 004.8 5.2c3.3 2.6 7.8 4.2 13.8 1.6a13 13 0 01-5.2 2.2 14 14 0 01-3.3.2c-6.7-.4-12.8-5.4-12.1-11.9z",fill:"#DB7A53"}),p.createElement("path",{d:"M208.4 74.73c.478.53.913 1.099 1.3 1.7-1.4 2.2-3 4.3-3.5 5.3s-1.3 2.6-.3 3.6a38.8 38.8 0 006.4 3 1.2 1.2 0 01-.6 1 3.2 3.2 0 01-1.2.4l-1.8.1a14.4 14.4 0 00-3.6-1.9 13.4 13.4 0 01-3-1.2c0-.9-.3-2.4-.5-4 1.6-3 5-8.2 2.7-10.1.9 1.6-1.4 5.5-3 8l-.8-4a3.8 3.8 0 000-2 3.5 3.5 0 01-.2 1c-.4-1.6-.7-2.6-1-2.7-.9-.3-2 .6-3 2 1-2.2 1.5-4.1 4.7-4.1a7.3 7.3 0 012.2.4 13 13 0 015.2 3.5zm-6.1 13a39.6 39.6 0 014.7 2.2 30.3 30.3 0 01-5.3-.5 1.7 1.7 0 00.6-1.7z",fill:"#F9BF8C"}),p.createElement("path",{d:"M207 84.53c-.2-1.3 1.6-4.1 3.3-6.9a27 27 0 012 9.7l-5.3-2.8zm-7.6-11.7c.3 0 .6 1.2 1 2.7-1.2 2.7-5.5 6.5-6.7 8.9a3.4 3.4 0 00-.6 2c.2.7 2 2 4.1 3.2a13.7 13.7 0 01-5.2-2l-.4-.3a1.7 1.7 0 01-.5-.5 1.5 1.5 0 010-1.2c.5-1.2 2.8-7.5 5.2-10.9 1-1.3 2.1-2.2 3-1.9h.1z",fill:"#F9BF8C"}),p.createElement("path",{d:"M199.4 86.63a5 5 0 002 .8l.9.3a1.7 1.7 0 01-.7 1.7v.1a2.7 2.7 0 01-1.2.3c-1.8-1-3.4-2.1-4.1-2.6-.4-.3-.8-.6-.9-1a1.7 1.7 0 01.4-1c1.2-2 4-5.9 4.7-8.7l.7 4-1 1.5c-1 1.5-2.2 3.5-.8 4.6z",fill:"#F9BF8C"}),p.createElement("path",{d:"M201.2 86.03c-.5-.7-.6-.8-.4-1.7a9.9 9.9 0 01.8-1.6l.5 4a3 3 0 01-.9-.7z",fill:"#F9BF8C"}),p.createElement("path",{d:"M211.8 91.63h-1.2a30 30 0 01-3.6-1.7 39.6 39.6 0 00-4.7-2.2l-.8-.3a5 5 0 01-2-.8c-1.5-1.1-.3-3 .8-4.6l1-1.4c1.6-2.5 4-6.5 3.1-8 2.2 2-1.2 7-2.8 10.1a9.9 9.9 0 00-.7 1.6c-.3.9-.2 1 .4 1.7a3 3 0 00.9.7 13.4 13.4 0 003 1.3 14.4 14.4 0 013.6 1.9 26.6 26.6 0 003 1.7z",fill:"#DB7A53"}),p.createElement("path",{d:"M195.8 85.33a1.7 1.7 0 00-.4 1c0 .4.5.7.9.9l4 2.6c.8.5 1.6 1 2.4 1.3a4.2 4.2 0 00-1.3.6 43 43 0 01-4.2-2c-2.1-1.3-4-2.6-4-3.3a3.4 3.4 0 01.5-2c1.2-2.3 5.5-6.1 6.6-8.8a3.5 3.5 0 00.3-1 3.8 3.8 0 010 2c-.8 2.8-3.6 6.6-4.8 8.7zm11.2-.8l5.3 2.8 6.7 3.7-6.7-2.6a38.8 38.8 0 01-6.4-3c-1-1-.4-2.4.3-3.5l3.5-5.4c1.3-2.2 2.4-4 2.4-5.3 1.5 1 0 3.7-1.8 6.5s-3.6 5.6-3.2 7l-.1-.2z",fill:"#DB7A53"}),p.createElement("path",{d:"M201.4 91.73a4.2 4.2 0 011.3-.6c2.2-.5 5.3.1 7.9.4l1.2.1h.4a10.6 10.6 0 012 .3c2.4.6 4.8 2 5.4 3.6.5 1-.5 1.8-1.8 2.2a11.1 11.1 0 01-2 .4c-4.2.6-5.5 2-11.5 2.8-2.6.4-4.4-4-4.4-5.9a4.2 4.2 0 01.7-2.6 3.1 3.1 0 01.8-.7z",fill:"#F9BF8C"}),p.createElement("path",{d:"M253.4 121.03a10.5 10.5 0 01-2.4-.2 5.3 5.3 0 01-.7-.2c-2.4-.9-8.6-17.6-9.3-21-.3-1.2-.3-3.5.3-3.4.3.3.8 2.5 2.7 2.5h.1a18.4 18.4 0 0010.9-1.5c4.6-2.1 6.6-3.8 7.6-5 .6-.8-.7-2.2-.9-2.5.4-.4 1.3.1 1.7.3 5.9 2.8 10.2 12.7 13.1 19.4a2.9 2.9 0 01-.1 1.9c-2.1 5-15.6 9.8-23 9.8v-.1z",fill:"#A52A6A"}),p.createElement("path",{d:"M171.6 190.43c7 6.2 7.3 12.3 8.3 17.4l-4.4-3a17 17 0 00-3.9-14.4z",fill:"#DB7A53"}),p.createElement("path",{d:"M41.3 265.93l-.5.2c6.5 8.6 14.1 17.5 21 30.5a28.8 28.8 0 012.8 7.7c45.714 25.792 102.423 21.736 144-10.3-.8-3.5-1.7-7.1-2.8-11 12.67-7.311 18.506-22.484 14-36.4a43 43 0 00-18.4-25.1c-6.4-4.6-13.8-8.5-21.5-13.7l-4.4-3c-10.8-8-22-19-31.7-37.9l-.1-.2a71 71 0 00-19.9-2.3c12 5.8 41 37 4.2 43-29 3.1-47.3-27.9-84-28.7a47.8 47.8 0 00-13.5 9.4l-1 1a37 37 0 014.7-2c16.4 1 27 15.3 32.9 30.3 10.3 26.2 6.2 44.7-2.6 50.6-5.3 3.6-13.3 2.7-20-3.7l-1.5.7-1 .6-.7.3z",fill:"#009288"}),p.createElement("path",{d:"M29.5 189.23a37 37 0 014.5-2.2c16.4 1 27 15.3 33 30.3 10.3 26.2 6.2 44.7-2.6 50.6-5.3 3.6-13.4 2.7-20-3.7l-1.5.7c6.9-5.7 4.9-6.8 18-4.4-10.8-6.4-16.1-9.1-38.7 6.1a122.2 122.2 0 01-21.4-53.5 133 133 0 0128.7-24.1v.2z",fill:"#F9BF8C"}),p.createElement("path",{d:"M61 260.63c-13.2-2.4-11.1-1.3-18 4.4l-1 .6-.6.2-.6.3-.5.3-.6.3-1.1.6-.7.3-1 .6-.7.4-1.2.6-.6.3-1.3.7-.6.3-1.3.7-.5.3-1.4.8-.3.1-1.6 1-.6-.9-4.5-5.8c22.6-15.2 27.9-12.4 38.7-6v-.1z",fill:"#DB7A53"}),p.createElement("path",{d:"M128 207.43c-29.2 3.1-47.5-28.2-84.5-28.7 14.2-5.2 23-11.3 23-27.1 0-8.8-2.7-25.8-3.6-38.2 0 0 57 21.4 57.8 36.1l2 14.3c11.2 4.3 43.3 37.4 5.3 43.6z",fill:"#F9BF8C"}),p.createElement("path",{d:"M87.3 151.73a56.8 56.8 0 01-17.1-22.8 62.4 62.4 0 0043 22c2.5-.1 5-.2 7.3-.5v.5l.2 1.2c-4.7 11.9-7.3 19.5-33.4-.4z",fill:"#DB7A53"}),p.createElement("path",{d:"M162 280.43c.5 7.4-16.2 16.2-30.8 17.3-19.8 1.4-54.8-9.2-48-40.7 18.2 35 68.8 31.3 78.8 23.4z",fill:"#216D64"}),p.createElement("path",{d:"M122.5 72.33a9.8 9.8 0 00-2.1-.8h2.6l-.5.8zm-9.9.8a4.8 4.8 0 00-.6-1.7c7.3 0 4-.6.6 1.7zm12.6 14l.8.8c-.9-1.5-1.5-4.6-2.9-12.6l-.4-.3a16 16 0 002.5 12.1z",fill:"#F9BF8C"}),p.createElement("path",{d:"M154.7 95.83a44.5 44.5 0 00-1.6-8.2c-2-6-4.8-6.6-7.3-9.6a50.6 50.6 0 00-1-23.9c0 .1-8.7-35.8-54.2-22a44.6 44.6 0 00-10 5.9c-10.6 8.2-7.6 13.4-10 25.4a74.9 74.9 0 01-4.4 11.9c-4.8 3.8-7.6 6.5-8.1 9.9 1 4.7 5.4 18.3 5 28.1 6 27.2 36.6 38.3 50 37.6 2.6-.1 5-.2 7.4-.5 6.5-.7 11.9-2.8 17-11.3 6.4-10.8 5.6-16.5 9.4-22.5 2.5-4.1 9-9.7 7.8-20.8zm-42.2-19.5c-1 7.6-2.5 10.5-5.3 11.4a18.3 18.3 0 001.3-3.3c-4.6 2.5-17 2.8-21.2-3-.9.4-2 .4-4-.6l.2-.1c4.2-.1 2.6-1 4.1-3.8a10.6 10.6 0 01.6-1h17.1a11 11 0 013.8 6.7 58.3 58.3 0 001.2-6.8l3-.2-.8.7z",fill:"#F9BF8C"}),p.createElement("path",{d:"M112.6 124.23c-4-2-5.6-6.3-11.6-10.8 10 5.2 19.3 6.3 26.5 3.8-1.7 1.7 1.2 6.3-3.5 8.4-4 1.7-7.3.5-11.4-1.4z",fill:"#D86060"}),p.createElement("path",{d:"M101 113.43l-1.6-.8c7.9-.3 12.9-.7 17.2-.3 2.2.3 2.2 2 3.8 2 1.6 0 2.7-1.6 4.4-1.4 1.2.2 3 1.1 5.6 3a20.3 20.3 0 01-2.9 1.2c-7.2 2.6-16.6 1.5-26.5-3.7z",fill:"#BC3939"}),p.createElement("path",{d:"M108.5 84.43l.2-.5a15.2 15.2 0 00-2.3-3.8c-5-5.8-13.6-5.1-16.5-1.6-.9 1.3-1.5 2.4-2.6 3 4.1 5.7 16.6 5.4 21.2 3v-.1zM97 85.63a4.8 4.8 0 11.408-9.592A4.8 4.8 0 0197 85.629z",fill:"#FFF"}),p.createElement("path",{d:"M89.9 78.53c-.9 1.3-1.5 2.4-2.6 3-1.1.6-2 .2-4-.7l.2-.2c4.2 0 2.6-1 4.1-3.7 2.8-5.2 9-4.8 14.6-3 .1 0 5.9 2.4 6.8 8.7l-.3 1.2a14.4 14.4 0 00-2.3-3.7c-5-5.8-13.6-5.1-16.5-1.6z",fill:"#000"}),p.createElement("path",{d:"M127.5 83.03h-.1a27 27 0 0011.6.6c2.7-1 4.8-4 5-6.8-1.8-1.2-2.8-4.6-8.2-2.9-5 1.6-7 4.2-8.3 9v.1zm2.8-3.7a4.4 4.4 0 118.798-.2 4.4 4.4 0 01-8.798.2z",fill:"#FFF"}),p.createElement("path",{d:"M145.1 75.33c0 .5.5.7 1 .9a8 8 0 001.2.1l.1.2a5 5 0 01-1.4.6 2.4 2.4 0 01-2-.4c-1.8-1.2-2.8-4.6-8.2-2.8-4.9 1.6-7 4.2-8.3 9h-.2c-1.2-6.7 4-11.3 9-12.5l3.1-.2c2.8.2 5.2 1.8 5.7 5.1z",fill:"#000"}),p.createElement("path",{d:"M106.7 61.53c-4 0-8.2-.4-11.7-.3-3.6.1-8.3 1.7-12.8 4.6 1.9-4 8.5-7.2 12.5-7.7 2.9-.3 6.8-.7 9.7-.2 3.7.7 5.6 3.1 2.3 3.6zm24.7 5.6c2.3-2.6 6.8-6.2 9.4-5.8 3 .4 3.5 1.2 5.4 3.6.056.898.056 1.8 0 2.7H145a7.6 7.6 0 00-4.7-2.2c-1.9-.1-7 1.2-8.8 1.7h-.1z",fill:"#B2512B"}),p.createElement("circle",{fill:"#000",transform:"rotate(-78.1 97.1 80.83)",cx:97.1,cy:80.829,r:4.8}),p.createElement("circle",{fill:"#000",cx:134.7,cy:79.329,r:4.4}),p.createElement("path",{d:"M106.3 109.73a40 40 0 01-10.3-1.3c-1.9 2-.1 6.6-.7 9.2-1-3.4-4-8-2.2-12.4a28.7 28.7 0 0013.2-1c9-2.8 6.6-6.2 12.6-6.5-5.2 1-4.4 11.4-12.6 12z",fill:"#DB7A53"}),p.createElement("path",{d:"M54 29.03c3-3.6 13.5-5.8 20-6-.5 1.3 4.5 2.7 4 4a37.3 37.3 0 008.4-.2 3.5 3.5 0 00.4 2.7l3.8 2.6a44.6 44.6 0 00-10.1 5.9c-10.5 8.2-7.5 13.4-9.9 25.4a74.9 74.9 0 01-4.4 11.9l-12.4 7a10.3 10.3 0 00-5.3-.7l-.3-.4c-2.2-4-6.8-14.2-7.2-18.8-1.4-11.4 1.2-25 10-32.4a18.5 18.5 0 013-2 9.8 9.8 0 00.1 1H54zm2.7 55l1.4.7 3.5-1.6a5.5 5.5 0 01-2.4 1.9 10.4 10.4 0 01-1.2.2l-1.2-1.2h-.1z",fill:"#838BC5"}),p.createElement("path",{d:"M127 22.23c-7.5-4.7-7-2-15.6-4l5.2-.4c-13.3-1-28.6 3.4-30.1 9a37.3 37.3 0 01-8.4.2c.5-1.3-4.6-2.6-4-4-6.6.2-17 2.4-20.1 6a9.8 9.8 0 010-1c0-8.2 10.8-17.8 30.3-15.8 13.4-14.3 42.4-21 61 8.1-13-7.3-16.2-.2-19.3.8 7.8-1.6 27.3 3 28.9 24.3-1.7-7.8-8.4-8.6-13.6-8-1.7-2.3-3.5-4.3-4.9-5.9-4.5-5.2-3.5-5.7-9.4-9.3z",fill:"#0071BC"}),p.createElement("path",{d:"M137.4 46.73c3.4 14.5-3.1 19.3-22.4 18.8 12.5-8.9 11.5-19.3 2-26.1-8.2-6-14 .2-26.4-7.3a46 46 0 01-3.8-2.6 3.5 3.5 0 01-.3-2.7c1.5-5.6 16.8-10 30-9l-5 .3c8.6 2.2 8-.6 15.5 4 5.9 3.7 4.9 4.2 9.4 9.5 1.4 1.6 3.2 3.5 4.8 5.8 3 4.2 5.5 9.6 3.5 16.7a26 26 0 01-2.6 6.2 14.6 14.6 0 00-4.7-13.6z",fill:"#0071BC"}),p.createElement("path",{d:"M126.1 69.33h-.7a14.6 14.6 0 013.2-1.7 14.8 14.8 0 00-2.5 1.7zm-.9 17.8l.8.8c1.2 1.8 2.7 1.5 6.3 4.8l.6.2c1.8 1.7 2.8 3.7 2 6.4-.2 3.2-5.3 8.2-12 5.8 5.3-1 6.9-.8 7.6-5.6-.2-6.7-8.3-4-10-16.5a17.3 17.3 0 01.9-8.8 9 9 0 011.3.8 16 16 0 002.5 12.1zm-2.1-14.5a6.3 6.3 0 00-.6-.3l.5-.9c1 0 .4.2.1 1.2z",fill:"#DB7A53"}),p.createElement("path",{d:"M56.7 84.03a12.7 12.7 0 00-3-1.7l12.4-7 9.2-5.2c-1.3 1.7-1.6 4.2-1.1 7l-12.6 6-3.5 1.7-1.4-.8z",fill:"#93278F"}),p.createElement("path",{d:"M151 92.03c5.5-1.8 14.3-20.4 5.8-23.5-5.4-2-24.6-.6-29.9.8-29.7-.4-42.2-3.3-49.3-.7a5 5 0 00-2.3 1.6c-4.3 5.5 3.1 20.2 8 21.8a46.3 46.3 0 0012.5 1.6c11.6 0 14.8-2.2 16.6-17.3 1-.6 4.4-4.3 9-2a10.6 10.6 0 011.8 1c2.9 17.6 2.5 11.3 9.1 17.5l.6.1c5.8 1.4 13.9.5 18.1-.9zm-40.5-17.9c-.4 3.6-1.7 13.4-4.8 15.4-4.2 2.8-17 2-21.7.4-4-1.4-11.5-17.2-5.7-19.3 5.6-2 23.8 0 29.6.6 0 .2 2.8.3 2.6 3v-.1zm2.1-1a4.8 4.8 0 00-.6-1.8c7.3.2 4-.5.6 1.8zm10.5-.5a10 10 0 00-2.7-1.2c4.2.1 3.1-.3 2.7 1.2zm27.2 17.4c-4.7 1.6-16.3 2.5-20.6-.4-1-.7-2.8-5.1-4.5-15.3-.4-2.8 2.6-2.5 2.6-2.8.9-.2 4.3-.7 8.5-1 4.2-.3 15.6-1.2 19.7.2 5.8 2.1-1.6 18-5.7 19.3z",fill:"#5D237A"}),p.createElement("path",{d:"M45.5 82.33c-4.2 1.7-4.4 10-3 14.8 2.8 9.2 12 17.6 21.7 16.1 5.2-.7 1.5-5.7-1-16.4l-1-5.6c-3.3-7-9.4-11.7-16.7-8.9zm13.2 13c-.4.4-4.4 3.1-1.2 5 2.2 1.5 4 .5 3.6 2.6-.3 1.4 0 3.3-2 3 2-3-1.1-4-3-2.9s-5.7-5.3.9-8.2c-4-4.8-7.5-12.8-10-.5-3-9.7 3.6-17.3 11.7 1z",fill:"#F9BF8C"}),p.createElement("path",{d:"M58.7 95.33c-.4.4-4.4 3.1-1.2 5 2.2 1.5 4 .5 3.6 2.6-.3 1.4 0 3.3-2 3 2-3-1.1-4-3-2.9s-5.7-5.3.9-8.2c-4-4.8-7.5-12.8-10-.5-3-9.7 3.6-17.3 11.7 1z",fill:"#CE6D42"}))))}var u=a(30);function f(e){let{workout:t,badges:a,upsellLink:l,upsellText:n}=e;const r=Object(s.useSelect)(e=>e("yoast-seo/workouts").getFinishedSteps(u.c.orphaned)),p=l||"https://yoa.st/workout-orphaned-content-upsell";return Object(c.createElement)(i.a,{id:"orphaned-workout-card",name:u.c.orphaned,title:Object(o.__)("Orphaned content","wordpress-seo"),subtitle:Object(o.__)("Clean up your unlinked content to make sure people can find it","wordpress-seo"),usps:[Object(o.__)("Make pages easier for Google and visitors to find","wordpress-seo"),Object(o.__)("Add internal links to your posts and pages","wordpress-seo")],image:m,finishableSteps:u.a.orphaned,finishedSteps:r,upsellLink:p,upsellText:n,workout:t,badges:a})}f.propTypes={workout:r.a.func,badges:r.a.arrayOf(r.a.element),upsellLink:r.a.string,upsellText:r.a.string},f.defaultProps={workout:null,badges:[],upsellLink:null,upsellText:null}},2:function(e,t){e.exports=window.yoast.propTypes},200:function(e,t,a){"use strict";a.r(t);var l=a(178),c=a(179);window.yoast=window.yoast||{},window.yoast.adminModules={components:{workouts:{CornerstoneWorkoutCard:l.a,OrphanedWorkoutCard:c.a}}}},3:function(e,t){e.exports=window.wp.i18n},30:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return n}));const l={configuration:"configuration",cornerstone:"cornerstone",orphaned:"orphaned"},c={cornerstone:{chooseCornerstones:"chooseCornerstones",checkLinks:"checkLinks",addLinks:"addLinks",improved:"improved",skipped:"skipped"},orphaned:{improveRemove:"improveRemove",update:"update",addLinks:"addLinks",removed:"removed",noindexed:"noindexed",improved:"improved",skipped:"skipped"}},n={cornerstone:[c.cornerstone.chooseCornerstones,c.cornerstone.checkLinks,c.cornerstone.addLinks],orphaned:[c.orphaned.improveRemove,c.orphaned.update,c.orphaned.addLinks]}},5:function(e,t){e.exports=window.wp.data},7:function(e,t){e.exports=window.yoast.componentsNew},8:function(e,t){e.exports=window.yoast.helpers}});