import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
