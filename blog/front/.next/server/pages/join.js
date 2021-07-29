(function() {
var exports = {};
exports.id = "pages/join";
exports.ids = ["pages/join"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\components\\FormLayout.jsx";


const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormLayout__Background",
  componentId: "sc-f90v8c-0"
})(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:400px;background:#fff;padding:20px;}"]);

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().back(),
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./hooks/useInput.jsx":
/*!****************************!*\
  !*** ./hooks/useInput.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  const onChange = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setValue(value);
  };

  return {
    value,
    onChange
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./pages/join.jsx":
/*!************************!*\
  !*** ./pages/join.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\pages\\join.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
    아이디
    이름
    패스워드
    패스워드확인
    전화번호
*/

const Join = () => {
  const userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const userphone = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const userpassword = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  const handlePassword = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setPasswordError(userpassword.value !== value); // 1234 === 1234 ture

    setPasswordCheck(value);
  };

  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: termError,
    1: setTermError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  const handleTerm = e => {
    setTermError(e.target.checked !== true);
    setTerm(e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userpassword.value !== passwordCheck) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!term) {
      setTermError(true);
      return;
    }

    console.log({
      userid: userid.value,
      username: username.value,
      userpw: userpassword.value,
      userphone: userphone.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 81
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, username), {}, {
          placeholder: "\uC774\uB984\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 83
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpassword), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 92
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          value: passwordCheck,
          onChange: handlePassword,
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 125
        }, undefined), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: 'red'
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 40
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userphone), {}, {
          placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 85
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: term,
          id: "term",
          onChange: handleTerm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "term",
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC148"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), termError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: 'red'
          },
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uB77C\uACE0..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 35
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/join.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9qb2luLmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsIlN0eWxlZCIsIkZvcm1MYXlvdXQiLCJjaGlsZHJlbiIsIlJvdXRlciIsInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiSm9pbiIsInVzZXJpZCIsInVzZXJuYW1lIiwidXNlcnBob25lIiwidXNlcnBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImhhbmRsZVBhc3N3b3JkIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJoYW5kbGVUZXJtIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVzZXJwdyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVLQUFoQjs7QUFnQkEsTUFBTUMsVUFBVSxH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Q2MsaUJBQUssRUFBQztBQUFQLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTHZCLGVBTUk7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUF1QmxCLFNBQXZCO0FBQWtDLHFCQUFXLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixvQkFNb0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOcEUsZUFPSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFPLEVBQUVPLElBQWhDO0FBQXNDLFlBQUUsRUFBQyxNQUF6QztBQUFnRCxrQkFBUSxFQUFFSTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBUUk7QUFBTyxpQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosRUFTS0YsU0FBUyxpQkFBSTtBQUFLLGVBQUssRUFBRTtBQUFDUyxpQkFBSyxFQUFDO0FBQVAsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUbEIsZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKLGVBV0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUEsa0JBREo7QUF1QkgsQ0F0RUQ7O0FBd0VBLCtEQUFlckIsSUFBZixFOzs7Ozs7Ozs7OztBQ3BGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9qb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBTdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpPT5Sb3V0ZXIuYmFjaygpfT7rkqTroZzqsIDquLA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dCIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgb25DaGFuZ2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQiLCJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuLypcclxuICAgIOyVhOydtOuUlFxyXG4gICAg7J2066aEXHJcbiAgICDtjKjsiqTsm4zrk5xcclxuICAgIO2MqOyKpOybjOuTnO2ZleyduFxyXG4gICAg7KCE7ZmU67KI7Zi4XHJcbiovXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcnBob25lID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycGFzc3dvcmQgPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjayxzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3Isc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcih1c2VycGFzc3dvcmQudmFsdWUgIT09IHZhbHVlKSAvLyAxMjM0ID09PSAxMjM0IHR1cmVcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVybUVycm9yLHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUZXJtID0gZSA9PiB7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGUudGFyZ2V0LmNoZWNrZWQgIT09IHRydWUpIFxyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYodXNlcnBhc3N3b3JkLnZhbHVlICE9PSBwYXNzd29yZENoZWNrKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgIHNldFRlcm1FcnJvcih0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICB1c2VyaWQ6dXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcnB3OnVzZXJwYXNzd29yZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcnBob25lOnVzZXJwaG9uZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwg7ZqM7JuQ6rCA7J6FPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqULlwiLz4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwi7J2066aE66W8IOyeheugpe2VtOyjvOyEuOyalC5cIiAvPiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIvPiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnOulvCDri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqULlwiLz4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7IHBhc3N3b3JkRXJyb3IgJiYgPGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+IH1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcnBob25lfSBwbGFjZWhvbGRlcj1cIuyghO2ZlOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGVybX0gaWQ9XCJ0ZXJtXCIgb25DaGFuZ2U9e2hhbmRsZVRlcm19IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVybVwiPuyVveq0gOyXkCDrj5nsnZjtlbTso7zshYg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0+7JW96rSA7JeQIOuPmeydmO2VtOyjvOudvOqzoC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=