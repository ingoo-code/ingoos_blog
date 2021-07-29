self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJtZW51IiwiaWQiLCJ1cmwiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFDLEVBRFk7QUFJakJDLE9BQUssRUFBQyxFQUpXO0FBT2pCQyxVQUFRLEVBQUM7QUFDTEMsUUFBSSxFQUFDLENBQ0Q7QUFDSUMsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLE1BRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FEQyxFQU1EO0FBQ0lELFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxRQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBTkMsRUFXRDtBQUNJRCxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsUUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQVhDLEVBZ0JEO0FBQ0lELFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxRQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBaEJDLEVBcUJEO0FBQ0lELFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxRQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBckJDO0FBREE7QUFQUSxDQUFyQjs7QUF3Q0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCUixZQUF3QjtBQUFBLE1BQVhTLE1BQVc7O0FBQzdDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUVJO0FBQ0ksYUFBT0YsS0FBUDtBQUhSO0FBS0gsQ0FORDs7QUFRQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc2NWVmNjM5MWU1NTE5NWYxMDQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOntcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBwb3N0czp7XHJcblxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OntcclxuICAgICAgICBtZW51OltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J0hUTUwnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvSFRNTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzInLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvMydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzQnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvNCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9