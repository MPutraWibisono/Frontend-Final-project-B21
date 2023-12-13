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

const ChangePass = () => {
  const [passLamaValue, setPassLamaValue] = useState({
    password: "",
    showPass: false,
  });
  const [passBaruValue, setPassBaruValue] = useState({
    password: "",
    showPass: false,
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPass: false,
  });

  const handlePassLama = (event) => {
    setPassLamaValue({ ...passLamaValue, password: event.target.value });
  };

  const handlePassBaru = (event) => {
    setPassBaruValue({ ...passBaruValue, password: event.target.value });
  };

  const handlePass = (event) => {
    setPassValue({ ...passValue, password: event.target.value });
  };

  const toggleVisibility1 = () => {
    setPassLamaValue({ ...passLamaValue, showPass: !passLamaValue.showPass });
  };

  const toggleVisibility2 = () => {
    setPassBaruValue({ ...passBaruValue, showPass: !passBaruValue.showPass });
  };

  const toggleVisibility3 = () => {
    setPassValue({ ...passValue, showPass: !passValue.showPass });
  };

  const showAlert = (message, type = "info", duration = 5000) => {
    const tempatAlert = document.querySelector(".tempatAlert");
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
    tempatAlert.appendChild(alertElement);

    setTimeout(() => {
      alertElement.style.display = "none";
      tempatAlert.removeChild(alertElement);
    }, duration);
  };

  const validasi = () => {
    if (passLamaValue.password !== passBaruValue.password) {
      showAlert("Masukkan Password dengan Benar", "error");
    } else if (passBaruValue.password === passValue.password) {
      showAlert("Password Baru tidak boleh sama dengan Password Lama", "error");
    } else {
      showAlert("Berhasil Reset Password", "success");
    }
  };

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
            <div className="text-left mx-auto max-w-7xl content-container">
              <div className="text-center">
                <div className="text-2xl">Ubah Password</div>
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
                />

                <button
                  className="absolute right-4 top-14"
                  onClick={toggleVisibility1}
                >
                  {!passLamaValue.showPass ? (
                    <PiEye color="grey" size={30} />
                  ) : (
                    <PiEyeSlash color="grey" size={30} />
                  )}
                </button>
              </div>

              {/* passbaru */}
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
                />

                <button
                  className="absolute right-4 top-14"
                  onClick={toggleVisibility2}
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
                />

                <button
                  className="absolute right-4 top-14"
                  onClick={toggleVisibility3}
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
                  onClick={validasi}
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

export default ChangePass;
