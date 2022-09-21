(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dist/styled-jsx/style.js
var style = __webpack_require__(536);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./helpers/index.js
// helpers/index.js

function parseCookies(req) {
    return external_cookie_default().parse(req ? req.headers.cookie || "" : document.cookie);
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/login.js




function LoginPage({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-bcb4098dba9624d6" + " " + "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-bcb4098dba9624d6",
                        children: "Login"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-bcb4098dba9624d6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "jsx-bcb4098dba9624d6",
                                children: "Homepage "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-bcb4098dba9624d6",
                                children: [
                                    "Data from cookie: ",
                                    data.user
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "utf-8",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "login_style.css",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                        rel: "stylesheet",
                        type: "text/css",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                        rel: "stylesheet",
                        type: "text/css",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
                        className: "jsx-bcb4098dba9624d6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
                        integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",
                        crossorigin: "anonymous",
                        className: "jsx-bcb4098dba9624d6"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/",
                className: "jsx-bcb4098dba9624d6" + " " + "login-page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-bcb4098dba9624d6" + " " + "form",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "jsx-bcb4098dba9624d6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("lottie-player", {
                                    src: "https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json",
                                    background: "transparent",
                                    speed: "1",
                                    style: {
                                        justifyContent: "center"
                                    },
                                    loop: true,
                                    autoplay: true,
                                    className: "jsx-bcb4098dba9624d6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: " username",
                                    className: "jsx-bcb4098dba9624d6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    id: "password",
                                    placeholder: " password",
                                    className: "jsx-bcb4098dba9624d6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "jsx-bcb4098dba9624d6" + " " + "fas fa-eye"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    className: "jsx-bcb4098dba9624d6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    className: "jsx-bcb4098dba9624d6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "jsx-bcb4098dba9624d6",
                                    children: "LOGIN"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "jsx-bcb4098dba9624d6" + " " + "message"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            className: "jsx-bcb4098dba9624d6" + " " + "login-form",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "jsx-bcb4098dba9624d6",
                                children: "SIGN UP"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "jsx-bcb4098dba9624d6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "jsx-bcb4098dba9624d6",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/vercel.svg",
                            alt: "Vercel",
                            className: "jsx-bcb4098dba9624d6" + " " + "logo"
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "84b56b9595ae0240",
                children: ".container.jsx-bcb4098dba9624d6{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-bcb4098dba9624d6{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-bcb4098dba9624d6{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-bcb4098dba9624d6 img.jsx-bcb4098dba9624d6{margin-left:.5rem}footer.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-bcb4098dba9624d6{color:inherit;text-decoration:none}.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6{color:#0070f3;text-decoration:none}.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:hover,.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:focus,.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:active{text-decoration:underline}.title.jsx-bcb4098dba9624d6{margin:0;line-height:1.15;font-size:4rem}.title.jsx-bcb4098dba9624d6,.description.jsx-bcb4098dba9624d6{text-align:center}.description.jsx-bcb4098dba9624d6{line-height:1.5;font-size:1.5rem}code.jsx-bcb4098dba9624d6{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-bcb4098dba9624d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-bcb4098dba9624d6{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-bcb4098dba9624d6:hover,.card.jsx-bcb4098dba9624d6:focus,.card.jsx-bcb4098dba9624d6:active{color:#0070f3;border-color:#0070f3}.card.jsx-bcb4098dba9624d6 h3.jsx-bcb4098dba9624d6{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-bcb4098dba9624d6 p.jsx-bcb4098dba9624d6{margin:0;font-size:1.25rem;line-height:1.5}.logo.jsx-bcb4098dba9624d6{height:1em}@media(max-width:600px){.grid.jsx-bcb4098dba9624d6{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "2323726f93dd16ea",
                children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"
            })
        ]
    });
};
LoginPage.getInitialProps = async ({ req , res  })=>{
    const data = parseCookies(req);
    console.log("what is the data?");
    if (res) {
        console.log("Does res exist? ", res);
        /* If the data object is empty,
       it means the cookie isn't valid.
       If the cookie isn't valid,
       we then redirect the user back to the index page rather than showing a flash of the HomePage before redirecting the user.
       How to use cookies for persisting users in Nextjs - DEV Community 👩‍💻👨 https://dev.to/debosthefirst/how-to-use-cookies-for-persisting-users-in-nextjs-4617 */ if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, {
                Location: "/"
            });
            res.end();
        }
    }
    return {
        data: data && data
    };
};


/***/ }),

/***/ 536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1892).style


/***/ }),

/***/ 1892:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/styled-jsx/dist/index/index.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(41));
module.exports = __webpack_exports__;

})();