import React from "react";
import ControlButton from "../ControlButton";
import { useSelector } from "react-redux";

const LinkWishlist = () => {
  const count = useSelector(state => state.favoritesReducer.favorites.length);
  return (
    <ControlButton
      icon="bookmark"
      text="Избранное"
      url={`${process.env.PUBLIC_URL}/profile/wishlist`}
      count={count}
    />
  );
};

export default LinkWishlist;
