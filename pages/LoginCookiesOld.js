// pages/login.js
import { useCookies } from "react-cookie"
import { useEffect } from 'react';

const Login = () => {
  const [cookie, setCookie] = useCookies(["user"])

  useEffect(() => {
    console.log("we are on the login cookies component.")
  })

  const handleSignIn = async (e) => {
    console.log('we are looking at useEffect, but not in the function')
    try {
      console.log('we are looking at useEffect, but not in the function')
      e.preventDefault()
      // const response = await yourLoginFunction(username) //handle API call to sign in here.
      // const data = response.data

      setCookie("user", JSON.stringify({ data: "this is the most authentic cookie you've ever authenticated" }), {
        path: "/",
        maxAge: 10, // Expires after 10 seconds
        sameSite: true,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <label htmlFor="username">
        hi there
        <input type="text" placeholder="pretty please enter username" onClick={e => handleSignIn(e)} />
      </label>
    </>
  )
}

export default Login
