/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  title,
  rating,
  description,
  instructor,
  level,
  modules,
  duration,
  type,
  price,
}) => {
  return (
    <>
      {/*<!-- Component: Basic blog card --> */}
      <div className=" overflow-hidden rounded-2xl bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full object-cover h-[100px]"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="px-4 py-2 sm:h-34 lg:h-36 h-36 flex flex-col content-start">
          <div className="flex">
            <h3 className="text-sm font-bold text-slate-700 w-4/5">{title}</h3>
            <div className="ms-auto flex items-center text-xs">
              <IoIosStar className="text-yellow-400 pe-1 min-w-fit" />
              {rating}
            </div>
          </div>
          <p className="text-xs font-normal text-slate-700 w-4/5 ">
            {description}
          </p>
          <p className="text-xs text-slate-400">By {instructor}</p>
          <div className="flex justify-between py-1 text-[10px] ">
            <span className="text-center sm:flex sm:text-start items-center gap-1">
              <RiShieldStarLine className="text-darkGrayish w-full sm:w-fit text-center" />
              <p>{level}</p>
            </span>
            <span className="text-center sm:flex sm:text-start items-center gap-1">
              <RiBookLine className="text-darkGrayish w-full sm:w-fit text-center" />
              <p>{modules} Modul</p>
            </span>
            <span className="text-center sm:flex sm:text-start items-center gap-1">
              <RiTimeFill className="text-darkGrayish w-full sm:w-fit text-center" />
              <p>{duration} Menit</p>
            </span>
          </div>
          <div className="mt-auto">
            <Link
              to={`/details/${id}`}
              className="w-auto btn btn-xs sm:btn-sm inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full bg-pinkTone px-4 font-medium tracking-wide text-white transition duration-300 hover:bg-pink focus:bg-darkMagenta focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              {type == "PREMIUM" || price != 0 ? (
                <div className="">
                  <span className="text-xs">Premium</span>
                  <span className=" ms-auto ps-3 text-xs">Rp. {price}</span>
                </div>
              ) : (
                <>
                  <div to={`/details/${id}`} className="text-xs ">
                    Mulai Kelas
                  </div>
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </>
  );
};

export default CourseCard;
