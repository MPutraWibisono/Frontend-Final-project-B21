import { useState } from "react";
import PropTypes from "prop-types";
// import { SearchIcon } from "@heroicons/react/solid";

const FilterSection = ({ title, options, handleCheckboxChange }) => (
  <div className="container p-1 rounded">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    {options.map((option) => (
      <div key={option.label} className="flex items-center mb-2 p-2 rounded">
        <input
          type="checkbox"
          className="form-checkbox text-blue-500 mr-2"
          id={option.label}
          checked={option.checked}
          onChange={() => handleCheckboxChange(title, option.label)}
        />
        <label htmlFor={option.label} className="text-sm">
          {option.label}
        </label>
      </div>
    ))}
  </div>
);

const Kelas = () => {
  const initialFilterOptions = [
    {
      title: "Filter",
      options: [
        { label: "Paling Baru", checked: false },
        { label: "Paling Populer", checked: false },
        { label: "Promo", checked: false },
      ],
    },
    {
      title: "Kategori",
      options: [
        { label: "UI/UX Design" },
        { label: "Web Development" },
        { label: "Android Development" },
        { label: "Data Science" },
        { label: "Business Intelligence" },
      ],
    },
    {
      title: "Level Kesulitan",
      options: [
        { label: "Semua Level" },
        { label: "Beginner Level" },
        { label: "Intermediate Level 1" },
        { label: "Advance Level" },
      ],
    },
  ];

  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  const handleCheckboxChange = (sectionTitle, optionLabel) => {
    setFilterOptions((prevOptions) =>
      prevOptions.map((section) =>
        section.title === sectionTitle
          ? {
              ...section,
              options: section.options.map((option) =>
                option.label === optionLabel
                  ? { ...option, checked: !option.checked }
                  : option
              ),
            }
          : section
      )
    );
  };

  // const [showAll, setShowAll] = useState(false);

  // // Fungsi untuk  klik pada tombol All
  // const handleClick = () => {
  //   setShowAll(!showAll);
  // };

  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan query pencarian

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Implementasikan logika pencarian sesuai kebutuhan Anda di sini
  };

  const resetFilters = () => {
    setFilterOptions(initialFilterOptions);
  };

  const handleDeleteFilter = () => {
    // reset filter ke nilai awal
    resetFilters();
  };

  return (
    <>
      <div className="bg-white-600 text-white">
        <div className="container mx-auto p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-black mb-2">
                Topik Kelas
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari kelas..."
                className="p-2 rounded border border-gray-300 text-black ml-auto"
              />
            </div>
          </div>

          {/* <SearchIcon className="h-5 w-5 text-gray-500 ml-2" /> */}

          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => {}}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-emerald-50 px-6 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-blue-400 hover:text-blue-600 focus:bg-blue-500 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-700 disabled:bg-blue-500 disabled:text-blue-500 disabled:shadow-none"
            >
              <span>All</span>
            </button>
            <button
              onClick={() => {}}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-emerald-50 px-6 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-blue-400 hover:text-blue-600 focus:bg-blue-500 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-700 disabled:bg-blue-500 disabled:text-blue-500 disabled:shadow-none"
            >
              <span>Kelas Gratis</span>
            </button>
            <button
              onClick={() => {}}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-emerald-50 px-6 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-blue-400 hover:text-blue-600 focus:bg-blue-500 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-700 disabled:bg-blue-500 disabled:text-blue-500 disabled:shadow-none"
            >
              <span>Kelas Premium</span>
            </button>
          </div>

          <div className="bg-pink-100 text-black" style={{ width: "20%" }}>
            <div className="container mx-auto p-4 flex flex-col space-y-4">
              {filterOptions.map((filter) => (
                <FilterSection
                  key={filter.title}
                  {...filter}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}

              <button
                onClick={handleDeleteFilter}
                className="text-sm font-semibold leading-6 text-red-500"
              >
                Hapus Filter
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="card image"
                className="aspect-video w-1/2"
              />
            </figure>

            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-blue-700">Course</h3>
                <p className="text-black">Materi</p>
                <p className="text-black">by...</p>
              </header>
              <p>Title</p>
            </div>

            <div className="flex p-6 pt-0">
              <button className="inline-flex h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Premium</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Kelas;
