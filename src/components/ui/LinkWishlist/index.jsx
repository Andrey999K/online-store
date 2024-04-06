import React from "react";
import ControlButton from "../../common/ControlButton";
import { useSelector } from "react-redux";

const LinkWishlist = () => {
  const count = useSelector(state => state.favoritesReducer.favorites.length);
  return <ControlButton icon="bookmark" text="Избранное" url="/profile/wishlist" count={count} />;
};

export default LinkWishlist;
