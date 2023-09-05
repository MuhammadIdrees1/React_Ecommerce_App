import React from "react";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigate = useNavigate();

  const { item } = props;
  return (
    <div className="max-w-[297.25px]  flex flex-col justify-between   mt-8 ">
      <div className="border-8 border-white rounded-3xl  relative shadow-sm ">
        <img
          src={(item.image = require("../../assets/Rectangle 5.jpg"))}
          alt=""
          className=" object-fill rounded-2xl  h-[17.875rem] w-[302px]"
        />
        <div className="h-9  w-14 p-2 bg-blue-600 text-white absolute text-sm font-semibold	  border-none rounded-tl-xl rounded-ee-3xl top-0">
          <p className="	text-center    self-center align-middle ">{"new"}</p>
        </div>
      </div>{" "}
      <div className="">
        <h1 className="mt-4 text-2xl text-[#232321] font-semibold">
          {item.title.slice(0, 35)}...
        </h1>

        <button
          onClick={() => (
            navigate(`/productdetail/${item.id}`),
            window.scroll({
              top: 0,
              left: 0,
            })
          )}
          className="font-medium  mt-4 text-white text-sm	h-12 w-full bg-[#232321]  rounded-md"
        >
          View Product - <span className="text-[#FFA52F]">${item.price}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
