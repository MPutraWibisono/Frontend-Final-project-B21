/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BiTrash } from "react-icons/bi";

const CourseEdit = ({ formik, loading, category, image, setImage }) => {
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
            <span className="font-medium">Gambar </span>
          </div>
          {image ? (
            <div className="h-full w-full relative group">
              <img
                src={image}
                alt="course"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full group-hover:block hidden"
              >
                <BiTrash className="h-7 w-7" />
              </button>
            </div>
          ) : (
            <input
              type="file"
              className="input input-bordered w-full"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          )}
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
