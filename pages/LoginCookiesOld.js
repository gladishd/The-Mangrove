// pages/login.js
import { useCookies } from "react-cookie"
import React, { useEffect } from 'react';
import Router from 'next/router'

const Login = (props) => {
  const [cookie, setCookie] = useCookies(["user"]);

  const [cookieData, setCookieData] = React.useState(props.cookieSet); // this runs only once, when the component is mounted, not when i.e. contact updates.

  const [variable, setVariable] = React.useState(0);

  useEffect(() => {
    setCookieData(props.cookieSet);
    return () => {
      console.log('This will be logged on unmount');
    };
  }, [props.cookieSet]) // now this listens to changes in contact

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    if (props.cookieSet && variable == 0) {
      setVariable(1)
      setTimeout(() => {
        console.log("Delayed for 2 seconds.");
        console.log(props.cookieSet)
        // Router.push('/')
        window.location.reload(true);
      }, "0")
      setCookie("user", JSON.stringify({ data: "this is the most authentic cookie you've ever authenticated" }), {
        path: "/",
        maxAge: 2147483647, // = 2038-01-19 04:14:07 https://stackoverflow.com/questions/3290424/set-a-cookie-to-never-expire
        sameSite: true,
      })
      // Absolutely not. Commenting out Router.push('/') makes the infinite loop even faster than before!
    }
    return () => {
      console.log('This will be logged on unmount');
    };
  })

  const handleSignIn = async (e) => {
    try {
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
        {/* hi there */}
        {/* <input type="text" placeholder="pretty please enter username" onClick={e => handleSignIn(e)} /> */}
      </label>
    </>
  )
}

export default Login
