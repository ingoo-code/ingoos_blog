self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



 // redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지. 

var configureStore = function configureStore() {
  var middlewares = [];
  var enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)(redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware.apply(void 0, middlewares));
  var Store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, enhancer);
  return Store;
}; // createStore (reducer) === createContext (상태초기값) 초기값을 상태를 가지고
//              reducer안에 상태초기값을 가지고있어요   
// 첫번째 redux의 
// Store => const Store = createContext(initialState) 
// 두번째


var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore); // createWrapper ?  configureStore Store를 가지고있는 함수표현식에대한 함수

/* harmony default export */ __webpack_exports__["default"] = (wrapper); // wrapper ?

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      };

exports.devToolsEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (noop) {
          return noop;
        };
      };


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vaW5kZXguanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQ2ZDLENBRGUsR0FFZkMsNkVBQW1CLENBQUNDLHdEQUFBLFNBQW1CSixXQUFuQixDQUFELENBRnJCO0FBR0EsTUFBTUssS0FBSyxHQUFHQyxrREFBVyxDQUFDQyw4Q0FBRCxFQUFTTixRQUFULENBQXpCO0FBQ0EsU0FBT0ksS0FBUDtBQUNILENBUEQsQyxDQU9FO0FBQ0E7QUFFRjtBQUNBO0FBQ0E7OztBQUNBLElBQU1HLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ1YsY0FBRCxDQUE3QixDLENBQThDOztBQUU5QywrREFBZVMsT0FBZixFLENBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJWOztBQUViLGNBQWMsNEVBQXdCOztBQUV0QyxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhlNjQxMDAxMzhiZjUzNDZjZTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuXHJcbi8vIHJlZHV4IG1pZGRsZXdhcmUg7IKs7Jqp7ZWg7IiY7J6I64qUIOyEpOygleq5jOyngO2VmOqzoCDqt7jrpqzqs6AgZGV2dG9vbHPsgqzsmqnquYzsp4AuIFxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdXHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpICAgIFxyXG4gICAgcmV0dXJuIFN0b3JlXHJcbn0gLy8gY3JlYXRlU3RvcmUgKHJlZHVjZXIpID09PSBjcmVhdGVDb250ZXh0ICjsg4Htg5zstIjquLDqsJIpIOy0iOq4sOqwkuydhCDsg4Htg5zrpbwg6rCA7KeA6rOgXHJcbiAgLy8gICAgICAgICAgICAgIHJlZHVjZXLslYjsl5Ag7IOB7YOc7LSI6riw6rCS7J2EIOqwgOyngOqzoOyeiOyWtOyalCAgIFxyXG5cclxuLy8g7LKr67KI7Ke4IHJlZHV47J2YIFxyXG4vLyBTdG9yZSA9PiBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKSBcclxuLy8g65GQ67KI7Ke4XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlKSAvLyBjcmVhdGVXcmFwcGVyID8gIGNvbmZpZ3VyZVN0b3JlIFN0b3Jl66W8IOqwgOyngOqzoOyeiOuKlCDtlajsiJjtkZztmITsi53sl5DrjIDtlZwg7ZWo7IiYXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyIC8vIHdyYXBwZXIgPyAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb21wb3NlID0gcmVxdWlyZSgncmVkdXgnKS5jb21wb3NlO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlV2l0aERldlRvb2xzID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xuICAgID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xuICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSByZXR1cm4gY29tcG9zZTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG5cbmV4cG9ydHMuZGV2VG9vbHNFbmhhbmNlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXG4gICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xuICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vb3ApIHtcbiAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfTtcbiAgICAgIH07XG4iXSwic291cmNlUm9vdCI6IiJ9