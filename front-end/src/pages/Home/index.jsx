/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard/Card";
import { Link } from "react-router-dom";
import belajar from "../../assets/images/belajar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCourse } from "../../redux/actions/courseActions";
import Loading from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Homepage = () => {
  const dispatch = useDispatch();
  const { category, course } = useSelector((state) => state.course);
  const [sortedCourse, setSortedCourse] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  // const { token } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory(setErrors));
    dispatch(getCourse(setErrors));
  }, [dispatch]);

  useEffect(() => {
    if (selectedFilter == "All") {
      setSortedCourse(course);
    } else {
      setSortedCourse(
        course.filter((item) => item.category.name === selectedFilter)
      );
    }
  }, [course, selectedFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClassCat = (cat) => {
    setSelectedFilter(cat);
  };

  if (errors.isError) {
    return <h1 className="h-screen w-full">{errors.message}</h1>;
  }

  if (category.length === 0 && course.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <div className="pb-10">
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
                  <Link to={"/class"} className="">
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
        <div className="bg-paleOrange">
          <div className="md:px-28 px-8 glide-03 relative w-full mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
            <div className="pb-3 pt-4 flex text-sm md:text-lg">
              <h2 className="font-bold text-black">Kategori Belajar</h2>
              <Link
                to="/class"
                className="lg:text-sm text-xs font ms-auto text-pinkTone font-bold hover:text-pink flex items-center transition duration-200 active:text-darkMagenta"
              >
                Lihat semua
              </Link>
            </div>
            <Swiper
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                624: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                800: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {category ? (
                category.map((categories) => (
                  <SwiperSlide key={categories?.id}>
                    <Link to={`/class/?category=${categories?.id}`}>
                      <div className=" lg:max-h-80 overflow-hidden rounded-[25px] shadow-md shadow-slate-400 transition duration-200 hover:scale-95 active:scale-90 hover:opacity-90">
                        <img
                          src={categories?.imageUrl}
                          alt={categories?.name}
                          loading="lazy"
                          className="w-full object-cover object-center h-24 sm:h-20 lg:h-24 xl:h-32 2xl:h-36"
                        />
                      </div>
                    </Link>
                    <p className="text-center pt-3 pb-5 text-xs font-semibold">
                      {categories?.name}
                    </p>
                  </SwiperSlide>
                ))
              ) : (
                <div className="skeleton w-32 h-32"></div>
              )}
            </Swiper>
          </div>
        </div>
        <div className="md:px-16 px-8 glide-03 relative w-full mx-auto max-w-7xl lg:max-w-8xl 2xl:max-w-[96rem]">
          <div className="md:px-12 pb-3 pt-4 flex text-sm md:text-lg">
            <h2 className="font-bold text-black">Kelas Populer</h2>
            <Link
              to="/class/?category=popular"
              className="lg:text-sm text-xs font ms-auto text-pinkTone font-bold hover:text-pink flex items-center transition duration-200 active:text-darkMagenta"
            >
              Lihat semua
            </Link>
          </div>
          <div className="">
            <div className="md:mx-12 ps-1 pb-5 mb-5 flex space-x-3 overflow-x-auto touch-pan-x">
              {/*<!-- Component: Small primary basic button --> */}
              <button
                value={"All"}
                onClick={(e) => handleClassCat(e.currentTarget.value)}
                className={`inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-200 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish ${
                  selectedFilter == "All"
                    ? "bg-pink scale-x-105"
                    : "bg-pinkTone hover:bg-pink/60 hover:scale-x-105"
                }`}
              >
                <span>All</span>
              </button>
              {category.map((button) => (
                <button
                  key={button?.id}
                  value={button?.name}
                  onClick={(e) => handleClassCat(e.currentTarget.value)}
                  className={`inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-200 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish ${
                    selectedFilter == button?.name
                      ? "bg-pink scale-x-105"
                      : "bg-pinkTone hover:bg-pink/60 hover:scale-x-105"
                  }`}
                >
                  <span>{button?.name}</span>
                </button>
              ))}
              {/*<!-- End Small primary basic button --> */}
            </div>

            <div className="flex justify-center items-center flex-wrap gap-5">
              {sortedCourse.map((kelas) => (
                <div
                  className="sm:w-[280px] md:w-[300px] w-full"
                  key={kelas.id}
                >
                  <CourseCard
                    id={kelas.id}
                    image={kelas.imageUrl}
                    title={kelas?.category?.name}
                    rating={kelas.rating}
                    description={kelas.name}
                    instructor={kelas.author}
                    level={kelas.level}
                    modules={kelas.modul}
                    duration={kelas.duration}
                    type={kelas.type}
                    price={kelas.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
