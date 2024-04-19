import React, { MouseEventHandler } from "react";
import { Icon } from "../Icon";
import { Product } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import { getFavorites } from "../../../store/favorites.slicer.ts";

interface BookmarkProps {
  product: Product;
}

export const Bookmark: React.FC<BookmarkProps> = ({ product }) => {
  const massFavorites = useAppSelector(getFavorites());
  const status = massFavorites.some(favorite => favorite.id === product.id);
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
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
