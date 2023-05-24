import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { favoritesReducer } from "./favoritesReducer";

const rootReducer = combineReducers({
  cartReducer, favoritesReducer
});

export const store = createStore(rootReducer);
