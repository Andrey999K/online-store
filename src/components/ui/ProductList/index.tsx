import { CardRow } from "../Card/CardRow";
import { Products } from "../../../types";
import React from "react";
import { useGrid } from "../../../hooks/useGrid.ts";
import { CardGrid } from "../Card/CardGrid";

interface ProductListProps {
  products: Products;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const grid = useGrid();
  const renderList = () => {
    return products.map(product => {
      return grid ? (
        <CardGrid key={product.id} product={product} />
      ) : (
        <CardRow key={product.id} product={product} />
      );
    });
  };
  return (
    <div
      className={
        "flex flex-wrap h-full w-full gap-y-5 lg:justify-start items-stretch" +
        (grid ? " items-start" : " list-layout flex-col")
      }
    >
      {renderList()}
    </div>
  );
};
