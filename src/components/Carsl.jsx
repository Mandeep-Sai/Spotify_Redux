import React from 'react'
import {Container} from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {Link} from 'react-router-dom'

const responsive = {
  desktop:{
    breakpoint :{max:3000, min:1024},
    items : 7
  },
  mobile:{
    breakpoint :{max:1024, min:464},
    items : 3
  }
}

class Carsl extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      songs:[],
      artistId:''
    }
  }
  componentDidMount=async()=>{
    console.log('hello')
    let name = this.props.name.toLowerCase();
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+name, {
      "method": "GET",
      "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "49a206362dmshb20519b822912b7p1dc792jsn37f9d0304fcc"
    }
  })
    let parsedJson = await response.json()
    let songs = parsedJson.data
    console.log(songs)
    let artistId = parsedJson.data[0].artist.id
    this.setState({songs,artistId})
  }
  componentDidUpdate = async(prevProps)=>{
    if(prevProps.name !== this.props.name){
      let name = this.props.name.toLowerCase();
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+name, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "49a206362dmshb20519b822912b7p1dc792jsn37f9d0304fcc"
      }
    })
      let parsedJson = await response.json()
      let songs = parsedJson.data

      this.setState({songs})
    }
  }
  render(){
    return(
      <Container fluid className='crsl mt-3 mb-3'>
        {this.props.for !== 'search' ? null : (
          <Link to={'/artists/'+this.state.artistId}>
          <p >Search Results for "{this.props.name}"</p>
          </Link>
        )}
        {this.props.for === 'artist' ? null : (
          <Link to={'/artists/'+this.state.artistId}>
          <p >{this.props.name}</p>
          </Link>
        )}
        <Carousel
         ssr={true} // means to render carousel on server-side.
        //  infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={2000}
         swipeable={false}
         draggable={false}
        //  showDots={true}
         responsive = {responsive}
         className ='carouselContent'
         >
          {this.state.songs.map(song =>{
            return(
            <div className='col'>
              <Link to={'/ShowAlbum/'+song.album.id}>
                <img src={song.album.cover} alt=""/>
                {this.props.for === 'artist' ? <p class="cardBody">{song.album.title}</p> : 
                  <p className="cardBody">{song.title}</p>
                }
              </Link>
            </div>
            )
          })}
        </Carousel>
      </Container>
    )
  }
}
export default Carsl