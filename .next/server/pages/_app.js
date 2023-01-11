(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__(7069);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(5515);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./social/client/node_modules/redux/lib/redux.js
var redux = __webpack_require__(1298);
;// CONCATENATED MODULE: ./social/client/src/reducers/posts.js
/* harmony default export */ const posts = ((posts = [], action)=>{
    switch(action.type){
        case "DELETE":
            return posts.filter((post)=>post._id !== action.payload);
        case "UPDATE":
            return posts.map((post)=>post._id === action.payload._id ? action.payload : post);
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [
                ...posts,
                action.payload
            ];
        default:
            return posts;
    }
});

;// CONCATENATED MODULE: ./social/client/src/reducers/index.js


/* harmony default export */ const reducers = ((0,redux/* combineReducers */.UY)({
    posts: posts
}));

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/_app.js
// pages/_app.js



// import 'bootstrap/dist/css/bootstrap.min.css'
// export default function MyApp({ Component, pageProps }) {
//   console.log("gets invoked")
//   return (<CookiesProvider><Component {...pageProps} /></CookiesProvider>)
// }




const store = (0,external_redux_namespaceObject.legacy_createStore)(reducers, (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
function MyApp({ Component , pageProps  }) {
    console.log("gets invoked");
    return(// <CookiesProvider>
    //   <Component {...pageProps} />
    //   </CookiesProvider>
    /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_cookie_.CookiesProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
} // import React from 'react';
 // import ReactDOM from 'react-dom';
 // import { Provider } from 'react-redux';
 // import { legacy_createStore, applyMiddleware, compose } from 'redux';
 // import thunk from 'redux-thunk';
 // import reducers from '../social/client/src/reducers';
 // // import './index.css';
 // import App from './App';
 // import { CookiesProvider } from "react-cookie"
 // const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));
 // export default function MyApp({ Component, pageProps }) {
 //   console.log("gets invoked")
 //   // return (<CookiesProvider><Component {...pageProps} /></CookiesProvider>)
 //   if (typeof window !== 'undefined') {
 //     return (
 //       <Provider store={store}>
 //         <CookiesProvider>
 //           <App />
 //         </CookiesProvider>
 //       </Provider>
 //       // ,
 //       // document.getElementById('root')
 //     )
 //   }
 // };


/***/ }),

/***/ 7069:
/***/ (() => {



/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [298], () => (__webpack_exec__(8265)));
module.exports = __webpack_exports__;

})();