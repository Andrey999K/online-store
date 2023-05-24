import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const listProducts = useSelector(state => state.favoritesReducer.favorites);
  const dispatch = useDispatch();
  const handleClearData = () => {
    dispatch({ type: "CLEAR_FAVORITES" });
  };
  const showProducts = () => {
    if (listProducts.length) {
      return (
        <>
          <h2 className="text-3xl w-full">Избранное</h2>
          <div className="w-full h-full block flex justify-between">
            <ProductList grid={true} products={listProducts} />
            <div className="p-6 max-w-[260px] w-full bg-gray-100 flex flex-col gap-4">
              <button
                onClick={handleClearData}
                className="p-3 border-solid border-[1px] border-sky-500 text-sky-500 rounded hover:bg-sky-500 hover:text-white duration-200"
              >
                Очистить список
              </button>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <span className="text-2xl">В списке пока нет ни одного избранного товара</span>
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
    <div className="pt-8 pb-12 mx-auto max-w-screen-xl px-8 flex justify-center items-center flex-col gap-5 w-full">
      {showProducts()}
    </div>
  );
};

export default Wishlist;
