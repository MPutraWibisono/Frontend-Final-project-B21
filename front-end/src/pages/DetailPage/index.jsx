import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FaTelegramPlane } from "react-icons/fa";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline, IoIosStar } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import Modal from "../../components/Modals";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourse,
  getMaterial,
  getChapter,
} from "../../redux/actions/courseActions";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Loading from "../../components/Loading";

const Detail = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { course, material, chapter } = useSelector((state) => state.course);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors));
    dispatch(getMaterial(setErrors));
    dispatch(getChapter(setErrors));
  }, [dispatch]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (course.length === 0 || material.length === 0 || chapter.length === 0) {
    return <Loading />;
  }

  const courseIWant = course.find((item) => item.id == courseId);
  const materialIWant = material.find((item) => item.id == courseId);
  const chapterIWant = chapter.find((item) => item.courseId == courseId);

  return (
    <>
      <Modal
        title={courseIWant?.category?.name}
        name={courseIWant?.name}
        author={courseIWant?.author}
        rating={courseIWant?.rating}
        level={courseIWant?.level}
        modul={courseIWant?.modul}
        price={courseIWant?.price}
        image={courseIWant?.imageUrl}
        duration={courseIWant?.durasi}
      />
      <div className="bg-paleOrange pt-24">
        <div className="relative mx-auto max-w-full lg:max-w-8xl 2xl:max-w-[96rem]">
          <div className="grid grid-cols-10 grid-rows-10">
            <Link
              to="/class"
              className="col-span-3 flex justify-start p-4 space-x-3 items-center"
            >
              <div className="w-5">
                <ArrowLeftIcon />
              </div>
              <div className="hidden md:block">Kelas lainnya</div>
            </Link>
            <div className="col-start-2 col-end-10 lg:col-end-7 ">
              <div className="flex col-start-2 col-end-7 items-center justify-center">
                <h1 className="text-md md:text-xl font-bold text-darkGrayish">
                  {courseIWant?.category?.name}
                </h1>
                <span className="ms-auto pe-5 text-xs md:text-sm flex items-center space-x-1 font-bold">
                  <IoIosStar className="text-yellow-400" />
                  <span>{courseIWant.rating}</span>
                </span>
              </div>
              <div className="col-start-2 col-end-5">
                <h3 className="text-md md:text-xl font-bold pb-1">
                  {courseIWant.name}
                </h3>
                <p className="text-sm md:text-md">by {courseIWant.author}</p>
                <div className="flex space-x-5 text-sm text-center pt-2">
                  <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                    <RiShieldStarLine className="text-xl text-darkGrayish" />
                    <p className="font-semibold ">{courseIWant.level}</p>
                  </p>
                  <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                    <RiBookLine className="text-xl text-darkGrayish" />
                    <p className="font-semibold ">{courseIWant.modul} Modul</p>
                  </p>
                  <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                    <RiTimeFill className="text-xl text-darkGrayish" />
                    <p className="font-semibold ">{courseIWant.durasi} Menit</p>
                  </p>
                </div>
                <a href={`https://${courseIWant.groupUrl}`} target="blank">
                  <button className="btn inline-flex h-8 md:h-10 items-center justify-center gap-2 whitespace-nowrap rounded rounded-full bg-sky-500 px-4 md:px-6 text-xs md:text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none my-4">
                    <span>Join Grup Telegram</span>
                    <span className="relative only:-mx-5">
                      <FaTelegramPlane />
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div className="row-start-3 col-start-2 col-end-10 w-full lg:w-1/3 lg:justify-end lg:p-6 lg:absolute right-20">
              <div className="rounded-md shadow-xl bg-paleWhite p-5 mb-4">
                <div className="flex truncate text-base md:text-lg">
                  <h1 className="pe-4">Materi Belajar</h1>
                  <div className="flex w-full space-x-2">
                    <IoIosCheckmarkCircleOutline />

                    <div className="relative w-full">
                      <label
                        id="p01d-label"
                        className="absolute top-0 left-0 mb-0 block w-1/4 text-center text-xs text-white"
                      >
                        <span className="sr-only">Complete</span> 10%
                      </label>
                      <progress
                        aria-labelledby="p01d-label"
                        id="p01d"
                        max="100"
                        value="10"
                        className="block w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-400/50 [&::-webkit-progress-value]:bg-pinkTone [&::-moz-progress-bar]:bg-pinkTone"
                      >
                        25%
                      </progress>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between space-x-4 text-xs md:text-sm font-bold pt-2">
                  <span className="text-pinkTone">{chapterIWant.name}</span>
                  <span className="ms-auto text-blue-500 ">
                    {chapterIWant.duration}
                  </span>
                </div>
                <div className="flex">
                  <ul className="divide-y w-full divide-slate-200">
                    <li className="flex gap-4 px-4 py-3">
                      <Link to="/" className="flex space-x-3 w-full">
                        <div className="self-center">
                          <div className="h-8 w-8 ">
                            <div className="bg-paleOrange w-full rounded-full flex justify-center items-center h-full text-darkRed font-semibold">
                              <p className="">1</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center w-full">
                          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
                            <h4 className="text-sm md:text-base text-slate-700">
                              {materialIWant.name}
                            </h4>
                          </div>
                          <FaCirclePlay className="text-xl text-darkMagenta" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-paleWhite grid grid-cols-10 grid-rows-10">
            <div className="col-start-2 col-end-10 lg:col-end-7">
              <div className="lg:-translate-x-3 my-5 overflow-hidden rounded-[25px] w-full aspect-auto shadow-2xl">
                <ReactPlayer
                  controls
                  width="100%"
                  className="border"
                  url={materialIWant?.videoUrl}
                />
              </div>
              <div className="p-5 text-justify">
                <h1>Tentang Kelas</h1>
                <p className="indent-8 text-sm leading-loose">
                  {courseIWant.description}
                </p>
              </div>
              <div className="ps-5">
                <h1>Kelas Ini Ditujukan Untuk</h1>
                <ul className="list-decimal ps-6 text-sm leading-loose">
                  <li>Anda yang ingin memahami poin penting design system</li>
                  <li>
                    Anda yang ingin membantu perusahaan lebih optimal dalam
                    membuat design produk
                  </li>
                  <li>Anda yang ingin latihan membangun design system</li>
                  <li>Anda yang ingin latihan membangun design system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
