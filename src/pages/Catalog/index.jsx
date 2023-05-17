import React, { useEffect, useState } from "react";
import SortOptions from "../../components/SortOptions";
import ViewSwitch from "../../components/ViewSwitch";
import Pagination from "../../components/Pagination";
import ProductList from "../../components/ProductList";
import Filters from "../../components/Filters";
import api from "../../api";
import { orderBy } from "lodash";
import { paginate } from "../../utils/paginate";

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

  const handleSort = (field) => {
    if (sortBy.iter === field) setSortBy(prevState => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc" }));
    else setSortBy({ iter: field, order: "asc" });
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

  useEffect(() => {
    api.catalog.fetchAll()
      .then(response => {
        console.log(response);
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
        console.log(data);
        setProducts(data);
        setFiltersProducts(data);
      });
  }, []);

  // const searchProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  console.log(sortBy);
  console.log(orderBy(filteredProducts, [sortBy.iter], [sortBy.order]));
  const sortedProducts = sortBy
    ? orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
    : filteredProducts;
  const productsCrop = paginate(sortedProducts, pageSize, currentPage);
  return (
    <div>
      <div className="w-full max-w-screen-xl px-8 mx-auto text-3xl mt-5">{`Найдено ${sortedProducts.length} товаров.`}</div>
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
        {productsCrop.length
          ? <ProductList products={productsCrop} grid={gridOn}/>
          : <h2 className="text-2xl text-center mx-auto mt-8">Подходящих товаров не найдено.</h2>
        }
        {products.length && <Filters filtration={handleFiltration} products={products}/>}
      </div>
      <div className="w-full max-w-screen-xl px-8 mx-auto my-6 flex justify-end">
        <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default Catalog;
