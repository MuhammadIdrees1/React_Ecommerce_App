import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./utils/productApi";
import Header from "./components/common/Header";
import Hero from "./components/Hero";

function App() {
  const [products, setProducts] = useState([]);

  console.log(products);

  return (
    <>
      {/* <Header /> */}
      <Hero />
    </>
  );
}

export default App;
