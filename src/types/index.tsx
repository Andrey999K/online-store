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
};

export type Review = {
  name: string;
  text: string;
  rating: number;
  reviewId: number;
  date: string;
};
