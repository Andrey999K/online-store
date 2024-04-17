import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InnerInput = ({ value, onBlur, className, ...attr }) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const handleInput = value => {
    value = value.replace(/\D/g, "");
    setInputValue(value);
  };
  const classes = (className ? className + " " : "") + "outline-none";
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);
  return (
    <input
      value={inputValue}
      type="text"
      onChange={event => handleInput(event.target.value)}
      onBlur={onBlur}
      className={classes}
      {...attr}
    />
  );
};

InnerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string
};

export const Input = React.memo(InnerInput);
