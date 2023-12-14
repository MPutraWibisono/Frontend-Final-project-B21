import { useState } from "react";
import PropTypes from "prop-types";
import CourseCard from "../../components/CourseCard";
import kelas from "../../data/kelas.json";
import filtered from "../../data/filter.json";
import { IoSearch } from "react-icons/io5";

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
    <div className="bg-paleOrange text-white">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div
          className="lg:w-1/4 overflow-hidden rounded bg-white text-black mr-4"
          style={{ marginTop: "80px" }}
        >
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

        <div className="container mx-auto p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="self-start">
              <div className="text-3xl font-bold text-black mb-2">
                Topik Kelas
              </div>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari kelas..."
                className="p-2 rounded border border-pinkTone text-black pl-8"
              />
              <div className="absolute right-2 ">
                <IoSearch className="h-6 w-6 text-pinkTone" />
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={handleClassAll}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-pinkTone px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-pink/70 hover:text-white focus:bg-pink focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:text-white disabled:shadow-none"
            >
              <span>All</span>
            </button>
            <button
              onClick={handleClassPremium}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-pinkTone px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-pink/70 hover:text-white focus:bg-pink focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:text-white disabled:shadow-none"
            >
              <span>Kelas Premium</span>
            </button>
            <button
              onClick={handleClassFree}
              className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-pinkTone px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-pink/70 hover:text-white focus:bg-pink focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:text-white disabled:shadow-none"
            >
              <span>Kelas Gratis</span>
            </button>
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-5 p-2">
            {filteredClasses.map((kelas, index) => (
              <div className="w-2/5" key={index}>
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
