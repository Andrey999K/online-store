import { Card } from "../Card";
import { Product } from "../../../types";
import React from "react";

interface ProductListProps {
  products: Array<Product>;
  grid: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({ products, grid }) => {
  return (
    <div
      className={
        "flex flex-wrap h-full w-full gap-y-5 lg:justify-start items-stretch" +
        (grid ? " items-start" : " list-layout flex-col")
      }
    >
      {products.map(product => (
        <Card key={product.id} product={product} inGrid={grid} />
      ))}
    </div>
  );
};
