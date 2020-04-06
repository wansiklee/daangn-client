import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../lib/createRequestSaga";
import * as userAPI from "../../lib/api/user";
import { takeLatest } from "redux-saga/effects";

const DETAIL_USER = "profile/DETAIL_USER";
const DETAIL_USER_SUCCESS = "profile/DETAIL_USER_SUCCESS";
const DETAIL_USER_FAILURE = "profile/DETAIL_USER_FAILURE";
const UNLOAD_USER = "profile/UNLOAD_USER";

export const detailUser = createAction(DETAIL_USER, (id) => id);
export const unloadUser = createAction(UNLOAD_USER);

const detailUserSaga = createRequestSaga(DETAIL_USER, userAPI.getUser);
export function* profileSaga() {
  yield takeLatest(DETAIL_USER, detailUserSaga);
}

const initialState = {
  user: null,
  products: null,
  error: null,
};

const profile = handleActions(
  {
    [DETAIL_USER_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      user: data,
      products: data.products,
    }),
    [DETAIL_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_USER]: () => initialState,
  },
  initialState
);

export default profile;
