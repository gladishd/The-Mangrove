import React from "react";

export default class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
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
