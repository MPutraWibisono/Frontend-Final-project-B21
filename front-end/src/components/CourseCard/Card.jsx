/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";

const CourseCard = ({
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
      <div className=" overflow-hidden rounded-lg bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full object-cover h-[100px]"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-4 sm:h-50 lg:h-56 h-56 grid content-between">
          <header className="">
            <div className="flex">
              <h3 className="text-sm font-bold text-slate-700 w-4/5">
                {title}
              </h3>
              <div className="ms-auto flex items-center text-xs">
                <IoIosStar className="text-yellow-400 pe-1 min-w-fit" />
                {rating}
              </div>
            </div>
            <p className="text-xs font-normal text-slate-700 w-4/5 ">
              {description}
            </p>
            <p className="text-xs text-slate-400">By {instructor}</p>
          </header>
          <div>
            <div className="flex justify-between pb-3 text-[10px] ">
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
                <p>{duration}</p>
              </span>
            </div>

            {/*<!-- Component: Small primary button with leading icon  --> */}
            <button className="btn btn-xs sm:btn-sm inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-pinkTone px-4 font-medium tracking-wide text-white transition duration-300 hover:bg-pink focus:bg-darkMagenta focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              {type == "Premium" ? (
                <>
                  {/* <span className="relative only:-mx-4">💎</span> */}
                  <span className="text-xs">{type}</span>
                  <span className=" ms-auto ps-3 text-xs">{price}</span>
                </>
              ) : (
                <>
                  <span className="text-xs">Mulai Kelas</span>
                </>
              )}
            </button>
            {/*<!-- End Small primary button with leading icon  --> */}
          </div>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </>
  );
};

export default CourseCard;
