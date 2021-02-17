export const fromCurrentSong = ({ station, audio_file }) => {
  const { artist, track, extra, release } = audio_file;
  console.log(station, audio_file);
  return {
    album: release.title,
    artist: artist.name,
    track: track.title,
    image: extra.background_image_url,
    station: station.name,
  };
};
