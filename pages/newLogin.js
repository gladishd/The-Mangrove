import React, { useContext, useState } from "react";
import axios from "axios";
// import AuthContext from "../mern-auth-client/src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Register from "../mern-auth-client/src/components/auth/Register.js"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { getLoggedIn } = useContext(AuthContext);

  // const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email, password,
      };

      const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
      console.log("loggedInRes is ", loggedInRes)

      await axios.post("http://localhost:5000/auth/login", loginData);
      // await getLoggedIn();
      // navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
        <input type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
        <Register />
      </form>
    </div>
  );
}

export default Login;
