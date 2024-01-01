/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux/actions/profileActions";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getMe(navigate, null, "/"));
  }, [dispatch, token]);
  return children;
};

export const ProtectedAdmin = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getMe(navigate, null, "/admin/login"));
  }, [dispatch, token]);
  return children;
};
