import { useAppSelector } from "../../../store/hooks";
import { ControlButton } from "../../common/ControlButton";
import React from "react";
import { getFavorites } from "../../../store/favorites.slicer.ts";

export const LinkWishlist: React.FC = () => {
  const count = useAppSelector(getFavorites()).length;
  return (
    <ControlButton
      icon="bookmark"
      text="Избранное"
      url="/profile/wishlist"
      count={count}
    />
  );
};
