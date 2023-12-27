/* eslint-disable react/prop-types */

const CourseModal = (props) => {
  const { formik, loading, category, setImage } = props;

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
            <option value="" disabled>
              Pilih Level
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
              Pilih Type
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
              Pilih Kategori
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

export default CourseModal;
