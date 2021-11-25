(()=>{"use strict";var e={860:e=>{e.exports=require("express")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("react");var t=r.n(e);const n=require("react-dom/server"),o=require("react-router-dom"),c=require("react-redux"),i=(require("axios"),require("mockjs"));var u=r.n(i);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f="INDEX/GET_LIST",p=function(e){return function(e,t){return(r=u().mock({"list|5":[{id:"@id()",name:"@name()"}]}),new Promise((function(e,t){setTimeout((function(){e(r)}),u().Random.integer(3e3,5e3))}))).then((function(t){var r;e((r=t.list,{type:f,list:r}))})).catch((function(e){console.log(e)}));var r}},y={list:[]};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(r){var n,o,c=(n=(0,e.useState)(1),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}}(n,o)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=c[0],u=c[1];return console.log("props",r.list),console.log("count",i),t().createElement("div",null,t().createElement("button",{onClick:function(){return u(i+1)}},"+"),t().createElement("span",null,"计数 ",i),t().createElement("button",{onClick:function(){return u(i-1)}},"-"),t().createElement("ul",null,r.list.map((function(e){return t().createElement("li",{key:e.id},e.name)}))))};m.load=function(e){return e.dispatch(p())};const b=(0,c.connect)((function(e){return{list:e.index.list}}),{getIndexList:p})(m),h=require("react-router-config");function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}const x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var r,n,c,i,u=(c=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(c);if(i){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return w(this,e)});function a(){return g(this,a),u.apply(this,arguments)}return r=a,(n=[{key:"render",value:function(){return t().createElement("div",null,t().createElement(o.Link,{to:"/login"},"登录"),t().createElement(o.Link,{to:"/"},"列表"))}}])&&O(r.prototype,n),a}(t().Component),P=[{path:"/",component:function(e){return t().createElement("div",null,t().createElement(x,{staticContext:e.staticContext}),(0,h.renderRoutes)(e.route.routes))},routes:[{path:"/",component:b,loadData:b.load,exact:!0,key:"home"},{path:"/login",component:function(){return t().createElement("div",null,t().createElement("h1",null,"登录"),t().createElement("input",{type:"text",placeholder:"用户名"}))},exact:!0,key:"login"}]}],S=require("redux"),k=require("redux-thunk");var R=r.n(k),_=(0,S.combineReducers)({index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;if(t.type===f){var r=l(l({},e),{},{list:t.list});return r}return e}}),q=r(860),D=(0,S.createStore)(_,(0,S.applyMiddleware)(R())),T=q();T.use(q.static("public")),T.get("*",(function(e,r){var i=(0,h.matchRoutes)(P,e.path),u=[];i.forEach((function(e){if(e.route.loadData){var t=new Promise((function(t,r){e.route.loadData(D).then(t,r).catch(r)}));u.push(t)}})),Promise.all(u).then((function(){var i={css:[]},u=(0,n.renderToString)(t().createElement(c.Provider,{store:D},t().createElement(o.StaticRouter,{location:e.url,context:i},t().createElement(o.Switch,null,(0,h.renderRoutes)(P))))),a=i.css.length?i.css.join("\n"):"";r.send("\n      <html>\n        <head>\n          <title>kkbsssr</title>\n          <style>".concat(a,'</style>\n        </head>\n        <body>\n          <div id="root">').concat(u,"</div>\n          <script>window._context=").concat(JSON.stringify(D.getState()),'<\/script>\n          <script src="/main.js"><\/script>\n        </body>\n      </html>\n    '))}))})),T.listen(9999,(function(){return console.log("node listen 9999")}))})()})();