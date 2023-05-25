import React, { useEffect, useState } from "react";
import ControlButton from "../ControlButton";
import { useSelector } from "react-redux";
import { store } from "../../store";

const LinkCart = () => {
  const fetchCart = () => {
    return productsCart.reduce((acc, product) => acc + product.count, 0);
  };
  const productsCart = useSelector(state => state.cartReducer.cart);
  const [count, setCount] = useState(fetchCart());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(fetchCart());
    });
    return () => unsubscribe();
  }, []);
  return (
    <ControlButton
      icon="cart"
      text="Корзина"
      url={`${process.env.PUBLIC_URL}/cart`}
      count={count}
    />
  );
};

export default LinkCart;
