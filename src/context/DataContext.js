import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/products";

const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setFilteredProducts(data);
    // console.log("dataCont", data);
  };

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{ products, setFilteredProducts, filteredProducts, setProducts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
export default ContextApi;
