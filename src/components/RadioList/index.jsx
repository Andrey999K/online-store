import React from "react";
import PropTypes from "prop-types";
import Radio from "../Radio";

const RadioList = ({ title, options, selectedItems, onChange }) => {
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
      <div className="flex flex-col mt-3 gap-2">
        {options.map(option =>
          <Radio
            key={option.value}
            name={option.name}
            value={option.value}
            checked={selectedItems.includes(option.value)}
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
};

RadioList.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  selectedItems: PropTypes.array,
  onChange: PropTypes.func
};

export default RadioList;
