import { useEffect } from "react";
import Glide from "@glidejs/glide";
import CourseCard from "../../components/CourseCard/Card";
import { Link } from "react-router-dom";
import kelas from "../../data/kelas.json";
import andro from "../../assets/images/android dev.jpg";
import uiux from "../../assets/images/uiux.jpg";
import datas from "../../assets/images/data science.jpg";
import belajar from "../../assets/images/belajar.jpg";

const Homepage = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 7000,
      animationDuration: 1000,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        400: {
          perView: 1,
        },
        580: {
          perView: 2,
        },
        800: {
          perView: 3,
        },
        1000: {
          perView: 3,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/*<!-- Component: Two columns even layout --> */}
      <section className="bg-darkGrayish">
        <div className=" mx-auto max-w-full lg:max-w-8xl 2xl:max-w-[96rem]">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative pt-8">
            <div
              style={{
                backgroundImage: `url(${belajar})`,
              }}
              className="relative h-96 bg-cover bg-top no-repeat col-span-4 lg:col-span-7 2xl:col-span-5"
            >
              <div className=" md:block md:absolute inset-0 bg-gradient-to-r from-transparent from-5% via-transparent via-50% to-darkGrayish to-95%"></div>
            </div>
            <div className="absolute md:static w-full h-full text-xl lg:text-3xl col-span-4 lg:col-span-5 2xl:col-span-7 bg-darkGrayish/80 flex justify-center items-center flex-col md:bg-darkGrayish">
              <div>
                <h1 className="pb-4 text-paleWhite font-semibold leading-normal text-center md:text-start">
                  Belajar <br />
                  dari Praktisi Terbaik
                </h1>
                <Link to="/class" className="">
                  <button className="flex items-center w-full justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-darkRed transition duration-300 rounded-[20px] whitespace-nowrap bg-slate-100 hover:scale-105  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none btn">
                    <span className="font-semibold text-darkGrayish">
                      IKUTI KELAS
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="bg-paleOrange">
        <div className="md:px-28 px-8 glide-03 relative w-full mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
          <div className="pb-3 pt-4 flex text-sm md:text-lg">
            <h2 className="font-bold text-black">Kategori Belajar</h2>
            <Link
              to="/class"
              className="lg:text-sm text-xs font ms-auto text-pinkTone font-bold hover:text-pink flex items-center"
            >
              Lihat semua
            </Link>
          </div>
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden mx-8" data-glide-el="track">
            <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[25px] shadow-md shadow-slate-400 ">
                    <img
                      src={andro}
                      alt="Android Dev"
                      className="w-full object-cover object-center h-24 sm:h-20 lg:h-20 xl:h-32 2xl:h-44"
                    />
                  </div>
                  <p className="text-center pt-3 pb-5 text-xs font-semibold">
                    Android Dev
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[25px] shadow-md shadow-slate-400">
                    <img
                      src={uiux}
                      alt="UI/UX Design"
                      className="w-full object-cover object-center h-24 sm:h-20 lg:h-20 xl:h-32 2xl:h-44"
                    />
                  </div>
                  <p className="text-center pt-3 pb-5 text-xs font-semibold">
                    UI/UX Design
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[25px] shadow-md shadow-slate-400">
                    <img
                      src={datas}
                      alt="Data Science"
                      className="w-full object-cover object-center h-24 sm:h-20 lg:h-20 xl:h-32 2xl:h-44"
                    />
                  </div>
                  <p className="text-center pt-3 pb-5 text-xs font-semibold">
                    Data Science
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute md:px-24 lg:px-20 px-5 left-0 top-24 sm:top-20 md:top-24 lg:top-24 xl:top-32 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-darkGrayish bg-white/20 text-darkGrayish transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>Kategori Sebelumnya</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-darkGrayish bg-white/20 text-darkGrayish transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>Kategori Berikutnya</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
      <div className="md:px-16 px-8 glide-03 relative w-full mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
        <div className="md:px-12 pb-3 pt-4 flex text-sm md:text-lg">
          <h2 className="font-bold text-black">Kelas Populer</h2>
          <Link
            to="/class"
            className="lg:text-sm text-xs ms-auto text-pinkTone font-bold hover:text-pink flex items-center"
          >
            Lihat semua
          </Link>
        </div>
        <div className="">
          <div className="md:px-12 pb-5 flex space-x-3 overflow-x-auto touch-pan-x">
            {/*<!-- Component: Small primary basic button --> */}
            <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pink focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
              <span>All</span>
            </button>
            <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pink focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
              <span>UI/UX</span>
            </button>
            <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pink focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
              <span>IOS Development</span>
            </button>
            <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pink focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
              <span>Data Science</span>
            </button>
            {/*<!-- End Small primary basic button --> */}
          </div>

          <div className="flex justify-center items-center flex-wrap gap-5">
            {kelas.map((kelas) => (
              <div className="sm:w-[280px] md:w-[300px] w-full" key={kelas.id}>
                <CourseCard
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
