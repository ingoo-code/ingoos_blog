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
      게시번호
      제목
      날짜
      조회수
   */

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
      children: [post, " \uB9AC\uC2A4\uD2B8", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxJQUFFLEVBQUMsR0FEUDtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxTQUFPLEVBQUMsMkJBSFo7QUFJSUMsTUFBSSxFQUFDLFlBSlQ7QUFLSUMsS0FBRyxFQUFDO0FBTFIsQ0FEUyxFQVFUO0FBQ0lKLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxjQUZaO0FBR0lDLFNBQU8sRUFBQyxpQ0FIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQVJTLENBQWI7O0FBaUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRGUsTUFFUkMsSUFGUSxHQUVBRixNQUFNLENBQUNHLEtBRlAsQ0FFUkQsSUFGUSxFQUVhO0FBQzVCO0FBQ0E7O0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLDJEQUFEO0FBQUEsaUJBQ0tBLElBREwsc0NBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFhSCxDQXpCRDs7R0FBTUgsSTtVQUNhRSxrRDs7O0tBRGJGLEk7QUEyQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLjdiYWM3ZDMxOTdhZjI5NGQ0OWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYWRtaW4vOm1lbnUvXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCIxXCIsXHJcbiAgICAgICAgc3ViamVjdDpcImluZ29vcyBibG9nXCIsXHJcbiAgICAgICAgY29udGVudDpcIkhUTUzsnYQg7Jm87Kq97JyE7JeQ7ISc67aA7YSwIOyLnOyeke2VtOyEnCDrgrTroKTsmLXri4jri6QuXCIsXHJcbiAgICAgICAgZGF0ZTpcIjIwMjEtMDctMjhcIixcclxuICAgICAgICBoaXQ6XCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCIyXCIsXHJcbiAgICAgICAgc3ViamVjdDpcImluZ29vcyBibG9nMlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJIVE1M7J2EIGJsb2Nr6rO8IGlubGluZSDsiqTtg4DsnbzroZwg64KY64ig7KeR64uI64ukLlwiLFxyXG4gICAgICAgIGRhdGU6XCIyMDIxLTA3LTI4XCIsXHJcbiAgICAgICAgaGl0OlwiMFwiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtwb3N0fSA9IHJvdXRlci5xdWVyeSAvLyDsubTthYzqs6Drpqwg7J2066aEXHJcbiAgICAvLyDsubTthYzqs6Drpqwg67KI7Zi4IERCIGlkeCBpZCBcclxuICAgIC8vIHNlcnZlciDsmpTssq3tlbTshJwgaWQg6rSA66Co65CcIOqyjOyLnOusvOuTpOydhCDqsIDsoLjsmKzsiJjsnojrj4TroZ1cclxuICAgIC8qXHJcbiAgICAgICAg6rKM7Iuc67KI7Zi4XHJcbiAgICAgICAg7KCc66qpXHJcbiAgICAgICAg64Kg7KecXHJcbiAgICAgICAg7KGw7ZqM7IiYXHJcbiAgICAgKi9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCDrpqzsiqTtirg8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge3Bvc3R9IOumrOyKpO2KuFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==