import React, { ChangeEvent, useEffect, useState } from "react";

interface InputProps {
  value: string | number;
  onBlur: (_event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InnerInput: React.FC<InputProps> = ({
  value,
  onBlur,
  className,
  ...attr
}) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const handleInput = (value: string) => {
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

export const Input = React.memo(InnerInput);
