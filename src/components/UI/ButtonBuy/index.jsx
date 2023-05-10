import React from "react";
import Icon from "../Icon";

const ButtonBuy = () => {
  return (
    <button className="w-[40px] h-[40px] bg-sky-500 rounded-full flex justify-center items-center hover:bg-sky-400">
      <Icon name="basket" className="w-[24px] h-[24px] text-white" />
    </button>
  );
};

ButtonBuy.propTypes = {};

ButtonBuy.defaultProps = {};

export default ButtonBuy;
