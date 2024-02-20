import React from "react";
import PropTypes from "prop-types";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

const SelectionBlock = ({ title, options, selectedItems, onChange, type }) => {
  const handleInputChange = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      type === "checkbox" ? onChange([...selectedItems, value]) : onChange(value);
    } else {
      if (type === "checkbox") onChange(selectedItems.filter((item) => item !== value));
    }
  };
  const name = Math.random().toString(36).substr(2, 9);
  return (
    <div>
      <h4 className="font-medium text-lg">{title}</h4>
      <div className="flex flex-col mt-3 gap-2">
        {options.map(option => {
          if (type === "checkbox") {
            return (
              <Checkbox
                key={option.value}
                label={option.name}
                value={option.value}
                checked={selectedItems.includes(option.value)}
                onChange={handleInputChange}
              />
            );
          }
          return (
            <Radio
              key={option.value}
              name={name}
              label={option.name}
              value={option.value}
              checked={Number(selectedItems) === option.value}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
    </div>
  );
};

SelectionBlock.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedItems: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default React.memo(SelectionBlock);
