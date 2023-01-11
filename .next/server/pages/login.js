"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
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
        className: "jsx-4a2fc678e31d9f2d" + " " + "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-4a2fc678e31d9f2d",
                        children: "Login"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-4a2fc678e31d9f2d",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "jsx-4a2fc678e31d9f2d",
                                children: "Homepage "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-4a2fc678e31d9f2d",
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
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "utf-8",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "login_style.css",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                        rel: "stylesheet",
                        type: "text/css",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600",
                        rel: "stylesheet",
                        type: "text/css",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
                        className: "jsx-4a2fc678e31d9f2d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
                        integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",
                        crossorigin: "anonymous",
                        className: "jsx-4a2fc678e31d9f2d"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/",
                className: "jsx-4a2fc678e31d9f2d" + " " + "login-page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-4a2fc678e31d9f2d" + " " + "form",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "jsx-4a2fc678e31d9f2d",
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
                                    className: "jsx-4a2fc678e31d9f2d"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: " username",
                                    className: "jsx-4a2fc678e31d9f2d"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    id: "password",
                                    placeholder: " password",
                                    className: "jsx-4a2fc678e31d9f2d"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "jsx-4a2fc678e31d9f2d" + " " + "fas fa-eye"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    className: "jsx-4a2fc678e31d9f2d"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    className: "jsx-4a2fc678e31d9f2d"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "jsx-4a2fc678e31d9f2d",
                                    children: "LOGIN"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "jsx-4a2fc678e31d9f2d" + " " + "message"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            className: "jsx-4a2fc678e31d9f2d" + " " + "login-form",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "jsx-4a2fc678e31d9f2d",
                                children: "SIGN UP"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "jsx-4a2fc678e31d9f2d",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "jsx-4a2fc678e31d9f2d",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/vercel.svg",
                            alt: "Vercel",
                            className: "jsx-4a2fc678e31d9f2d" + " " + "logo"
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "84b56b9595ae0240",
                children: ".container.jsx-4a2fc678e31d9f2d{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-4a2fc678e31d9f2d{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4a2fc678e31d9f2d{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4a2fc678e31d9f2d img.jsx-4a2fc678e31d9f2d{margin-left:.5rem}footer.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-4a2fc678e31d9f2d{color:inherit;text-decoration:none}.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d{color:#0070f3;text-decoration:none}.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:hover,.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:focus,.title.jsx-4a2fc678e31d9f2d a.jsx-4a2fc678e31d9f2d:active{text-decoration:underline}.title.jsx-4a2fc678e31d9f2d{margin:0;line-height:1.15;font-size:4rem}.title.jsx-4a2fc678e31d9f2d,.description.jsx-4a2fc678e31d9f2d{text-align:center}.description.jsx-4a2fc678e31d9f2d{line-height:1.5;font-size:1.5rem}code.jsx-4a2fc678e31d9f2d{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-4a2fc678e31d9f2d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-4a2fc678e31d9f2d{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-4a2fc678e31d9f2d:hover,.card.jsx-4a2fc678e31d9f2d:focus,.card.jsx-4a2fc678e31d9f2d:active{color:#0070f3;border-color:#0070f3}.card.jsx-4a2fc678e31d9f2d h3.jsx-4a2fc678e31d9f2d{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-4a2fc678e31d9f2d p.jsx-4a2fc678e31d9f2d{margin:0;font-size:1.25rem;line-height:1.5}.logo.jsx-4a2fc678e31d9f2d{height:1em}@media(max-width:600px){.grid.jsx-4a2fc678e31d9f2d{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6abe3706df0487d9",
                children: 'html,body{padding:0;margin:0;font-family:"Times New Roman",Times,serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}'
            })
        ]
    });
}
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9780));
module.exports = __webpack_exports__;

})();