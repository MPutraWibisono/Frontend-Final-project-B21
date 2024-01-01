/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";

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
      <div className=" overflow-hidden rounded-lg bg-white text-slate-500 shadow-md shadow-slate-200 ">
        {/*  <!-- Image --> */}
        <figure>
          <img src={image} alt="card image" className="aspect-video w-full" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6 h-60 grid content-between">
          <header className="">
            <div className="flex">
              <h3 className="text-xl font-bold text-slate-700 w-4/5">
                {title}
              </h3>
              <div className="ms-auto flex items-center">
                <IoIosStar className="text-yellow-400 pe-1 min-w-fit" />
                {rating}
              </div>
            </div>
            <p className="text-md font-normal text-slate-700 w-4/5">
              {description}
            </p>
            <p className="text-sm text-slate-400"> By {instructor}</p>
          </header>
          <div>
            <div className="flex justify-between text-sm pb-3">
              <p>💡{level}</p>
              <p>🧾{modules} Modul</p>
              <p>⏳{duration}</p>
            </div>

            {/*<!-- Component: Small primary button with leading icon  --> */}
            <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-pinkTone px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-pink focus:bg-darkMagenta focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              {type == "Premium" ? (
                <>
                  {/* <span className="relative only:-mx-4">💎</span> */}
                  <span>{type}</span>
                  <span className=" ms-auto ps-3">{price}</span>
                </>
              ) : (
                <>
                  <span>Mulai Kelas</span>
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