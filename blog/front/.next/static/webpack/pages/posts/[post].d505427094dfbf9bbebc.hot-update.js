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



var data = [{
  id: "1",
  subject: "ingoos blog",
  content: "HTML을 왼쪽위에서부터 시작해서 내려옵니다.",
  date: "2021-07-28",
  hit: "0"
}, {
  id: "2",
  subject: "ingoos blog2",
  content: "HTML을 block과 inline 스타일로 나눠집니다.",
  date: "2021-07-28",
  hit: "0"
}];

var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var post = router.query.post; // 카테고리 이름
  // 카테고리 번호 DB idx id 
  // server 요청해서 id 관련된 게시물들을 가져올수있도록

  /*
   
      제목
      내용
      날짜
     */

  var list = data.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.subject
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uB9AC\uC2A4\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwibGlzdCIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFNBQU8sRUFBQywyQkFIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQURTLEVBUVQ7QUFDSUosSUFBRSxFQUFDLEdBRFA7QUFFSUMsU0FBTyxFQUFDLGNBRlo7QUFHSUMsU0FBTyxFQUFDLGlDQUhaO0FBSUlDLE1BQUksRUFBQyxZQUpUO0FBS0lDLEtBQUcsRUFBQztBQUxSLENBUlMsQ0FBYjs7QUFpQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEZSxNQUVSQyxJQUZRLEdBRUFGLE1BQU0sQ0FBQ0csS0FGUCxDQUVSRCxJQUZRLEVBRWE7QUFDNUI7QUFDQTs7QUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUksTUFBTUUsSUFBSSxHQUFHWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFBQyxDQUFDLEVBQUU7QUFDckIsd0JBQ0k7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQUtBLENBQUMsQ0FBQ1g7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBS1csQ0FBQyxDQUFDVjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFLVSxDQUFDLENBQUNUO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFTSCxHQVZZLENBQWI7QUFXQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQywyREFBRDtBQUFBLGlCQUNLSyxJQURMLHNDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBYUgsQ0FwQ0Q7O0dBQU1ILEk7VUFDYUUsa0Q7OztLQURiRixJO0FBc0NOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS5kNTA1NDI3MDk0ZGZiZjliYmViYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FkbWluLzptZW51L1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOlwiMVwiLFxyXG4gICAgICAgIHN1YmplY3Q6XCJpbmdvb3MgYmxvZ1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJIVE1M7J2EIOyZvOyqveychOyXkOyEnOu2gO2EsCDsi5zsnpHtlbTshJwg64K066Ck7Ji164uI64ukLlwiLFxyXG4gICAgICAgIGRhdGU6XCIyMDIxLTA3LTI4XCIsXHJcbiAgICAgICAgaGl0OlwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiMlwiLFxyXG4gICAgICAgIHN1YmplY3Q6XCJpbmdvb3MgYmxvZzJcIixcclxuICAgICAgICBjb250ZW50OlwiSFRNTOydhCBibG9ja+qzvCBpbmxpbmUg7Iqk7YOA7J2866GcIOuCmOuIoOynkeuLiOuLpC5cIixcclxuICAgICAgICBkYXRlOlwiMjAyMS0wNy0yOFwiLFxyXG4gICAgICAgIGhpdDpcIjBcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cG9zdH0gPSByb3V0ZXIucXVlcnkgLy8g7Lm07YWM6rOg66asIOydtOumhFxyXG4gICAgLy8g7Lm07YWM6rOg66asIOuyiO2YuCBEQiBpZHggaWQgXHJcbiAgICAvLyBzZXJ2ZXIg7JqU7LKt7ZW07IScIGlkIOq0gOugqOuQnCDqsozsi5zrrLzrk6TsnYQg6rCA7KC47Jis7IiY7J6I64+E66GdXHJcbiAgICAvKlxyXG4gICAgIFxyXG4gICAgICAgIOygnOuqqVxyXG4gICAgICAgIOuCtOyaqVxyXG4gICAgICAgIOuCoOynnFxyXG5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbGlzdCA9IGRhdGEubWFwKHY9PntcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57di5zdWJqZWN0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LmNvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3YuZGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IOumrOyKpO2KuDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdH0g66as7Iqk7Yq4XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9