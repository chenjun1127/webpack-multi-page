(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,t){},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.sum=function(e,n){return e+n};n.Person=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.age=t}return r(e,[{key:"speak",value:function(){return"My name is "+this.name+",my age is "+this.age+"!"}}]),e}();n.PI=3.1415926;var u=[{name:"Index",linkUrl:"index.html"},{name:"Home",linkUrl:"home.html"},{name:"About",linkUrl:"about.html"}];n.createMenu=function(){if(u&&u.length>0){var e="";return u.map(function(n,t){e+="<li class='item-"+t+"'><a href="+n.linkUrl+">"+n.name+"</a></li>"}),e}}},,,function(e,n,t){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(t(0));t(1);var u=t(2);(0,r.default)(".container").prepend("<ul>"+(0,u.createMenu)()+"</ul>")},function(e,n,t){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(t(0));t(1);var u=t(2);(0,r.default)(".container").html("<ul>"+(0,u.createMenu)()+"</ul><div class='inner'><h1>出塞二首·其一</h1><h2>--王昌龄·唐</h2><p>秦时明月汉时关，万里长征人未还。</p><p>但使龙城飞将在，不教胡马度阴山。</p></div>")},function(e,n,t){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(t(0));t(1);var u=t(2);(0,r.default)(".container").html("<ul>"+(0,u.createMenu)()+"</ul><div class='inner'>Hello,"+new u.Person("jone",30).speak()+",This page is index!</div>")}]]);