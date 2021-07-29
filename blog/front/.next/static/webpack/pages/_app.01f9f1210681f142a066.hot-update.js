self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var initialState = {
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

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


/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var initialState = {
  user: {},
  posts: {},
  category: {}
}; // const reducer = (state = initialState,action) => {
//     switch(action.type){
//         default:
//             return state
//     }
// }

var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXIiLCJwb3N0cyIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFDLENBQ0Q7QUFDSUMsTUFBRSxFQUFDLEdBRFA7QUFFSUMsWUFBUSxFQUFDLE1BRmI7QUFHSUMsT0FBRyxFQUFDO0FBSFIsR0FEQyxFQU1EO0FBQ0lGLE1BQUUsRUFBQyxHQURQO0FBRUlDLFlBQVEsRUFBQyxRQUZiO0FBR0lDLE9BQUcsRUFBQztBQUhSLEdBTkMsRUFXRDtBQUNJRixNQUFFLEVBQUMsR0FEUDtBQUVJQyxZQUFRLEVBQUMsUUFGYjtBQUdJQyxPQUFHLEVBQUM7QUFIUixHQVhDLEVBZ0JEO0FBQ0lGLE1BQUUsRUFBQyxHQURQO0FBRUlDLFlBQVEsRUFBQyxRQUZiO0FBR0lDLE9BQUcsRUFBQztBQUhSLEdBaEJDLEVBcUJEO0FBQ0lGLE1BQUUsRUFBQyxHQURQO0FBRUlDLFlBQVEsRUFBQyxRQUZiO0FBR0lDLE9BQUcsRUFBQztBQUhSLEdBckJDO0FBRFksQ0FBckI7O0FBOEJBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF4Qk4sWUFBd0I7QUFBQSxNQUFYTyxNQUFXOztBQUMzQyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSTtBQUNJLGFBQU9GLEtBQVA7QUFGUjtBQUlILENBTEQ7O0FBT0EsK0RBQWVELE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNTCxZQUFZLEdBQUc7QUFDakJTLE1BQUksRUFBQyxFQURZO0FBSWpCQyxPQUFLLEVBQUMsRUFKVztBQU9qQlAsVUFBUSxFQUFDO0FBUFEsQ0FBckIsQyxDQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxPQUFPLEdBQUdNLHNEQUFlLENBQUM7QUFDNUJDLE9BQUssRUFBRSxpQkFBcUI7QUFBQSxRQUFwQk4sS0FBb0IsdUVBQWQsRUFBYztBQUFBLFFBQVhDLE1BQVc7O0FBQ3hCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJO0FBQ0ksZUFBT0YsS0FBUDtBQUZSO0FBSUgsR0FOMkI7QUFPNUJHLE1BQUksRUFBSkEsMENBQUlBO0FBUHdCLENBQUQsQ0FBL0I7QUFVQSwrREFBZUosT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAxZjlmMTIxMDY4MWYxNDJhMDY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtZW51OltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J0hUTUwnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy9IVE1MJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgICAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOic0JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOntcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBwb3N0czp7XHJcblxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OntcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGU9e30sYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=