import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";

const CheckboxList = ({ title, options, selectedItems, onChange }) => {
  const handleInputChange = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      onChange([...selectedItems, value]);
    } else {
      onChange(selectedItems.filter((item) => item !== value));
    }
  };
  return (
    <div>
      <h4 className="font-medium text-lg">{title}</h4>
      <div className="flex flex-col mt-3">
        {options.map(option =>
          <Checkbox
            key={option.value}
            name={option.name}
            value={option.value}
            checked={selectedItems.includes(option.value)}
            onChange={handleInputChange}
            className="w-4 h-4 accent-sky-500 text-white"
          />
        )}
      </div>
    </div>
  );
};

CheckboxList.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxList;
