/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toastNotify } from "../../libs/utils";
import { axiosInstance } from "../../libs/axios";

const MaterialEdit = ({
  setIsOpen2,
  idMaterial,
  idChapter,
  material,
  setIsOpen,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const materialIWant = material.filter((item) => item.id == idMaterial);
    const materialBefore = materialIWant[0];
    formik.setFieldValue("videoUrl", materialBefore.videoUrl);
    formik.setFieldValue("name", materialBefore.name);
    formik.setFieldValue("description", materialBefore.description);
  }, []);

  const formik = useFormik({
    initialValues: {
      chapterId: "",
      videoUrl: "",
      name: "",
      description: "",
      title: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.patch(
          `/api/v1/material/${idMaterial}`,
          {
            chapterId: idChapter,
            videoUrl: values.videoUrl,
            name: values.name,
            description: values.description,
            title: "null",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toastNotify({
          type: "success",
          message: "Berhasil memperbarui material",
        });

        return res.data;
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response?.data?.error || "Gagal memperbarui material",
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
            <span className="font-medium">Link Video</span>
          </div>
          <input
            type="text"
            placeholder="Link Video Course"
            className="input input-bordered w-full"
            name="videoUrl"
            value={formik.values.videoUrl}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Nama Material</span>
          </div>
          <input
            type="text"
            placeholder="Nama Material"
            className="input input-bordered w-full"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Deskripsi</span>
          </div>
          <textarea
            type="text"
            placeholder="Deskripsi"
            className="textarea textarea-bordered"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
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

export default MaterialEdit;
