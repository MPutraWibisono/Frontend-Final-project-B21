/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { login } from "../../../redux/actions/authActions";
// import { axiosInstance } from "../../libs/axios";
import { toastNotify } from "../../libs/utils";

const CourseModal = ({ category, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  //   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      modul: "",
      duration: "",
      description: "",
      author: "",
      group_url: "",
      level: "",
      type: "",
      category_id: "",
      image: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        console.log(`name: ${values.name},
          price: ${values.price},
          modul: ${values.modul},
          duration: ${values.duration},
          description: ${values.description},
          author: ${values.author},
          group_url: ${values.group_url},
          level: ${values.level},
          type: ${values.type},
          category_id: ${values.category_id},
          image: ${values.image}`);
        // const response = await axiosInstance.post("/api/v1/course/create", {
        //   name: values.name,
        //   price: values.price,
        //   modul: values.modul,
        //   duration: values.duration,
        //   description: values.description,
        //   author: values.author,
        //   group_url: values.group_url,
        //   level: values.level,
        //   type: values.type,
        //   category_id: values.category_id,
        //   image: values.image,
        // });

        toastNotify({
          type: "success",
          message: "response.data.message",
        });
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response.data.message,
        });
      } finally {
        setLoading(false);
        setIsOpen(false);
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
            <span className="font-medium">Nama Kelas</span>
          </div>
          <input
            type="text"
            placeholder="Nama Kelas"
            className="input input-bordered w-full"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Harga</span>
          </div>
          <input
            type="number"
            placeholder="Harga"
            className="input input-bordered w-full"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Modul</span>
          </div>
          <input
            type="number"
            placeholder="Modul"
            className="input input-bordered w-full"
            name="modul"
            value={formik.values.modul}
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

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Nama Author</span>
          </div>
          <input
            type="text"
            placeholder="Nama Author"
            className="input input-bordered w-full"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Group URL</span>
          </div>
          <input
            type="text"
            placeholder="Group URL"
            className="input input-bordered w-full"
            name="group_url"
            value={formik.values.group_url}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Level</span>
          </div>
          <select
            className="input input-bordered w-full"
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
          >
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCE">Advance</option>
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Tipe Kelas</span>
          </div>
          <select
            className="input input-bordered w-full"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <option value="FREE">Gratis</option>
            <option value="PREMIUM">Premium</option>
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Kategori</span>
          </div>
          <select
            className="input input-bordered w-full"
            name="category_id"
            value={formik.values.category_id}
            onChange={formik.handleChange}
          >
            {category.map((cat, index) => (
              <option value={cat.id} key={index}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Link Gambar</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
        </label>
      </form>

      <div className="mt-4">
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Loading..." : "Simpan"}
        </button>
      </div>
    </>
  );
};

export default CourseModal;
