import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const kelas = [
  {
    title: "UI/UX Design",
    rating: 4.7,
    description: "Belajar Web Designer dengan Figma",
    instructor: "Angela Doe",
    level: "Intermediate level",
    modules: 5,
    duration: "140 Menit",
    type: "Premium",
    image:
      "https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg",
  },
  {
    title: "Membuat Wireframe Hingga ke Visual Design",
    rating: 4.7,
    description: "Belajar Web Designer dengan Figma",
    instructor: "Angela Doe",
    level: "Intermediate level",
    modules: 5,
    duration: "140 Menit",
    type: "Premium",
    image:
      "https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg",
  },
  {
    title: "Data Science",
    rating: 4.5,
    description: "Dasar Pemrograman Python",
    instructor: "James Doe",
    level: "Intermediate level",
    modules: 5,
    duration: "90 Menit",
    type: "Premium",
    image: "https://miro.medium.com/max/1400/1*9bBtkVerj_gJsbaicD_MuQ.png",
  },
  {
    title: "UI/UX",
    rating: 4.7,
    description: "Belajar Design dengan Figma",
    instructor: "Angela Doe",
    level: "Intermediate level",
    modules: 10,
    duration: "120 Menit",
    type: "Premium",
    image:
      "https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg",
  },
];

const filteredClasses = kelas.filter(() => {
  return;
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
          <div className="container mx-auto">
            <div className="flex border rounded-lg items-center">
              <div className="flex flex-wrap justify-around">
                {filteredClasses.map((kelas, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-2/5 mb-8 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
                  >
                    <figure>
                      <img
                        src={kelas.image}
                        alt="card image"
                        className="aspect-video w-full"
                      />
                    </figure>

                    <div className="p-6">
                      <header className="mb-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold text-slate-700">
                            {kelas.title}
                          </h3>
                          <p className="text-slate-500">⭐ {kelas.rating}</p>
                        </div>
                        <p className="text-md font-normal text-slate-700">
                          {kelas.description}
                        </p>
                        <p className="text-sm text-slate-400">
                          {" "}
                          By {kelas.instructor}
                        </p>
                      </header>
                      <div className="flex justify-between">
                        <p>💡{kelas.level}</p>
                        <p>🧾{kelas.modules} Modul</p>
                        <p>⏳{kelas.duration}</p>
                      </div>

                      <button className="inline-flex m-3 h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:text-blue-500 disabled:shadow-none">
                        <span className="order-2">{kelas.type}</span>
                        <span className="relative only:-mx-4">💎</span>
                      </button>
                    </div>
                  </div>
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
