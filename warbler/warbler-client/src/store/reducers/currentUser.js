import { SET_CURRENT_USER } from "../actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Boolean(Object.keys(action.user).length > 0),
        user: action.user
      };

    default:
      return state;
  }
};
