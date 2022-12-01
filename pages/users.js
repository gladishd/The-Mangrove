import React from "react";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null,
      map: null,
    }
  }
  componentDidMount() {
    let users = JSON.parse(sessionStorage.getItem("users"))
    let map = new Map(Object.entries(users))
    this.setState({
      users: users,
      map,
    })

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

        </div>
      </div>
    </div>
  }
}
