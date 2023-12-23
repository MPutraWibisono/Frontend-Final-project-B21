// import axios from "axios";
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setToken, setUser } from "../reducers/authReducers";
// import { setUser } from "../reducers/profileReducer";

export const login = (values, setLoading, navigate) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", values);

    toastNotify({
      type: "success",
      message: response.data.message,
    });

    dispatch(setToken(response.data.token));
    dispatch(setUser(response.data.user));

    navigate("/");
  } catch (error) {
    toastNotify({
      type: "error",
      message: error.response.data.message,
    });
  } finally {
    setLoading(false);
  }
};

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};
