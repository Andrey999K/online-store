import { Product } from "@/types";

export const minPrice = (products: Product[]) => {
  return products.reduce((min, product) => {
    return product.price < min ? product.price : min;
  }, Infinity);
};
