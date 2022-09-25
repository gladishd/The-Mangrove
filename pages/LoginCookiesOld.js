// pages/login.js
import { useCookies } from "react-cookie"
import React, { useEffect } from 'react';
import Router from 'next/router'

const Login = ({ name, cookieSet }) => {
  const [cookie, setCookie] = useCookies(["user"]);

  const [cookieData, setCookieData] = React.useState(cookieSet); // this runs only once, when the component is mounted, not when i.e. contact updates.

  const [variable, setVariable] = React.useState(0);

  useEffect(() => {
    setCookieData(cookieSet);
  }, [cookieSet]) // now this listens to changes in contact

  useEffect(async () => {
    console.log("*******we are on the login cookies component, did we get the props from ProfilePageOld and before that from index.js? The props here are : ", name, cookieSet)
    console.log(cookieSet)

    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    if (cookieSet && variable == 0) {
      console.log("Did we reach the set cookie code on Login Cookies?")
      setVariable(1)

      setTimeout(() => {
        console.log("Delayed for 2 seconds.");
        console.log(cookieSet)
        // Router.push('/')
        window.location.reload(true);
      }, "3000")

      setCookie("user", JSON.stringify({ data: "this is the most authentic cookie you've ever authenticated" }), {
        path: "/",
        maxAge: 20, // Expires after 10 seconds
        sameSite: true,
      })
      // Absolutely not. Commenting out Router.push('/') makes the infinite loop even faster than before!
    }
  })

  const handleSignIn = async (e) => {
    console.log('we are looking at useEffect, but not in the function')
    try {
      console.log('we are looking at useEffect, but not in the function')
      e.preventDefault()
      // const response = await yourLoginFunction(username) //handle API call to sign in here.
      // const data = response.data


    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <label htmlFor="username">
        hi there
        {/* <input type="text" placeholder="pretty please enter username" onClick={e => handleSignIn(e)} /> */}
      </label>
    </>
  )
}

export default Login
