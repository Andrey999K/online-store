import React from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App flex flex-col justify-between">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header />
      <ToastContainer />
      <div className="w-full m-auto h-full grow flex justify-center">
        <Switch>
          <Route path={homepage} exact component={Catalog} />
          <Route path={`${homepage}/product/:productId`} component={ProductPage} />
          <Route path={`${homepage}/cart`} component={Cart} />
          <Route path={`${homepage}/profile/wishlist`} component={Wishlist} />
          <Route path={`${homepage}/404`} component={NotFound} />
          <Redirect from={`${homepage}/profile`} to={homepage} />
          <Redirect to={`${homepage}/404`} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
