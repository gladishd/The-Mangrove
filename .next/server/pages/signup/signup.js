"use strict";
(() => {
var exports = {};
exports.id = 5733;
exports.ids = [5733];
exports.modules = {

/***/ 2208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





class Signup extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            submit: null
        };
        this.signup = this.signup.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    redirect(e) {
        e.preventDefault();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/");
    }
    signup(e) {
        e.preventDefault();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/signupForm");
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4a2fc678e31d9f2d" + " " + "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            className: "jsx-4a2fc678e31d9f2d",
                            children: "Signup with us!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            charset: "utf-8",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "login_style.css",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                            rel: "stylesheet",
                            type: "text/css",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                            rel: "stylesheet",
                            type: "text/css",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
                            className: "jsx-4a2fc678e31d9f2d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
                            integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",
                            crossorigin: "anonymous",
                            className: "jsx-4a2fc678e31d9f2d"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-4a2fc678e31d9f2d" + " " + "login-page",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4a2fc678e31d9f2d" + " " + "form",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "jsx-4a2fc678e31d9f2d",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("lottie-player", {
                                        src: "https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json",
                                        background: "transparent",
                                        speed: "1",
                                        style: {
                                            justifyContent: "center"
                                        },
                                        loop: true,
                                        autoplay: true,
                                        className: "jsx-4a2fc678e31d9f2d"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: " username",
                                        className: "jsx-4a2fc678e31d9f2d"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "password",
                                        id: "password",
                                        placeholder: " password",
                                        className: "jsx-4a2fc678e31d9f2d"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "jsx-4a2fc678e31d9f2d" + " " + "fas fa-eye"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        className: "jsx-4a2fc678e31d9f2d"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        className: "jsx-4a2fc678e31d9f2d"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: (e)=>this.redirect(e),
                                        className: "jsx-4a2fc678e31d9f2d",
                                        children: "LOGIN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-4a2fc678e31d9f2d" + " " + "message"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                className: "jsx-4a2fc678e31d9f2d" + " " + "login-form",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: (e)=>this.signup(e),
                                    className: "jsx-4a2fc678e31d9f2d",
                                    children: "SIGN UP"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                    className: "jsx-4a2fc678e31d9f2d",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-4a2fc678e31d9f2d",
                        children: [
                            "Powered by",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/vercel.svg",
                                alt: "Vercel",
                                className: "jsx-4a2fc678e31d9f2d" + " " + "logo"
                            })
                        ]
                    })
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "84b56b9595ae0240",
                    children: ".container.jsx-4a2fc678e31d9f2d{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-4a2fc678e31d9f2d{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4a2fc678e31d9f2d{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4a2fc678e31d9f2d img.jsx-4a2fc678e31d9f2d{margin-left:.5rem}footer.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-4a2fc678e31d9f2d{color:inherit;text-decoration:none}.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d{color:#0070f3;text-decoration:none}.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:hover,.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:focus,.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:active{text-decoration:underline}.title.jsx-4a2fc678e31d9f2d{margin:0;line-height:1.15;font-size:4rem}.title.jsx-4a2fc678e31d9f2d,.description.jsx-4a2fc678e31d9f2d{text-align:center}.description.jsx-4a2fc678e31d9f2d{line-height:1.5;font-size:1.5rem}code.jsx-4a2fc678e31d9f2d{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-4a2fc678e31d9f2d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-4a2fc678e31d9f2d{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-4a2fc678e31d9f2d:hover,.card.jsx-4a2fc678e31d9f2d:focus,.card.jsx-4a2fc678e31d9f2d:active{color:#0070f3;border-color:#0070f3}.card.jsx-4a2fc678e31d9f2d h3.jsx-4a2fc678e31d9f2d{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-4a2fc678e31d9f2d p.jsx-4a2fc678e31d9f2d{margin:0;font-size:1.25rem;line-height:1.5}.logo.jsx-4a2fc678e31d9f2d{height:1em}@media(max-width:600px){.grid.jsx-4a2fc678e31d9f2d{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "6abe3706df0487d9",
                    children: 'html,body{padding:0;margin:0;font-family:"Times New Roman",Times,serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}'
                })
            ]
        });
    }
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2208));
module.exports = __webpack_exports__;

})();