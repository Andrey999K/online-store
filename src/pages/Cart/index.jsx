import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsWord from "../../utils/productsWord";
import ListCart from "../../components/ui/ListCart";
import { store } from "../../store";
import Wrapper from "../../components/common/Wrapper";

const Cart = () => {
  let productsCart = useSelector(state => state.cartReducer.cart);
  const productsCount = productsCart.length;
  const dispatch = useDispatch();
  const pricesSum = productsList => {
    return productsList.reduce((sum, product) => sum + product.price * product.count, 0);
  };
  const [sumPrices, setSumPrices] = useState(pricesSum(productsCart));
  const handleClearData = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      productsCart = store.getState().cartReducer.cart;
      setSumPrices(pricesSum(productsCart));
    });
    return () => unsubscribe();
  }, []);
  const showProducts = () => {
    if (productsCount) {
      return (
        <div className="flex flex-col gap-12 pb-16 pt-12 w-full h-full">
          <h2 className="text-3xl">Корзина</h2>
          <div className="flex gap-5 justify-between">
            <ListCart data={productsCart} />
            <div>
              <div className="p-6 flex flex-col gap-2 bg-gray-100">
                <h3 className="text-2xl">Итого</h3>
                <div className="flex justify-between">
                  <span>
                    {productsCount} {productsWord(productsCount)}
                  </span>
                  <span>{sumPrices} ₽</span>
                </div>
                <button className="p-3 bg-sky-500 text-white rounded hover:bg-sky-400 duration-200">
                  Перейти к оформлению
                </button>
                <button
                  onClick={handleClearData}
                  className="p-3 border-solid border-[1px] border-sky-500 text-sky-500 rounded hover:bg-sky-500 hover:text-white duration-200"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <span className="text-2xl">В корзине нет товаров</span>
        <Link
          to="/"
          className="text-xl py-4 px-5 lg:px-8 hover:bg-sky-500 hover:text-white duration-300 border-solid border-[1px] border-sky-500 rounded"
        >
          В каталог
        </Link>
      </>
    );
  };
  return (
    <Wrapper>
      <div className="flex justify-center items-center flex-col gap-5 h-full">{showProducts()}</div>
    </Wrapper>
  );
};

export default Cart;
