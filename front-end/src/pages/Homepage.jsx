import { useEffect } from "react";
import Glide from "@glidejs/glide";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
import kelas from "./../data/kelas.json";

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
        640: {
          perView: 3,
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
      <section>
        <div className=" m-auto ">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative">
            <div
              style={{
                backgroundImage: "url(/belajar.jpg)",
              }}
              className="relative h-96 bg-cover bg-center no-repeat col-span-4 lg:col-span-7 2xl:col-span-5"
            >
              <div className=" md:block md:absolute inset-0 bg-gradient-to-r from-transparent from-5% via-transparent via-50% to-darkGrayish to-95%"></div>
            </div>
            <div className="absolute md:static w-full h-96 text-xl col-span-4 lg:col-span-5 2xl:col-span-7 bg-darkGrayish/80 flex justify-center items-center flex-col md:bg-darkGrayish">
              <h1 className="pb-4 text-paleWhite">
                Belajar dari Praktisi Terbaik
              </h1>
              <Link to="/auth/login">
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
      <div className="bg-paleOrange px-9 glide-03 relative w-full">
        <div className="py-5 px-2 flex text-sm md:text-lg">
          <h2>Kategori Belajar</h2>
          <Link to="/" className="ms-auto text-sky-600">
            Lihat semua
          </Link>
        </div>
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Link to="/">
                <div className="h-2/3 lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400 ">
                  <img
                    src="/android dev.jpg"
                    alt="Android Dev"
                    className="h-full w-full object-none object-center"
                  />
                </div>
                <p className="text-center pt-2 text-xs md:text-base">
                  Android Dev
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="h-2/3 lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400">
                  <img
                    src="/uiux.jpg"
                    alt="UI/UX Design"
                    className="h-full w-full object-none object-center"
                  />
                </div>
                <p className="text-center pt-2 text-xs md:text-base">
                  UI/UX Design
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="h-2/3 lg:max-h-80 overflow-hidden rounded-[13px] shadow-md shadow-slate-400">
                  <img
                    src="/data science.jpg"
                    alt="Data Science"
                    className="h-full w-full object-none object-center"
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
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
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
      {/*<!-- End Carousel with indicators & controls inside --> */}
      <div className=" px-11 flex pt-4 text-sm md:text-lg">
        <h2 className="pb-4"> Kursus Populer</h2>
        <Link to="" className="ms-auto text-sky-600">
          Lihat semua
        </Link>
      </div>

      <div className="px-5 flex space-x-3 overflow-x-auto touch-pan-x">
        {/*<!-- Component: Small primary basic button --> */}
        <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pinkTone/80 focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
          <span>All</span>
        </button>
        <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pinkTone/80 focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
          <span>UI/UX</span>
        </button>
        <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pinkTone/80 focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
          <span>IOS Development</span>
        </button>
        <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-pinkTone hover:bg-pinkTone/80 focus:bg-pinkTone disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish">
          <span>Data Science</span>
        </button>
        {/*<!-- End Small primary basic button --> */}
      </div>

      <div className="flex justify-center items-center flex-wrap p-2 gap-5">
        {kelas.map((kelas) => (
          <CourseCard
            key={kelas.id}
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
    </>
  );
};

export default Homepage;
