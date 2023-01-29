import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function App({ propsFn }) {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    console.log("What are the cookies on CookieView.js? ", cookies)
    propsFn(cookies)

  }, [])

  return (
    <div>
      {/* {cookies.user && console.log(cookies.user)} */}
    </div>
  );
}
