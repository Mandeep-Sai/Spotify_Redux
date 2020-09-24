import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../styles/Register.css";
import { FaSpotify } from "react-icons/fa";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        username: "",
        email: "",
        password: "",
      },
      emailCheck: "",
    };
  }
  updateForm = (e) => {
    let id = e.currentTarget.id;
    let formInfo = this.state.formInfo;
    formInfo[id] = e.currentTarget.value;
    this.setState({ formInfo });
  };
  updateRecheckEmail = (e) => {
    this.setState({ emailCheck: e.currentTarget.value });
  };
  register = async () => {
    let response = await fetch("http://localhost:3003/users/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state.formInfo),
      headers: new Headers({
        "content-type": "application/json",
      }),
    });
    if (response.ok) {
      console.log("hello");
      window.location.href = "/home";
    } else {
      alert("Error");
    }
  };

  render() {
    return (
      <Container id="register">
        <div id="logo">
          <FaSpotify />
          <p>Spotify</p>
        </div>
        <a href="http://localhost:3003/users/googleLogin">
          <button id="googleRegister">REGISTER WITH GOOGLE</button>
        </a>
        <hr />
        <form>
          <p>Register with your email address</p>
          <div id="blocks">
            <p>What is your email address</p>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              onChange={this.updateForm}
              required
            />
          </div>
          <div id="blocks">
            <p>Confirm email address</p>
            <input
              type="text"
              placeholder="Re-enter your email address"
              onChange={this.updateRecheckEmail}
              id="emailCheck"
              required
            />
          </div>
          <div id="blocks">
            <p>Create a password</p>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              onChange={this.updateForm}
              required
            />
          </div>
          <div id="blocks">
            <p>What shall we call you</p>
            <input
              type="text"
              id="username"
              placeholder="Enter a profile name"
              onChange={this.updateForm}
              required
            />
          </div>
          <button id="registerButton" type="submit" onClick={this.register}>
            TO REGISTER
          </button>
        </form>
        <p>
          You already have an account? <a href="/signIn">Sign in</a>{" "}
        </p>
      </Container>
    );
  }
}

export default Register;
