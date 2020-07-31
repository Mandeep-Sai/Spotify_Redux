import React from "react";
import { FaSpotify, FaSearch, FaHome, FaBookOpen } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Form, FormControl, Button, Modal, Col, Row } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (name) =>
      dispatch({
        type: "LOAD_USER",
        payload: name,
      }),
  };
};

class SideBar extends React.Component {
  state = {
    query: "",
    username: "",
  };
  searchQuery = (e) => {
    let query = e.currentTarget.value;
    console.log(query);
    this.props.history.push("/searchResults/" + query);
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  updateUser = (e) => {
    this.setState({ username: e.currentTarget.value });
  };
  render() {
    return (
      <>
        <nav id="sidebar">
          <div className="sidebar-header">
            <IconContext.Provider value={{ className: "spotifyIcon" }}>
              <FaSpotify />
            </IconContext.Provider>
            <p>Spotify</p>
          </div>
          <ul className="list-unstyled">
            <div id="sidebar-content">
              <div className="d-flex active">
                <IconContext.Provider value={{ className: "sidebarIcons" }}>
                  <FaHome />
                </IconContext.Provider>
                <a href="/">Home</a>
              </div>
              <div className="d-flex">
                <IconContext.Provider value={{ className: "sidebarIcons" }}>
                  <FaSearch onClick={this.showSearchBar} />
                </IconContext.Provider>
                <a href="">Search</a>
              </div>
              <div className="d-flex">
                <IconContext.Provider value={{ className: "sidebarIcons" }}>
                  <FaBookOpen />
                </IconContext.Provider>
                <a href="album.html">Your Library</a>
              </div>
            </div>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={this.searchQuery}
                className="mr-sm-2"
              />
              {/* <Button variant="outline-success"><FaSearch/></Button> */}
            </Form>
          </ul>
          <div id="buttons">
            <div id="signUp">
              {/* <Link to='/signup'> */}
              <button
                type="button"
                onClick={this.handleShow}
                className="btn btn-block"
              >
                <p>SIGN UP</p>
              </button>
              {/* </Link> */}
            </div>
            <div id="login">
              <button type="button" className="btn btn-block">
                <p>LOGIN</p>
              </button>
            </div>
            <div id="sidebar-footer">
              <div className="footer">
                <p>Cookie</p>
                <p>|</p>
                <p>Privacy</p>
              </div>
              <div style={{ marginTop: "-15px", marginLeft: "5px" }}>
                <p style={{ fontSize: "12px" }}>Policy</p>
              </div>
            </div>
          </div>
        </nav>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    onChange={this.updateUser}
                    placeholder="username"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Control placeholder="password" type="password" />
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                this.props.loadUser(this.state.username);
                this.handleClose();
              }}
            >
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default connect(null, mapDispatchToProps)(SideBar);
