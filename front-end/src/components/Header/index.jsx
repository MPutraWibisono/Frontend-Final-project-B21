import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaListUl, FaRegUser, FaRegBell } from "react-icons/fa6";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/actions/authActions";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [state, setState] = useState({
    "id-l16": "",
  });
  const location = useLocation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("class");
  const { id } = useSelector((state) => state.auth);

  const noNavbar = [
    "/auth/login",
    "/auth/register",
    "/auth/otp",
    "/auth/forgot-password",
    "/auth/forgot-otp",
    "/auth/reset-password",
    "/admin/login",
    "/admin/dashboard",
    "/admin/dashboard/kelola-kelas",
  ];

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const shouldShowNavbar = noNavbar.includes(location.pathname);

  if (shouldShowNavbar) {
    return null; // Tidak menampilkan navbar untuk path tertentu
  }

  return (
    <>
      <header className="fixed z-20 w-full bg-darkGrayish after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:px-16 lg:max-w-8xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none"
            >
              <Link
                to="/"
                onClick={() => handleButtonClick("class")}
                className="w-3/4 lg:w-full"
              >
                <img src={logo} width="100" height="70" alt="DemyU Course" />
              </Link>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[22rem] w-full justify-end overflow-hidden overflow-y-auto overscroll-contain bg-darkGrayish/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full  lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {/*    <!-- Component: Rounded large search input  --> */}
              <div className="relative my-5 lg:ps-16 lg:w-1/2 me-auto">
                <input
                  id="id-l16"
                  type="text"
                  name="id-l16"
                  placeholder="Cari kursus terbaik.."
                  value={state["id-l16"]}
                  className="relative w-full h-12 px-6 pr-12 text-sm transition-all border rounded-2xl outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  onChange={handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  aria-labelledby="title-9 description-9"
                  role="graphics-symbol"
                >
                  <title id="title-9">Search icon</title>
                  <desc id="description-9">Icon description here</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              {/*    <!-- End Rounded large search input  --> */}
              {id ? (
                <>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-5 md:gap-2 justify-end">
                    <Link
                      to="/myclass"
                      onClick={() => handleButtonClick("class")}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "class"
                          ? "bg-pinkTone hover:bg-pinkTone md:w-full px-3 pe-16"
                          : "hover:bg-pinkTone/60 px-3"
                      }`}
                    >
                      <FaListUl />
                      <span
                        className={`absolute right-1 p-2 ${
                          activeButton === "class"
                            ? "opacity-100 block "
                            : "opacity-0 hidden "
                        } transition duration-300`}
                      >
                        Kelas
                      </span>
                    </Link>
                    <Link
                      to="/notifications"
                      onClick={() => handleButtonClick("notifications")}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "notifications"
                          ? "bg-pinkTone hover:bg-pinkTone md:w-full px-3 pe-24"
                          : "hover:bg-pinkTone/60 px-3"
                      }`}
                    >
                      <FaRegBell />
                      <span
                        className={`absolute right-1 p-2 ${
                          activeButton === "notifications"
                            ? "opacity-100 block"
                            : "opacity-0 hidden"
                        } transition duration-300`}
                      >
                        Notifikasi
                      </span>
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => handleButtonClick("profile")}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "profile"
                          ? "bg-pinkTone hover:bg-pinkTone md:w-full px-3 pe-16"
                          : "hover:bg-pinkTone/60 px-3"
                      }`}
                    >
                      <FaRegUser />
                      <span
                        className={`absolute right-1 p-2 ${
                          activeButton === "profile"
                            ? "opacity-100 block"
                            : "opacity-0 hidden "
                        } transition duration-300`}
                      >
                        Akun
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <li
                    role="none"
                    className="flex justify-center md:justify-end"
                  >
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      className="flex text-pinkTone items-center gap-2 py-3 transition-colors duration-300 hover:text-paleWhite focus:text-black focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/auth/login"
                    >
                      <span>Masuk</span>
                      <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
