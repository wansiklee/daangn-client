import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

const SIGNUP = "auth/SIGNUP";
const SIGNUP_SUCCESS = "auth/SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "auth/SIGNUP_FAILURE";

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password
}));

export const signup = createAction(
  SIGNUP,
  ({ email, username, password, repeatPassword }) => ({
    email,
    username,
    password,
    repeatPassword
  })
);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signupSaga);
}

const initialState = {
  login: {
    email: "",
    password: ""
  },
  signup: {
    email: "",
    username: "",
    password: "",
    repeatPassword: ""
  },
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      authError: null,
      auth: action.payload
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      authError: action.payload
    }),
    [SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      authError: null,
      auth: action.payload
    }),
    [SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      authError: action.payload
    })
  },
  initialState
);

export default auth;
