/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CourseEdit = ({ id, formik, loading, category, course, setImage }) => {
  const [courseBefore, setCourseBefore] = useState([]);

  useEffect(() => {
    const courses = course.filter((item) => item.id == id);
    setCourseBefore(courses[0]);
  }, []);

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
            placeholder={courseBefore.name}
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
            placeholder={courseBefore.price}
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
            placeholder={courseBefore.modul}
            className="input input-bordered w-full"
            name="modul"
            value={formik.values.modul}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Rating</span>
          </div>
          <input
            type="text"
            placeholder={courseBefore.rating}
            className="input input-bordered w-full"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Target kursus</span>
          </div>
          <input
            type="text"
            placeholder={courseBefore.target}
            className="input input-bordered w-full"
            name="target"
            value={formik.values.target}
            onChange={formik.handleChange}
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Deskripsi</span>
          </div>
          <textarea
            type="text"
            placeholder={courseBefore.description}
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
            placeholder={courseBefore.author}
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
            placeholder={courseBefore.groupUrl}
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
            <option value="" disabled>
              {courseBefore.level}
            </option>
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
            <option value="" disabled>
              {courseBefore.type}
            </option>
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
            <option value="" disabled>
              {courseBefore?.category?.name}
            </option>
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
            type="file"
            className="input input-bordered w-full pt-2"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
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

export default CourseEdit;
