/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";
import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardPurchase = ({
  id,
  image,
  title,
  rating,
  description,
  instructor,
  level,
  modules,
  duration,
  order,
}) => {
  return (
    <div className="flex w-full justify-center my-3">
      <div className="flex flex-col justify-center rounded-2xl border-2 w-full max-w-lg overflow-hidden">
        <img
          src={image}
          className=" aspect-video w-full object-cover h-[100px]"
        />

        {/* TEXT KONTEN */}
        <div className="px-3 py-2">
          <div className="flex jusify-between">
            <h3 className="font-semibold md:text-[14px] text-secret-pink">
              {title}
            </h3>
            <div className="ms-auto flex items-center text-xs">
              <IoIosStar className="text-yellow-400 pe-1 min-w-fit" />
              {rating}
            </div>
          </div>
          <h3 className="font-semibold md:text-[12px] text-[11px] pe-3">
            {description}
          </h3>
          <p className="md:text-[10px] text-[8px]">By {instructor}</p>
        </div>

        <div className="flex justify-between pb-3 text-[10px] px-3">
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
        <div className="mt-auto flex">
          {order === "PAID" ? (
            <Link
              to={`/details/${id}`}
              className="text-xs w-auto inline-flex h-8  items-center gap-2 whitespace-nowrap rounded-full bg-darkMagenta px-4 font-medium tracking-wide text-white m-2"
            >
              <IoDiamond />
              {order}
            </Link>
          ) : (
            <Link to={`/payment?courseId=${id}`}>
              <div className="text-xs w-auto inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full bg-pink px-4 font-medium tracking-wide text-white m-2">
                <IoDiamond />
                Waiting for Payment
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPurchase;
