import { useData } from "../hooks/useData";
import Card from "./common/Card";
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { products } = useData();

  console.log("hero", products);

  let navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen  px-4 lg:px-14 text-white  bg-[#E7E7E3]">
        <h1 className="font-bold text-center text-6xl md:text-7xl lg:text-[150px] text-black ">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
        <div className="relative">
          <div className="">
            <img
              src={require("../assets/heroImage1.png")}
              alt="hero"
              className="pt-5 lg:w-[1320px] lg:h-[750px] h-[375px] w-[710px] md:w-full mx-auto"
            />
          </div>
          <div className="absolute lg:bottom-10 bottom-4  w-full ">
            {/* <div className="p-6 bg-[#232321] w-fit relative right-20 bottom-12 rounded-b-2xl transform -rotate-90 ">
              <h2>Nike product of the year </h2>
            </div> */}
            <h2 className="vertical-text transform rotate-180 text-xs">
              Nike product of the year
            </h2>
            <div className="flex  justify-between  items-end mx-2  md:mx-6 md:mb-5 lg:px-6 ">
              <div className="self-end lg:ml-5   lg:mb-5">
                <h2 className="font-semibold lg:text-7xl text-3xl">
                  NIKE AIR MAX
                </h2>
                <p className="font-semibold lg:text-2xl text-base mt-1 ">
                  Nike introducing the new air max for{" "}
                  <span className="md:block">everyone's comfort</span>
                </p>
                <button className="uppercase font-medium h-12 w-32 mt-3	rounded-md bg-[#4A69E2]">
                  Shop Now
                </button>
              </div>
              <div className="">
                <button className="block">
                  <img
                    src={require("../assets/heroImage2.png")}
                    alt="hero"
                    className="pt-5 w-28 lg:w-full"
                  />
                </button>
                <button className="block">
                  <img
                    src={require("../assets/heroImage3.png")}
                    alt="hero"
                    className="pt-5 w-28 lg:w-full"
                  />
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex lg:pt-16 pt-10 justify-between ">
          <h2
            className="lg:text-7xl text-3xl	font-semibold text-black uppercase
"
          >
            Don’t miss out
            <span className="lg:block"> new drops</span>
          </h2>
          <div className="self-end">
            <Button
              onClick={() => navigate("/listingpage")}
              text={"Shop New Drops"}
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-between md:justify-evenly justify-center gap-3 lg:gap-0 mb-4">
          {products?.slice(0, 4)?.map((item, index) => {
            return <Card key={item.id} item={item} index={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
