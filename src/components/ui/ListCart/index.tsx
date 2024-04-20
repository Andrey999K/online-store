import React, { useCallback } from "react";
import { CartCard } from "../CartCard";
import { useAppDispatch } from "../../../store/hooks";
import { Product, ProductsCart } from "../../../types";
import { deleteFromCart } from "../../../store/cart.slicer.ts";

interface ListCartProps {
  data: ProductsCart;
}

export const ListCart: React.FC<ListCartProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const handleDelete = useCallback(
    (product: Product) => {
      dispatch(deleteFromCart(product));
    },
    [dispatch]
  );
  return (
    <ul className="flex flex-col gap-10 basis-3/4">
      {data.map(product => (
        <CartCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </ul>
  );
};
