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
exports.id = "pages/api/sessions";
exports.ids = ["pages/api/sessions"];
exports.modules = {

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

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

/***/ "(api)/./pages/api/sessions.js":
/*!*******************************!*\
  !*** ./pages/api/sessions.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\napp.use(express.json());\napp.use(express.urlencoded({\n    extended: false\n}));\nlet session = __webpack_require__(/*! express-session */ \"express-session\");\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    console.log(\"we are here\");\n    let response = [];\n    if (req.method === \"POST\") {\n        await db.collection(\"new-users\").get().then(function(querySnapshot) {\n            querySnapshot.forEach(function(doc) {\n                response.push(doc.data());\n            });\n        });\n        console.log(\"on the route /api/sessions, the user request body is \", req.body);\n        console.log(user);\n        var user = req.body.user;\n        console.log(user);\n        // req.session.user = { email: user.email }\n        console.log(\"on /auth/setLogin, the req.session is  \", req.session);\n        res.status(200).json({\n            success: \"success\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBUyxDQUFDO0FBQ2xDLE1BQU1DLEdBQUcsR0FBR0YsT0FBTyxFQUFFO0FBQ3JCRSxHQUFHLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDSSxJQUFJLEVBQUUsQ0FBQztBQUN2QkYsR0FBRyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQ0ssVUFBVSxDQUFDO0lBQUVDLFFBQVEsRUFBRSxLQUFLO0NBQUUsQ0FBQyxDQUFDO0FBQ2hELElBQUlDLE9BQU8sR0FBR04sbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUl4QyxNQUFNTyxjQUFjLEdBQUc7SUFDckJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUNDLFdBQVcsRUFBRSw0RUFBNEU7SUFDekZDLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0JDLGFBQWEsRUFBRSw4QkFBOEI7SUFDN0NDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRTBDO0FBQ2I7QUFDSztBQUVuQyxNQUFNRSxXQUFXLEdBQUdELHlFQUFzQixDQUFDVCxjQUFjLENBQUM7QUFFMUQsSUFBSVksRUFBRSxHQUFHRixXQUFXLENBQUNHLFNBQVMsRUFBRTtBQUNqQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDMUIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBSUosR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1SLEVBQUUsQ0FBQ1MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUM3QkMsR0FBRyxFQUFFLENBQ0xDLElBQUksQ0FBQyxTQUFVQyxhQUFhLEVBQUU7WUFDN0JBLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtnQkFDbkNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO2FBQzFCLENBQUM7U0FDSCxDQUFDO1FBQ0pYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxFQUFFSCxHQUFHLENBQUNjLElBQUksQ0FBQztRQUM5RVosT0FBTyxDQUFDQyxHQUFHLENBQUNZLElBQUksQ0FBQztRQUNqQixJQUFJQSxJQUFJLEdBQUdmLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDQyxJQUFJO1FBQ3hCYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDO1FBQ2pCLDJDQUEyQztRQUMzQ2IsT0FBTyxDQUFDQyxHQUFHLENBQUMseUNBQXlDLEVBQUVILEdBQUcsQ0FBQ2hCLE9BQU8sQ0FBQztRQUNuRWlCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDbkMsSUFBSSxDQUFDO1lBQUVvQyxPQUFPLEVBQUUsU0FBUztTQUFFLENBQUM7S0FDN0M7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL3Nlc3Npb25zLmpzPzE4OTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXG5sZXQgc2Vzc2lvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2Vzc2lvbicpXG5cblxuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJ1OHdweEJfWWJJakkxVHc4bHgxZ2pmZnVKNllZcEtyMFwiLFxuICBhdXRoRG9tYWluOiBcInRoZS1taWR3YXktYjk4ZDguZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGhlLW1pZHdheS1iOThkOC1kZWZhdWx0LXJ0ZGIuYXNpYS1zb3V0aGVhc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gIHByb2plY3RJZDogXCJ0aGUtbWlkd2F5LWI5OGQ4XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGhlLW1pZHdheS1iOThkOC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNDg0NDE1NTMzOTNcIixcbiAgYXBwSWQ6IFwiMToyNDg0NDE1NTMzOTM6d2ViOjQ5M2RjNzY3YWRiMmJmZDU5MTg0NTBcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTNXSjZTRk0xWENcIlxufTtcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG52YXIgZGIgPSBmaXJlYmFzZUFwcC5maXJlc3RvcmUoKVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcIndlIGFyZSBoZXJlXCIpXG4gIGxldCByZXNwb25zZSA9IFtdXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCduZXctdXNlcnMnKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIHJlc3BvbnNlLnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgY29uc29sZS5sb2coJ29uIHRoZSByb3V0ZSAvYXBpL3Nlc3Npb25zLCB0aGUgdXNlciByZXF1ZXN0IGJvZHkgaXMgJywgcmVxLmJvZHkpXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICB2YXIgdXNlciA9IHJlcS5ib2R5LnVzZXJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIC8vIHJlcS5zZXNzaW9uLnVzZXIgPSB7IGVtYWlsOiB1c2VyLmVtYWlsIH1cbiAgICBjb25zb2xlLmxvZygnb24gL2F1dGgvc2V0TG9naW4sIHRoZSByZXEuc2Vzc2lvbiBpcyAgJywgcmVxLnNlc3Npb24pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBcInN1Y2Nlc3NcIiB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2Vzc2lvbiIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUFwcCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtZXRob2QiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJib2R5IiwidXNlciIsInN0YXR1cyIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sessions.js"));
module.exports = __webpack_exports__;

})();