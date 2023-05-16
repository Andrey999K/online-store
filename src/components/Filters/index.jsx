import React, { useState } from "react";
import RangeDouble from "../RangeDouble";
import FilterInput from "../FilterInput";
import PropTypes from "prop-types";
import CheckboxList from "../CheckboxList";

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
  const [price, setPrice] = useState(pricesRange);
  const [statuses, setStatuses] = useState([]);

  const filtersStatuses = [
    { name: "Товары по акции", value: "super" },
    { name: "Доступно в рассрочку", value: "installment" }
  ];

  const handleEditCurrentPrice = (value) => {
    setPrice({ min: value[0], max: value[1] });
  };

  const handleFiltrationByStatus = (values) => {
    setStatuses(values);
    handleFiltration(price, values);
    // if (values.length) {
    //   filtration(
    //     products.filter(product => {
    //       if (product.badges.length > 0) {
    //         for (let i = 0; i < product.badges.length; i++) {
    //           if (values.includes(product.badges[i].name)) return product;
    //         }
    //       }
    //       return false;
    //     })
    //   );
    // } else {
    //   filtration(products);
    // }
  };

  const handleFiltration = (prices = price, statusesMass = statuses) => {
    let filteredProducts = products.filter(product => product.price >= prices.min && product.price <= prices.max);
    if (statusesMass.length) {
      filteredProducts = filteredProducts.filter(product => {
        if (product.badges.length > 0) {
          for (let i = 0; i < product.badges.length; i++) {
            if (statusesMass.includes(product.badges[i].name)) return product;
          }
        }
        return false;
      });
    }
    filtration(filteredProducts);
    // products.filter(product => product.price >= value.min && product.price <= value.max);
    // if (values.length) {
    //   filtration(
    //     products.filter(product => {
    //       if (product.badges.length > 0) {
    //         for (let i = 0; i < product.badges.length; i++) {
    //           if (values.includes(product.badges[i].name)) return product;
    //         }
    //       }
    //       return false;
    //     })
    //   );
    // }
  };

  const handleFinalEditPrice = (prices) => {
    if (prices.min < pricesRange.min) prices.min = pricesRange.min;
    if (prices.max > pricesRange.max) prices.max = pricesRange.max;
    if (prices.min > pricesRange.max) prices.min = prices.max;
    if (prices.max < pricesRange.min) prices.max = prices.min;
    setPrice(prices);
    handleFiltration(prices, statuses);
  };

  return (
    <div className="p-5 max-w-[260px] w-full bg-gray-100 flex flex-col gap-4">
      <h3 className="font-medium text-2xl">Фильтры</h3>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-medium text-lg">Цена, ₽</h4>
          <div className="flex justify-between">
            <FilterInput
              value={price.min}
              onBlur={event => handleFinalEditPrice({ ...price, min: Number(event.target.value) })}
              className="w-5/12 rounded"
            />
            <div>—</div>
            <FilterInput
              value={price.max}
              onBlur={event => handleFinalEditPrice({ ...price, max: Number(event.target.value) })}
              className="w-5/12 rounded"
            />
          </div>
          <div>
            <RangeDouble
              MIN={pricesRange.min}
              MAX={pricesRange.max}
              STEP={1}
              currentValues={[price.min, price.max]}
              onChange={handleEditCurrentPrice}
              onFinalChange={handleFiltration}
            />
          </div>
        </div>
        <CheckboxList title="Статус товара" options={filtersStatuses} selectedItems={statuses} onChange={handleFiltrationByStatus} />
      </div>
    </div>
  );
};

Filters.propTypes = {
  filtration: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default Filters;
