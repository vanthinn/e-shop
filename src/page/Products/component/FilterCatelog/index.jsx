import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

function FilterCatelog(props) {
  const { category, listproduct } = props;
  console.log(category, listproduct);
  const [showcatelog, setShowcatelog] = useState(true);
  const [showprice, setShowprice] = useState(true);

  function fiterproduct(category) {
    const products = listproduct.filter(
      (product) => product.category === category
    );
    return products;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-base mb-5">
        <span className="">Filter</span>
        <span className="text-blue-600 cursor-pointer">Clear All</span>
      </div>

      <div className=" flex flex-col text-lg cursor-pointer pb-4 border-b-[1px]">
        <div
          className="flex justify-between text-lg transitions-theme"
          onClick={() => setShowcatelog(!showcatelog)}
        >
          <h1 className="">Category</h1>
          <FaAngleDown
            className={`mr-5 transition-all duration-300 linear ${
              showcatelog ? "" : "rotate-[-90deg]"
            }`}
          />
        </div>
        <div
          className={` font-thin ${
            showcatelog ? "block opacity-100 " : "hidden opacity-0"
          }`}
        >
          <div className="flex justify-between text-base my-2">
            <span>All</span>
            <div className=" mr-5 flex h-[25px] w-[25px] bg-slate-100/95 rounded-[4px]">
              <span className="m-auto text-[14px] text-gray-600/60 ">
                {listproduct.length}
              </span>
            </div>
          </div>
          {category.map((cat) => (
            <div className="flex justify-between text-base my-2">
              <span>{cat}</span>
              <div className="mr-5 flex h-[25px] w-[25px] bg-slate-100/95  rounded-[4px]">
                <span className="m-auto text-[14px] text-slate-500/60 ">
                  {fiterproduct(cat).length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div
          className="flex justify-between text-lg transitions-theme"
          onClick={() => setShowprice(!showprice)}
        >
          <h1 className="">Price</h1>
          <FaAngleDown
            className={`mr-5 transition-all duration-300 linear ${
              showprice ? "" : "rotate-[-90deg]"
            }`}
          />
        </div>
        {showprice && (
          <div className="flex flex-col gap-3 mt-2 text-base font-thin">
            <div className="flex justify-between items-center">
              <span>From </span>
              <input
                type="text"
                className="border-[1px] border-gray-500 pl-2 w-[60%]"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>To </span>
              <input
                type="text"
                className="border-[1px] border-gray-500 pl-2 w-[60%] "
              />
            </div>
            <button
              type="button"
              className=" m-auto text-white bg-blue-500 w-[50%] py-1 mt-2 rounded-[4px] hover:opacity-90"
            >
              Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

FilterCatelog.propTypes = {};

export default FilterCatelog;
