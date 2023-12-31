import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import thunk from "redux-thunk";
import historyReducer from "./reducers/courseReducers";

//Create the store or temporary state database
export default configureStore({
  reducer: rootReducers,
  history: historyReducer,
  devTools: import.meta.env.VITE_MODE !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
