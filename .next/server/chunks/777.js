"use strict";
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// pages/login.js



const Login = ()=>{
    const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([
        "user"
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("we are on the login cookies component.");
    });
    const handleSignIn = async (e)=>{
        console.log("we are looking at useEffect, but not in the function");
        try {
            console.log("we are looking at useEffect, but not in the function");
            e.preventDefault();
            // const response = await yourLoginFunction(username) //handle API call to sign in here.
            // const data = response.data
            setCookie("user", JSON.stringify({
                data: "this is the most authentic cookie you've ever authenticated"
            }), {
                path: "/",
                maxAge: 10,
                sameSite: true
            });
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            htmlFor: "username",
            children: [
                "hi there",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "pretty please enter username",
                    onClick: (e)=>handleSignIn(e)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

};
;