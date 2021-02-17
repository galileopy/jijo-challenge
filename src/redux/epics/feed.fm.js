import { from } from "rxjs";
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, map, mergeMap, tap } from "rxjs/operators";

import {
  PlayMusic,
  StopMusic,
  SkipMusic,
  PLAY_MUSIC,
  STOP_MUSIC,
  SKIP_MUSIC,
} from "../actions";

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
