/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProgressCard = ({
  id,
  image,
  title,
  rating,
  description,
  instructor,
  level,
  modules,
  duration,
}) => {
  return (
    <>
      {/*<!-- Component: Basic blog card --> */}
      <Link to={`/details/${id}`}>
        <div className=" overflow-hidden rounded-2xl bg-white text-slate-500 shadow-md shadow-slate-200 transition duration-100 hover:scale-105">
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
              <progress
                className="progress progress-success w-full"
                value="30"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </Link>

      {/*<!-- End Basic blog card --> */}
    </>
  );
};

export default ProgressCard;
