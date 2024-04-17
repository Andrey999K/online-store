import { useEffect, useState } from "react";
import { ControlButton } from "../../common/ControlButton";
import { store } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import { ProductsCart } from "../../../types";

export const LinkCart = () => {
  let productsCart = useAppSelector(state => state.cartReducer.cart);
  const productsSum = (productsList: ProductsCart) => {
    return productsList.reduce((count, product) => count + product.count, 0);
  };
  const [sumProducts, setSumProducts] = useState(productsSum(productsCart));
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      productsCart = store.getState().cartReducer.cart;
      setSumProducts(productsSum(productsCart));
    });
    return () => unsubscribe();
  }, []);
  return (
    <ControlButton icon="cart" text="Корзина" url="/cart" count={sumProducts} />
  );
};
