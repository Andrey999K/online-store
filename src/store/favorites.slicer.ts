import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product, Products } from "../types";

type FavoritesState = InitialState<Products>;

const getProductsFavorites = (): Product[] | null => {
  const favoritesJSON = localStorage.getItem("products_in_favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : null;
};

export const setFavorites = createAsyncThunk("favorites/set", async () => {
  return getProductsFavorites() || [];
});

const setPending = (state: FavoritesState) => {
  state.isLoading = true;
  state.error = null;
};
const setRejected = (state: FavoritesState, { payload }: { payload: any }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState: FavoritesState = {
  entity: [],
  isLoading: false,
  error: null
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFavorites.pending, setPending);
    builder.addCase(
      setFavorites.fulfilled,
      (state: FavoritesState, { payload }) => {
        state.entity = payload;
      }
    );
    builder.addCase(setFavorites.rejected, setRejected);
  }
});

const { reducer: favoritesReducer } = favoritesSlice;

type State = {
  favorites: FavoritesState;
};

export const getFavorites = () => (state: State) => state.favorites.entity;

export default favoritesReducer;
