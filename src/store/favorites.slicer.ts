import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product, Products } from "../types";

type FavoritesState = InitialState<Products>;

const productsInFavorites = "productsInFavorites";

const updateFavoritesInLocalStorage = (favorites: Products) => {
  localStorage.setItem(productsInFavorites, JSON.stringify(favorites));
};

const getProductsFavorites = (): Product[] | null => {
  const favoritesJSON = localStorage.getItem(productsInFavorites);
  return favoritesJSON ? JSON.parse(favoritesJSON) : null;
};

export const setFavorites = createAsyncThunk("favorites/set", async () => {
  return getProductsFavorites() || [];
});

export const addInFavorites = createAsyncThunk(
  "favorites/add",
  async (payload: Product) => {
    return payload;
  }
);

export const deleteInFavorites = createAsyncThunk(
  "favorites/delete",
  async (payload: Product) => {
    return payload;
  }
);

export const clearFavorites = createAsyncThunk("favorites/clear", async () => {
  return;
});

const setPending = (state: FavoritesState) => {
  state.isLoading = true;
  state.error = null;
};
const setRejected = (state: FavoritesState, { payload }: { payload: boolean | null }) => {
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

    builder.addCase(addInFavorites.pending, setPending);
    builder.addCase(
      addInFavorites.fulfilled,
      (state: FavoritesState, { payload }) => {
        const favorites = state.entity;
        if (!favorites.find(product => product.id === payload.id)) {
          favorites.push(payload);
        }
        state.entity = favorites;
        updateFavoritesInLocalStorage(favorites);
      }
    );
    builder.addCase(addInFavorites.rejected, setRejected);

    builder.addCase(deleteInFavorites.pending, setPending);
    builder.addCase(
      deleteInFavorites.fulfilled,
      (state: FavoritesState, { payload }) => {
        const newState = state.entity.filter(
          product => product.id !== payload.id
        );
        state.entity = newState;
        updateFavoritesInLocalStorage(newState);
      }
    );
    builder.addCase(deleteInFavorites.rejected, setRejected);

    builder.addCase(clearFavorites.pending, setPending);
    builder.addCase(clearFavorites.fulfilled, (state: FavoritesState) => {
      state.entity = [];
      updateFavoritesInLocalStorage([]);
    });
    builder.addCase(clearFavorites.rejected, setRejected);
  }
});

const { reducer: favoritesReducer } = favoritesSlice;

type State = {
  favorites: FavoritesState;
};

export const getFavorites = () => (state: State) => state.favorites.entity;

export default favoritesReducer;
