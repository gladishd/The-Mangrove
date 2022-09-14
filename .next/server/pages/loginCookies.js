"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/loginCookies";
exports.ids = ["pages/loginCookies"];
exports.modules = {

/***/ "./pages/loginCookies.js":
/*!*******************************!*\
  !*** ./pages/loginCookies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);\n// pages/login.js\n\n\nconst Login = ()=>{\n    const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([\n        \"user\"\n    ]);\n    const handleSignIn = async (e)=>{\n        try {\n            e.preventDefault();\n            // const response = await yourLoginFunction(username) //handle API call to sign in here.\n            // const data = response.data\n            setCookie(\"user\", JSON.stringify({\n                data: \"data cookie data goes here from pages/loginCookies.js\"\n            }), {\n                path: \"/\",\n                maxAge: 3600,\n                sameSite: true\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"username\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"enter username\",\n                onClick: (e)=>handleSignIn(e)\n            }, void 0, false, {\n                fileName: \"/Users/deangladish/Da-Repo/pages/loginCookies.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/deangladish/Da-Repo/pages/loginCookies.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbkNvb2tpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpQkFBaUI7QUFDakI7QUFBeUM7QUFFekMsTUFBTUMsS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHSCx3REFBVSxDQUFDO1FBQUMsTUFBTTtLQUFDLENBQUM7SUFFaEQsTUFBTUksWUFBWSxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUNoQyxJQUFJO1lBQ0ZBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1lBQ2xCLHdGQUF3RjtZQUN4Riw2QkFBNkI7WUFFN0JILFNBQVMsQ0FBQyxNQUFNLEVBQUVJLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsdURBQXVEO2FBQUUsQ0FBQyxFQUFFO2dCQUNuR0MsSUFBSSxFQUFFLEdBQUc7Z0JBQ1RDLE1BQU0sRUFBRSxJQUFJO2dCQUNaQyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7U0FDSCxDQUFDLE9BQU9DLEdBQUcsRUFBRTtZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1NBQ2pCO0tBQ0Y7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ0csT0FBSztZQUFDQyxPQUFPLEVBQUMsVUFBVTtzQkFDdkIsNEVBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxXQUFXLEVBQUMsZ0JBQWdCO2dCQUFDQyxPQUFPLEVBQUVoQixDQUFBQSxDQUFDLEdBQUlELFlBQVksQ0FBQ0MsQ0FBQyxDQUFDOzs7Ozt5QkFBSTs7Ozs7cUJBQzNFO3FCQUNQLENBQ0o7Q0FDRjtBQUVELGlFQUFlSixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1hcHAvLi9wYWdlcy9sb2dpbkNvb2tpZXMuanM/ZjBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9sb2dpbi5qc1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcblxuICBjb25zdCBoYW5kbGVTaWduSW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgeW91ckxvZ2luRnVuY3Rpb24odXNlcm5hbWUpIC8vaGFuZGxlIEFQSSBjYWxsIHRvIHNpZ24gaW4gaGVyZS5cbiAgICAgIC8vIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXG5cbiAgICAgIHNldENvb2tpZShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiAnZGF0YSBjb29raWUgZGF0YSBnb2VzIGhlcmUgZnJvbSBwYWdlcy9sb2dpbkNvb2tpZXMuanMnIH0pLCB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBtYXhBZ2U6IDM2MDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXG4gICAgICAgIHNhbWVTaXRlOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgdXNlcm5hbWVcIiBvbkNsaWNrPXtlID0+IGhhbmRsZVNpZ25JbihlKX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJuYW1lcyI6WyJ1c2VDb29raWVzIiwiTG9naW4iLCJjb29raWUiLCJzZXRDb29raWUiLCJoYW5kbGVTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInBhdGgiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/loginCookies.js\n");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/loginCookies.js"));
module.exports = __webpack_exports__;

})();