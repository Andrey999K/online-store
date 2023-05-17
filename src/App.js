import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="App flex flex-col">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header/>
      <div className="my-auto">
        <Switch>
          <Route path="/" component={Catalog}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
