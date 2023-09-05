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
      <section className="min-h-screen px-14 text-white  bg-[#E7E7E3]">
        <h1 className="font-bold text-center text-[13.9688rem] text-black">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
        <div className="relative">
          <div className="">
            <img
              src={require("../assets/heroImage1.png")}
              alt="hero"
              className="pt-5 w-[1320px] h-[750px]"
            />
          </div>
          <div className="absolute bottom-10 w-full ">
            <div className="p-6 bg-[#232321] w-fit relative right-20 bottom-12 rounded-b-2xl transform -rotate-90 ">
              <h2>Nike product of the year </h2>
            </div>
            <div className="flex  justify-between  px-6">
              <div className="self-end ml-5   mb-5">
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
                  <img
                    src={require("../assets/heroImage2.png")}
                    alt="hero"
                    className="pt-5"
                  />
                </button>
                <button className="block">
                  <img
                    src={require("../assets/heroImage3.png")}
                    alt="hero"
                    className="pt-5"
                  />
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex pt-16 justify-between ">
          <h2
            className="text-7xl	font-semibold text-black uppercase
"
          >
            Don’t miss out
            <br /> new drops
          </h2>
          <div className="self-end">
            <Button
              onClick={() => navigate("/listingpage")}
              text={"Shop New Drops"}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4">
          {products?.slice(0, 4)?.map((item, index) => {
            return <Card key={item.id} item={item} index={index} />;
          })}
        </div>
      </section>{" "}
    </>
  );
};

export default Hero;
