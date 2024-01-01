/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toastNotify } from "../../libs/utils";
import { axiosInstance } from "../../libs/axios";

const ChapterEdit = ({ setIsOpen2, idChapter, setIsOpen, chapter }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const chapterIWant = chapter.filter((item) => item.id == idChapter);
    const chapterBefore = chapterIWant[0];
    formik.setFieldValue("name", chapterBefore.name);
    formik.setFieldValue("duration", chapterBefore.duration);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      duration: "",
    },
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.patch(
          `/api/v1/chapter/${idChapter}`,
          {
            name: values.name,
            duration: values.duration,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toastNotify({
          type: "success",
          message: "Berhasil memperbarui chapter",
        });
        return res.data;
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response?.data?.error || "Gagal memperbarui chapter",
        });
      } finally {
        setIsOpen(false);
        setLoading(false);
        setIsOpen2("1");
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

export default ChapterEdit;
