import { Product, ProductCart, ProductsCart } from "../types";

type CartState = {
  cart: ProductsCart;
};

type EditCountAction = {
  type: "EDIT_COUNT_IN_CART";
  payload: ProductCart;
};

type Action =
  | {
      type: "ADD_IN_CART" | "DELETE_FROM_CART" | "DEC_PRODUCT_IN_CART";
      payload: Product;
    }
  | {
      type: "CLEAR_CART";
    }
  | EditCountAction;

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
  let product = "payload" in action ? action.payload : null;
  let products = state.cart;
  let foundItemIndex = -1;
  switch (action.type) {
    case "ADD_IN_CART":
      if (product) {
        foundItemIndex = products.findIndex(item => item.id === product.id);
        if (foundItemIndex > -1) products[foundItemIndex].count += 1;
        else products.push({ ...product, count: 1 });
        updateCartInLocalStorage(products);
        return { ...state, cart: products };
      }
      return state;
    case "DELETE_FROM_CART":
      if (product) {
        products = products.filter(item => item.id !== action.payload!.id);
        updateCartInLocalStorage(products);
        return { ...state, cart: products };
      }
      return state;
    case "DEC_PRODUCT_IN_CART":
      if (product) {
        foundItemIndex = products.findIndex(item => item.id === product.id);
        if (foundItemIndex > -1) products[foundItemIndex].count -= 1;
        updateCartInLocalStorage(products);
        return { ...state, cart: products };
      }
      return state;
    case "EDIT_COUNT_IN_CART":
      if (product) {
        foundItemIndex = products.findIndex(item => item.id === product.id);
        if (foundItemIndex > -1)
          products[foundItemIndex].count = (product as ProductCart).count;
        updateCartInLocalStorage(products);
        return { ...state, cart: products };
      }
      return state;
    case "CLEAR_CART":
      updateCartInLocalStorage([]);
      return { ...state, cart: [] };
    default:
      return state;
  }
};
