import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product, ProductCart, ProductsCart } from "../types";

type CartState = InitialState<ProductsCart>;

const fetchProductsCart = (): ProductsCart => {
  return JSON.parse(localStorage.getItem("products_in_cart") || "[]");
};

export const setCart = createAsyncThunk("productsCart/set", async () => {
  return fetchProductsCart();
});

export const addInCart = createAsyncThunk(
  "cart/add",
  async (payload: Product) => {
    return payload;
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/delete",
  async (payload: Product) => {
    return payload;
  }
);

export const updateCart = createAsyncThunk(
  "cart/update",
  async (payload: ProductCart) => {
    return payload;
  }
);

export const clearCart = createAsyncThunk("cart/clear", async () => {
  return;
});

const setPending = (state: CartState) => {
  state.isLoading = true;
  state.error = null;
};
const setRejected = (state: CartState, { payload }: { payload: any }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState: CartState = {
  entity: [],
  isLoading: false,
  error: null
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setCart.pending, setPending);
    builder.addCase(setCart.fulfilled, (state: CartState, { payload }) => {
      state.entity = payload;
    });
    builder.addCase(setCart.rejected, setRejected);

    builder.addCase(addInCart.pending, setPending);
    builder.addCase(addInCart.fulfilled, (state: CartState, { payload }) => {
      let find = false;
      state.entity = state.entity.map(product => {
        if (!find && product.id === payload.id) {
          find = true;
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      if (!find) {
        state.entity = [...state.entity, { ...payload, count: 1 }];
      }
    });
    builder.addCase(addInCart.rejected, setRejected);

    builder.addCase(deleteFromCart.pending, setPending);
    builder.addCase(
      deleteFromCart.fulfilled,
      (state: CartState, { payload }) => {
        state.entity = state.entity.filter(
          product => product.id !== payload.id
        );
      }
    );
    builder.addCase(deleteFromCart.rejected, setRejected);

    builder.addCase(updateCart.pending, setPending);
    builder.addCase(updateCart.fulfilled, (state: CartState, { payload }) => {
      if (payload.count < 1) {
        state.entity = state.entity.filter(
          product => product.id !== payload.id
        );
      } else {
        state.entity = state.entity.map(product => {
          if (product.id === payload.id) {
            return { ...product, count: payload.count };
          }
          return product;
        });
      }
    });
    builder.addCase(updateCart.rejected, setRejected);

    builder.addCase(clearCart.pending, setPending);
    builder.addCase(clearCart.fulfilled, (state: CartState) => {
      state.entity = [];
    });
    builder.addCase(clearCart.rejected, setRejected);
  }
});

const { reducer: cartReducer } = cartSlice;

type State = {
  cart: CartState;
};

export const getCart = () => (state: State) => state.cart.entity;

export default cartReducer;
