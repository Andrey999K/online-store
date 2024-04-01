import React from "react";
import ControlButton from "../../common/ControlButton/index.js";
import LinkWishlist from "../LinkWishlist";
import LinkCart from "../LinkCart";

const FooterMobile = () => {
  return (
    <div className="sticky bottom-0 bg-white z-[9999] shadow-[0_35px_50px_3px_rgba(0,0,0,0.3)] p-5">
      <div className="flex justify-between gap-6">
        <ControlButton icon="user" text="Главная" />
        <LinkCart />
        <LinkWishlist />
        <ControlButton icon="bar-chart" text="Сравнение" />
        <ControlButton icon="user" text="Войти" />
      </div>
    </div>
  );
};

export default FooterMobile;
