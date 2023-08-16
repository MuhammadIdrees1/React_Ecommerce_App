import React from "react";

const Card = (props) => {
  console.log(props);
  const { item } = props;
  return (
    // w-[19.875rem] h-[26.2rem] bg-red-500 border-8 border-slate-800
    //
    //
    <div className="  flex flex-col justify-between rounded-2xl">
      <div className=" ">
        <img
          src={item.image}
          alt=""
          srcset=""
          className=" border-8 border-white rounded-2xl object-fill h-[20.875rem] w-[302px]"
        />
      </div>{" "}
      <h1 className=" text-2xl text-[#232321] font-semibold">{item.title}</h1>
      <button className="font-medium  text-sm	h-12 w-full bg-[#232321]  rounded-md">
        View Product - <span className="text-[#FFA52F]">$125 ($250)</span>
      </button>
    </div>
  );
};

export default Card;
