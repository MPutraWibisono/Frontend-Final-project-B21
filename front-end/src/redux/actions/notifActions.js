import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setNotif } from "../reducers/notifReducers";

export const getNotif = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosInstance.get("/api/v1/notification", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // toastNotify({
    //   type: "success",
    //   message: response.data.message,
    // });
    dispatch(setNotif(response?.data?.notifications));
    // navigate(`/payment/?courseId=${courseId}`);
  } catch (error) {
    toastNotify({
      type: "error",
      message: error.response.data.message,
    });
    // navigate(`/payment/?courseId=${courseId}`);
    // setIsShowing(false);
  } finally {
    // setLoading(false);
    // setIsShowing(false);
  }
};
