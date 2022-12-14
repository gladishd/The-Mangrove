// pages/login.js
import { useCookies } from "react-cookie"
import React, { useEffect } from 'react';
import Router from 'next/router'

const Login = ({ name, cookieSet }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  // useEffect(() => {
  //   console.log("We are using the effect hook on the logout component! On the Logout component we are finding the cookie value, what is it?", cookie)
  // })

  return (
    <>
      <button className="unTraditionalButton"
        style={{ margin: 'auto', padding: '1em' }}
        onClick={e => {
          console.log("You clicked the button!")
          removeCookie("user")
          window.location.reload(true)
        }}>
        Logout
      </button>
    </>
  )
}

export default Login
