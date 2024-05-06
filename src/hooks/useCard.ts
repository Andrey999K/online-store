import React from "react";
import { Product } from "../types";

type ResultUseCard = Omit<Product, "ratingProduct"> & {
  rating: number;
  reviewsNumber: number;
  handlerLoadImageError: (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => void;
};

export const useCard = (product: Product): ResultUseCard => {
  const handlerLoadImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.classList.add("opacity-0");
    target.parentElement?.classList.add("bg-black/5");
  };

  return {
    ...product,
    rating: product.ratingProduct,
    reviewsNumber: product.reviews.length,
    handlerLoadImageError
  };
};
