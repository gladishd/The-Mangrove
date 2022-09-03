import Head from 'next/head'
import React from 'react'

import {
  Navbar,
} from 'react-bootstrap'
import Snowfall from 'react-snowfall'


export default class Home extends React.Component {
  render() {
    return <div className="container" style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
      '--m': "conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom/80px 51% repeat-x, conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) top /80px 51% repeat-x",
      width: '100vw !important'
    }}>
      <Snowfall />
      <Head>
        <title className='box'>Two Signup Types, and the Users {`&`} Politicians </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Chat with <a href="/login">politicians like you!</a>
        </h1>

        <div className="grid zigzag" style={{
          backgroundColor: "rgb(173,94,102)",
          borderStyle: 'outset',
          borderWidth: '1em'
        }}>
          <a href="/signup" className="card">
            <h3>An Explore tab with Signup &rarr;</h3>
            <p>
              Find in-depth information about discovering new people, and generate a follow tab for updates on people you've followed.
            </p>
          </a>

          <a href="/login" className="card">
            <h3>Learn with Login &rarr;</h3>
            <p>Actually there are three tabs; learn about the Community Tab which is permissible to track local developments going around!</p>
          </a>

          <a
            href="/login"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Firebase is like any other database, remember? Proper format for the request bodies and that is all... it's just an API that sends and receives strings of texts. We ironed out some stuff to get a basic layout of what we're planning on doing. Then, there's nothing stopping us from getting a massive amount of politicians, mesmerizing, with much brainstorming behind it all. </p>
          </a>

          <a
            href="/signup"
            className="card"
          >
            <h3>MongoDB versus Firebase &rarr;</h3>
            <p>
              If you're more comfortable with Firebase, then make your "home" here... Firebase's API is about two lines of code for imports, and database management can also be done from the website itself.
            </p>
          </a>
        </div>
      </main>

      <div style={{ textAlign: 'justify', padding: '3em' }}>
        <h1>The Issue:</h1>
        Have you ever picked up a ballot and saw dozens of names of people and positions you had no idea existed? Most people have. There is a distinct lack of easy-to-access information about many local politicians. People don’t know who they’re voting for, and sometimes, even what they’re voting for. Currently, if you wanted to find out more about your local elected officials, you’d have to make multiple searches just to find out who they are, then multiple more searches to find out what they stand for.
        <br />
        <br />
        Mission:
        Our mission is to revolutionize the political system by granting voters easy access to information about their local and state-level politicians, while also connecting politicians to their local communities. The more informed society is, the better it is.
        <br />
        <br />
        <h1>Goals:</h1>
        To have a growth of 50 new users per day by the end of the year
        To have had one successful event organized through this app by the end of the year.
        To have impacted the 2022 midterms in some way (might be a tight timeframe, doesn’t hurt to try).
        <br />
        <br />
        <h1>Market:</h1>
        Govtech is still underdeveloped. 270towin.com attempts to provide some sort of platform to inform voters about their politicians, but is sorely lacking in data and is confusing to use. Ballotpedia is far more comprehensive, but in turn lacks a user-friendly interface--you get overwhelmed with information. Additionally, the more local you go, the more clicks you need. Neither of these platforms allow any sort of connection or interaction between voter or politician.
        Our company dips into the government tech market, the social media market, and the information/data market.
        Since elected officials affect the law and the law affects everyone, the target market will consist of anybody with internet access, a phone, or a computer, regardless of age, gender, race, income, or any other distinguishing factors.
        <br />
        <br />
        There are two main market segments:
        <br />
        <br />
        Voters {`&`} Elected officials
        <br />
        <br />
        <h1>How it works (for voters):</h1>
        Voters will be provided an intuitive and easy to sort database of politicians for voters to go through.
        Voters will be able to sort the politicians by distance to their current location, zip-code, county, state, political position, party, etc.
        <br />
        <br />
        Voters will also be able to click on any politician listed and see their full name, previous/current position(s), what position they’re running for, their party affiliation, their websites, and their political platform.
        Voters can also search for a specific politician that they may be interested in following.
        <br />
        <br />
        Voters will have a social feed where they can see events and posts their local politicians make.
        There will be two types of social feeds for voters
        <br />
        <br />
        1. A “global” or “explore” social feed that displays every post a politician makes from your zip-code/district, city, county, and state. For example, if you are living in Lakeview, this feed would show posts from your Lakeview alderman, the Chicago mayor and other city representatives, the DA, Cook county officials, Illinois state senators and representatives, the Illinois governor, etc.
        <br />
        <br />
        2. A personalized social feed where only posts from politicians you “follow” appear.
        When a politician posts an event that shows up on a social feed, voters can publicly express interest or show that they will attend the event. The voters’ information will be anonymous by default, but can be set to public if the user chooses to do so.
        <br />
        <br />
        <h1>How it works (for politicians):</h1>
        The basic data (name, party, position) about every current and running politician will already be on the site, but politicians can create an account and, claim the already-existing profile to add more specific details, such as their political platform, etc.
        <br />
        <br />
        Additionally, politicians can make posts that local voters will see on their social feeds.
        <br />
        <br />
        Politicians can also host and schedule events like speeches and rallies etc. Local voters will see such events on their feeds and can publicly express interest or show that they will be attending such an event.
        <br />
        <br />
        Politicians can also schedule and host virtual live-streams and Q&A sessions (with chat moderation) to connect with their communities.
        <br />
        <br />

        <h1>Business Model:</h1>
        Politicians can claim their already-existing profile for free, but certain features will need to be paid for.
        TO BE FILLED OUT…
        <br />
        <br />
        <h1>Marketing Plan (targeting voters):</h1>
        Post ads online on social media apps, on the radio, and even post fliers on the streets. Reach out to friends and family and encourage word-of-mouth spread.
        <br />
        <br />
        <h1>Marketing Plan (targeting politicians):</h1>
        Contact them via email and/or phone and give them an elevator pitch of the idea and how they’d benefit from it. Additionally, if enough voters are excited about the project, encourage them to convince their favorite politicians to sign up as well.
        <br />
        <br />


        <h1>Potential Questions/Concerns:</h1>
        <br />
        <h2>Why not just use Twitter?</h2>
        <br />
        Because you can’t search up people you don’t even know exist. We want to provide a convenient, intuitive, and concise way for politicians to both share their views and plan/host events.
        <br />
        <br />

        <h1>Current Challenges and Things To Do:</h1>
        <br />
        In the beginning, we shall be doing business at least partly, through the email system which beckons us. It’s easy to create enriching and memorable experiences for guests, patrons, clients… create an atmosphere of mystique will become clear when we automate the email system and make the admin dashboard interface which performs database management harmoniously with each request…
        <br />
        <br />
        Take on the responsibility with utmost professionalism, grace, and enthusiasm. Test across different browsers.
        <br />
        <br />
        Establish consistent casing for variable names, with console logs that describe what happens when we e.preventDefault() thereby preventing the in-built behavior. Read the documentation, so that we make properly formatted request bodies.
        <br />
        <br />
        Acquiring and going through the database of all current and running politicians (Ballotpedia will be our friend) and scraping the data onto our app, since doing that manually would take ages. Some sort of API would be useful that constantly updates, since people drop out of electoral races all the time.
        <br />
        <br />
        Figure out how to monetize this!! Otherwise investors will be hesitant to get involved.
        <br />
        <br />
        Address reproducibility; a good README…
        <br />
        <br />
        Install Node Package Manager and run the site locally. VS Code with Node.js, on macOS and Git. With Version Control we can always roll back.
        <br />
        <br />
        <h1>Future Features and Scaling:</h1>
        <br />
        A community tab where verified community leaders can post updates about what’s going around in the area. Block parties, events, concerns, protests, etc. Events and secrets that only locals would know.

        Perhaps, a map of the nearby area that details nearby crime and crime safety types, kind of like what Citizen does but allowing verified members of the local police force to post updates there.
        <br />
        <br />
        For scaling, expanding to other countries like the U.K. etc
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  }
}
