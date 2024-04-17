import React from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  badges: Array<{
    id: number;
    name: string;
    text: string;
  }>;
  reviews: Array<Review>;
  ratingProduct: number;
};

export type ProductCart = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  badges: Array<{
    id: number;
    name: string;
    text: string;
  }>;
  count: number;
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
