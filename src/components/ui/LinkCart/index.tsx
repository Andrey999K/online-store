import { useEffect, useState } from "react";
import { ControlButton } from "@/components/common/ControlButton";
import { useAppSelector } from "@/store/hooks.ts";
import { ProductsCart } from "@/types";
import { getCart } from "@/store/cart.slicer.ts";

export const LinkCart = () => {
  const productsCart = useAppSelector(getCart());
  const productsSum = (productsList: ProductsCart) => {
    return productsList.reduce((count, product) => count + product.count, 0);
  };
  const [sumProducts, setSumProducts] = useState(productsSum(productsCart));
  useEffect(() => {
    setSumProducts(productsSum(productsCart));
  }, [productsCart]);
  return (
    <ControlButton icon="cart" text="Корзина" url="/cart" count={sumProducts} />
  );
};
