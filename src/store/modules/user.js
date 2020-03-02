import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/auth";

const SET_USER = "user/SET_USER";
const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";

export const setUser = createAction(SET_USER, user => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}

const initialState = {
  user: null,
  userError: null
};

const user = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      user: action.payload
    }),
    [CHECK_SUCCESS]: (state, action) => ({
      user: action.payload,
      userError: null
    }),
    [CHECK_FAILURE]: (state, action) => ({
      user: null,
      userError: action.payload
    })
  },
  initialState
);

export default user;
