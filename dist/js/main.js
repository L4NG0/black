!function(){var t={387:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},184:function(t,n,e){var r=e(574)("unscopables"),o=Array.prototype;null==o[r]&&e(341)(o,r,{}),t.exports=function(t){o[r][t]=!0}},228:function(t,n,e){var r=e(305);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},464:function(t,n,e){var r=e(221),o=e(485),i=e(157);t.exports=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),l=i(c,s);if(t&&e!=e){for(;s>l;)if((u=a[l++])!=u)return!0}else for(;s>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}}},89:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},94:function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},52:function(t,n,e){var r=e(387);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},344:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},763:function(t,n,e){t.exports=!e(448)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},34:function(t,n,e){var r=e(305),o=e(526).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},140:function(t){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},127:function(t,n,e){var r=e(526),o=e(94),i=e(341),c=e(859),u=e(52),a="prototype",s=function(t,n,e){var l,f,p,d,y=t&s.F,v=t&s.G,h=t&s.S,m=t&s.P,g=t&s.B,x=v?r:h?r[n]||(r[n]={}):(r[n]||{})[a],b=v?o:o[n]||(o[n]={}),S=b[a]||(b[a]={});for(l in v&&(e=n),e)p=((f=!y&&x&&void 0!==x[l])?x:e)[l],d=g&&f?u(p,r):m&&"function"==typeof p?u(Function.call,p):p,x&&c(x,l,p,t&s.U),b[l]!=p&&i(b,l,d),m&&S[l]!=p&&(S[l]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},448:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},461:function(t,n,e){t.exports=e(556)("native-function-to-string",Function.toString)},526:function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},917:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},341:function(t,n,e){var r=e(967),o=e(996);t.exports=e(763)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},308:function(t,n,e){var r=e(526).document;t.exports=r&&r.documentElement},956:function(t,n,e){t.exports=!e(763)&&!e(448)((function(){return 7!=Object.defineProperty(e(34)("div"),"a",{get:function(){return 7}}).a}))},249:function(t,n,e){var r=e(89);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},305:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},32:function(t,n,e){"use strict";var r=e(719),o=e(996),i=e(844),c={};e(341)(c,e(574)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},175:function(t,n,e){"use strict";var r=e(750),o=e(127),i=e(859),c=e(341),u=e(906),a=e(32),s=e(844),l=e(627),f=e(574)("iterator"),p=!([].keys&&"next"in[].keys()),d="keys",y="values",v=function(){return this};t.exports=function(t,n,e,h,m,g,x){a(e,n,h);var b,S,_,L=function(t){if(!p&&t in A)return A[t];switch(t){case d:case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",w=m==y,O=!1,A=t.prototype,k=A[f]||A["@@iterator"]||m&&A[m],j=k||L(m),M=m?w?L("entries"):j:void 0,P="Array"==n&&A.entries||k;if(P&&(_=l(P.call(new t)))!==Object.prototype&&_.next&&(s(_,E,!0),r||"function"==typeof _[f]||c(_,f,v)),w&&k&&k.name!==y&&(O=!0,j=function(){return k.call(this)}),r&&!x||!p&&!O&&A[f]||c(A,f,j),u[n]=j,u[E]=v,m)if(b={values:w?j:L(y),keys:g?j:L(d),entries:M},x)for(S in b)S in A||i(A,S,b[S]);else o(o.P+o.F*(p||O),n,b);return b}},970:function(t){t.exports=function(t,n){return{value:n,done:!!t}}},906:function(t){t.exports={}},750:function(t){t.exports=!1},719:function(t,n,e){var r=e(228),o=e(626),i=e(140),c=e(766)("IE_PROTO"),u=function(){},a="prototype",s=function(){var t,n=e(34)("iframe"),r=i.length;for(n.style.display="none",e(308).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[a][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u[a]=r(t),e=new u,u[a]=null,e[c]=t):e=s(),void 0===n?e:o(e,n)}},967:function(t,n,e){var r=e(228),o=e(956),i=e(48),c=Object.defineProperty;n.f=e(763)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},626:function(t,n,e){var r=e(967),o=e(228),i=e(311);t.exports=e(763)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},627:function(t,n,e){var r=e(917),o=e(270),i=e(766)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},561:function(t,n,e){var r=e(917),o=e(221),i=e(464)(!1),c=e(766)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},311:function(t,n,e){var r=e(561),o=e(140);t.exports=Object.keys||function(t){return r(t,o)}},996:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},859:function(t,n,e){var r=e(526),o=e(341),i=e(917),c=e(415)("src"),u=e(461),a="toString",s=(""+u).split(a);e(94).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,c)||o(e,c,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,a,(function(){return"function"==typeof this&&this[c]||u.call(this)}))},844:function(t,n,e){var r=e(967).f,o=e(917),i=e(574)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},766:function(t,n,e){var r=e(556)("keys"),o=e(415);t.exports=function(t){return r[t]||(r[t]=o(t))}},556:function(t,n,e){var r=e(94),o=e(526),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(750)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},157:function(t,n,e){var r=e(87),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},87:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},221:function(t,n,e){var r=e(249),o=e(344);t.exports=function(t){return r(o(t))}},485:function(t,n,e){var r=e(87),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},270:function(t,n,e){var r=e(344);t.exports=function(t){return Object(r(t))}},48:function(t,n,e){var r=e(305);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},415:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+e).toString(36))}},574:function(t,n,e){var r=e(556)("wks"),o=e(415),i=e(526).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},165:function(t,n,e){"use strict";var r=e(184),o=e(970),i=e(906),c=e(221);t.exports=e(175)(Array,"Array",(function(t,n){this._t=c(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},890:function(t,n,e){for(var r=e(165),o=e(311),i=e(859),c=e(526),u=e(341),a=e(906),s=e(574),l=s("iterator"),f=s("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=o(d),v=0;v<y.length;v++){var h,m=y[v],g=d[m],x=c[m],b=x&&x.prototype;if(b&&(b[l]||u(b,l,p),b[f]||u(b,f,m),a[m]=p,g))for(h in r)b[h]||i(b,h,r[h],!0)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";function t(t){document.querySelectorAll("[data-translate]").forEach((t=>{t.getAttribute("data-original")||t.setAttribute("data-original",t.textContent)})),console.log(document.documentElement.lang),t!==document.documentElement.lang?(console.log(t),fetch(`translations/${t}.json`).then((t=>t.json())).then((t=>{document.querySelectorAll("[data-translate]").forEach((n=>{const e=n.getAttribute("data-translate");t[e]&&(n.textContent=t[e])}))})).catch((t=>console.error("Error loading the translation",t)))):document.querySelectorAll("[data-translate]").forEach((t=>{const n=t.getAttribute("data-original");n&&(t.textContent=n)}))}function n(){if(window.matchMedia("(max-width: 1025px)").matches){const t=document.querySelector(".navigation__box"),n=document.querySelector(".footer"),e=document.querySelector(".navigation__icon-xmark"),r=document.querySelectorAll(".navigation__icon"),o=document.querySelector(".header__banner"),i=[t,n],c=[{transform:"translateY(-100%) scale(0.98)",opacity:0,offset:0},{transform:"translateY(-2%) scale(0.98)",offset:.5},{transform:"translateY(0) scale(1)",opacity:1,offset:1}],u=[{transform:"translateY(0) scale(1)",opacity:1},{transform:"translateY(-2%) scale(0.98)",offset:.5},{transform:"translateY(-100%) scale(0.98)",opacity:0}],a={duration:800,fill:"forwards"};function s(t,n,e,r){const o=t.map((t=>t.animate(n,e).finished));Promise.all(o).then(r)}r.forEach((t=>t.classList.toggle("visible"))),e.classList.contains("visible")?(t.style.display="block",n.style.display="block",o.classList.add("header__banner-border"),s(i,c,a,(()=>{}))):s(i,u,a,(()=>{t.style.display="none",n.style.display="none",o.classList.remove("header__banner-border")}))}}function r(t){t.preventDefault();const n=this.getAttribute("data-section");if(n){const t=`#${n}`,e=document.querySelector(t);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}}e(890),document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.querySelectorAll(".navigation__item a"),n=document.querySelectorAll(".section"),e=document.querySelectorAll(".section__title"),r=(t,n,e)=>{t.forEach((t=>{t.classList.toggle(n,e(t))}))};n.forEach((n=>{const e={root:null,rootMargin:"-13px 0px 0px",threshold:[...Array(21).keys()].map((t=>t/20))};new IntersectionObserver(((n,e)=>{n.forEach((n=>{const e=n.isIntersecting,o=n.target.getAttribute("id"),i=window.innerHeight/5,c=window.matchMedia("(min-width: 1025px)");n.boundingClientRect.top<=i&&n.boundingClientRect.bottom>=i&&e&&(r(t,"underline",(t=>t.getAttribute("data-section")===o)),c.matches&&document.querySelectorAll(".navigation__item").forEach((t=>{const n=null!==t.querySelector("a.underline"),e=[{backgroundColor:n?"#1f0034":"#000",borderLeft:n?"5px solid #dbb030":"none"}];t.animate(e,{duration:300,fill:"forwards"})})))}))}),e).observe(n)}));const o=new IntersectionObserver((t=>{t.forEach((t=>{r(e,"color",(n=>t.isIntersecting&&n.className.includes(t.target.className)))}))}),{root:null,rootMargin:"0px 0px -85% 0px",threshold:.2});e.forEach((t=>o.observe(t)))})(),document.getElementById("buttonEn").addEventListener("click",(function(){t("en")})),document.getElementById("buttonPl").addEventListener("click",(function(){t("pl")})),document.querySelectorAll(".navigation__item a").forEach((t=>{t.addEventListener("click",r),t.addEventListener("click",n)})),document.querySelectorAll(".navigation__icon").forEach((t=>{t.addEventListener("click",n)})),document.querySelectorAll(".section-start__logo__element").forEach((t=>{t.addEventListener("click",(function(){document.querySelectorAll(".section-start__logo__element").forEach((t=>{t.classList.toggle("visible")}))}))}))}))}()}();