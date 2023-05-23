import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const getProductsFromStorage = () => {
  if (localStorage.getItem("products_in_cart")) {
    return JSON.parse(localStorage.getItem("products_in_cart"));
  }
  return false;
};

const initialState = {
  cart: getProductsFromStorage() || []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_CART":
      console.log(action);
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_FROM_CART":
      return { ...state, cart: [...state.cart].filter(product => product.id !== action.payload.id) };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <React.StrictMode>
        <DevSupport
          ComponentPreviews={ComponentPreviews}
          useInitialHook={useInitial}
        >
          <App />
        </DevSupport>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
