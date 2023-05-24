const getProductsCart = () => {
  if (localStorage.getItem("products_in_cart")) {
    return JSON.parse(localStorage.getItem("products_in_cart"));
  }
  return false;
};

const initialState = {
  cart: getProductsCart() || []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_CART":
      if (localStorage.getItem("products_in_cart")) {
        const massProduct = JSON.parse(localStorage.getItem("products_in_cart"));
        massProduct.push(action.payload);
        localStorage.setItem("products_in_cart", JSON.stringify(massProduct));
      } else localStorage.setItem("products_in_cart", JSON.stringify([action.payload]));
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_FROM_CART":
      if (localStorage.getItem("products_in_cart")) {
        let massProducts = JSON.parse(localStorage.getItem("products_in_cart"));
        massProducts = massProducts.filter(item => item.id !== action.payload.id);
        localStorage.setItem("products_in_cart", JSON.stringify(massProducts));
      }
      return { ...state, cart: [...state.cart].filter(product => product.id !== action.payload.id) };
    case "CLEAR_CART":
      if (localStorage.getItem("products_in_cart")) {
        localStorage.removeItem("products_in_cart");
      }
      return { ...state, cart: [] };
    default:
      return state;
  }
};
