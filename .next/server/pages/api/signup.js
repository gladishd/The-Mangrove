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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// start https://console.firebase.google.com/u/0/project/the-midway-b98d8/settings/general/web:OWUwY2I5MWEtODc0OS00ZjBmLWI1OTQtZWRlZTMyMTI2ZTcx\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    // if req.method === 'POST' ... await db.create\n    if (req.method === \"POST\") {\n        // Process a POST request\n        let body = req.body;\n        console.log(\"Req Body\", body);\n        console.log(\"hello!\");\n        // res.status(200).json({ name: 'John Doe' })\n        var data = await db.collection(\"new-users\").add(req.body);\n        let data1 = [];\n        await db.collection(\"collection-number-one\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                data1.push(doc.data());\n                console.log(doc.data());\n            });\n        });\n        res.status(200).json({\n            data1\n        });\n    } else {\n    // Handle any other HTTP method\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtJQUErSTtBQUUvSSx1REFBdUQ7QUFDVjtBQUNLO0FBQ2xELDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNRSxjQUFjLEdBQUc7SUFDckJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUNDLFdBQVcsRUFBRSw0RUFBNEU7SUFDekZDLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0JDLGFBQWEsRUFBRSw4QkFBOEI7SUFDN0NDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRTBDO0FBQ2I7QUFDSztBQUVuQyxNQUFNRSxXQUFXLEdBQUdELHlFQUFzQixDQUFDVCxjQUFjLENBQUM7QUFFMUQsSUFBSVcsRUFBRSxHQUFHRCxXQUFXLENBQUNFLFNBQVMsRUFBRTtBQUNqQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLCtDQUErQztJQUMvQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIseUJBQXlCO1FBQ3pCLElBQUlDLElBQUksR0FBR0gsR0FBRyxDQUFDRyxJQUFJO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVGLElBQUksQ0FBQztRQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3JCLDZDQUE2QztRQUM3QyxJQUFJQyxJQUFJLEdBQUcsTUFBTVQsRUFBRSxDQUNoQlUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUN2QkMsR0FBRyxDQUFDUixHQUFHLENBQUNHLElBQUksQ0FBQztRQUNoQixJQUFJTSxLQUFLLEdBQUcsRUFBRTtRQUNkLE1BQU1aLEVBQUUsQ0FBQ1UsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQ3pDRyxHQUFHLEVBQUUsQ0FDTEMsSUFBSSxDQUFDLFNBQVVDLGFBQWEsRUFBRTtZQUM3QkEsYUFBYSxDQUFDQyxPQUFPLENBQUMsU0FBVUMsR0FBRyxFQUFFO2dCQUNuQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUNELEdBQUcsQ0FBQ1IsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDUixJQUFJLEVBQUUsQ0FBQzthQUN4QixDQUFDO1NBQ0gsQ0FBQztRQUNKTCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVSLEtBQUs7U0FBRSxDQUFDO0tBQ2hDLE1BQU07SUFDTCwrQkFBK0I7S0FDaEM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL3NpZ251cC5qcz9hODlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0YXJ0IGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tL3UvMC9wcm9qZWN0L3RoZS1taWR3YXktYjk4ZDgvc2V0dGluZ3MvZ2VuZXJhbC93ZWI6T1dVd1kySTVNV0V0T0RjME9TMDBaakJtTFdJMU9UUXRaV1JsWlRNeU1USTJaVGN4XG5cbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QnU4d3B4Ql9ZYklqSTFUdzhseDFnamZmdUo2WVlwS3IwXCIsXG4gIGF1dGhEb21haW46IFwidGhlLW1pZHdheS1iOThkOC5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90aGUtbWlkd2F5LWI5OGQ4LWRlZmF1bHQtcnRkYi5hc2lhLXNvdXRoZWFzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgcHJvamVjdElkOiBcInRoZS1taWR3YXktYjk4ZDhcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0aGUtbWlkd2F5LWI5OGQ4LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI0ODQ0MTU1MzM5M1wiLFxuICBhcHBJZDogXCIxOjI0ODQ0MTU1MzM5Mzp3ZWI6NDkzZGM3NjdhZGIyYmZkNTkxODQ1MFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctM1dKNlNGTTFYQ1wiXG59O1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbnZhciBkYiA9IGZpcmViYXNlQXBwLmZpcmVzdG9yZSgpXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIGlmIHJlcS5tZXRob2QgPT09ICdQT1NUJyAuLi4gYXdhaXQgZGIuY3JlYXRlXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAvLyBQcm9jZXNzIGEgUE9TVCByZXF1ZXN0XG4gICAgbGV0IGJvZHkgPSByZXEuYm9keVxuICAgIGNvbnNvbGUubG9nKCdSZXEgQm9keScsIGJvZHkpXG4gICAgY29uc29sZS5sb2coXCJoZWxsbyFcIilcbiAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6ICdKb2huIERvZScgfSlcbiAgICB2YXIgZGF0YSA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbignbmV3LXVzZXJzJylcbiAgICAgIC5hZGQocmVxLmJvZHkpXG4gICAgbGV0IGRhdGExID0gW11cbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdjb2xsZWN0aW9uLW51bWJlci1vbmUnKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIGRhdGExLnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGExIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICB9XG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUFwcCIsImRiIiwiZmlyZXN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJhZGQiLCJkYXRhMSIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

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