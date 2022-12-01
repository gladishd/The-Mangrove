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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    // session = req.session;\n    // if (session && session.userid) {\n    //   res.status(200).json({ success: 'success' })\n    // } else {\n    //   res.status(200).json({ failure: 'failure' })\n    // }\n    let response = [];\n    if (req.method === \"GET\") {\n        await db.collection(\"new-users\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        res.status(200).json({\n            response\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU1BLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRTJDO0FBQ2I7QUFDSztBQUVuQyxNQUFNRSxjQUFjRCx5RUFBc0IsQ0FBQ1Q7QUFFM0MsSUFBSVksS0FBS0YsWUFBWUcsU0FBUztBQUNmLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxpREFBaUQ7SUFDakQsSUFBSTtJQUNKLElBQUlDLFdBQVcsRUFBRTtJQUNqQixJQUFJRixJQUFJRyxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNTixHQUFHTyxVQUFVLENBQUMsYUFDakJDLEdBQUcsR0FDSEMsSUFBSSxDQUFDLFNBQVVDLGFBQWEsRUFBRTtZQUM3QkEsY0FBY0MsT0FBTyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtnQkFDbkNQLFNBQVNRLElBQUksQ0FBQ0QsSUFBSUUsSUFBSTtZQUN4QjtRQUNGO1FBQ0ZWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVg7UUFBUztJQUNsQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL3VzZXJzLmpzPzQ5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdTh3cHhCX1liSWpJMVR3OGx4MWdqZmZ1SjZZWXBLcjBcIixcbiAgYXV0aERvbWFpbjogXCJ0aGUtbWlkd2F5LWI5OGQ4LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3RoZS1taWR3YXktYjk4ZDgtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICBwcm9qZWN0SWQ6IFwidGhlLW1pZHdheS1iOThkOFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRoZS1taWR3YXktYjk4ZDguYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjQ4NDQxNTUzMzkzXCIsXG4gIGFwcElkOiBcIjE6MjQ4NDQxNTUzMzkzOndlYjo0OTNkYzc2N2FkYjJiZmQ1OTE4NDUwXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0zV0o2U0ZNMVhDXCJcbn07XG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxudmFyIGRiID0gZmlyZWJhc2VBcHAuZmlyZXN0b3JlKClcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gc2Vzc2lvbiA9IHJlcS5zZXNzaW9uO1xuICAvLyBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXJpZCkge1xuICAvLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogJ3N1Y2Nlc3MnIH0pXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmYWlsdXJlOiAnZmFpbHVyZScgfSlcbiAgLy8gfVxuICBsZXQgcmVzcG9uc2UgPSBbXVxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCduZXctdXNlcnMnKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIHJlc3BvbnNlLnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNwb25zZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImZpcmViYXNlQXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZmlyZXN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();