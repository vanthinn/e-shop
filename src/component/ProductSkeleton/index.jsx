import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton(props) {
  const { count } = props;
  return Array(count)
    .fill(0)
    .map((item) => (
      <div
        key={item}
        className="scroll-smooth flex flex-col justify-between group shadow-lg  h-[400px] border-[1px] cursor-pointer hover:border-cyan-600 "
      >
        <div className="relative ">
          <Skeleton className="w-[100%] h-[260px]" />
        </div>
        <div className="flex flex-col px-2 bg-white z-50">
          <Skeleton count={2} />
          <Skeleton count={1} />
        </div>
        <Skeleton count={1} />
      </div>
    ));
}

ProductSkeleton.propTypes = {};

export default ProductSkeleton;
