import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsWord from "../../utils/productsWord";
import ListBasket from "../../components/ListBasket";

const Cart = () => {
  const productList = useSelector(state => state.cart);
  const productsCount = productList.length;
  const dispatch = useDispatch();
  const sumPrices = () => {
    let sum = 0;
    for (let i = 0; i < productsCount; i++) sum += productList[i].price;
    return sum;
  };
  const handleClearData = () => {
    if (localStorage.getItem("products_in_cart")) {
      localStorage.removeItem("products_in_cart");
      dispatch({ type: "CLEAR_BASKET" });
    }
  };
  const showProducts = () => {
    if (productsCount) {
      return (
        <div className="flex flex-col gap-12 pb-16 pt-12 w-full">
          <h2 className="text-3xl">Корзина</h2>
          <div className="flex gap-5 justify-between">
            <ListBasket data={productList} />
            <div>
              <div className="p-6 flex flex-col gap-2 bg-gray-100">
                <h3 className="text-2xl">Итого</h3>
                <div className="flex justify-between">
                  <span>{productsCount} {productsWord(productsCount)}</span>
                  <span>{sumPrices()} ₽</span>
                </div>
                <button className="p-3 bg-sky-500 text-white rounded hover:bg-sky-400 duration-200">Перейти к оформлению</button>
                <button
                  onClick={handleClearData}
                  className="p-3 border-solid border-[1px] border-sky-500 text-sky-500 rounded hover:bg-sky-500 hover:text-white duration-200"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
          </div>
        </div>);
    }
    return (
      <>
        <span className="text-2xl">В корзине нет товаров</span>
        <Link
          to={`${process.env.PUBLIC_URL}`}
          className="text-xl py-4 px-8 hover:bg-sky-500 hover:text-white duration-300 border-solid border-[1px] border-sky-500 rounded"
        >
          В каталог
        </Link>
      </>
    );
  };
  return (
    <div className="mx-auto max-w-screen-xl px-8 flex justify-center items-center flex-col gap-5">
      {showProducts()}
    </div>
  );
};

export default Cart;
