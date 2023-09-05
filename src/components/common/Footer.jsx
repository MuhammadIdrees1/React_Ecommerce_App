import React from "react";

const Footer = () => {
  return (
    <div className="px-14 ">
      <div className="bg-[#4A69E2] w-full h-[29.25rem]  mt-16 flex justify-between items-center   rounded-[48px]  px-16 pb-16">
        <div className="text-white">
          <h3 className="font-semibold text-5xl uppercase">
            Join our KicksPlus
            <br /> Club & get 15% off
          </h3>
          <p className="font-semibold text-xl	pt-4">
            Sign up for free! Join the community.
          </p>
          <div className="pt-8 flex ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address"
              className=" text-[#c6b3cc] h-12 w-[342px] p-4 bg-inherit	border-[#c6b3cc] border-2 rounded-lg"
            />
            <button className="h-12 w-[102px] uppercase	rounded-lg bg-[#232321] ml-1">
              Submit
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={require("../../assets/Logo (1).png")}
            alt="logo"
            className=" h-28"
          />
        </div>
      </div>
      <div className="h-[591px] bg-[#232321] text-white relative bottom-20  rounded-[48px] p-10 ">
        <div className="flex justify-between ">
          <div className="">
            <h4 className="text-4xl	font-semibold text-[#FFA52F]">About us</h4>
            <p className="text-xl	font-semibold pt-1">
              We are the biggest hyperstore in the universe.
              <br /> We got you all cover with our exclusive
              <br /> collections and latest drops.
            </p>
          </div>
          <div className="">
            <h4 className="text-2xl	font-semibold text-[#FFA52F]">Categories</h4>
            <ul className="text-xl	font-semibold pt-4">
              <li>Runners</li>
              <li>Runners</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl	font-semibold text-[#FFA52F]">Company</h4>
            <ul className="text-xl	font-semibold pt-4">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl	font-semibold text-[#FFA52F]">Follow us </h4>
            <ul className="text-xl	font-semibold pt-4">
              {" "}
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>
        </div>{" "}
        <div className=" ">
          <img
            src={require("../../assets/Logo (1).png")}
            alt=""
            className="mt-24 relative top-11"
          />{" "}
          <div className="text-center text-black	text-base relative bottom-2 ">
            <p>
              © All rights reserved | Made with ❤️ by{" "}
              <span className="text-blue-500">
                Visiata Systems International
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
