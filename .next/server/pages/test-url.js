"use strict";
(() => {
var exports = {};
exports.id = 4887;
exports.ids = [4887];
exports.modules = {

/***/ 4279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-pdf"
var external_react_pdf_ = __webpack_require__(5876);
;// CONCATENATED MODULE: ./helpers/components/pdf/single-page.js



function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
    function onDocumentLoadSuccess({ numPages  }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    function changePage(offset) {
        setPageNumber((prevPageNumber)=>prevPageNumber + offset);
    }
    function previousPage() {
        changePage(-1);
    }
    function nextPage() {
        changePage(1);
    }
    const { pdf  } = props;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Document, {
                file: pdf,
                options: {
                    workerSrc: "/pdf.worker.js"
                },
                onLoadSuccess: onDocumentLoadSuccess,
                children: /*#__PURE__*/ _jsx(Page, {
                    pageNumber: pageNumber
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsxs("p", {
                        children: [
                            "Page ",
                            pageNumber || (numPages ? 1 : "--"),
                            " of ",
                            numPages || "--"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        type: "button",
                        disabled: pageNumber <= 1,
                        onClick: previousPage,
                        children: "Previous"
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        type: "button",
                        disabled: pageNumber >= numPages,
                        onClick: nextPage,
                        children: "Next"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./helpers/components/pdf/all-pages.js



function AllPages(props) {
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages  }) {
        setNumPages(numPages);
    }
    const { pdf  } = props;
    return /*#__PURE__*/ _jsx(Document, {
        file: pdf,
        options: {
            workerSrc: "/pdf.worker.js"
        },
        onLoadSuccess: onDocumentLoadSuccess,
        children: Array.from(new Array(numPages), (el, index)=>/*#__PURE__*/ _jsx(Page, {
                pageNumber: index + 1
            }, `page_${index + 1}`))
    });
}

;// CONCATENATED MODULE: ./pages/test-url.js


// import SinglePagePDFViewer from "./components/pdf/single-page";
// import AllPagesPDFViewer from "./components/pdf/all-pages";


/* This is required only if the project file is located
inside the app. Otherwise you can use the external link of the pdf file*/ // import samplePDF from "./sample.pdf";
// import samplePDF from "../public/mangroveBackstory.pdf";
// import "./styles.css";
function App() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "App",
        children: [
            "Comments stuff out",
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}


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
var __webpack_exports__ = (__webpack_exec__(4279));
module.exports = __webpack_exports__;

})();