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
  }


  setUsername(username) {
    if (!this.state.responseSuccess) {
      this.setState({
        username,
      })
    }
  }

  setPassword(password) {
    if (!this.state.responseSuccess) {
      this.setState({
        password,
      })
    }
  }

  queryGeocodioAddress(address) {
    const Geocodio = require('geocodio-library-node');
    const geocoder = new Geocodio('b33686cba0ab3063aa65b7c5806783bcb5b7c63');
    // geocoder.geocode(address, ['cd'])
    geocoder.geocode(address, ['cd', 'cd1', 'cd2', 'cd3', 'cd4', 'cd5', 'cd6', 'stateleg', 'stateleg-next', 'school', "census", "census2000", 'census2010', "census2011", "census2012", "census2013", 'census2014', 'census2015', 'census2016', 'census2017', 'census2018', 'census2019', 'census2020', 'census2021', 'acs-demographics', 'acs-economics', 'acs-families', 'acs-housing', 'acs-social', 'zip4', 'riding', 'provriding', 'statcan', 'timezone'])
      .then(async response => {
        console.group('On queryGeoCodioAddress, the response we are getting is like this:'); // Group Method with parameter
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
  }

  // componentDidUpdate() {
  //   if (!this.state.latAndLongFromAddress && this.state.flattenedAddress) {
  //     let latAndLongFromAddress = this.state.flattenedAddress["results.0.location.lat"] + ", " + this.state.flattenedAddress["results.0.location.lng"]
  //     this.setState({
  //       latAndLongFromAddress
  //     })
  //   }
  // }

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
          <footer>
            <button className="unTraditionalButton" onClick={e => this.refresh()}>Refresh</button>
          </footer>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1>The Address Query.</h1>
        <div className="cards">
          {
            this.state.cookieValue && Object.keys(this.state.cookieValue).length && this.state.flattenedAddress && Object.keys(this.state.flattenedAddress).map((key, index) => {
              return <div
                className="card"
                key={key}
                style={{ backgroundColor: `rgb(${1 * index + 240}, ${1 * index + 240}, ${0.3 * 10 * index + 240})` }}>
                <b style={{ fontSize: '0.25em' }}>{key}</b>
                <div>{this.state.flattenedAddress[key]}</div>

              </div>
            })
          }
        </div>

        {/* https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/ */}


        <h3>The Latitude & Longitude Query. By default, this will be equal to the query generated following the Address Query -> Returns information like Congressional Districts, Contact Phone & URL, (Biography: Birthday, Party, Last Name,) and Current Legislators Source & Type.</h3>
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
