import "./App.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { NotFound } from "./pages/NotFound";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./store/hooks.ts";
import { useEffect } from "react";
import { setCart } from "./store/cart.slicer.ts";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCart());
  }, []);
  return (
    <div className="App flex flex-col justify-between">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header />
      <ToastContainer />
      <div className="w-full m-auto h-full grow flex justify-center">
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path={`/product/:productId`} component={ProductPage} />
          <Route path={`/cart`} component={Cart} />
          <Route path={`/profile/wishlist`} component={Wishlist} />
          <Route path={`/404`} component={NotFound} />
          <Redirect from={`/profile`} to="/" />
          <Redirect to={`/404`} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
