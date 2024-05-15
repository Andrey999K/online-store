import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./store/hooks.ts";
import { useEffect } from "react";
import { setCart } from "./store/cart.slicer.ts";
import { setFavorites } from "./store/favorites.slicer.ts";
import { AppRouter } from "./components/ui/AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCart());
    dispatch(setFavorites());
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}
