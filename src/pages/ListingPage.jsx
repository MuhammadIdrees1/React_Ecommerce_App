import React from "react";
import { useData } from "../hooks/useData";
import Card from "../components/common/Card";
import Dropdown from "../components/common/Dropdown";
import { Filters } from "../components/Filters";

const ListingPage = () => {
  const { filteredProducts } = useData();
  // console.log("ListingPage", products);
  return (
    <section className="min-h-screen px-14 text-white pt-28 bg-[#E7E7E3]">
      <div className="bg-[url('assets/banner2.jpg')] pt-28 mb-20 h-96 w-full pl-8 rounded-[3rem]">
        {/* <img src={require("")} alt="" /> */}
        <h2 className="text-2xl font-semibold	">Limited time only</h2>
        <h3 className="font-semibold	text-7xl pt-2">Get 30% off</h3>
        <p className="text-xl	pt-2">
          Sneakers made with your comfort in mind so you
          <br /> can put all of your focus into your next session.
        </p>
      </div>{" "}
      <div className="text-black flex justify-between items-center">
        <div className="">
          <h2 className="font-semibold	text-4xl">Life Style Shoes</h2>
          <p>{filteredProducts.length}</p>
        </div>
        {/* <div className="bg-white self-end rounded-2xl h-5 p-4">
          <Dropdown title={"trending"} option={[]} />
        </div> */}
      </div>
      <div className=" text-black  flex pt-2">
        <Filters />
        <div className="grid grid-cols-3  gap-4">
          {filteredProducts?.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
          {/* <Card data={data}/> */}
        </div>
      </div>
    </section>
  );
};

export default ListingPage;
