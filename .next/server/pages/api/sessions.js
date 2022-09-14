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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\napp.use(express.json());\napp.use(express.urlencoded({\n    extended: false\n}));\nlet session = __webpack_require__(/*! express-session */ \"express-session\");\napp.use(session({\n    resave: true,\n    secret: \"123456\",\n    saveUninitialized: true\n}));\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0\",\n    authDomain: \"the-midway-b98d8.firebaseapp.com\",\n    databaseURL: \"https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"the-midway-b98d8\",\n    storageBucket: \"the-midway-b98d8.appspot.com\",\n    messagingSenderId: \"248441553393\",\n    appId: \"1:248441553393:web:493dc767adb2bfd5918450\",\n    measurementId: \"G-3WJ6SFM1XC\"\n};\n\n\n\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nvar db = firebaseApp.firestore();\nasync function handler(req, res) {\n    console.log(\"we are here\");\n    let response = [];\n    if (req.method === \"POST\") {\n        // await db.collection('new-users')\n        //   .get()\n        //   .then(function (querySnapshot) {\n        //     querySnapshot.forEach(function (doc) {\n        //       response.push(doc.data())\n        //     })\n        //   })\n        console.log(\"on the route /api/sessions, the user request body is \", req.body);\n        console.log(user);\n        var user = req.body.user;\n        console.log(user);\n        req.session.user = {\n            email: user.email\n        };\n        console.log(\"on /auth/setLogin, the req.session is  \", req.session);\n        res.status(200).json({\n            success: \"success\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBUyxDQUFDO0FBQ2xDLE1BQU1DLEdBQUcsR0FBR0YsT0FBTyxFQUFFO0FBQ3JCRSxHQUFHLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDSSxJQUFJLEVBQUUsQ0FBQztBQUN2QkYsR0FBRyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQ0ssVUFBVSxDQUFDO0lBQUVDLFFBQVEsRUFBRSxLQUFLO0NBQUUsQ0FBQyxDQUFDO0FBQ2hELElBQUlDLE9BQU8sR0FBR04sbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUN4Q0MsR0FBRyxDQUFDQyxHQUFHLENBQUNJLE9BQU8sQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSTtJQUFFQyxNQUFNLEVBQUUsUUFBUTtJQUFFQyxpQkFBaUIsRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDLENBQUM7QUFHOUUsTUFBTUMsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsa0NBQWtDO0lBQzlDQyxXQUFXLEVBQUUsNEVBQTRFO0lBQ3pGQyxTQUFTLEVBQUUsa0JBQWtCO0lBQzdCQyxhQUFhLEVBQUUsOEJBQThCO0lBQzdDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUUwQztBQUNiO0FBQ0s7QUFFbkMsTUFBTUUsV0FBVyxHQUFHRCx5RUFBc0IsQ0FBQ1QsY0FBYyxDQUFDO0FBRTFELElBQUlZLEVBQUUsR0FBR0YsV0FBVyxDQUFDRyxTQUFTLEVBQUU7QUFDakIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzFCLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixtQ0FBbUM7UUFDbkMsV0FBVztRQUNYLHFDQUFxQztRQUNyQyw2Q0FBNkM7UUFDN0Msa0NBQWtDO1FBQ2xDLFNBQVM7UUFDVCxPQUFPO1FBQ1BILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxFQUFFSCxHQUFHLENBQUNNLElBQUksQ0FBQztRQUM5RUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLElBQUksQ0FBQztRQUNqQixJQUFJQSxJQUFJLEdBQUdQLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxJQUFJO1FBQ3hCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO1FBQ2pCUCxHQUFHLENBQUNuQixPQUFPLENBQUMwQixJQUFJLEdBQUc7WUFBRUMsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7U0FBRTtRQUN4Q04sT0FBTyxDQUFDQyxHQUFHLENBQUMseUNBQXlDLEVBQUVILEdBQUcsQ0FBQ25CLE9BQU8sQ0FBQztRQUNuRW9CLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDO1lBQUVnQyxPQUFPLEVBQUUsU0FBUztTQUFFLENBQUM7S0FDN0M7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXBwLy4vcGFnZXMvYXBpL3Nlc3Npb25zLmpzPzE4OTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXG5sZXQgc2Vzc2lvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2Vzc2lvbicpXG5hcHAudXNlKHNlc3Npb24oeyByZXNhdmU6IHRydWUsIHNlY3JldDogJzEyMzQ1NicsIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlIH0pKTtcblxuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJ1OHdweEJfWWJJakkxVHc4bHgxZ2pmZnVKNllZcEtyMFwiLFxuICBhdXRoRG9tYWluOiBcInRoZS1taWR3YXktYjk4ZDguZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGhlLW1pZHdheS1iOThkOC1kZWZhdWx0LXJ0ZGIuYXNpYS1zb3V0aGVhc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gIHByb2plY3RJZDogXCJ0aGUtbWlkd2F5LWI5OGQ4XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGhlLW1pZHdheS1iOThkOC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNDg0NDE1NTMzOTNcIixcbiAgYXBwSWQ6IFwiMToyNDg0NDE1NTMzOTM6d2ViOjQ5M2RjNzY3YWRiMmJmZDU5MTg0NTBcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTNXSjZTRk0xWENcIlxufTtcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG52YXIgZGIgPSBmaXJlYmFzZUFwcC5maXJlc3RvcmUoKVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcIndlIGFyZSBoZXJlXCIpXG4gIGxldCByZXNwb25zZSA9IFtdXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKCduZXctdXNlcnMnKVxuICAgIC8vICAgLmdldCgpXG4gICAgLy8gICAudGhlbihmdW5jdGlvbiAocXVlcnlTbmFwc2hvdCkge1xuICAgIC8vICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgIC8vICAgICAgIHJlc3BvbnNlLnB1c2goZG9jLmRhdGEoKSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgY29uc29sZS5sb2coJ29uIHRoZSByb3V0ZSAvYXBpL3Nlc3Npb25zLCB0aGUgdXNlciByZXF1ZXN0IGJvZHkgaXMgJywgcmVxLmJvZHkpXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICB2YXIgdXNlciA9IHJlcS5ib2R5LnVzZXJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB7IGVtYWlsOiB1c2VyLmVtYWlsIH1cbiAgICBjb25zb2xlLmxvZygnb24gL2F1dGgvc2V0TG9naW4sIHRoZSByZXEuc2Vzc2lvbiBpcyAgJywgcmVxLnNlc3Npb24pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBcInN1Y2Nlc3NcIiB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2Vzc2lvbiIsInJlc2F2ZSIsInNlY3JldCIsInNhdmVVbmluaXRpYWxpemVkIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImZpcmViYXNlQXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZmlyZXN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1ldGhvZCIsImJvZHkiLCJ1c2VyIiwiZW1haWwiLCJzdGF0dXMiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sessions.js\n");

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