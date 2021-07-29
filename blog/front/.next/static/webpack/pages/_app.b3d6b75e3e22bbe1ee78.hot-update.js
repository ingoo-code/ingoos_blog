self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


 // redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지. 

var configureStore = function configureStore() {
  var middlewares = [];
  var enhancer =  false ? 0 : composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware.apply(void 0, middlewares));
  var Store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, enhancer);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQ2ZDLENBRGUsR0FFZkMsbUJBQW1CLENBQUNDLHdEQUFBLFNBQW1CSixXQUFuQixDQUFELENBRnJCO0FBR0EsTUFBTUssS0FBSyxHQUFHQyxrREFBVyxDQUFDQyw4Q0FBRCxFQUFTTixRQUFULENBQXpCO0FBQ0EsU0FBT0ksS0FBUDtBQUNILENBUEQsQyxDQU9FO0FBQ0E7QUFFRjtBQUNBO0FBQ0E7OztBQUNBLElBQU1HLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ1YsY0FBRCxDQUE3QixDLENBQThDOztBQUU5QywrREFBZVMsT0FBZixFLENBQXVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjNkNmI3NWUzZTIyYmJlMWVlNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuXHJcblxyXG4vLyByZWR1eCBtaWRkbGV3YXJlIOyCrOyaqe2VoOyImOyeiOuKlCDshKTsoJXquYzsp4DtlZjqs6Ag6re466as6rOgIGRldnRvb2xz7IKs7Jqp6rmM7KeALiBcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKSAgICBcclxuICAgIHJldHVybiBTdG9yZVxyXG59IC8vIGNyZWF0ZVN0b3JlIChyZWR1Y2VyKSA9PT0gY3JlYXRlQ29udGV4dCAo7IOB7YOc7LSI6riw6rCSKSDstIjquLDqsJLsnYQg7IOB7YOc66W8IOqwgOyngOqzoFxyXG4gIC8vICAgICAgICAgICAgICByZWR1Y2Vy7JWI7JeQIOyDge2DnOy0iOq4sOqwkuydhCDqsIDsp4Dqs6DsnojslrTsmpQgICBcclxuXHJcbi8vIOyyq+uyiOynuCByZWR1eOydmCBcclxuLy8gU3RvcmUgPT4gY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSkgXHJcbi8vIOuRkOuyiOynuFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSkgLy8gY3JlYXRlV3JhcHBlciA/ICBjb25maWd1cmVTdG9yZSBTdG9yZeulvCDqsIDsp4Dqs6DsnojripQg7ZWo7IiY7ZGc7ZiE7Iud7JeQ64yA7ZWcIO2VqOyImFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciAvLyB3cmFwcGVyID8gIl0sInNvdXJjZVJvb3QiOiIifQ==