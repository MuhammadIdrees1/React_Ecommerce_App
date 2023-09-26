// sx
import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { fetchData } from "./utils/productApi";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import ListingPage from "./pages/ListingPage";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ContextApi from "./context/DataContext";

function App() {
  return (
    <ContextApi>
      <>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productdetail/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/listingpage" element={<ListingPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </>
    </ContextApi>
  );
}

export default App;
