import React, { useState } from "react";
import RangeDouble from "../RangeDouble";
import FilterInput from "../FilterInput";

const Filters = () => {
  const prices = { min: 15000, max: 360000 };
  const [currentPrice, setCurrentPrice] = useState({ min: 15000, max: 360000 });

  const handleEditCurrentPrice = (value) => {
    setCurrentPrice({ min: value[0], max: value[1] });
  };

  return (
    <div className="p-5 max-w-[260px] bg-gray-200 flex flex-col gap-4">
      <h3 className="font-medium text-2xl">Фильтры</h3>
      <div className="flex justify-between">
        <FilterInput
          value={currentPrice.min}
          onBlur={event => setCurrentPrice({ ...currentPrice, min: Number(event.target.value) })}
          className="w-2/5 rounded"
        />
       <div>—</div>
        <FilterInput
          value={currentPrice.max}
          onBlur={event => setCurrentPrice({ ...currentPrice, max: Number(event.target.value) })}
          className="w-2/5 rounded"
        />
      </div>
      <div>
        <RangeDouble MIN={prices.min} MAX={prices.max} STEP={1} currentValues={[currentPrice.min, currentPrice.max]} onChange={handleEditCurrentPrice} />
      </div>
    </div>
  );
};

export default Filters;
