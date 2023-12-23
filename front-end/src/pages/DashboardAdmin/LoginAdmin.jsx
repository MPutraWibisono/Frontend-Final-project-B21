import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo4 from "../../assets/images/logo4.png";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email harus diisi"),
      password: Yup.string().required("Password harus diisi"),
    }),
    onSubmit: async (values) => {
      dispatch(login(values, setLoading, navigate));
    },
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const toogleShowPass = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPass(!showPass);
  };

  return (
    <div className=" flex flex-col lg:flex-row-reverse w-full min-h-screen mx-auto max-w-7xl lg:max-w-[96rem]">
      {/* Bagian Kiri */}
      <div className="bg-white w-full p-8 lg:p-16 flex items-center justify-center overflow-hidden">
        <div className="w-full sm:w-2/3 lg:w-2/3 text-black">
          <h1 className="font-bold text-[28px] text-darkGrayish lg:mb-12 text-center mb-6">
            Masuk
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <label className="form-control w-full relative mb-3">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.email &&
                    formik.touched.email &&
                    "text-red-500"
                  }`}
                >
                  Email
                </span>
              </div>
              <input
                type="text"
                placeholder="Email"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.email && formik.touched.email && "input-error"
                }`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </label>

            {/* PASSWORD */}
            <label className="form-control w-full relative mb-8">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "text-red-500"
                  }`}
                >
                  Password
                </span>
                <Link
                  to="/auth/forgot-password"
                  className="text-darkGrayish font-medium text-xs"
                >
                  Lupa Password
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className={`input input-bordered w-full h-10 ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "input-error"
                  }`}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {showPass ? (
                  <PiEye
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass}
                  />
                ) : (
                  <PiEyeSlash
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={toogleShowPass}
                  />
                )}
              </div>
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </label>

            {/* Login button */}
            <button
              className="btn border-0 bg-pinkTone hover:bg-pinkTone/80 text-slate-100 self-center w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Masuk"}
            </button>
          </form>
          <br />

          <p className="text-black items-center text-center mt-6">
            Belum punya akun?{" "}
            <Link to="/auth/register" className="text-darkGrayish font-bold">
              Daftar di sini
            </Link>
          </p>

          {/* div kosong buat tempat alert */}
          <div className="tempatAlert fixed bottom-6 lg:bottom-4 lg:left-[29%] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full lg:w-auto sm:bottom-2 "></div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="bg-paleOrange w-10/12  items-center justify-center hidden lg:flex">
        <Link to="/">
          <img
            src={logo4}
            alt="DemyU Course"
            className="mx-auto w-full"
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginAdmin;
