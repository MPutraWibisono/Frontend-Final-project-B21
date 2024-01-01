import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../redux/actions/authActions";

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

const ChangePass = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const auth = useSelector((state) => state.auth);

  const [passLamaValue, setPassLamaValue] = useState({
    password: "",
    showPass: true,
  });
  const [passBaruValue, setPassBaruValue] = useState({
    password: "",
    showPass: true,
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPass: true,
  });

  const handlePassLama = (event) => {
    setPassLamaValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handlePassBaru = (event) => {
    setPassBaruValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handlePass = (event) => {
    setPassValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const toggleVisibility = (field) => {
    if (field === "passLama") {
      setPassLamaValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    } else if (field === "passBaru") {
      setPassBaruValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    } else if (field === "passValue") {
      setPassValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    }
  };

  const validasi = async (event) => {
    event.preventDefault();

    try {
      // dispatch action changePassword
      dispatch(
        changePassword(
          passLamaValue.password,
          passBaruValue.password,
          passValue.password
        )
      );

      // reset state
      setPassLamaValue({ password: "", showPass: true });
      setPassBaruValue({ password: "", showPass: true });
      setPassValue({ password: "", showPass: true });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

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
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-md flex flex-col w-full sm:w-3/4 border border-pinkTone">
            <div className="bg-darkGrayish text-white p-5 flex items-center justify-center rounded-t-lg">
              <h1 className="text-xl tracking-tight">Akun</h1>
            </div>
            <div className="sm:flex">
              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <div className="col-span-3 p-4 w-full mx-auto flex justify-center flex-col items-start">
                <div className="text-left mx-auto max-w-7xl p-4 sm:p-0">
                  <form
                    onSubmit={validasi}
                    className="max-w-lg mx-auto rounded-lg"
                  >
                    <div className="text-center mt-5">
                      <div className="text-2xl font-semibold text-center">
                        Ubah Password
                      </div>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Masukkan Password Lama</p>
                      <br />
                      <input
                        type={passLamaValue.showPass ? "text" : "password"}
                        name="passLama"
                        id="passInputlama"
                        placeholder="Password Lama"
                        className="float-left border-2 w-full p-2 text-black"
                        value={passLamaValue.password}
                        onChange={handlePassLama}
                        required
                        autoComplete="current-password"
                      />
                      <div
                        className="absolute right-4 -bottom-8"
                        onClick={() => toggleVisibility("passLama")}
                      >
                        {passLamaValue.showPass ? (
                          <PiEye color="grey" size={20} />
                        ) : (
                          <PiEyeSlash color="grey" size={20} />
                        )}
                      </div>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Masukkan Password Baru</p>
                      <br />
                      <input
                        type={passBaruValue.showPass ? "text" : "password"}
                        name="passwordBaru"
                        id="passInputBaru"
                        placeholder=" Password Baru"
                        className="float-left border-2 w-full p-2 text-black"
                        value={passBaruValue.password}
                        onChange={handlePassBaru}
                        required
                        autoComplete="new-password"
                      />
                      <div
                        className="absolute right-4 -bottom-8"
                        onClick={() => toggleVisibility("passBaru")}
                      >
                        {passBaruValue.showPass ? (
                          <PiEye color="grey" size={20} />
                        ) : (
                          <PiEyeSlash color="grey" size={20} />
                        )}
                      </div>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Konfirmasi Password</p>
                      <br />
                      <input
                        type={passValue.showPass ? "text" : "password"}
                        name="konfirmasiPassword"
                        id="passInput"
                        placeholder="Konfirmasi Password"
                        className="float-left border-2 w-full p-2 text-black"
                        value={passValue.password}
                        onChange={handlePass}
                        required
                        autoComplete="new-password"
                      />
                      <div
                        className="absolute right-4 -bottom-8 "
                        onClick={() => toggleVisibility("passValue")}
                      >
                        {passValue.showPass ? (
                          <PiEye color="grey" size={20} />
                        ) : (
                          <PiEyeSlash color="grey" size={20} />
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="sm:btn-sm md:btn-md lg:btn-sm text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                      >
                        Ubah Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
