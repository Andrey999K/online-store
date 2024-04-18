import { Rating } from "../Rating";
import { Avatar } from "../Avatar";
import { Review } from "../../../types";
import React from "react";

interface ReviewProps {
  data: Review;
}

export const ReviewBlock: React.FC<ReviewProps> = ({ data }) => {
  const { reviewId, name, rating, text, date } = data;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Avatar
          src={`https://xsgames.co/randomusers/assets/avatars/male/${
            reviewId % 75
          }.jpg`}
        />
        <div>
          <div className="flex gap-3">
            <span>{name}</span>
            <div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className="text-gray-500">{date}</div>
        </div>
      </div>
      <div className="max-w-3xl">{text}</div>
    </div>
  );
};
