import Alert from "../../pages/Profile/Alert";
import { axiosInstance } from "../../libs/axios";

// import { toastNotify } from "../../libs/utils";

export const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: profile,
});

export const getProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/api/v1/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setProfile(response.data.getProfile));
  } catch (error) {
    alert(error?.message);
  }
};

export const changeProfile =
  (kota, negara, picture, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.put(
        "/api/v1/auth/update-password",
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

      Alert({
        type: "success",
        message: "Berhasil Memperbarui",
      });

      dispatch(setProfile(response.data.getProfile));
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false);
    }
  };
