import { Icon } from "../Icon";
import React from "react";

export const HeaderCatalog: React.FC = () => {
  return (
    <div>
      <button
        className="flex border-[1px] border-solid border-sky-500 rounded py-2 pl-3 pr-1 text-sky-500
      hover:text-white hover:bg-sky-500 ease-out duration-200"
      >
        <span>Каталог товаров</span>
        <Icon name="menu" className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};
