import { Link, useLocation } from "react-router-dom";
import { FaListUl, FaRegUser, FaRegBell } from "react-icons/fa6";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token == null) {
      setActiveButton("class");
    }
  }, [token]);

  useEffect(() => {
    if (location.pathname == "/myclass") {
      setActiveButton("class");
    }
  }, [location]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    return;
  };

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
              className={`absolute top-0 left-0 z-[-1] h-[24rem] w-full justify-end overflow-hidden overflow-y-auto overscroll-contain bg-darkGrayish/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full  lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <SearchBar setIsToggleOpen={setIsToggleOpen} />
              {token ? (
                <>
                  <div className="flex flex-col lg:flex-row items-end lg:items-center gap-5 md:gap-2 justify-end">
                    <Link
                      to="/myclass"
                      onClick={() => {
                        handleButtonClick("class");
                        setIsToggleOpen(false);
                      }}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "class"
                          ? "bg-pinkTone hover:bg-pinkTone lg:w-full px-3 pe-16"
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
                      onClick={() => {
                        handleButtonClick("notifications");
                        setIsToggleOpen(false);
                      }}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "notifications"
                          ? "bg-pinkTone hover:bg-pinkTone lg:w-full px-3 pe-24"
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
                      onClick={() => {
                        handleButtonClick("profile");
                        setIsToggleOpen(false);
                      }}
                      className={`relative inline-flex justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm hover:ring-pinkTone transition-[padding] duration-300 ${
                        activeButton === "profile"
                          ? "bg-pinkTone hover:bg-pinkTone lg:w-full px-3 pe-16"
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
