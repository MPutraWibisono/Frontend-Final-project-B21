import axios from "axios";
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setAllUsers, setToken } from "../reducers/authReducers";

export const loginAdmin =
  (values, setLoading, navigate) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", values);

      if (response.data?.user?.role === "admin") {
        toastNotify({
          type: "success",
          message: response.data.message,
        });
        dispatch(setToken(response.data.token));
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

    navigate("/myclass");
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
};

export const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_URL}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));

      navigate("/myclass");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.message);
        return;
      }
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

export const changePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/update-password`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toastNotify({
        type: "success",
        message: response.data.message,
      });

      if (response.status !== 200) {
        throw new Error("Gagal mengubah password. Silakan coba lagi.");
      }

      dispatch({ type: "CHANGE_PASSWORD_SUCCESS" });
    } catch (error) {
      console.error("Error:", error.message);
      toastNotify({
        type: "error",
        message: error.response.data.message,
      });
      dispatch({ type: "CHANGE_PASSWORD_FAILURE" });
    }
  };

export const getUsers = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/all`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response?.data?.user;
    dispatch(setAllUsers(data));
  } catch (error) {
    console.error("Error:", error.message);
    toastNotify({
      type: "error",
      message: error.response.data.message,
    });
    dispatch({ type: "FAILURE" });
  }
};
