import React, { Component } from 'react'
import {FaRandom, FaArrowLeft, FaPlayCircle,FaArrowRight,FaRedoAlt,FaSortAmountDown,FaVolumeUp,FaLaptop} from 'react-icons/fa'
import { IconContext } from "react-icons";
import {FaHeart} from 'react-icons/fa'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    liked_Song: (songname) => {
      dispatch({
        type: "LIKED_SONG", 
        payload: songname
      })
      
    },
    
    unliked_Song: (songname) => {
      dispatch({
        type: "UNLIKED_SONG", 
        payload: songname
      })
      
    },
  }
}
class Player extends Component {
  render() {
    console.log(this.props.img)
    return (
    <>
      <div className="container-fluid play-section fixed-bottom">
        {this.props.selectedSong ? (
          <div id="songInfo">
          <img className='img-fluid songImage' src={this.props.selectedSong.img} alt=""/>
          <div id="song">
            <p id="songName">{this.props.selectedSong.track.title}</p>
            <p id="singer">{this.props.selectedSong.track.artist.name}</p>
            {/* <a><FaHeart style={{color: "white"}}/></a> */}
          </div>
          {this.props.likedSong ?  <a><FaHeart style={{color: "green"}} onClick={()=>this.props.unliked_Song(this.props.selectedSong.track.title)}/></a> : 
            <a><FaHeart style={{color: "white"}} onClick={()=>this.props.liked_Song(this.props.selectedSong.track.title)}/></a>}
         
          {/* <i className="fas fa-laptop"></i> */}
        </div>
        ) :(
          <div id="songInfo">
          <img className='img-fluid songImage' src='https://placehold.it/50x50' alt=""/>
          <div id="song">
            <p id="songName">Say So</p>
            <p id="singer">Doja Cat</p>
          </div>
          <i className="far fa-heart"></i>
          <i className="fas fa-laptop"></i>
        </div>
        )}
        <div className="musicIcons">
          <div className="mobileSongInfo">
            <p>Song For My Father</p>
          </div>
          <div id="icons"> 
            <IconContext.Provider value ={{className:'playerIcons'}}>
              <FaRandom/>
              <FaArrowLeft/>
              <FaPlayCircle/>
              <FaArrowRight/>
              <FaRedoAlt/>
            </IconContext.Provider>
          </div>
          <div className='d-flex time'>
            <p>1:07</p> 
            <div className="progress d-flex" id="trackLength">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>3:47</p> 
          </div>
        </div>
        <div id="volume" >
          <div className='sideIcons'>
            <FaSortAmountDown/>
            <FaLaptop/>
            <FaVolumeUp/>
          </div>
          <div className="progress" id="volumeLength">
 
            <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
 export default connect(mapStateToProps, mapDispatchToProps )(Player)
