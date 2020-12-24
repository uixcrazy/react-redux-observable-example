import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./root";

// scheduleCourt
const epicMiddleware = createEpicMiddleware();
const logger = createLogger({ collapsed: true });

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([epicMiddleware, logger]));

epicMiddleware.run(rootEpic);

export default store;
