import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-8 flex justify-center items-center flex-col gap-5">
      <span className="text-2xl">В корзине нет товаров</span>
      <Link
        to={`${process.env.PUBLIC_URL}`}
        className="text-xl py-4 px-8 hover:bg-sky-500 hover:text-white duration-300 border-solid border-2 border-sky-500 rounded"
      >
        В каталог
      </Link>
    </div>
  );
};

export default Cart;
