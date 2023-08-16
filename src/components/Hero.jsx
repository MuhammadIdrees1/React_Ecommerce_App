import React, { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import Card from "./common/Card";
const Hero = () => {
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    allProducts();
  }, []);

  return (
    <>
      <section className="min-h-screen relative  px-14 text-white  bg-[#E7E7E3]">
        <h1 className="font-bold  text-center  text-[13.9688rem] text-black">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
        <img src="assets/heroImage1.png" alt="hero" className="pt-5" />
        <div className="flex justify-between absolute top-96  mx-6">
          <div className="self-end ml-5 mb-5">
            <h2 className="font-semibold text-7xl">NIKE AIR MAX</h2>
            <p className="font-semibold text-2xl mt-1">
              Nike introducing the new air max for <br /> everyone's comfort
            </p>
            <button className="uppercase font-medium h-12 w-32 mt-3	rounded-md bg-[#4A69E2]">
              Shop Now
            </button>
          </div>
          <div className="">
            <button className="block">
              <img src="assets/heroImage2.png" alt="hero" className="pt-5" />
            </button>
            <button className="block">
              <img src="assets/heroImage3.png" alt="hero" className="pt-5" />
            </button>
          </div>
        </div>{" "}
        <div className="grid grid-cols-4 gap-4">
          {products.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
          {/* <Card data={data}/> */}
        </div>
      </section>{" "}
    </>
  );
};

export default Hero;
