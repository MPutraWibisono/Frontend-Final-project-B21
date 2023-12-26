import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo4 from "../../../assets/images/logo4.png";
// import { useDispatch } from "react-redux";
import { IoMdMail } from "react-icons/io";
import { toastNotify } from "../../../libs/utils";
import { axiosInstance } from "../../../libs/axios";

const EmailInput = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email harus diisi"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          "/api/v1/auth/forget-password",
          {
            email: values.email,
          }
        );

        toastNotify({
          type: "success",
          message: response.data.message,
        });
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response.data.message,
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen mx-auto max-w-7xl lg:max-w-[96rem]">
      {/* Bagian Kiri */}
      <div className="bg-white w-full p-8 lg:p-16 flex items-center justify-center overflow-hidden">
        <div className="w-full sm:w-2/3 lg:w-2/3 text-black">
          <h1 className="font-bold text-[28px] text-darkGrayish lg:mb-12 text-center mb-6">
            Password Recovery
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
              <div className="flex items-center join">
                <IoMdMail className="w-12 px-2 border-2 h-10 py-1 join-item text-darkGrayish" />
                <input
                  type="text"
                  placeholder="Masukkan Email"
                  className={`input input-bordered join-item w-full h-10 ${
                    formik.errors.email && formik.touched.email && "input-error"
                  }`}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </label>

            {/* Login button */}
            <button
              className="btn border-0 bg-pinkTone hover:bg-pinkTone/80 text-slate-100 self-center w-full mb-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
          <p className="text-center w-full pt-3">
            Sudah punya akun?
            <span className="font-bold text-darkGrayish">
              <Link to="/auth/login"> Masuk di sini</Link>
            </span>
          </p>
          <p className="text-black items-center text-center pt-3">
            Belum punya?{" "}
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

export default EmailInput;
