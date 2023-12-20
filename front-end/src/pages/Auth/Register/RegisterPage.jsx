/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PatternFormat } from "react-number-format";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { toastNotify } from "../../../libs/utils";
import logo4 from "../../../assets/images/logo4.png";
import phoneRegExp from "../../../libs/phoneReg";
import { axiosInstance } from "../../../libs/axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      konfirmasiPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama harus diisi").min(3, "Minimal 3 huruf"),
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email harus diisi"),
      phone: Yup.string()
        .required("Nomor Telepon harus diisi")
        .matches(phoneRegExp, "Nomor minimal 12 angka"),
      password: Yup.string()
        .required("Password harus diisi")
        .min(8, "Password minimal 8 karakter")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Harus terdapat huruf besar, huruf kecil, angka, dan karakter spesial"
        ),
      konfirmasiPassword: Yup.string()
        .required("Konfirmasi Password harus diisi")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Harus terdapat huruf besar, huruf kecil, angka, dan karakter spesial"
        )
        .oneOf([Yup.ref("password"), null], "Password tidak sama"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (values.phone.includes(" ")) {
          values.phone = values.phone.replace(/\s/g, "");
        }

        const [response, responseOTP] = await Promise.all([
          axiosInstance.post("/api/v1/auth/", {
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          }),
          axiosInstance.post("/api/v1/auth/otp", {
            email: values.email,
          }),
        ]);

        toastNotify({
          type: "success",
          message: response.data.message,
        });

        if (responseOTP.data.error === false) {
          toastNotify({
            type: "success",
            message: responseOTP.data.message,
          });
          setTimeout(() => {
            toastNotify({
              type: "info",
              message: "Halaman akan diarahkan ke halaman OTP dalam 3 detik",
            });
            navigate("/auth/login");
          }, 3000);
        }
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

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen mx-auto max-w-7xl lg:max-w-[96rem]">
      <div className="bg-white w-full p-8 lg:px-16 flex items-center justify-start overflow-hidden flex-col ">
        <div className="w-full sm:w-2/3 lg:w-2/3">
          <h1 className="font-bold text-[28px] text-darkGrayish text-center">
            Daftar
          </h1>
          <form
            className="w-full flex flex-col gap-1"
            onSubmit={formik.handleSubmit}
          >
            <label className="form-control w-full relative">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.name && formik.touched.name && "text-red-500"
                  }`}
                >
                  Nama
                </span>
              </div>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.name && formik.touched.name && "input-error"
                }`}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : formik.values.name && !formik.errors.name ? (
                <div className="text-green-500 absolute bottom-2 right-3">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
              ) : null}
            </label>

            <label className="form-control w-full relative">
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
                type="email"
                placeholder="johndoe@gmail.com"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.email && formik.touched.email && "input-error"
                }`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : formik.values.email && !formik.errors.email ? (
                <div className="text-green-500 absolute bottom-2 right-3">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
              ) : null}
            </label>

            <label className="form-control w-full relative">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.phone &&
                    formik.touched.phone &&
                    "text-red-500"
                  }`}
                >
                  Nomor Telepon
                </span>
              </div>
              <PatternFormat
                placeholder="0812 3456 7891"
                name="phone"
                format="#### #### ####"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.phone && formik.touched.phone && "input-error"
                }`}
                value={formik.values.phone}
                onChange={formik.handleChange}
                valueIsNumericString={true}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="text-red-500">{formik.errors.phone}</div>
              ) : formik.values.phone && !formik.errors.phone ? (
                <div className="text-green-500 absolute bottom-2 right-3">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
              ) : null}
            </label>

            <label className="form-control w-full relative">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "text-red-500"
                  }`}
                >
                  Buat Password
                </span>
              </div>
              <input
                type="password"
                placeholder="Masukkan Password"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.password &&
                  formik.touched.password &&
                  "input-error"
                }`}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : formik.values.password && !formik.errors.password ? (
                <div className="text-green-500 absolute bottom-2 right-3">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
              ) : null}
            </label>

            <label className="form-control w-full relative mb-4">
              <div className="label">
                <span
                  className={`lg:text-base text-base font-medium ${
                    formik.errors.konfirmasiPassword &&
                    formik.touched.konfirmasiPassword &&
                    "text-red-500"
                  }`}
                >
                  Konfirmasi Password
                </span>
              </div>
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className={`input input-bordered w-full h-10 ${
                  formik.errors.konfirmasiPassword &&
                  formik.touched.konfirmasiPassword &&
                  "input-error"
                }`}
                name="konfirmasiPassword"
                value={formik.values.konfirmasiPassword}
                onChange={formik.handleChange}
              />
              {formik.errors.konfirmasiPassword &&
              formik.touched.konfirmasiPassword ? (
                <div className="text-red-500">
                  {formik.errors.konfirmasiPassword}
                </div>
              ) : formik.values.konfirmasiPassword &&
                !formik.errors.konfirmasiPassword ? (
                <div className="text-green-500 absolute bottom-2 right-3">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn border-0 bg-pinkTone hover:bg-pinkTone/80 text-slate-100 self-center w-full"
            >
              {loading ? "Loading..." : "Daftar"}
            </button>
          </form>
          <p className="font-medium text-center w-full pt-3">
            Sudah punya akun?
            <span className="font-bold text-darkGrayish">
              <Link to="/auth/login"> Masuk di sini</Link>
            </span>
          </p>
        </div>
      </div>

      <div className=" bg-paleOrange w-10/12 items-center justify-center hidden lg:flex">
        <Link to="/">
          <img src={logo4} alt="DemyU Course" className="mx-auto w-full" />
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
