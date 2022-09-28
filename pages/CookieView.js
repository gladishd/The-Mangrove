import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function App({ propsFn }) {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    propsFn(cookies)
  }, [])

  return (
    <div>
      {cookies.user && console.log(cookies.user)}
    </div>
  );
}
