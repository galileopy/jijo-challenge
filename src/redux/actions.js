const create = (type) => (payload) => ({ type, payload });

export const PLAY_MUSIC = "FEED/FM/PLAY_MUSIC";
export const PlayMusic = create(PLAY_MUSIC);

export const STOP_MUSIC = "FEED/FM/STOP_MUSIC";
export const StopMusic = create(STOP_MUSIC);

export const SKIP_MUSIC = "FEED/FM/SKIP_MUSIC";
export const SkipMusic = create(SKIP_MUSIC);

export const CURRENT_SONG = "FEED/FM/CURRENT_SONG";
export const CurrentSong = create(CURRENT_SONG);
