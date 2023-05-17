import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";

const ButtonBuy = ({ min }) => {
  return (
    <button
      className={
        (min ? "rounded-full w-[40px]" : " w-full py-0 px-5 rounded-3xl ") +
        " h-[40px] bg-sky-500 flex justify-center gap-2 items-center hover:bg-sky-400"
      }
      >
      <Icon name="basket" className="w-[24px] h-[24px] text-white" />
      <span
        className={
          (min ? "hidden" : " block") +
          " font-bold text-white button-buy__text whitespace-nowrap"
        }
      >В корзину</span>
    </button>
  );
};

ButtonBuy.propTypes = {
  min: PropTypes.bool
};

export default ButtonBuy;
