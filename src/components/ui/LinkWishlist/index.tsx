import { useAppSelector } from "../../../store/hooks";
import { ControlButton } from "../../common/ControlButton";
import React from "react";

export const LinkWishlist: React.FC = () => {
  const count = useAppSelector(
    state => state.favoritesReducer.favorites.length
  );
  return (
    <ControlButton
      icon="bookmark"
      text="Избранное"
      url="/profile/wishlist"
      count={count}
    />
  );
};
