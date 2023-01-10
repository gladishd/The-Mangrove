"use strict";
exports.id = 6856;
exports.ids = [6856];
exports.modules = {

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);



function App({ propsFn  }) {
    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        propsFn(cookies);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: cookies.user && console.log(cookies.user)
    });
}


/***/ }),

/***/ 6856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_items_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4320);
/* harmony import */ var react_items_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_items_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CookieView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2663);
/* harmony import */ var _LoginCookiesOld_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6694);
/* harmony import */ var _LogoutComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6114);
/* harmony import */ var react_snowfall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4993);
/* harmony import */ var react_snowfall__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_snowfall__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MapContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6808);









class Users extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            locationForMapContainer: {},
            activeItemIndex: 0,
            cookieValue: null,
            arcGISData: null,
            showUsers: false,
            data: null,
            props
        };
        this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this);
        this.setActiveItemIndex = this.setActiveItemIndex.bind(this);
        this.getArcGISData = this.getArcGISData.bind(this);
        this.showUsers = this.showUsers.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }
    setActiveItemIndex(value) {
        this.setState({
            activeItemIndex: value
        });
    }
    showUsers(e) {
        e.preventDefault();
        this.setState({
            showUsers: !this.state.showUsers
        });
    }
    async dataFetchPoliticians(data) {
        await this.setState({
            cookieValue: data
        });
    }
    async getUsers() {
        let res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/users`);
        this.setState({
            data: res
        });
    }
    async getArcGISData() {
        let res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/ArcGISData`);
        console.log("Fetches Arc GIS Data ", res);
        this.setState({
            arcGISData: res
        });
    }
    async componentDidMount() {
        await this.getArcGISData();
        this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1029 Main Street, Pittsburgh, PA 15215");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", "your-api-key");
        var requestOptions = {
            method: "GET",
            headers: myHeaders
        };
        fetch("https://api4.ballotpedia.org/data/the-endpoint-name-and-options", requestOptions).then((response)=>response.text()).then((result)=>console.log(result)).catch((error)=>console.log("error", error));
        this.getUsers();
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexWrap: "wrap",
                backgroundColor: "rgb(255,255,255)",
                height: "0",
                width: "auto"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CookieView_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    propsFn: this.dataFetchPoliticians
                }),
                this.state.cookieValue && Object.keys(this.state.cookieValue).length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_snowfall__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "auto",
                        justifyContent: "space-between"
                    },
                    children: [
                        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "unTraditionalButton",
                            style: {
                                fontSize: "1em",
                                fontWeight: "500"
                            },
                            onClick: (e)=>this.showUsers(e),
                            children: "Show Users"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "addressSearchClass",
                            placeHolder: "1029 Main Street, Pittsburgh, PA 15215",
                            style: {
                                width: "50vw",
                                padding: "1em",
                                borderStyle: "ridge"
                            },
                            onChange: (e)=>this.setState({
                                    searchQueryAddress: e.target.value
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "unTraditionalButton",
                            onClick: (e)=>this.props.queryGeocodioLatLng(this.state.searchQueryLatLng || "38.9002898, -76.9990361"),
                            children: "Query Geocodio Lat/Lng"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "addressSearchClass",
                            placeHolder: "38.9002898, -76.9990361",
                            style: {
                                width: "20em",
                                padding: "1em",
                                borderStyle: "ridge"
                            },
                            onChange: (e)=>this.setState({
                                    searchQueryLatLng: e.target.value
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "unTraditionalButton",
                            onClick: (e)=>this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1109 N Highland St, Arlington, VA 22201"),
                            children: "Query Geocodio Address"
                        })
                    ]
                }),
                this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && this.state.showUsers && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                padding: `0 ${40}px`
                            },
                            children: [
                                this.state.arcGISData && this.state.arcGISData.config && this.state.arcGISData.config.url,
                                this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0] && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.properties.name,
                                this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0] && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.type,
                                this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[1] && this.state.arcGISData.data.response[1].docTitle,
                                this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[2] && this.state.arcGISData.data.response[2].docTitle,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MapContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    array: [
                                        {
                                            id: 1,
                                            location: {
                                                lat: 40.488,
                                                lng: -79.918
                                            }
                                        },
                                        {
                                            id: 2,
                                            location: {
                                                lat: 40.588,
                                                lng: -79.818
                                            }
                                        },
                                        {
                                            id: 3,
                                            location: {
                                                lat: 40.490,
                                                lng: -79.928
                                            }
                                        },
                                        {
                                            id: 4,
                                            location: {
                                                lat: 40.450,
                                                lng: -79.948
                                            }
                                        },
                                        {
                                            id: 1,
                                            location: {
                                                lat: 40.481,
                                                lng: -79.922
                                            }
                                        }
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_items_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    activeItemIndex: this.state.activeItemIndex,
                                    requestToChangeActive: this.setActiveItemIndex,
                                    numberOfCards: 29,
                                    gutter: 20,
                                    leftChevron: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: "<"
                                    }),
                                    rightChevron: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: ">"
                                    }),
                                    outsideChevron: true,
                                    chevronWidth: 10,
                                    children: this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response.splice(0, 3) && this.state.arcGISData.data.response.map((e)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                margin: "1em",
                                                padding: "1em",
                                                width: "200px",
                                                border: "groove",
                                                borderStyle: "outset",
                                                borderWidth: "1px",
                                                backgroundColor: "white"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "https://source.unsplash.com/random",
                                                    style: {
                                                        width: "50%",
                                                        height: "100px",
                                                        display: "block",
                                                        marginLeft: "auto",
                                                        marginRight: "auto"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.geometry.type
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.SHAPE_Area
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.acres
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.county_ward
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.municode
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.municode2
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.objectid
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.sqmiles
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.ward
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.ward_county
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: e.properties.wardtext
                                                })
                                            ]
                                        });
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                width: "100vw",
                                flexWrap: "wrap",
                                backgroundColor: "rgb(10,20,30)"
                            },
                            children: this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response.splice(0, 3) && this.state.arcGISData.data.response.map((e, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        margin: "1em",
                                        padding: "1em",
                                        width: "200px",
                                        border: "groove",
                                        borderStyle: "outset",
                                        borderWidth: "1px",
                                        backgroundColor: "white",
                                        fontFamily: "Apple Chancery, cursive	"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "https://source.unsplash.com/random",
                                            style: {
                                                width: "50%",
                                                height: "100px",
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bolder"
                                            },
                                            children: e.geometry.type
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "boldest"
                                            },
                                            children: e.properties.SHAPE_Area
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: e.properties.acres
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: e.properties.county_ward
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: e.properties.municode
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: e.properties.municode2
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: e.properties.objectid
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: e.properties.sqmiles
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "1000"
                                            },
                                            children: e.properties.ward
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: e.properties.ward_county
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: e.properties.wardtext
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: e.geometry.coordinates[index][0]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: e.geometry.coordinates[index][1]
                                        })
                                    ]
                                });
                            })
                        }),
                        this.state.data && this.state.data.data.response.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    margin: "1em",
                                    padding: "1em",
                                    width: "200px",
                                    border: "groove",
                                    borderStyle: "outset",
                                    borderWidth: "1px",
                                    backgroundColor: "white"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
                                        style: {
                                            width: "50%",
                                            height: "100px",
                                            display: "block",
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formBasicCheckbox
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formBasicEmail
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formBasicPassword
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formBasicPasswordConfirm
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formFirstName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formLastName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: e.formMiddleInitial
                                    })
                                ]
                            }))
                    ]
                }),
                this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoutComponent_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginCookiesOld_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    props: this.props
                })
            ]
        });
    }
}


/***/ })

};
;