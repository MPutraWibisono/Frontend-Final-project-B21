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
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Alert from "../../pages/Profile/Alert";
import defaultProfileImg from "../../assets/images/profile.png";

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

const Sidebar = () => {
  return (
    <ul className="col-span-1 p-4 w-full sm:w-1/2">
      {/* Konten Sidebar */}
      <li
        style={{ marginTop: "2rem" }}
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
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
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
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
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
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
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between border-b"
      >
        <Link to="/">
          <div className="flex items-center ">
            <IoLogOutOutline className="text-pinkTone mr-2" />
            <span>Keluar</span>
          </div>
        </Link>
      </li>
      <p className="text-xs sm:text-sm text-gray-500 mt-5 p-5 text-center">
        Versi 1.0.0
      </p>
    </ul>
  );
};

const MyProfile = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [currentProfileImage, setCurrentProfileImage] =
    useState(defaultProfileImg);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getMe(name, email, city, nationality, profile_picture));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const namaValue = document.getElementById("nama").value;
    const emailValue = document.getElementById("email").value;
    const teleponValue = document.getElementById("telepon").value;
    const negaraValue = document.getElementById("negara").value;
    const kotaValue = document.getElementById("kota").value;

    if (
      !namaValue ||
      !emailValue ||
      !teleponValue ||
      !negaraValue ||
      !kotaValue
    ) {
      alert("Harap isi semua kolom");
      return;
    }

    if (profileImage) {
      console.log("Selected profile image:", profileImage);
    }

    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="pt-20">
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
        <div className="sm:flex pb-5 items-start justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-full sm:w-3/4 border border-pinkTone">
            <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
              <h1 className="text-2xl tracking-tight">Akun</h1>
            </div>
            <div className="sm:flex">
              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <div className="col-span-3 p-4 w-full mx-auto flex justify-center flex-col items-start">
                <div className="text-left mx-auto max-w-7xl p-4 sm:p-0">
                  <div className="text-center">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      <div className="rounded-full overflow-hidden  border-gray-300"></div>
                      <img
                        src={currentProfileImage}
                        className="w-20 h-20 mx-auto block sm:w-10"
                        alt="profile"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        id="profileImage"
                        className="hidden"
                        onChange={(e) => {
                          setProfileImage(e.target.files[0]);
                          setCurrentProfileImage(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }}
                      />
                      <div className="mt-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
                        {/* <IoPencilSharp className="text-pinkTone mr-2 inline" /> */}
                      </div>
                    </label>
                  </div>

                  <form className="rounded-lg" onSubmit={handleSubmit}>
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
                    <div className="text-center">
                      <button className="sm:btn-sm md:btn-md lg:btn-sm text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10">
                        Simpan Profil Saya
                      </button>
                    </div>
                  </form>
                  {showSuccessAlert && (
                    <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 mx-auto">
                      <Alert
                        type="success"
                        message="Profil berhasil diperbarui!"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
    </>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default MyProfile;
