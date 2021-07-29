self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\components\\Accordion.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var Accordion = function Accordion(_ref) {
  _s();

  var visible = _ref.visible,
      handleToggle = _ref.handleToggle;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state;
  }),
      menu = _useSelector.menu;

  console.log(menu);

  var handleClick = function handleClick() {
    handleToggle();
  };

  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handleToggle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 73
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 54
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
      flag: visible,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Accordion, "0RD9ex7wdSp2BDZkcsO7mmhJ7Ss=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Accordion__AccordionMenu",
  componentId: "sc-wg3e6s-0"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:7vh 0;display:", ";& > ul{display:flex;flex-direction:column;}& > ul > li{margin-top:20px;text-align:center;}"], function (props) {
  return props.flag ? 'block' : 'none';
});
_c2 = AccordionMenu;

var _c, _c2;

$RefreshReg$(_c, "Accordion");
$RefreshReg$(_c2, "AccordionMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInZpc2libGUiLCJoYW5kbGVUb2dnbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWVudSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImNhdGVnb3J5IiwibWFwIiwidiIsInVybCIsImlkIiwiQWNjb3JkaW9uTWVudSIsIlN0eWxlZCIsInByb3BzIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRCO0FBQUE7O0FBQUEsTUFBMUJDLE9BQTBCLFFBQTFCQSxPQUEwQjtBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQUEscUJBRTNCQyx3REFBVyxDQUFFLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFUO0FBQUEsR0FBRixDQUZnQjtBQUFBLE1BRW5DQyxJQUZtQyxnQkFFbkNBLElBRm1DOztBQUcxQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBRUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0Qk4sZ0JBQVk7QUFDZixHQUZEOztBQUlBLE1BQU1PLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxHQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFLO0FBQzVCLHdCQUFPO0FBQWUsYUFBTyxFQUFFVCxZQUF4QjtBQUFBLDZCQUFzQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRVMsQ0FBQyxDQUFDQyxHQUFkO0FBQUEsK0JBQW1CO0FBQUEsb0JBQUlELENBQUMsQ0FBQ0Y7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEMsT0FBU0UsQ0FBQyxDQUFDRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRmdCLENBQWpCO0FBSUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQWUsVUFBSSxFQUFFWixPQUFyQjtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tRO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQVNILENBdEJEOztHQUFNVCxTO1VBRWFHLG9EOzs7S0FGYkgsUztBQXdCTiwrREFBZUEsU0FBZjtBQUVBLElBQU1jLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdU1BU1QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBM0I7QUFBQSxDQVRJLENBQW5CO01BQU1ILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGVhNzE3NjViZmQ3NzY4MzE1ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9ICh7dmlzaWJsZSxoYW5kbGVUb2dnbGV9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge21lbnV9ID0gdXNlU2VsZWN0b3IoIChzdGF0ZSk9PnN0YXRlIClcclxuICAgIGNvbnNvbGUubG9nKG1lbnUpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlVG9nZ2xlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCAodik9PntcclxuICAgICAgICByZXR1cm4gPGxpIGtleT17di5pZH0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT48TGluayBocmVmPXt2LnVybH0+PGE+e3YuY2F0ZWdvcnl9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25NZW51IGZsYWc9e3Zpc2libGV9PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXHJcblxyXG5jb25zdCBBY2NvcmRpb25NZW51ID0gU3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmxlZnQ6MHB4O1xyXG50b3A6MTB2aDtcclxuei1pbmRleDo1O1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbnBhZGRpbmc6N3ZoIDA7XHJcblxyXG5kaXNwbGF5OiR7cHJvcHM9PiAocHJvcHMuZmxhZyA/ICdibG9jaycgOiAnbm9uZScpIH07XHJcblxyXG4mID4gdWwge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG59XHJcblxyXG4mID4gdWwgPiBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5gXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9