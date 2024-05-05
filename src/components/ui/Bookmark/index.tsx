import React, { MouseEventHandler } from "react";
import { Icon } from "../Icon";
import { Product } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import {
  addInFavorites,
  deleteFromFavorites,
  getFavorites
} from "../../../store/favorites.slicer.ts";

interface BookmarkProps {
  product: Product;
}

export const FavoritesButton: React.FC<BookmarkProps> = ({ product }) => {
  const massFavorites = useAppSelector(getFavorites());
  const status = massFavorites.some(favorite => favorite.id === product.id);
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    status
      ? dispatch(deleteFromFavorites(product))
      : dispatch(addInFavorites(product));
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
