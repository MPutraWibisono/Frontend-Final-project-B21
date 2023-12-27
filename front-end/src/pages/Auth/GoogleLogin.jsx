import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogleAction } from "../../redux/actions/authActions";
import PropTypes from "prop-types";

function GoogleLogin({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (responseGoogle) => {
      await dispatch(
        registerLoginWithGoogleAction(responseGoogle.access_token, navigate)
      );
    },
    onError: (errorResponse) => {
      alert(errorResponse.error_description);
    },
  });

  return (
    <button
      className="bg-white border text-black fw-semibold w-100"
      onClick={() => loginWithGoogle()}
    >
      <span>
        <img src="/google.svg" style={{ width: "30px" }} alt="google_logo" />
      </span>{" "}
      {buttonText}
    </button>
  );
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};
export default GoogleLogin;
