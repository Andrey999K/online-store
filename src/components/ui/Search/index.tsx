import { Icon } from "../Icon";
import React from "react";

interface SearchProps {
  search: string;
  placeholder?: string;
  onSearchItem: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  search: value,
  placeholder,
  onSearchItem
}) => {
  return (
    <div className="flex max-h-8 relative w-full max-w-[500px]">
      <input
        value={value}
        type="text"
        placeholder={placeholder || "Поиск по товарам"}
        className="w-full py-1 border-b-[1px] border-b-solid border-b-gray-300 outline-none hover:border-b-sky-500
      focus:border-b-sky-500 pr-14"
        onChange={event => onSearchItem(event.target.value)}
      />
      <button
        className={
          (value.length === 0 ? "hidden " : "") +
          "text-gray-400 hover:text-sky-500 absolute right-7 top-1.5"
        }
        onClick={() => onSearchItem("")}
      >
        <Icon name="clear" className="w-[20px] h-[20px]" />
      </button>
      <button className="text-gray-400 hover:text-sky-500 absolute right-1 top-2">
        <Icon name="search" className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
};
