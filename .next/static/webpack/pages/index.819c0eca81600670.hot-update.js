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

/***/ "./pages/LoginCookiesOld.js":
/*!**********************************!*\
  !*** ./pages/LoginCookiesOld.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// pages/login.js\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Login = function(param) {\n    var name = param.name, cookieSet = param.cookieSet;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]), 2), cookie = ref[0], setCookie = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(cookieSet), 2), cookieData = ref1[0], setCookieData = ref1[1]; // this runs only once, when the component is mounted, not when i.e. contact updates.\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(0), 2), variable = ref2[0], setVariable = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCookieData(cookieSet);\n    }, [\n        cookieSet\n    ]) // now this listens to changes in contact\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(\"*******we are on the login cookies component, did we get the props from ProfilePageOld and before that from index.js? The props here are : \", name, cookieSet);\n                    console.log(cookieSet);\n                    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout\n                    if (cookieSet && variable == 0) {\n                        console.log(\"Did we reach the set cookie code on Login Cookies?\");\n                        setVariable(1);\n                        setTimeout(function() {\n                            console.log(\"Delayed for 2 seconds.\");\n                            console.log(cookieSet);\n                            setCookie(\"user\", JSON.stringify({\n                                data: \"this is the most authentic cookie you've ever authenticated\"\n                            }), {\n                                path: \"/\",\n                                maxAge: 10,\n                                sameSite: true\n                            });\n                        }, \"2000\");\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n                    // Absolutely not. Commenting out Router.push('/') makes the infinite loop even faster than before!\n                    }\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })));\n    var handleSignIn = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"we are looking at useEffect, but not in the function\");\n                        try {\n                            console.log(\"we are looking at useEffect, but not in the function\");\n                            e.preventDefault();\n                        // const response = await yourLoginFunction(username) //handle API call to sign in here.\n                        // const data = response.data\n                        } catch (err) {\n                            console.log(err);\n                        }\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSignIn(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            htmlFor: \"username\",\n            children: \"hi there\"\n        }, void 0, false, {\n            fileName: \"/Users/deangladish/Da-Repo/pages/LoginCookiesOld.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Login, \"1cHZeRIfW7FSuTFlULMm4gWJGMQ=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2dpbkNvb2tpZXNPbGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCOzs7Ozs7QUFBeUM7QUFDQTtBQUNUO0FBRWhDLElBQU1JLEtBQUssR0FBRyxnQkFBeUI7UUFBdEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O0lBQzlCLElBQTRCTixHQUFvQixvRkFBcEJBLHdEQUFVLENBQUM7UUFBQyxNQUFNO0tBQUMsQ0FBQyxNQUF6Q08sTUFBTSxHQUFlUCxHQUFvQixHQUFuQyxFQUFFUSxTQUFTLEdBQUlSLEdBQW9CLEdBQXhCO0lBRXhCLElBQW9DQyxJQUF5QixvRkFBekJBLHFEQUFjLENBQUNLLFNBQVMsQ0FBQyxNQUF0REksVUFBVSxHQUFtQlQsSUFBeUIsR0FBNUMsRUFBRVUsYUFBYSxHQUFJVixJQUF5QixHQUE3QixFQUErQixxRkFBcUY7SUFFcEosSUFBZ0NBLElBQWlCLG9GQUFqQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsTUFBMUNXLFFBQVEsR0FBaUJYLElBQWlCLEdBQWxDLEVBQUVZLFdBQVcsR0FBSVosSUFBaUIsR0FBckI7SUFFNUJDLGdEQUFTLENBQUMsV0FBTTtRQUNkUyxhQUFhLENBQUNMLFNBQVMsQ0FBQyxDQUFDO0tBQzFCLEVBQUU7UUFBQ0EsU0FBUztLQUFDLENBQUMsQ0FBQyx5Q0FBeUM7O0lBRXpESixnREFBUyxDQUFDLDZPQUFZOzs7O29CQUNwQlksT0FBTyxDQUFDQyxHQUFHLENBQUMsNklBQTZJLEVBQUVWLElBQUksRUFBRUMsU0FBUyxDQUFDO29CQUMzS1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULFNBQVMsQ0FBQztvQkFFdEIsOERBQThEO29CQUM5RCxJQUFJQSxTQUFTLElBQUlNLFFBQVEsSUFBSSxDQUFDLEVBQUU7d0JBQzlCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQzt3QkFDakVGLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBRWRHLFVBQVUsQ0FBQyxXQUFNOzRCQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzRCQUN0Q0QsT0FBTyxDQUFDQyxHQUFHLENBQUNULFNBQVMsQ0FBQzs0QkFDdEJFLFNBQVMsQ0FBQyxNQUFNLEVBQUVTLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUFFQyxJQUFJLEVBQUUsNkRBQTZEOzZCQUFFLENBQUMsRUFBRTtnQ0FDekdDLElBQUksRUFBRSxHQUFHO2dDQUNUQyxNQUFNLEVBQUUsRUFBRTtnQ0FDVkMsUUFBUSxFQUFFLElBQUk7NkJBQ2YsQ0FBQzt5QkFDSCxFQUFFLE1BQU0sQ0FBQzt3QkFJVm5CLHVEQUFXLENBQUMsR0FBRyxDQUFDO29CQUNoQixtR0FBbUc7cUJBQ3BHOzs7Ozs7S0FDRixHQUFDO0lBRUYsSUFBTXFCLFlBQVk7bUJBQUcsMk9BQU9DLENBQUMsRUFBSzs7Ozt3QkFDaENYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNEQUFzRCxDQUFDO3dCQUNuRSxJQUFJOzRCQUNGRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQzs0QkFDbkVVLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO3dCQUNsQix3RkFBd0Y7d0JBQ3hGLDZCQUE2Qjt5QkFHOUIsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7NEJBQ1piLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxHQUFHLENBQUM7eUJBQ2pCOzs7Ozs7U0FDRjt3QkFaS0gsWUFBWSxDQUFVQyxDQUFDOzs7T0FZNUI7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ0csT0FBSztZQUFDQyxPQUFPLEVBQUMsVUFBVTtzQkFBQyxVQUV4Qjs7Ozs7aUJBQ007cUJBQ1AsQ0FDSjtDQUNGO0dBM0RLekIsS0FBSzs7UUFDbUJKLG9EQUFVOzs7QUFEbENJLEtBQUFBLEtBQUs7QUE2RFgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTG9naW5Db29raWVzT2xkLmpzPzhlNmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbG9naW4uanNcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBMb2dpbiA9ICh7IG5hbWUsIGNvb2tpZVNldCB9KSA9PiB7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xuXG4gIGNvbnN0IFtjb29raWVEYXRhLCBzZXRDb29raWVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKGNvb2tpZVNldCk7IC8vIHRoaXMgcnVucyBvbmx5IG9uY2UsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCBub3Qgd2hlbiBpLmUuIGNvbnRhY3QgdXBkYXRlcy5cblxuICBjb25zdCBbdmFyaWFibGUsIHNldFZhcmlhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29va2llRGF0YShjb29raWVTZXQpO1xuICB9LCBbY29va2llU2V0XSkgLy8gbm93IHRoaXMgbGlzdGVucyB0byBjaGFuZ2VzIGluIGNvbnRhY3RcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiKioqKioqKndlIGFyZSBvbiB0aGUgbG9naW4gY29va2llcyBjb21wb25lbnQsIGRpZCB3ZSBnZXQgdGhlIHByb3BzIGZyb20gUHJvZmlsZVBhZ2VPbGQgYW5kIGJlZm9yZSB0aGF0IGZyb20gaW5kZXguanM/IFRoZSBwcm9wcyBoZXJlIGFyZSA6IFwiLCBuYW1lLCBjb29raWVTZXQpXG4gICAgY29uc29sZS5sb2coY29va2llU2V0KVxuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3NldFRpbWVvdXRcbiAgICBpZiAoY29va2llU2V0ICYmIHZhcmlhYmxlID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlkIHdlIHJlYWNoIHRoZSBzZXQgY29va2llIGNvZGUgb24gTG9naW4gQ29va2llcz9cIilcbiAgICAgIHNldFZhcmlhYmxlKDEpXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGF5ZWQgZm9yIDIgc2Vjb25kcy5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZVNldClcbiAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IFwidGhpcyBpcyB0aGUgbW9zdCBhdXRoZW50aWMgY29va2llIHlvdSd2ZSBldmVyIGF1dGhlbnRpY2F0ZWRcIiB9KSwge1xuICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgIG1heEFnZTogMTAsIC8vIEV4cGlyZXMgYWZ0ZXIgMTAgc2Vjb25kc1xuICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfSwgXCIyMDAwXCIpXG5cblxuXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAvLyBBYnNvbHV0ZWx5IG5vdC4gQ29tbWVudGluZyBvdXQgUm91dGVyLnB1c2goJy8nKSBtYWtlcyB0aGUgaW5maW5pdGUgbG9vcCBldmVuIGZhc3RlciB0aGFuIGJlZm9yZSFcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlU2lnbkluID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnd2UgYXJlIGxvb2tpbmcgYXQgdXNlRWZmZWN0LCBidXQgbm90IGluIHRoZSBmdW5jdGlvbicpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZSBhcmUgbG9va2luZyBhdCB1c2VFZmZlY3QsIGJ1dCBub3QgaW4gdGhlIGZ1bmN0aW9uJylcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB5b3VyTG9naW5GdW5jdGlvbih1c2VybmFtZSkgLy9oYW5kbGUgQVBJIGNhbGwgdG8gc2lnbiBpbiBoZXJlLlxuICAgICAgLy8gY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFcblxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICBoaSB0aGVyZVxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwcmV0dHkgcGxlYXNlIGVudGVyIHVzZXJuYW1lXCIgb25DbGljaz17ZSA9PiBoYW5kbGVTaWduSW4oZSl9IC8+ICovfVxuICAgICAgPC9sYWJlbD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIl0sIm5hbWVzIjpbInVzZUNvb2tpZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsIlJvdXRlciIsIkxvZ2luIiwibmFtZSIsImNvb2tpZVNldCIsImNvb2tpZSIsInNldENvb2tpZSIsInVzZVN0YXRlIiwiY29va2llRGF0YSIsInNldENvb2tpZURhdGEiLCJ2YXJpYWJsZSIsInNldFZhcmlhYmxlIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInBhdGgiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInB1c2giLCJoYW5kbGVTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnIiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/LoginCookiesOld.js\n"));

/***/ })

});