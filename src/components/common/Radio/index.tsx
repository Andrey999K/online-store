import React from "react";

interface Radio {
  name: string;
  label: string;
  value: string | number;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<Radio> = ({
  name,
  label,
  value,
  checked,
  onChange
}) => {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        className="relative bg-orange float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-sky-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary checked:after:bg-primary before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity before:bg-sky-500 hover:before:opacity-10"
        type="radio"
        id={String(value)}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label
        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer ml-2"
        htmlFor={String(value)}
      >
        {label}
      </label>
    </div>
  );
};
