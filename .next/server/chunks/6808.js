"use strict";
exports.id = 6808;
exports.ids = [6808];
exports.modules = {

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _arcgis_core_rest_locator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7854);
/* Works Cited.
 * Apartment-Listing-App/MapContainer.jsx at master · allynkalda/Apartment-Listing-App
 * https://github.com/allynkalda/Apartment-Listing-App/blob/master/client/src/components/MapContainer.jsx */ 


// import Button from '@material-ui/core/Button';
// https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-locator.html#:~:text=You%20can%20use%20this%20module,generate%20candidates%20for%20an%20address.

const MapContainer = ({ array , isAdding , getLocation  })=>{
    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const defaultCenter = {
        lat: 40.488,
        lng: -79.918
    };
    const onSelect = (item)=>{
        setSelected(item);
    };
    const success = (position)=>{
        console.log("is this getting looped?");
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const currentPosition = {
            lat: latitude,
            lng: longitude
        };
        // https://developers.arcgis.com/documentation/mapping-apis-and-services/search/reverse-geocoding/
        let pt = currentPosition;
        const geocodingServiceUrl = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
        const params = {
            location: pt
        };
        _arcgis_core_rest_locator__WEBPACK_IMPORTED_MODULE_3__/* .locationToAddress */ .wC(geocodingServiceUrl, params).then((response)=>{
            if (response) {
                showPopup(response);
            }
        }, (err)=>{
            showPopup("No address found.", pt);
        });
        setCurrentPosition(currentPosition);
    };
    const footer = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inner-footer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "location-text",
                    children: "Choose location and press"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    variant: "contained",
                    color: "primary",
                    onClick: ()=>getLocation(currentPosition),
                    children: "Next"
                })
            ]
        })
    });
    const mapStyles = ()=>{
        if (!isAdding) {
            return {
                marginTop: "-20px",
                height: "50vh",
                width: "50vw"
            };
        } else {
            return {
                marginTop: "-20px",
                height: "50vh",
                width: "50vw"
            };
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("IN THE USE EFFECT HOOK", currentPosition);
        console.log("IN THE USE EFFECT HOOK", currentPosition);
        console.log("IN THE USE EFFECT HOOK", currentPosition);
        console.log("IN THE USE EFFECT HOOK", currentPosition);
        console.log("IN THE USE EFFECT HOOK", currentPosition);
        navigator.geolocation.getCurrentPosition(success);
        return ()=>{
            console.log("This will be logged on unmount");
        };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {
                id: "script-loader",
                googleMapsApiKey: "AIzaSyAjnz-RS3z_89N3vUPDHzMLWHeGJZcX2HM",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
                    id: "example-map",
                    mapContainerStyle: mapStyles(),
                    draggable: true,
                    zoom: 13,
                    center: currentPosition.lat ? currentPosition : defaultCenter,
                    children: [
                        currentPosition && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                            position: currentPosition,
                            onClick: ()=>onSelect(currentPosition)
                        }, "currentPositionId"),
                        array ? array.map((item)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                                position: item.location,
                                onClick: ()=>onSelect(item)
                            }, item.id);
                        }) : null
                    ]
                })
            }),
            isAdding ? footer : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapContainer);


/***/ })

};
;