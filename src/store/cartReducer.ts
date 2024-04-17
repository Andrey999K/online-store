import { Product } from "../types";

type ProductCart = Product & { count: number };
type ProductsCart = Array<ProductCart>;

type CartState = {
  cart: ProductsCart;
};

type EditCountAction = {
  type: "EDIT_COUNT_IN_CART";
  payload: ProductCart;
};

type Action =
  | {
      type:
        | "ADD_IN_CART"
        | "DELETE_FROM_CART"
        | "DEC_PRODUCT_IN_CART"
        | "CLEAR_CART";
      payload: Product;
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
  let product = action.payload;
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
      if (foundItemIndex > -1)
        products[foundItemIndex].count = (product as ProductCart).count;
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "CLEAR_CART":
      updateCartInLocalStorage([]);
      return { ...state, cart: [] };
    default:
      return state;
  }
};
