"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 3773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 4826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ 9063:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4826);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const firebaseConfig = {
    apiKey: "AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0",
    authDomain: "the-midway-b98d8.firebaseapp.com",
    databaseURL: "https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "the-midway-b98d8",
    storageBucket: "the-midway-b98d8.appspot.com",
    messagingSenderId: "248441553393",
    appId: "1:248441553393:web:493dc767adb2bfd5918450",
    measurementId: "G-3WJ6SFM1XC"
};



const firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
async function handler(req, res) {
    // session = req.session;
    // if (session && session.userid) {
    //   res.status(200).json({ success: 'success' })
    // } else {
    //   res.status(200).json({ failure: 'failure' })
    // }
    let response = [];
    if (req.method === "GET") {
        await db.collection("new-users").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                response.push(doc.data());
            });
        });
        res.status(200).json({
            response
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9063));
module.exports = __webpack_exports__;

})();