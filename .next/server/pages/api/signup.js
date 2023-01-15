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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

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

/***/ "(api)/./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// start https://console.firebase.google.com/u/0/project/the-midway-b98d8/settings/general/web:OWUwY2I5MWEtODc0OS00ZjBmLWI1OTQtZWRlZTMyMTI2ZTcx\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    // if req.method === 'POST' ... await db.create\n    if (req.method === \"POST\") {\n        // Process a POST request\n        let body = req.body;\n        console.log(\"Req Body\", body);\n        console.log(\"hello!\");\n        // res.status(200).json({ name: 'John Doe' })\n        var data = await db.collection(\"new-users\").add(req.body);\n        let data1 = [];\n        await db.collection(\"collection-number-one\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                data1.push(doc.data());\n                console.log(doc.data());\n            });\n        });\n        res.status(200).json({\n            data1\n        });\n    } else {\n    // Handle any other HTTP method\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtJQUErSTtBQUUvSSx1REFBdUQ7QUFDVjtBQUNLO0FBQ2xELDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUUyQztBQUNiO0FBQ0s7QUFFbkMsTUFBTUUsY0FBY0QseUVBQXNCLENBQUNUO0FBRTNDLElBQUlXLEtBQUtELFlBQVlFLFNBQVM7QUFDZixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QywrQ0FBK0M7SUFDL0MsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIseUJBQXlCO1FBQ3pCLElBQUlDLE9BQU9ILElBQUlHLElBQUk7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osNkNBQTZDO1FBQzdDLElBQUlDLE9BQU8sTUFBTVQsR0FDZFUsVUFBVSxDQUFDLGFBQ1hDLEdBQUcsQ0FBQ1IsSUFBSUcsSUFBSTtRQUNmLElBQUlNLFFBQVEsRUFBRTtRQUNkLE1BQU1aLEdBQUdVLFVBQVUsQ0FBQyx5QkFDakJHLEdBQUcsR0FDSEMsSUFBSSxDQUFDLFNBQVVDLGFBQWEsRUFBRTtZQUM3QkEsY0FBY0MsT0FBTyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtnQkFDbkNMLE1BQU1NLElBQUksQ0FBQ0QsSUFBSVIsSUFBSTtnQkFDbkJGLFFBQVFDLEdBQUcsQ0FBQ1MsSUFBSVIsSUFBSTtZQUN0QjtRQUNGO1FBQ0ZMLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVI7UUFBTTtJQUMvQixPQUFPO0lBQ0wsK0JBQStCO0lBQ2pDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1hcHAvLi9wYWdlcy9hcGkvc2lnbnVwLmpzP2E4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RhcnQgaHR0cHM6Ly9jb25zb2xlLmZpcmViYXNlLmdvb2dsZS5jb20vdS8wL3Byb2plY3QvdGhlLW1pZHdheS1iOThkOC9zZXR0aW5ncy9nZW5lcmFsL3dlYjpPV1V3WTJJNU1XRXRPRGMwT1MwMFpqQm1MV0kxT1RRdFpXUmxaVE15TVRJMlpUY3hcblxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdTh3cHhCX1liSWpJMVR3OGx4MWdqZmZ1SjZZWXBLcjBcIixcbiAgYXV0aERvbWFpbjogXCJ0aGUtbWlkd2F5LWI5OGQ4LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3RoZS1taWR3YXktYjk4ZDgtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICBwcm9qZWN0SWQ6IFwidGhlLW1pZHdheS1iOThkOFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRoZS1taWR3YXktYjk4ZDguYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjQ4NDQxNTUzMzkzXCIsXG4gIGFwcElkOiBcIjE6MjQ4NDQxNTUzMzkzOndlYjo0OTNkYzc2N2FkYjJiZmQ1OTE4NDUwXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0zV0o2U0ZNMVhDXCJcbn07XG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxudmFyIGRiID0gZmlyZWJhc2VBcHAuZmlyZXN0b3JlKClcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gaWYgcmVxLm1ldGhvZCA9PT0gJ1BPU1QnIC4uLiBhd2FpdCBkYi5jcmVhdGVcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICBsZXQgYm9keSA9IHJlcS5ib2R5XG4gICAgY29uc29sZS5sb2coJ1JlcSBCb2R5JywgYm9keSlcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIVwiKVxuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxuICAgIHZhciBkYXRhID0gYXdhaXQgZGJcbiAgICAgIC5jb2xsZWN0aW9uKCduZXctdXNlcnMnKVxuICAgICAgLmFkZChyZXEuYm9keSlcbiAgICBsZXQgZGF0YTEgPSBbXVxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2NvbGxlY3Rpb24tbnVtYmVyLW9uZScpXG4gICAgICAuZ2V0KClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChxdWVyeVNuYXBzaG90KSB7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgZGF0YTEucHVzaChkb2MuZGF0YSgpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTEgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImZpcmViYXNlQXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29sbGVjdGlvbiIsImFkZCIsImRhdGExIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();