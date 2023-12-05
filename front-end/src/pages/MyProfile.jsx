import PropTypes from "prop-types";

function InputForm({ label, id, type, placeholder }) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

function MyProfile() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4">Profil Saya</h2>
      <form>
        <InputForm label="Nama" id="nama" type="text" placeholder="Nama" />
        <InputForm label="Email" id="email" type="email" placeholder="Email" />
        <InputForm
          label="Telepon"
          id="telepon"
          type="text"
          placeholder="Nomor Telepon"
        />
        <InputForm
          label="Negara"
          id="negara"
          type="text"
          placeholder="Masukan Negara tempat tinggal"
        />
        <InputForm
          label="Kota"
          id="kota"
          type="text"
          placeholder="Masukan Kota tempat tinggal"
        />
      </form>
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default MyProfile;
