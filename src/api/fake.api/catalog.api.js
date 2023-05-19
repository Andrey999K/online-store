import axios from "axios";

const fetchAll = async() => {
  try {
    const response = await axios.get(`${process.env.PUBLIC_URL}/data/data.json`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getById = async(productid) => {
  try {
    const response = await axios.get(`${process.env.PUBLIC_URL}/data/data.json`);
    return response.data.find(product => product.id === Number(productid));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  fetchAll,
  getById
};
