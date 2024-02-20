import React, { useState } from "react";
import Price from "../Price";
import Bookmark from "../Bookmark";
import Icon from "../Icon";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Input from "../Input";
import { Link } from "react-router-dom";

const CartCard = ({ product, onDelete }) => {
  const homepage = process.env.PUBLIC_URL;
  const { id, name, price, oldPrice, discount } = product;
  const [count, setCount] = useState(product.count.toString());
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (Number(count) !== 1) {
      setCount(prevState => (Number(prevState) - 1).toString());
      dispatch({ type: "DEC_PRODUCT_IN_CART", payload: product });
    }
  };
  const handleIncrement = () => {
    setCount(prevState => (Number(prevState) + 1).toString());
    dispatch({ type: "ADD_IN_CART", payload: product });
  };

  const handleBlur = ({ target }) => {
    let value = Number(target.value);
    value = value === 0 ? 1 : value;
    setCount(value);
    dispatch({ type: "EDIT_COUNT_IN_CART", payload: { ...product, count: value } });
  };

  return (
    <div key={product.id} className="flex gap-8 justify-between w-full p-6">
      <div className="flex gap-5 justify-between">
        <div className="max-w-[12rem] w-full">
          <img
            className="w-full"
            src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${id}.jpg`}
            alt="Ноутбук"
          />
        </div>
        <Link to={`${homepage}/product/${id}`}>
          <h4 className="text-base max-w-[26rem] w-full">{name}</h4>
        </Link>
      </div>
      <div>
        <div className="max-w-10 flex justify-center gap-3 font-medium">
          <button disabled={Number(count) === 1} onClick={handleDecrement} className="disabled:text-gray-400 font-bold">
            &ndash;
          </button>
          <Input
            className="max-w-[2rem] border-b-[1px] border-solid border-gray-400 text-center outline-none focus:border-sky-500"
            value={count}
            onBlur={event => handleBlur(event)}
          />
          <button onClick={handleIncrement} className="font-bold">
            +
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <Price price={price} oldPrice={oldPrice} discount={discount} />
        <div className="flex flex-col gap-2">
          <Bookmark product={product} />
          <button onClick={() => onDelete(product)} className="cursor-pointer text-gray-400 hover:text-sky-500">
            <Icon className="w-[22px] h-[22px]" name="delete" />
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
export default React.memo(CartCard);
