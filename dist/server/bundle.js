/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_LIST\": () => (/* binding */ GET_LIST),\n/* harmony export */   \"getIndexList\": () => (/* binding */ getIndexList)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n //action\n\nconst GET_LIST = 'INDEX/GET_LIST'; // action creator\n\nconst changeList = list => ({\n  type: GET_LIST,\n  list\n});\n\nconst getIndexList = server => {\n  return (dispatch, getState) => {\n    // return axios.get('http://localhost:9090/course/list').then((res) => {\n    //   const { list } = res.data;\n    //   dispatch(changeList(list))\n    // })\n    return (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(null).then(res => {\n      dispatch(changeList(res.list));\n    }).catch(e => {\n      console.log(e);\n    });\n  };\n};\n\n//# sourceURL=webpack://server/./src/action/index.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ \"@babel/runtime-corejs3/core-js-stable/set-timeout\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mockjs */ \"mockjs\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n //mock server\n\nconst fetchList = params => {\n  const data = mockjs__WEBPACK_IMPORTED_MODULE_2___default().mock({\n    \"list|5\": [{\n      id: \"@id()\",\n      name: \"@name()\"\n    }]\n  });\n  return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default())((resolve, reject) => {\n    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n      resolve(data);\n    }, mockjs__WEBPACK_IMPORTED_MODULE_2___default().Random.integer(3000, 5000));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchList);\n\n//# sourceURL=webpack://server/./src/api/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header */ \"./src/component/header/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst App = props => {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_component_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      staticContext: props.staticContext\n    }), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(props.route.routes)]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://server/./src/app.js?");

/***/ }),

/***/ "./src/component/apple.js":
/*!********************************!*\
  !*** ./src/component/apple.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst Apple = () => {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h1\", {\n      children: \"\\u82F9\\u679C\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {\n      variant: \"contained\",\n      children: \"\\u4F60\\u597D\\uFF0C\\u4E16\\u754C\"\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);\n\n//# sourceURL=webpack://server/./src/component/apple.js?");

/***/ }),

/***/ "./src/component/header/index.js":
/*!***************************************!*\
  !*** ./src/component/header/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/component/header/index.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nclass Header extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n      className: _index_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bg,\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: \"/apple\",\n        children: \"\\u82F9\\u679C\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: \"/login\",\n        children: \"\\u767B\\u5F55\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: \"/\",\n        children: \"\\u5217\\u8868\"\n      })]\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://server/./src/component/header/index.js?");

/***/ }),

/***/ "./src/config/server.js":
/*!******************************!*\
  !*** ./src/config/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SevPort\": () => (/* binding */ SevPort)\n/* harmony export */ });\nconst SevPort = 9999;\n\n//# sourceURL=webpack://server/./src/config/server.js?");

/***/ }),

/***/ "./src/container/index.js":
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action */ \"./src/action/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n // node里渲染jsx，react必须得使用babel\n\n\n\n\n\n\nconst Index = props => {\n  var _context;\n\n  let [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1); // useEffect(() => {\n  //   props.getIndexList()\n  // }, [])\n\n  console.log('props', props.list);\n  console.log('count', count);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"button\", {\n      onClick: () => setCount(count + 1),\n      children: \"+\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"span\", {\n      children: [\"\\u8BA1\\u6570 \", count]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"button\", {\n      onClick: () => setCount(count - 1),\n      children: \"-\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"ul\", {\n      children: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = props.list).call(_context, item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"li\", {\n        children: item.name\n      }, item.id))\n    })]\n  });\n}; // server端拉取数据\n\n\nIndex.load = store => {\n  return store.dispatch((0,_action__WEBPACK_IMPORTED_MODULE_4__.getIndexList)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => ({\n  list: state.index.list\n}), {\n  getIndexList: _action__WEBPACK_IMPORTED_MODULE_4__.getIndexList\n})(Index));\n\n//# sourceURL=webpack://server/./src/container/index.js?");

/***/ }),

/***/ "./src/container/login.js":
/*!********************************!*\
  !*** ./src/container/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n // node里渲染jsx，react必须得使用babel\n\n\n\n\nconst Login = () => {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n      children: \"\\u767B\\u5F55\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n      type: \"text\",\n      placeholder: \"\\u7528\\u6237\\u540D\"\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://server/./src/container/login.js?");

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ \"./src/action/index.js\");\n\nconst defaultState = {\n  list: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__.GET_LIST:\n      return { ...state,\n        list: action.list\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://server/./src/reducer/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ */ \"./src/util/index.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ \"./src/container/index.js\");\n/* harmony import */ var _container_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/login */ \"./src/container/login.js\");\n/* harmony import */ var _component_apple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/apple */ \"./src/component/apple.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n\n\n\n\n\n //asyncComp(() => import('../container/apple'))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  component: _app__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  routes: [{\n    path: '/',\n    component: _container__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    loadData: _container__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load,\n    exact: true,\n    key: 'home'\n  }, {\n    path: '/login',\n    component: _container_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    key: 'login'\n  }, {\n    path: '/apple',\n    component: _component_apple__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    name: 'apple',\n    exact: true\n  }]\n}]);\n\n//# sourceURL=webpack://server/./src/routes/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr */ \"./src/server/ssr.js\");\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/server */ \"./src/config/server.js\");\n//服务端入口\nconst express = __webpack_require__(/*! express */ \"express\");\n\n\n\nconst app = express();\napp.use(express.static('./dist/client')); //client\n\napp.use(_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\napp.listen(_config_server__WEBPACK_IMPORTED_MODULE_1__.SevPort, () => console.log('node listen 9999'));\n\n//# sourceURL=webpack://server/./src/server/index.js?");

/***/ }),

/***/ "./src/server/ssr.js":
/*!***************************!*\
  !*** ./src/server/ssr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"@babel/runtime-corejs3/core-js-stable/json/stringify\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ \"./src/server/util/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst store = (0,_store_store__WEBPACK_IMPORTED_MODULE_9__.getStore)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res, next) => {\n  const {\n    path,\n    url\n  } = req; //第一个路由，这里拉取数据，直接渲染，\n  //组件有load静态方法，就在server端获取数据，直接显示\n\n  let matchRet = (0,react_router_config__WEBPACK_IMPORTED_MODULE_10__.matchRoutes)(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], path);\n  let promises = [];\n\n  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(matchRet).call(matchRet, item => {\n    if (item.route.loadData) {\n      let promise = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())((resolve, reject) => {\n        item.route.loadData(store).then(resolve, reject).catch(reject);\n      });\n      promises.push(promise);\n    }\n  }); //服务器直出组件的时候，需要完成请求，携带数据,\n  //浏览器接管页面的时候，利用数据渲染组件\n\n\n  await _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default().all(promises);\n  let context = {\n    css: []\n  };\n  let reactStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n    store: store,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, {\n      location: url,\n      context: context,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Switch, {\n        children: (0,react_router_config__WEBPACK_IMPORTED_MODULE_10__.renderRoutes)(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n      })\n    })\n  }));\n  const htmlInfo = {\n    reactStr,\n    initialData: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(store.getState()),\n    styles: context.css.length ? context.css.join('\\n') : ''\n  }; //在服务端注入数据，构建出组件树,序列化成 HTML\n\n  const html = (0,_util__WEBPACK_IMPORTED_MODULE_11__.handleHtml)(htmlInfo);\n  res.send(html);\n  return next();\n});\n\n//# sourceURL=webpack://server/./src/server/ssr.js?");

/***/ }),

/***/ "./src/server/util/index.js":
/*!**********************************!*\
  !*** ./src/server/util/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleHtml\": () => (/* binding */ handleHtml),\n/* harmony export */   \"getStaticRoute\": () => (/* binding */ getStaticRoute)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handleHtml = _ref => {\n  var _context, _context2, _context3, _context4;\n\n  let {\n    reactStr,\n    initialData,\n    styles\n  } = _ref;\n  let jsValues = [];\n  let cssValues = [];\n\n  if (true) {\n    jsValues = ['main.js'];\n    cssValues = ['main.css'];\n  } else {}\n\n  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = \"<!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n      <meta charset=\\\"UTF-8\\\"/>\\n      <meta name=\\\"viewport\\\" content=\\\"initial-scale=1, width=device-width\\\" />\\n      <title></title>\\n      <style>\".concat(styles, \"</style>\\n      \")).call(_context4, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(cssValues).call(cssValues, v => \"<link rel=\\\"stylesheet\\\" href=\\\"\".concat(v, \"\\\"></link>\")).join(''), \"\\n  </head>\\n  <body>\\n      <div id=\\\"root\\\">\")).call(_context3, reactStr, \"</div>\\n      <script>window._context=\")).call(_context2, initialData, \"</script>\\n  </body>\\n  \")).call(_context, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(jsValues).call(jsValues, v => \"<script type=\\\"text/javascript\\\" src=\\\"\".concat(v, \"\\\"></script>\")).join(''), \"\\n  </html>\");\n};\nconst getStaticRoute = async asyncRoute => {\n  const staitcRoute = [];\n  const len = asyncRoute.length;\n\n  for (let i = 0; i < len; i++) {\n    const item = asyncRoute[i];\n    staitcRoute.push({ ...item\n    });\n\n    if (item.component._load) {\n      const component = (await item.component._load()).default;\n      staitcRoute[staitcRoute.length - 1].component = component;\n    }\n  }\n\n  ;\n  return staitcRoute;\n};\n\n//# sourceURL=webpack://server/./src/server/util/index.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStore\": () => (/* binding */ getStore),\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ \"./src/reducer/index.js\");\n\n\n\nconst reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  index: _reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst getStore = () => {\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))); // console.log(store)\n\n  return store;\n};\nconst getClientStore = () => {\n  let defaultState = window._context ? window._context : {};\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, defaultState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n  console.log(store);\n  return store;\n};\n\n//# sourceURL=webpack://server/./src/store/store.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst asyncComp = load => {\n  var _class, _temp;\n\n  return _temp = _class = class AsyncComp extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props) {\n      super(props);\n\n      _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"asyncLoad\", async () => {\n        const {\n          default: Comp\n        } = await AsyncComp._load();\n        this.setState({\n          Comp\n        });\n      });\n\n      this.state = {\n        Comp: null\n      };\n    }\n\n    componentDidMount() {\n      if (!this.state.Comp) {\n        console.log('加载异步组件');\n        this.asyncLoad();\n      }\n    }\n\n    render() {\n      const {\n        Comp\n      } = this.state;\n      return Comp ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...this.props\n      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n        children: \"loading\"\n      });\n    }\n\n  }, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_class, \"_load\", load), _temp;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asyncComp);\n\n//# sourceURL=webpack://server/./src/util/index.js?");

/***/ }),

/***/ "./src/component/header/index.css":
/*!****************************************!*\
  !*** ./src/component/header/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"bg\":\"yLe0fBhYv96Ujg42805z\"});\n\n//# sourceURL=webpack://server/./src/component/header/index.css?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/map");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/json/stringify":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/json/stringify" ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/json/stringify");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/promise");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-timeout":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set-timeout" ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/set-timeout");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mockjs":
/*!*************************!*\
  !*** external "mockjs" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mockjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;