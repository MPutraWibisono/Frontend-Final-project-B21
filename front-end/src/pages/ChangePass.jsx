import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const ChangePass = () => {
  const [newPassValue, setNewPassValue] = useState({
    password: "",
    showPass: false,
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPass: false,
  });

  const handlePassBaru = (event) => {
    setNewPassValue({ ...newPassValue, password: event.target.value });
  };

  const handleUlangiPass = (event) => {
    setPassValue({ ...passValue, password: event.target.value });
  };

  const toggleVisibility2 = () => {
    setNewPassValue({ ...newPassValue, showPass: !newPassValue.showPass });
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
    if (newPassValue.password !== passValue.password) {
      showAlert("Input Password Salah", "error");
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
          <div className="col-span-3 p-4 flex flex-col items-center">
            <div className="container mx-auto">
              <div className="text-center">
                <div className="text-2xl">Ubah Password</div>
              </div>
              <div className="mt-2 relative block mb-4 lg:mb-8">
                <br />
                <p className="float-left">Masukkan Password Lama</p>
                <br />
              </div>
              <div className="mt-2 relative block mb-4 lg:mb-8">
                <br />
                <p className="float-left">Masukkan Password Baru</p>
                <br />
                <input
                  type={newPassValue.showPass ? "text" : "password"}
                  name="password"
                  id="passInput2"
                  placeholder="Password Baru"
                  className="float-left border-2 rounded-2xl w-full p-2 text-black"
                  value={newPassValue.password}
                  onChange={handlePassBaru}
                  required
                />
                <button
                  className="absolute right-4 top-14"
                  onClick={toggleVisibility2}
                >
                  {!newPassValue.showPass ? (
                    <PiEye color="grey" size={30} />
                  ) : (
                    <PiEyeSlash color="grey" size={30} />
                  )}
                </button>
              </div>
              <div className="mt-2 relative block mb-4 lg:mb-8">
                <br />
                <p className="float-left">Ulangi Password Baru</p>
                <br />
                <input
                  type={passValue.showPass ? "text" : "password"}
                  name="password"
                  id="passInput3"
                  placeholder="Ulangi Password"
                  className="float-left border-2 rounded-2xl w-full p-2 text-black"
                  value={passValue.password}
                  onChange={handleUlangiPass}
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
                  className="text-sm rounded-3xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                >
                  Ubah Password
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
