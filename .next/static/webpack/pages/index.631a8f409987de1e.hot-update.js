"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/LogoutComponent.js":
/*!**********************************!*\
  !*** ./pages/LogoutComponent.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// pages/login.js\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Login = function(param) {\n    var name = param.name, cookieSet = param.cookieSet;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"user\"\n    ]), 2), cookie = ref[0], setCookie = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"We are using the effect hook on the logout component!\");\n        console.log(\"On the Logout component we are finding the cookie value, what is it?\", cookie);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function(e) {\n                return console.log(\"You clicked the button!\");\n            },\n            children: \"If you see this button then you are on the right track.\"\n        }, void 0, false, {\n            fileName: \"/Users/deangladish/Da-Repo/pages/LogoutComponent.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Login, \"GAo3CUkbRcSpxkGm9wB5kmzjob0=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2dvdXRDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCOzs7O0FBQXlDO0FBQ0E7QUFDVDtBQUVoQyxJQUFNSSxLQUFLLEdBQUcsZ0JBQXlCO1FBQXRCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUM5QixJQUE0Qk4sR0FBb0Isb0ZBQXBCQSx3REFBVSxDQUFDO1FBQUMsTUFBTTtLQUFDLENBQUMsTUFBekNPLE1BQU0sR0FBZVAsR0FBb0IsR0FBbkMsRUFBRVEsU0FBUyxHQUFJUixHQUFvQixHQUF4QjtJQUV4QkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxDQUFDO1FBQ3BFRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzRUFBc0UsRUFBRUgsTUFBTSxDQUFDO0tBQzVGLENBQUM7SUFFRixxQkFDRTtrQkFDRSw0RUFBQ0ksUUFBTTtZQUFDQyxPQUFPLEVBQUVDLFNBQUFBLENBQUM7dUJBQUlKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO2FBQUE7c0JBQUUseURBRTlEOzs7OztpQkFBUztxQkFDUixDQUNKO0NBQ0Y7R0FmS04sS0FBSzs7UUFDbUJKLG9EQUFVOzs7QUFEbENJLEtBQUFBLEtBQUs7QUFpQlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTG9nb3V0Q29tcG9uZW50LmpzPzdkZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbG9naW4uanNcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBMb2dpbiA9ICh7IG5hbWUsIGNvb2tpZVNldCB9KSA9PiB7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJXZSBhcmUgdXNpbmcgdGhlIGVmZmVjdCBob29rIG9uIHRoZSBsb2dvdXQgY29tcG9uZW50IVwiKVxuICAgIGNvbnNvbGUubG9nKFwiT24gdGhlIExvZ291dCBjb21wb25lbnQgd2UgYXJlIGZpbmRpbmcgdGhlIGNvb2tpZSB2YWx1ZSwgd2hhdCBpcyBpdD9cIiwgY29va2llKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiBjb25zb2xlLmxvZyhcIllvdSBjbGlja2VkIHRoZSBidXR0b24hXCIpfT5cbiAgICAgICAgSWYgeW91IHNlZSB0aGlzIGJ1dHRvbiB0aGVuIHlvdSBhcmUgb24gdGhlIHJpZ2h0IHRyYWNrLlxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJuYW1lcyI6WyJ1c2VDb29raWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJMb2dpbiIsIm5hbWUiLCJjb29raWVTZXQiLCJjb29raWUiLCJzZXRDb29raWUiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/LogoutComponent.js\n"));

/***/ })

});