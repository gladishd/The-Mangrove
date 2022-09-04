"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signupForm",{

/***/ "./pages/signupForm.js":
/*!*****************************!*\
  !*** ./pages/signupForm.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n\nvar SignupForm = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SignupForm, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SignupForm);\n    function SignupForm(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, SignupForm);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            showFields: null\n        };\n        _this.onSubmit = _this.onSubmit.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this));\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SignupForm, [\n        {\n            key: \"onSubmit\",\n            value: function onSubmit(e) {\n                e.preventDefault();\n                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(\"Is this you? John Doe, Democrat, Pennsylvania Senator-you'll have a base rudimentary profile if you like.\", {\n                    buttons: {\n                        cancel: \"Cancel my new candidacy!\",\n                        catch: {\n                            text: \"Yes, streamline signup with more verification!\",\n                            value: \"catch\"\n                        },\n                        signup: true\n                    }\n                }).then(function(value) {\n                    switch(value){\n                        case \"signup\":\n                            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(\"Thank you for making this possible and for finding a way to, instead of automating this, find easy-to-access info on the political sphere.\");\n                            break;\n                        case \"catch\":\n                            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(\"Provide info like identity/background checks that will have to be verified!\", \"After it's verified, you'll have full access to your already-existing profile and can add stuff like a detailed bio, make posts, etc...\", \"success\");\n                            break;\n                        default:\n                            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(\"You could submit information about new candidates, as well as have those new candidates create profiles for themselves. If you're over-whelmed or this is too much information jam-packed into one page then take a break and try again.\");\n                    }\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    style: {\n                        display: \"flex\",\n                        textAlign: \"justify\",\n                        justifyContent: \"space-between\",\n                        height: \"100vh\",\n                        flexDirection: \"column\",\n                        margin: \"10em\"\n                    },\n                    onSubmit: function(e) {\n                        return _this.onSubmit(e);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            controlId: \"formBasicEmail\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                                    children: \"Email address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                    type: \"email\",\n                                    placeholder: \"Enter email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Text, {\n                                    className: \"text-muted\",\n                                    children: \"We'll never share your email with anyone else.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            controlId: \"formBasicPassword\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                    type: \"password\",\n                                    placeholder: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            controlId: \"formBasicCheckbox\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Check, {\n                                type: \"checkbox\",\n                                onChange: console.log(\"hello\"),\n                                label: \"Sign me up as a governor, senator, representative, state senator, or state representative.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                                    children: \"New Candidate\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                    placeholder: \"New Politician Signing Up\",\n                                    disabled: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                                    children: \"Match me with a profile already created\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Select, {\n                                    disabled: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"Disabled select\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                            className: \"mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Check, {\n                                type: \"checkbox\",\n                                label: \"Can't check this\",\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                            htmlFor: \"inputPassword5\",\n                            children: \"Biography\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                            as: \"textarea\",\n                            id: \"inputPassword5\",\n                            \"aria-describedby\": \"passwordHelpBlock\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Text, {\n                            id: \"passwordHelpBlock\",\n                            muted: true,\n                            children: \"Your biography must be 18-20 paragraphs long, contain letters and numbers, and must not contain spaces, special characters, or emoji unless you're a politician. Especially since we're going to scrape data on all these politicians we need to find the centralized form and that form is you.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            variant: \"primary\",\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                            lineNumber: 99,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deangladish/Da-Repo/pages/signupForm.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return SignupForm;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cEZvcm0uanM/MDBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXG5cbmNsYXNzIFNpZ251cEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ZpZWxkczogbnVsbFxuICAgIH1cbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc3dhbChcIklzIHRoaXMgeW91PyBKb2huIERvZSwgRGVtb2NyYXQsIFBlbm5zeWx2YW5pYSBTZW5hdG9yLXlvdSdsbCBoYXZlIGEgYmFzZSBydWRpbWVudGFyeSBwcm9maWxlIGlmIHlvdSBsaWtlLlwiLCB7XG4gICAgICBidXR0b25zOiB7XG4gICAgICAgIGNhbmNlbDogXCJDYW5jZWwgbXkgbmV3IGNhbmRpZGFjeSFcIixcbiAgICAgICAgY2F0Y2g6IHtcbiAgICAgICAgICB0ZXh0OiBcIlllcywgc3RyZWFtbGluZSBzaWdudXAgd2l0aCBtb3JlIHZlcmlmaWNhdGlvbiFcIixcbiAgICAgICAgICB2YWx1ZTogXCJjYXRjaFwiLFxuICAgICAgICB9LFxuICAgICAgICBzaWdudXA6IHRydWUsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuXG4gICAgICAgICAgY2FzZSBcInNpZ251cFwiOlxuICAgICAgICAgICAgc3dhbChcIlRoYW5rIHlvdSBmb3IgbWFraW5nIHRoaXMgcG9zc2libGUgYW5kIGZvciBmaW5kaW5nIGEgd2F5IHRvLCBpbnN0ZWFkIG9mIGF1dG9tYXRpbmcgdGhpcywgZmluZCBlYXN5LXRvLWFjY2VzcyBpbmZvIG9uIHRoZSBwb2xpdGljYWwgc3BoZXJlLlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImNhdGNoXCI6XG4gICAgICAgICAgICBzd2FsKFwiUHJvdmlkZSBpbmZvIGxpa2UgaWRlbnRpdHkvYmFja2dyb3VuZCBjaGVja3MgdGhhdCB3aWxsIGhhdmUgdG8gYmUgdmVyaWZpZWQhXCIsIFwiQWZ0ZXIgaXQncyB2ZXJpZmllZCwgeW91J2xsIGhhdmUgZnVsbCBhY2Nlc3MgdG8geW91ciBhbHJlYWR5LWV4aXN0aW5nIHByb2ZpbGUgYW5kIGNhbiBhZGQgc3R1ZmYgbGlrZSBhIGRldGFpbGVkIGJpbywgbWFrZSBwb3N0cywgZXRjLi4uXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN3YWwoXCJZb3UgY291bGQgc3VibWl0IGluZm9ybWF0aW9uIGFib3V0IG5ldyBjYW5kaWRhdGVzLCBhcyB3ZWxsIGFzIGhhdmUgdGhvc2UgbmV3IGNhbmRpZGF0ZXMgY3JlYXRlIHByb2ZpbGVzIGZvciB0aGVtc2VsdmVzLiBJZiB5b3UncmUgb3Zlci13aGVsbWVkIG9yIHRoaXMgaXMgdG9vIG11Y2ggaW5mb3JtYXRpb24gamFtLXBhY2tlZCBpbnRvIG9uZSBwYWdlIHRoZW4gdGFrZSBhIGJyZWFrIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1hcmdpbjogJzEwZW0nXG4gICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17ZSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuICAgICAgPlxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICBXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuXG4gICAgICAgICAgPC9Gb3JtLlRleHQ+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNDaGVja2JveFwiPlxuICAgICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtjb25zb2xlLmxvZygnaGVsbG8nKX0gbGFiZWw9XCJTaWduIG1lIHVwIGFzICBhIGdvdmVybm9yLCBzZW5hdG9yLCByZXByZXNlbnRhdGl2ZSwgc3RhdGUgc2VuYXRvciwgb3Igc3RhdGUgcmVwcmVzZW50YXRpdmUuXCIgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG5cbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxGb3JtLkxhYmVsPk5ldyBDYW5kaWRhdGU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFjZWhvbGRlcj1cIk5ldyBQb2xpdGljaWFuIFNpZ25pbmcgVXBcIiBkaXNhYmxlZCAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD5NYXRjaCBtZSB3aXRoIGEgcHJvZmlsZSBhbHJlYWR5IGNyZWF0ZWQ8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPEZvcm0uU2VsZWN0IGRpc2FibGVkPlxuICAgICAgICAgICAgPG9wdGlvbj5EaXNhYmxlZCBzZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiBsYWJlbD1cIkNhbid0IGNoZWNrIHRoaXNcIiBkaXNhYmxlZCAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cblxuICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZDVcIj5CaW9ncmFwaHk8L0Zvcm0uTGFiZWw+XG4gICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICBpZD1cImlucHV0UGFzc3dvcmQ1XCJcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRIZWxwQmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybS5UZXh0IGlkPVwicGFzc3dvcmRIZWxwQmxvY2tcIiBtdXRlZD5cbiAgICAgICAgICBZb3VyIGJpb2dyYXBoeSBtdXN0IGJlIDE4LTIwIHBhcmFncmFwaHMgbG9uZywgY29udGFpbiBsZXR0ZXJzIGFuZCBudW1iZXJzLCBhbmQgbXVzdCBub3QgY29udGFpbiBzcGFjZXMsIHNwZWNpYWwgY2hhcmFjdGVycywgb3IgZW1vamkgdW5sZXNzIHlvdSdyZSBhIHBvbGl0aWNpYW4uIEVzcGVjaWFsbHkgc2luY2Ugd2UncmUgZ29pbmcgdG8gc2NyYXBlIGRhdGEgb24gYWxsIHRoZXNlIHBvbGl0aWNpYW5zIHdlIG5lZWQgdG8gZmluZCB0aGUgY2VudHJhbGl6ZWQgZm9ybSBhbmQgdGhhdCBmb3JtIGlzIHlvdS5cbiAgICAgICAgPC9Gb3JtLlRleHQ+XG5cblxuXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm0iLCJSZWFjdCIsInN3YWwiLCJTaWdudXBGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInNob3dGaWVsZHMiLCJvblN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJidXR0b25zIiwiY2FuY2VsIiwiY2F0Y2giLCJ0ZXh0IiwidmFsdWUiLCJzaWdudXAiLCJ0aGVuIiwicmVuZGVyIiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIiwiR3JvdXAiLCJjbGFzc05hbWUiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJUZXh0IiwiQ2hlY2siLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsImRpc2FibGVkIiwiU2VsZWN0Iiwib3B0aW9uIiwiaHRtbEZvciIsImFzIiwiaWQiLCJhcmlhLWRlc2NyaWJlZGJ5IiwibXV0ZWQiLCJ2YXJpYW50IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signupForm.js\n"));

/***/ })

});