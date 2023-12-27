import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import logo4 from "../../../assets/images/logo4.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { reset } from "../../../redux/actions/authActions";
import { useSearchParams } from "react-router-dom";

const ForgotPass = () => {
  //useState untuk password
  const [searchParams] = useSearchParams();
  const tokenId = searchParams.get("token");
  const [passShow1, setPassShow1] = useState(false);
  const [passShow2, setPassShow2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      password1: "",
      password2: "",
    },
    validationSchema: Yup.object({
      password1: Yup.string().required("Password harus diisi"),
      password2: Yup.string().required("Password harus diisi"),
    }),
    onSubmit: async (values) => {
      dispatch(
        reset(values.password1, values.password2, setLoading, navigate, tokenId)
      );
    },
  });

  const toogleShowPass1 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPassShow1(!passShow1);
  };

  const toogleShowPass2 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPassShow2(!passShow2);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen mx-auto max-w-7xl lg:max-w-[96rem]">
      {/* Bagian Kiri */}
      <div className="bg-white w-full p-8 lg:p-16 flex items-center justify-center overflow-hidden">
        <div className="w-full lg:w-2/3 text-black">
          <h1 className="font-bold text-[28px] text-darkGrayish lg:mb-12 text-center mb-6">
            Reset Password
          </h1>

          <form onSubmit={formik.handleSubmit}>
            {/* Reset Password */}
            <label className="form-control w-full relative mb-3">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.password1 &&
                    formik.touched.password1 &&
                    "text-red-500"
                  }`}
                >
                  Password Baru
                </span>
              </div>
              <div className="relative">
                <input
                  type={passShow1 ? "text" : "password"}
                  placeholder="Masukkan Password Baru"
                  className={`input input-bordered w-full h-10 ${
                    formik.errors.password1 &&
                    formik.touched.password1 &&
                    "input-error"
                  }`}
                  name="password1"
                  value={formik.values.password1}
                  onChange={formik.handleChange}
                />
                {passShow1 ? (
                  <PiEye
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass1}
                  />
                ) : (
                  <PiEyeSlash
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass1}
                  />
                )}
              </div>
            </label>
            {/* KONFIRMASI PASSWORD */}
            <label className="form-control w-full relative mb-8">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.password2 &&
                    formik.touched.password2 &&
                    "text-red-500"
                  }`}
                >
                  Konfirmasi Password Baru
                </span>
              </div>
              <div className="relative">
                <input
                  type={passShow2 ? "text" : "password"}
                  placeholder="Konfirmasi Password Baru"
                  className={`input input-bordered w-full h-10 ${
                    formik.errors.password2 &&
                    formik.touched.password2 &&
                    "input-error"
                  }`}
                  name="password2"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                />
                {passShow2 ? (
                  <PiEye
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass2}
                  />
                ) : (
                  <PiEyeSlash
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass2}
                  />
                )}
              </div>
            </label>
            {/* Submit button */}
            <button
              className="text-white bg-pinkTone hover:bg-pinkTone/80 rounded-lg w-full p-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading.." : "Simpan"}
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className=" bg-paleOrange w-10/12 flex items-center justify-center hidden lg:flex">
        <Link to="/">
          <img src={logo4} alt="DemyU Course" className="mx-auto w-full" />
        </Link>
      </div>
    </div>
  );
};

export default ForgotPass;
