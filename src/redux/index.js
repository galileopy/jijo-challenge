import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducers from "./reducers";
import { rootEpic } from "./epics";
import { composeWithDevTools } from "redux-devtools-extension";


export const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});
  const epicMiddleware = createEpicMiddleware();
  const enhancers = composeEnhancers(applyMiddleware(epicMiddleware));
  const store = createStore(reducers, enhancers);
  epicMiddleware.run(rootEpic);
  return store;
};
