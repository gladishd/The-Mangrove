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
exports.id = "pages/api/candidates";
exports.ids = ["pages/api/candidates"];
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

/***/ "(api)/./pages/api/candidates.js":
/*!*********************************!*\
  !*** ./pages/api/candidates.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// const router = require(\"express\").Router()\n// // const { Candidate } = require(\"./database/models/candidate.js\")\n// console.log(\"The directory is \", __dirname)\n// const path = require(\"path\")\n// console.log(\"On the /api/candidates.js page!\")\n// router.get(\"/candidateX\", async (req, res, next) => {\n//   let body = req.body\n//   res.status(200)\n// })\n// module.exports = router\n// start https://console.firebase.google.com/u/0/project/the-midway-b98d8/settings/general/web:OWUwY2I5MWEtODc0OS00ZjBmLWI1OTQtZWRlZTMyMTI2ZTcx\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        // Process a POST request\n        let body = req.body;\n        console.log(\"Req Body\", body);\n        console.log(\"hello!\");\n        // res.status(200).json({ name: 'John Doe' })\n        var data = await db.collection(\"collection-number-one\").doc(\"JX01OzjzHdglfLHNsVtD\").get();\n        console.log(\"The data is \", Object.keys(data), data[\"_delegate\"][\"_document\"].data, Object.keys(data[\"_delegate\"][\"_document\"].data), data[\"_delegate\"][\"_document\"].data.value, Object.keys(data[\"_delegate\"][\"_document\"].data.value));\n        let data1 = [];\n        await db.collection(\"collection-number-one\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                data1.push(doc.data());\n                console.log(doc.data());\n            });\n        });\n        res.status(200).json({\n            data1\n        });\n    } else {\n    // Handle any other HTTP method\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiLy8gY29uc3Qgcm91dGVyID0gcmVxdWlyZShcImV4cHJlc3NcIikuUm91dGVyKClcbi8vIC8vIGNvbnN0IHsgQ2FuZGlkYXRlIH0gPSByZXF1aXJlKFwiLi9kYXRhYmFzZS9tb2RlbHMvY2FuZGlkYXRlLmpzXCIpXG4vLyBjb25zb2xlLmxvZyhcIlRoZSBkaXJlY3RvcnkgaXMgXCIsIF9fZGlybmFtZSlcbi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKVxuLy8gY29uc29sZS5sb2coXCJPbiB0aGUgL2FwaS9jYW5kaWRhdGVzLmpzIHBhZ2UhXCIpXG5cbi8vIHJvdXRlci5nZXQoXCIvY2FuZGlkYXRlWFwiLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbi8vICAgbGV0IGJvZHkgPSByZXEuYm9keVxuLy8gICByZXMuc3RhdHVzKDIwMClcbi8vIH0pXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gcm91dGVyXG5cbi8vIHN0YXJ0IGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tL3UvMC9wcm9qZWN0L3RoZS1taWR3YXktYjk4ZDgvc2V0dGluZ3MvZ2VuZXJhbC93ZWI6T1dVd1kySTVNV0V0T0RjME9TMDBaakJtTFdJMU9UUXRaV1JsWlRNeU1USTJaVGN4XG5cbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QnU4d3B4Ql9ZYklqSTFUdzhseDFnamZmdUo2WVlwS3IwXCIsXG4gIGF1dGhEb21haW46IFwidGhlLW1pZHdheS1iOThkOC5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90aGUtbWlkd2F5LWI5OGQ4LWRlZmF1bHQtcnRkYi5hc2lhLXNvdXRoZWFzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgcHJvamVjdElkOiBcInRoZS1taWR3YXktYjk4ZDhcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0aGUtbWlkd2F5LWI5OGQ4LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI0ODQ0MTU1MzM5M1wiLFxuICBhcHBJZDogXCIxOjI0ODQ0MTU1MzM5Mzp3ZWI6NDkzZGM3NjdhZGIyYmZkNTkxODQ1MFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctM1dKNlNGTTFYQ1wiXG59O1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbnZhciBkYiA9IGZpcmViYXNlQXBwLmZpcmVzdG9yZSgpXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICBsZXQgYm9keSA9IHJlcS5ib2R5XG4gICAgY29uc29sZS5sb2coJ1JlcSBCb2R5JywgYm9keSlcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIVwiKVxuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxuICAgIHZhciBkYXRhID0gYXdhaXQgZGJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb2xsZWN0aW9uLW51bWJlci1vbmUnKVxuICAgICAgLmRvYyhcIkpYMDFPemp6SGRnbGZMSE5zVnREXCIpXG4gICAgICAuZ2V0KClcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiVGhlIGRhdGEgaXMgXCIsXG4gICAgICBPYmplY3Qua2V5cyhkYXRhKSxcbiAgICAgIGRhdGFbXCJfZGVsZWdhdGVcIl1bXCJfZG9jdW1lbnRcIl0uZGF0YSxcbiAgICAgIE9iamVjdC5rZXlzKGRhdGFbXCJfZGVsZWdhdGVcIl1bXCJfZG9jdW1lbnRcIl0uZGF0YSksXG4gICAgICBkYXRhW1wiX2RlbGVnYXRlXCJdW1wiX2RvY3VtZW50XCJdLmRhdGEudmFsdWUsXG4gICAgICBPYmplY3Qua2V5cyhkYXRhW1wiX2RlbGVnYXRlXCJdW1wiX2RvY3VtZW50XCJdLmRhdGEudmFsdWUpXG4gICAgKVxuICAgIGxldCBkYXRhMSA9IFtdXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignY29sbGVjdGlvbi1udW1iZXItb25lJylcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHF1ZXJ5U25hcHNob3QpIHtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICBkYXRhMS5wdXNoKGRvYy5kYXRhKCkpXG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhMSB9KVxuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBbmFseXRpY3MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiZmlyZWJhc2VBcHAiLCJkYiIsImZpcmVzdG9yZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlIiwiZGF0YTEiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/candidates.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/candidates.js"));
module.exports = __webpack_exports__;

})();