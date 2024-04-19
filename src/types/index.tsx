import React from "react";

export type Badge = {
  id: number;
  name: string;
  text: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  badges: Array<Badge>;
  reviews: Array<Review>;
  ratingProduct: number;
};

export type Review = {
  name: string;
  text: string;
  rating: number;
  reviewId: number;
  date: string;
};

export type PricesRange = {
  min: number;
  max: number;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface HeaderProps {
  navItems: Array<{ id: number; text: string }>;
  city: string;
  phone: string;
}

export type ProductCart = Product & { count: number };
export type ProductsCart = Array<ProductCart>;

export type SortOption = { iter: string; order: "asc" | "desc" };

export type SetState<T> = (value: ((prevState: T) => T) | T) => void;

export type Products = Array<Product>;

export type InitialState<T> = {
  entity: T;
  isLoading: boolean;
  error: boolean | null;
};
