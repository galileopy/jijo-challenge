import { combineEpics } from "redux-observable";
import feedFM from "./feed.fm";

export const rootEpic = combineEpics(feedFM);
