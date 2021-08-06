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
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false
};
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
const USER_LOGOUT = "USER_LOGOUT"; // redux-thunk 
// export const UserLoginAction = data => {
//    return async (dispatch)=>{
//        dispatch(UserLogin_REQUEST())
//        try{
//         //fetch 성공적인부분
//         const response = await fetch('http://localhost:3000/api/login',{
//             method:'POST',
//             headers:{
//                 "Content-type":"application/json",
//             },
//             body:JSON.stringify({...data})
//         })
//         const result = await response.json()
//         // {
//         //     result:'OK',
//         //     msg:'로그인에 성공했습니다.'
//         // }
//         result.result === 'OK' 
//         ? dispatch(UserLogin_SUCCESS(result))
//         : dispatch(UserLogin_ERROR())
//        } catch (e) {
//         //error
//         dispatch(UserLogin_ERROR())
//        }
//    }
// }

const UserLogin_REQUEST = data => {
  return {
    type: USER_LOGIN_REQUEST,
    // "USER_LOGIN_REQUEST"
    data
    /*
        userid:'web7722',
        userpw:'1234'
    */

    /*
        {
            type:"USER_LOGIN_REQUEST",
            data:{
                userid:'web7722',
                userpw:'1234'
            }
        }
    */

  };
};
const UserLogin_SUCCESS = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
const UserLogin_ERROR = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
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

/***/ "./saga/index.js":
/*!***********************!*\
  !*** ./saga/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
 // 사이드이펙트 
// all call fork take takeEvery takeLatest put throttle 

/*
    all  : 함수를 여러개 실행할때 사용한다. 인자값은 배열입니다.
    fork : 함수를 하나만 실행하는것. (제레이터 함수)
    take : 인자값 내용이 같아질떄까지 가만히있다가. 같아지면 아래의 코드를 실행함
    takeLatest : action값 type에 따라 함수를 호출하는 아이 + 중복되는 액션이 다발적으로 발생되었을때 맨마지막꺼 하나만 실행시킴.
*/

function* testAction() {
  // login 
  console.log('훔쳐오기~');
}

function* test() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)('USER_LOGIN_REQUEST', testAction);
} // rootSaga 함수 제네레터


function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(test)]);
}
/*
     {
        type:"USER_LOGIN_REQUEST",
        data:{
            userid:'web7722',
            userpw:'1234'
        }
    }
*/

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
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _saga_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../saga/index */ "./saga/index.js");






 // npm install redux-saga

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // console.log(action,dispatch,getState)
  console.log(action);
  return next(action);
}; // redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지. 


const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)); // const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  Store.sagaTask = sagaMiddleware.run(_saga_index__WEBPACK_IMPORTED_MODULE_6__.default);
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
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState); // 결과값 Store 컴포넌트이다.

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

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zYWdhL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb250ZXh0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL3JlZHVjZXIuanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJnbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0b3JlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwid3JhcHBlciIsImluaXRpYWxTdGF0ZSIsIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiYWN0aW9uIiwidHlwZSIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luX1JFUVVFU1QiLCJkYXRhIiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJVc2VyTG9nb3V0QWN0aW9uIiwidGVzdEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0IiwidGFrZUxhdGVzdCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsImxvZ2dlck1pZGRsZXdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJpbml0YWxTdGF0ZSIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQ3pCLFFBQU1DLGFBQWEsR0FBR0MsaURBQVUsQ0FBQ0MsbURBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJDLGlEQUFVLENBQUNDLG1EQUFELEVBQVNOLGFBQVQsQ0FBbkM7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFB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V0FBVyxHQUFHO0FBQ3ZCbEMsU0FBTyxFQUFDO0FBRGUsQ0FBcEI7QUFHUCxNQUFNbkIsS0FBSyxnQkFBR3NELG9EQUFhLENBQUNELFdBQUQsQ0FBM0IsQyxDQUF5Qzs7QUFFekMsK0RBQWVyRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPLE1BQU1JLE9BQU8sR0FBRyxDQUFDSCxLQUFELEVBQU9VLE1BQVAsS0FBa0I7QUFDckMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksYUFBT1gsS0FBUDs7QUFDSixTQUFLLFFBQUw7QUFDSSw2Q0FDT0EsS0FEUDtBQUVJa0IsZUFBTyxFQUFDO0FBRlo7QUFKUjtBQVNILENBVk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTdG9yZSx7aW5pdGFsU3RhdGV9IGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7dXNlUmVkdWNlcix1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtyZWR1Y2VyfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2VyJ1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnR9KSA9PiB7XHJcbiAgICBjb25zdCBnbG9iYWxDb250ZXh0ID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsZ2xvYmFsQ29udGV4dClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAxMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSxkaXNwYXRjaH19PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPiB7Lyog7Jqw66as6rCA66eM65OgIO2MjOydvOuTpOydtCDsl6zquLDsl5Ag7JyE7LmY7ZW07JqULiAqL31cclxuICAgICAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCkiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtZW51OltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J0hUTUwnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy9IVE1MJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgICAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOic0JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgY2F0ZWdvcnksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICBJc0xvZ2luOmZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9IFwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9IFwiVVNFUl9MT0dJTl9FUlJPUlwiXHJcblxyXG5jb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIlxyXG5cclxuLy8gcmVkdXgtdGh1bmsgXHJcbi8vIGV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHtcclxuLy8gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PntcclxuLy8gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9SRVFVRVNUKCkpXHJcbi8vICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbjrtoDrtoRcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4vLyAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbi8vICAgICAgICAgLy8ge1xyXG4vLyAgICAgICAgIC8vICAgICByZXN1bHQ6J09LJyxcclxuLy8gICAgICAgICAvLyAgICAgbXNnOifroZzqt7jsnbjsl5Ag7ISx6rO17ZaI7Iq164uI64ukLidcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJyBcclxuLy8gICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbi8vICAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuICAgICAgICBcclxuLy8gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgICAgICAvL2Vycm9yXHJcbi8vICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNULCAvLyBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICB1c2VyaWQ6J3dlYjc3MjInLFxyXG4gICAgICAgICAgICB1c2VycHc6JzEyMzQnXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTpcIlVTRVJfTE9HSU5fUkVRVUVTVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcmlkOid3ZWI3NzIyJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VycHc6JzEyMzQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgfVxyXG59IFxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1NVQ0NFU1MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fRVJST1IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9FUlJPUixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dPVVRcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZSwgICBcclxuICAgICAgICAgICAgICAgIGxvYWRkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7YWxsLGZvcmsscHV0LHRha2UsdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG4vLyDsgqzsnbTrk5zsnbTtjpntirggXHJcbi8vIGFsbCBjYWxsIGZvcmsgdGFrZSB0YWtlRXZlcnkgdGFrZUxhdGVzdCBwdXQgdGhyb3R0bGUgXHJcblxyXG4vKlxyXG4gICAgYWxsICA6IO2VqOyImOulvCDsl6zrn6zqsJwg7Iuk7ZaJ7ZWg65WMIOyCrOyaqe2VnOuLpC4g7J247J6Q6rCS7J2AIOuwsOyXtOyeheuLiOuLpC5cclxuICAgIGZvcmsgOiDtlajsiJjrpbwg7ZWY64KY66eMIOyLpO2Wie2VmOuKlOqygy4gKOygnOugiOydtO2EsCDtlajsiJgpXHJcbiAgICB0YWtlIDog7J247J6Q6rCSIOuCtOyaqeydtCDqsJnslYTsp4jrloTquYzsp4Ag6rCA66eM7Z6I7J6I64uk6rCALiDqsJnslYTsp4DrqbQg7JWE656Y7J2YIOy9lOuTnOulvCDsi6TtlontlahcclxuICAgIHRha2VMYXRlc3QgOiBhY3Rpb27qsJIgdHlwZeyXkCDrlLDrnbwg7ZWo7IiY66W8IO2YuOy2nO2VmOuKlCDslYTsnbQgKyDspJHrs7XrkJjripQg7JWh7IWY7J20IOuLpOuwnOyggeycvOuhnCDrsJzsg53rkJjsl4jsnYTrlYwg66eo66eI7KeA66eJ6rq8IO2VmOuCmOunjCDsi6Ttlonsi5ztgrQuXHJcbiovXHJcblxyXG5mdW5jdGlvbiogdGVzdEFjdGlvbigpe1xyXG4gICAgLy8gbG9naW4gXHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwficpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdVU0VSX0xPR0lOX1JFUVVFU1QnLHRlc3RBY3Rpb24pXHJcbiAgICBcclxufVxyXG5cclxuLy8gcm9vdFNhZ2Eg7ZWo7IiYIOygnOuEpOugiO2EsFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh0ZXN0KVxyXG4gICAgXSkgXHJcbn1cclxuXHJcbi8qXHJcbiAgICAge1xyXG4gICAgICAgIHR5cGU6XCJVU0VSX0xPR0lOX1JFUVVFU1RcIixcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgdXNlcmlkOid3ZWI3NzIyJyxcclxuICAgICAgICAgICAgdXNlcnB3OicxMjM0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKi8iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYS9pbmRleCdcclxuXHJcbi8vIG5wbSBpbnN0YWxsIHJlZHV4LXNhZ2FcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbixkaXNwYXRjaCxnZXRTdGF0ZSlcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbilcclxufVxyXG5cclxuLy8gcmVkdXggbWlkZGxld2FyZSDsgqzsmqntlaDsiJjsnojripQg7ISk7KCV6rmM7KeA7ZWY6rOgIOq3uOumrOqzoCBkZXZ0b29sc+yCrOyaqeq5jOyngC4gXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYSgpXHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV1cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIC8vIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKSBcclxuICAgIFN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5cclxuICAgIHJldHVybiBTdG9yZVxyXG59IC8vIGNyZWF0ZVN0b3JlIChyZWR1Y2VyKSA9PT0gY3JlYXRlQ29udGV4dCAo7IOB7YOc7LSI6riw6rCSKSDstIjquLDqsJLsnYQg7IOB7YOc66W8IOqwgOyngOqzoFxyXG4gIC8vICAgICAgICAgICAgICByZWR1Y2Vy7JWI7JeQIOyDge2DnOy0iOq4sOqwkuydhCDqsIDsp4Dqs6DsnojslrTsmpQgICBcclxuXHJcbi8vIOyyq+uyiOynuCByZWR1eOydmCBcclxuLy8gU3RvcmUgPT4gY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSkgXHJcbi8vIOuRkOuyiOynuFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG59KSAvLyBjcmVhdGVXcmFwcGVyID8gIGNvbmZpZ3VyZVN0b3JlIFN0b3Jl66W8IOqwgOyngOqzoOyeiOuKlCDtlajsiJjtkZztmITsi53sl5DrjIDtlZwg7ZWo7IiYXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyIC8vIHdyYXBwZXIgPyAiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjp0cnVlLFxyXG59XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0YWxTdGF0ZSkgLy8g6rKw6rO86rCSIFN0b3JlIOy7tO2PrOuEjO2KuOydtOuLpC5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwiZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJMT0dJTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICBjYXNlIFwiTE9HT1VUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9