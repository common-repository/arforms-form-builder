!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.wNumb=t()}(function(){"use strict";function b(t){return t.split("").reverse().join("")}function h(t,e){return t.substring(0,e.length)===e}function o(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function x(t){return"number"==typeof t&&isFinite(t)}function r(t,e,r,n,i,o,s,a,l,u,c,p){var f,d,h,m=p,g="",v="";return!!x(p=o?o(p):p)&&((p=!1!==t&&0===parseFloat(p.toFixed(t))?0:p)<0&&(f=!0,p=Math.abs(p)),!1!==t&&(h=t,t=(t=p).toString().split("e"),p=(+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]+h:h)))).toString().split("e"))[0]+"e"+(t[1]?t[1]-h:-h))).toFixed(h)),-1!==(p=p.toString()).indexOf(".")?(d=(h=p.split("."))[0],r&&(g=r+h[1])):d=p,f&&a&&(v+=a),n&&(v+=n),f&&l&&(v+=l),v+=d=e?b((d=b(d).match(/.{1,3}/g)).join(b(e))):d,v+=g,i&&(v+=i),v=u?u(v,m):v)}function n(t,e,r,n,i,o,s,a,l,u,c,p){var f,d="";return!(!(p=c?c(p):p)||"string"!=typeof p)&&(a&&h(p,a)&&(p=p.replace(a,""),f=!0),n&&h(p,n)&&(p=p.replace(n,"")),l&&h(p,l)&&(p=p.replace(l,""),f=!0),i&&(l=i,p.slice(-1*l.length)===l)&&(p=p.slice(0,-1*i.length)),e&&(p=p.split(e).join("")),f&&(d+="-"),""!==(d=(d+=p=r?p.replace(r,"."):p).replace(/[^0-9\.\-.]/g,""))&&(d=Number(d),!!x(d=s?s(d):d)&&d))}function i(t,e,r){for(var n=[],i=0;i<s.length;i+=1)n.push(t[s[i]]);return n.push(r),e.apply("",n)}var s=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];return function t(e){if(!(this instanceof t))return new t(e);"object"==typeof e&&(e=function(t){var e,r,n,i={};for(void 0===t.suffix&&(t.suffix=t.postfix),e=0;e<s.length;e+=1)if(void 0===(n=t[r=s[e]]))"negative"!==r||i.negativeBefore?"mark"===r&&"."!==i.thousand?i[r]=".":i[r]=!1:i[r]="-";else if("decimals"===r){if(!(0<=n&&n<8))throw new Error(r);i[r]=n}else if("encoder"===r||"decoder"===r||"edit"===r||"undo"===r){if("function"!=typeof n)throw new Error(r);i[r]=n}else{if("string"!=typeof n)throw new Error(r);i[r]=n}return o(i,"mark","thousand"),o(i,"prefix","negative"),o(i,"prefix","negativeBefore"),i}(e),this.to=function(t){return i(e,r,t)},this.from=function(t){return i(e,n,t)})}}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(st){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function at(t){t.parentElement.removeChild(t)}function lt(t){return null!=t}function ut(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ct(t,e,r){0<r&&(dt(t,e),setTimeout(function(){ht(t,e)},r))}function pt(t){return Math.max(Math.min(t,100),0)}function ft(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function ht(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function mt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}function u(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function c(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function p(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function f(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function d(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new L(e,t.snap||!1,t.singleStep)}function h(t,e){if(e=ft(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function m(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function g(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function v(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function b(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function x(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function S(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function y(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function w(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function E(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function P(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),e=0<=e.indexOf("drag-all");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");S(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:e,fixed:i,snap:o,hover:s,unconstrained:a}}function C(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=ft(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function N(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function V(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function k(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function M(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function A(t,e){t.documentElement=e}function U(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function D(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:j,format:j},n={step:{r:!1,t:u},keyboardPageMultiplier:{r:!1,t:c},keyboardMultiplier:{r:!1,t:p},keyboardDefaultStep:{r:!1,t:f},start:{r:!0,t:h},connect:{r:!0,t:b},direction:{r:!0,t:E},snap:{r:!1,t:m},animate:{r:!1,t:g},animationDuration:{r:!1,t:v},range:{r:!0,t:d},orientation:{r:!1,t:x},margin:{r:!1,t:S},limit:{r:!1,t:y},padding:{r:!1,t:w},behaviour:{r:!0,t:P},ariaFormat:{r:!1,t:V},format:{r:!1,t:k},tooltips:{r:!1,t:C},keyboardSupport:{r:!0,t:M},documentElement:{r:!1,t:A},cssPrefix:{r:!0,t:U},cssClasses:{r:!0,t:D},handleAttributes:{r:!1,t:N}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:F,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(lt(e[t])||void 0!==i[t])n[t].t(r,(lt(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function O(t,f,o){function d(t,e){var r=et.createElement("div");return e&&dt(r,e),t.appendChild(r),r}function i(t,e){var r,t=d(t,f.cssClasses.origin),n=d(t,f.cssClasses.handle);return d(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(c()||p(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=z(e)[u];if(null===u)return!1;!1===u&&(u=G.getDefaultStep(K[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=J[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return O(e,G.toStepping(u),!0,!0),V("slide",e),V("update",e),V("change",e),V("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?dt(n,f.cssClasses.handleLower):e===f.handles-1&&dt(n,f.cssClasses.handleUpper),t}function s(t,e){return!!e&&d(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&d(t.firstChild,f.cssClasses.tooltip)}function c(){return $.hasAttribute("disabled")}function p(t){return R[t].hasAttribute("disabled")}function a(){q&&(N("update"+vt.tooltips),q.forEach(function(t){t&&at(t)}),q=null)}function l(){a(),q=R.map(e),C("update"+vt.tooltips,function(t,e,r){q&&f.tooltips&&!1!==q[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),q[e].innerHTML=t)})}function u(t,e){return t.map(function(t){return G.fromStepping(e?G.getStep(t):t)})}function n(d){var h=function(t){if(t.mode===st.PipsMode.Range||t.mode===st.PipsMode.Steps)return G.xVal;if(t.mode!==st.PipsMode.Count)return t.mode===st.PipsMode.Positions?u(t.values,t.stepped):t.mode===st.PipsMode.Values?t.stepped?t.values.map(function(t){return G.fromStepping(G.getStep(G.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),u(n,t.stepped)}(d),m={},t=G.xVal[0],e=G.xVal[G.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===st.PipsMode.Steps,f=(f=p?G.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=G.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[G.fromStepping(s),0];a=-1<h.indexOf(r)?st.PipsType.LargeValue:p?st.PipsType.SmallValue:st.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function h(i,o,s){function a(t,e){var r=e===f.cssClasses.value;return e+" "+(r?c:p)[f.ort]+" "+(r?n:u)[t]}var t,l=et.createElement("div"),n=((t={})[st.PipsType.None]="",t[st.PipsType.NoValue]=f.cssClasses.valueNormal,t[st.PipsType.LargeValue]=f.cssClasses.valueLarge,t[st.PipsType.SmallValue]=f.cssClasses.valueSub,t),u=((t={})[st.PipsType.None]="",t[st.PipsType.NoValue]=f.cssClasses.markerNormal,t[st.PipsType.LargeValue]=f.cssClasses.markerLarge,t[st.PipsType.SmallValue]=f.cssClasses.markerSub,t),c=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],p=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];return dt(l,f.cssClasses.pips),dt(l,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==st.PipsType.None&&((t=d(l,!1)).className=a(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>st.PipsType.NoValue&&((t=d(l,!1)).className=a(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),l}function m(){B&&(at(B),B=null)}function g(t){m();var e=n(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return B=$.appendChild(h(e,r,t))}function v(){var t=H.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||H[e]:t.height||H[e]}function b(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||mt(et),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(c()&&!s.doNotReject)&&(e=$,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===I.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(W||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!W&&{passive:!0}),r.push([t,e])}),r}function x(t){var e,r,n=pt(n=100*(t-(n=H,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=mt(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/v());return f.dir?100-n:n}function S(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&w(t,e)}function y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return w(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);A(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function w(t,e){e.handle&&(ht(e.handle,f.cssClasses.active),--Z),e.listeners.forEach(function(t){rt.removeEventListener(t[0],t[1])}),0===Z&&(ht($,f.cssClasses.drag),D(),t.cursor&&(nt.style.cursor="",nt.removeEventListener("selectstart",ut))),e.handleNumbers.forEach(function(t){V("change",t),V("set",t),V("end",t)})}function E(t,e){var r,n,i,o;e.handleNumbers.some(p)||(1===e.handleNumbers.length&&(o=R[e.handleNumbers[0]].children[0],Z+=1,dt(o,f.cssClasses.active)),t.stopPropagation(),n=b(I.move,rt,y,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:v(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:K.slice()}),i=b(I.end,rt,w,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=b("mouseout",rt,S,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(nt.style.cursor=getComputedStyle(t.target).cursor,1<R.length&&dt($,f.cssClasses.drag),nt.addEventListener("selectstart",ut,!1)),e.handleNumbers.forEach(function(t){V("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=x(t.calcPoint),r=(i=e,s=!(o=100),R.forEach(function(t,e){var r,n;p(e)||(r=K[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ct($,f.cssClasses.tap,f.animationDuration),O(r,e,!0,!0),D(),V("slide",r,!0),V("update",r,!0),f.events.snap?E(t,{handleNumbers:[r]}):(V("change",r,!0),V("set",r,!0)))}function P(t){var t=x(t.calcPoint),t=G.getStep(t),e=G.fromStepping(t);Object.keys(tt).forEach(function(t){"hover"===t.split(".")[0]&&tt[t].forEach(function(t){t.call(ot,e)})})}function C(t,e){tt[t]=tt[t]||[],tt[t].push(e),"update"===t.split(".")[0]&&R.forEach(function(t,e){V("update",e)})}function N(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(tt).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==vt.aria&&e!==vt.tooltips||i===r)&&delete tt[t]})}function V(r,n,i){Object.keys(tt).forEach(function(t){var e=t.split(".")[0];r===e&&tt[t].forEach(function(t){t.call(ot,J.map(f.format.to),n,J.slice(),i||!1,K.slice(),ot)})})}function k(t,e,r,n,i,o){var s;return 1<R.length&&!f.events.unconstrained&&(n&&0<e&&(s=G.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,s)),i&&e<R.length-1&&(s=G.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,s))),1<R.length&&f.limit&&(n&&0<e&&(s=G.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,s)),i&&e<R.length-1&&(s=G.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,s))),f.padding&&(0===e&&(s=G.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,s)),e===R.length-1&&(s=G.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,s))),!((r=pt(r=G.getStep(r)))===t[e]&&!o)&&r}function M(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function A(t,r,n,e,i){var o=n.slice(),s=e[0],a=[!t,t],l=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=k(o,t,o[t]+r,a[e],l[e],!1);!1===e?r=0:(r=e-o[t],o[t]=e)}):a=l=[!0];var u=!1;e.forEach(function(t,e){u=O(t,n[t]+r,a[e],l[e])||u}),u&&(e.forEach(function(t){V("update",t),V("slide",t)}),null!=i&&V("drag",s))}function U(t,e){return f.dir?100-t-e:t}function D(){Q.forEach(function(t){var e=50<K[t]?-1:1,e=3+(R.length+e*t);R[t].style.zIndex=String(e)})}function O(t,e,r,n,i){return!1!==(e=i?e:k(K,t,e,r,n,!1))&&(e=e,K[t=t]=e,J[t]=G.fromStepping(e),e="translate("+M(10*(U(e,0)-it)+"%","0")+")",R[t].style[f.transformRule]=e,L(t),L(t+1),!0)}function L(t){var e,r;_[t]&&(r=100,e="translate("+M(U(e=(e=0)!==t?K[t-1]:e,r=(r=t!==_.length-1?K[t]:r)-e)+"%","0")+")",r="scale("+M(r/100,"1")+")",_[t].style[f.transformRule]=e+" "+r)}function T(t,e){return null===t||!1===t||void 0===t?K[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?G.toStepping(t):t)||isNaN(t)?K[e]:t)}function j(t,e,r){var n=ft(t),t=void 0===K[0];e=void 0===e||e,f.animate&&!t&&ct($,f.cssClasses.tap,f.animationDuration),Q.forEach(function(t){O(t,T(n[t],t),!0,!1,r)});var i,o=1===Q.length?0:1;for(t&&G.hasNoSize()&&(r=!0,K[0]=0,1<Q.length&&(i=100/(Q.length-1),Q.forEach(function(t){K[t]=t*i})));o<Q.length;++o)Q.forEach(function(t){O(t,K[t],!0,!0,r)});D(),Q.forEach(function(t){V("update",t),null!==n[t]&&e&&V("set",t)})}function F(t){if(t=void 0===t?!1:t)return 1===J.length?J[0]:J.slice(0);t=J.map(f.format.to);return 1===t.length?t[0]:t}function z(t){var e=K[t],r=G.getNearbySteps(e),n=J[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=G.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}var H,R,_,B,q,X,Y,I=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},W=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),$=t,G=f.spectrum,J=[],K=[],Q=[],Z=0,tt={},et=t.ownerDocument,rt=f.documentElement||et.documentElement,nt=et.body,it="rtl"===et.dir||1===f.ort?0:100;dt(X=$,f.cssClasses.target),0===f.dir?dt(X,f.cssClasses.ltr):dt(X,f.cssClasses.rtl),0===f.ort?dt(X,f.cssClasses.horizontal):dt(X,f.cssClasses.vertical),dt(X,"rtl"===getComputedStyle(X).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),H=d(X,f.cssClasses.base),function(t,e){var r=d(e,f.cssClasses.connects);R=[],(_=[]).push(s(r,t[0]));for(var n=0;n<f.handles;n++)R.push(i(e,n)),Q[n]=n,_.push(s(r,t[n+1]))}(f.connect,H),(Y=f.events).fixed||R.forEach(function(t,e){b(I.start,t.children[0],E,{handleNumbers:[e]})}),Y.tap&&b(I.start,H,r,{}),Y.hover&&b(I.move,H,P,{hover:!0}),Y.drag&&_.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==_.length-1&&(r=R[t-1],n=R[t],i=[e],o=[r,n],s=[t-1,t],dt(e,f.cssClasses.draggable),Y.fixed&&(i.push(r.children[0]),i.push(n.children[0])),Y.dragAll&&(o=R,s=Q),i.forEach(function(t){b(I.start,t,E,{handles:o,handleNumbers:s,connect:e})}))}),j(f.start),f.pips&&g(f.pips),f.tooltips&&l(),N("update"+vt.aria),C("update"+vt.aria,function(t,e,o,r,s){Q.forEach(function(t){var e=R[t],r=k(K,t,0,!0,!0,!0),n=k(K,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=G.fromStepping(r).toFixed(1),n=G.fromStepping(n).toFixed(1),i=G.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var ot={destroy:function(){for(N(vt.aria),N(vt.tooltips),Object.keys(f.cssClasses).forEach(function(t){ht($,f.cssClasses[t])});$.firstChild;)$.removeChild($.firstChild);delete $.noUiSlider},steps:function(){return Q.map(z)},on:C,off:N,get:F,set:j,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<Q.length))throw new Error("noUiSlider: invalid handle number, got: "+t);O(t,T(e,t),!0,!0,n),V("update",t),r&&V("set",t)},reset:function(t){j(f.start,t)},__moveHandles:function(t,e,r){A(t,e,K,r)},options:o,updateOptions:function(e,t){var r=F(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),G=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?g(f.pips):m(),(f.tooltips?l:a)(),K=[],j(lt(e.start)?e.start:r,t)},target:$,removePips:m,removeTooltips:a,getPositions:function(){return K.slice()},getTooltips:function(){return q},getOrigins:function(){return R},pips:g};return ot}function t(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=O(t,gt(e),e);return t.noUiSlider=e}st.PipsMode=void 0,(z=st.PipsMode||(st.PipsMode={})).Range="range",z.Steps="steps",z.Positions="positions",z.Count="count",z.Values="values",st.PipsType=void 0,(z=st.PipsType||(st.PipsType={}))[z.None=-1]="None",z[z.NoValue=0]="NoValue",z[z.LargeValue=1]="LargeValue",z[z.SmallValue=2]="SmallValue";var L=(T.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++){var n=this.xNumSteps[r];if(n&&t/n%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of "+this.xPct[r]+"% range must be divisible by step.");e[r]=a(this.xVal,t,r)}return e},T.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},T.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},T.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},T.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},T.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},T.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},T.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},T.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},T.prototype.convert=function(t){return this.getStep(this.toStepping(t))},T.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},T.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},T);function T(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([ft(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var j={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},F={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},vt={tooltips:".__tooltips",aria:".__aria"},z={__spectrum:L,cssClasses:F,create:t};st.create=t,st.cssClasses=F,st.default=z,Object.defineProperty(st,"__esModule",{value:!0})});