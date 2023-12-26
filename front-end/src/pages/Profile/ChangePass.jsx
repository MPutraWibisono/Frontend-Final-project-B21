import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import axios from "axios";

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

const ChangePass = () => {
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

  const showAlert = (message, type = "info", duration = 5000) => {
    console.log(" ini showAlert ");
    const alertElement = document.createElement("div");
    alertElement.classList.add("custom-alert");
    alertElement.classList.add("text-white");
    alertElement.classList.add("rounded-lg");
    alertElement.classList.add("w-[250px]");
    alertElement.classList.add("items-center");
    alertElement.classList.add("text-center");
    alertElement.classList.add("py-2");
    alertElement.classList.add("px-5");
    alertElement.classList.add("text-xs");
    alertElement.classList.add("bottom-6");
    alertElement.classList.add("mx-auto");

    if (type === "success") {
      alertElement.classList.add("bg-alertGreen");
    } else if (type === "error") {
      alertElement.classList.add("bg-alertRed");
    }

    alertElement.textContent = message;
    document.body.appendChild(alertElement);

    setTimeout(() => {
      alertElement.style.display = "none";
      document.body.removeChild(alertElement);
    }, duration);
  };

  const validasi = async (event) => {
    event.preventDefault();
    console.log("ini validasi");
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/profile`,
        {
          password_lama: passLamaValue.password,
          password_baru: passBaruValue.password,
          ulangi_password: passValue.password,
        }
      );
      if (response.status !== 200) {
        // Jika respons tidak berhasil, tampilkan pesan kesalahan
        throw new Error("Gagal mengubah password. Silakan coba lagi.");
      }
      showAlert("Berhasil Mengubah Password", "success");

      // reset
      setPassLamaValue({ password: "", showPass: true });
      setPassBaruValue({ password: "", showPass: true });
      setPassValue({ password: "", showPass: true });
    } catch (error) {
      console.error("Error:", error.message);
      showAlert("Gagal Mengubah Password. Silakan coba lagi.", "error");
    }
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
                <div className="text-left mx-auto max-w-7xl content-container">
                  <form onSubmit={validasi} className="max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-semibold sm:text-left">
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
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passLamaValue.password}
                        onChange={handlePassLama}
                        required
                        autoComplete="current-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passLama")}
                      >
                        {!passLamaValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
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
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passBaruValue.password}
                        onChange={handlePassBaru}
                        required
                        autoComplete="new-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passBaru")}
                      >
                        {!passBaruValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Ulangi Password</p>
                      <br />
                      <input
                        type={passValue.showPass ? "text" : "password"}
                        name="ulangiPassword"
                        id="passInput"
                        placeholder="Ulangi Password"
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passValue.password}
                        onChange={handlePass}
                        required
                        autoComplete="new-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passValue")}
                      >
                        {!passValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
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
