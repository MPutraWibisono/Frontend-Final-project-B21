import { combineReducers } from "redux";
import courseReducers from "./courseReducers";
import authReducers from "./authReducer";

export default combineReducers({
  auth: authReducers,
  course: courseReducers,
});
