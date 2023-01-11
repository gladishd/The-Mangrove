"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 9370:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Sequelize = __webpack_require__(496);
const pkg = __webpack_require__(3430);
const databaseName = pkg.name + ( false ? 0 : "");
const database = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:3000/${databaseName}`, {
    logging: false
});
module.exports = database;


/***/ }),

/***/ 3430:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"example-app","description":"a really cool app","version":"1.0.0","engines":{"node":"16.18.1"},"private":true,"scripts":{"dev":"next dev","build":"next build","start":"concurrently \\"next start\\" \\"cd social && cd client && npm start\\" \\"cd social && cd server && npm start\\"","postinstall":"npm run download-webviewer","download-webviewer":"npx @pdftron/webviewer-downloader"},"dependencies":{"@arcgis/core":"^4.24.7","@material-ui/core":"^4.12.4","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.58","@pdftron/webviewer":"^8.9.0","@phuocng/react-pdf-viewer":"^1.7.0","@react-google-maps/api":"^2.13.1","@redux-devtools/core":"^3.9.0","@redux-devtools/dock-monitor":"^1.4.0","@redux-devtools/log-monitor":"^2.3.0","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","axios":"^0.19.2","concurrently":"^7.6.0","convert-excel-to-json":"^1.7.0","eslint-config-airbnb":"^18.2.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","express":"^4.18.1","firebase-admin":"^11.0.1","firestore-export-import":"^1.2.1","fs":"^0.0.1-security","geocodio-library-node":"^1.4.0","google-images":"^0.1.4","jwt-decode":"^3.1.2","material-ui-chip-input":"^1.1.0","moment":"^2.27.0","next":"latest","pdf-viewer-reactjs":"^2.2.3","pg":"^8.8.0","react":"^18","react-bootstrap":"^2.5.0","react-cookie":"^4.1.1","react-dom":"^18","react-file-base64":"^1.0.3","react-ga":"^3.3.1","react-google-login":"^5.1.25","react-grid-carousel":"^1.0.1","react-items-carousel":"^2.8.0","react-multi-carousel":"^2.8.2","react-pdf":"^6.2.0","react-redux":"^7.2.9","react-router-dom":"^5.2.0","react-snowfall":"^1.2.1","redux":"^4.0.5","redux-thunk":"^2.3.0","sequelize":"^6.21.4","sweetalert":"^2.1.2"},"devDependencies":{"@material-ui/core":"^4.12.4","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.58","@pdftron/webviewer":"^8.9.0","@redux-devtools/core":"^3.9.0","@redux-devtools/dock-monitor":"^1.4.0","@redux-devtools/log-monitor":"^2.3.0","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","arcgis":"^0.0.2","axios":"^0.27.2","cookie":"^0.5.0","cookie-parser":"^1.4.6","css-loader":"^6.7.2","eslint-config-airbnb":"^18.2.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","express-session":"^1.17.3","firebase":"^9.9.4","firebase-admin":"^11.0.1","jwt-decode":"^3.1.2","material-ui-chip-input":"^1.1.0","moment":"^2.27.0","pdf-viewer-reactjs":"^2.2.3","pg":"^8.8.0","react-bootstrap":"^2.5.0","react-cookie":"^4.1.1","react-file-base64":"^1.0.3","react-google-login":"^5.1.25","react-redux":"^7.2.9","react-router-dom":"^5.2.0","react-scripts":"^2.1.3","redux":"^4.0.5","redux-thunk":"^2.3.0","sequelize":"^6.21.4","sweetalert2":"^11.4.8","universal-cookie":"^4.0.4"}}');

/***/ })

};
;