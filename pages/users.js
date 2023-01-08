import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../helpers/styles';
import { createPost, updatePost } from '../helpers/actions/posts';

/**
 * Here we will make the imports from social/client/src/App.js, that is what imports the Form.js component...
 */

import { Container, AppBar, Grow, Grid } from '@material-ui/core';

import { getPosts } from '../helpers/actions/posts';
// import Posts from '../helpers/components/Posts/Posts';
// import Post from '../social/client/src/components/Posts/Post';
import Post from './Posts/Post/Post';

// import Form from './components/Form/Form';
// import logo from './images/logo.png';



/**
 * Now we are done making the imports from ./actions/posts. What remains to be done now?
 *
 * */
import { connect } from 'react-redux';

const mapStateToProps = function (store) {
  return {
    reduxStore: store
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleInt: () => { dispatch(fetchSingleInt()) },
    updatePostThunk: (currentId, postData) => { dispatch(updatePost(currentId, postData)) },
    createPostThunk: (postData) => { dispatch(createPost(postData)) },
    getPostsThunk: () => { dispatch(getPosts()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(class Welcome extends React.Component {
  // export default class Welcome extends React.Component {
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
    this.clear = this.clear.bind(this)
  }

  clear() {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  componentDidMount() {
    /**Instead of doing this in the useEffect hook, */
    //dispatch(getPosts());}, [currentId, dispatch]);



    this.props.getPostsThunk();

    console.log("did we get anything from the currentId, setCurrentId? ", "it may be possible to get things like ", this.props, this.props.currentId, this.props.setCurrentId, this.state)

    let users = JSON.parse(sessionStorage.getItem("users"))
    let map = new Map(Object.entries(users))
    this.setState({
      users: users,
      map,
    })
    // const classes = useStyles()
  }

  componentDidUpdate() {
    console.log("What is the props value? ", this.props)
  }

  setPostData(Whatisit) {
    // e.preventDefault();
    // this.setState({
    //   message: '',
    //   selectedFile: ''
    // })
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log('OfopJ"fpFP')
    console.log("What ist he post object?", Whatisit)
    this.setState({ postData: Whatisit })
    // The postObject should consist of a "message" and a "selectedFile".
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("THe Values on SuBmiT Are ")
    // Focus on currentId
    if (this.state.currentId) {
      // dispatch(updatePost(this.state.currentId, this.state.postData));
      this.props.updatePostThunk(this.state.currentId, this.state.postData)
    } else {
      // dispatch(createPost(this.state.postData));
      console.log("'What' is the createpost thunk being called with ? ", this.state.postData)
      this.props.createPostThunk(this.state.postData)
    }
    // clear();
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
          {
            this.props.reduxStore.posts.length ?
              <Grid container alignItems="stretch" spacing={3}>
                {this.props.reduxStore.posts.map((post) => (
                  <Grid key={post._id} item xs={12} sm={6}>
                    hellloooooo
                    <Post post={post}
                    // setCurrentId={setCurrentId}
                    />
                  </Grid>
                ))}
              </Grid> : <div>There are no posts!</div>
          }
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
                  // e => console.log("The value of e is this ", e);
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
})
