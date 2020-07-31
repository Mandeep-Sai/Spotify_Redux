import React, { Component } from 'react'
import {FaSpotify,FaSearch} from 'react-icons/fa'
import {Container,Nav,Navbar,FormControl,Button,Form} from 'react-bootstrap'
import images1 from '../Data/images1.json'
import images2 from '../Data/images2.json'
import DefaultRow from './DefaultRow'
import Carsl from './Carsl'


export class Home extends Component {
  state ={
    queryText :'edsheeran'
  }
  query =(e)=>{
    let queryText = e.currentTarget.value
    this.setState({queryText})

  }
  render() {
    return (
      <div className="container-fluid" id='content'>
        <Navbar expand="lg" className='navbar'>
          <Navbar.Brand href="#home">
            <FaSpotify/><button type="button" className="btn btn-outline-success btnMobile">SIGN UP</button><button type="button" className="btn btn-outline-success btnMobile">LOGIN</button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">TRENDING</Nav.Link>
              <Nav.Link href="#link">PODCAST</Nav.Link>
              <Nav.Link href="#link">MOODS AND GENRES</Nav.Link>
              <Nav.Link href="#link">NEW RELEASES</Nav.Link>
              <Nav.Link href="#link">DISCOVER</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>

        <Container className = 'contentRows mt-5'>
          <DefaultRow name ='#THROWBACKTHURSDAY' images={images1} />
          <DefaultRow name ='Classifiche' images={images2} />
          <Carsl name ='Eminem' />
          <Carsl name = 'Sia'/>
          <Carsl name={this.state.queryText} />
        </Container>
      </div>
    )
  }
}

export default Home
