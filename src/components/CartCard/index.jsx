import React from "react";
import Price from "../Price";
import Bookmark from "../Bookmark";
import Icon from "../UI/Icon";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CartCard = ({ product, onDelete }) => {
  const massFavorites = useSelector(state => state.favoritesReducer.favorites);
  const { id, name, price, oldPrice, discount } = product;
  const favorite = massFavorites.some(favorite => favorite.id === product.id);
  return (
    <div
      key={product.id}
      className="flex gap-8 justify-between w-full p-6"
    >
      <div className="flex gap-5 justify-between">
        <div className="max-w-[12rem] w-full">
          <img
            className="w-full"
            src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${id}.jpg`}
            alt="Ноутбук"
          />
        </div>
        <h4 className="text-base max-w-[26rem] w-full">{name}</h4>
      </div>
      <div className="flex gap-3">
        <Price price={price} oldPrice={oldPrice} discount={discount} />
        <div className="flex flex-col gap-2">
          <Bookmark status={favorite} product={product} />
          <button
            onClick={() => onDelete(product)}
            className="cursor-pointer text-gray-400 hover:text-sky-500"
          >
            <Icon
              className="w-[22px] h-[22px]"
              name="delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default CartCard;
