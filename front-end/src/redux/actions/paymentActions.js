import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";
import { setOrder, setPay } from "../reducers/paymentReducers";

export const getCheckOrder = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosInstance.get("/api/v1/order/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // toastNotify({
    //   type: "success",
    //   message: response.data.message,
    // });
    dispatch(setOrder(response?.data?.orders));
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

export const getOrder =
  (setLoading, courseId, navigate, setIsShowing) => async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const response = await axiosInstance.post(
        "/api/v1/order/create",
        {
          courseId: courseId,
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
      navigate(`/payment/?courseId=${courseId}`);
    } catch (error) {
      //   toastNotify({
      //     type: "error",
      //     message: error.response.data.message,
      //   });
      navigate(`/payment/?courseId=${courseId}`);
      setIsShowing(false);
    } finally {
      setLoading(false);
      setIsShowing(false);
    }
  };

export const getPayment = (setLoading, navigate) => async () => {
  setLoading(true);
  try {
    const token = localStorage.getItem("token");

    const response = await axiosInstance.get("/api/v1/payment", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toastNotify({
      type: "success",
      message: response.data.message,
    });

    // Load Midtrans script dynamically
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    if (!document.querySelector(`script[src="${midtransScriptUrl}"]`)) {
      let scriptTag = document.createElement("script");
      scriptTag.src = midtransScriptUrl;
      scriptTag.setAttribute(
        "data-client-key",
        response.data.midtrans_clientKey
      );

      scriptTag.onload = () => {
        // After the script is loaded, trigger payment
        window.snap.pay(response.data.midtrans_token);
      };

      document.body.appendChild(scriptTag);
    } else {
      // If the script is already loaded, trigger payment directly
      window.snap.pay(response.data.midtrans_token);
    }
  } catch (error) {
    toastNotify({
      type: "error",
      message: error.response.data.message,
    });
  } finally {
    setLoading(false);
    // localStorage.setItem('ID', id)
    // Set loading to false regardless of success or failure
    // Consider moving navigate outside of the finally block
  }
};
