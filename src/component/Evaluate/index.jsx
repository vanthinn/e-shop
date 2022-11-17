import React from "react";
import { Rate } from "antd";

function Evaluate(props) {
  const { countRate, rate, isDisabled } = props;
  return (
    <div className="mb-4">
      <div className="">
        <Rate
          defaultValue={rate}
          disabled={isDisabled}
          className="text-[14px]"
        />
        <span className="ml-3 text-[13  px] text-gray-400">({countRate})</span>
      </div>
    </div>
  );
}

Evaluate.propTypes = {};

export default Evaluate;
