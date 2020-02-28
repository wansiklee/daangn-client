import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import global from "./global";
import auth, { authSaga } from "./auth";
import loading from "./loading";

const rootReducer = combineReducers({
  global,
  auth,
  loading
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
