!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(t){return e[t]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(){const e=[{status:!0,logo:"php.png",logoName:"php",question:"Це мова програмування?",description:"<b>PHP: Hypertext Preprocessor (or simply PHP)</b> — скріптова мова загального використання, найчастіше використовується для розробки web-додатків.",dateOfBirth:"1995 (24 years ago)",developer:"The PHP Development Team, Zend Technologies"},{status:!1,logo:"nodejs.png",logoName:"nodejs",question:"Це мова програмування?",description:"Node або Node.js — програмна платформа, побудована на основі двіжка V8 (трасліє JavaScript в машиний код)",dateOfBirth:"2009 (10 years ago)",developer:"Ryan Dahl. Проект розповсюджується як Open-source (відкрити програмне забезпечення). Кожен бажаючий може внести зміни"},{status:!1,logo:"angularjs.png",logoName:"angularjs",question:"Це сучасний frontend framework який активно розвиває компанія Google?",description:"Angularjs frontend framework розроблений компанією Google. Вважається застарілою технологією. Довготривала підтимка закінчиться в 2021 році",dateOfBirth:"2010 (9 years ago)",developer:"Google"},{status:!1,logo:"jenkins.png",logoName:"jenkins",question:"Це програмна система для автоматизації тестування?",description:"",dateOfBirth:"",developer:""},{status:!0,logo:"ruby.png",logoName:"ruby",question:"Це мова програмування?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"typescript.png",logoName:"typescript",question:"Це набір додаткових типів данних до javascript?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"kotlin.png",logoName:"kotlin",question:"Це мова програмування для розробки додатків під iOS та Android?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"mongo-db.jpg",logoName:"mongo-db",question:"Це сучасна реляційна база данних для побудови односторіночних web додатків?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"react-native.png",logoName:"react-native",question:"Це framework для побудови гібридних додатків під iOS та Android?",description:"",dateOfBirth:"",developer:""},{status:!0,logo:"hibernate.png",logoName:"hibernate",question:"Це framework для побудови взаімодії між об'єктно-орієнтованою моделлю даних і традиційною реляційною базою даних?",description:"",dateOfBirth:"",developer:""},{status:!0,logo:"ionic.jpeg",logoName:"ionic",question:"Це framework для побудови гібридних мобільних додатків?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"react.png",logoName:"react",question:"Це framework для побудови web додатків?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"pwa.jpg",logoName:"pwa",question:"Це альтернативний формат данних html розроблений компанією Google?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"git.png",logoName:"git",question:"Це централізована система контролю версій?",description:"",dateOfBirth:"",developer:""},{status:!1,logo:"github.png",logoName:"github",question:"Це мова програмування?",description:"",dateOfBirth:"",developer:""}];document.addEventListener("DOMContentLoaded",()=>{(function(){const t=document.getElementById("stackedcards-container");(function(e){for(let t=e.length-1;0<t;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(e).forEach(e=>{const n=document.createElement("div");n.innerHTML=(e=>`\n        <div class="card flip-card js-card js-active" data-status="${e.status}" data-checked="false">\n          <div class="flip-card-inner">\n            <div class="flip-card-front card-body">\n              <div class="card-content">\n                <div class="card-image">\n                  <img src="./images/questions/${e.logo}" alt="${e.logoName}">\n                </div>\n              </div>\n              <div class="card-footer">\n                <div class="popular-destinations-text">${e.question}</div>\n              </div>\n            </div>\n  \n            <div class="flip-card-back card-answer">\n              <h1 class="wrong-answer-title">Упсс, невірно!</h1>\n              <p class="wrong-answer-description">\n                ${e.description}\n              </p>\n              <p class="date-of-birth">\n                <span class="label orange">День народження:</span> ${e.dateOfBirth} 🎉\n              </p>\n              <p class="developer">\n                <span class="label green">Розробник:</span> ${e.developer}\n              </p>\n            </div>\n          </div>\n        </div>\n      `)(e),n.classList.add("riba"),t.appendChild(n)})})(),function(){function e(){d(),f(0,0,1,L),f(0,0,0,y),p(5),!(T>=v)&&T+1<v&&(h[T+1].style.opacity=".8")}function t(){L=h[T]}function n(){document.body.classList.add("background-"+T)}function o(){if(T==v){const e=document.getElementById("score").innerText;document.getElementById("final-score").innerText=e,h[v-1].addEventListener("transitionend",(function(){document.body.classList.add("background-16"),document.querySelector(".stage").classList.add("hidden"),document.querySelector(".final-state").classList.remove("hidden"),document.querySelector(".final-state").classList.add("active"),h[v-1].removeEventListener("transitionend",null,!1)}))}}function s(e,t,n=!0){const o=document.querySelector(".js-active"),{status:s,checked:a}=o.dataset;if(("left"===e?"false"===a&&"true"===s:"false"===a&&"false"===s)&&n){o.querySelector(".flip-card-inner").classList.add("active"),o.dataset.checked="true"}else{const n=document.querySelectorAll(".js-card"),r=Array.from(n).findIndex(e=>e.classList.contains("js-active")),i=n[r+1];"false"===a&&("false"===s&&"left"===e||"true"===s&&"right"===e)&&(function(){const e=document.getElementById("progress-line"),t=document.getElementById("score"),n=e.style.width||0,o=document.querySelectorAll(".js-card").length;e.style.width=parseFloat(n)+parseFloat((100/o).toFixed(2))+"%",t.innerText=parseInt(t.innerText,10)+1}(),function(e){document.querySelectorAll(".progress-item")[e].classList.add("success")}(r)),i&&(o.classList.remove("js-active"),i.classList.add("js-active")),t()}}function a(){d(),f(-1e3,0,0,L),c(),++T,m(),t(),n(),o(),u()}function r(){d(),f(1e3,0,0,L),f(1e3,0,0,y),l(),++T,m(),t(),n(),o(),u()}function i(){d(),f(0,-1e3,0,L),f(0,-1e3,0,y),!(T>=v)&&(setTimeout((function(){j=O*(B-1),S||y.classList.add("no-transition"),requestAnimationFrame((function(){y.style.transform="translateX(0) translateY("+j+"px) translateZ(0)",y.style.opacity="0"}))}),300),S=!1),++T,m(),t(),n(),o(),u()}function d(){h[T]&&(y.classList.remove("no-transition"),h[T].classList.remove("no-transition"),h[T].style.zIndex=6)}function c(){!(T>=v)&&(setTimeout((function(){j=O*(B-1),requestAnimationFrame((function(){}))}),300),S=!1)}function l(){!(T>=v)&&(setTimeout((function(){j=O*(B-1),S||y.classList.add("no-transition"),requestAnimationFrame((function(){y.style.transform="translateX(0) translateY("+j+"px) translateZ(0)",y.style.opacity="0"}))}),300),S=!1)}function u(){T>=v||(h[T-1].classList.remove("stackedcards-active"),h[T-1].classList.add("stackedcards-hidden"),h[T].classList.add("stackedcards-active"))}function p(e){h[T]&&(h[T].style.zIndex=e)}function f(e,t,n,o){requestAnimationFrame((function(){var s=o,a=function(e){return 15<e/10?15:-15>e/10?-15:e/10}(e);j=O*(B-1),s&&(s.style.transform="translateX("+e+"px) translateY("+(t+j)+"px) translateZ(0) rotate("+a+"deg)",s.style.opacity=n)}))}function m(){requestAnimationFrame((function(){j=0;var e=5,t=1,n=1,o=B,s=O;for(let a=T;a<T+B;a++)h[a]&&(h[a].classList.add("stackedcards-top","stackedcards--animatable","stackedcards-origin-top"),y.classList.add("stackedcards-origin-top"),j=s*o,o--,h[a].style.transform="scale("+t+") translateX(0) translateY("+(j-s)+"px) translateZ(0)",h[a].style.opacity=n,h[a].style.zIndex=e,t-=.04,n-=1/B,e--)}))}function g(){1<(M+q/2)/100*-1&&1,1<(Z=P/100)&&(Z=1),1<P/100*-1&&1}var v,y,h,b,L,k,q,x,j,B=3,O=10,T=0,E=.3,S=!0;k=(x=document.getElementById("stacked-cards-block")).querySelector(".stackedcards-container"),h=k.children,y=x.querySelector(".stackedcards-overlay.right"),v=h.length,B>v&&(B=v),t(),n(),b=k.offsetWidth,L=h[0],m();let w=O*(B-1)+"px";for(let e=B;e<v;e++)h[e].classList.add("stackedcards-top","stackedcards--animatable","stackedcards-origin-top");j=O*(B-1),k.style.marginBottom=w;for(let e=B;e<v;e++)h[e].style.zIndex=0,h[e].style.opacity=0,h[e].style.transform="scale("+(1-.04*B)+") translateX(0) translateY("+j+"px) translateZ(0)";h[T]&&h[T].classList.add("stackedcards-active"),y.style.transform="translateX(0px) translateY("+j+"px) translateZ(0px) rotate(0deg)",setTimeout(()=>{x.classList.remove("init")},150);var I,N,A,P,M,F,X,Y,Z,$=x,z=!1;$.addEventListener("touchstart",(function(e){I=(new Date).getTime(),N=e.changedTouches[0].clientX,A=e.changedTouches[0].clientY,F=N,X=A,g(),z=!0,!(T>=v)&&h[T]&&(h[T].classList.add("no-transition"),p(6),y.classList.add("no-transition"),T+1<v&&(h[T+1].style.opacity="1"),q=h[T].offsetHeight/3)}),!1),$.addEventListener("touchmove",(function(e){F=e.changedTouches[0].pageX,X=e.changedTouches[0].pageY,P=F-N,M=X-A,g(),T>=v||(e.preventDefault(),f(P,M,1,L),0>P?f(0,0,0,y):0<P&&f(P,M,Z,y),y.style.zIndex=8)}),!1),$.addEventListener("touchend",(function(){var t=Math.abs;z&&(P=F-N,M=X-A,Y=(new Date).getTime()-I,z=!1,!(T>=v)&&(M<-1*q&&P>b/2*-1&&P<b/2?M<-1*q||t(M)/Y>E?i():e():0>P?P<b/2*-1||t(P)/Y>E?(console.error("left"),s("left",()=>{a()},!1)):e():0<P&&(P>b/2&&t(P)/Y>E?(console.error("right"),s("right",()=>{r()},!1)):e())))}),!1);var D=document.querySelector(".left-action"),H=document.querySelector(".right-action");D.addEventListener("click",(function(){s("left",()=>{T>=v||setTimeout((function(){a(),c()}),500)})}),!1),H.addEventListener("click",(function(){s("right",()=>{T>=v||(y.classList.remove("no-transition"),y.style.zIndex="8",f(0,0,1,y),setTimeout((function(){r(),l()}),1e3))})}),!1)}(),function(){const t=document.getElementById("progress");Array(e.length).fill(1).forEach(()=>{const e=document.createElement("div");e.classList.add("progress-item"),t.appendChild(e)})}();const t=document.getElementById("subscribe-btn");t.addEventListener("click",()=>{const e=document.getElementById("subscribe-form"),n=document.getElementById("subscription-result"),o=document.getElementById("email-input"),s=document.getElementById("error-box"),a=o.value;a.trim()&&!t.getAttribute("disabled")&&(t.setAttribute("disabled","disabled"),fetch("https://diveto-technology-server.herokuapp.com/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}).then(e=>e.json()).then(o=>{o.error?(s.classList.remove("hidden"),s.innerText=o.error):(s.classList.add("hidden"),e.classList.add("hidden"),n.classList.remove("hidden")),t.removeAttribute("disabled")}).catch(e=>{s.classList.remove("hidden"),s.innerText=e,t.removeAttribute("disabled")}))})})}]);