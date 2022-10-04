import axios from 'axios'
import React from 'react'
import CookieView from './CookieView.js'
import LoginCookies from './LoginCookiesOld.js'
import LogoutComponent from './LogoutComponent.js'
import Snowfall from 'react-snowfall'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      cookieValue: null,
      props,
      showUsers: false,
    }
    this.getUsers = this.getUsers.bind(this)
    this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this)
    this.showUsers = this.showUsers.bind(this)
  }

  showUsers(e) {
    e.preventDefault()
    console.log('did the showUsers function get triggered?')
    this.setState({
      showUsers: !this.state.showUsers
    })
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
    this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1109 N Highland St, Arlington, VA 22201")
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

  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgb(250,250,250)'
    }} >
      {this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
        <button className="unTraditionalButton" onClick={e => this.showUsers(e)}>Show Users</button>
      }
      <CookieView propsFn={this.dataFetchPoliticians} />
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length === 0 && <Snowfall />
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
        <div>
          For when we are able to add general assembly members to the search function...!

          <input className='addressSearchClass' placeHolder="1109 N Highland St, Arlington, VA 22201" style={{ width: '20em', padding: '1em', borderStyle: "ridge" }}
            onChange={e => this.setState({ searchQueryAddress: e.target.value })}
          />
          <button className='unTraditionalButton' onClick={e => this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1109 N Highland St, Arlington, VA 22201")}>Search</button>
        </div>}
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && this.state.showUsers &&
        <div>
          hello
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
          }
        </div>
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && <LogoutComponent />
      }

      {/* {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length == 0 && <LogoutComponent />
      } */}
      <LoginCookies props={this.props} />
    </div>

  }
}
