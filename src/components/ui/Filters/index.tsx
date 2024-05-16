import React, { useEffect, useState } from "react";
import { RangeDouble } from "@/components/common/RangeDouble";
import { Input } from "../Input";
import { SelectionBlock } from "@/components/common/SelectionBlock";
import { InputChangeEvent, PricesRange, Products } from "@/types";
import { filtration } from "@/utils/filtration.ts";
import { minPrice } from "@/utils/minPrice.ts";
import { maxPrice } from "@/utils/maxPrice.ts";

const filtersStatuses = [
  { name: "Товары по акции", value: "super" },
  { name: "Доступно в рассрочку", value: "installment" }
];

const filtersDiscount = [
  { name: "Любой", value: "0" },
  { name: "5% и больше", value: "5" },
  { name: "10% и больше", value: "10" },
  { name: "15% и больше", value: "15" }
];

const filtersRating = [
  { name: "Любой", value: "0" },
  { name: "4,5 и выше", value: "4.5" },
  { name: "4 и выше", value: "4" },
  { name: "3,5 и выше", value: "3.5" },
  { name: "3 и выше", value: "3" }
];

interface FiltersProps {
  products: Products;
  result: (_products: Products) => void;
}

export const Filters: React.FC<FiltersProps> = ({ products, result }) => {
  const pricesRange: PricesRange = {
    min: minPrice(products),
    max: maxPrice(products)
  };
  const [price, setPrice] = useState(pricesRange);
  const [statuses, setStatuses] = useState<Array<string>>([]);
  const [discount, setDiscount] = useState<string>("0");
  const [rating, setRating] = useState<string>("0");

  const handleEditCurrentPrice = (value: [number, number]) => {
    setPrice({ min: value[0], max: value[1] });
  };

  const handleFiltrationByStatus = (statusMass: Array<string>) => {
    setStatuses(statusMass);
  };

  const handleFiltrationByDiscount = (discountValue: string) => {
    setDiscount(discountValue);
  };

  const handleFiltration = (prices: PricesRange = price) => {
    result(filtration(products, prices, statuses, discount, rating));
  };

  const handleFiltrationByRating = (ratingValue: string) => {
    setRating(ratingValue);
  };

  const handleFinalEditPrice = (prices: PricesRange) => {
    if (prices.min < pricesRange.min) prices.min = pricesRange.min;
    if (prices.max > pricesRange.max) prices.max = pricesRange.max;
    if (prices.min > pricesRange.max) prices.min = prices.max;
    if (prices.max < pricesRange.min) prices.max = prices.min;
    setPrice(prices);
    handleFiltration(prices);
  };

  useEffect(() => {
    handleFiltration();
  }, [statuses, discount, rating]);

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
          options={filtersStatuses}
          selectedItems={statuses}
          onChange={handleFiltrationByStatus}
          type="checkbox"
        />
        <SelectionBlock
          title="Со скидкой"
          options={filtersDiscount}
          selectedItems={discount}
          onChange={handleFiltrationByDiscount}
          type="radio"
        />
        <SelectionBlock
          title="Оценка"
          options={filtersRating}
          selectedItems={rating}
          onChange={handleFiltrationByRating}
          type="radio"
        />
      </div>
    </div>
  );
};
