import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { paginate } from "./utils/paginate";
import SortOptions from "./components/SortOptions";
import { orderBy } from "lodash";
import api from "./api";
import ProductList from "./components/ProductList";
import ViewSwitch from "./components/ViewSwitch";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "ratingProduct", order: "desc" });
  const [gridOn, setGridOn] = useState(true);
  const sortOptions = [
    { field: "ratingProduct", text: "По рейтингу" },
    { field: "reviewsCount", text: "По отзывам" },
    { field: "price", text: "По цене" },
    { field: "name", text: "По названию" }
  ];
  const [filteredProducts, setFiltersProducts] = useState([]);

  const handleSearchProduct = (productName) => {
    setSearch(productName);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (field) => {
    if (sortBy.iter === field) setSortBy(prevState => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc" }));
    else setSortBy({ iter: field, order: "asc" });
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
        const data = response.map(item => {
          const reviewsCount = item.reviews.length;
          if (!reviewsCount) return { ...item, reviewsCount, ratingProduct: 0 };
          let sumRating = 0;
          item.reviews.forEach(review => {
            sumRating += review.rating;
          });
          return { ...item, reviewsCount, ratingProduct: Number((sumRating / reviewsCount).toFixed(1)) };
        });
        setProducts(data);
        setFiltersProducts(data);
      });
  }, []);

  const searchProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  const sortedProducts = sortBy
    ? orderBy(searchProducts, [sortBy.iter], [sortBy.order])
    : searchProducts;
  const productsCrop = paginate(sortedProducts, pageSize, currentPage);

  return (
    <div className="App">
      <Header search={search} onSearch={handleSearchProduct}/>
      {!!productsCrop.length &&
      <div className="w-full max-w-screen-xl px-8 mx-auto my-6 flex justify-between">
        <SortOptions items={sortOptions} onSort={handleSort} selectedSort={sortBy}/>
        <div className="flex gap-5">
          <ViewSwitch onClick={handleEditView} grid={gridOn}/>
          <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange}
                      currentPage={currentPage}/>
        </div>
      </div>}
      <div className="max-w-screen-xl px-8 flex justify-between">
        {productsCrop.length
          ? <ProductList products={productsCrop} grid={gridOn}/>
          : <h2 className="text-2xl text-center mx-auto mt-8">Подходящих товаров не найдено.</h2>
        }
        {products.length && <Filters filtration={handleFiltration} products={products}/>}
      </div>
      <div className="w-full max-w-screen-xl px-8 mx-auto my-6 flex justify-end">
        <Pagination itemsCount={sortedProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
