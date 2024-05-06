import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../../../layouts/MainLayout";
import { Catalog } from "../../../pages/Catalog";
import { ProductPage } from "../../../pages/ProductPage";
import { Cart } from "../../../pages/Cart";
import { Wishlist } from "../../../pages/Wishlist";
import { NotFound } from "../../../pages/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path={`/product/:productId`} element={<ProductPage />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path={`/profile/wishlist`} element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
