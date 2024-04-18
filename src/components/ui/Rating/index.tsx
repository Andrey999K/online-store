import { Icon } from "../Icon";
import React from "react";

interface RatingProps {
  rating: number | string;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <Icon name="star" className="text-sky-500 w-[16px] h-[16px]" />
      <span>{rating}</span>
    </div>
  );
};
