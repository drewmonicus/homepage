"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[792],{208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-family: "Poppins", sans-serif;\n  list-style: none;\n  text-decoration: none;\n  color: white;\n}\n\n:root {\n  --background: rgb(24, 24, 24);\n  --second-background: rgb(21, 21, 21);\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--background);\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 15%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: white;\n  background-color: rgba(15, 15, 15, 0.8);\n  backdrop-filter: blur(10px);\n  z-index: 1000;\n}\n\nnav ul a {\n  opacity: 0.8;\n  font-size: 1.1em;\n}\n\nnav ul {\n  display: flex;\n  gap: 1.5em;\n}\n\n.logo {\n  font-size: 2em;\n  font-weight: 800;\n  opacity: 0.8;\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.2;\n}\n\n.logo:hover {\n  opacity: 1;\n}\n\n.btn {\n  padding: 0.5em 1em;\n  border-radius: 0.5em;\n  font-weight: 500;\n  letter-spacing: 1px;\n  border: 2px solid white;\n  cursor: pointer;\n  font-size: 1.1em;\n  transition: 0.3s ease-in-out;\n}\n\n.btn:hover {\n  background-color: white;\n  color: var(--background);\n}\n\n.gradient {\n  background: linear-gradient(to right, #f4b029, #fedb71);\n  background-clip: text;\n  color: transparent;\n}\n\n.gradient-2 {\n  background: rgb(255, 86, 86);\n  background-clip: text;\n  color: transparent;\n}\n\nsection {\n  min-height: 100vh;\n  padding: 5% 15%;\n}\n\nimg {\n  width: 300px;\n}\n\n.used-tech {\n  display: flex;\n  flex-direction: row;\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2em;\n}\n\n#home img {\n  width: 280px;\n  border-radius: 50%;\n}\n\n.info-box {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  max-width: 600px;\n}\n.info-box h1 {\n  font-size: 4em;\n}\n\n.info-box h3 {\n  font-size: 1.5em;\n}\n.info-box h5 {\n  color: rgb(170, 170, 170);\n}\n.hidden {\n  opacity: 0;\n  transform: translateX(-80%);\n  filter: blur(5px);\n  transition: all 1s;\n}\n\n.show {\n  transform: translateX(0);\n  filter: blur(0);\n  opacity: 1;\n}\n\n@media (prefers-reduced-motion) {\n  .hidden {\n    transition: none;\n  }\n}\n\n#about svg,\n#about img {\n  height: 20vh;\n  width: 20vh;\n  z-index: 100;\n}\n\n#about {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.5em;\n  padding-top: 25vh;\n}\n\n#about h1 span {\n  font-size: 2em;\n}\n.icon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n}\n\n.icon-container h4 {\n  color: grey;\n}\n\n.to-learn-tech {\n  display: flex;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10vh 5vw;\n  gap: 2em;\n}\n#projects h1 span {\n  font-size: 2em;\n}\n.project-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2.5em;\n  max-width: 1200px;\n}\n\n.link:hover {\n  transform: translateY(-15%);\n}\n\n.project {\n  padding: 1em;\n  border-radius: 8px;\n  flex-basis: calc(33.333% - 2.5em); /* Responsive columns */\n  box-sizing: border-box;\n  text-align: center;\n  border: 2px solid rgb(127, 124, 124);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.project img {\n  width: 100%;\n  height: 25vh;\n  object-fit: cover;\n  max-height: 200px; /* Limit the height for consistency */\n  border-radius: 8px;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-header img {\n  height: 2em;\n  width: 2em;\n  background-color: grey;\n  transition: ease 0.2s;\n}\n\n.project-header img:hover {\n  background-color: white;\n}\n\n#contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25vh;\n  gap: 1em;\n  letter-spacing: 2px;\n}\n\n.contact-box {\n  border: 2px solid rgb(75, 75, 66);\n  border-radius: 10px;\n  padding: 2em;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.location {\n  display: flex;\n  gap: 1em;\n}\n\n.email {\n  display: flex;\n  gap: 1em;\n}\n.profile-links {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 3vh;\n}\n\n.profile-links img {\n  height: 5vh;\n  width: 5vh;\n}\n\n@media (max-width: 768px) {\n}\n\n@media (max-width: 480px) {\n  nav ul {\n    display: none;\n  }\n\n  #about img,\n  #about svg {\n    height: 15vh;\n    width: 15vw;\n  }\n\n  .icon-container h4 {\n    font-size: 0.2em;\n  }\n\n  .used-tech {\n    gap: 15px;\n  }\n\n  .project h4 {\n    display: none;\n  }\n  .project {\n    min-width: 40vw;\n  }\n\n  #projects h1 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .logo span {\n    text-align: center;\n  }\n\n  #home {\n    padding-top: 20vh;\n  }\n}\n',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},616:(n,e,t)=>{var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),h=t.n(f),m=t(208),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(m.A,g),m.A&&m.A.locals&&m.A.locals,t.p;const x=new IntersectionObserver((n=>{n.forEach((n=>{console.log(n),n.isIntersecting?n.target.classList.add("show"):n.target.classList.remove("show")}))}),{threshold:.1});document.querySelectorAll(".hidden").forEach((n=>x.observe(n)))}},n=>{n(n.s=616)}]);