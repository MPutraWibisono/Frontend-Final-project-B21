import { useState } from "react";
import PropTypes from "prop-types";
import CourseCard from "../../components/CourseCard/Card";
import kelas from "../../data/kelas.json";
import filtered from "../../data/filter.json";
import { IoSearch } from "react-icons/io5";
// import DropdownBasic from "../../components/Dropdown";

const FilterSection = ({ title, options, handleCheckboxChange }) => (
  <div className="container p-1 rounded" style={{ marginTop: "20px" }}>
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
  const [filterOptions, setFilterOptions] = useState(filtered);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleCheckboxChange = (sectionTitle, optionLabel) => {
    setFilterOptions((prevOptions) =>
      prevOptions.map((section) =>
        section.title === sectionTitle
          ? {
              ...section,
              options: section.options.map((option) =>
                option.label === optionLabel
                  ? { ...option, checked: !option.checked }
                  : sectionTitle === "Filter"
                  ? { ...option, checked: false }
                  : option
              ),
            }
          : section
      )
    );
  };

  // cari by query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // mereset filter
  const resetFilters = () => {
    setFilterOptions(filtered);
  };

  const handleDeleteFilter = () => {
    resetFilters();
  };

  const handleClassAll = () => {
    setSelectedFilter("All");
  };

  const handleClassPremium = () => {
    setSelectedFilter("Premium");
  };

  const handleClassFree = () => {
    setSelectedFilter("Gratis");
  };

  const filteredClasses = kelas.filter((kelas) => {
    // filter by kelas & kategori yg dipilih
    const isCategorySelected = filterOptions[1].options.some(
      (category) => category.checked
    );

    // filter by kategori yg dipilih
    if (isCategorySelected) {
      const selectedCategories = filterOptions[1].options
        .filter((category) => category.checked)
        .map((category) => category.label.toLowerCase());

      return selectedCategories.includes(kelas.title.toLowerCase());
    }

    // filter by kelas Premium/Gratis sesuai selectedFilter
    if (selectedFilter === "All") {
      return true;
    }

    if (selectedFilter === "Premium" && kelas.type === "Premium") {
      return true;
    }

    if (selectedFilter === "Gratis" && kelas.type !== "Premium") {
      return true;
    }

    return false;
  });

  return (
    <div className="bg-paleOrange text-white pt-20">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/4 overflow-hidden rounded text-black mr-4">
          <div className="text-3xl font-bold text-black my-7 text-center lg:text-start">
            Topik Kelas
          </div>
          <div className="container mx-auto p-4 flex flex-col space-y-4 bg-white lg:overflow-visible overflow-y-auto h-32 lg:h-fit rounded-xl                                                                                ">
            {/* hidden md:block */}
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
          {/* <div className="block md:hidden">
          {filterOptions.map((filter) => (
            <DropdownBasic
              key={filter.title}
              {...filter}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
          
        </div> */}
        </div>
        <div className="container mx-auto p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4 mx-auto md:mx-0 md:ms-auto">
            <div className="relative flex items-center me-6">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari Kelas..."
                className="p-3 px-6 pr-14 rounded border border-pinkTone outline-0 text-black rounded-2xl text-sm"
              />
              <div className="absolute right-2 ">
                <IoSearch className="h-6 w-6 text-pinkTone me-3" />
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-4 overflow-x-auto py-3 ps-16">
            <button
              onClick={handleClassAll}
              className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish ${
                selectedFilter === "All"
                  ? "w-64 bg-pink hover:bg-pink"
                  : "w-32 bg-pinkTone hover:bg-pink/60"
              }`}
            >
              <span>All</span>
            </button>
            <button
              onClick={handleClassPremium}
              className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish ${
                selectedFilter === "Premium"
                  ? "w-64 bg-pink hover:bg-pink"
                  : "w-32 bg-pinkTone hover:bg-pink/60"
              }`}
            >
              <span>Kelas Premium</span>
            </button>
            <button
              onClick={handleClassFree}
              className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none text-darkGrayish ${
                selectedFilter === "Gratis"
                  ? "w-64 bg-pink hover:bg-pink"
                  : "w-32 bg-pinkTone hover:bg-pink/60"
              }`}
            >
              <span>Kelas Gratis</span>
            </button>
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-5 p-2">
            {filteredClasses.map((kelas, index) => (
              <div
                className="sm:w-[270px] lg:w-[290px] xl:w-[270px] w-full"
                key={index}
              >
                <CourseCard
                  image={kelas.image}
                  title={kelas.title}
                  rating={kelas.rating}
                  description={kelas.description}
                  instructor={kelas.instructor}
                  level={kelas.level}
                  modules={kelas.modules}
                  duration={kelas.duration}
                  type={kelas.type}
                  price={kelas.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
