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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    let response = [];\n    if (req.method === \"GET\") {\n        await db.collection(\"arcGISdata\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        await db.collection(\"Feature Collection\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        res.status(200).json({\n            response\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvQXJjR0lTRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsa0NBQWtDO0lBQzlDQyxXQUFXLEVBQUUsNEVBQTRFO0lBQ3pGQyxTQUFTLEVBQUUsa0JBQWtCO0lBQzdCQyxhQUFhLEVBQUUsOEJBQThCO0lBQzdDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUUwQztBQUNiO0FBQ0s7QUFFbkMsTUFBTUUsV0FBVyxHQUFHRCx5RUFBc0IsQ0FBQ1QsY0FBYyxDQUFDO0FBRTFELElBQUlZLEVBQUUsR0FBR0YsV0FBVyxDQUFDRyxTQUFTLEVBQUU7QUFFakIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUNqQixJQUFJRixHQUFHLENBQUNHLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsTUFBTU4sRUFBRSxDQUFDTyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQzlCQyxHQUFHLEVBQUUsQ0FDTEMsSUFBSSxDQUFDLFNBQVVDLGFBQWEsRUFBRTtZQUM3QkEsYUFBYSxDQUFDQyxPQUFPLENBQUMsU0FBVUMsR0FBRyxFQUFFO2dCQUNuQ1AsUUFBUSxDQUFDUSxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsSUFBSSxFQUFFLENBQUM7YUFDMUIsQ0FBQztTQUNILENBQUM7UUFDSixNQUFNZCxFQUFFLENBQUNPLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUN0Q0MsR0FBRyxFQUFFLENBQ0xDLElBQUksQ0FBQyxTQUFVQyxhQUFhLEVBQUU7WUFDN0JBLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtnQkFDbkNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO2FBQzFCLENBQUM7U0FDSCxDQUFDO1FBQ0pWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRVgsUUFBUTtTQUFFLENBQUM7S0FDbkM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL0FyY0dJU0RhdGEuanM/ZjQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJ1OHdweEJfWWJJakkxVHc4bHgxZ2pmZnVKNllZcEtyMFwiLFxuICBhdXRoRG9tYWluOiBcInRoZS1taWR3YXktYjk4ZDguZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGhlLW1pZHdheS1iOThkOC1kZWZhdWx0LXJ0ZGIuYXNpYS1zb3V0aGVhc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gIHByb2plY3RJZDogXCJ0aGUtbWlkd2F5LWI5OGQ4XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGhlLW1pZHdheS1iOThkOC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNDg0NDE1NTMzOTNcIixcbiAgYXBwSWQ6IFwiMToyNDg0NDE1NTMzOTM6d2ViOjQ5M2RjNzY3YWRiMmJmZDU5MTg0NTBcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTNXSjZTRk0xWENcIlxufTtcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG52YXIgZGIgPSBmaXJlYmFzZUFwcC5maXJlc3RvcmUoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgbGV0IHJlc3BvbnNlID0gW11cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignYXJjR0lTZGF0YScpXG4gICAgICAuZ2V0KClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChxdWVyeVNuYXBzaG90KSB7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgcmVzcG9uc2UucHVzaChkb2MuZGF0YSgpKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdGZWF0dXJlIENvbGxlY3Rpb24nKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIHJlc3BvbnNlLnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNwb25zZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImZpcmViYXNlQXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZmlyZXN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/ArcGISData.js\n");

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