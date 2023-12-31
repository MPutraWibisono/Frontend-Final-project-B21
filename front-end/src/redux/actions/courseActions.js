import axios from "axios";
import { setCourse } from "../reducers/courseReducers";
import { setCategory } from "../reducers/courseReducers";
import { setMaterial } from "../reducers/courseReducers";
import { setChapter } from "../reducers/courseReducers";
import { setSearch } from "../reducers/courseReducers";
import { setHistory } from "../reducers/courseReducers";

export const getCourse = (setErrors, errors) => async (dispatch) => {
  try {
    // const { token } = getState().auth;
    // if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/course?pageSize=20`
    );

    const data = response.data.courses;

    dispatch(setCourse(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getCategory = (setErrors, errors) => async (dispatch) => {
  try {
    // const { token } = getState().auth;
    // if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/category`
    );

    const data = response?.data?.categories;
    dispatch(setCategory(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getChapter = (setErrors, errors) => async (dispatch) => {
  try {
    // const { token } = getState().auth;
    // if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/chapter`
    );

    const data = response?.data?.chapters;
    dispatch(setChapter(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getMaterial = (setErrors, errors) => async (dispatch) => {
  try {
    // const { token } = getState().auth;
    // if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/material`
    );

    const data = response?.data?.videos;
    dispatch(setMaterial(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getHistory = (setErrors, errors) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/order/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    const data = response?.data?.orders;
    dispatch(setHistory(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getSearch = (result, setErrors, errors) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/course?search=${result}`
    );

    const data = response.data.courses;

    dispatch(setSearch(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};
