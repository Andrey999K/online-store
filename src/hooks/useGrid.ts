import { useContext } from "react";
import { GridContext } from "@/pages/Catalog";

export const useGrid = () => {
  const gridContext = useContext(GridContext);
  return gridContext ? gridContext.gridOn : true;
};
