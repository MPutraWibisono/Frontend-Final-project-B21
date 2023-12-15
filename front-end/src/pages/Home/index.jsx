import { useEffect } from "react";
import Glide from "@glidejs/glide";
import CourseCard from "../../components/CourseCard";
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
        620: {
          perView: 2,
        },
        768: {
          perView: 4,
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
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative">
            <div
              style={{
                backgroundImage: `url(${belajar})`,
              }}
              className="relative h-96 bg-cover bg-center no-repeat col-span-4 lg:col-span-7 2xl:col-span-5"
            >
              <div className=" md:block md:absolute inset-0 bg-gradient-to-r from-transparent from-5% via-transparent via-50% to-darkGrayish to-95%"></div>
            </div>
            <div className="absolute md:static w-full h-96 text-xl col-span-4 lg:col-span-5 2xl:col-span-7 bg-darkGrayish/80 flex justify-center items-center flex-col md:bg-darkGrayish">
              <h1 className="pb-4 text-paleWhite">
                Belajar dari Praktisi Terbaik
              </h1>
              <Link to="/class">
                <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-darkRed transition duration-300 rounded-[20px] whitespace-nowrap bg-slate-100 hover:bg-slate-400 focus:bg-slate-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none">
                  <span>IKUTI KELAS</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="bg-paleOrange">
        <div className="px-9 glide-03 relative w-full mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
          <div className="py-5 flex text-sm md:text-lg">
            <h2 className="font-bold">Kategori Belajar</h2>
            <Link to="/" className="text-sm ms-auto text-sky-600">
              Lihat semua
            </Link>
          </div>
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden mx-8" data-glide-el="track">
            <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400 ">
                    <img
                      src={andro}
                      alt="Android Dev"
                      className="w-full object-cover object-center h-32 sm:h-24 md:h-24 lg:h-28 xl:h-40 2xl:h-52"
                    />
                  </div>
                  <p className="text-center pt-2 text-xs md:text-base">
                    Android Dev
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400">
                    <img
                      src={uiux}
                      alt="UI/UX Design"
                      className="w-full object-cover object-center h-32 sm:h-24 md:h-24 lg:h-28 xl:h-40 2xl:h-52"
                    />
                  </div>
                  <p className="text-center pt-2 text-xs md:text-base">
                    UI/UX Design
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className=" lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400">
                    <img
                      src={datas}
                      alt="Data Science"
                      className="w-full object-cover object-center h-32 sm:h-24 md:h-24 lg:h-28 xl:h-40 2xl:h-52"
                    />
                  </div>
                  <p className="text-center pt-2 text-xs md:text-base">
                    Data Science
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-32 xl:top-40 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
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
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
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
      <div className="mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
        <div className=" px-9 flex pt-4 text-sm md:text-lg">
          <h2 className="pb-4 font-bold"> Kursus Populer</h2>
          <Link to="" className="text-sm ms-auto text-sky-600">
            Lihat semua
          </Link>
        </div>
        <div className="mx-8">
          <div className="p-5 flex space-x-3 overflow-x-auto touch-pan-x">
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

          <div className="flex justify-center items-center flex-wrap p-2 gap-5">
            {kelas.map((kelas) => (
              <div className="md:w-2/5 w-full" key={kelas.id}>
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
