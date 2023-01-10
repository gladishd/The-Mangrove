"use strict";
(() => {
var exports = {};
exports.id = 7587;
exports.ids = [7587];
exports.modules = {

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5876);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_2__);
// import { useEffect, useRef } from 'react';
// export default function HomePage() {
//   const viewer = useRef(null);
//   useEffect(() => {
//     import('@pdftron/webviewer').then(() => {
//       WebViewer(
//         {
//           path: '/lib',
//           initialDoc: '/files/mangroveBackstory.pdf',
//         },
//         viewer.current,
//       ).then((instance) => {
//         const { docViewer } = instance;
//         // you can now call WebViewer APIs here...
//       });
//     })
//   }, []);
//   return (
//     <div>
//       <div ref={viewer} style={{ height: "100vh" }}></div>
//     </div>
//   );
// }
// //https://github.com/The-Shy7/react-pdf-viewer/blob/main/src/App.js
// //npm install @phuocng/react-pdf-viewer
// import React from 'react';
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// // import filePDF from '../public/files/mangroveBackstory.pdf'
// // import './App.css'
// function App() {
//   return (
//     <div className="App">
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
//         <div id="pdfviewer">
//           <Viewer fileUrl={"./mangroveBackstory.pdf"} />
//         </div>
//       </Worker>
//     </div>
//   );
// }
// export default App;
// import React, { useEffect } from 'react'
// import ReactGA from 'react-ga'
// import PDFViewer from 'pdf-viewer-reactjs'
// import Router from 'next/router'
// const ExamplePDFViewer = () => {
//   useEffect(() => {
//     ReactGA.initialize('UA-161923401-1');
//     ReactGA.pageview(window.location.pathname);
//     const isWindowClient = typeof window === "object";
//     const windowSize =
//       isWindowClient ? window.innerWidth : null
//   })
//   return (
//     <div style={{
//       zoom: "70%"
//     }}>
//       <PDFViewer style={{
//         zoom: "70%"
//       }}
//         document={{
//           url: 'mangroveBackstory.pdf',
//         }}
//       />
//     </div>
//   )
// }
// export default ExamplePDFViewer
// import pdf from '../public/mangroveBackstory.pdf';



function MyApp() {
    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    function onDocumentLoadSuccess({ numPages  }) {
        setNumPages(numPages);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "hi"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5876:
/***/ ((module) => {

module.exports = require("react-pdf");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3434));
module.exports = __webpack_exports__;

})();