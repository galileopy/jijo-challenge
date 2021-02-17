import Feed from "feed-media-audio-player";
import { CurrentSong } from "../redux/actions";
import { Resource } from "ghost-stories/dist/unions/Resource";

const PLAY_STARTED = "play-started";

export const player = new Feed.Player("demo", "demo");

export const subscribe = (store) => {
  player.on("all", function (event) {
    console.log(
      "player triggered event '" + event + "' with arguments:",
      Array.prototype.splice.call(arguments, 1)
    );
  });

  player.on(PLAY_STARTED, function (event) {
    store.dispatch(CurrentSong(Resource.Data(event)));
  });
};
