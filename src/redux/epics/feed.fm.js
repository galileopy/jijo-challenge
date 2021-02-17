import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, tap } from "rxjs/operators";

import { PLAY_MUSIC, STOP_MUSIC, SKIP_MUSIC } from "../actions";

import { player } from "../../services/feed.fm";

const playMusic = (action$, state$) =>
  action$.pipe(
    ofType(PLAY_MUSIC),
    tap(() => player.play()),
    ignoreElements()
  );

const stopMusic = (action$, state$) =>
  action$.pipe(
    ofType(STOP_MUSIC),
    tap(() => player.pause()),
    ignoreElements()
  );

const skipMusic = (action$, state$) =>
  action$.pipe(
    ofType(SKIP_MUSIC),
    tap(() => player.skip()),
    ignoreElements()
  );

export default combineEpics(playMusic, stopMusic, skipMusic);
