self["webpackHotUpdate_N_E"]("pages/login",{

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
/* harmony import */ var C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case USER_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          IsLogin: true
        })
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          IsLogin: false
        })
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJtZW51IiwiaWQiLCJ1cmwiLCJVU0VSX0xPR0lOIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJ0eXBlIiwiVXNlckxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIklzTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBQyxFQURZO0FBSWpCQyxPQUFLLEVBQUMsRUFKVztBQU9qQkMsVUFBUSxFQUFDO0FBQ0xDLFFBQUksRUFBQyxDQUNEO0FBQ0lDLFFBQUUsRUFBQyxHQURQO0FBRUlGLGNBQVEsRUFBQyxNQUZiO0FBR0lHLFNBQUcsRUFBQztBQUhSLEtBREMsRUFNRDtBQUNJRCxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsUUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQU5DLEVBV0Q7QUFDSUQsUUFBRSxFQUFDLEdBRFA7QUFFSUYsY0FBUSxFQUFDLFFBRmI7QUFHSUcsU0FBRyxFQUFDO0FBSFIsS0FYQyxFQWdCRDtBQUNJRCxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsUUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQWhCQyxFQXFCRDtBQUNJRCxRQUFFLEVBQUMsR0FEUDtBQUVJRixjQUFRLEVBQUMsUUFGYjtBQUdJRyxTQUFHLEVBQUM7QUFIUixLQXJCQztBQURBO0FBUFEsQ0FBckI7QUFzQ0EsSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDLFNBQU87QUFDSEMsUUFBSSxFQUFDSDtBQURGLEdBQVA7QUFHSCxDQUpNO0tBQU1FLGU7QUFNTixJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsU0FBTztBQUNIRCxRQUFJLEVBQUNGO0FBREYsR0FBUDtBQUdILENBSk07TUFBTUcsZ0I7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCYixZQUF3QjtBQUFBLE1BQVhjLE1BQVc7O0FBQzdDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtILFVBQUw7QUFDSSw2Q0FDT00sS0FEUDtBQUVJWixZQUFJLGtDQUNHWSxLQUFLLENBQUNaLElBRFQ7QUFFQWMsaUJBQU8sRUFBQztBQUZSO0FBRlI7O0FBT0osU0FBS1AsV0FBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlaLFlBQUksa0NBQ0dZLEtBQUssQ0FBQ1osSUFEVDtBQUVBYyxpQkFBTyxFQUFDO0FBRlI7QUFGUjs7QUFPSjtBQUNJLGFBQU9GLEtBQVA7QUFsQlI7QUFvQkgsQ0FyQkQ7O0FBdUJBLCtEQUFlRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmMwODVmNDQxNGRiNzMyYTI4OGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOntcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBwb3N0czp7XHJcblxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OntcclxuICAgICAgICBtZW51OltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J0hUTUwnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvSFRNTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzInLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvMydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzQnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvNCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU4gPSBcIlVTRVJfTE9HSU5cIlxyXG5jb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HT1VUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==