import { fromCurrentSong } from "./feed.fm";

const example = {
  audio_file: {
    id: "171434",
    duration_in_seconds: 271,
    codec: "aac",
    track: {
      id: "15393796",
      title: "Aguacate",
    },
    release: {
      id: "1618797",
      title: "It's About Time",
    },
    artist: {
      id: "1206212",
      name: "Eddie Roberts' West Coast Sounds",
    },
    url:
      "https://u9e9h7z5.map2.ssl.hwcdn.net/feedfm-audio/1543382011-75652.m4a",
    bitrate: 128,
    replaygain_track_gain: -7.55,
    extra: {
      artwork: "",
      image: "",
      background_image_url:
        "https://dgase5ckewowv.cloudfront.net/feedfm-ps/1501113863-70821.jpg",
      caption: "",
    },
  },
  station: {
    id: "458964",
    name: "Station One",
    pre_gain: 12,
  },
};
const expected = {
  album: "It's About Time",
  track: "Aguacate",
  artist: "Eddie Roberts' West Coast Sounds",
  image: "https://dgase5ckewowv.cloudfront.net/feedfm-ps/1501113863-70821.jpg",
  station: "Station One",
};

test("Can transform feed.fm object", () => {
  const result = fromCurrentSong(example);
  expect(result).toEqual(expected);
});
