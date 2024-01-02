import axios from "axios";
import { logout } from "./authActions";
import { setUser } from "../reducers/profileReducers";
import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { saveProfile } from "../../libs/localStorageUtils";

export const getMe =
  (navigate, navigatePathSucces, navigateError) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (token == null) {
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
          if (navigateError) navigate(navigateError);
          return;
        }
        return;
      }
      if (navigateError) navigate(navigateError);
    }
  };

export const changeProfile =
  (kota, negara, picture, setLoading) => async () => {
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

      // dispatch(setProfile(response.data.getProfile));
    } catch (error) {
      toastNotify({
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };
