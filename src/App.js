import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Artist.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import searchResults from "./components/searchResults";
import Playlist from "./components/Playlist";
import OwnPlaylist from "./components/OwnPlaylist";
import LyricsFloater from "./components/LyricsFloater";

class App extends React.Component {
  // state = {
  //   song: "",
  //   artist: "",
  //   img: "",
  // };  // selectedSong = (track, img) => {
  //   //  console.log(img)
  //   this.setState({
  //     song: track.title_short,
  //     artist: track.artist.name,
  //     img: img,
  //   });
  // };

  render() {
    return (
      <Router>
        <LyricsFloater />
        <SideBar />
        <Route path="/" exact component={Home} />
        <Route path="/artists/:id" component={Artist} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/ownplaylist/:name" component={OwnPlaylist} />
        <Route path="/showAlbum/:id" component={Album} />
        <Route path="/search/:text" component={searchResults} />
        <Player
        // song={this.state.song}
        // artist={this.state.artist}
        // img={this.state.img}
        />
      </Router>
    );
  }
}

export default App;
