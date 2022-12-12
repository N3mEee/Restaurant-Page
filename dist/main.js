(()=>{"use strict";var e={810:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".info-about {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}",""]);const c=a},309:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'.info-home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.info-content {\r\n    margin-left: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.info-home p:first-child {\r\n    font-family: "ClintonExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    font-weight: 900;\r\n    font-size: 3rem;\r\n    color: #242e30;\r\n    margin: 0;\r\n    align-self: flex-start;\r\n    z-index: 1;\r\n}\r\n\r\n.info-home p:last-of-type {\r\n    font-family: "ClintonBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n    font-size: 2rem;\r\n    color: #242e30;\r\n    align-self: flex-start;\r\n    margin: 10px 0 40px 0;\r\n    z-index: 1;\r\n}\r\n\r\n.info-home form {\r\n    width: 120%;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.info-home form input {\r\n    width: 100%;\r\n    height: 3rem;\r\n    border: 1px solid gray;\r\n    outline: none;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.info-home form button {\r\n    background-color: #ff8000;\r\n    position: absolute;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 25px;\r\n    font-size: 1.2rem;\r\n    font-weight: bolder;\r\n    padding: 10px 20px;\r\n    right: 0.5%;\r\n    top: 7%;\r\n}\r\n\r\n.info-home form button:hover {\r\n    background-color: #f06c00;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 1500px) {\r\n    .info-content {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .info-home {\r\n        align-items: center;\r\n    }\r\n\r\n    .info-home form {\r\n        width: 100%;\r\n    }\r\n}',""]);const c=a},195:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".info-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}",""]);const c=a},890:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(401),t.b),l=new URL(t(219),t.b),p=new URL(t(270),t.b),u=a()(o()),f=s()(d),m=s()(l),h=s()(p);u.push([e.id,'@font-face {\r\n    font-family: "Clinton semibold";\r\n    src: url('+f+') format("truetype");\r\n}\r\n@font-face {\r\n    font-family: "ClintonBold";\r\n    src: url('+m+') format("truetype");\r\n}\r\n@font-face {\r\n    font-family: "ClintonExtraBold";\r\n    src: url('+h+') format("truetype");\r\n}\r\nbody {\r\n    font-family: "Clinton semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    max-height: 100vh;\r\n}\r\n\r\n.header {\r\n    height: 75px;\r\n    padding: 0 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background-color: white;\r\n    box-shadow: 0 0 10px gray;\r\n    position: relative;\r\n    z-index: 99999;\r\n}\r\n\r\n.logo {\r\n    cursor: pointer;\r\n    color: #ff8000;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    font-family: "ClintonExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.nav ul {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.nav li {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    font-family: "Clinton semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    color: #242e30;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    padding: 15px;\r\n}\r\n\r\n.nav li:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    height: calc(100vh - 75px);\r\n}\r\n\r\n.info {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.info::after {\r\n    position: absolute;\r\n    content: "";\r\n    height: 100%;\r\n    width: 10em;\r\n    right: 0;\r\n    background-color: #f0f0f0;\r\n    transform-origin: bottom right;\r\n    transform: skewX(-10deg);\r\n}\r\n\r\n.right-img {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #ff8000;\r\n    align-items: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: fit-content;\r\n}\r\n\r\n@media only screen and (max-width: 1101px) {\r\n    #content {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        height: calc(100vh - 75px);\r\n    }\r\n\r\n    .info::after {\r\n        display: none;\r\n    }\r\n}\r\n@media only screen and (max-width: 605px) {\r\n    .nav {\r\n        /* add burger menu for nav */\r\n        display: none;\r\n    }\r\n}\r\n',""]);const g=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},655:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},401:(e,n,t)=>{e.exports=t.p+"c79c594333d192c7793a.ttf"},219:(e,n,t)=>{e.exports=t.p+"b1e929c646dc2a695c4e.ttf"},270:(e,n,t)=>{e.exports=t.p+"12617f9219c002c65fa0.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"8354eb4c8e6b1e25f2c7.png";var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),c=t.n(a),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(655),f=t.n(u),m=t(309),h={};function g(){const n=document.querySelector("#content"),t=document.createElement("div");t.classList.add("info","info-home");const r=document.createElement("div");r.classList.add("info-content");const o=document.createElement("p");o.innerText="Time to order food",r.appendChild(o);const i=document.createElement("p");i.innerText="Find our restaurant in your area",r.appendChild(i);const a=document.createElement("form");r.appendChild(a);const c=document.createElement("input");c.setAttribute("type","search"),c.setAttribute("name","address"),c.setAttribute("id","address"),c.setAttribute("placeholder","Address, i.e. Kirchstraße 1"),a.appendChild(c);const s=document.createElement("button");s.setAttribute("type","submit"),s.innerText="Search",a.appendChild(s);const d=document.createElement("div");d.classList.add("right-img");const l=new Image;l.src=e,d.appendChild(l),t.appendChild(r),n.appendChild(t),n.appendChild(d)}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"7b18a329ca29c4e83d58.png";var b=t(195),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const x=t.p+"866245af589cb988561a.png";var C=t(810),E={};E.styleTagTransform=f(),E.setAttributes=d(),E.insert=c().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=p(),r()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;const w=t.p+"b60ce079dc6791e49f21.svg",T=t.p+"fb36b004ac2a1a37f65a.svg",A=t.p+"2fdd450f45b598281f3d.svg";var L=t(890),S={};S.styleTagTransform=f(),S.setAttributes=d(),S.insert=c().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=p(),r()(L.Z,S),L.Z&&L.Z.locals&&L.Z.locals;const Z=document.querySelector("body"),I=document.querySelector("#content"),H=document.createElement("div");H.classList.add("header"),Z.insertBefore(H,I);const k=document.createElement("div");k.classList.add("logo"),k.innerText="Restaurant Page",k.addEventListener("click",(e=>{$(),g()})),H.appendChild(k);const j=document.createElement("div");j.classList.add("nav"),H.appendChild(j);const M=document.createElement("ul");j.appendChild(M);const N=document.createElement("li"),z=document.createElement("div"),P=new Image;z.innerText="Home",P.src=w,N.appendChild(P),N.appendChild(z),N.addEventListener("click",(e=>{$(),g()})),M.appendChild(N);const B=document.createElement("li"),U=document.createElement("div"),R=new Image;U.innerText="Menu",R.src=A,B.appendChild(R),B.appendChild(U),B.addEventListener("click",(e=>{$(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("info","info-menu");const t=document.createElement("h1");t.innerText="Time to order food",n.appendChild(t);const r=document.createElement("h2");r.innerText="Find our restaurant in your area",n.appendChild(r);const o=document.createElement("form");n.appendChild(o);const i=document.createElement("label");i.innerText="Your MENU Address",i.setAttribute("for","address"),o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","address"),a.setAttribute("id","address"),o.appendChild(a);const c=document.createElement("div");c.classList.add("right-img");const s=new Image;s.src=v,c.appendChild(s),e.appendChild(n),e.appendChild(c)}()})),M.appendChild(B);const q=document.createElement("li"),F=document.createElement("div"),O=new Image;F.innerText="About",O.src=T,q.appendChild(O),q.appendChild(F),q.addEventListener("click",(e=>{$(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("info","info-about");const t=document.createElement("h1");t.innerText="Time to order food",n.appendChild(t);const r=document.createElement("h2");r.innerText="Find our restaurant in your area",n.appendChild(r);const o=document.createElement("form");n.appendChild(o);const i=document.createElement("label");i.innerText="Your ABOUT Address",i.setAttribute("for","address"),o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","address"),a.setAttribute("id","address"),o.appendChild(a);const c=document.createElement("div");c.classList.add("right-img");const s=new Image;s.src=x,c.appendChild(s),e.appendChild(n),e.appendChild(c)}()})),M.appendChild(q);const $=()=>{I.innerHTML=""};g()})()})();