import { Card } from "../Card";
import { Products } from "../../../types";
import React from "react";
import { useGrid } from "../../../hooks/useGrid.ts";

interface ProductListProps {
  products: Products;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const grid = useGrid();
  return (
    <div
      className={
        "flex flex-wrap h-full w-full gap-y-5 lg:justify-start items-stretch" +
        (grid ? " items-start" : " list-layout flex-col")
      }
    >
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
