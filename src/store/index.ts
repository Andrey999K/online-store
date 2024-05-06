import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.slicer";
import favoritesReducer from "./favorites.slicer";
import { isProd } from "../utils/isProd";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: !isProd()
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
