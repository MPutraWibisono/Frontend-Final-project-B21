/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/actions/courseActions";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.course);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const handleChange = (e) => {
    dispatch(getSearch(e.target.value, setErrors, errors));
    setValue(e.target.value);
  };

  const handleEmpty = () => {
    setValue("");
  };

  if (errors.isError) {
    return <h1 className="h-screen w-full">{errors.message}</h1>;
  }

  return (
    <>
      {/*    <!-- Component: Rounded large search input  --> */}
      <div className="relative my-5 lg:ps-16 lg:w-1/2 me-auto">
        <input
          type="text"
          placeholder="Cari kursus terbaik.."
          value={value}
          className="relative w-full h-12 px-6 pr-12 text-sm transition-all border rounded-2xl outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-labelledby="title-9 description-9"
          role="graphics-symbol"
        >
          <title id="title-9">Search icon</title>
          <desc id="description-9">Icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <ul>
          {value && (
            <div className="join join-vertical flex flex-col bg-paleWhite">
              <div className="font-bold join-item p-2">
                Hasil Pencarian :
                <span className="font-medium">
                  {search == "" ? " Tidak Ditemukan" : ""}
                </span>
              </div>
              <div className="flex flex-col divide-y join-item">
                {search.map((item, index) => (
                  <Link
                    to={`/details/${item.id}`}
                    onClick={handleEmpty}
                    key={index}
                    className="text-darkGrayish px-3 py-1 hover:bg-pink"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </ul>
      </div>
      {/*    <!-- End Rounded large search input  --> */}
    </>
  );
};

export default SearchBar;
