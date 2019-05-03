import _ from "lodash";
import { FETCH_GENRES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
