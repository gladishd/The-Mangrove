"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n\n\n\nvar Users = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Users, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Users);\n    function Users(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, Users);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {};\n        _this.getUsers = _this.getUsers.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this));\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Users, [\n        {\n            key: \"getUsers\",\n            value: function getUsers(e) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var res;\n                    return _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                e.preventDefault();\n                                _ctx.next = 3;\n                                return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/users\");\n                            case 3:\n                                res = _ctx.sent;\n                                console.log(\"hi\");\n                                console.log(\"res\", res);\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return _this.getUsers(e);\n                        },\n                        children: \"Fetch Users\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deangladish/Da-Repo/pages/users.js\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/pages/users.js\",\n                    lineNumber: 21,\n                    columnNumber: 12\n                }, this);\n            }\n        }\n    ]);\n    return Users;\n}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUVWLFNBQVcsaUJBQVg7Ozs7YUFBTUUsS0FBSyxDQUNaQyxLQUFLOzs7a0NBQ1RBLEtBQUssRUFBQztRQUNaLE1BQUtDLEtBQUssR0FBRyxFQUVaO1FBQ0QsTUFBS0MsUUFBUSxHQUFHLE1BQUtBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLGdHQUFLOzs7OztZQUdwQ0QsR0FBUSxFQUFSQSxVQUFRO21CQUFkLFNBQU1BLFFBQVEsQ0FBQ0UsQ0FBQzt1QkFBaEIsNk9BQWtCO3dCQUVaQyxHQUFHOzs7O2dDQURQRCxDQUFDLENBQUNFLGNBQWMsRUFBRTs7dUNBQ0ZULGdEQUFTLENBQUUsWUFBVSxDQUFFOztnQ0FBbkNRLEdBQUcsWUFBZ0M7Z0NBQ3ZDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0NBQ2pCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVKLEdBQUcsQ0FBQzs7Ozs7O2lCQUN4QjthQUFBOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLHFCQUFPLDhEQUFDQyxLQUFHOzhCQUNULDRFQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUVULFNBQUFBLENBQUM7bUNBQUksTUFBS0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7eUJBQUE7a0NBQUUsYUFBVzs7Ozs7NEJBQVM7Ozs7O3dCQUN4RDthQUNQOzs7O0NBQ0YsQ0FyQmtDTix3REFBZSxDQXFCakQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy5qcz8wMDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gICAgdGhpcy5nZXRVc2VycyA9IHRoaXMuZ2V0VXNlcnMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcnMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnNgKVxuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gdGhpcy5nZXRVc2VycyhlKX0+RmV0Y2ggVXNlcnM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJVc2VycyIsInByb3BzIiwic3RhdGUiLCJnZXRVc2VycyIsImJpbmQiLCJlIiwicmVzIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});