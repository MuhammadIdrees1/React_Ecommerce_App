import React from "react";
import { useData } from "../hooks/useData";
import Card from "../components/common/Card";
import Dropdown from "../components/common/Dropdown";
import { Filters } from "../components/Filters";

const ListingPage = () => {
  const { filteredProducts } = useData();
  // console.log("ListingPage", products);
  return (
    <section className="min-h-screen px-4 lg:px-14 text-white lg:pt-28 pt-8 bg-[#E7E7E3]">
      <div
        className="bg-[url('assets/banner2.jpg')] bg-no-repeat	 pt-10 md:pt-28 mb-20 md:h-96 h-56  bg-cover pl-8 
      rounded-[3rem] "
      >
        {/* <img src={require("")} alt="" /> */}
        <h2 className="md:text-2xl text-xl font-semibold	">Limited time only</h2>
        <h3 className="font-semibold	md:text-7xl text-3xl pt-2">Get 30% off</h3>
        <p className="md:text-xl text-base	pt-2">
          Sneakers made with your comfort in mind so you
          <span className="md:block">
            {" "}
            can put all of your focus into your next session.
          </span>
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
        <div className="flex flex-wrap  md:justify-evenly justify-center gap-3   mb-4 xl:ml-auto lg:gap-7 lg:justify-start lg:w-4/5 w-full ">
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
