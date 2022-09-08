import Head from 'next/head'
import React from 'react'
import Router from 'next/router'

import {
  Navbar,
} from 'react-bootstrap'
import Snowfall from 'react-snowfall'


export default class Home extends React.Component {
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

            <input type="email" id="email" name="email" placeholder="Username or Email" />

            <br /><br />

            <input type="password" id="password" name="password" placeholder="Password" />
            <br /><br />

            <center>
              <button style={{ fontSize: '1em', fontWeight: 'bolder', width: '100px' }}>Login</button>
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
