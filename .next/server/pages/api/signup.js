"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 9500:
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

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

/***/ 6786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3773);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4826);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// start https://console.firebase.google.com/u/0/project/the-midway-b98d8/settings/general/web:OWUwY2I5MWEtODc0OS00ZjBmLWI1OTQtZWRlZTMyMTI2ZTcx
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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



const firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
async function handler(req, res) {
    // if req.method === 'POST' ... await db.create
    if (req.method === "POST") {
        // Process a POST request
        let body = req.body;
        console.log("Req Body", body);
        console.log("hello!");
        // res.status(200).json({ name: 'John Doe' })
        var data = await db.collection("new-users").add(req.body);
        let data1 = [];
        await db.collection("collection-number-one").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                data1.push(doc.data());
                console.log(doc.data());
            });
        });
        res.status(200).json({
            data1
        });
    } else {
    // Handle any other HTTP method
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6786));
module.exports = __webpack_exports__;

})();