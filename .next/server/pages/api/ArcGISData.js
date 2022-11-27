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
exports.id = "pages/api/ArcGISData";
exports.ids = ["pages/api/ArcGISData"];
exports.modules = {

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ "(api)/./pages/api/ArcGISData.js":
/*!*********************************!*\
  !*** ./pages/api/ArcGISData.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    let response = [];\n    if (req.method === \"GET\") {\n        await db.collection(\"arcGISdata\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        await db.collection(\"Feature Collection\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        res.status(200).json({\n            response\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvQXJjR0lTRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFMkM7QUFDYjtBQUNLO0FBRW5DLE1BQU1FLGNBQWNELHlFQUFzQixDQUFDVDtBQUUzQyxJQUFJWSxLQUFLRixZQUFZRyxTQUFTO0FBRWYsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFOUMsSUFBSUMsV0FBVyxFQUFFO0lBQ2pCLElBQUlGLElBQUlHLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1OLEdBQUdPLFVBQVUsQ0FBQyxjQUNqQkMsR0FBRyxHQUNIQyxJQUFJLENBQUMsU0FBVUMsYUFBYSxFQUFFO1lBQzdCQSxjQUFjQyxPQUFPLENBQUMsU0FBVUMsR0FBRyxFQUFFO2dCQUNuQ1AsU0FBU1EsSUFBSSxDQUFDRCxJQUFJRSxJQUFJO1lBQ3hCO1FBQ0Y7UUFDRixNQUFNZCxHQUFHTyxVQUFVLENBQUMsc0JBQ2pCQyxHQUFHLEdBQ0hDLElBQUksQ0FBQyxTQUFVQyxhQUFhLEVBQUU7WUFDN0JBLGNBQWNDLE9BQU8sQ0FBQyxTQUFVQyxHQUFHLEVBQUU7Z0JBQ25DUCxTQUFTUSxJQUFJLENBQUNELElBQUlFLElBQUk7WUFDeEI7UUFDRjtRQUNGVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVYO1FBQVM7SUFDbEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLWFwcC8uL3BhZ2VzL2FwaS9BcmNHSVNEYXRhLmpzP2Y0MjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdTh3cHhCX1liSWpJMVR3OGx4MWdqZmZ1SjZZWXBLcjBcIixcbiAgYXV0aERvbWFpbjogXCJ0aGUtbWlkd2F5LWI5OGQ4LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3RoZS1taWR3YXktYjk4ZDgtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICBwcm9qZWN0SWQ6IFwidGhlLW1pZHdheS1iOThkOFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRoZS1taWR3YXktYjk4ZDguYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjQ4NDQxNTUzMzkzXCIsXG4gIGFwcElkOiBcIjE6MjQ4NDQxNTUzMzkzOndlYjo0OTNkYzc2N2FkYjJiZmQ1OTE4NDUwXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0zV0o2U0ZNMVhDXCJcbn07XG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxudmFyIGRiID0gZmlyZWJhc2VBcHAuZmlyZXN0b3JlKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGxldCByZXNwb25zZSA9IFtdXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2FyY0dJU2RhdGEnKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIHJlc3BvbnNlLnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignRmVhdHVyZSBDb2xsZWN0aW9uJylcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHF1ZXJ5U25hcHNob3QpIHtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICByZXNwb25zZS5wdXNoKGRvYy5kYXRhKCkpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzcG9uc2UgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUFwcCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsIm1ldGhvZCIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/ArcGISData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/ArcGISData.js"));
module.exports = __webpack_exports__;

})();