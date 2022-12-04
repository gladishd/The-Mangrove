import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { createPost, updatePost } from '../helpers/actions/posts';

/**
 * Here we will make the imports from social/client/src/App.js, that is what imports the Form.js component...
 */

import { Container, AppBar, Grow, Grid } from '@material-ui/core';

import { getPosts } from '../helpers/actions/posts';
import Posts from '../helpers/components/Posts/Posts';
// import Form from './components/Form/Form';
// import logo from './images/logo.png';



/**
 * Now we are done making the imports from ./actions/posts. What remains to be done now?
 *
 * */
import { connect } from 'react-redux';
// import { fetchSingleInt, duplicateCurrentInt, removeIntThunk, updateIntThunk } from './redux/reducer1';
// import { fetchTextThunkCreator, updateTextThunkCreator } from './redux/reducer2'; - redux-demo folder
// const mapStateToProps = function (store) {
//   return {
//     reduxStore: store
//   };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSingleInt: () => { dispatch(fetchSingleInt()) },
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(class Welcome extends React.Component {
export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null,
      map: null,
      message: '',
      selectedFile: '',
      postData: null,
      currentId: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPostData = this.setPostData.bind(this)
  }

  componentDidMount() {
    /**Instead of doing this in the useEffect hook, */
    //dispatch(getPosts());}, [currentId, dispatch]);


    console.log("did we get anything from the currentId, setCurrentId? ", "it may be possible to get things like ", this.props, this.props.currentId, this.props.setCurrentId)


    let users = JSON.parse(sessionStorage.getItem("users"))
    let map = new Map(Object.entries(users))
    this.setState({
      users: users,
      map,
    })
    // const classes = useStyles()
  }

  setPostData(e, postObject) {
    // e.preventDefault();
    // this.setState({
    //   message: '',
    //   selectedFile: ''
    // })
    this.setState(postObject)
    // The postObject should consist of a "message" and a "selectedFile".
  }

  handleSubmit(e) {
    e.preventDefault();
    // Focus on currentId
    if (this.state.currentId) {
      dispatch(updatePost(this.state.currentId, this.state.postData));
    } else {
      dispatch(createPost(this.state.postData));
    }
    clear();
  }

  render() {
    return <div>
      <h1>Hello, {this.state.users && this.state.users.Name}</h1>
      <div style={{
        display: "flex",
        flexDirection: 'row',
        height: "100vh",
        width: '100vw',
        backgroundColor: 'palegoldenrod'
      }}>
        <div style={{
          backgroundColor: 'royalblue',
          height: '100vh',
          width: '50vw'
        }}>
          This half will be the same thing we had on the previous, page, this one will have Name, Party, and Position; the design. There will be also be more information such as Phone, Address, Bio, ....
          <div>
            <b>Assumed Office: </b>
            {
              this.state.users && this.state.users.AssumedOffice
            }
          </div>
          <div>
            <b>District: </b>
            {
              this.state.users && this.state.users.District
            }
          </div>
          <div>
            <b>Party: </b>
            {
              this.state.users && this.state.users.Party
            }
          </div>
          <div>
            <b>State: </b>
            {
              this.state.users && this.state.users.State
            }
          </div>

        </div>
        <div style={{
          backgroundColor: 'aqua',
          height: '100vh',
          width: '50vw'
        }}>
          Social Feed
          <Paper
          // className={classes.paper}
          >
            <form autoComplete='off' noValidate
              //  className={`${classes.root} ${classes.form}`}
              onSubmit={e => this.handleSubmit(e)}
            >
              <Typography variant="h6">
                {/* {currentId ? 'Editing' : 'Creating'} */}
                a Post </Typography>

              <TextField name="message" variant="outlined" label="Message" fullWidth
                // value={postData.message}
                onChange={
                  (e) => this.setPostData({ ...this.state.postData, message: e.target.value })
                } />
              <div
              // className={classes.fileInput}
              >
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
              </div>
              <Button
                // className={classes.buttonSubmit}
                variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
              <Button variant="contained" color="secondary" size="small"
                // onClick={clear}
                fullWidth>Clear</Button>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  }
}
