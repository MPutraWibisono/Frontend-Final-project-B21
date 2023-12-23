import { combineReducers } from "redux";
import courseReducers from "./courseReducers";
import authReducers from "./authReducers";

export default combineReducers({
  auth: authReducers,
  course: courseReducers,
});
