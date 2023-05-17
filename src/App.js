import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App flex flex-col">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header/>
      <div className="my-auto">
        <Switch>
          <Route path={process.env.PUBLIC_URL} exact component={Catalog}/>
          <Route path={`${process.env.PUBLIC_URL}/404`} component={NotFound} />
          <Redirect to={`${process.env.PUBLIC_URL}/404`} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
