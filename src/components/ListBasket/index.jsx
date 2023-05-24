import React from "react";
import Price from "../Price";
import Bookmark from "../Bookmark";
import Icon from "../UI/Icon";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ListBasket = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch({ type: "DELETE_FROM_BASKET", payload: product });
    if (localStorage.getItem("products_in_cart")) {
      let massProducts = JSON.parse(localStorage.getItem("products_in_cart"));
      massProducts = massProducts.filter(item => item.id !== product.id);
      localStorage.setItem("products_in_cart", JSON.stringify(massProducts));
    }
  };
  return (
    <ul className="flex flex-col gap-10 basis-3/4">
      {data.map(product => (
        <div
          key={product.id}
          className="flex gap-8 justify-between w-full p-6"
        >
          <div className="flex gap-5 justify-between">
            <div className="max-w-[12rem] w-full">
              <img
                className="w-full"
                src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${product.id}.jpg`}
                alt="Ноутбук"
              />
            </div>
            <h4 className="text-base max-w-[26rem] w-full">{product.name}</h4>
          </div>
          <div className="flex gap-3">
            <Price price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
            <div className="flex flex-col gap-2">
              <Bookmark status={false} />
              <button
                onClick={() => handleDelete(product)}
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
      ))}
    </ul>
  );
};

ListBasket.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListBasket;
