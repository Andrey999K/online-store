import React from "react";
import { useGrid } from "../../../hooks/useGrid.ts";

interface PriceProps {
  price: number;
  oldPrice: number;
  discount: number;
  hover?: boolean;
}

const InnerPrice: React.FC<PriceProps> = ({
  price,
  oldPrice,
  discount,
  hover
}) => {
  const grid = useGrid();
  return (
    <div
      className={
        (hover ? "group/price " : "") +
        "text-2xl flex flex-col gap-1 leading-none"
      }
    >
      {!!discount && (
        <div className="flex gap-2 items-center">
          <span className="text-sm line-through text-gray-400 group-hover/price:text-[#5EB3FF]">
            {oldPrice}
          </span>
          <div className="text-sm py-1 px-2 text-white bg-red-500 rounded-full whitespace-nowrap">
            <span
              className={(hover ? "group-hover:hidden" : "") + " block"}
            >{`- ${discount} %`}</span>
            {!!hover && (
              <span className="hidden group-hover:block">{`- ${
                oldPrice - price
              } ₽`}</span>
            )}
          </div>
        </div>
      )}
      <div
        className={`${
          grid ? "" : "text-[26px]"
        } inline group-hover/price:text-[#5EB3FF]`}
      >
        {price}{" "}
        <span className="text-gray-400 group-hover/price:text-[#5EB3FF]">
          ₽
        </span>
      </div>
    </div>
  );
};

export const Price = React.memo(InnerPrice);
