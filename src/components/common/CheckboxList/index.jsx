import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/index.js";

const CheckboxList = ({ title, options, selectedItems, onChange }) => {
  const handleInputChange = event => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      onChange([...selectedItems, value]);
    } else {
      onChange(selectedItems.filter(item => item !== value));
    }
  };
  return (
    <div>
      <h4 className="font-medium text-lg">{title}</h4>
      <div className="flex flex-col mt-3 gap-1">
        {options.map(option => (
          <Checkbox
            key={option.value}
            label={option.name}
            value={option.value}
            checked={selectedItems.includes(option.value)}
            onChange={handleInputChange}
          />
        ))}
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
