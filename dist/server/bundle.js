(()=>{"use strict";var e={860:e=>{e.exports=require("express")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("@babel/runtime-corejs3/core-js-stable/instance/index-of");var t=r.n(e);require("react");const n=require("react-dom/server"),i=require("react-router-dom/server"),a=require("react-router-dom"),c=require("@babel/runtime-corejs3/core-js-stable/instance/map");var l=r.n(c);require("@babel/runtime-corejs3/helpers/defineProperty");const s=require("react/jsx-runtime"),o=require("@mui/material/Button");var d=r.n(o);const h=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"苹果"}),(0,s.jsx)(d(),{variant:"contained",children:"你好，世界"})]}),u=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Bookkeeper"}),(0,s.jsxs)("nav",{children:[(0,s.jsx)(a.Link,{to:"/",children:"列表"}),(0,s.jsx)(a.Link,{to:"/apple",children:"苹果"})]}),(0,s.jsx)(a.Outlet,{})]}),p=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"桃子"}),(0,s.jsx)(d(),{variant:"contained",children:"桃子"})]}),j=[{path:"/",element:(0,s.jsx)(u,{}),children:[{path:"/apple",element:(0,s.jsx)(h,{})}]},{path:"/peach",element:(0,s.jsx)(p,{})}],x=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Routes,{children:l()(j).call(j,(e=>{const{path:t,children:r,element:n}=e;return r&&r.length?(0,s.jsx)(a.Route,{path:t,element:n,children:(0,s.jsx)(a.Route,{path:r.path,element:r.element},r.path)},t):(0,s.jsx)(a.Route,{path:t,element:n},t)}))})}),m=(require("react-redux"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"));var v=r.n(m);const b=r(860),q=b();q.use(b.static("./dist/client")),q.use((async(e,r,a)=>{const{path:c,url:o}=e;if(t()(o).call(o,".")>-1)return void r.end();const d={};let h=(0,n.renderToString)((0,s.jsx)(i.StaticRouter,{location:o,context:d,children:(0,s.jsx)(x,{})}));console.log("reactStr",h);const u=(e=>{var t,r,n,i;let{reactStr:a,initialData:c,styles:s}=e,o=[],d=[];return v()(t=v()(r=v()(n=v()(i='<!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="initial-scale=1, width=device-width" />\n      <title></title>\n      <style>'.concat(s,"</style>\n      ")).call(i,l()(d).call(d,(e=>'<link rel="stylesheet" href="'.concat(e,'"></link>'))).join(""),'\n  </head>\n  <body>\n      <div id="root">')).call(n,a,"</div>\n      <script>window._context=")).call(r,c,"<\/script>\n  </body>\n  ")).call(t,l()(o).call(o,(e=>'<script type="text/javascript" src="'.concat(e,'"><\/script>'))).join(""),"\n  </html>")})({reactStr:h});d.url?r.writeHead(302,{Location:d.url}):r.write(u),r.end()})),q.listen(9e3,(()=>console.log("node listen 9000")))})()})();