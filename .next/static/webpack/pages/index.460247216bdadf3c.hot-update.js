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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// pages/login.js\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Login = function(param) {\n    var name = param.name, cookieSet = param.cookieSet;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]), 2), cookie = ref[0], setCookie = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(cookieSet), 2), cookieData = ref1[0], setCookieData = ref1[1]; // this runs only once, when the component is mounted, not when i.e. contact updates.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCookieData(cookieSet);\n    }, [\n        cookieSet\n    ]) // now this listens to changes in contact\n    ;\n    // useEffect(async () => {\n    //   console.log(\"*******we are on the login cookies component, did we get the props from ProfilePageOld and before that from index.js? The props here are : \", name, cookieSet)\n    //   console.log(cookieSet)\n    //   setTimeout(() => {\n    //     console.log(\"Delayed for 1 second.\");\n    //     console.log(cookieSet)\n    //   }, \"1000\")\n    //   // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout\n    //   if (cookieSet) {\n    //     console.log(\"did we reach the set cookie c ode on LOgin Cookies?\")\n    //     setCookie(\"user\", JSON.stringify({ data: \"this is the most authentic cookie you've ever authenticated\" }), {\n    //       path: \"/\",\n    //       maxAge: 10, // Expires after 10 seconds\n    //       sameSite: true,\n    //     })\n    //     Router.push('/')\n    //   }\n    // })\n    var handleSignIn = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_deangladish_Da_Repo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"we are looking at useEffect, but not in the function\");\n                        try {\n                            console.log(\"we are looking at useEffect, but not in the function\");\n                            e.preventDefault();\n                        // const response = await yourLoginFunction(username) //handle API call to sign in here.\n                        // const data = response.data\n                        } catch (err) {\n                            console.log(err);\n                        }\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSignIn(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            htmlFor: \"username\",\n            children: \"hi there\"\n        }, void 0, false, {\n            fileName: \"/Users/deangladish/Da-Repo/pages/LoginCookiesOld.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Login, \"mU6rEH0EJNJ3+1xxc32ZJCTCocU=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2dpbkNvb2tpZXNPbGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCOzs7Ozs7QUFBeUM7QUFDQTtBQUNUO0FBRWhDLElBQU1JLEtBQUssR0FBRyxnQkFBeUI7UUFBdEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O0lBQzlCLElBQTRCTixHQUFvQixvRkFBcEJBLHdEQUFVLENBQUM7UUFBQyxNQUFNO0tBQUMsQ0FBQyxNQUF6Q08sTUFBTSxHQUFlUCxHQUFvQixHQUFuQyxFQUFFUSxTQUFTLEdBQUlSLEdBQW9CLEdBQXhCO0lBRXhCLElBQW9DQyxJQUF5QixvRkFBekJBLHFEQUFjLENBQUNLLFNBQVMsQ0FBQyxNQUF0REksVUFBVSxHQUFtQlQsSUFBeUIsR0FBNUMsRUFBRVUsYUFBYSxHQUFJVixJQUF5QixHQUE3QixFQUErQixxRkFBcUY7SUFFcEpDLGdEQUFTLENBQUMsV0FBTTtRQUNkUyxhQUFhLENBQUNMLFNBQVMsQ0FBQyxDQUFDO0tBQzFCLEVBQUU7UUFBQ0EsU0FBUztLQUFDLENBQUMsQ0FBQyx5Q0FBeUM7O0lBRXpELDBCQUEwQjtJQUMxQixnTEFBZ0w7SUFDaEwsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixtRUFBbUU7SUFDbkUscUJBQXFCO0lBQ3JCLHlFQUF5RTtJQUN6RSxtSEFBbUg7SUFDbkgsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx3QkFBd0I7SUFDeEIsU0FBUztJQUVULHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sS0FBSztJQUVMLElBQU1NLFlBQVk7bUJBQUcsMk9BQU9DLENBQUMsRUFBSzs7Ozt3QkFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNEQUFzRCxDQUFDO3dCQUNuRSxJQUFJOzRCQUNGRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQzs0QkFDbkVGLENBQUMsQ0FBQ0csY0FBYyxFQUFFO3dCQUNsQix3RkFBd0Y7d0JBQ3hGLDZCQUE2Qjt5QkFHOUIsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7NEJBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUM7eUJBQ2pCOzs7Ozs7U0FDRjt3QkFaS0wsWUFBWSxDQUFVQyxDQUFDOzs7T0FZNUI7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ0ssT0FBSztZQUFDQyxPQUFPLEVBQUMsVUFBVTtzQkFBQyxVQUV4Qjs7Ozs7aUJBQ007cUJBQ1AsQ0FDSjtDQUNGO0dBbkRLZixLQUFLOztRQUNtQkosb0RBQVU7OztBQURsQ0ksS0FBQUEsS0FBSztBQXFEWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Mb2dpbkNvb2tpZXNPbGQuanM/OGU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9sb2dpbi5qc1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IExvZ2luID0gKHsgbmFtZSwgY29va2llU2V0IH0pID0+IHtcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcblxuICBjb25zdCBbY29va2llRGF0YSwgc2V0Q29va2llRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVTZXQpOyAvLyB0aGlzIHJ1bnMgb25seSBvbmNlLCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgbm90IHdoZW4gaS5lLiBjb250YWN0IHVwZGF0ZXMuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb29raWVEYXRhKGNvb2tpZVNldCk7XG4gIH0sIFtjb29raWVTZXRdKSAvLyBub3cgdGhpcyBsaXN0ZW5zIHRvIGNoYW5nZXMgaW4gY29udGFjdFxuXG4gIC8vIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCIqKioqKioqd2UgYXJlIG9uIHRoZSBsb2dpbiBjb29raWVzIGNvbXBvbmVudCwgZGlkIHdlIGdldCB0aGUgcHJvcHMgZnJvbSBQcm9maWxlUGFnZU9sZCBhbmQgYmVmb3JlIHRoYXQgZnJvbSBpbmRleC5qcz8gVGhlIHByb3BzIGhlcmUgYXJlIDogXCIsIG5hbWUsIGNvb2tpZVNldClcbiAgLy8gICBjb25zb2xlLmxvZyhjb29raWVTZXQpXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIkRlbGF5ZWQgZm9yIDEgc2Vjb25kLlwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGNvb2tpZVNldClcbiAgLy8gICB9LCBcIjEwMDBcIilcbiAgLy8gICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvc2V0VGltZW91dFxuICAvLyAgIGlmIChjb29raWVTZXQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGlkIHdlIHJlYWNoIHRoZSBzZXQgY29va2llIGMgb2RlIG9uIExPZ2luIENvb2tpZXM/XCIpXG4gIC8vICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHsgZGF0YTogXCJ0aGlzIGlzIHRoZSBtb3N0IGF1dGhlbnRpYyBjb29raWUgeW91J3ZlIGV2ZXIgYXV0aGVudGljYXRlZFwiIH0pLCB7XG4gIC8vICAgICAgIHBhdGg6IFwiL1wiLFxuICAvLyAgICAgICBtYXhBZ2U6IDEwLCAvLyBFeHBpcmVzIGFmdGVyIDEwIHNlY29uZHNcbiAgLy8gICAgICAgc2FtZVNpdGU6IHRydWUsXG4gIC8vICAgICB9KVxuXG4gIC8vICAgICBSb3V0ZXIucHVzaCgnLycpXG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIGNvbnN0IGhhbmRsZVNpZ25JbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dlIGFyZSBsb29raW5nIGF0IHVzZUVmZmVjdCwgYnV0IG5vdCBpbiB0aGUgZnVuY3Rpb24nKVxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnd2UgYXJlIGxvb2tpbmcgYXQgdXNlRWZmZWN0LCBidXQgbm90IGluIHRoZSBmdW5jdGlvbicpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgeW91ckxvZ2luRnVuY3Rpb24odXNlcm5hbWUpIC8vaGFuZGxlIEFQSSBjYWxsIHRvIHNpZ24gaW4gaGVyZS5cbiAgICAgIC8vIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXG5cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgaGkgdGhlcmVcbiAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwicHJldHR5IHBsZWFzZSBlbnRlciB1c2VybmFtZVwiIG9uQ2xpY2s9e2UgPT4gaGFuZGxlU2lnbkluKGUpfSAvPiAqL31cbiAgICAgIDwvbGFiZWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJuYW1lcyI6WyJ1c2VDb29raWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJMb2dpbiIsIm5hbWUiLCJjb29raWVTZXQiLCJjb29raWUiLCJzZXRDb29raWUiLCJ1c2VTdGF0ZSIsImNvb2tpZURhdGEiLCJzZXRDb29raWVEYXRhIiwiaGFuZGxlU2lnbkluIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImVyciIsImxhYmVsIiwiaHRtbEZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/LoginCookiesOld.js\n"));

/***/ })

});