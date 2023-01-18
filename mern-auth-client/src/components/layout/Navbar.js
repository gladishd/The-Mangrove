import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import Router from "react-router-dom";

function Navbar() {

  // const { loggedIn } = useContext(AuthContext);
  // console.log(loggedIn);
  const loggedIn = true;
  return <div>
    <Router>
      <Link to="/">Home</Link>
      {
        loggedIn === false && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      {
        loggedIn === true &&
        <>
          <Link to="/politician">Politicians</Link>
          <LogOutBtn />
        </>
      }
    </Router>
  </div>;
};

export default Navbar;
