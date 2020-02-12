// actions type
const USER = "user/USER";

// action creators
export const getUser = isLoggedin => ({ type: USER });

// initial state
const initialState = {
  isLoggedin: false
};

// reducer

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        isLoggedin: true
      };
    default:
      return state;
  }
}
