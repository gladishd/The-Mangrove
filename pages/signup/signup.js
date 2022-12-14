import Head from 'next/head'
import React from 'react'
import Router from 'next/router'

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: null,
    }
    this.signup = this.signup.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  redirect(e) {
    e.preventDefault()
    Router.push("/")
  }

  signup(e) {
    e.preventDefault();
    Router.push('/signupForm')
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Signup with us!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charset="utf-8" />
          <link rel="stylesheet" type="text/css" href="login_style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css' />
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
        </Head>

        <div className="login-page">
          <div className="form">

            <form>
              <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed="1" style={{ justifyContent: "center" }} loop autoplay></lottie-player>
              <input type="text" placeholder="&#xf007;  username" />
              <input type="password" id="password" placeholder="&#xf023;  password" />
              <i className="fas fa-eye"
              // onClick={
              //   props.show()
              // }
              ></i>
              <br />
              <br />
              <button onClick={e => this.redirect(e)}>LOGIN</button>
              <p className="message"></p>
            </form>

            <form className="login-form">
              <button type="button"
                onClick={e => this.signup(e)}
              >SIGN UP</button>
            </form>
          </div>
        </div>

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
          font-family: 'Times New Roman', Times, serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    )
  }
}
