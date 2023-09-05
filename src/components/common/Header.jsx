import React from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <section className=" w-full px-14 bg-[#E7E7E3] ">
        <div className="bg-white w-full font-semibold	 px-8 py-8 flex justify-between items-center top-10 relative rounded-2xl text-base">
          <div className="flex">
            <a to="#" className="pr-10">
              New Drops🔥
            </a>
            <a to="#" className="pr-10">
              Men
            </a>
            <a to="#">Women</a>
          </div>
          <img
            className="self-center	"
            src={require("../../assets/Group.jpg")}
            alt="logo"
          />
          <div className="flex  items-center">
            <FaSearch className="mr-10" />

            <FaUserAlt className="mr-10" />
            <h5 className="bg-orange-400 w-10 p-2 text-center rounded-full">
              0
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
