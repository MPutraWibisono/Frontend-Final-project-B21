import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const Account = () => {
  return (
    <>
      <Disclosure className="bg-emerald-50 h-20">
        <div className="flex items-center">
          <IoArrowBackSharp className="h-6 w-6 text-black mt-1" />
          <div className="text-1xl text-black mt-1 mr-2">
            <Link to="/">Kembali ke Beranda</Link>
          </div>
        </div>
      </Disclosure>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-1xl tracking-tight text-gray-900">Akun</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li className="mt-5">
                  <Link to="/profile">
                    <IoPencilSharp />
                    Profil Saya
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/ubahPassword">
                    <IoSettingsOutline />
                    Ubah Password
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/riwayatPembayaran">
                    <IoCartOutline />
                    Riwayat Pembayaran
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="/keluar">
                    <IoLogOutOutline />
                    Keluar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
