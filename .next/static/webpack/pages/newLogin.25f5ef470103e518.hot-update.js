"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newLogin",{

/***/ "./mern-auth-client/src/components/auth/Register.js":
/*!**********************************************************!*\
  !*** ./mern-auth-client/src/components/auth/Register.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ \"./mern-auth-client/src/context/AuthContext.js\");\n\n\n\n\n\n\n\nclass Register extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        return(// <form>Register a new account!</form >\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>this.register(e),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Register a new account\"\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"username\",\n                    placeholder: \"Username\"\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    onChange: (e)=>this.setState({\n                            email: e.target.value\n                        }),\n                    value: this.state.email\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password\",\n                    onChange: (e)=>this.setState({\n                            password: e.target.value\n                        }),\n                    value: this.state.password\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Verify your password\",\n                    onChange: (e)=>setPasswordVerify(e.target.value),\n                    value: this.state.passwordVerify\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deangladish/Da-Repo/mern-auth-client/src/components/auth/Register.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this));\n    }\n    constructor(props){\n        super(props);\n        //   const[email, setEmail] = useState(\"\");\n        //   const[password, setPassword] = useState(\"\");\n        //   const[passwordVerify, setPasswordVerify] = useState(\"\");\n        //   const { getLoggedIn } = useContext(AuthContext);\n        // const navigate = useNavigate();\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"register\", async (e)=>{\n            e.preventDefault();\n            try {\n                const registerData = {\n                    email,\n                    password,\n                    passwordVerify\n                };\n                await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:5000/auth/\", registerData);\n            // await getLoggedIn();\n            // navigate(\"/\");\n            } catch (error) {\n                console.error(error);\n            }\n        });\n        this.state = {\n            email: \"\",\n            password: \"\"\n        };\n        this.register = this.register.bind(this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tZXJuLWF1dGgtY2xpZW50L3NyYy9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQW9EO0FBQzFCO0FBQzBCO0FBQ0w7QUFDUDtBQUV4QyxNQUFNTyxpQkFBaUJQLHdEQUFlO0lBZ0NwQ1MsU0FBUztRQUNQLE9BQ0Usd0NBQXdDO3NCQUN4Qyw4REFBQ0M7WUFBS0MsVUFBVUMsQ0FBQUEsSUFBSyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0Q7OzhCQUNqQyw4REFBQ0U7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQU1DLE1BQUs7b0JBQVdDLGFBQVk7Ozs7Ozs4QkFDbkMsOERBQUNGO29CQUFNQyxNQUFLO29CQUNWQyxhQUFZO29CQUNaQyxVQUFVLENBQUNOLElBQU0sSUFBSSxDQUFDTyxRQUFRLENBQUM7NEJBQUVDLE9BQU9SLEVBQUVTLE1BQU0sQ0FBQ0MsS0FBSzt3QkFBQztvQkFDdkRBLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUs7Ozs7Ozs4QkFFekIsOERBQUNMO29CQUFNQyxNQUFLO29CQUNWQyxhQUFZO29CQUNaQyxVQUFVLENBQUNOLElBQU0sSUFBSSxDQUFDTyxRQUFRLENBQUM7NEJBQUVLLFVBQVVaLEVBQUVTLE1BQU0sQ0FBQ0MsS0FBSzt3QkFBQztvQkFDMURBLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVE7Ozs7Ozs4QkFFNUIsOERBQUNUO29CQUFNQyxNQUFLO29CQUNWQyxhQUFZO29CQUNaQyxVQUFVLENBQUNOLElBQU1hLGtCQUFrQmIsRUFBRVMsTUFBTSxDQUFDQyxLQUFLO29CQUNqREEsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0csY0FBYzs7Ozs7OzhCQUVsQyw4REFBQ0M7b0JBQU9YLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7OztJQUc1QjtJQXZEQVksWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0E7UUFRUiwyQ0FBMkM7UUFDM0MsaURBQWlEO1FBQ2pELDZEQUE2RDtRQUU3RCxxREFBcUQ7UUFDckQsa0NBQWtDO1FBRWxDaEIsZ0ZBQUFBLE9BQUFBLFlBQVcsT0FBT0QsSUFBTTtZQUN0QkEsRUFBRWtCLGNBQWM7WUFFaEIsSUFBSTtnQkFDRixNQUFNQyxlQUFlO29CQUNuQlg7b0JBQU9JO29CQUFVRTtnQkFDbkI7Z0JBRUEsTUFBTXZCLGlEQUFVLENBQUMsK0JBQStCNEI7WUFDaEQsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNuQixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtRQTVCRSxJQUFJLENBQUNWLEtBQUssR0FBRztZQUNYSCxPQUFPO1lBQ1BJLFVBQVU7UUFDWjtRQUNBLElBQUksQ0FBQ1gsUUFBUSxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDc0IsSUFBSSxDQUFDLElBQUk7SUFDekM7QUFpREY7QUFFQSwrREFBZTVCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWVybi1hdXRoLWNsaWVudC9zcmMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVyLmpzP2QzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9O1xuICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcylcbiAgfVxuXG4gIC8vICAgY29uc3RbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyAgIGNvbnN0W3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gICBjb25zdFtwYXNzd29yZFZlcmlmeSwgc2V0UGFzc3dvcmRWZXJpZnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gICBjb25zdCB7IGdldExvZ2dlZEluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJlZ2lzdGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVnaXN0ZXJEYXRhID0ge1xuICAgICAgICBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkVmVyaWZ5LFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL1wiLCByZWdpc3RlckRhdGEpO1xuICAgICAgLy8gYXdhaXQgZ2V0TG9nZ2VkSW4oKTtcbiAgICAgIC8vIG5hdmlnYXRlKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGZvcm0+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudCE8L2Zvcm0gPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gdGhpcy5yZWdpc3RlcihlKX0+XG4gICAgICAgIDxoMT5SZWdpc3RlciBhIG5ldyBhY2NvdW50PC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXJpZnkgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZFZlcmlmeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRWZXJpZnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQXV0aENvbnRleHQiLCJ1c2VOYXZpZ2F0ZSIsIkZvcm0iLCJSZWdpc3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJyZWdpc3RlciIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZFZlcmlmeSIsInBhc3N3b3JkVmVyaWZ5IiwiYnV0dG9uIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJEYXRhIiwicG9zdCIsImVycm9yIiwiY29uc29sZSIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./mern-auth-client/src/components/auth/Register.js\n"));

/***/ })

});