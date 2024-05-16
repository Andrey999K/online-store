import { Product } from "@/types";

export const maxPrice = (products: Product[]) => {
  return products.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
};
