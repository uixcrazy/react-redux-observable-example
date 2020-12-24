import { interval, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import {
  takeUntil, mergeMap, catchError, map,
} from "rxjs/operators";
// import { combineEpics, ofType } from "redux-observable";
import { ofType, ActionsObservable, StateObservable } from "redux-observable";
import {
  ACTION_TYPES,
  fetchUserSuccess,
  fetchUserFailure,
} from "./actions";


const fetchUserEpic = (action$) => action$.pipe(
  ofType(ACTION_TYPES.FETCH_USER),
  mergeMap(action =>
    ajax.getJSON("https://jsonplaceholder.typicode.com/users/10").pipe(
      map(response => fetchUserSuccess(response)),
      takeUntil(action$.pipe(
        ofType(ACTION_TYPES.FETCH_USER_CANCELLED)
      )),
      catchError(error => of({
        type: ACTION_TYPES.FETCH_USER_FAILURE,
        payload: error.xhr.response,
        error: true
      }))
    ),
  )
);

export default fetchUserEpic;
