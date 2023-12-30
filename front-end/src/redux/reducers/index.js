import { combineReducers } from "redux";
import courseReducers from "./courseReducers";
import authReducers from "./authReducers";
import paymentReducers from "./paymentReducers";
import notifReducers from "./notifReducers";

export default combineReducers({
  auth: authReducers,
  course: courseReducers,
  payment: paymentReducers,
  notif: notifReducers,
});
