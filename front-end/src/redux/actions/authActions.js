
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setToken, setId, } from "../reducers/authReducers";

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
        localStorage.setItem("role", "admin");
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
  if (localStorage.getItem("role")) {
    localStorage.removeItem("role");
  }
};

export const reset =
  (passbaru, konfirpassbaru, setLoading, navigate, tokenId) => async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/api/v1/auth/insert-password",
        {
          newPassword: passbaru,
          confirmPassword: konfirpassbaru,
        },
        {
          params: {
            token: tokenId,
          },
        }
      );
      toastNotify({
        type: "success",
        message: response.data.message,
      });
      navigate("/auth/login");
    } catch (error) {
      toastNotify({
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };


