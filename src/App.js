import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { paginate } from "./utils/paginate";
import SortOptions from "./components/SortOptions";
import { orderBy } from "lodash";
import api from "./api";
import ProductList from "./components/ProductList";
import ViewSwitch from "./components/ViewSwitch";
import Filters from "./components/Filters";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "rateProduct", order: "desc" });
  const [gridOn, setGridOn] = useState(true);
  const sortOptions = [
    { field: "rateProduct", text: "По рейтингу" },
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

  useEffect(() => {
    api.catalog.fetchAll()
      .then(response => {
        const data = response.map(item => {
          const reviewsCount = item.reviews.length;
          if (!reviewsCount) return { ...item, reviewsCount, rateProduct: 0 };
          let sumRate = 0;
          item.reviews.forEach(review => {
            sumRate += review.rate;
          });
          return { ...item, reviewsCount, rateProduct: Number((sumRate / reviewsCount).toFixed(1)) };
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
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-between">
        <SortOptions items={sortOptions} onSort={handleSort} selectedSort={sortBy} />
        <div className="flex gap-5">
          <ViewSwitch onClick={handleEditView} grid={gridOn} />
          <Pagination itemsCount={filteredProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
        </div>
      </div>
      <div className="max-w-screen-lg">
        {products.length && <Filters filtration={setFiltersProducts} products={products}/>}
      </div>
      <ProductList products={productsCrop} grid={gridOn}/>
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-end">
        <Pagination itemsCount={filteredProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default App;
