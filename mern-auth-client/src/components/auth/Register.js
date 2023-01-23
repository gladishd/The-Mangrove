

import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordVerify: '',
    };
    this.register = this.register.bind(this)
  }

  componentDidUpdate() {
    console.log("the value on this.state is ", this.state)
  }

  //   const[email, setEmail] = useState("");
  //   const[password, setPassword] = useState("");
  //   const[passwordVerify, setPasswordVerify] = useState("");

  //   const { getLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();

  register = async (e) => {
    e.preventDefault();

    try {
      // const registerData = {
      //   email, password, passwordVerify,
      // };

      const registerData = this.state;

      await axios.post("http://localhost:5000/auth/", registerData);
      // await getLoggedIn();
      // navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      // <form>Register a new account!</form >
      <form onSubmit={e => this.register(e)}>
        <h1>Register a new account</h1>
        <input type="username" placeholder="Username" />
        <input type="email"
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          value={this.state.email}
        />
        <input type="password"
          placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
          value={this.state.password}
        />
        <input type="password"
          placeholder="Verify your password"
          onChange={(e) => this.setState({ passwordVerify: e.target.value })}
          value={this.state.passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
