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
exports.id = "pages/api/userDatabase";
exports.ids = ["pages/api/userDatabase"];
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

/***/ "(api)/./pages/api/userDatabase.js":
/*!***********************************!*\
  !*** ./pages/api/userDatabase.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    console.log(\"we are here\");\n    let response = [];\n    if (req.method === \"POST\") {\n        await db.collection(\"new-users\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        res.status(200).json({\n            response\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlckRhdGFiYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxjQUFjLEdBQUc7SUFDckJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUNDLFdBQVcsRUFBRSw0RUFBNEU7SUFDekZDLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0JDLGFBQWEsRUFBRSw4QkFBOEI7SUFDN0NDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRTBDO0FBQ2I7QUFDSztBQUVuQyxNQUFNRSxXQUFXLEdBQUdELHlFQUFzQixDQUFDVCxjQUFjLENBQUM7QUFFMUQsSUFBSVksRUFBRSxHQUFHRixXQUFXLENBQUNHLFNBQVMsRUFBRTtBQUNqQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDMUIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBSUosR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1SLEVBQUUsQ0FBQ1MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUM3QkMsR0FBRyxFQUFFLENBQ0xDLElBQUksQ0FBQyxTQUFVQyxhQUFhLEVBQUU7WUFDN0JBLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtnQkFDbkNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO2FBQzFCLENBQUM7U0FDSCxDQUFDO1FBQ0paLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRVgsUUFBUTtTQUFFLENBQUM7S0FDbkM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL3VzZXJEYXRhYmFzZS5qcz9iYWMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QnU4d3B4Ql9ZYklqSTFUdzhseDFnamZmdUo2WVlwS3IwXCIsXG4gIGF1dGhEb21haW46IFwidGhlLW1pZHdheS1iOThkOC5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90aGUtbWlkd2F5LWI5OGQ4LWRlZmF1bHQtcnRkYi5hc2lhLXNvdXRoZWFzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgcHJvamVjdElkOiBcInRoZS1taWR3YXktYjk4ZDhcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0aGUtbWlkd2F5LWI5OGQ4LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI0ODQ0MTU1MzM5M1wiLFxuICBhcHBJZDogXCIxOjI0ODQ0MTU1MzM5Mzp3ZWI6NDkzZGM3NjdhZGIyYmZkNTkxODQ1MFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctM1dKNlNGTTFYQ1wiXG59O1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbnZhciBkYiA9IGZpcmViYXNlQXBwLmZpcmVzdG9yZSgpXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwid2UgYXJlIGhlcmVcIilcbiAgbGV0IHJlc3BvbnNlID0gW11cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ25ldy11c2VycycpXG4gICAgICAuZ2V0KClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChxdWVyeVNuYXBzaG90KSB7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgcmVzcG9uc2UucHVzaChkb2MuZGF0YSgpKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3BvbnNlIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiZmlyZWJhc2VBcHAiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/userDatabase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userDatabase.js"));
module.exports = __webpack_exports__;

})();