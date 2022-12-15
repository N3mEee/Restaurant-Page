(()=>{"use strict";var e={810:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'.about-page {\r\n    min-height: calc(100vh - 75px);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: "ClintonExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    color: #242e30;\r\n}\r\n\r\n.about-page .container {\r\n    width: 55%;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.about-page .container p {\r\n    font-family: "ClintonBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n}',""]);const s=i},309:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'.home-page {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    height: calc(100vh - 75px);\r\n}\r\n\r\n.home-page .info {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    background-color: #f0f0f0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.home-page .info::after {\r\n    position: absolute;\r\n    content: "";\r\n    height: 100%;\r\n    width: 10em;\r\n    right: 0;\r\n    background-color: #f0f0f0;\r\n    transform-origin: bottom right;\r\n    transform: skewX(-10deg);\r\n}\r\n\r\n.home-page .info-content {\r\n    margin-left: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.home-page .info p:first-child {\r\n    font-family: "ClintonExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    font-weight: 900;\r\n    font-size: 3rem;\r\n    color: #242e30;\r\n    margin: 0;\r\n    align-self: flex-start;\r\n    z-index: 1;\r\n}\r\n\r\n.home-page .info p:last-of-type {\r\n    font-family: "ClintonBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n    font-size: 2rem;\r\n    color: #242e30;\r\n    align-self: flex-start;\r\n    margin: 10px 0 40px 0;\r\n    z-index: 1;\r\n}\r\n\r\n.home-page .info form {\r\n    width: 120%;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.home-page .info form input {\r\n    width: 100%;\r\n    height: 3rem;\r\n    border: 1px solid gray;\r\n    outline: none;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.home-page .info form button {\r\n    background-color: #ff8000;\r\n    position: absolute;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 25px;\r\n    font-size: 1.2rem;\r\n    font-weight: bolder;\r\n    padding: 10px 20px;\r\n    right: 0.5%;\r\n    top: 7%;\r\n}\r\n\r\n.home-page .info form button:hover {\r\n    background-color: #f06c00;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-page .right-img {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #ff8000;\r\n    align-items: center;\r\n}\r\n\r\n.home-page .right-img img {\r\n    width: 80%;\r\n    height: fit-content;\r\n}\r\n\r\n@media only screen and (max-width: 1500px) {\r\n    .home-page .info-content {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .home-page .info {\r\n        align-items: center;\r\n    }\r\n\r\n    .home-page .info form {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1101px) {\r\n    .home-page {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        height: calc(100vh - 75px);\r\n    }\r\n\r\n    .info::after {\r\n        display: none;\r\n    }\r\n}\r\n',""]);const s=i},195:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"",""]);const s=i},890:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(401),t.b),d=new URL(t(219),t.b),p=new URL(t(270),t.b),u=i()(o()),m=c()(l),f=c()(d),h=c()(p);u.push([e.id,'@font-face {\r\n    font-family: "Clinton semibold";\r\n    src: url('+m+') format("truetype");\r\n}\r\n@font-face {\r\n    font-family: "ClintonBold";\r\n    src: url('+f+') format("truetype");\r\n}\r\n@font-face {\r\n    font-family: "ClintonExtraBold";\r\n    src: url('+h+') format("truetype");\r\n}\r\n\r\nbody {\r\n    font-family: "Clinton semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    max-height: 100vh;\r\n}\r\n\r\n.header {\r\n    height: 75px;\r\n    padding: 0 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background-color: white;\r\n    box-shadow: 0 0 10px gray;\r\n    position: relative;\r\n    z-index: 99999;\r\n}\r\n\r\n.logo {\r\n    cursor: pointer;\r\n    color: #ff8000;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    font-family: "ClintonExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.nav ul {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.nav li {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    font-family: "Clinton semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    color: #242e30;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    padding: 15px;\r\n}\r\n\r\n.nav li:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n@media only screen and (max-width: 605px) {\r\n    .nav {\r\n        /* add burger menu for nav */\r\n        display: none;\r\n    }\r\n}\r\n',""]);const g=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},655:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},401:(e,n,t)=>{e.exports=t.p+"c79c594333d192c7793a.ttf"},219:(e,n,t)=>{e.exports=t.p+"b1e929c646dc2a695c4e.ttf"},270:(e,n,t)=>{e.exports=t.p+"12617f9219c002c65fa0.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"8354eb4c8e6b1e25f2c7.png";var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),l=t.n(c),d=t(216),p=t.n(d),u=t(655),m=t.n(u),f=t(309),h={};function g(){const n=document.querySelector("#content");n.classList="home-page";const t=document.createElement("div");t.classList.add("info");const r=document.createElement("div");r.classList.add("info-content");const o=document.createElement("p");o.innerText="Time to order food",r.appendChild(o);const a=document.createElement("p");a.innerText="Find our restaurant in your area",r.appendChild(a);const i=document.createElement("form");r.appendChild(i);const s=document.createElement("input");s.setAttribute("type","search"),s.setAttribute("name","address"),s.setAttribute("id","address"),s.setAttribute("placeholder","Address, i.e. Kirchstraße 1"),i.appendChild(s);const c=document.createElement("button");c.setAttribute("type","submit"),c.innerText="Search",i.appendChild(c);const l=document.createElement("div");l.classList.add("right-img");const d=new Image;d.src=e,l.appendChild(d),t.appendChild(r),n.appendChild(t),n.appendChild(l)}h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var v=t(195),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var b=t(810),x={};x.styleTagTransform=m(),x.setAttributes=l(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;const w=t.p+"b60ce079dc6791e49f21.svg",C=t.p+"fb36b004ac2a1a37f65a.svg",E=t.p+"2fdd450f45b598281f3d.svg";var T=t(890),A={};A.styleTagTransform=m(),A.setAttributes=l(),A.insert=s().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=p(),r()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals;const I=document.querySelector("body"),L=document.querySelector("#content"),S=document.createElement("div");S.classList.add("header"),I.insertBefore(S,L);const k=document.createElement("div");k.classList.add("logo"),k.innerText="Restaurant Page",k.addEventListener("click",(e=>{q(),g()})),S.appendChild(k);const Z=document.createElement("div");Z.classList.add("nav"),S.appendChild(Z);const H=document.createElement("ul");Z.appendChild(H);const N=document.createElement("li"),z=document.createElement("div"),j=new Image;z.innerText="Home",j.src=w,N.appendChild(j),N.appendChild(z),N.addEventListener("click",(e=>{q(),g()})),H.appendChild(N);const M=document.createElement("li"),O=document.createElement("div"),P=new Image;O.innerText="Menu",P.src=E,M.appendChild(P),M.appendChild(O),M.addEventListener("click",(e=>{q(),document.querySelector("#content").classList="menu-page"})),H.appendChild(M);const B=document.createElement("li"),R=document.createElement("div"),U=new Image;R.innerText="About",U.src=C,B.appendChild(U),B.appendChild(R),B.addEventListener("click",(e=>{q(),function(){const e=document.querySelector("#content");e.classList="about-page";const n=document.createElement("div");n.classList="container",e.appendChild(n);const t=document.createElement("h1");t.textContent="Restaurant Page: About Us",n.appendChild(t);const r=document.createElement("p");r.textContent="Since our modest beginnings in 2005 with a little space in ‘City Name’’s stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.",n.appendChild(r);const o=document.createElement("p");o.textContent="In contrast to other Indian eateries, ‘Organization Name’ was made with the explicit expectation to appear as something else.",n.appendChild(o);const a=document.createElement("p");a.textContent="We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.",n.appendChild(a);const i=document.createElement("p");i.textContent="Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the stuffing ghee, spread, oil, and overwhelming cream.",n.appendChild(i);const s=document.createElement("p");s.textContent="‘Organization Name’ has developed to incorporate four superb takeout areas in ‘City Name’ with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at some other Indian eatery you visit.",n.appendChild(s);const c=document.createElement("p");c.textContent="We perceive that a few people are as yet searching for the run-of-the-mill Indian nourishment, and that is fine with us. Our disclaimer is that on the off chance that you’re anticipating overwhelming, slick, undesirable Indian nourishment, ‘Organization Name’ isn’t the place for you.",n.appendChild(c);const l=document.createElement("em");l.textContent="This template is from : https://thewordyboy.com/restaurant-about-us/",n.appendChild(l)}()})),H.appendChild(B);const q=()=>{L.innerHTML=""};g()})()})();