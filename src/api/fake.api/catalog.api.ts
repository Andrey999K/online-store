import axios from "axios";
import { Product } from "../../types";

const fetchAll = async (): Promise<Array<Product>> => {
  try {
    const response = await axios.get(`${window.location.href}data.json`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getById = async (productId: number | string): Promise<Product> => {
  try {
    const response = await axios.get(`${window.location.href}data.json`);
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
  getById
};
