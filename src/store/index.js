import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { favoritesReducer } from "./favoritesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cartReducer, favoritesReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
