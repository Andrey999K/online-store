import { PricesRange, Product } from "@/types";

export const filtration = (
  products: Product[],
  prices?: PricesRange,
  statusesMass?: string[],
  discountValue?: string,
  ratingValue?: string
): Product[] => {
  console.log("statusesMass", statusesMass);
  if (products.length) {
    let filteredProducts = prices
      ? products.filter(
          product => product.price >= prices.min && product.price <= prices.max
        )
      : products;
    if (statusesMass?.length) {
      filteredProducts = filteredProducts.filter(product => {
        if (product.badges.length > 0) {
          for (let i = 0; i < product.badges.length; i++) {
            if (statusesMass.includes(product.badges[i].type)) return product;
          }
        }
        return false;
      });
    }
    if (discountValue) {
      filteredProducts = filteredProducts.filter(
        product => product.discount >= Number(discountValue)
      );
    }
    if (ratingValue) {
      filteredProducts = filteredProducts.filter(
        product => product.ratingProduct >= Number(ratingValue)
      );
    }
    return filteredProducts;
  } else {
    return products;
  }
};
