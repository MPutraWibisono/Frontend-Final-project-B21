/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import {
  IoPencilSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Alert from "../../pages/Profile/Alert";
import defaultProfileImg from "../../assets/images/profile.png";
import { changeProfile } from "../../redux/actions/profileActions";
import Loading from "../../components/Loading";
import { logout } from "../../redux/actions/authActions";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function InputForm({ label, id, type, placeholder, disable, value, onChange }) {
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
        onChange={onChange}
      />
    </div>
  );
}

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());

    // Redirect to home page
    navigate("/");
  };

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
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
      >
        <div className="flex items-center cursor-pointer" onClick={onLogout}>
          <IoLogOutOutline className="text-pinkTone mr-2" />
          <span>Keluar</span>
        </div>
      </li>
      <p className="text-xs sm:text-sm text-gray-500 mt-5 p-5 text-center">
        Versi 1.0.0
      </p>
    </ul>
  );
};

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [kota, setKota] = useState("");
  const [negara, setNegara] = useState("");
  const [picture, setPicture] = useState("testing");
  const { user } = useSelector((state) => state.profile);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [currentProfileImage, setCurrentProfileImage] = useState(
    user.profile_picture || defaultProfileImg
  );

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set currentProfileImage atau state lainnya dengan nilai dari profil
    // Misalnya, setCurrentProfileImage(getProfile().profile_picture);
  }, [dispatch]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(kota, negara, picture);
    await dispatch(
      changeProfile(kota, negara, picture, setLoading, setPicture)
    );

    // set currentProfileImage setelah profil diubah
    setCurrentProfileImage(
      profileImage ? URL.createObjectURL(profileImage) : currentProfileImage
    );

    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };
  if (profileImage) {
    console.log("Selected profile image:", profileImage);
  }

  if (user.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className="pt-20">
        {/* Header */}
        <div className="md:px-[100px] px-5 py-16 shadow-md bg-paleOrange">
          {/* LINK KEMBALI */}
          <Link
            to="/myclass"
            className="flex gap-5 lg:ml-20 relative top-[-40px]"
          >
            <ArrowLeftIcon className="w-5 font-extrabold " />
            <h1 className="font-bold">Kembali ke Beranda</h1>
          </Link>
        </div>

        {/* Main Container */}
        <div className="sm:flex pb-5 items-start justify-center relative top-[-65px]">
          <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col w-full sm:w-3/4 shadow-xl">
            <div className="bg-darkGrayish text-white p-5 flex items-center justify-center rounded-t-lg">
              <h1 className="text-xl tracking-tight">Akun</h1>
            </div>
            <div className="sm:flex">
              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <div className="col-span-3 p-4 w-full mx-auto flex justify-center flex-col items-start">
                <div className="text-left mx-auto max-w-7xl p-4 sm:p-0">
                  <div className="text-center">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      <img
                        src={currentProfileImage}
                        className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto block w-20 h-auto mb-5"
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
                    </label>
                    {/* <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog> */}
                  </div>

                  <form className="rounded-lg" onSubmit={handleSubmit}>
                    <InputForm
                      label="Nama"
                      id="nama"
                      type="text"
                      placeholder="Nama"
                      // disable={true}
                      value={user.name}
                    />
                    <InputForm
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      // disable={true}
                      value={user.user.email}
                    />
                    <InputForm
                      label="Telepon"
                      id="telepon"
                      type="text"
                      placeholder="Nomor Telepon"
                      // disable={true}
                      value={user.phone}
                    />
                    <InputForm
                      label="Negara"
                      id="negara"
                      type="text"
                      placeholder={user.nationality}
                      disable={false}
                      onChange={(e) => setNegara(e.target.value)}
                    />
                    <InputForm
                      label="Kota"
                      id="kota"
                      type="text"
                      placeholder={user.city}
                      disable={false}
                      onChange={(e) => setKota(e.target.value)}
                    />
                    <div className="text-center">
                      <button
                        type="submit"
                        className="sm:btn-sm md:btn-md lg:btn-sm text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                      >
                        {loading ? "Loading..." : ""}
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
    </>
  );
};

export default MyProfile;
