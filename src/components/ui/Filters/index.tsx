import React, { useCallback, useRef, useState } from "react";
import { RangeDouble } from "../../common/RangeDouble";
import { Input } from "../Input";
import { SelectionBlock } from "../../common/SelectionBlock";
import { InputChangeEvent, PricesRange, Products } from "../../../types";

interface FiltersProps {
  filtration: (products: Products) => void;
  products: Products;
}

export const Filters: React.FC<FiltersProps> = ({ filtration, products }) => {
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

  const pricesRange: PricesRange = { min: minPrice(), max: maxPrice() };
  const [price, setPrice] = useState(pricesRange);
  const [statuses, setStatuses] = useState<Array<string>>([]);
  const [discount, setDiscount] = useState<string>("0");
  const [rating, setRating] = useState<string>("0");

  const filtersStatuses = useRef([
    { name: "Товары по акции", value: "super" },
    { name: "Доступно в рассрочку", value: "installment" }
  ]);

  const filtersDiscount = useRef([
    { name: "Любой", value: "0" },
    { name: "5% и больше", value: "5" },
    { name: "10% и больше", value: "10" },
    { name: "15% и больше", value: "15" }
  ]);

  const filtersRating = useRef([
    { name: "Любой", value: "0" },
    { name: "4,5 и выше", value: "4.5" },
    { name: "4 и выше", value: "4" },
    { name: "3,5 и выше", value: "3.5" },
    { name: "3 и выше", value: "3" }
  ]);

  const handleEditCurrentPrice = (value: [number, number]) => {
    setPrice({ min: value[0], max: value[1] });
  };

  const handleFiltrationByStatus = useCallback(
    (statusMass: Array<string>) => {
      setStatuses(statusMass);
      handleFiltration(price, statusMass);
    },
    [price]
  );

  const handleFiltrationByDiscount = useCallback(
    (discountValue: string) => {
      setDiscount(discountValue);
      handleFiltration(price, statuses, discountValue);
    },
    [price, statuses]
  );

  const handleFiltrationByRating = useCallback(
    (ratingValue: string) => {
      setRating(ratingValue);
      handleFiltration(price, statuses, discount, ratingValue);
    },
    [price, statuses, discount]
  );

  const handleFiltration = (
    prices = price,
    statusesMass = statuses,
    discountValue = discount,
    ratingValue = rating
  ) => {
    let filteredProducts = products.filter(
      product => product.price >= prices.min && product.price <= prices.max
    );
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
    filteredProducts = filteredProducts.filter(
      product => product.discount >= Number(discountValue)
    );
    filteredProducts = filteredProducts.filter(
      product => product.ratingProduct >= Number(ratingValue)
    );
    filtration(filteredProducts);
  };

  const handleFinalEditPrice = useCallback(
    (prices: PricesRange) => {
      if (prices.min < pricesRange.min) prices.min = pricesRange.min;
      if (prices.max > pricesRange.max) prices.max = pricesRange.max;
      if (prices.min > pricesRange.max) prices.min = prices.max;
      if (prices.max < pricesRange.min) prices.max = prices.min;
      setPrice(prices);
      handleFiltration(prices, statuses);
    },
    [pricesRange.min, pricesRange.max, statuses]
  );

  return (
    <div className="p-6 max-w-[300px] w-full bg-gray-100 flex flex-col gap-4">
      <h3 className="font-medium text-2xl">Фильтры</h3>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-medium text-lg">Цена, ₽</h4>
          <div className="flex justify-between">
            <Input
              value={price.min}
              onBlur={(event: InputChangeEvent) =>
                handleFinalEditPrice({
                  ...price,
                  min: Number(event.target.value)
                })
              }
              className="w-5/12 rounded"
            />
            <div>—</div>
            <Input
              value={price.max}
              onBlur={(event: InputChangeEvent) =>
                handleFinalEditPrice({
                  ...price,
                  max: Number(event.target.value)
                })
              }
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
        <SelectionBlock
          title="Cтатус товара"
          options={filtersStatuses.current}
          selectedItems={statuses}
          onChange={handleFiltrationByStatus}
          type="checkbox"
        />
        <SelectionBlock
          title="Со скидкой"
          options={filtersDiscount.current}
          selectedItems={discount}
          onChange={handleFiltrationByDiscount}
          type="radio"
        />
        <SelectionBlock
          title="Оценка"
          options={filtersRating.current}
          selectedItems={rating}
          onChange={handleFiltrationByRating}
          type="radio"
        />
      </div>
    </div>
  );
};
