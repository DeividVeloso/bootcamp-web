import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

const INITIAL_STATE = {
  messages: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: null
      };

    default:
      return state;
  }
}
