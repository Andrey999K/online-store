import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const ButtonBuy = ({ min, product }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart);
  console.log(data);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_IN_CART", payload: product });
    if (localStorage.getItem("products_in_cart")) {
      const massProduct = JSON.parse(localStorage.getItem("products_in_cart"));
      massProduct.push(product);
      localStorage.setItem("products_in_cart", JSON.stringify(massProduct));
    } else localStorage.setItem("products_in_cart", JSON.stringify([product]));
  };

  return (
    <button
      className={
        (min ? "rounded-full w-[40px]" : " w-full py-0 px-5 rounded-3xl ") +
        " h-[40px] bg-sky-500 flex justify-center gap-2 items-center hover:bg-sky-400 duration-200"
      }
      onClick={handleClick}
      >
      <Icon name="basket" className="w-[24px] h-[24px] text-white" />
      <span
        className={
          (min ? "hidden" : " block") +
          " font-bold text-white button-buy__text whitespace-nowrap"
        }
      >В корзину</span>
    </button>
  );
};

ButtonBuy.propTypes = {
  min: PropTypes.bool,
  product: PropTypes.object.isRequired
};

export default ButtonBuy;
