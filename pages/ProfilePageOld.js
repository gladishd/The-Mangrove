import axios from 'axios'
import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import CookieView from './CookieView.js'
import LoginCookies from './LoginCookiesOld.js'
import LogoutComponent from './LogoutComponent.js'
import Snowfall from 'react-snowfall'
import MapContainer from './MapContainer.js'

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
      locationForMapContainer: {}
    }
    this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this)
    this.getArcGISData = this.getArcGISData.bind(this)
    this.setArcGISData = this.setArcGISData.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.setActiveItemIndex = this.setActiveItemIndex.bind(this)
    this.showUsers = this.showUsers.bind(this)
  }

  setActiveItemIndex(value) {
    this.setState({ activeItemIndex: value })
  }

  showUsers(e) {
    e.preventDefault()
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

  componentDidUpdate() {
    console.log("The component has updated on ProfilePageOld, the state is ", this.state)
  }

  async getArcGISData() {
    let res = await axios.get(`/api/ArcGISData`)
    console.log("Fetches Arc GIS Data ", res)
    this.setState({
      arcGISData: res,
    })
  }

  async setArcGISData() {
    /** Comment this "back" in! No!  */
    // console.log("within setarcgisdata, the state is ", this.state)
    // let newData = await this.state.arcGISData.data.response
    // let loc = this.state.arcGISData.data.response.map((e, i) => {
    //   if (e.geometry) {
    //     return { id: i, location: { lat: e.geometry.coordinates[0], lng: e.geometry.coordinates[1] } }
    //   }
    // })
  }

  async componentDidMount() {
    await this.getArcGISData()
    await this.setArcGISData()
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
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      backgroundColor: 'rgb(255,255,255)',
      height: '0',
      width: 'auto'
    }} >
      <CookieView propsFn={this.dataFetchPoliticians} />
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length === 0 && <Snowfall />
      }
      {
        this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 'auto',
          justifyContent: 'space-between',
        }}>

          {this.state.cookieValue && Object.keys(this.state.cookieValue).length !== 0 &&
            <button className="unTraditionalButton" style={{ fontSize: "1em", fontWeight: '500' }} onClick={e => this.showUsers(e)}>Show Users</button>
          }
          <input
            className='addressSearchClass'
            placeHolder="1109 N Highland St, Arlington, VA 22201"
            style={{ width: '50vw', padding: '1em', borderStyle: "ridge" }}
            onChange={e => this.setState({ searchQueryAddress: e.target.value })}
          />
          <button className='unTraditionalButton' onClick={e => this.props.queryGeocodioLatLng(this.state.searchQueryLatLng || "38.9002898, -76.9990361")}>Query Geocodio Lat/Lng</button>

          <input className='addressSearchClass' placeHolder="38.9002898, -76.9990361" style={{ width: '20em', padding: '1em', borderStyle: "ridge" }}
            onChange={e => this.setState({ searchQueryLatLng: e.target.value })}
          />
          <button
            className='unTraditionalButton'
            onClick={e => this.props.queryGeocodioAddress(this.state.searchQueryAddress || "1109 N Highland St, Arlington, VA 22201")}>Query Geocodio Address</button>
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
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0] && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.properties.name
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[0] && this.state.arcGISData.data.response[0].docTitle && this.state.arcGISData.data.response[0].docTitle.type
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[1] && this.state.arcGISData.data.response[1].docTitle
            }
            <br />
            {
              this.state.arcGISData && this.state.arcGISData.data && this.state.arcGISData.data.response[2] && this.state.arcGISData.data.response[2].docTitle
            }
            <MapContainer array={[{ id: 1, location: { lat: 40.488, lng: -79.918 } }, { id: 2, location: { lat: 40.588, lng: -79.818 } }, { id: 3, location: { lat: 40.490, lng: -79.928 } }, { id: 4, location: { lat: 40.450, lng: -79.948 } }, { id: 1, location: { lat: 40.481, lng: -79.922 } }]} />
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
                  leen
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
          Where is it getting mapped?
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
              aww
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
      {
        console.log("IF you're on ProfilePageOld.js, want to console.log these props ", this.props)
      }
      <LoginCookies props={this.props} />
    </div>
  }
}
