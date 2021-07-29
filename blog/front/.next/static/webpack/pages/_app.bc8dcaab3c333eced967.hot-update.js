self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
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
var USER_LOGIN = "USER_LOGIN";
var USER_LOGOUT = "USER_LOGOUT";
var UserLoginAction = function UserLoginAction() {
  return {
    type: USER_LOGIN
  };
};
_c = UserLoginAction;
var UserLogoutAction = function UserLogoutAction() {
  return {
    type: USER_LOGOUT
  };
};
_c2 = UserLogoutAction;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2;

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLogoutAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJtZW51IiwiaWQiLCJ1cmwiLCJVU0VSX0xPR0lOIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJ0eXBlIiwiVXNlckxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUMsRUFEWTtBQUlqQkMsT0FBSyxFQUFDLEVBSlc7QUFPakJDLFVBQVEsRUFBQztBQUNMQyxRQUFJLEVBQUMsQ0FDRDtBQUNJQyxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsTUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQURDLEVBTUQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FOQyxFQVdEO0FBQ0lELFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxRQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBWEMsRUFnQkQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FoQkMsRUFxQkQ7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FyQkM7QUFEQTtBQVBRLENBQXJCO0FBc0NBLElBQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNqQyxTQUFPO0FBQ0hDLFFBQUksRUFBQ0g7QUFERixHQUFQO0FBR0gsQ0FKTTtLQUFNRSxlO0FBTU4sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ2xDLFNBQU87QUFDSEQsUUFBSSxFQUFDRjtBQURGLEdBQVA7QUFHSCxDQUpNO01BQU1HLGdCOztBQU1iLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QmIsWUFBd0I7QUFBQSxNQUFYYyxNQUFXOztBQUM3QyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFFSTtBQUNJLGFBQU9HLEtBQVA7QUFIUjtBQUtILENBTkQ7O0FBUUEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYzhkY2FhYjNjMzMzZWNlZDk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjp7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgcG9zdHM6e1xyXG5cclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeTp7XHJcbiAgICAgICAgbWVudTpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OidIVE1MJyxcclxuICAgICAgICAgICAgICAgIHVybDonL3Bvc3RzL0hUTUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOicyJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgICAgICAgICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiczJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgICAgICAgICAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOic0JyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgICAgICAgICAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOic1JyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgICAgICAgICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBVU0VSX0xPR0lOID0gXCJVU0VSX0xPR0lOXCJcclxuY29uc3QgVVNFUl9MT0dPVVQgPSBcIlVTRVJfTE9HT1VUXCJcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR09VVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=