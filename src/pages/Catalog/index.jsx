import React, { useCallback, useEffect, useRef, useState } from "react";
import SortOptions from "../../components/SortOptions";
import ViewSwitch from "../../components/ViewSwitch";
import Pagination from "../../components/Pagination";
import ProductList from "../../components/ProductList";
import Filters from "../../components/Filters";
import api from "../../api";
import { orderBy } from "lodash";
import paginate from "../../utils/paginate";
import ScreenLoader from "../../components/ScreenLoader";
import productsWord from "../../utils/productsWord";
import Wrapper from "../../components/Wrapper";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  // const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "ratingProduct", order: "desc" });
  const [gridOn, setGridOn] = useState(true);
  const [loading, setLoading] = useState(true);
  const sortOptions = useRef([
    { field: "ratingProduct", text: "По рейтингу" },
    { field: "reviewsCount", text: "По отзывам" },
    { field: "price", text: "По цене" },
    { field: "name", text: "По названию" },
    { field: "discount", text: "По скидке" },
    { field: "benefit", text: "По выгоде" }
  ]);
  const [filteredProducts, setFiltersProducts] = useState([]);
  const timer = useRef(null);

  // const handleSearchProduct = (productName) => {
  //   setSearch(productName);
  // };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = useCallback((value) => {
    setSortBy(value);
    setCurrentPage(1);
  }, []);

  const handleEditView = (grid) => {
    if (grid) setGridOn(false);
    else setGridOn(true);
  };

  const handleFiltration = (value) => {
    setFiltersProducts(value);
    setCurrentPage(1);
  };

  const showProductList = (productsList, gridOn) => {
    if (!products.length || loading) return <ScreenLoader />;
    return productsList.length
      ? (<div className="w-full lg:w-3/4 xl:w-4/5">
        <ProductList products={productsList} grid={gridOn}/>
      </div>)
      : <h2 className="text-2xl text-center mx-auto mt-8">Подходящих товаров не найдено.</h2>;
  };

  const showFoundProductsCount = () => {
    if (products.length) return <div className="w-full text-3xl mt-5">{`Найдено ${sortedProducts.length} ${productsWord(sortedProducts.length)}.`}</div>;
  };

  useEffect(() => {
    setTimeout(() => {
      api.catalog.fetchAll()
        .then(response => {
          const data = response.map(item => {
            const reviewsCount = item.reviews.length;
            let sumRating = 0;
            item.reviews.forEach(review => {
              sumRating += review.rating;
            });
            return {
              ...item,
              benefit: item.oldPrice - item.price,
              reviewsCount,
              ratingProduct: reviewsCount ? (Number((sumRating / reviewsCount).toFixed(1))) : 0
            };
          });
          setProducts(data);
          setFiltersProducts(data);
          setLoading(false);
        });
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [gridOn]);

  // const searchProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  const sortedProducts = sortBy
    ? orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
    : filteredProducts;
  const productsCrop = paginate(sortedProducts, pageSize, currentPage);
  return (
    <div className="w-full flex">
      <Wrapper>
        {showFoundProductsCount()}
        {!!productsCrop.length &&
          <div className="w-full my-6 flex justify-center lg:justify-between">
            <div className="hidden lg:block">
              <SortOptions items={sortOptions.current} onSort={handleSort} selectedSort={sortBy}/>
            </div>
            <div className="flex gap-5 items-center justify-between w-full lg:w-fit">
              <div className="order-1 lg:order-none">
                <ViewSwitch onClick={handleEditView} grid={gridOn}/>
              </div>
              <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange}
                          currentPage={currentPage}/>
            </div>
          </div>}
        <div className={`flex justify-between mx-auto h-full${gridOn ? "" : " w-full"}`}>
          {showProductList(productsCrop, gridOn)}
          {!!products.length && (
            <div className="ml-auto hidden lg:block w-1/4 xl:w-1/5">
              <Filters filtration={handleFiltration} products={products}/>
            </div>
          )}
        </div>
        {!!sortedProducts.length && (
          <div className="w-full my-6 flex justify-center lg:justify-end">
            <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange}
                      currentPage={currentPage}/>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Catalog;
