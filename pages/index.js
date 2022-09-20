import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import { instanceOf } from 'prop-types';

import {
  Navbar,
} from 'react-bootstrap'
import Snowfall from 'react-snowfall'

// import { withCookies, Cookies } from "react-cookie"

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
      name: cookies && cookies.get('name') || 'Ben',
      userProfile: null,
      username: null,
      password: null,
      cookieValue: null,
      allProps: props,
      newCookies: instanceOf(Cookies).isRequired
    }
    this.login = this.login.bind(this)
  }

  componentDidUpdate() {
    console.log('the props are ', this.state.allProps)
  }

  login = async e => {
    e.preventDefault()

    let { username, password } = this.state

    console.log("username and password are ", username, password)

    console.log("process.env.API_URL is ", process.env.API_URL)

    console.log('the state is ', this.state)

    firebaseApp.auth().signInWithEmailAndPassword(username, password).then(async response => {
      var response = await axios.post(
        '/api/sessions',
        { user: { email: username.toLowerCase() } },
        { withCredentials: true }
      )
      console.log("The response is ", response)

      const { cookies } = this.props;
      const newCookies = this.state.newCookies;
      console.log("What is newCookies?", newCookies)
      Cookies.set("user", JSON.stringify({ data: 'some new data goes here from pages/index.js' }), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      })
      newCookies.set('name', name, { path: '/' });
      this.setState({ name });

      Router.push('/profilePage')
    })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return <div className="container" style={{
      background: "rgb(250,250,250)",
      width: '100vw !important',
      display: 'flex',
      justifyContent: 'center',

    }}>
      <div style={{
        maxWidth: '1300px',
        display: 'inline-block',
        backgroundColor: 'rgb(250, 250, 250)',
      }}>
        <Snowfall />
        <Head>
          <title className='box'>Two Signup Types, and the Users {`&`} Politicians </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{ zIndex: '3' }}>

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
            alignContent: 'space-around'
          }}>
            <br />
            <center style={{ fontSize: '2em', fontWeight: 'bolder' }}>Mangrove</center>

            <br /><br />

            <input onChange={e => this.setState({ username: e.target.value })} type="email" id="email" name="email" placeholder="Username or Email" />

            <br /><br />

            <input onChange={e => this.setState({ password: e.target.value })} type="password" id="password" name="password" placeholder="Password" />
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
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className="logo" />
          </a>
        </footer>

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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div >
    </div >
  }
}
