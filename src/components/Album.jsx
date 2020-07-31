import React, { Component } from 'react'
import {Container,Row,Spinner} from 'react-bootstrap'
import {FaHeart,FaEllipsisH,FaMusic} from 'react-icons/fa'
import{Link} from 'react-router-dom'
import '../Album.css'

export class Album extends Component {
  state ={
    album : [],
    loading : true
  }
  componentDidMount =async()=>{
    let id = this.props.match.params.id
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/"+id, {
      "method": "GET",
      "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "49a206362dmshb20519b822912b7p1dc792jsn37f9d0304fcc"
    }
  })
  let album = await response.json()
  console.log(album)
  this.setState({album,loading : false})
  }
  render() {
    return (
      <Container fluid id='content'>
        {this.state.loading ? 
          <Spinner animation="border"  variant="light" style={{position:"absolute",top:"50%",left:"50%"}}>
            <span className="sr-only">Loading...</span>
          </Spinner> : (
          <Row>
            <div className="col-12 col-sm-12 col-lg-4">
              <div id="albumInfo">
                <img src={this.state.album.cover_medium} alt=""/>
                <p>{this.state.album.title}</p>
                <p>{this.state.album.artist.name}</p>
                <button type="button" class="btn ">PLAY</button>
                <p>{this.state.album.fans} FOLLOWERS . {this.state.album.nb_tracks}</p>
                <div id='icons'>
                  <a><FaHeart/></a>
                  <a><FaEllipsisH/></a>
                </div>
              </div>
            </div>
            <div className="col-12  col-sm-12 col-lg-7">
              {this.state.album.tracks.data.map(track =>{
                return(
                  <div id="track">
                    <div id="trackName">
                      <a id='musicIcon'><FaMusic/></a>
                      <div>
                        <p onClick ={()=>this.props.func(track,this.state.album.cover_medium)}>{track.title}</p>
                        <Link  to={'/artists/'+track.artist.id}>
                        <p style={{opacity: "0.5"}}>{track.artist.name}</p>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p style={{color: "white", fontSize: "12px"}}>{track.duration} s</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Row>
        )}
      </Container>
    )
  }
}

export default Album
