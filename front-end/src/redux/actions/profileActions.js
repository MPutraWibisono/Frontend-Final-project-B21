import axios from "axios";
import { logout } from "./authActions";
import { setUser, setProfile } from "../reducers/authReducers";
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { saveProfile } from "../../libs/localStorageUtils";

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
        `${import.meta.env.VITE_API_URL}/api/v1/profile/`,
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
          // console.log("Silakan Login Kembali");
          if (localStorage.getItem("role")) {
            localStorage.removeItem("role");
          }
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

export const getProfile = () => async (dispatch) => {
  // setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/api/v1/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // toastNotify({
    //   type: "success",
    //   message: response.data.message,
    // });

    dispatch(setProfile(response.data.getProfile));
  } catch (error) {
    toastNotify({
      type: "error",
      message: error.response.data.message,
    });
  } finally {
    // setLoading(false);
  }
};

export const changeProfile =
  (kota, negara, picture, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.put(
        "/api/v1/profile/",
        {
          city: kota,
          nationality: negara,
          profile_picture: picture,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      saveProfile(response.data.getProfile);
      toastNotify({
        type: "success",
        message: "Berhasil Memperbarui",
      });

      dispatch(setProfile(response.data.getProfile));
    } catch (error) {
      toastNotify({
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };
