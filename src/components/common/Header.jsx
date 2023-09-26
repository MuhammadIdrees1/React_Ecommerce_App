import React from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section className=" w-full px-14 bg-[#E7E7E3] ">
        <div className="bg-white w-full font-semibold	 px-8 py-8 flex justify-between items-center top-10 relative rounded-2xl text-base">
          <div className="flex">
            <Link to="#" className="pr-10">
              New Drops🔥
            </Link>
            <Link to="#" className="pr-10">
              Men
            </Link>
            <Link to="#">Women</Link>
          </div>
          <img
            className="self-center	"
            src={require("../../assets/Group.jpg")}
            alt="logo"
          />
          <div className="flex  items-center">
            <FaSearch className="mr-10" />

            <FaUserAlt className="mr-10" />
            <Link to="/cart">
              <h5 className="bg-orange-400 w-10 p-2 text-center rounded-full">
                0
              </h5>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
