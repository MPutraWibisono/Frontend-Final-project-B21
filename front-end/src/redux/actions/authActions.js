import axios from "axios";
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setToken, setId, setUser } from "../reducers/authReducers";

export const loginAdmin =
  (values, setLoading, navigate) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", values);

      if (response.data.user.role === "admin") {
        toastNotify({
          type: "success",
          message: response.data.message,
        });
        dispatch(setToken(response.data.token));
        dispatch(setId(response.data.user.id));
        navigate("/admin/dashboard");
      } else {
        toastNotify({
          type: "error",
          message: "Anda bukan Admin",
        });
      }
    } catch (error) {
      toastNotify({
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

export const login = (values, setLoading, navigate) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", values);

    toastNotify({
      type: "success",
      message: response.data.message,
    });

    dispatch(setToken(response.data.token));
    dispatch(setId(response.data.user.id));

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
  dispatch(setId(null));
};

export const getMe =
  (navigate, navigatePathSucces, navigateError) =>
  async (dispatch, getState) => {
    try {
      const { token, id } = getState().auth;

      if (token == null || id == null) {
        dispatch(setUser(null));
        throw new Error(); // Custom error
      }

      if (navigatePathSucces) navigate(navigatePathSucces);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.getProfile;
      dispatch(setUser(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout());
          if (navigateError) navigate(navigateError);
          return;
        } else if (error.response.status === 403) {
          dispatch(logout());
          alert("Silakan Login Dahulu");
          if (navigateError) navigate(navigateError);
          return;
        }

        // alert(error?.response?.data?.message);
        return;
      }
      // alert(error?.response?.data?.message);
      if (navigateError) navigate(navigateError);
    }
  };
