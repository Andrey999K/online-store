import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FilterInput = ({ value, onBlur, ...attr }) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const handleInput = (value) => {
    value = value.replace(/\D/g, "");
    setInputValue(value);
  };
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);
  return (
    <input
      value={inputValue}
      type="text"
      onChange={event => handleInput(event.target.value)}
      onBlur={onBlur}
      {...attr}
    />
  );
};

FilterInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onBlur: PropTypes.func.isRequired
};

export default FilterInput;
