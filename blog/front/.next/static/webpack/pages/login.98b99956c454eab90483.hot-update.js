self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var initialState = {
  user: {},
  posts: {},
  category: {
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
  }
}; // const reducer = (state = initialState,action) => {
//     switch(action.type){
//         default:
//             return state
//     }
// }

var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_0__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJtZW51IiwiaWQiLCJ1cmwiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUMsRUFEWTtBQUlqQkMsT0FBSyxFQUFDLEVBSlc7QUFPakJDLFVBQVEsRUFBQztBQUNMQyxRQUFJLEVBQUMsQ0FDRDtBQUNJQyxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsTUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQURDLEVBTUQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FOQyxFQVdEO0FBQ0lELFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxRQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBWEMsRUFnQkQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FoQkMsRUFxQkQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FyQkM7QUFEQTtBQVBRLENBQXJCLEMsQ0F1Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLE9BQU8sR0FBR0Msc0RBQWUsQ0FBQztBQUM1QkMsT0FBSyxFQUFFLGlCQUFxQjtBQUFBLFFBQXBCQyxLQUFvQix1RUFBZCxFQUFjO0FBQUEsUUFBWEMsTUFBVzs7QUFDeEIsWUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0k7QUFDSSxlQUFPRixLQUFQO0FBRlI7QUFJSCxHQU4yQjtBQU81QlQsTUFBSSxFQUFKQSwwQ0FBSUE7QUFQd0IsQ0FBRCxDQUEvQjtBQVVBLCtEQUFlTSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjk4Yjk5OTU2YzQ1NGVhYjkwNDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHBvc3RzOntcclxuXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcnk6e1xyXG4gICAgICAgIG1lbnU6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonMScsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTonSFRNTCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wb3N0cy9IVE1MJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonMicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonMycsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonNCcsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonNScsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGU9e30sYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=