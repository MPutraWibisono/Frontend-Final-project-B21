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
      <div className="pt-20">
        <Disclosure className="bg-cream06 h-20">
          <div className="flex items-center">
            <IoArrowBackSharp className="h-6 w-6 text-black mt-1" />
            <div className="text-1xl text-black mt-1 mr-2">
              <Link to="/">Kembali ke Beranda</Link>
            </div>
          </div>
        </Disclosure>
        <div className="bg-pink01 shadow">
          <div className="text-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl tracking-tight text-white">Akun</h1>
          </div>
        </div>

        <main className="flex items-center justify-center">
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
                <li className="mt-5">
                  <Link to="/profile">
                    <IoPencilSharp className="text-brown01" />
                    Profil Saya
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/changepassword">
                    <IoSettingsOutline className="text-brown01" />
                    Ubah Password
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/purchasehistory">
                    <IoCartOutline className="text-brown01" />
                    Riwayat Pembayaran
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/logout">
                    <IoLogOutOutline className="text-brown01" />
                    Keluar
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  className="text-sm rounded-3xl font-semibold leading-6 bg-brown01 text-white border-4 border-brown01 m-10"
                >
                  Ubah Password
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChangePass;
