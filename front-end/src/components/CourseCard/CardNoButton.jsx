/* eslint-disable react/prop-types */
// import { RiShieldStarLine, RiBookLine, RiTimeFill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";

const CardNoButton = ({
  title,
  name,
  author,
  rating,
  image,
  //   level,
  //   modul,
  //   price,
  //   duration,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center rounded-2xl border-2 w-72 overflow-hidden">
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
            {name}
          </h3>
          <p className="md:text-[10px] text-[8px]">By {author}</p>
        </div>

        {/* <div className="flex justify-between pb-3 text-[10px] px-3">
          <span className="text-center sm:flex sm:text-start items-center gap-1">
            <RiShieldStarLine className="text-darkGrayish w-full sm:w-fit text-center" />
            <p>{level}</p>
          </span>
          <span className="text-center sm:flex sm:text-start items-center gap-1">
            <RiBookLine className="text-darkGrayish w-full sm:w-fit text-center" />
            <p>{modul} Modul</p>
          </span>
          <span className="text-center sm:flex sm:text-start items-center gap-1">
            <RiTimeFill className="text-darkGrayish w-full sm:w-fit text-center" />
            <p>{duration} Menit</p>
          </span>
        </div>
        <div className="pb-3 px-3 text-sm font-semibold">Rp. {price}k</div> */}
      </div>
    </div>
  );
};

export default CardNoButton;
