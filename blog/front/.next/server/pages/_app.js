(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.jsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\pages\\_app.jsx";







const App = ({
  Component
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  menu: [{
    id: '1',
    category: 'HTML',
    url: '/posts/HTML'
  }, {
    id: '2',
    category: '대분류메뉴2',
    url: '/posts/2'
  }, {
    id: '3',
    category: '대분류메뉴3',
    url: '/posts/3'
  }, {
    id: '4',
    category: '대분류메뉴4',
    url: '/posts/4'
  }, {
    id: '5',
    category: '대분류메뉴5',
    url: '/posts/5'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  IsLogin: false
};
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const UserLoginAction = () => {
  return {
    type: USER_LOGIN
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 // redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지. 

const configureStore = () => {
  const middlewares = []; // const enhancer = process.env.NODE_ENV === 'production'
  // ? compose(applyMiddleware(...middlewares))
  // : composeWithDevTools(applyMiddleware(...middlewares))

  const enhancer = (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  return Store;
}; // createStore (reducer) === createContext (상태초기값) 초기값을 상태를 가지고
//              reducer안에 상태초기값을 가지고있어요   
// 첫번째 redux의 
// Store => const Store = createContext(initialState) 
// 두번째


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); // createWrapper ?  configureStore Store를 가지고있는 함수표현식에대한 함수

/* harmony default export */ __webpack_exports__["default"] = (wrapper); // wrapper ?

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });
  }
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImdsb2JhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwibWVudSIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJhY3Rpb24iLCJ0eXBlIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJJc0xvZ2luIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiVXNlckxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImluaXRhbFN0YXRlIiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBaUI7QUFDekIsUUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUFDQyxtREFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFtQkMsaURBQVUsQ0FBQ0MsbURBQUQsRUFBU04sYUFBVCxDQUFuQztBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQU0sWUFBSSxFQUFDLHFGQUFYO0FBQWlHLFdBQUcsRUFBQztBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLDhEQUFDLDREQUFEO0FBQWdCLFdBQUssRUFBRTtBQUFDRyxhQUFEO0FBQU9DO0FBQVAsT0FBdkI7QUFBQSw4QkFDSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUEsa0JBREo7QUFhSCxDQWpCRDs7QUFtQkEsK0RBQWVHLG9FQUFBLENBQWtCVCxHQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7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Q0FBN0IsQyxDQUVHOztBQUVILCtEQUFlekIsT0FBZixFLENBQXVCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ2QjtBQUVPLE1BQU0wQixXQUFXLEdBQUc7QUFDdkJiLFNBQU8sRUFBQztBQURlLENBQXBCO0FBR1AsTUFBTWxCLEtBQUssZ0JBQUdnQyxvREFBYSxDQUFDRCxXQUFELENBQTNCO0FBRUEsK0RBQWUvQixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPLE1BQU1JLE9BQU8sR0FBRyxDQUFDSCxLQUFELEVBQU9VLE1BQVAsS0FBa0I7QUFDckMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksYUFBT1gsS0FBUDs7QUFDSixTQUFLLFFBQUw7QUFDSSw2Q0FDT0EsS0FEUDtBQUVJaUIsZUFBTyxFQUFDO0FBRlo7QUFKUjtBQVNILENBVk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTdG9yZSx7aW5pdGFsU3RhdGV9IGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7dXNlUmVkdWNlcix1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtyZWR1Y2VyfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2VyJ1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnR9KSA9PiB7XHJcbiAgICBjb25zdCBnbG9iYWxDb250ZXh0ID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsZ2xvYmFsQ29udGV4dClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAxMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSxkaXNwYXRjaH19PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPiB7Lyog7Jqw66as6rCA66eM65OgIO2MjOydvOuTpOydtCDsl6zquLDsl5Ag7JyE7LmY7ZW07JqULiAqL31cclxuICAgICAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCkiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtZW51OltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J0hUTUwnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy9IVE1MJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgICAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOic0JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgY2F0ZWdvcnksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgVVNFUl9MT0dJTiA9IFwiVVNFUl9MT0dJTlwiXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gXCJVU0VSX0xPR09VVFwiXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dPVVRcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuXHJcbi8vIHJlZHV4IG1pZGRsZXdhcmUg7IKs7Jqp7ZWg7IiY7J6I64qUIOyEpOygleq5jOyngO2VmOqzoCDqt7jrpqzqs6AgZGV2dG9vbHPsgqzsmqnquYzsp4AuIFxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdXHJcbiAgICAvLyBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgIC8vID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8gOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBlbmhhbmNlciA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcixlbmhhbmNlcikgICAgXHJcbiAgICByZXR1cm4gU3RvcmVcclxufSAvLyBjcmVhdGVTdG9yZSAocmVkdWNlcikgPT09IGNyZWF0ZUNvbnRleHQgKOyDge2DnOy0iOq4sOqwkikg7LSI6riw6rCS7J2EIOyDge2DnOulvCDqsIDsp4Dqs6BcclxuICAvLyAgICAgICAgICAgICAgcmVkdWNlcuyViOyXkCDsg4Htg5zstIjquLDqsJLsnYQg6rCA7KeA6rOg7J6I7Ja07JqUICAgXHJcblxyXG4vLyDssqvrsojsp7ggcmVkdXjsnZggXHJcbi8vIFN0b3JlID0+IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpIFxyXG4vLyDrkZDrsojsp7hcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxufSkgLy8gY3JlYXRlV3JhcHBlciA/ICBjb25maWd1cmVTdG9yZSBTdG9yZeulvCDqsIDsp4Dqs6DsnojripQg7ZWo7IiY7ZGc7ZiE7Iud7JeQ64yA7ZWcIO2VqOyImFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciAvLyB3cmFwcGVyID8gIiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIElzTG9naW46dHJ1ZSxcclxufVxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsImV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiTE9HSU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==