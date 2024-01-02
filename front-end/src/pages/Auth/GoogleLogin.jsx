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
    <div className="w-full flex justify-center my-3">
      <button
        className="bg-white border rounded-lg text-black fw-semibold w-100 flex justify-center items-center p-3 gap-2"
        onClick={() => loginWithGoogle()}
      >
        <span>
          <img src="/google.svg" style={{ width: "30px" }} alt="google_logo" />
        </span>{" "}
        {buttonText}
      </button>
    </div>
  );
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};
export default GoogleLogin;
