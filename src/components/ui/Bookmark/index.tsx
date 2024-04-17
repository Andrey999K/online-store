import React from "react";
import { Icon } from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../types";

interface BookmarkProps {
  product: Product;
}

export const Bookmark: React.FC<BookmarkProps> = ({ product }) => {
  const massFavorites = useSelector(state => state.favoritesReducer.favorites);
  const status = massFavorites.some(favorite => favorite.id === product.id);
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    status
      ? dispatch({ type: "DELETE_FROM_FAVORITES", payload: product })
      : dispatch({ type: "ADD_IN_FAVORITES", payload: product });
  };
  return (
    <button
      className="cursor-pointer text-gray-400 hover:text-sky-500"
      onClick={handleClick}
    >
      <Icon
        name={status ? "bookmark-fill" : "bookmark"}
        className={(status ? "text-sky-500 " : "") + "w-[22px] h-[22px]"}
      />
    </button>
  );
};
