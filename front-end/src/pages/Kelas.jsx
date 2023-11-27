import { useState } from "react";
import PropTypes from "prop-types";

const FilterSection = ({ title, options, handleCheckboxChange }) => (
  <div className="container bg-gray-100 p-1 rounded">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    {options.map((option) => (
      <div
        key={option.label}
        className="flex items-center mb-2 bg-white p-2 rounded"
      >
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

  const resetFilters = () => {
    setFilterOptions(initialFilterOptions);
  };

  const handleDeleteFilter = () => {
    // reset filter ke nilai awal
    resetFilters();
  };

  return (
    <>
      <div className="bg-purple-600 text-white">
        <div className="container mx-auto p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-5">Topik Kelas</h2>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => {}}
              className="text-black rounded bg-white px-3 py-1"
            >
              All
            </button>
            <button
              onClick={() => {}}
              className="text-black rounded bg-white px-3 py-1"
            >
              Kelas Premium
            </button>
            <button
              onClick={() => {}}
              className="text-black rounded bg-white px-3 py-1"
            >
              Kelas Gratis
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          {filterOptions.map((filter) => (
            <FilterSection
              key={filter.title}
              {...filter}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
          <div className="mt-5">
            <button
              onClick={handleDeleteFilter}
              className="text-sm font-semibold leading-6 text-red-500"
            >
              Hapus Filter
            </button>
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
