import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FilterInput = ({ value, onBlur, ...attr }) => {
  const [inputValue, setInputValue] = useState(value.toString());
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);
  return (
    <input
      value={inputValue}
      type="text"
      onChange={event => setInputValue(event.target.value)}
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
