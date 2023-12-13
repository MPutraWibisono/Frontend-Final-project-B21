import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";
import profile from "../../assets/images/profile.png";

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

const Account = () => {
  return (
    <>
      {/* Header */}
      <Disclosure className="bg-paleOrange h-20">
        <div className="flex items-center w-full">
          <IoArrowBackSharp className="h-6 w-6 text-pinkTone mt-1" />
          <div className="text-1xl text-pinkTone mt-1 ml-2">
            <Link to="/">Kembali ke Beranda</Link>
          </div>
        </div>
      </Disclosure>

      {/* Main Container */}
      <div className="flex justify-center items-center h-screen">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-3/4 border border-pinkTone">
          <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
            <h1 className="text-2xl tracking-tight">Akun</h1>
          </div>
          <div className="flex">
            <ul className="col-span-1 p-4">
              {/* Konten Sidebar */}
              <li
                style={{ marginTop: "2rem" }}
                className="text-1xl flex items-center justify-between"
              >
                <Link to="/profile">
                  <div className="flex items-center">
                    <IoPencilSharp className="text-pinkTone mr-2" />
                    <span>Profil Saya</span>
                  </div>
                </Link>
              </li>
              <li
                style={{ marginTop: "2rem" }}
                className="text-1xl flex items-center justify-between"
              >
                <Link to="/changepassword">
                  <div className="flex items-center">
                    <IoSettingsOutline className="text-pinkTone mr-2" />
                    <span>Ubah Password</span>
                  </div>
                </Link>
              </li>
              <li
                style={{ marginTop: "2rem" }}
                className="text-1xl flex items-center justify-between"
              >
                <Link to="/purchasehistory">
                  <div className="flex items-center">
                    <IoCartOutline className="text-pinkTone mr-2" />
                    <span>Riwayat Pembayaran</span>
                  </div>
                </Link>
              </li>
              <li
                style={{ marginTop: "2rem" }}
                className="text-1xl flex items-center justify-between"
              >
                <Link to="/logout">
                  <div className="flex items-center">
                    <IoLogOutOutline className="text-pinkTone mr-2" />
                    <span>Keluar</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="col-span-3 p-4 flex justify-center flex-col items-start">
            <div className="text-left mx-auto max-w-7xl">
              <div className="text-center">
                <img
                  src={profile}
                  className="w-20 mx-auto block"
                  alt="profile"
                />
              </div>

              <form>
                <InputForm
                  label="Nama"
                  id="nama"
                  type="text"
                  placeholder="Nama"
                />
                <InputForm
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
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

              <div className="text-center">
                <button
                  // onClick={handleDeleteFilter}
                  className="text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                >
                  Simpan Profil Saya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Account;
