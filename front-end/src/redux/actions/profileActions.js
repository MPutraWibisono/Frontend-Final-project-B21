import axios from "axios";
import { setUser } from "../reducers/profileReducer";

export const getMe =
  (name, email, city, nationality, profile_picture) => async (dispatch) => {
    try {
      // ambil token
      const token = localStorage.getItem("token");

      if (!token) {
        // token tidak ada
        return;
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/profile/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            name,
            email,
            city,
            nationality,
            profile_picture,
          },
        }
      );

      const data = response.data;

      dispatch(setUser(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return;
      }
      alert(error?.message);
    }
  };
