import { combineReducers } from "redux";
import authReducer from "./authReducers";
import courseReducers from "./courseReducers";

export default combineReducers({
  auth: authReducer,
  course: courseReducers,
});
