import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { paginate } from "./utils/paginate";
import SortOptions from "./components/SortOptions";
import { orderBy } from "lodash";
import api from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "rateProduct", order: "desc" });
  const sortOptions = [
    { field: "rateProduct", text: "По рейтингу" },
    { field: "reviewsCount", text: "По отзывам" },
    { field: "price", text: "По цене" },
    { field: "name", text: "По названию" }
  ];

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
      });
  }, []);

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  const sortedProducts = sortBy
    ? orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
    : filteredProducts;
  const productsCrop = paginate(sortedProducts, pageSize, currentPage);

  return (
    <div className="App">
      <Header search={search} onSearch={handleSearchProduct}/>
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-between">
        <SortOptions items={sortOptions} onSort={handleSort} selectedSort={sortBy} />
        <Pagination itemsCount={filteredProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
      <div className="flex flex-wrap gap-y-5 justify-start max-w-screen-lg mx-auto">
        {productsCrop.map(item => (
          <div key={item.id} className="basis-1/4 flex justify-center">
            <Card
              id={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              listBadges={item.badges}
              reviewsNumber={item.reviewsCount}
              rate={item.rateProduct}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-end">
        <Pagination itemsCount={filteredProducts.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default App;
