/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../libs/utils";
import CardNoButton from "../CourseCard/CardNoButton";

const Modal = ({
  id,
  title,
  name,
  author,
  rating,
  level,
  modul,
  price,
  image,
  duration,
}) => {
  const [isShowing, setIsShowing] = useState(true);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const isLog = () => {
    if (!localStorage.getItem("id")) {
      toastNotify({
        type: "success",
        message: "Login Dahulu Ya!",
      });
      navigate("/auth/login");
    } else {
      navigate(`/payment/?courseId=${id}`);
    }
  };

  return (
    <>
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-1a content-1a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                className="flex max-h-[90vh] lg:w-1/3 w-full sm:w-1/2 max-w-2xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-1a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700 flex-col">
                    <p>Selangkah lagi menuju</p>
                    <span className="text-darkMagenta font-bold">
                      Kelas Premium
                    </span>
                  </h3>
                  <button
                    // to="/class"
                    onClick={() => history.back()}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-darkMagenta transition duration-300 hover:bg-darkGrayish/10 hover:text-darkGrayish/60 focus:bg-darkGrayish/200 focus:text-darkGrayish/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-darkGrayish/30 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <CardNoButton
                  title={title}
                  name={name}
                  author={author}
                  rating={rating}
                  image={image}
                  // level={level}
                  // modul={modul}
                  // price={price}
                  // duration={duration}
                />
                <div className="flex justify-center">
                  <div className="py-2 text-sm font-semibold border rounded-2xl w-56 text-center bg-pink text-white">
                    Rp. {price}
                  </div>
                </div>
                {/*        <!-- Modal actions --> */}
                <div className="flex justify-start gap-2">
                  <button
                    onClick={() => isLog()}
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-pinkTone px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-pinkTone/60 focus:bg-pinkTone/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-pinkTone/30 disabled:bg-pinkTone/30 disabled:shadow-none"
                  >
                    <span>Beli Sekarang</span>
                  </button>
                  <button
                    // to="/class"
                    onClick={() => history.back()}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-pinkTone transition duration-300 hover:bg-pinkTone/20 hover:text-pinkTone/60 focus:bg-pinkTone/20 focus:text-pinkTone/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-pinkTone/30 disabled:shadow-none disabled:hover:bg-transparent"
                  >
                    <span>Nanti</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
