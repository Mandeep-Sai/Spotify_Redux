import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../styles/Register.css";
import { FaSpotify, FaSearch, FaHome, FaBookOpen } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    };
  }
  updateForm = (e) => {
    let id = e.currentTarget.id;
    let formInfo = this.state.formInfo;
    formInfo[id] = e.currentTarget.value;
    this.setState({ formInfo });
  };
  sendInfo = async () => {
    let response = await fetch("http://127.0.0.1:3003/users/register", {
      method: "POST",
      body: JSON.stringify(this.state.formInfo),
      headers: new Headers({
        "content-type": "application/json",
      }),
    });
    if (response.ok) {
      alert("Added");
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
        <button id="fbRegister">REGISTER WITH FACEBOOK</button>
        <hr />
        <p>Register with your email address</p>
        <div id="blocks">
          <p>What is your email address</p>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div id="blocks">
          <p>Confirm email address</p>
          <input type="text" placeholder="Re-enter your email address" />
        </div>
        <div id="blocks">
          <p>Create a password</p>
          <input type="text" placeholder="Create a password" />
        </div>
        <div id="blocks">
          <p>What shall we call you</p>
          <input type="text" placeholder="Enter a profile name" />
        </div>
        <button id="registerButton">TO REGISTER</button>
        <p>
          You already have an account? <a>Sign in</a>{" "}
        </p>
      </Container>
    );
  }
}

export default Register;
