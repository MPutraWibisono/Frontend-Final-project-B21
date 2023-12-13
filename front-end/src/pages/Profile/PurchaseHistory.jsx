import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import CourseCard from "../../components/CourseCard";
import kelas from "../../data/kelas.json";

const filteredClasses = kelas.filter(() => {
  return true;
});

const PurchaseHistory = () => {
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
      <div className="flex pb-5 h-screen items-start justify-center">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-3/4 border border-pinkTone">
          <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
            <h1 className="text-2xl tracking-tight">Akun</h1>
          </div>
          <div className="flex">
            <ul className="col-span-1 p-4 w-1/2">
              {/* Konten Sidebar */}
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
                <Link to="/logout">
                  <div className="flex items-center ">
                    <IoLogOutOutline className="text-pinkTone mr-2" />
                    <span>Keluar</span>
                  </div>
                </Link>
              </li>
              <p className="text-sm text-gray-500 mt-5 p-5 text-center">
                Versi 1.0.0
              </p>
            </ul>

            {/* Content */}
            <div className="container mx-auto">
              <div className="text-center">
                <div className="text-3xl font-semibold mt-4">
                  Riwayat Pembayaran
                </div>
              </div>

              <div className="flex flex-wrap justify-around gap-5 p-2">
                {filteredClasses.map((kelas, index) => (
                  <CourseCard
                    key={index}
                    image={kelas.image}
                    title={kelas.title}
                    rating={kelas.rating}
                    description={kelas.description}
                    instructor={kelas.instructor}
                    level={kelas.level}
                    modules={kelas.modules}
                    duration={kelas.duration}
                    type={kelas.type}
                    price={kelas.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
