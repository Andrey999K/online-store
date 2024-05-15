import axios from "axios";
import { Product, SortOption } from "@/types";
import { useQuery, UseQueryResult } from "react-query";
import { orderBy } from "lodash";

const fetchAll = async (): Promise<Array<Product>> => {
  try {
    const response = await axios.get(`${window.location.origin}/data.json`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPage = async (
  products: Product[],
  sortBy: SortOption,
  numberPage: number
): Promise<unknown> => {
  const { data } = await axios.get(`${window.location.origin}/data.json`);
  console.log("sortBy", sortBy);
  console.log("numberPage", numberPage);
  console.log(
    sortBy ? orderBy(products, [sortBy.iter], [sortBy.order]) : products
  );
  // console.log(paginate(data, 12, numberPage));
  return data;
};

export const useFetchPage = (
  numberPage: number
): UseQueryResult<Array<Product>, Error> => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchPage(numberPage)
  });
};

const getById = async (productId: number | string): Promise<Product> => {
  try {
    const response = await axios.get(`${window.location.origin}/data.json`);
    return response.data.find(
      (product: Product) => product.id === Number(productId)
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  fetchAll,
  fetchPage,
  getById
};
