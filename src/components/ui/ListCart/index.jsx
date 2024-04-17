import { useCallback } from "react";
import PropTypes from "prop-types";
import { CartCard } from "../CartCard/index.js";
import { useAppDispatch } from "../../../store/hooks.js";

export const ListCart = ({ data }) => {
  const dispatch = useAppDispatch();
  const handleDelete = useCallback(
    product => {
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

ListCart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
