import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import movieReducer from "./movieReducer";
import genresReducer from "./genresReducer";
import authReducer from "./authReducer";

export default combineReducers({
  movies: movieReducer,
  genres: genresReducer,
  auth: authReducer,
  form: formReducer
});
