import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import productsWord from "../../utils/productsWord";

const Cart = () => {
  const productList = useSelector(state => state.cart);
  const productsCount = productList.length;

  const sumPrices = () => {
    let sum = 0;
    for (let i = 0; i < productsCount; i++) sum += productList[i].price;
    return sum;
  };
  const showProducts = () => {
    if (productsCount) {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">Корзина</h2>
          <div className="flex gap-5 justify-between">
            <ul className="flex flex-col gap-3 basis-3/4">
              {productList.map(product => (
                <div key={product.id}>{product.name}</div>
              ))}
            </ul>
            <div className="p-6 flex flex-col gap-2 bg-gray-100">
              <h3 className="text-2xl">В корзине</h3>
              <span>{productsCount} {productsWord(productsCount)}</span>
              <span>{sumPrices()} ₽</span>
              <button className="p-3 bg-sky-500 text-white rounded">Перейти к оформлению</button>
            </div>
          </div>
        </div>);
    }
    return (
      <>
        <span className="text-2xl">В корзине нет товаров</span>
        <Link
          to={`${process.env.PUBLIC_URL}`}
          className="text-xl py-4 px-8 hover:bg-sky-500 hover:text-white duration-300 border-solid border-2 border-sky-500 rounded"
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
