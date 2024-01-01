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
      <Disclosure className="bg-cream06 h-20">
        <div className="flex items-center">
          <IoArrowBackSharp className="h-6 w-6 text-pinkTone mt-1" />
          <div className="text-1xl text-pinkTone mt-1 mr-2">
            <Link to="/">Kembali ke Beranda</Link>
          </div>
        </div>
      </Disclosure>
      <div className="bg-pinkTone shadow">
        <div className="text-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl tracking-tight text-white">Akun</h1>
        </div>
      </div>

      <main className="flex">
        {/* Sidebar */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content my-ul">
              {/* Sidebar content here */}
              <li className="mt-5 text-1xl">
                <Link to="/profile">
                  <IoPencilSharp className="text-pinkTone" />
                  Profil Saya
                </Link>
              </li>
              <li className="mt-5 text-1xl">
                <Link to="/changepassword">
                  <IoSettingsOutline className="text-pinkTone" />
                  Ubah Password
                </Link>
              </li>
              <li className="mt-5 text-1xl">
                <Link to="/purchasehistory">
                  <IoCartOutline className="text-pinkTone" />
                  Riwayat Pembayaran
                </Link>
              </li>
              <li className="mt-5 text-1xl">
                <Link to="/logout">
                  <IoLogOutOutline className="text-pinkTone" />
                  Keluar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto">
          <div className="flex border rounded-lg items-center">
            <div className="container mx-auto mt-5">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                    className=" text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
