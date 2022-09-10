import axios from 'axios'
import React from 'react'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.getUsers = this.getUsers.bind(this)
  }

  async getUsers() {
    let res = await axios.get(`/api/users`)
    this.setState({
      data: res
    })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgb(250,250,250)'
    }}>
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
}
