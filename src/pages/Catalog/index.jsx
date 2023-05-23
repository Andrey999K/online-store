import React, { useEffect, useState } from "react";
import SortOptions from "../../components/SortOptions";
import ViewSwitch from "../../components/ViewSwitch";
import Pagination from "../../components/Pagination";
import ProductList from "../../components/ProductList";
import Filters from "../../components/Filters";
import api from "../../api";
import { orderBy } from "lodash";
import paginate from "../../utils/paginate";
import Loader from "../../components/Loader";
import productsWord from "../../utils/productsWord";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  // const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "ratingProduct", order: "desc" });
  const [gridOn, setGridOn] = useState(true);
  const sortOptions = [
    { field: "ratingProduct", text: "По рейтингу" },
    { field: "reviewsCount", text: "По отзывам" },
    { field: "price", text: "По цене" },
    { field: "name", text: "По названию" },
    { field: "discount", text: "По скидке" },
    { field: "benefit", text: "По выгоде" }
  ];
  const [filteredProducts, setFiltersProducts] = useState([]);

  // const handleSearchProduct = (productName) => {
  //   setSearch(productName);
  // };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleEditView = (grid) => {
    if (grid) setGridOn(false);
    else setGridOn(true);
  };

  const handleFiltration = (value) => {
    setFiltersProducts(value);
    setCurrentPage(1);
  };

  const showProductList = (productsList, gridOn) => {
    if (products.length) {
      return productsList.length
        ? <ProductList products={productsList} grid={gridOn}/>
        : <h2 className="text-2xl text-center mx-auto mt-8">Подходящих товаров не найдено.</h2>;
    }
    return (
      <div className="mx-auto text-3xl">
        <Loader />
      </div>
    );
  };

  const showFoundProductsCount = () => {
    if (products.length) return <div className="w-full max-w-screen-xl px-8 mx-auto text-3xl mt-5">{`Найдено ${sortedProducts.length} ${productsWord(sortedProducts.length)}.`}</div>;
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
        });
    }, 2000);
  }, []);

  // const searchProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  const sortedProducts = sortBy
    ? orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
    : filteredProducts;
  const productsCrop = paginate(sortedProducts, pageSize, currentPage);
  return (
    <div>
      {showFoundProductsCount()}
      {!!productsCrop.length &&
        <div className="w-full max-w-screen-xl px-8 mx-auto my-6 flex justify-between">
          <SortOptions items={sortOptions} onSort={handleSort} selectedSort={sortBy}/>
          <div className="flex gap-5">
            <ViewSwitch onClick={handleEditView} grid={gridOn}/>
            <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange}
                        currentPage={currentPage}/>
          </div>
        </div>}
      <div className="max-w-screen-xl px-8 flex justify-between mx-auto">
        {showProductList(productsCrop, gridOn)}
        {!!products.length && <Filters filtration={handleFiltration} products={products}/>}
      </div>
      <div className="w-full max-w-screen-xl px-8 mx-auto my-6 flex justify-end">
        <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default Catalog;
