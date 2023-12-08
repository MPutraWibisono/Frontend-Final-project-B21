import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { HiChatAlt2 } from "react-icons/hi";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <div className="bg-green-100 relative">
        <div className="grid grid-cols-10 grid-rows-10">
          <Link
            to="/class"
            className="col-span-2 flex justify-start p-4 space-x-3"
          >
            <div className="w-5">
              <ArrowLeftIcon />
            </div>
            <div className="hidden md:block">Kelas lainnya</div>
          </Link>
          <div className="col-start-2 col-end-10 lg:col-end-7">
            <div className="flex col-start-2 col-end-7">
              <h1 className="text-md md:text-xl">UI/UX Design</h1>
              <span className="ms-auto pe-5 text-xs md:text-sm">⭐5.0</span>
            </div>
            <div className="col-start-2 col-end-5">
              <h3 className="text-md md:text-xl font-medium">
                Intro to Basic of User Interaction Design
              </h3>
              <p className="text-sm md:text-md">by Simon Doe</p>
              <div className="flex space-x-5 text-sm text-center pt-2">
                <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                  <RiShieldStarLine className="text-xl" />
                  <p>Begginer level</p>
                </p>
                <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                  <RiBookLine className="text-xl" />
                  <p>5 Modul</p>
                </p>
                <p className="flex items-center text-xs md:text-sm space-x-1 flex-col sm:flex-row">
                  <RiTimeFill className="text-xl" />
                  <p>45 Menit</p>
                </p>
              </div>

              <button className="inline-flex h-8 md:h-10 items-center justify-center gap-2 whitespace-nowrap rounded rounded-full bg-emerald-500 px-4 md:px-8 text-xs md:text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none my-4">
                <span>Join Grup Telegram</span>
                <span className="relative only:-mx-5">
                  <HiChatAlt2 />
                </span>
              </button>
            </div>
          </div>
          <div className="row-start-3 col-start-2 col-end-10 w-full lg:w-1/3 lg:justify-end lg:p-6 lg:absolute right-20">
            <div className="rounded-md shadow-xl bg-slate-400 p-5 mb-4">
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
                      className="block w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-400/50 [&::-webkit-progress-value]:bg-emerald-500 [&::-moz-progress-bar]:bg-emerald-500"
                    >
                      25%
                    </progress>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between space-x-4 text-xs md:text-sm">
                <span>Chapter 1 - Pendahuluan</span>
                <span className="ms-auto">60 Menit</span>
              </div>
              <div className="flex">
                <ul className="divide-y w-full divide-slate-100">
                  <li className="flex gap-4 px-4 py-3">
                    <Link to="/" className="flex space-x-3 w-full">
                      <div className="self-center">
                        <div className="h-8 w-8 ">
                          <div className="bg-slate-300 w-full rounded-full flex justify-center items-center h-full text-white">
                            <p className="">1</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-full">
                        <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
                          <h4 className="text-sm md:text-base text-slate-700">
                            Tujuan Mengikuti Kelas Design System
                          </h4>
                        </div>
                        <FaCirclePlay className="text-xl" />
                      </div>
                    </Link>
                  </li>
                  <li className="flex gap-4 px-4 py-3">
                    <Link to="/" className="flex space-x-3 w-full">
                      <div className="self-center">
                        <div className="h-8 w-8 ">
                          <div className="bg-slate-300 w-full rounded-full flex justify-center items-center h-full text-white">
                            <p className="">2</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-full">
                        <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
                          <h4 className="text-sm md:text-base text-slate-700">
                            Pengenalan Design System
                          </h4>
                        </div>
                        <FaCirclePlay className="text-xl" />
                      </div>
                    </Link>
                  </li>
                  <li className="flex gap-4 px-4 py-3">
                    <Link to="/" className="flex space-x-3 w-full">
                      <div className="self-center">
                        <div className="h-8 w-8 ">
                          <div className="bg-slate-300 w-full rounded-full flex justify-center items-center h-full text-white">
                            <p className="">3</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-full">
                        <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
                          <h4 className="text-sm md:text-base text-slate-700">
                            Contoh Dalam Membangun Design System
                          </h4>
                        </div>
                        <FaCirclePlay className="text-xl" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 grid grid-cols-10 grid-rows-10">
          <div className="col-start-2 col-end-10 lg:col-end-7">
            <div className="p-5">
              <iframe
                className="rounded-[25px] w-full aspect-video"
                src="https://www.youtube.com/embed/1GHsinR-t3E?si=WFoKdMyEMboJoV21"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="p-5 text-justify">
              <h1>Tentang Kelas</h1>
              <p className="indent-8 text-sm">
                Design system adalah kumpulan komponen design, code, ataupun
                dokumentasi yang dapat digunakan sebagai panduan utama yang
                memunginkan designer serta developer memiliki lebih banyak
                kontrol atas berbagai platform. Dengan hadirnya design system,
                dapat menjaga konsistensi tampilan user interface dan
                meningkatkan user experience menjadi lebih baik. Disisi bisnis,
                design system sangat berguna dalam menghemat waktu dan biaya
                ketika mengembangkan suatu produk. Bersama mentor XXX, kita akan
                mempelajari design system dari mulai manfaat, alur kerja
                pembuatannya, tools yang digunakan, hingga pada akhirnya, kita
                akan membuat MVP dari design system. Selain itu, mentor juga
                akan menjelaskan berbagai resource yang dibutuhkan untuk mencari
                inspirasi mengenai design system. Kelas ini sesuai untuk Anda
                yang ingin memahami apa itu design system. Tidak hanya ditujukan
                untuk UI/UX Designer ataupun Developer, kelas ini sangat sesuai
                untuk stakeholder lain agar dapat memudahkan tim dalam bekerja
                sama. Yuk segera daftar dan kami tunggu di kelas ya!
              </p>
            </div>
            <div className="ps-5">
              <h1>Kelas Ini Ditujukan Untuk</h1>
              <ul className="list-decimal ps-6 text-sm">
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
    </>
  );
};

export default Detail;
