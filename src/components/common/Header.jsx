import React from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className=" w-full lg:px-14 px-2 mb-14 bg-[#E7E7E3] ">
        <div className="bg-white w-full font-semibold	 px-8 py-8 hidden sm:flex justify-between items-center top-10 relative rounded-2xl text-base">
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
        <div className="sm:hidden flex justify-between items-center bg-white w-full font-semibold	px-4 py-4 top-10 relative rounded-2xl text-base">
          <img
            className=" w-10"
            src={require("../../assets/Group.jpg")}
            alt="logo"
          />
          <button onClick={() => setIsOpen((prev) => !prev)}>open</button>
        </div>
      </section>
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 transition-all duration-300 bg-white  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 ">
          <img
            className="w-14"
            src={require("../../assets/Group.jpg")}
            alt="logo"
          />
          <button onClick={() => setIsOpen((prev) => !prev)}>close</button>
        </div>
        {/* Sidebar content */}
        <nav className="flex flex-col items-center gap-5 text-xl  px-3 py-8 my-4 border-y border-gray-400">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/listingPage">
            ListingPage
          </Link>
          <Link className="" to="/cart">
            Cart
          </Link>
          <Link className="" href="#">
            Contact
          </Link>
        </nav>
        {/* <div className="flex flex-col items-center">
          <button
            className="bg-white text-black font-bold py-3 px-3 w-11/12 rounded-md mt-4"
            type="button"
          >
            {" "}
            Login / register Book Table
          </button>
          <button
            className="bg-white text-black font-bold py-3 px-3 w-11/12 rounded-md mt-4"
            type="button"
          >
            {" "}
            Book Table
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
