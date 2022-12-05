import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

function Social(props) {
  return (
    <div className="sm:app-container  grid lg:grid-cols-2 gap-8   ">
      <div className="mt-16">
        <h1 className=" text-3xl font-semibold text-slate-900 mb-2">
          Shop Social
        </h1>
        <p className="text-lg text-slate-400 font-thin">
          Donec nec justo eget felis facilisis fermentum.
        </p>
        <span className="text-lg text-slate-400 font-thin">
          Aliquam porttitor mauris sit amet orci.
        </span>
        <div className=" flex justify-center mt-4   ">
          <FaFacebookF
            className="text-3xl h-[50px] w-[50px] rounded-full p-3 cursor-pointer bg-blue-500 border-[1px] text-white
           hover:bg-white hover:text-blue-500 hover:border-blue-500 "
          />
          <FaInstagram
            className="text-3xl h-[50px] w-[50px] rounded-full p-3 cursor-pointer text-white  border-[1px] bg-gradient-to-r from-[#4a66ef] via-[#a75adb] to-[#e2326c]  mx-8
           hover:bg-none  hover:text-[#e2326c] hover:border-[#e2326c] "
          />
          <FaYoutube
            className="text-3xl h-[50px] w-[50px] rounded-full p-3 cursor-pointer text-white  border-[1px] bg-red-500 
           hover:bg-white hover:text-red-500  hover:border-red-500  "
          />
        </div>
      </div>

      <div className="mt-16">
        <h1 className=" text-3xl font-semibold text-slate-900 mb-2 ">
          Get the Latest Deals
        </h1>
        <p className="text-lg text-slate-400 font-thin">
          and receive <span className="text-blue-500">$20 coupon</span> for
          first shopping
        </p>

        <div className="relative mb-16">
          <input
            className=" mt-10  w-[70%] py-2 pl-6 text-lg border-[1px] border-slate-600 rounded-[50px] outline-none focus:border-blue-500 
            placeholder:text-base"
            type="text"
            placeholder="Type your email..."
          />
          <div className="absolute right-[15%] top-[47%] flex  group h-[45px] cursor-pointer w-[75px] hover:bg-blue-700 rounded-r-[50px] transition-all ease-in-out duration-200">
            <FaArrowRight className="m-auto group-hover:text-white text-xl transition-all ease-in-out duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {};

export default Social;
