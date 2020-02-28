import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions type;
const SET_SCREEN_COVER = "auth/SET_SCREEN_COVER";
const SHOW_MODAL = "auth/SHOW_MODAL";
const CHANGE_MODAL_MODE = "auth/CHANGE_MODAL_MODE";
const CLOSE_MODAL = "auth/CLOSE_MODAL";

// action creators
export const setScreenCover = createAction(SET_SCREEN_COVER);
export const showModal = createAction(SHOW_MODAL);
export const changeModalMode = createAction(CHANGE_MODAL_MODE);
export const closeModal = createAction(CLOSE_MODAL);

// initial state
const initialState = {
  cover: false,
  modal: {
    visible: false,
    mode: "login"
  }
};

// reducer
export default handleActions(
  {
    [SET_SCREEN_COVER]: (state, action) => ({
      ...state,
      cover: action.payload
    }),
    [SHOW_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.cover = true;
        draft.modal.mode = action.payload;
        draft.modal.visible = true;
      }),
    [CHANGE_MODAL_MODE]: (state, action) =>
      produce(state, draft => {
        draft.modal.mode = action.payload;
      }),
    [CLOSE_MODAL]: state =>
      produce(state, draft => {
        draft.modal.visible = false;
        draft.cover = false;
      })
  },
  initialState
);
