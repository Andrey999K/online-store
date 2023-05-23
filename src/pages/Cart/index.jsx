import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsWord from "../../utils/productsWord";
import Price from "../../components/Price";
import Bookmark from "../../components/Bookmark";
import Icon from "../../components/UI/Icon";

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
            <ul className="flex flex-col gap-10 basis-3/4">
              {productList.map(product => (
                <div
                  key={product.id}
                  className="flex gap-8 justify-between w-full p-6"
                >
                  <div className="flex gap-5 justify-between">
                    <div className="max-w-[12rem] w-full">
                      <img
                        className="w-full"
                        src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${product.id}.jpg`}
                        alt="Ноутбук"
                      />
                    </div>
                    <h4 className="text-base max-w-[26rem] w-full">{product.name}</h4>
                  </div>
                  <div className="flex gap-3">
                    <Price price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
                    <div className="flex flex-col gap-2">
                      <Bookmark status={false} />
                      <button className="cursor-pointer text-gray-400 hover:text-sky-500">
                        <Icon
                          className="w-[22px] h-[22px]"
                          name="delete"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
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
