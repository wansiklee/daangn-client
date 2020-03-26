import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import global from "./global";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import upload, { uploadSaga } from "./upload";

const rootReducer = combineReducers({
  global,
  auth,
  user,
  loading,
  upload
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), uploadSaga()]);
}

export default rootReducer;
