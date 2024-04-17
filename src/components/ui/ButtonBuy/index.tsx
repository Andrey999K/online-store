import { Icon } from "../Icon";
import { toast } from "react-toastify";
import { Product } from "../../../types";
import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../../store/hooks.ts";

interface ButtonBuyProps {
  min: boolean;
  product: Product;
}

export const ButtonBuy: React.FC<ButtonBuyProps> = ({ min, product }) => {
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();
    dispatch({ type: "ADD_IN_CART", payload: product });
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };
  return (
    <>
      <button
        className={
          (min ? "rounded-full w-[40px]" : " w-full py-0 px-5 rounded-3xl ") +
          " h-[40px] bg-sky-500 flex justify-center gap-2 items-center hover:bg-sky-400"
        }
        onClick={handleClick}
      >
        <Icon name="cart" className="w-[24px] h-[24px] text-white" />
        <span
          className={
            (min ? "hidden" : " block") +
            " font-bold text-white button-buy__text whitespace-nowrap"
          }
        >
          В корзину
        </span>
      </button>
    </>
  );
};
