export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
}
