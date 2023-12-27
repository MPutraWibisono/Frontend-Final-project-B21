/* eslint-disable react/prop-types */
const MaterialModals = ({ category, setIsOpen }) => {
  return (
    <>
      <form className="w-full flex flex-col gap-2 my-6">
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Nama Kelas</span>
          </div>
          <input
            type="text"
            placeholder="Nama Kelas"
            className="input input-bordered w-full"
            name="namaKelas"
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Kategori</span>
          </div>
          <select className="input input-bordered w-full" name="kategori">
            {category.map((cat, index) => (
              <option value={cat.name} key={index}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Tipe Kelas</span>
          </div>
          <select className="input input-bordered w-full" name="tipeKelas">
            <option value="Gratis">Gratis</option>
            <option value="Premium">Premium</option>
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Level</span>
          </div>
          <select className="input input-bordered w-full" name="level">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Harga</span>
          </div>
          <input
            type="number"
            placeholder="Harga"
            className="input input-bordered w-full"
            name="harga"
          />
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Materi</span>
          </div>
          <textarea
            type="number"
            placeholder="Materi"
            className="textarea textarea-bordered"
            name="materi"
          ></textarea>
        </label>

        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Link Video</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
      </form>

      <div className="mt-4">
        <button
          type="button"
          className="btn btn-primary w-full"
          onClick={() => {
            alert("hello");
            setIsOpen(false);
          }}
        >
          Simpan
        </button>
      </div>
    </>
  );
};

export default MaterialModals;
