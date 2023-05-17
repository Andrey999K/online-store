import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App flex flex-col">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header/>
      <div className="w-full m-auto h-full">
        <Switch>
          <Route path={homepage} exact component={Catalog}/>
          <Route path={`${homepage}/product/:productId`} component={ProductPage}/>
          <Route path={`${homepage}/404`} component={NotFound} />
          <Redirect to={`${homepage}/404`} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
