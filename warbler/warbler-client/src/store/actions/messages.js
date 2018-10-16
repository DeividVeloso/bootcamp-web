import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({ type: LOAD_MESSAGES, messages });

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => {
        console.log("RES", res);
        dispatch(loadMessages(res));
      })
      .catch(err => {
        console.log("ENTORU", err);
        return dispatch(addError(err.message));
      });
  };
};
