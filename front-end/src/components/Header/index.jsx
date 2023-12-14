import { Link, useLocation } from "react-router-dom";
import { FaListUl, FaRegUser, FaRegBell } from "react-icons/fa6";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [user, setUser] = useState(true);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [state, setState] = useState({
    "id-l16": "",
  });
  const location = useLocation();
  const noNavbar = [
    "/auth/login",
    "/auth/register",
    "/auth/register/otp",
    "/auth/resetpassword",
    "/auth/otp",
    "/admin/dashboard",
    "/admin/dashboard/kelola-kelas",
  ];

  const [activeButton, setActiveButton] = useState("class");

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
      <header className="relative z-20 w-full bg-darkGrayish after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-8 lg:max-w-8xl 2xl:max-w-[96rem]">
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
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <Link to="/">
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
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-darkGrayish/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {user ? (
                <>
                  {/*    <!-- Component: Rounded large search input  --> */}
                  <div className="relative my-6">
                    <input
                      id="id-l16"
                      type="text"
                      name="id-l16"
                      placeholder="Cari kursus terbaik.."
                      value={state["id-l16"]}
                      className="relative w-full h-12 px-4 pr-12 transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      className="flex text-pinkTone items-center gap-2 py-4 transition-colors duration-300 hover:text-paleWhite focus:text-black focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/auth/login"
                    >
                      <span>Masuk</span>
                      <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* <div className="flex items-center ml-auto">
                    <Menu as="div" className="ml-4">
                      <Menu.Button className="inline-flex w-25 justify-center gap-x-1.5 rounded-md bg-pinkTone px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-pink hover:bg-pink">
                        Kelas
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="relative right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-2">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/free"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Kelas Gratis
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/premium"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Kelas Premium
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition> 
                    </Menu>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Link
                      to="/class"
                      onClick={() => handleButtonClick("class")}
                      className={`inline-flex w-25 justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone hover:bg-pink group/item ${
                        activeButton === "class" ? "bg-pinkTone" : ""
                      }`}
                    >
                      <FaListUl />
                      <span
                        className={`${
                          activeButton === "class" ? "block" : "hidden"
                        }`}
                      >
                        Kelas
                      </span>
                    </Link>
                    <Link
                      to="/account"
                      onClick={() => handleButtonClick("account")}
                      className={`inline-flex w-25 justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone hover:bg-pink group/item ${
                        activeButton === "account" ? "bg-pinkTone" : ""
                      }`}
                    >
                      <FaRegUser />
                      <span
                        className={`${
                          activeButton === "account" ? "block" : "hidden"
                        }`}
                      >
                        Profile
                      </span>
                    </Link>
                    <Link
                      to="/notifications"
                      onClick={() => handleButtonClick("notifications")}
                      className={`inline-flex w-25 justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone hover:bg-pink group/item ${
                        activeButton === "notifications" ? "bg-pinkTone" : ""
                      }`}
                    >
                      <FaRegBell />
                      <span
                        className={`${
                          activeButton === "notifications" ? "block" : "hidden"
                        }`}
                      >
                        Notifikasi
                      </span>
                    </Link>
                  </div>
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
