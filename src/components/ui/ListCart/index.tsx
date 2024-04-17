import React, { useCallback } from "react";
import { CartCard } from "../CartCard";
import { useAppDispatch } from "../../../store/hooks";
import { Product } from "../../../types";

interface ListCartProps {
  data: Array<Product>;
}

export const ListCart: React.FC<ListCartProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const handleDelete = useCallback(
    (product: Product) => {
      dispatch({ type: "DELETE_FROM_CART", payload: product });
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
