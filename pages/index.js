import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import { instanceOf } from 'prop-types';
import CookieView from './CookieView.js'
import ProfilePage from './ProfilePageOld.js'
import LoginCookies from './LoginCookiesOld.js'

import {
  Navbar,
} from 'react-bootstrap'


import { Cookies } from "react-cookie"

const firebaseConfig = {
  apiKey: "AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0",
  authDomain: "the-midway-b98d8.firebaseapp.com",
  databaseURL: "https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-midway-b98d8",
  storageBucket: "the-midway-b98d8.appspot.com",
  messagingSenderId: "248441553393",
  appId: "1:248441553393:web:493dc767adb2bfd5918450",
  measurementId: "G-3WJ6SFM1XC"
};

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from 'axios'

const firebaseApp = firebase.initializeApp(firebaseConfig);

var firebaseDB = firebaseApp.firestore()


export default class Home extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props)
    const { cookies } = props;
    this.state = {
      refresh: false,
      name: cookies && cookies.get('name') || 'Ben',
      userProfile: null,
      username: null,
      password: null,
      cookieValue: null,
      allProps: props,
      newCookies: instanceOf(Cookies).isRequired,
      searchQueryAddress: "",
      searchQueryLatLng: "",
      flattenedAddress: null,
      flattenedLatLng: null,
      responseSuccess: null,
      latAndLongFromAddress: null,
    }
    this.login = this.login.bind(this)
    this.queryGeocodioAddress = this.queryGeocodioAddress.bind(this)
    this.queryGeocodioLatLng = this.queryGeocodioLatLng.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.dataFetchPoliticians = this.dataFetchPoliticians.bind(this)
  }

  async dataFetchPoliticians(data) {
    await this.setState({
      cookieValue: data,
    })
    return;
  }


  setUsername(username) {
    if (!this.state.responseSuccess) {
      this.setState({
        username,
      })
    }
    return;
  }

  setPassword(password) {
    if (!this.state.responseSuccess) {
      this.setState({
        password,
      })
    }
    return;
  }

  queryGeocodioAddress(address) {
    const Geocodio = require('geocodio-library-node');
    const geocoder = new Geocodio('b33686cba0ab3063aa65b7c5806783bcb5b7c63');
    // geocoder.geocode(address, ['cd'])
    geocoder.geocode(address, ['cd', 'cd1', 'cd2', 'cd3', 'cd4', 'cd5', 'cd6', 'stateleg', 'stateleg-next', 'school', "census", "census2000", 'census2010', "census2011", "census2012", "census2013", 'census2014', 'census2015', 'census2016', 'census2017', 'census2018', 'census2019', 'census2020', 'census2021', 'acs-demographics', 'acs-economics', 'acs-families', 'acs-housing', 'acs-social', 'zip4', 'riding', 'provriding', 'statcan', 'timezone'])
      .then(async response => {
        console.group('On queryGeoCodioAddress, the original response that we get from GeoCodio looks like this', response);
        // Group Method with parameter
        console.log("Group Begin");
        console.log(response);
        console.log("Group End");
        console.groupEnd();
        let latLng = response.results[0].location.lat + "," + response.results[0].location.lng
        function flattenObject(ob, prefix = false, result = null) {
          result = result || {};

          // Preserve empty objects and arrays, they are lost otherwise
          if (prefix && typeof ob === 'object' && ob !== null && Object.keys(ob).length === 0) {
            result[prefix] = Array.isArray(ob) ? [] : {};
            return result;
          }

          prefix = prefix ? prefix + '.' : '';

          for (const i in ob) {
            if (Object.prototype.hasOwnProperty.call(ob, i)) {
              if (typeof ob[i] === 'object' && ob[i] !== null) {
                // Recursion on deeper objects
                flattenObject(ob[i], prefix + i, result);
              } else {
                result[prefix + i] = ob[i];
              }
            }
          }
          return result;
        }
        let flattenedAddress = flattenObject(response)
        await this.setState({ flattenedAddress, })

        /* javascript - Best way to flatten JS object (keys and values) to a single depth array - Stack Overflow
        https://stackoverflow.com/questions/44134212/best-way-to-flatten-js-object-keys-and-values-to-a-single-depth-array */
        console.log("On the queryGeocodioAddress, our latitude and longitude are ", flattenedAddress["results.0.location.lat"], flattenedAddress["results.0.location.lng"])
        let latitudeLongitude = flattenedAddress["results.0.location.lat"] + ", " + flattenedAddress["results.0.location.lng"]
        console.log("THe LAtTiDUE And LonGiTudE ARe ", latitudeLongitude)
        this.queryGeocodioLatLng(latitudeLongitude)
      })
      .catch(err => {
        console.error(err);
        alert(err)
      }
      );
  }

  queryGeocodioLatLng(latLng) {
    const Geocodio = require('geocodio-library-node');
    const geocoder = new Geocodio('b33686cba0ab3063aa65b7c5806783bcb5b7c63');
    console.log("THe lat lng being passed to queryGeocodioLatlNg is ", latLng, "and the geocoder object is ", geocoder)
    /* javascript - Best way to flatten JS object (keys and values) to a single depth array - Stack Overflow
         https://stackoverflow.com/questions/44134212/best-way-to-flatten-js-object-keys-and-values-to-a-single-depth-array */
    // geocoder.reverse(latLng, ["timezone"], 5)
    geocoder.reverse(latLng)
      .then(response => {
        console.group('On queryGeoCodioLatLnG, the response we are getting is like this:'); // Group Method with parameter
        console.log("Group Begin");
        console.log(response);
        console.log("Group End");
        console.groupEnd();
        function flattenObject(ob, prefix = false, result = null) {
          result = result || {};

          // Preserve empty objects and arrays, they are lost otherwise
          if (prefix && typeof ob === 'object' && ob !== null && Object.keys(ob).length === 0) {
            result[prefix] = Array.isArray(ob) ? [] : {};
            return result;
          }

          prefix = prefix ? prefix + '.' : '';

          for (const i in ob) {
            if (Object.prototype.hasOwnProperty.call(ob, i)) {
              if (typeof ob[i] === 'object' && ob[i] !== null) {
                // Recursion on deeper objects
                flattenObject(ob[i], prefix + i, result);
              } else {
                result[prefix + i] = ob[i];
              }
            }
          }
          return result;
        }
        let flattened = flattenObject(response.results[0])
        console.log("the response has been received!", flattened)
        this.setState({ latLngQueryFlattened: flattened })
      })
      .catch(err => {
        console.log("There's an error: ", err)
      })
  }

  refresh = async () => {
    this.setState({
      refresh: !this.state.refresh
    })
    return;
  }

  login = async e => {
    e.preventDefault()

    let { username, password } = this.state

    firebaseApp.auth().signInWithEmailAndPassword(username, password).then(async response => {
      var response = await axios.post(
        '/api/sessions',
        { user: { email: username.toLowerCase() } },
        { withCredentials: true }
      )
      if (response && response.data && response.data.success == "success") {
        this.setState({
          'responseSuccess': true
        })
      }
    })
      .catch(err => {
        alert(err)
      })
    return;
  }

  componentDidUpdate() {
    if (!this.state.latAndLongFromAddress && this.state.flattenedAddress) {
      let latAndLongFromAddress = this.state.flattenedAddress["results.0.location.lat"] + ", " + this.state.flattenedAddress["results.0.location.lng"]
      this.setState({
        latAndLongFromAddress
      })
    }
  }

  render() {
    return <div className="container ProfilePageOld" style={{
      background: "rgb(250,250,250)",
      width: '100vw !important',
      display: 'flex',
      justifyContent: 'center',
    }}>

      <CookieView propsFn={this.dataFetchPoliticians} />
      <div style={{
        maxWidth: '1300px',
        display: 'inline-block',
        backgroundColor: 'rgb(250, 250, 250)',
      }}>
        <LoginCookies name="Dean" cookieSet={this.state.responseSuccess} />
        <ProfilePage name="Dean" cookieSet={this.state.responseSuccess}
          queryGeocodioAddress={this.queryGeocodioAddress}
          searchQueryAddress={this.state.searchQueryAddress}
          queryGeocodioLatLng={this.queryGeocodioLatLng}
        // flattenedAddress={this.state.latAndLongFromAddress}
        // flattenedAddress={"38.886672, -77.094735"}
        />
        <Head>
          <title className='box'>Two Signup Types, and the Users {`&`} Politicians </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="ProfilePageOld">
          {
            console.log("So what is this.state.cookieValue? ", this.state.cookieValue)
          }
          <main style={{ zIndex: '3', display: this.state.cookieValue && Object.keys(this.state.cookieValue).length == 0 ? "flex" : "none" }}>

            <h1 className="title" style={{ zIndex: '3', color: 'white' }}>
              <img style={{ width: '200px', height: '200px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mangroves_at_sunset.jpg/1200px-Mangroves_at_sunset.jpg"

              />
            </h1>

            <div style={{
              backgroundColor: "white",
              borderStyle: 'outset',
              borderWidth: '0.1em',
              zIndex: '3',
              display: 'flex',
              flexDirection: 'column',
              width: '350px',
              height: '350px',
              alignContent: 'space-around',
            }}>
              <br />
              <center style={{ fontSize: '2em', fontWeight: 'bolder' }}>Mangrove</center>

              <br /><br />

              <input
                onChange={e => this.setUsername(e.target.value)}
                type="email" id="email" name="email" placeholder="Username or Email" />

              <br /><br />

              <input
                onChange={e => this.setPassword(e.target.value)}
                type="password" id="password" name="password" placeholder="Password" />

              <br /><br />

              <center>
                <button onClick={e => this.login(e)} style={{ fontSize: '1em', fontWeight: 'bolder', width: '100px' }}>Login</button>
              </center>
            </div>

            <br />

            <center style={{
              backgroundColor: "white",
              borderStyle: 'outset',
              borderWidth: '0.1em',
              zIndex: '3',
              display: 'flex',
              flexDirection: 'column',
              width: '350px',
              height: '100px',
              alignContent: 'space-around'
            }}>
              <br />
              <div>New User?</div>
              <br />
              <button onClick={e => Router.push('/signup-fork')} style={{ width: '100px', marginLeft: '125px' }}>Sign up</button>
            </center>
          </main>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {
          console.log("The data object that we are working with is ", this.state.flattenedAddress)
        }
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{
          width: "15em",
          border: "1px solid #333",
          boxShadow: "8px 8px 5px #444",
          padding: "8px 12px",
          backgroundImage: "linear-gradient(180deg, #fff, #ddd 40%, #ccc)"
        }}>
          <p>The Address Query.</p>
        </div>
        <br />
        <br />
        <br />
        <div className="cards">

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.current_legislators.0.references.ballotpedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.party",
                "results.0.fields.congressional_districts.0.name",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.address",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.phone",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.url",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    {/* <b style={{ fontSize: '0.25em' }}>{key}</b> */}
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          Now all we need to do is remove those tiny text on the top labeling the fields.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.current_legislators.1.references.ballotpedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.party",
                "results.0.fields.congressional_districts.0.name",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.address",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.phone",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.url"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    {/* <b style={{ fontSize: '0.25em' }}>{key}</b> */}
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          The first thing we "need" to do is remove the address components, style that div address components. Referring to the results.0 object,
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "input.address_components.number",
                "input.address_components.predirectional",
                "input.address_components.street",
                "input.address_components.suffix",
                "input.address_components.formatted_street",
                "input.address_components.city",
                "input.address_components.state",
                "input.address_components.zip",
                "input.address_components.country",
                "input.formatted_address",
                "results.0.address_components.number",
                "results.0.address_components.predirectional",
                "results.0.address_components.street",
                "results.0.address_components.suffix",
                "results.0.address_components.formatted_street",
                "results.0.address_components.city",
                "results.0.address_components.county",
                "results.0.address_components.state",
                "results.0.address_components.zip",
                "results.0.address_components.country",
                "results.0.formatted_address"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.location.lat",
                "results.0.location.lng",
                "results.0.accuracy",
                "results.0.accuracy_type",
                "results.0.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          we have the roof-top accuracy of 1, latitude and longitude,
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.name",
                "results.0.fields.congressional_districts.0.district_number",
                "results.0.fields.congressional_districts.0.ocd_id",
                "results.0.fields.congressional_districts.0.congress_number",
                "results.0.fields.congressional_districts.0.congress_years",
                "results.0.fields.congressional_districts.0.proportion"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          information about the Congressional Districts number and proportion,

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.current_legislators.0.type",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.last_name",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.first_name",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.birthday",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.gender",
                "results.0.fields.congressional_districts.0.current_legislators.0.bio.party",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.url",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.address",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.phone",
                "results.0.fields.congressional_districts.0.current_legislators.0.contact.contact_form",
                "results.0.fields.congressional_districts.0.current_legislators.0.social.rss_url",
                "results.0.fields.congressional_districts.0.current_legislators.0.social.twitter",
                "results.0.fields.congressional_districts.0.current_legislators.0.social.facebook",
                "results.0.fields.congressional_districts.0.current_legislators.0.social.youtube",
                "results.0.fields.congressional_districts.0.current_legislators.0.social.youtube_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.bioguide_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.thomas_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.opensecrets_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.lis_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.cspan_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.govtrack_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.votesmart_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.ballotpedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.washington_post_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.icpsr_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.references.wikipedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.0.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          the current legislators' numeric biography & contacts, social,
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.current_legislators.1.type",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.last_name",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.first_name",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.birthday",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.gender",
                "results.0.fields.congressional_districts.0.current_legislators.1.bio.party",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.url",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.address",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.phone",
                "results.0.fields.congressional_districts.0.current_legislators.1.contact.contact_form",
                "results.0.fields.congressional_districts.0.current_legislators.1.social.rss_url",
                "results.0.fields.congressional_districts.0.current_legislators.1.social.twitter",
                "results.0.fields.congressional_districts.0.current_legislators.1.social.facebook",
                "results.0.fields.congressional_districts.0.current_legislators.1.social.youtube",
                "results.0.fields.congressional_districts.0.current_legislators.1.social.youtube_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.bioguide_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.thomas_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.opensecrets_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.lis_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.cspan_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.govtrack_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.votesmart_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.ballotpedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.washington_post_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.icpsr_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.references.wikipedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.1.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          references to places like bioguide, thomas, opensecrets, lis, cspan, govtrack, votesmart, ballotpedia, Washington Post, icpsr, and Wikipedia.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.congressional_districts.0.current_legislators.2.type",
                "results.0.fields.congressional_districts.0.current_legislators.2.bio.last_name",
                "results.0.fields.congressional_districts.0.current_legislators.2.bio.first_name",
                "results.0.fields.congressional_districts.0.current_legislators.2.bio.birthday",
                "results.0.fields.congressional_districts.0.current_legislators.2.bio.gender",
                "results.0.fields.congressional_districts.0.current_legislators.2.bio.party",
                "results.0.fields.congressional_districts.0.current_legislators.2.contact.url",
                "results.0.fields.congressional_districts.0.current_legislators.2.contact.address",
                "results.0.fields.congressional_districts.0.current_legislators.2.contact.phone",
                "results.0.fields.congressional_districts.0.current_legislators.2.contact.contact_form",
                "results.0.fields.congressional_districts.0.current_legislators.2.social.rss_url",
                "results.0.fields.congressional_districts.0.current_legislators.2.social.twitter",
                "results.0.fields.congressional_districts.0.current_legislators.2.social.facebook",
                "results.0.fields.congressional_districts.0.current_legislators.2.social.youtube",
                "results.0.fields.congressional_districts.0.current_legislators.2.social.youtube_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.bioguide_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.thomas_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.opensecrets_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.lis_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.cspan_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.govtrack_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.votesmart_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.ballotpedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.washington_post_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.icpsr_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.references.wikipedia_id",
                "results.0.fields.congressional_districts.0.current_legislators.2.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          The legislator data is originally collected and aggregated by https://github.com/unitedstates/. "Just as" we have information on subjects like Don Beyer we "also" have information on legislators {`>`} senators like Mark Warner,
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.state_legislative_districts.house.0.name",
                "results.0.fields.state_legislative_districts.house.0.district_number",
                "results.0.fields.state_legislative_districts.house.0.ocd_id",
                "results.0.fields.state_legislative_districts.house.0.is_upcoming_state_legislative_district",
                "results.0.fields.state_legislative_districts.house.0.proportion",
                "results.0.fields.state_legislative_districts.senate.0.name",
                "results.0.fields.state_legislative_districts.senate.0.district_number",
                "results.0.fields.state_legislative_districts.senate.0.ocd_id",
                "results.0.fields.state_legislative_districts.senate.0.is_upcoming_state_legislative_district",
                "results.0.fields.state_legislative_districts.senate.0.proportion"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          Following this immediately we have Timothy Kaine in the same fashion. Then, there is the State House District 2, Arlington County Public Schools with Unified LEA code &
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.school_districts.unified.name",
                "results.0.fields.school_districts.unified.lea_code",
                "results.0.fields.school_districts.unified.grade_low",
                "results.0.fields.school_districts.unified.grade_high"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          low or high-grade.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.timezone.name",
                "results.0.fields.timezone.utc_offset",
                "results.0.fields.timezone.observes_dst",
                "results.0.fields.timezone.abbreviation",
                "results.0.fields.timezone.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          Then, there is timezone name, utc_offset, observes_dst (daylight savings time?), abbreviation and source.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2000.census_year",
                "results.0.fields.census.2000.state_fips",
                "results.0.fields.census.2000.county_fips",
                "results.0.fields.census.2000.tract_code",
                "results.0.fields.census.2000.block_code",
                "results.0.fields.census.2000.block_group",
                "results.0.fields.census.2000.full_fips",
                "results.0.fields.census.2000.place.name",
                "results.0.fields.census.2000.place.fips",
                "results.0.fields.census.2000.metro_micro_statistical_area",
                "results.0.fields.census.2000.combined_statistical_area",
                "results.0.fields.census.2000.metropolitan_division",
                "results.0.fields.census.2000.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          Census results, including year, state fips * county fips * tract code * block code * block group * full fips * metro statistical area * place name & fips.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2010.census_year",
                "results.0.fields.census.2010.state_fips",
                "results.0.fields.census.2010.county_fips",
                "results.0.fields.census.2010.tract_code",
                "results.0.fields.census.2010.block_code",
                "results.0.fields.census.2010.block_group",
                "results.0.fields.census.2010.full_fips",
                "results.0.fields.census.2010.place.name",
                "results.0.fields.census.2010.place.fips",
                "results.0.fields.census.2010.metro_micro_statistical_area.name",
                "results.0.fields.census.2010.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2010.metro_micro_statistical_area.type",
                "results.0.fields.census.2010.combined_statistical_area.name",
                "results.0.fields.census.2010.combined_statistical_area.area_code",
                "results.0.fields.census.2010.metropolitan_division.name",
                "results.0.fields.census.2010.metropolitan_division.area_code",
                "results.0.fields.census.2010.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          A lot of census and statistically-related data. 2010 &
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2011.census_year",
                "results.0.fields.census.2011.state_fips",
                "results.0.fields.census.2011.county_fips",
                "results.0.fields.census.2011.tract_code",
                "results.0.fields.census.2011.block_code",
                "results.0.fields.census.2011.block_group",
                "results.0.fields.census.2011.full_fips",
                "results.0.fields.census.2011.place.name",
                "results.0.fields.census.2011.place.fips",
                "results.0.fields.census.2011.metro_micro_statistical_area.name",
                "results.0.fields.census.2011.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2011.metro_micro_statistical_area.type",
                "results.0.fields.census.2011.combined_statistical_area.name",
                "results.0.fields.census.2011.combined_statistical_area.area_code",
                "results.0.fields.census.2011.metropolitan_division.name",
                "results.0.fields.census.2011.metropolitan_division.area_code",
                "results.0.fields.census.2011.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          2011
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2012.census_year",
                "results.0.fields.census.2012.state_fips",
                "results.0.fields.census.2012.county_fips",
                "results.0.fields.census.2012.tract_code",
                "results.0.fields.census.2012.block_code",
                "results.0.fields.census.2012.block_group",
                "results.0.fields.census.2012.full_fips",
                "results.0.fields.census.2012.place.name",
                "results.0.fields.census.2012.place.fips",
                "results.0.fields.census.2012.metro_micro_statistical_area.name",
                "results.0.fields.census.2012.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2012.metro_micro_statistical_area.type",
                "results.0.fields.census.2012.combined_statistical_area.name",
                "results.0.fields.census.2012.combined_statistical_area.area_code",
                "results.0.fields.census.2012.metropolitan_division.name",
                "results.0.fields.census.2012.metropolitan_division.area_code",
                "results.0.fields.census.2012.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          ...We who are living & looking on the meaning of happiness... we don't know how much census data we have, but it goes from 2010, 2011, ..., 2021.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2013.census_year",
                "results.0.fields.census.2013.state_fips",
                "results.0.fields.census.2013.county_fips",
                "results.0.fields.census.2013.tract_code",
                "results.0.fields.census.2013.block_code",
                "results.0.fields.census.2013.block_group",
                "results.0.fields.census.2013.full_fips",
                "results.0.fields.census.2013.place.name",
                "results.0.fields.census.2013.place.fips",
                "results.0.fields.census.2013.metro_micro_statistical_area.name",
                "results.0.fields.census.2013.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2013.metro_micro_statistical_area.type",
                "results.0.fields.census.2013.combined_statistical_area.name",
                "results.0.fields.census.2013.combined_statistical_area.area_code",
                "results.0.fields.census.2013.metropolitan_division.name",
                "results.0.fields.census.2013.metropolitan_division.area_code",
                "results.0.fields.census.2013.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2014.census_year",
                "results.0.fields.census.2014.state_fips",
                "results.0.fields.census.2014.county_fips",
                "results.0.fields.census.2014.tract_code",
                "results.0.fields.census.2014.block_code",
                "results.0.fields.census.2014.block_group",
                "results.0.fields.census.2014.full_fips",
                "results.0.fields.census.2014.place.name",
                "results.0.fields.census.2014.place.fips",
                "results.0.fields.census.2014.metro_micro_statistical_area.name",
                "results.0.fields.census.2014.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2014.metro_micro_statistical_area.type",
                "results.0.fields.census.2014.combined_statistical_area.name",
                "results.0.fields.census.2014.combined_statistical_area.area_code",
                "results.0.fields.census.2014.metropolitan_division.name",
                "results.0.fields.census.2014.metropolitan_division.area_code",
                "results.0.fields.census.2014.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2015.census_year",
                "results.0.fields.census.2015.state_fips",
                "results.0.fields.census.2015.county_fips",
                "results.0.fields.census.2015.tract_code",
                "results.0.fields.census.2015.block_code",
                "results.0.fields.census.2015.block_group",
                "results.0.fields.census.2015.full_fips",
                "results.0.fields.census.2015.place.name",
                "results.0.fields.census.2015.place.fips",
                "results.0.fields.census.2015.metro_micro_statistical_area.name",
                "results.0.fields.census.2015.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2015.metro_micro_statistical_area.type",
                "results.0.fields.census.2015.combined_statistical_area.name",
                "results.0.fields.census.2015.combined_statistical_area.area_code",
                "results.0.fields.census.2015.metropolitan_division.name",
                "results.0.fields.census.2015.metropolitan_division.area_code",
                "results.0.fields.census.2015.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2016.census_year",
                "results.0.fields.census.2016.state_fips",
                "results.0.fields.census.2016.county_fips",
                "results.0.fields.census.2016.tract_code",
                "results.0.fields.census.2016.block_code",
                "results.0.fields.census.2016.block_group",
                "results.0.fields.census.2016.full_fips",
                "results.0.fields.census.2016.place.name",
                "results.0.fields.census.2016.place.fips",
                "results.0.fields.census.2016.metro_micro_statistical_area.name",
                "results.0.fields.census.2016.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2016.metro_micro_statistical_area.type",
                "results.0.fields.census.2016.combined_statistical_area.name",
                "results.0.fields.census.2016.combined_statistical_area.area_code",
                "results.0.fields.census.2016.metropolitan_division.name",
                "results.0.fields.census.2016.metropolitan_division.area_code",
                "results.0.fields.census.2016.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2017.census_year",
                "results.0.fields.census.2017.state_fips",
                "results.0.fields.census.2017.county_fips",
                "results.0.fields.census.2017.tract_code",
                "results.0.fields.census.2017.block_code",
                "results.0.fields.census.2017.block_group",
                "results.0.fields.census.2017.full_fips",
                "results.0.fields.census.2017.place.name",
                "results.0.fields.census.2017.place.fips",
                "results.0.fields.census.2017.metro_micro_statistical_area.name",
                "results.0.fields.census.2017.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2017.metro_micro_statistical_area.type",
                "results.0.fields.census.2017.combined_statistical_area.name",
                "results.0.fields.census.2017.combined_statistical_area.area_code",
                "results.0.fields.census.2017.metropolitan_division.name",
                "results.0.fields.census.2017.metropolitan_division.area_code",
                "results.0.fields.census.2017.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2018.census_year",
                "results.0.fields.census.2018.state_fips",
                "results.0.fields.census.2018.county_fips",
                "results.0.fields.census.2018.tract_code",
                "results.0.fields.census.2018.block_code",
                "results.0.fields.census.2018.block_group",
                "results.0.fields.census.2018.full_fips",
                "results.0.fields.census.2018.place.name",
                "results.0.fields.census.2018.place.fips",
                "results.0.fields.census.2018.metro_micro_statistical_area.name",
                "results.0.fields.census.2018.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2018.metro_micro_statistical_area.type",
                "results.0.fields.census.2018.combined_statistical_area.name",
                "results.0.fields.census.2018.combined_statistical_area.area_code",
                "results.0.fields.census.2018.metropolitan_division.name",
                "results.0.fields.census.2018.metropolitan_division.area_code",
                "results.0.fields.census.2018.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2019.census_year",
                "results.0.fields.census.2019.state_fips",
                "results.0.fields.census.2019.county_fips",
                "results.0.fields.census.2019.tract_code",
                "results.0.fields.census.2019.block_code",
                "results.0.fields.census.2019.block_group",
                "results.0.fields.census.2019.full_fips",
                "results.0.fields.census.2019.place.name",
                "results.0.fields.census.2019.place.fips",
                "results.0.fields.census.2019.metro_micro_statistical_area.name",
                "results.0.fields.census.2019.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2019.metro_micro_statistical_area.type",
                "results.0.fields.census.2019.combined_statistical_area.name",
                "results.0.fields.census.2019.combined_statistical_area.area_code",
                "results.0.fields.census.2019.metropolitan_division.name",
                "results.0.fields.census.2019.metropolitan_division.area_code",
                "results.0.fields.census.2019.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2020.census_year",
                "results.0.fields.census.2020.state_fips",
                "results.0.fields.census.2020.county_fips",
                "results.0.fields.census.2020.tract_code",
                "results.0.fields.census.2020.block_code",
                "results.0.fields.census.2020.block_group",
                "results.0.fields.census.2020.full_fips",
                "results.0.fields.census.2020.place.name",
                "results.0.fields.census.2020.place.fips",
                "results.0.fields.census.2020.metro_micro_statistical_area.name",
                "results.0.fields.census.2020.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2020.metro_micro_statistical_area.type",
                "results.0.fields.census.2020.combined_statistical_area.name",
                "results.0.fields.census.2020.combined_statistical_area.area_code",
                "results.0.fields.census.2020.metropolitan_division.name",
                "results.0.fields.census.2020.metropolitan_division.area_code",
                "results.0.fields.census.2020.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.census.2021.census_year",
                "results.0.fields.census.2021.state_fips",
                "results.0.fields.census.2021.county_fips",
                "results.0.fields.census.2021.tract_code",
                "results.0.fields.census.2021.block_code",
                "results.0.fields.census.2021.block_group",
                "results.0.fields.census.2021.full_fips",
                "results.0.fields.census.2021.place.name",
                "results.0.fields.census.2021.place.fips",
                "results.0.fields.census.2021.metro_micro_statistical_area.name",
                "results.0.fields.census.2021.metro_micro_statistical_area.area_code",
                "results.0.fields.census.2021.metro_micro_statistical_area.type",
                "results.0.fields.census.2021.combined_statistical_area.name",
                "results.0.fields.census.2021.combined_statistical_area.area_code",
                "results.0.fields.census.2021.metropolitan_division.name",
                "results.0.fields.census.2021.metropolitan_division.area_code",
                "results.0.fields.census.2021.source"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          The source and survey, &
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.meta.source",
                "results.0.fields.acs.meta.survey_years",
                "results.0.fields.acs.meta.survey_duration_years",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          the population by minimum level of education.
          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.social.Population by minimum level of education.meta.table_id",
                "results.0.fields.acs.social.Population by minimum level of education.meta.universe",
                "results.0.fields.acs.social.Population by minimum level of education.Total.value",
                "results.0.fields.acs.social.Population by minimum level of education.Total.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: No schooling completed.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: No schooling completed.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: No schooling completed.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Nursery to 4th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Nursery to 4th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Nursery to 4th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 5th and 6th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 5th and 6th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 5th and 6th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 7th and 8th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 7th and 8th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 7th and 8th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 9th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 9th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 9th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 10th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 10th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 10th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 11th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 11th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 11th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 12th grade, no diploma.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 12th grade, no diploma.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: 12th grade, no diploma.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: High school graduate (includes equivalency).value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: High school graduate (includes equivalency).margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: High school graduate (includes equivalency).percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, less than 1 year.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, less than 1 year.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, less than 1 year.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, 1 or more years, no degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, 1 or more years, no degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Some college, 1 or more years, no degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Associate's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Associate's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Associate's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Bachelor's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Bachelor's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Bachelor's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Master's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Master's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Master's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Professional school degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Professional school degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Professional school degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Doctorate degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Doctorate degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Male: Doctorate degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: No schooling completed.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: No schooling completed.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: No schooling completed.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Nursery to 4th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Nursery to 4th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Nursery to 4th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 5th and 6th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 5th and 6th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 5th and 6th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 7th and 8th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 7th and 8th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 7th and 8th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 9th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 9th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 9th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 10th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 10th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 10th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 11th grade.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 11th grade.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 11th grade.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 12th grade, no diploma.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 12th grade, no diploma.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: 12th grade, no diploma.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: High school graduate (includes equivalency).value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: High school graduate (includes equivalency).margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: High school graduate (includes equivalency).percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, less than 1 year.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, less than 1 year.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, less than 1 year.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, 1 or more years, no degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, 1 or more years, no degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Some college, 1 or more years, no degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Associate's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Associate's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Associate's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Bachelor's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Bachelor's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Bachelor's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Master's degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Master's degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Master's degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Professional school degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Professional school degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Professional school degree.percentage",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Doctorate degree.value",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Doctorate degree.margin_of_error",
                "results.0.fields.acs.social.Population by minimum level of education.Female: Doctorate degree.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.social.Population with veteran status.meta.table_id",
                "results.0.fields.acs.social.Population with veteran status.meta.universe",
                "results.0.fields.acs.social.Population with veteran status.Total.value",
                "results.0.fields.acs.social.Population with veteran status.Total.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male.value",
                "results.0.fields.acs.social.Population with veteran status.Male.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 18 to 34 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 35 to 54 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 55 to 64 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 65 to 74 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Male: 75 years and over: Nonveteran.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.social.Population with veteran status.Female.value",
                "results.0.fields.acs.social.Population with veteran status.Female.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 18 to 34 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 35 to 54 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 55 to 64 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 65 to 74 years: Nonveteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Veteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Veteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Veteran.percentage",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Nonveteran.value",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Nonveteran.margin_of_error",
                "results.0.fields.acs.social.Population with veteran status.Female: 75 years and over: Nonveteran.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.social.Period of military service for veterans.meta.table_id",
                "results.0.fields.acs.social.Period of military service for veterans.meta.universe",
                "results.0.fields.acs.social.Period of military service for veterans.Total.value",
                "results.0.fields.acs.social.Period of military service for veterans.Total.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), no Gulf War (8/1990 to 8/2001), no Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), no Gulf War (8/1990 to 8/2001), no Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), no Gulf War (8/1990 to 8/2001), no Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later) and Gulf War (8/1990 to 8/2001), no Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later) and Gulf War (8/1990 to 8/2001), no Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later) and Gulf War (8/1990 to 8/2001), no Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), and Gulf War (8/1990 to 8/2001), and Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), and Gulf War (8/1990 to 8/2001), and Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (9/2001 or later), and Gulf War (8/1990 to 8/2001), and Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001), no Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001), no Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001), no Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001) and Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001) and Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Gulf War (8/1990 to 8/2001) and Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era, no Korean War, no World War II.value",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era, no Korean War, no World War II.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era, no Korean War, no World War II.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War, no World War II.value",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War, no World War II.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War, no World War II.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War and World War II.value",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War and World War II.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Vietnam Era and Korean War and World War II.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War, no Vietnam Era, no World War II.value",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War, no Vietnam Era, no World War II.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War, no Vietnam Era, no World War II.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War and World War II, no Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War and World War II, no Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Korean War and World War II, no Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.World War II, no Korean War, no Vietnam Era.value",
                "results.0.fields.acs.social.Period of military service for veterans.World War II, no Korean War, no Vietnam Era.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.World War II, no Korean War, no Vietnam Era.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Between Gulf War and Vietnam Era only.value",
                "results.0.fields.acs.social.Period of military service for veterans.Between Gulf War and Vietnam Era only.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Between Gulf War and Vietnam Era only.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Between Vietnam Era and Korean War only.value",
                "results.0.fields.acs.social.Period of military service for veterans.Between Vietnam Era and Korean War only.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Between Vietnam Era and Korean War only.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Between Korean War and World War II only.value",
                "results.0.fields.acs.social.Period of military service for veterans.Between Korean War and World War II only.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Between Korean War and World War II only.percentage",
                "results.0.fields.acs.social.Period of military service for veterans.Pre-World War II only.value",
                "results.0.fields.acs.social.Period of military service for veterans.Pre-World War II only.margin_of_error",
                "results.0.fields.acs.social.Period of military service for veterans.Pre-World War II only.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.housing.Number of housing units.meta.table_id",
                "results.0.fields.acs.housing.Number of housing units.meta.universe",
                "results.0.fields.acs.housing.Number of housing units.Total.value",
                "results.0.fields.acs.housing.Number of housing units.Total.margin_of_error",
                "results.0.fields.acs.housing.Occupancy status.meta.table_id",
                "results.0.fields.acs.housing.Occupancy status.meta.universe",
                "results.0.fields.acs.housing.Occupancy status.Occupied.value",
                "results.0.fields.acs.housing.Occupancy status.Occupied.margin_of_error",
                "results.0.fields.acs.housing.Occupancy status.Occupied.percentage",
                "results.0.fields.acs.housing.Occupancy status.Vacant.value",
                "results.0.fields.acs.housing.Occupancy status.Vacant.margin_of_error",
                "results.0.fields.acs.housing.Occupancy status.Vacant.percentage",
                "results.0.fields.acs.housing.Ownership of occupied units.meta.table_id",
                "results.0.fields.acs.housing.Ownership of occupied units.meta.universe",
                "results.0.fields.acs.housing.Ownership of occupied units.Owner occupied.value",
                "results.0.fields.acs.housing.Ownership of occupied units.Owner occupied.margin_of_error",
                "results.0.fields.acs.housing.Ownership of occupied units.Owner occupied.percentage",
                "results.0.fields.acs.housing.Ownership of occupied units.Renter occupied.value",
                "results.0.fields.acs.housing.Ownership of occupied units.Renter occupied.margin_of_error",
                "results.0.fields.acs.housing.Ownership of occupied units.Renter occupied.percentage",
                "results.0.fields.acs.housing.Units in structure.meta.table_id",
                "results.0.fields.acs.housing.Units in structure.meta.universe",
                "results.0.fields.acs.housing.Units in structure.1, detached unit.value",
                "results.0.fields.acs.housing.Units in structure.1, detached unit.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.1, detached unit.percentage",
                "results.0.fields.acs.housing.Units in structure.1, attached unit.value",
                "results.0.fields.acs.housing.Units in structure.1, attached unit.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.1, attached unit.percentage",
                "results.0.fields.acs.housing.Units in structure.2 units.value",
                "results.0.fields.acs.housing.Units in structure.2 units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.2 units.percentage",
                "results.0.fields.acs.housing.Units in structure.3 or 4 units.value",
                "results.0.fields.acs.housing.Units in structure.3 or 4 units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.3 or 4 units.percentage",
                "results.0.fields.acs.housing.Units in structure.5 to 9 units.value",
                "results.0.fields.acs.housing.Units in structure.5 to 9 units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.5 to 9 units.percentage",
                "results.0.fields.acs.housing.Units in structure.10 to 19 unit.value",
                "results.0.fields.acs.housing.Units in structure.10 to 19 unit.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.10 to 19 unit.percentage",
                "results.0.fields.acs.housing.Units in structure.20 to 49 units.value",
                "results.0.fields.acs.housing.Units in structure.20 to 49 units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.20 to 49 units.percentage",
                "results.0.fields.acs.housing.Units in structure.50 or more units.value",
                "results.0.fields.acs.housing.Units in structure.50 or more units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.50 or more units.percentage",
                "results.0.fields.acs.housing.Units in structure.Mobile home units.value",
                "results.0.fields.acs.housing.Units in structure.Mobile home units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.Mobile home units.percentage",
                "results.0.fields.acs.housing.Units in structure.Boat, RV, van, etc. units.value",
                "results.0.fields.acs.housing.Units in structure.Boat, RV, van, etc. units.margin_of_error",
                "results.0.fields.acs.housing.Units in structure.Boat, RV, van, etc. units.percentage",
                "results.0.fields.acs.housing.Median value of owner-occupied housing units.meta.table_id",
                "results.0.fields.acs.housing.Median value of owner-occupied housing units.meta.universe",
                "results.0.fields.acs.housing.Median value of owner-occupied housing units.Total.value",
                "results.0.fields.acs.housing.Median value of owner-occupied housing units.Total.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.meta.table_id",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.meta.universe",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.Less than $10,000.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.Less than $10,000.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.Less than $10,000.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$10,000 to $14,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$10,000 to $14,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$10,000 to $14,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$15,000 to $19,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$15,000 to $19,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$15,000 to $19,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$20,000 to $24,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$20,000 to $24,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$20,000 to $24,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$25,000 to $29,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$25,000 to $29,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$25,000 to $29,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$30,000 to $34,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$30,000 to $34,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$30,000 to $34,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$35,000 to $39,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$35,000 to $39,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$35,000 to $39,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$40,000 to $49,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$40,000 to $49,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$40,000 to $49,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$50,000 to $59,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$50,000 to $59,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$50,000 to $59,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$60,000 to $69,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$60,000 to $69,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$60,000 to $69,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$70,000 to $79,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$70,000 to $79,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$70,000 to $79,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$80,000 to $89,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$80,000 to $89,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$80,000 to $89,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$90,000 to $99,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$90,000 to $99,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$90,000 to $99,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$100,000 to $124,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$100,000 to $124,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$100,000 to $124,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$125,000 to $149,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$125,000 to $149,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$125,000 to $149,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$150,000 to $174,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$150,000 to $174,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$150,000 to $174,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$175,000 to $199,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$175,000 to $199,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$175,000 to $199,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$200,000 to $249,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$200,000 to $249,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$200,000 to $249,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$250,000 to $299,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$250,000 to $299,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$250,000 to $299,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$300,000 to $399,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$300,000 to $399,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$300,000 to $399,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$400,000 to $499,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$400,000 to $499,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$400,000 to $499,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$500,000 to $749,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$500,000 to $749,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$500,000 to $749,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$750,000 to $999,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$750,000 to $999,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$750,000 to $999,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,000,000 to $1,499,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,000,000 to $1,499,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,000,000 to $1,499,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,500,000 to $1,999,999.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,500,000 to $1,999,999.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$1,500,000 to $1,999,999.percentage",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$2,000,000 or more.value",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$2,000,000 or more.margin_of_error",
                "results.0.fields.acs.housing.Value of owner-occupied housing units.$2,000,000 or more.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.families.Household type by household.meta.table_id",
                "results.0.fields.acs.families.Household type by household.meta.universe",
                "results.0.fields.acs.families.Household type by household.Total.value",
                "results.0.fields.acs.families.Household type by household.Total.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households.value",
                "results.0.fields.acs.families.Household type by household.Family households.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households.percentage",
                "results.0.fields.acs.families.Household type by household.Family households: Married-couple family.value",
                "results.0.fields.acs.families.Household type by household.Family households: Married-couple family.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households: Married-couple family.percentage",
                "results.0.fields.acs.families.Household type by household.Family households: Other family.value",
                "results.0.fields.acs.families.Household type by household.Family households: Other family.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households: Other family.percentage",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Male householder, no spouse present.value",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Male householder, no spouse present.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Male householder, no spouse present.percentage",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Female householder, no spouse present.value",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Female householder, no spouse present.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Family households: Other family: Female householder, no spouse present.percentage",
                "results.0.fields.acs.families.Household type by household.Nonfamily households.value",
                "results.0.fields.acs.families.Household type by household.Nonfamily households.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Nonfamily households.percentage",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder living alone.value",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder living alone.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder living alone.percentage",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder not living alone.value",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder not living alone.margin_of_error",
                "results.0.fields.acs.families.Household type by household.Nonfamily households: Householder not living alone.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.families.Household type by population.meta.table_id",
                "results.0.fields.acs.families.Household type by population.meta.universe",
                "results.0.fields.acs.families.Household type by population.Total.value",
                "results.0.fields.acs.families.Household type by population.Total.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households.value",
                "results.0.fields.acs.families.Household type by population.In family households.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family.value",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Relatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Relatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Relatives.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Nonrelatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Nonrelatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In married-couple family: Nonrelatives.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family.value",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Relatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Relatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Relatives.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Nonrelatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Nonrelatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In male householder, no spouse present, family: Nonrelatives.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family.value",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Relatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Relatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Relatives.percentage",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Nonrelatives.value",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Nonrelatives.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In family households: In female householder, no spouse present, family: Nonrelatives.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.families.Household type by population.In nonfamily households.value",
                "results.0.fields.acs.families.Household type by population.In nonfamily households.margin_of_error",
                "results.0.fields.acs.families.Household type by population.In nonfamily households.percentage",
                "results.0.fields.acs.families.Marital status.meta.table_id",
                "results.0.fields.acs.families.Marital status.meta.universe",
                "results.0.fields.acs.families.Marital status.Male.value",
                "results.0.fields.acs.families.Marital status.Male.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male.percentage",
                "results.0.fields.acs.families.Marital status.Male: Never married.value",
                "results.0.fields.acs.families.Marital status.Male: Never married.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Never married.percentage",
                "results.0.fields.acs.families.Marital status.Male: Now married.value",
                "results.0.fields.acs.families.Marital status.Male: Now married.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Now married.percentage",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse present.value",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse present.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse present.percentage",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent.value",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent.percentage",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Separated.value",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Separated.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Separated.percentage",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Other.value",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Other.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Now married: Married, spouse absent: Other.percentage",
                "results.0.fields.acs.families.Marital status.Male: Widowed.value",
                "results.0.fields.acs.families.Marital status.Male: Widowed.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Widowed.percentage",
                "results.0.fields.acs.families.Marital status.Male: Divorced.value",
                "results.0.fields.acs.families.Marital status.Male: Divorced.margin_of_error",
                "results.0.fields.acs.families.Marital status.Male: Divorced.percentage",
                "results.0.fields.acs.families.Marital status.Female.value",
                "results.0.fields.acs.families.Marital status.Female.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female.percentage",
                "results.0.fields.acs.families.Marital status.Female: Never married.value",
                "results.0.fields.acs.families.Marital status.Female: Never married.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Never married.percentage",
                "results.0.fields.acs.families.Marital status.Female: Now married.value",
                "results.0.fields.acs.families.Marital status.Female: Now married.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Now married.percentage",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse present.value",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse present.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse present.percentage",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent.value",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent.percentage",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Separated.value",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Separated.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Separated.percentage",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Other.value",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Other.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Now married: Married, spouse absent: Other.percentage",
                "results.0.fields.acs.families.Marital status.Female: Widowed.value",
                "results.0.fields.acs.families.Marital status.Female: Widowed.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Widowed.percentage",
                "results.0.fields.acs.families.Marital status.Female: Divorced.value",
                "results.0.fields.acs.families.Marital status.Female: Divorced.margin_of_error",
                "results.0.fields.acs.families.Marital status.Female: Divorced.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.economics.Number of households.meta.table_id",
                "results.0.fields.acs.economics.Number of households.meta.universe",
                "results.0.fields.acs.economics.Number of households.Total.value",
                "results.0.fields.acs.economics.Number of households.Total.margin_of_error",
                "results.0.fields.acs.economics.Median household income.meta.table_id",
                "results.0.fields.acs.economics.Median household income.meta.universe",
                "results.0.fields.acs.economics.Median household income.Total.value",
                "results.0.fields.acs.economics.Median household income.Total.margin_of_error",
                "results.0.fields.acs.economics.Household income.meta.table_id",
                "results.0.fields.acs.economics.Household income.meta.universe",
                "results.0.fields.acs.economics.Household income.Less than $10,000.value",
                "results.0.fields.acs.economics.Household income.Less than $10,000.margin_of_error",
                "results.0.fields.acs.economics.Household income.Less than $10,000.percentage",
                "results.0.fields.acs.economics.Household income.$10,000 to $14,999.value",
                "results.0.fields.acs.economics.Household income.$10,000 to $14,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$10,000 to $14,999.percentage",
                "results.0.fields.acs.economics.Household income.$15,000 to $19,999.value",
                "results.0.fields.acs.economics.Household income.$15,000 to $19,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$15,000 to $19,999.percentage",
                "results.0.fields.acs.economics.Household income.$20,000 to $24,999.value",
                "results.0.fields.acs.economics.Household income.$20,000 to $24,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$20,000 to $24,999.percentage",
                "results.0.fields.acs.economics.Household income.$25,000 to $29,999.value",
                "results.0.fields.acs.economics.Household income.$25,000 to $29,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$25,000 to $29,999.percentage",
                "results.0.fields.acs.economics.Household income.$30,000 to $34,999.value",
                "results.0.fields.acs.economics.Household income.$30,000 to $34,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$30,000 to $34,999.percentage",
                "results.0.fields.acs.economics.Household income.$35,000 to $39,999.value",
                "results.0.fields.acs.economics.Household income.$35,000 to $39,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$35,000 to $39,999.percentage",
                "results.0.fields.acs.economics.Household income.$40,000 to $44,999.value",
                "results.0.fields.acs.economics.Household income.$40,000 to $44,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$40,000 to $44,999.percentage",
                "results.0.fields.acs.economics.Household income.$45,000 to $49,999.value",
                "results.0.fields.acs.economics.Household income.$45,000 to $49,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$45,000 to $49,999.percentage",
                "results.0.fields.acs.economics.Household income.$50,000 to $59,999.value",
                "results.0.fields.acs.economics.Household income.$50,000 to $59,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$50,000 to $59,999.percentage",
                "results.0.fields.acs.economics.Household income.$60,000 to $74,999.value",
                "results.0.fields.acs.economics.Household income.$60,000 to $74,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$60,000 to $74,999.percentage",
                "results.0.fields.acs.economics.Household income.$75,000 to $99,999.value",
                "results.0.fields.acs.economics.Household income.$75,000 to $99,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$75,000 to $99,999.percentage",
                "results.0.fields.acs.economics.Household income.$100,000 to $124,999.value",
                "results.0.fields.acs.economics.Household income.$100,000 to $124,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$100,000 to $124,999.percentage",
                "results.0.fields.acs.economics.Household income.$125,000 to $149,999.value",
                "results.0.fields.acs.economics.Household income.$125,000 to $149,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$125,000 to $149,999.percentage",
                "results.0.fields.acs.economics.Household income.$150,000 to $199,999.value",
                "results.0.fields.acs.economics.Household income.$150,000 to $199,999.margin_of_error",
                "results.0.fields.acs.economics.Household income.$150,000 to $199,999.percentage",
                "results.0.fields.acs.economics.Household income.$200,000 or more.value",
                "results.0.fields.acs.economics.Household income.$200,000 or more.margin_of_error",
                "results.0.fields.acs.economics.Household income.$200,000 or more.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.demographics.Median age.meta.table_id",
                "results.0.fields.acs.demographics.Median age.meta.universe",
                "results.0.fields.acs.demographics.Median age.Total.value",
                "results.0.fields.acs.demographics.Median age.Total.margin_of_error",
                "results.0.fields.acs.demographics.Median age.Male.value",
                "results.0.fields.acs.demographics.Median age.Male.margin_of_error",
                "results.0.fields.acs.demographics.Median age.Female.value",
                "results.0.fields.acs.demographics.Median age.Female.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.meta.table_id",
                "results.0.fields.acs.demographics.Population by age range.meta.universe",
                "results.0.fields.acs.demographics.Population by age range.Total.value",
                "results.0.fields.acs.demographics.Population by age range.Total.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male.value",
                "results.0.fields.acs.demographics.Population by age range.Male.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: Under 5 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: Under 5 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: Under 5 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 5 to 9 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 5 to 9 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 5 to 9 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 10 to 14 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 10 to 14 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 10 to 14 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 15 to 17 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 15 to 17 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 15 to 17 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 18 and 19 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 18 and 19 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 18 and 19 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 20 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 20 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 20 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 21 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 21 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 21 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 22 to 24 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 22 to 24 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 22 to 24 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 25 to 29 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 25 to 29 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 25 to 29 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 30 to 34 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 30 to 34 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 30 to 34 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 35 to 39 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 35 to 39 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 35 to 39 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 40 to 44 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 40 to 44 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 40 to 44 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 45 to 49 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 45 to 49 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 45 to 49 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 50 to 54 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 50 to 54 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 50 to 54 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 55 to 59 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 55 to 59 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 55 to 59 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 60 and 61 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 60 and 61 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 60 and 61 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 62 to 64 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 62 to 64 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 62 to 64 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 65 and 66 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 65 and 66 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 65 and 66 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 67 to 69 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 67 to 69 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 67 to 69 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 70 to 74 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 70 to 74 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 70 to 74 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 75 to 79 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 75 to 79 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 75 to 79 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 80 to 84 years.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 80 to 84 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 80 to 84 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Male: 85 years and over.value",
                "results.0.fields.acs.demographics.Population by age range.Male: 85 years and over.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Male: 85 years and over.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female.value",
                "results.0.fields.acs.demographics.Population by age range.Female.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: Under 5 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: Under 5 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: Under 5 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 5 to 9 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 5 to 9 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 5 to 9 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 10 to 14 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 10 to 14 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 10 to 14 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 15 to 17 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 15 to 17 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 15 to 17 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 18 and 19 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 18 and 19 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 18 and 19 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 20 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 20 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 20 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 21 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 21 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 21 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 22 to 24 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 22 to 24 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 22 to 24 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 25 to 29 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 25 to 29 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 25 to 29 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 30 to 34 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 30 to 34 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 30 to 34 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 35 to 39 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 35 to 39 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 35 to 39 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 40 to 44 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 40 to 44 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 40 to 44 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 45 to 49 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 45 to 49 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 45 to 49 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 50 to 54 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 50 to 54 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 50 to 54 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 55 to 59 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 55 to 59 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 55 to 59 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 60 and 61 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 60 and 61 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 60 and 61 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 62 to 64 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 62 to 64 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 62 to 64 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 65 and 66 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 65 and 66 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 65 and 66 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 67 to 69 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 67 to 69 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 67 to 69 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 70 to 74 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 70 to 74 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 70 to 74 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 75 to 79 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 75 to 79 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 75 to 79 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 80 to 84 years.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 80 to 84 years.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 80 to 84 years.percentage",
                "results.0.fields.acs.demographics.Population by age range.Female: 85 years and over.value",
                "results.0.fields.acs.demographics.Population by age range.Female: 85 years and over.margin_of_error",
                "results.0.fields.acs.demographics.Population by age range.Female: 85 years and over.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.demographics.Sex.meta.table_id",
                "results.0.fields.acs.demographics.Sex.meta.universe",
                "results.0.fields.acs.demographics.Sex.Total.value",
                "results.0.fields.acs.demographics.Sex.Total.margin_of_error",
                "results.0.fields.acs.demographics.Sex.Male.value",
                "results.0.fields.acs.demographics.Sex.Male.margin_of_error",
                "results.0.fields.acs.demographics.Sex.Male.percentage",
                "results.0.fields.acs.demographics.Sex.Female.value",
                "results.0.fields.acs.demographics.Sex.Female.margin_of_error",
                "results.0.fields.acs.demographics.Sex.Female.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.acs.demographics.Race and ethnicity.meta.table_id",
                "results.0.fields.acs.demographics.Race and ethnicity.meta.universe",
                "results.0.fields.acs.demographics.Race and ethnicity.Total.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Total.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: White alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: White alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: White alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Black or African American alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Black or African American alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Black or African American alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: American Indian and Alaska Native alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: American Indian and Alaska Native alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: American Indian and Alaska Native alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Asian alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Asian alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Asian alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Some other race alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Some other race alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Some other race alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races including Some other race.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races including Some other race.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races including Some other race.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Not Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: White alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: White alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: White alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Black or African American alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Black or African American alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Black or African American alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: American Indian and Alaska Native alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: American Indian and Alaska Native alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: American Indian and Alaska Native alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Asian alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Asian alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Asian alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Native Hawaiian and Other Pacific Islander alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Some other race alone.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Some other race alone.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Some other race alone.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races including Some other race.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races including Some other race.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races including Some other race.percentage",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.value",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.margin_of_error",
                "results.0.fields.acs.demographics.Race and ethnicity.Hispanic or Latino: Two or more races: Two races excluding Some other race, and three or more races.percentage",
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>

          <div className="card">
            {this.state.cookieValue &&
              Object.keys(this.state.cookieValue).length &&
              this.state.flattenedAddress &&
              Object.keys(this.state.flattenedAddress).filter(key => [
                "results.0.fields.zip4.record_type.code",
                "results.0.fields.zip4.record_type.description",
                "results.0.fields.zip4.carrier_route.id",
                "results.0.fields.zip4.carrier_route.description",
                "results.0.fields.zip4.building_or_firm_name",
                "results.0.fields.zip4.plus4.0",
                "results.0.fields.zip4.zip9.0",
                "results.0.fields.zip4.government_building",
                "results.0.fields.zip4.facility_code.code",
                "results.0.fields.zip4.facility_code.description",
                "results.0.fields.zip4.city_delivery",
                "results.0.fields.zip4.valid_delivery_area",
                "results.0.fields.zip4.exact_match"
              ].includes(key))
                .map((key, index) => {
                  return <div
                    key={key}
                    style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                    <b style={{ fontSize: '0.25em' }}>{key}</b>
                    <div>{this.state.flattenedAddress[key]}</div>
                  </div>
                })}
          </div>
          <footer>
            <button className="unTraditionalButton" onClick={e => this.refresh()}>Refresh</button>
          </footer>
        </div>
        {/* https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/ */}
        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div */}
        <br />
        <br />
        <div style={{
          width: "15em",
          border: "1px solid #333",
          boxShadow: "8px 8px 5px #444",
          padding: "8px 12px",
          backgroundImage: "linear-gradient(180deg, #fff, #ddd 40%, #ccc)"
        }}>
          <p>What is Latitude and what is Longitude?

            The idea is that we can generate a follow-up query, that is following the Address Query. This new query returns information not with-standing Congressional Districts, Contact Phone & URL, and the Biographies (Party and Last Name) of the operators, and the Current Legislator Source & Type.</p>
        </div>
        <br />
        <br />
        <br />
        <div className="cards">
          {
            this.state.cookieValue && Object.keys(this.state.cookieValue).length && this.state.latLngQueryFlattened && Object.keys(this.state.latLngQueryFlattened).map((key, index) => {
              return <div className="card" key={key} style={{ backgroundColor: `rgb(${0.5 * 10 * index + 100}, ${0 * 10 * index + 100}, ${0.3 * 10 * index + 10})` }}>
                <b>{key}</b>
                <div>{this.state.latLngQueryFlattened[key]}</div>
              </div>
            })
          }
        </div>
        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Times New Roman', Times, serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div >
    </div >
  }
}
