import React, { useEffect, useState } from "react";
import ControlButton from "../../common/ControlButton";
import { useSelector } from "react-redux";
import { store } from "../../../store";

const LinkCart = () => {
  let productsCart = useSelector(state => state.cartReducer.cart);
  const productsSum = productsList => {
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
  return <ControlButton icon="cart" text="Корзина" url={`${process.env.PUBLIC_URL}/cart`} count={sumProducts} />;
};

export default LinkCart;
