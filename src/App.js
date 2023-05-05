import React, { useEffect, useState } from "react";
import Card from "./components/card/card";
import Header from "./components/header/header";
import api from "./api";
import Pagination from "./components/pagination/pagination";
import { paginate } from "./utils/paginate";

function App() {
  const [catalog, setCatalog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [search, setSearch] = useState("");

  const handleSearchProduct = (productName) => {
    setSearch(productName);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    api.catalog.fetchAll()
      .then(data => setCatalog(data));
  }, []);

  const filteredUsers = catalog.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

  const catalogCrop = paginate(filteredUsers, pageSize, currentPage);

  return (
    <div className="App">
      <Header search={search} onSearch={handleSearchProduct}/>
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-end">
        <Pagination itemsCount={catalog.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
      <div className="flex flex-wrap gap-y-5 justify-start max-w-screen-lg mx-auto">
        {catalogCrop.map(item => (
          <div key={item.id} className="basis-1/4 flex justify-center">
            <Card id={item.id}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  listBadges={item.badges}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-screen-lg mx-auto my-6 flex justify-end">
        <Pagination itemsCount={catalog.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default App;
