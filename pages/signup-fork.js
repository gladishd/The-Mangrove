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
      height: '100vh',
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
            justifyContent: 'center'
          }}>
            <br />
            <h2>Are you currently an elected official or running for office?</h2>
            <br />
            <br />
            <br />
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: '130px'
            }}>
              <button onClick={e => Router.push('/signup-politician')}>Yes</button>
              <div style={{ width: "20px" }} />
              <button onClick={e => Router.push('/signup-voter')}>No</button>

            </div>


          </div>

          <br />


        </main>

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
