import React from "react";
import PropTypes from "prop-types";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

const RadioList = ({ title, options, selectedItems, onChange, type }) => {
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
      <div className="flex flex-col mt-3 gap-1">
        {options.map(option => {
          if (type === "checkbox") {
            return (
              <Checkbox
                key={option.value}
                name={option.name}
                value={option.value}
                checked={selectedItems.includes(option.value)}
                onChange={handleInputChange}
              />
            );
          }
          return (
            <Radio
              key={option.value}
              name={option.name}
              value={option.value}
              checked={selectedItems.includes(option.value)}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
    </div>
  );
};

RadioList.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default RadioList;
