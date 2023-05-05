import React from "react";
import PropTypes from "prop-types";

const Price = ({ price, oldPrice }) => {
  if (oldPrice === "") oldPrice = false;
  return (
    <div className="text-2xl hover:text-sky-500">
      {oldPrice && (
        <span className="line-through text-sm text-gray-400">{oldPrice}</span>
      )}
      <div>
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
