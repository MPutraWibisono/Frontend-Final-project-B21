/* eslint-disable react/prop-types */
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

export default FilterSection;
