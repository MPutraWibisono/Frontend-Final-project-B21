/* eslint-disable react/prop-types */
import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";
import profileImg from "../../assets/images/profile.png";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../../redux/actions/authActions";
import { useSelector } from "react-redux";
import { getProfile, changeProfile } from "../../redux/actions/authActions";
import Loading from "../../components/Loading";

function InputForm({ label, id, type, placeholder, disable, value, onchange }) {
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
        disabled={disable}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [kota, setKota] = useState("");
  const [negara, setNegara] = useState("");
  const [picture, setPicture] = useState("testing");
  const { profile } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());

    // Redirect to id page
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(kota, negara, picture);
    // dispatch(changeProfile(kota, negara, picture, setLoading));
  };

  if (profile.length === 0) {
    return <Loading />;
  }
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
        <div className="flex pb-5 h-screen items-start justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-3/4 border border-pinkTone">
            <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
              <h1 className="text-2xl tracking-tight">Akun</h1>
            </div>
            <div className="flex">
              <ul className="col-span-1 p-4 w-1/2">
                <li
                  style={{ marginTop: "2rem" }}
                  className="text-1xl flex items-center justify-between  border-b"
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
                  className="text-1xl flex items-center justify-between  border-b"
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
                  className="text-1xl flex items-center justify-between  border-b"
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
                  className="text-1xl flex items-center justify-between border-b"
                >
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={onLogout}
                  >
                    <IoLogOutOutline className="text-pinkTone mr-2" />
                    <span>Keluar</span>
                  </div>
                </li>
                <p className="text-sm text-gray-500 mt-5 p-5 text-center">
                  Versi 1.0.0
                </p>
              </ul>

              {/* Content */}
              <div className="col-span-3 p-4 w-full mx-auto flex justify-center flex-col items-start">
                <div className="text-left mx-auto max-w-7xl">
                  <div className="text-center">
                    <img
                      src={profileImg}
                      className="w-20 mt-4 mx-auto block sm:w-10"
                      alt="profile"
                    />
                  </div>

                  <form onSubmit={handleSubmit}>
                    <InputForm
                      label="Nama"
                      id="nama"
                      type="text"
                      placeholder="Nama"
                      disable={true}
                      value={profile.name}
                    />
                    <InputForm
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      disable={true}
                      value={profile.user.email}
                    />
                    <InputForm
                      label="Telepon"
                      id="telepon"
                      type="text"
                      placeholder="Nomor Telepon"
                      disable={true}
                      value={profile.phone}
                    />
                    <InputForm
                      label="Negara"
                      id="negara"
                      type="text"
                      placeholder={profile.nationality}
                      disable={false}
                      onchange={(e) => setNegara(e.currentTarget.value)}
                    />
                    <InputForm
                      label="Kota"
                      id="kota"
                      type="text"
                      placeholder={profile.city}
                      disable={false}
                      onchange={(e) => setKota(e.currentTarget.value)}
                    />
                    <div className="text-center">
                      <button
                        type="submit"
                        // onClick={handleSimpanFilter}
                        className="text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10 p-2"
                      >
                        {loading ? "Loading..." : "Simpan"}
                      </button>
                    </div>
                  </form>
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
