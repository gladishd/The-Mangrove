"use strict";
(() => {
var exports = {};
exports.id = 7914;
exports.ids = [7914];
exports.modules = {

/***/ 3179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signupForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "sweetalert"
const external_sweetalert_namespaceObject = require("sweetalert");
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_namespaceObject);
;// CONCATENATED MODULE: ./pages/signup/signupForm.js





class SignupForm extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            showFields: null
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidUpdate() {
        console.log(this.state.showFields);
    }
    onSubmit(e) {
        e.preventDefault();
        external_sweetalert_default()("Is this you? John Doe, Democrat, Pennsylvania Senator-you'll have a base rudimentary profile if you like.", {
            buttons: {
                cancel: "Cancel my new candidacy!",
                catch: {
                    text: "Yes, streamline signup with more verification!",
                    value: "catch"
                },
                signup: true
            }
        }).then((value)=>{
            switch(value){
                case "signup":
                    external_sweetalert_default()("Thank you for making this possible and for finding a way to, instead of automating this, find easy-to-access info on the political sphere.");
                    break;
                case "catch":
                    external_sweetalert_default()("Provide info like identity/background checks that will have to be verified!", "After it's verified, you'll have full access to your already-existing profile and can add stuff like a detailed bio, make posts, etc...", "success");
                    break;
                default:
                    external_sweetalert_default()("You could submit information about new candidates, as well as have those new candidates create profiles for themselves. If you're over-whelmed or this is too much information jam-packed into one page then take a break and try again.");
            }
        });
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
            style: {
                display: "flex",
                textAlign: "justify",
                justifyContent: "space-between",
                height: "100vh",
                flexDirection: "column",
                margin: "10em"
            },
            onSubmit: (e)=>this.onSubmit(e),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                    className: "mb-3",
                    name: "email",
                    controlId: "formBasicEmail",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                            children: "Email address"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            type: "email",
                            placeholder: "Enter email"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Text, {
                            className: "text-muted",
                            children: "We'll never share your email with anyone else."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                    className: "mb-3",
                    controlId: "formBasicPassword",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                            children: "Password"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            type: "password",
                            name: "password",
                            placeholder: "Password"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                    className: "mb-3",
                    controlId: "formBasicCheckbox",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                        type: "checkbox",
                        onChange: (e)=>this.setState({
                                showFields: !this.state.showFields
                            }),
                        label: "Sign up as a governor, senator, representative, state senator, or state representative.",
                        name: "checkbox"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                            children: "New Candidate"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            placeholder: "New Politician Signing Up",
                            disabled: !this.state.showFields
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                            children: "Match me with a profile already created"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Select, {
                            disabled: !this.state.showFields,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "A group of people"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "Sign me up manually"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "County Senator"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "Town Governor"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "State Senator"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "State Representative"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    children: "Country Representative"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                    className: "mb-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                        type: "checkbox",
                        label: "Sign up for information on new candidates and voters",
                        disabled: !this.state.showFields
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                    htmlFor: "inputPassword5",
                    children: "Biography"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                    as: "textarea",
                    id: "inputPassword5",
                    "aria-describedby": "passwordHelpBlock",
                    rows: "10"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Text, {
                    id: "passwordHelpBlock",
                    muted: true,
                    children: "Your biography must be 18-20 paragraphs long, contain letters and numbers, and must not contain spaces, special characters, or emoji unless you're a politician. Especially since we're going to scrape data on all these politicians we need to find the centralized form and that form is you."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "primary",
                    type: "submit",
                    children: "Submit"
                })
            ]
        });
    }
}
/* harmony default export */ const signupForm = (SignupForm);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3179));
module.exports = __webpack_exports__;

})();