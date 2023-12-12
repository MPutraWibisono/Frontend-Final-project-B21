/* eslint-disable react/prop-types */
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
      <div className="w-full lg:w-2/5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img src={image} alt="card image" className="aspect-video w-full" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <div className="flex">
              <h3 className="text-xl font-bold text-slate-700">{title}</h3>
              <p className="ms-auto">⭐{rating}</p>
            </div>
            <p className="text-md font-normal text-slate-700">{description}</p>
            <p className="text-sm text-slate-400"> By {instructor}</p>
          </header>
          <div className="flex justify-between">
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
      {/*<!-- End Basic blog card --> */}
    </>
  );
};

export default CourseCard;
