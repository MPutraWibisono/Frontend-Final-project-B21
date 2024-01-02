/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState } from "react";
import { toastNotify } from "../../libs/utils";
import { axiosInstance } from "../../libs/axios";

const ChapterModals = ({ setIsOpen2, id, setIsOpen, setTambah }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      duration: "",
    },
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.post(
          "/api/v1/chapter",
          {
            name: values.name,
            duration: values.duration,
            courseId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toastNotify({
          type: "success",
          message: "Berhasil menambahkan chapter",
        });
        setIsOpen(false);
        setTambah("");
        setLoading(false);
        setIsOpen2("1");
        return res.data;
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response?.data?.error || "Gagal menambahkan chapter",
        });
      }
    },
  });

  return (
    <>
      <form
        className="w-full flex flex-col gap-2 my-6"
        onSubmit={formik.handleSubmit}
      >
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Nama Chapter</span>
          </div>
          <input
            type="text"
            placeholder="Nama Chapter"
            className="input input-bordered w-full"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Durasi</span>
          </div>
          <input
            type="number"
            placeholder="Durasi"
            className="input input-bordered w-full"
            name="duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
          />
        </label>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Simpan"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChapterModals;
