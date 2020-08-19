export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    case "LIKED_SONG":
      return {
        ...state,
        likedSong: true,
        listOfLikedSongs: state.listOfLikedSongs.concat(action.payload),
      };
    case "UNLIKED_SONG":
      const songToRemove = state.listOfLikedSongs.findIndex(
        (name) => name === action.payload
      );
      return {
        ...state,
        likedSong: false,
        listOfLikedSongs: [
          ...state.listOfLikedSongs.slice(0, songToRemove),
          ...state.listOfLikedSongs.slice(songToRemove + 1),
        ],
      };
    case "LOAD_USER":
      return {
        ...state,
        username: action.payload,
      };
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists.concat(action.payload)],
      };
    default:
      return state;
  }
}
