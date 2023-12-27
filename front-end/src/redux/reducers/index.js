import { combineReducers } from "redux";
import authReducer from "./authReducers";
import courseReducers from "./courseReducers";
import profileReducers from "./profileReducers";

export default combineReducers({
  auth: authReducer,
  course: courseReducers,
  profile: profileReducers,
});
