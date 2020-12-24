import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

// common  commonReducer
import { reducers,
  epics } from "../modules/user";

// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
// Adding global error handler
export const rootEpic = combineEpics(
  epics
);

export const rootReducer = combineReducers({
  user: reducers,
  // othersReducer
});
