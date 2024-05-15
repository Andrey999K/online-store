import { ControlButton } from "@/components/common/ControlButton";
import { LinkWishlist } from "@/components/ui/LinkWishlist";
import { LinkCart } from "@/components/ui/LinkCart";
import React from "react";

export const FooterMobile: React.FC = () => {
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
