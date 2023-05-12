import React from "react";
import Icon from "../Icon";
import "./buttonBuy.scss";

const ButtonBuy = () => {
  return (
    <button className="button-buy w-[40px] h-[40px] bg-sky-500 rounded-full flex justify-center gap-2 items-center hover:bg-sky-400">
      <Icon name="basket" className="w-[24px] h-[24px] text-white" />
      <span className="hidden font-bold text-white button-buy__text whitespace-nowrap">В корзину</span>
    </button>
  );
};

ButtonBuy.propTypes = {};

ButtonBuy.defaultProps = {};

export default ButtonBuy;
