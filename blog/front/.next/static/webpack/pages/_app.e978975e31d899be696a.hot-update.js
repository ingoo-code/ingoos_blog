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


var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); // createWrapper ?  configureStore Store를 가지고있는 함수표현식에대한 함수

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUlBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixNQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FDZkMsQ0FEZSxHQUVmQyw2RUFBbUIsQ0FBQ0Msd0RBQUEsU0FBbUJKLFdBQW5CLENBQUQsQ0FGckI7QUFHQSxNQUFNSyxLQUFLLEdBQUdDLGtEQUFXLENBQUNDLDhDQUFELEVBQVNOLFFBQVQsQ0FBekI7QUFDQSxTQUFPSSxLQUFQO0FBQ0gsQ0FQRCxDLENBT0U7QUFDQTtBQUVGO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHQyxpRUFBYSxDQUFDVixjQUFELEVBQWdCO0FBQ3pDVyxPQUFLO0FBRG9DLENBQWhCLENBQTdCLEMsQ0FFRzs7QUFFSCwrREFBZUYsT0FBZixFLENBQXVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTk3ODk3NWUzMWQ4OTliZTY5NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcblxyXG5cclxuLy8gcmVkdXggbWlkZGxld2FyZSDsgqzsmqntlaDsiJjsnojripQg7ISk7KCV6rmM7KeA7ZWY6rOgIOq3uOumrOqzoCBkZXZ0b29sc+yCrOyaqeq5jOyngC4gXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW11cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcixlbmhhbmNlcikgICAgXHJcbiAgICByZXR1cm4gU3RvcmVcclxufSAvLyBjcmVhdGVTdG9yZSAocmVkdWNlcikgPT09IGNyZWF0ZUNvbnRleHQgKOyDge2DnOy0iOq4sOqwkikg7LSI6riw6rCS7J2EIOyDge2DnOulvCDqsIDsp4Dqs6BcclxuICAvLyAgICAgICAgICAgICAgcmVkdWNlcuyViOyXkCDsg4Htg5zstIjquLDqsJLsnYQg6rCA7KeA6rOg7J6I7Ja07JqUICAgXHJcblxyXG4vLyDssqvrsojsp7ggcmVkdXjsnZggXHJcbi8vIFN0b3JlID0+IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpIFxyXG4vLyDrkZDrsojsp7hcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxufSkgLy8gY3JlYXRlV3JhcHBlciA/ICBjb25maWd1cmVTdG9yZSBTdG9yZeulvCDqsIDsp4Dqs6DsnojripQg7ZWo7IiY7ZGc7ZiE7Iud7JeQ64yA7ZWcIO2VqOyImFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciAvLyB3cmFwcGVyID8gIl0sInNvdXJjZVJvb3QiOiIifQ==