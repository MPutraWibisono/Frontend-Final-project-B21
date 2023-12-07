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

      <main className="flex">
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
              <li className="mt-5 text-1xl">
                <Link to="/profile">
                  <IoPencilSharp className="text-brown01" />
                  Profil Saya
                </Link>
              </li>
              <li className="mt-5 text-1xl">
                <Link to="/changepassword">
                  <IoSettingsOutline className="text-brown01" />
                  Ubah Password
                </Link>
              </li>
              <li className="mt-5 text-1xl">
                <Link to="/purchasehistory">
                  <IoCartOutline className="text-brown01" />
                  Riwayat Pembayaran
                </Link>
              </li>
              <li className="mt-5 text-1xl">
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
      </main>
    </>
  );
};

export default PurchaseHistory;
