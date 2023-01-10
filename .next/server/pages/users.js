"use strict";
(() => {
var exports = {};
exports.id = 2892;
exports.ids = [2892,5036,4931];
exports.modules = {

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
;// CONCATENATED MODULE: external "react-file-base64"
const external_react_file_base64_namespaceObject = require("react-file-base64");
var external_react_file_base64_default = /*#__PURE__*/__webpack_require__.n(external_react_file_base64_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./helpers/styles.js

/* harmony default export */ const styles = ((0,styles_.makeStyles)((theme)=>({
        mainContainer: {
            display: "flex",
            alignItems: "center"
        },
        smMargin: {
            margin: theme.spacing(1)
        },
        actionDiv: {
            textAlign: "center"
        }
    })));

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./helpers/actions/postsAPI.js
// import axios from 'axios';
// const url = 'http://localhost:5000/posts';
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// const url = 'http://localhost:5000/posts';
const url = "https://project-mern-memories.onrender.com/posts";
const fetchPosts = ()=>{
    console.log("We are fetching with the 'input'", url);
    return external_axios_default().get(url);
};
const createPost = (newPost)=>{
    console.log("The url is what is it? provided in the global context. The real input we have is ", newPost);
    external_axios_default().post(url, newPost);
};
const updatePost = (id, updatedPost)=>{
    console.log("We can still update the post but we do it with id", id, "and updatedPost ", updatedPost);
    external_axios_default().patch(`${url}/${id}`, updatedPost);
};
const deletePost = (id)=>{
    console.log("We are about to delete a post at this Id", id);
    axios.delete(`${url}/${id}`);
};

;// CONCATENATED MODULE: ./helpers/actions/posts.js
// import * as api from '../api/index.js';

// Action Creators
const getPosts = ()=>async (dispatch)=>{
        try {
            const { data  } = await fetchPosts();
            console.log("What'st he data any anohwohowho ho w", data);
            dispatch({
                type: "FETCH_ALL",
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
const posts_createPost = (post)=>async (dispatch)=>{
        console.log("What is the post?100509093i3 ", post);
        try {
            const { data  } = await createPost(post);
            // dispatch({ type: 'CREATE', payload: data });
            dispatch({
                type: "CREATE",
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
const posts_updatePost = (id, post)=>async (dispatch)=>{
        try {
            const { data  } = await updatePost(id, post);
            dispatch({
                type: "UPDATE",
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
const posts_deletePost = (id)=>async (dispatch)=>{
        try {
            await api.deletePost(id);
            dispatch({
                type: "DELETE",
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    };

// EXTERNAL MODULE: ./pages/Posts/Post/Post.js
var Post = __webpack_require__(6189);
;// CONCATENATED MODULE: ./pages/users.js







/**
 * Here we will make the imports from social/client/src/App.js, that is what imports the Form.js component...
 */ 

// import Posts from '../helpers/components/Posts/Posts';
// import Post from '../social/client/src/components/Posts/Post';

// import Form from './components/Form/Form';
// import logo from './images/logo.png';
/**
 * Now we are done making the imports from ./actions/posts. What remains to be done now?
 *
 * */ 
const mapStateToProps = function(store) {
    return {
        reduxStore: store
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        getSingleInt: ()=>{
            dispatch(fetchSingleInt());
        },
        updatePostThunk: (currentId, postData1)=>{
            dispatch(posts_updatePost(currentId, postData1));
        },
        createPostThunk: (postData1)=>{
            dispatch(posts_createPost(postData1));
        },
        getPostsThunk: ()=>{
            dispatch(getPosts());
        }
    };
};
/* harmony default export */ const users = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(class Welcome extends (external_react_default()).Component {
    // export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: null,
            map: null,
            message: "",
            selectedFile: "",
            postData: null,
            currentId: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setPostData = this.setPostData.bind(this);
        this.clear = this.clear.bind(this);
    }
    clear() {
        setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
        });
    }
    componentDidMount() {
        /**Instead of doing this in the useEffect hook, */ //dispatch(getPosts());}, [currentId, dispatch]);
        this.props.getPostsThunk();
        console.log("did we get anything from the currentId, setCurrentId? ", "it may be possible to get things like ", this.props, this.props.currentId, this.props.setCurrentId, this.state);
        let users = JSON.parse(sessionStorage.getItem("users"));
        let map = new Map(Object.entries(users));
        this.setState({
            users: users,
            map
        });
    // const classes = useStyles()
    }
    componentDidUpdate() {
        console.log("What is the props value? ", this.props);
    }
    setPostData(Whatisit) {
        // e.preventDefault();
        // this.setState({
        //   message: '',
        //   selectedFile: ''
        // })
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log('OfopJ"fpFP');
        console.log("What ist he post object?", Whatisit);
        this.setState({
            postData: Whatisit
        });
    // The postObject should consist of a "message" and a "selectedFile".
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("THe Values on SuBmiT Are ");
        // Focus on currentId
        if (this.state.currentId) {
            // dispatch(updatePost(this.state.currentId, this.state.postData));
            this.props.updatePostThunk(this.state.currentId, this.state.postData);
        } else {
            // dispatch(createPost(this.state.postData));
            console.log("'What' is the createpost thunk being called with ? ", this.state.postData);
            this.props.createPostThunk(this.state.postData);
        }
    // clear();
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    children: [
                        "Hello, ",
                        this.state.users && this.state.users.Name
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "palegoldenrod"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                backgroundColor: "royalblue",
                                height: "100vh",
                                width: "50vw"
                            },
                            children: [
                                this.props.reduxStore.posts.length ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    container: true,
                                    alignItems: "stretch",
                                    spacing: 3,
                                    children: this.props.reduxStore.posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 6,
                                            children: [
                                                "hellloooooo",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Post["default"], {
                                                    post: post
                                                })
                                            ]
                                        }, post._id))
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "There are no posts!"
                                }),
                                "This half will be the same thing we had on the previous, page, this one will have Name, Party, and Position; the design. There will be also be more information such as Phone, Address, Bio, ....",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Assumed Office: "
                                        }),
                                        this.state.users && this.state.users.AssumedOffice
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "District: "
                                        }),
                                        this.state.users && this.state.users.District
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Party: "
                                        }),
                                        this.state.users && this.state.users.Party
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "State: "
                                        }),
                                        this.state.users && this.state.users.State
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                backgroundColor: "aqua",
                                height: "100vh",
                                width: "50vw"
                            },
                            children: [
                                "Social Feed",
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        autoComplete: "off",
                                        noValidate: true,
                                        //  className={`${classes.root} ${classes.form}`}
                                        onSubmit: (e)=>this.handleSubmit(e),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                variant: "h6",
                                                children: "a Post "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                name: "message",
                                                variant: "outlined",
                                                label: "Message",
                                                fullWidth: true,
                                                // value={postData.message}
                                                onChange: // e => console.log("The value of e is this ", e);
                                                (e)=>this.setPostData({
                                                        ...this.state.postData,
                                                        message: e.target.value
                                                    })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_file_base64_default()), {
                                                    type: "file",
                                                    multiple: false,
                                                    onDone: ({ base64  })=>setPostData({
                                                            ...postData,
                                                            selectedFile: base64
                                                        })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                // className={classes.buttonSubmit}
                                                variant: "contained",
                                                color: "primary",
                                                size: "large",
                                                type: "submit",
                                                fullWidth: true,
                                                children: "Submit"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                variant: "contained",
                                                color: "secondary",
                                                size: "small",
                                                // onClick={clear}
                                                fullWidth: true,
                                                children: "Clear"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}));


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 5652:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ 3992:
/***/ ((module) => {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ 1822:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ThumbUpAlt");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [4811,6189], () => (__webpack_exec__(991)));
module.exports = __webpack_exports__;

})();