import axios from 'axios'
import React from 'react'
import CookieView from './CookieView.js'
import LoginCookies from './LoginCookiesOld.js'
import LogoutComponent from './LogoutComponent.js'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      cookieValue: null,
      props,
    }
    this.getUsers = this.getUsers.bind(this)
    this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this)
  }

  async dataFetchPoliticians(data) {
    await this.setState({
      cookieValue: data,
    })
  }

  async getUsers() {
    let res = await axios.get(`/api/users`)
    this.setState({
      data: res
    })
  }

  // componentDidUpdate() {
  //   console.log("The component updated on ProfilePageOld, what are the props? ", this.state.props)
  // }

  componentDidMount() {
    console.log("We are on the Profile page component. Let's query the developers.ballotpedia.org API. WHat are the props here?", this.state.props)
    // https://api4.ballotpedia.org/data/election_dates/list?state=WI&type=Special&year=2020&page=1
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "your-api-key");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    fetch("https://api4.ballotpedia.org/data/the-endpoint-name-and-options", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    this.getUsers()
  }

  componentDidUpdate() {
    console.log('component updated! this.state is ', this.state, this.state.cookieValue && this.state.cookieValue.user && this.state.cookieValue.user.data)
  }

  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgb(250,250,250)'
    }}>
      <CookieView propsFn={this.dataFetchPoliticians} />
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length === 0 && "To access user data, sign up along the elected official or running for office path, then log in."
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
        <div>
          This is cool

          Is there a way we can temporarily integrate this function with the UI? What we can do is take a text box or maybe create some kind of search box.

          <input placeHolder="Address"
          // onChange={e => this.setState({ searchQuery: e.target.value })}
          />
          <button onClick={e => this.queryGeocodioAddress(this.state.searchQuery)}>Click Me</button>
          {
            this.state.data && this.state.data.data.response.map(e => <div style={{
              margin: '1em',
              padding: '1em',
              width: '200px',
              border: 'groove',
              borderStyle: 'outset',
              borderWidth: '1px',
              backgroundColor: 'white'
            }}>
              <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} style={{
                width: '50%',
                height: '100px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}></img>
              <div>{e.formBasicCheckbox}</div>
              <div>{e.formBasicEmail}</div>
              <div>{e.formBasicPassword}</div>
              <div>{e.formBasicPasswordConfirm}</div>
              <div>{e.formFirstName}</div>
              <div>{e.formLastName}</div>
              <div>{e.formMiddleInitial}</div>
            </div>)
          }</div>
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && <LogoutComponent />
      }
      <LoginCookies props={this.props} />
    </div>

  }
}
