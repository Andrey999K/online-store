import { Card } from "../Card";
import { Products } from "../../../types";
import React, { useContext } from "react";
import { GridContext } from "../../../pages/Catalog";

interface ProductListProps {
  products: Products;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const gridContext = useContext(GridContext);
  const grid = gridContext ? gridContext.gridOn : true;
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
