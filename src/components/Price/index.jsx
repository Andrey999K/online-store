import React from "react";
import PropTypes from "prop-types";
import "./price.scss";

const Price = ({ price, oldPrice }) => {
  if (oldPrice === "") oldPrice = false;
  return (
    <div className="price text-2xl flex flex-col leading-none">
      {oldPrice && (
        <span className="price__old line-through text-sm text-gray-400">{oldPrice}</span>
      )}
      <div className="price__new inline">
        {price} <span className="text-gray-400">₽</span>
      </div>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number
};

Price.defaultProps = {};

export default Price;
