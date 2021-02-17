import { mergeRight, mergeDeepRight } from "ramda";
import { CURRENT_SONG, STOP_MUSIC, PLAY_MUSIC } from "../actions";
import { fromCurrentSong } from "../mappings/feed.fm";
const initialState = {
  current: {
    artist: "Please Press Play",
    album: "No Album",
    track: "No Track",
    image: "",
    station: "No Station",
  },
  playing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return mergeRight(state, {
        current: action.payload
          .map(fromCurrentSong)
          .getDataOr(initialState.current),
      });
    case STOP_MUSIC:
      return mergeDeepRight(state, { playing: false });
    case PLAY_MUSIC:
      return mergeDeepRight(state, { playing: true });
    default:
      return state;
  }
};

export default reducer;
