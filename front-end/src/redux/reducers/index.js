import { combineReducers } from "redux";
import courseReducers from "./courseReducers";
import profileReducers from "./profileReducers";
import authReducers from "./authReducers";


export default combineReducers({
  auth: authReducers,
  course: courseReducers,
  profile: profileReducers,
});
