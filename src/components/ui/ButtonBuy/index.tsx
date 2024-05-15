import { Icon } from "@/components/common/Icon";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "@/store/hooks.ts";
import { addInCart } from "@/store/cart.slicer.ts";
import { notification } from "@/utils/notification.ts";
import { useGrid } from "@/hooks/useGrid.ts";

interface ButtonBuyProps {
  product: Product;
}

export const ButtonBuy: React.FC<ButtonBuyProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const grid = useGrid();
  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();
    dispatch(addInCart(product));
    notification("success", "Товар добавлен в корзину");
  };
  return (
    <button
      className={
        (grid ? "rounded-full w-[40px]" : " w-full py-0 px-5 rounded-3xl ") +
        " h-[40px] bg-sky-500 flex justify-center gap-2 items-center hover:bg-sky-400"
      }
      onClick={handleClick}
    >
      <Icon name="cart" className="w-[24px] h-[24px] text-white" />
      <span
        className={
          (grid ? "hidden" : " block") +
          " font-bold text-white button-buy__text whitespace-nowrap"
        }
      >
        В корзину
      </span>
    </button>
  );
};
