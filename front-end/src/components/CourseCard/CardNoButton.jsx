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
      <div className="flex flex-col justify-center rounded-2xl border-2 w-72 overflow-hidden shadow-md shadow-slate-300">
        <img
          src={image}
          className=" aspect-video w-full object-cover h-[100px]"
        />

        {/* TEXT KONTEN */}
        <div className="px-3 py-2">
          <div className="flex jusify-between">
            <h3 className="md:text-[14px] font-bold text-slate-700">{title}</h3>
            <div className="ms-auto flex items-center text-xs font-medium">
              <IoIosStar className="text-yellow-400 pe-1 min-w-fit " />
              {rating}
            </div>
          </div>
          <h3 className="text-xs font-medium text-slate-800 pe-3">{name}</h3>
          <p className="pt-0.5 text-[11px] text-slate-500">By {author}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNoButton;
