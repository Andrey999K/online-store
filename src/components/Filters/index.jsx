import React, { useState } from "react";
import RangeDouble from "../RangeDouble";
import FilterInput from "../FilterInput";
import PropTypes from "prop-types";

const Filters = ({ filtration, products }) => {
  const minPrice = () => {
    return products.reduce((min, product) => {
      return product.price < min ? product.price : min;
    }, Infinity);
  };

  const maxPrice = () => {
    return products.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
  };

  const pricesRange = { min: minPrice(), max: maxPrice() };

  const [currentPrice, setCurrentPrice] = useState(pricesRange);

  const handleEditCurrentPrice = (value) => {
    setCurrentPrice({ min: value[0], max: value[1] });
  };

  const filtrationProductList = (param, value) => {
    filtration(products.filter(product => product.price >= value.min && product.price <= value.max));
  };

  const handleFinalEditPrice = (prices) => {
    if (prices.min < pricesRange.min) prices.min = pricesRange.min;
    if (prices.max > pricesRange.max) prices.max = pricesRange.max;
    setCurrentPrice(prices);
    filtrationProductList("price", prices);
  };

  return (
    <div className="p-5 max-w-[260px] w-full bg-gray-100 flex flex-col gap-4">
      <h3 className="font-medium text-2xl">Фильтры</h3>
      <div className="flex justify-between">
        <FilterInput
          value={currentPrice.min}
          onBlur={event => handleFinalEditPrice({ ...currentPrice, min: Number(event.target.value) })}
          className="w-5/12 rounded"
        />
       <div>—</div>
        <FilterInput
          value={currentPrice.max}
          onBlur={event => handleFinalEditPrice({ ...currentPrice, max: Number(event.target.value) })}
          className="w-5/12 rounded"
        />
      </div>
      <div>
        <RangeDouble
          MIN={pricesRange.min}
          MAX={pricesRange.max}
          STEP={1}
          currentValues={[currentPrice.min, currentPrice.max]}
          onChange={handleEditCurrentPrice}
          onFinalChange={filtrationProductList}
        />
      </div>
    </div>
  );
};

Filters.propTypes = {
  filtration: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default Filters;
