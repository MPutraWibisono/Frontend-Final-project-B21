/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux/actions/profileActions";

export const NoAccessToken = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getMe(navigate, "/myclass", null));
  }, [dispatch, token]);
  return children;
};
export const NoAccessTokenAdmin = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getMe(navigate, "/admin/dashboard", null));
  }, [dispatch, token]);
  return children;
};
