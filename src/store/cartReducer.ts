import { ProductCart, ProductsCart } from "../types";

type CartState = {
  cart: ProductsCart;
};

type Action = {
  type:
    | "ADD_IN_CART"
    | "DELETE_FROM_CART"
    | "DEC_PRODUCT_IN_CART"
    | "EDIT_COUNT_IN_CART"
    | "CLEAR_CART";
  payload: ProductCart;
};

const fetchProductsCart = (): ProductsCart => {
  return JSON.parse(localStorage.getItem("products_in_cart") || "[]");
};

const initialState: CartState = {
  cart: fetchProductsCart()
};

const updateCartInLocalStorage = (cart: ProductsCart) => {
  localStorage.setItem("products_in_cart", JSON.stringify(cart));
};

export const cartReducer = (
  state: CartState = initialState,
  action: Action
): CartState => {
  const product = action.payload;
  let products = state.cart;
  let foundItemIndex = -1;
  switch (action.type) {
    case "ADD_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count += 1;
      else products.push({ ...product, count: 1 });
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "DELETE_FROM_CART":
      products = products.filter(item => item.id !== action.payload.id);
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "DEC_PRODUCT_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count -= 1;
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "EDIT_COUNT_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count = product.count;
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "CLEAR_CART":
      updateCartInLocalStorage([]);
      return { ...state, cart: [] };
    default:
      return state;
  }
};
