import React from "react";
import PropTypes from "prop-types";
import "./price.scss";

const Price = ({ price, oldPrice, discount, hover }) => {
  return (
    <div className={(hover ? "price " : "") + "text-2xl flex flex-col gap-1 leading-none"}>
      {!!discount && (
        <div className="flex gap-2 items-center">
          <span className="price__old line-through text-sm text-gray-400">{oldPrice}</span>
          <div className="text-sm py-1 px-2 text-white bg-red-600 rounded-full">
            <span className={hover ? "group-hover:hidden" : ""}>{`- ${discount} %`}</span>
            {!!hover && <span className="hidden group-hover:block">{`- ${oldPrice - price} ₽`}</span>}
          </div>
        </div>
      )}
      <div className="price__new inline">
        {price} <span className="text-gray-400">₽</span>
      </div>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  discount: PropTypes.number,
  hover: PropTypes.bool
};

Price.defaultProps = {};

export default Price;
