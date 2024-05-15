import sprite from "../../../img/sprite.svg";
import React from "react";

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "w-[24px] h-[24px]"
}) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);
