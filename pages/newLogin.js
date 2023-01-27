import React, { useContext, useState } from "react";
import axios from "axios";
// import AuthContext from "../mern-auth-client/src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Register from "../mern-auth-client/src/components/auth/Register.js"
import LogOutBtn from "./api/LogOutBtn.js"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this)
  }


  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");

  // const { getLoggedIn } = useContext(AuthContext);

  // const navigate = useNavigate();

  async login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email: this.state.email, password: this.state.password,
      };

      console.log("The email is not defined. The email is defined.  ", loginData)

      // const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
      // console.log("loggedInRes is ", loggedInRes)

      // await axios.post("http://localhost:5000/auth/login", loginData);
      let res = await axios.post("http://localhost:5000/auth/login", {
        email: "withouspaces&registercommas@a.com",
        password: "password"
      }, { withCredentials: true });

      console.log("the original page newlogin res is ", res)

      // await getLoggedIn();
      const howIsDotDataTrue = await axios.get("http://localhost:5000/auth/loggedIn", { withCredentials: true });
      console.log("howIsDotDataTrue", howIsDotDataTrue)
      // navigate("/");

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Log in to your account</h1>
        <form onSubmit={e => this.login(e)}>
          <input type="email"
            placeholder="Email"
            onChange={(e) => this.setState({
              email: e.target.value
            })}
            value={this.state.email}
          />
          <input type="password"
            placeholder="Password"
            onChange={(e) => this.setState({
              password: e.target.value
            })}
            value={this.state.password}
          />
          <button type="submit">Log in</button>
        </form>
        <Register />
        <LogOutBtn />
      </div>
    );
  }
}

export default Login;
