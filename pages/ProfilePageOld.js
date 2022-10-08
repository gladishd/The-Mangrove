import axios from 'axios'
// import React from 'react'
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import CookieView from './CookieView.js'
import LoginCookies from './LoginCookiesOld.js'
import LogoutComponent from './LogoutComponent.js'
import Snowfall from 'react-snowfall'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItemIndex: 0,
      arcGISData: null,
      cookieValue: null,
      data: null,
      props,
      showUsers: false,
    }
    this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this)
    this.getArcGISData = this.getArcGISData.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.setActiveItemIndex = this.setActiveItemIndex.bind(this)
    this.showUsers = this.showUsers.bind(this)
  }

  setActiveItemIndex(value) {
    this.setState({ activeItemIndex: value })
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

  async getArcGISData() {
    let res = await axios.get(`/api/ArcGISData`)
    console.log("Fetches Arc GIS Data ", res)
    this.setState({
      arcGISData: res
    })
  }

  async componentDidMount() {
    await this.getArcGISData()
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
        <button className="unTraditionalButton" style={{ fontSize: "10em", fontWeight: '500' }} onClick={e => this.showUsers(e)}>Show Users</button>
      }
      <CookieView propsFn={this.dataFetchPoliticians} />
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length === 0 && <Snowfall />
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
        <div>
          When we are able to add general assembly members to the search function...:)

          <input className='addressSearchClass' placeHolder="1109 N Highland St, Arlington, VA 22201" style={{ width: '20em', padding: '1em', borderStyle: "ridge" }}
            onChange={e => this.setState({ searchQueryAddress: e.target.value })}
          />
          <button className='unTraditionalButton' onClick={e => this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1109 N Highland St, Arlington, VA 22201")}>Search</button>
        </div>}
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 && this.state.showUsers &&
        <div>



          <div style={{ padding: `0 ${40}px`, }}>
            {
              this.state.arcGISData && this.state.arcGISData.config && this.state.arcGISData.config.url
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.properties.name
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.type
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[1].docTitle
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[2].docTitle
            }
            <ItemsCarousel
              activeItemIndex={this.state.activeItemIndex}
              requestToChangeActive={this.setActiveItemIndex}
              numberOfCards={29}
              gutter={20}
              leftChevron={<button>{'<'}</button>}
              rightChevron={<button>{'>'}</button>}
              outsideChevron
              chevronWidth={10}
            >
              {
                this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response.splice(0, 3) && this.state.arcGISData.data.response.map(e => {
                  console.log("here", this.state.arcGISData.data.response)
                  return <div style={{
                    margin: '1em',
                    padding: '1em',
                    width: '200px',
                    border: 'groove',
                    borderStyle: 'outset',
                    borderWidth: '1px',
                    backgroundColor: 'white'
                  }}>
                    <img src={'https://source.unsplash.com/random'} style={{
                      width: '50%',
                      height: '100px',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}></img>
                    <div>{e.geometry.type}</div>
                    <div>{e.properties.SHAPE_Area}</div>
                    <div>{e.properties.acres}</div>
                    <div>{e.properties.county_ward}</div>
                    <div>{e.properties.municode}</div>
                    <div>{e.properties.municode2}</div>
                    <div>{e.properties.objectid}</div>
                    <div>{e.properties.sqmiles}</div>
                    <div>{e.properties.ward}</div>
                    <div>{e.properties.ward_county}</div>
                    <div>{e.properties.wardtext}</div>


                  </div>
                })
              }
            </ItemsCarousel>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            flexWrap: 'wrap',
            backgroundColor: "rgb(10,20,30)"
          }}>
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response.splice(0, 3) && this.state.arcGISData.data.response.map((e, index) => {
                console.log("here", this.state.arcGISData.data.response)
                return <div style={{
                  margin: '1em',
                  padding: '1em',
                  width: '200px',
                  border: 'groove',
                  borderStyle: 'outset',
                  borderWidth: '1px',
                  backgroundColor: 'white',
                  fontFamily: "Apple Chancery, cursive	"
                }}>
                  <img src={'https://source.unsplash.com/random'} style={{
                    width: '50%',
                    height: '100px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}></img>
                  <div style={{ fontWeight: "bolder" }}>{e.geometry.type}</div>
                  <div style={{ fontWeight: "boldest" }}>{e.properties.SHAPE_Area}</div>
                  <div>{e.properties.acres}</div>
                  <div style={{ fontWeight: "bold" }}>{e.properties.county_ward}</div>
                  <div style={{ fontWeight: "bold" }}>{e.properties.municode}</div>
                  <div style={{ fontWeight: "bold" }}>{e.properties.municode2}</div>
                  <div>{e.properties.objectid}</div>
                  <div>{e.properties.sqmiles}</div>
                  <div style={{ fontWeight: "1000" }}>{e.properties.ward}</div>
                  <div>{e.properties.ward_county}</div>
                  <div>{e.properties.wardtext}</div>
                  <div style={{ fontWeight: "bold" }}>{e.geometry.coordinates[index][0]}</div>
                  <div style={{ fontWeight: "bold" }}>{e.geometry.coordinates[index][1]}</div>
                </div>
              })
            }
          </div>


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

      <LoginCookies props={this.props} />
    </div>

  }
}
