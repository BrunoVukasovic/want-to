import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = msg => dispatch => {
  const id = uuid.v4(); // radnom long string
  dispatch({
    type: SET_ALERT,
    payload: { msg, id }
  });
};
