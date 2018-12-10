(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)a=s[d],n[a]&&p.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],r=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},n={app:0},o=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),n=i.n(r);n.a},"554f":function(t,e,i){"use strict";var r=i("99db"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"app"}},[t._m(0),i("div",{staticClass:"layout wrap-row mt h100"},[i("section",{staticClass:"container with-title w50 h-container"},[i("h2",{staticClass:"title"},[t._v("Paint")]),i("div",{staticClass:"editor"},[i("div",{ref:"drawGrid",staticClass:"draw"})])]),i("section",{staticClass:"form container with-title w50 h-container"},[i("h2",{staticClass:"title"},[t._v("Configuration")]),i("div",{staticClass:"layout wrap-row align-end"},[i("div",{staticClass:"field mr-field"},[i("button",{staticClass:"btn is-error",on:{click:t.changeSize}},[t._v("Clear paint")])]),i("div",{staticClass:"field pr-field"},[i("label",{attrs:{for:"size"}},[t._v("Size")]),i("div",{staticClass:"layout nowrap-row align-end"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"input w100px",class:{"is-error":t.sizeError},attrs:{type:"number",id:"size",name:"size"},domProps:{value:t.size},on:{input:[function(e){e.target.composing||(t.size=e.target.value)},function(e){t.changeSize(parseInt(e.target.value,10))}]}}),i("span",{staticClass:"pl"},[t._v("px")])])]),i("div",{staticClass:"field pr-field"},[i("label",{attrs:{for:"height"}},[t._v("Pixels")]),i("div",{staticClass:"layout nowrap-row align-end"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pixel,expression:"pixel"}],staticClass:"input w100px",attrs:{type:"number",id:"pixel",name:"pixel"},domProps:{value:t.pixel},on:{input:function(e){e.target.composing||(t.pixel=e.target.value)}}}),i("span",{staticClass:"pl"},[t._v("px")])])])]),i("div",{staticClass:"field mt"},[i("label",{attrs:{for:"color"}},[t._v("Color")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"input",style:{backgroundColor:t.color},attrs:{type:"text"},domProps:{value:t.color},on:{click:function(e){t.$refs.colorPicker.click()},input:function(e){e.target.composing||(t.color=e.target.value)}}}),i("input",{ref:"colorPicker",staticStyle:{display:"none"},attrs:{type:"color"},on:{input:t.updateColor}})]),i("div",{staticClass:"field mt"},[i("label",{attrs:{for:"height"}},[t._v("Code generated")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input w100",attrs:{id:"code",rows:t.getRows,name:"code",readonly:""},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),i("div",{staticClass:"layout nowrap-row relative"},[i("div",{staticClass:"field mt"},[i("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn is-primary"},[t._v("Copy to clipboard")])]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?i("div",{staticClass:"balloon from-left copied transition"},[t._v("\n              Copied!\n            ")]):t._e()])],1)]),t._m(1)]),i("github-corner")],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container is-dark"},[i("h1",{staticClass:"text-center"},[t._v("Vue Pixel Art")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"layout justify-center align-center wrap-column"},[i("div",[i("span",{staticClass:"pr"},[t._v("Made with")]),i("i",{staticClass:"icon heart"}),i("span",{staticClass:"pl"},[t._v("by")]),i("a",{staticClass:"pl",attrs:{href:"https://github.com/guastallaigor",target:"_blank"}},[t._v("@guastallaigor")])]),i("div",{staticClass:"mt mb"},[i("span",{staticClass:"pr"},[t._v("Project refactored from")]),i("a",{attrs:{href:"https://github.com/BcRikko/css-collection/",target:"_blank"}},[t._v("CSS Collection / DotGen")])]),i("div",[i("span",{staticClass:"pr"},[t._v("Credits:")]),i("a",{staticClass:"pl",attrs:{href:"https://github.com/BcRikko",target:"_blank"}},[t._v("@bc_rikko")])])])}],a=(i("14b9"),i("6c7b"),i("a481"),i("5df3"),i("1c4c"),i("ac6a"),function(t,e){var i=e._c;return i("div",[i("a",{staticClass:"github-corner",attrs:{href:"https://github.com/guastallaigor/vue-pixel-art",target:"_blank","aria-label":"View source on GitHub"}},[i("svg",{staticStyle:{fill:"#151513",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[i("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),i("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),i("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),i("section",{staticClass:"balloon from-left github-corner-tooltip"},[e._v("\n      Fork me!\n    ")])])}),s=[],c=(i("f6d4"),i("2877")),l={},u=Object(c["a"])(l,a,s,!0,null,null,null);u.options.__file="GithubCorner.vue";var d=u.exports,p='<div class="vue-pixel-art"></div>',f={components:{GithubCorner:d},data:function(){return{size:8,pixel:4,show:!1,sizeError:!1,color:"#1cb785",code:p,end:"}\n          </style>"}},computed:{getRows:function(){return window.innerWidth>1439?11:window.innerWidth>720?7:5}},mounted:function(){this.changeSize()},beforeDestroy:function(){this.removeChilds()},methods:{updateColor:function(t){var e=t.target.value;this.color=e},removeChild:function(t){t.removeEventListener("click",this.paint.bind(this,t)),t.removeEventListener("mousedown",this.mousedown.bind(this,t)),t.removeEventListener("mouseup",this.mouseup.bind(this,t)),t.removeEventListener("mousemove",this.mousemove.bind(this,t)),t.parentElement.removeChild(t)},removeChilds:function(){var t=this,e=this.$refs,i=e.drawGrid,r=i.querySelectorAll("div");Array.from(r).forEach(function(e){t.removeChild(e)})},resetEventListner:function(){var t=this,e=this.$refs,i=e.drawGrid,r=i.querySelectorAll("div");Array.from(r).forEach(function(e){e.addEventListener("mousedown",t.mousedown.bind(t,e)),e.addEventListener("mouseup",t.mouseup.bind(t,e)),e.addEventListener("mousemove",t.mousemove.bind(t,e)),e.addEventListener("click",t.paint.bind(t,e))})},hexToRgb:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,i,r){return e+e+i+i+r+r});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?"rgb(".concat(parseInt(i[1],16),", ").concat(parseInt(i[2],16),", ").concat(parseInt(i[3],16),")"):null},mousemove:function(t){this.isMouseDown&&this.mustPaint(t)},mousedown:function(t){this.isMouseDown=!0},mouseup:function(t){this.isMouseDown=!1},mustPaint:function(t){this.setBgColor(t,this.color)},paint:function(t){var e=t.style,i=e.backgroundColor===this.hexToRgb(this.color)?"transparent":this.color;this.setBgColor(t,i)},setBgColor:function(t,e){t.style.backgroundColor=e,this.output()},output:function(){var t=this.$refs,e=t.drawGrid,i=e.querySelectorAll("div"),r=parseInt(this.pixel,10),n=parseInt(this.size,10),o=Array.from(i).map(function(t,e){return["".concat(r*(e%n)+r,"px"),"".concat(r*Math.ceil((e+1)/n),"px"),0,t.style.backgroundColor||"transparent"].join(" ")}),a=o.filter(function(t){return!/(\s0 transparent$)/.test(t)}),s=a.join(", \n");this.code='<div class="vue-pixel-art"></div>\n<style>\n.vue-pixel-art::before {\n  content: "";\n  position: absolute;\n  top: '.concat(-1*r,"px;\n  left: ").concat(-1*r,"px;\n  width: ").concat(r,"px;\n  height: ").concat(r,"px;\n  background: transparent;\n  box-shadow: ").concat(s,";\n}\n</style>")},changeSize:function(){if(this.size>100)this.sizeError=!0;else{this.sizeError=!1;var t=this.$refs,e=t.drawGrid,i=parseInt(Math.pow(this.size,2),10),r=Array(i).fill(0);this.code=p,this.removeChilds(),r.forEach(function(t){var i=document.createElement("div");e.appendChild(i)}),this.resetEventListner(),e.style.gridTemplateColumns="1fr ".repeat(this.size),e.style.gridTemplateRows="1fr ".repeat(this.size)}},onCopy:function(){var t=this;this.show=!0,setTimeout(function(){t.show=!1},2e3)}}},v=f,h=(i("034f"),i("554f"),Object(c["a"])(v,n,o,!1,null,"5a4ae917",null));h.options.__file="App.vue";var m=h.exports,C=i("4eb5"),b=i.n(C);i("cdad"),i("cceb");r["a"].use(b.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,i){},"99db":function(t,e,i){},cceb:function(t,e,i){},f6d4:function(t,e,i){"use strict";var r=i("fd0d"),n=i.n(r);n.a},fd0d:function(t,e,i){}});
//# sourceMappingURL=app.3941e180.js.map