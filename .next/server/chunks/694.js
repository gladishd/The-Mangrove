"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 6694:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
// pages/login.js




const Login = (props)=>{
    const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([
        "user"
    ]);
    const [cookieData, setCookieData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.cookieSet); // this runs only once, when the component is mounted, not when i.e. contact updates.
    const [variable, setVariable] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCookieData(props.cookieSet);
        return ()=>{
            console.log("This will be logged on unmount");
        };
    }, [
        props.cookieSet
    ]) // now this listens to changes in contact
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
        if (props.cookieSet && variable == 0) {
            setVariable(1);
            setTimeout(()=>{
                console.log("Delayed for 2 seconds.");
                console.log(props.cookieSet);
                // Router.push('/')
                window.location.reload(true);
            }, "0");
            setCookie("user", JSON.stringify({
                data: "this is the most authentic cookie you've ever authenticated"
            }), {
                path: "/",
                maxAge: 3600,
                sameSite: true
            });
        // Absolutely not. Commenting out Router.push('/') makes the infinite loop even faster than before!
        }
        return ()=>{
            console.log("This will be logged on unmount");
        };
    });
    const handleSignIn = async (e)=>{
        try {
            e.preventDefault();
        // const response = await yourLoginFunction(username) //handle API call to sign in here.
        // const data = response.data
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "username"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

};
;