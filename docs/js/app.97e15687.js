(function(e){function t(t){for(var o,u,c=t[0],s=t[1],a=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},i={app:0},r=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://azertypow.github.io/etienne.son/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"34b7":function(e,t,n){},"58f7":function(e,t,n){e.exports=n.p+"img/APPS2_SOUND@2x.52bc1d7c.png"},"5cb8":function(e,t,n){"use strict";n("6644")},6644:function(e,t,n){},"8ecf":function(e,t,n){"use strict";n("9731")},9731:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("34b7");var o=n("7a23");function i(e,t){var n=Object(o["s"])("router-view");return Object(o["m"])(),Object(o["c"])(n)}n("5cb8");const r={};r.render=i;var u=r,c=n("9483");Object(c["a"])("".concat("https://azertypow.github.io/etienne.son/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var s=n("5502"),a=Object(s["a"])({state:{},mutations:{},actions:{},modules:{}}),d=n("6c02"),l=n("58f7"),p=n.n(l),f=Object(o["w"])("data-v-7630025e");Object(o["p"])("data-v-7630025e");var h={class:"home"},b=Object(o["d"])("img",{class:"e-img-bg",alt:"",src:p.a},null,-1);Object(o["n"])();var v=f((function(e,t,n,i,r,u){return Object(o["m"])(),Object(o["c"])("div",h,[Object(o["d"])("div",{class:"v-sound-1",onClick:t[1]||(t[1]=function(t){return e.soundClick_1()})}),Object(o["d"])("div",{class:"v-sound-2",onClick:t[2]||(t[2]=function(t){return e.soundClick_2()})}),Object(o["d"])("div",{class:"v-sound-3",onClick:t[3]||(t[3]=function(t){return e.soundClick_3()})}),b])})),g=Object(o["e"])({mounted:function(){this.audio_3.addEventListener("load",console.log("loaded"))},name:"Home",data:function(){return{}},methods:{soundClick_1:function(){this.pauseAudio2(),this.pauseAudio3(),this.audio_1.paused?this.audio_1.play():this.pauseAudio1()},soundClick_2:function(){this.pauseAudio1(),this.pauseAudio3(),this.audio_2.paused?this.audio_2.play():this.pauseAudio2()},soundClick_3:function(){this.pauseAudio1(),this.pauseAudio2(),this.audio_3.paused?this.audio_3.play():this.pauseAudio3()},pauseAudio1:function(){this.audio_1.pause(),this.audio_1.currentTime=0},pauseAudio2:function(){this.audio_2.pause(),this.audio_2.currentTime=0},pauseAudio3:function(){this.audio_3.pause(),this.audio_3.currentTime=0}}});n("8ecf");g.render=v,g.__scopeId="data-v-7630025e";var O=g,j=[{path:"/",name:"Home",component:O}],m=Object(d["a"])({history:Object(d["b"])(),routes:j}),_=m;Object(o["b"])(u).use(_).use(a).mount("#app")}});
//# sourceMappingURL=app.97e15687.js.map