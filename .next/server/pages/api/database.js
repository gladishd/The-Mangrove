"use strict";
(() => {
var exports = {};
exports.id = 562;
exports.ids = [562,162,976];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const database = __webpack_require__(6899);
__webpack_require__(3923);
module.exports = database;


/***/ }),

/***/ 3923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Sequelize = __webpack_require__(496);
const database = __webpack_require__(6899);
const Candidate = database.define("candidate", {
    candidateId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    candidateName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    candidateImage: {
        type: Sequelize.STRING
    },
    partyId: {
        type: Sequelize.INTEGER,
        defaultValue: null
    }
});
module.exports = Candidate;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [899], () => (__webpack_exec__(8308)));
module.exports = __webpack_exports__;

})();