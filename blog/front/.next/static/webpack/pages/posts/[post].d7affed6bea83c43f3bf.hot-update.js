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
  var post = router.query.post; // 카테고리 이름
  // 카테고리 번호 DB idx id 
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uB9AC\uC2A4\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwiZGF0YSIsImlkIiwic3ViamVjdCIsImNvbnRlbnQiLCJkYXRlIiwiaGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEZSxNQUVSQyxJQUZRLEdBRUFGLE1BQU0sQ0FBQ0csS0FGUCxDQUVSRCxJQUZRLEVBRWE7QUFDNUI7QUFDQTs7QUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUksTUFBTUUsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsTUFBRSxFQUFDLEdBRFA7QUFFSUMsV0FBTyxFQUFDLGFBRlo7QUFHSUMsV0FBTyxFQUFDLDJCQUhaO0FBSUlDLFFBQUksRUFBQyxZQUpUO0FBS0lDLE9BQUcsRUFBQztBQUxSLEdBRFMsRUFRVDtBQUNJSixNQUFFLEVBQUMsR0FEUDtBQUVJQyxXQUFPLEVBQUMsY0FGWjtBQUdJQyxXQUFPLEVBQUMsaUNBSFo7QUFJSUMsUUFBSSxFQUFDLFlBSlQ7QUFLSUMsT0FBRyxFQUFDO0FBTFIsR0FSUyxDQUFiO0FBaUJBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLDJEQUFEO0FBQUEsaUJBQ0tQLElBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQVVILENBdkNEOztHQUFNSCxJO1VBQ2FFLGtEOzs7S0FEYkYsSTtBQXlDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdF0uZDdhZmZlZDZiZWE4M2M0M2YzYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC9hZG1pbi86bWVudS9cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cG9zdH0gPSByb3V0ZXIucXVlcnkgLy8g7Lm07YWM6rOg66asIOydtOumhFxyXG4gICAgLy8g7Lm07YWM6rOg66asIOuyiO2YuCBEQiBpZHggaWQgXHJcbiAgICAvLyBzZXJ2ZXIg7JqU7LKt7ZW07IScIGlkIOq0gOugqOuQnCDqsozsi5zrrLzrk6TsnYQg6rCA7KC47Jis7IiY7J6I64+E66GdXHJcbiAgICAvKlxyXG4gICAgICAgIOqyjOyLnOuyiO2YuFxyXG4gICAgICAgIOygnOuqqVxyXG4gICAgICAgIOuCoOynnFxyXG4gICAgICAgIOyhsO2ajOyImFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOlwiMVwiLFxyXG4gICAgICAgICAgICBzdWJqZWN0OlwiaW5nb29zIGJsb2dcIixcclxuICAgICAgICAgICAgY29udGVudDpcIkhUTUzsnYQg7Jm87Kq97JyE7JeQ7ISc67aA7YSwIOyLnOyeke2VtOyEnCDrgrTroKTsmLXri4jri6QuXCIsXHJcbiAgICAgICAgICAgIGRhdGU6XCIyMDIxLTA3LTI4XCIsXHJcbiAgICAgICAgICAgIGhpdDpcIjBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDpcIjJcIixcclxuICAgICAgICAgICAgc3ViamVjdDpcImluZ29vcyBibG9nMlwiLFxyXG4gICAgICAgICAgICBjb250ZW50OlwiSFRNTOydhCBibG9ja+qzvCBpbmxpbmUg7Iqk7YOA7J2866GcIOuCmOuIoOynkeuLiOuLpC5cIixcclxuICAgICAgICAgICAgZGF0ZTpcIjIwMjEtMDctMjhcIixcclxuICAgICAgICAgICAgaGl0OlwiMFwiXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCDrpqzsiqTtirg8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge3Bvc3R9IOumrOyKpO2KuFxyXG4gICAgICAgICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9