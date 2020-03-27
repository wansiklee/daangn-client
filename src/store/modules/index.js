import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import global from "./global";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import upload, { uploadSaga } from "./upload";
import product, { productSaga } from "./product";
import products, { productsSaga } from "./products";

const rootReducer = combineReducers({
  global,
  auth,
  user,
  loading,
  upload,
  product,
  products
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    uploadSaga(),
    productSaga(),
    productsSaga()
  ]);
}

export default rootReducer;
