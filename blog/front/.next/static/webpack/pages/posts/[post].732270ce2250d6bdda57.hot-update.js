self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./pages/posts/[post].jsx":
/*!********************************!*\
  !*** ./pages/posts/[post].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\pages\\posts\\[post].jsx",
    _this = undefined,
    _s = $RefreshSig$();

// /admin/:menu/




var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var post = router.query.post; // 카테고리 번호 DB idx id 
  // server 요청해서 id 관련된 게시물들을 가져올수있도록

  /*
      게시번호
      제목
      날짜
      조회수
   */

  var data = [{
    id: "1",
    subject: "ingoos blog",
    date: "2021-07-28",
    hit: "0"
  }, {
    id: "2",
    subject: "ingoos blog2",
    date: "2021-07-28",
    hit: "0"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uB9AC\uC2A4\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwiZGF0YSIsImlkIiwic3ViamVjdCIsImRhdGUiLCJoaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURlLE1BRVJDLElBRlEsR0FFQUYsTUFBTSxDQUFDRyxLQUZQLENBRVJELElBRlEsRUFHZjtBQUNBOztBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSSxNQUFNRSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxNQUFFLEVBQUMsR0FEUDtBQUVJQyxXQUFPLEVBQUMsYUFGWjtBQUdJQyxRQUFJLEVBQUMsWUFIVDtBQUlJQyxPQUFHLEVBQUM7QUFKUixHQURTLEVBT1Q7QUFDSUgsTUFBRSxFQUFDLEdBRFA7QUFFSUMsV0FBTyxFQUFDLGNBRlo7QUFHSUMsUUFBSSxFQUFDLFlBSFQ7QUFJSUMsT0FBRyxFQUFDO0FBSlIsR0FQUyxDQUFiO0FBZUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSxpQkFDS04sSUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBVUgsQ0FyQ0Q7O0dBQU1ILEk7VUFDYUUsa0Q7OztLQURiRixJO0FBdUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS43MzIyNzBjZTIyNTBkNmJkZGE1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FkbWluLzptZW51L1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtwb3N0fSA9IHJvdXRlci5xdWVyeVxyXG4gICAgLy8g7Lm07YWM6rOg66asIOuyiO2YuCBEQiBpZHggaWQgXHJcbiAgICAvLyBzZXJ2ZXIg7JqU7LKt7ZW07IScIGlkIOq0gOugqOuQnCDqsozsi5zrrLzrk6TsnYQg6rCA7KC47Jis7IiY7J6I64+E66GdXHJcbiAgICAvKlxyXG4gICAgICAgIOqyjOyLnOuyiO2YuFxyXG4gICAgICAgIOygnOuqqVxyXG4gICAgICAgIOuCoOynnFxyXG4gICAgICAgIOyhsO2ajOyImFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOlwiMVwiLFxyXG4gICAgICAgICAgICBzdWJqZWN0OlwiaW5nb29zIGJsb2dcIixcclxuICAgICAgICAgICAgZGF0ZTpcIjIwMjEtMDctMjhcIixcclxuICAgICAgICAgICAgaGl0OlwiMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOlwiMlwiLFxyXG4gICAgICAgICAgICBzdWJqZWN0OlwiaW5nb29zIGJsb2cyXCIsXHJcbiAgICAgICAgICAgIGRhdGU6XCIyMDIxLTA3LTI4XCIsXHJcbiAgICAgICAgICAgIGhpdDpcIjBcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwg66as7Iqk7Yq4PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICAgICAgICAgIHtwb3N0fSDrpqzsiqTtirhcclxuICAgICAgICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==