import React from "react";
import { useNavigate } from "react-router-dom";

function ItemSearch(props) {
  const navigate = useNavigate();
  const { id, image, title, price } = props;
  return (
    <div
      className="w-full flex px-4 py-2 border-b-[1px] hover:bg-slate-100 cursor-pointer group min-h-[80x]"
      onClick={() => navigate(`/products/idproduct${id}`)}
    >
      <img src={image} className="w-[20%] group-hover:bg-slate-800" />
      <div className="flex flex-col justify-center items-start pl-3">
        <h2 className="text-left">{title}</h2>
        <span className="mt-2 text-base text-blue-600">${price}</span>
      </div>
    </div>
  );
}

ItemSearch.propTypes = {};

export default ItemSearch;
