import React from "react";

function CategoryItem(props) {
  const { vertical, img, title, subTitle, btnContent } = props;
  return (
    <div
      className="flex box-border bg-cover "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative m-auto h-[95%] w-[93%] p-8 border-[4px] cursor-pointer border-gray-300 hover:blur-effect-theme">
        <div
          className={`group absolute left-4 top-0 flex flex-col justify-center items-start w-[100%] h-[100%]
           hover:transition-all hover:duration-300 hover:linear 
           hover:items-center hover:w-[100%] hover:text-center 
           ${vertical ? `text-slate-50 hover:text-zinc-900` : ``}`}
        >
          <h4 className={` ${!vertical ? `text-gray-500` : ``}`}>{subTitle}</h4>
          <h1 className=" w-[240px] text-xl text-left font-semibold py-3 group-hover:w-[100%] group-hover:text-center">
            {title}
          </h1>
          <div className="flex">
            <span className={`${!vertical ? `text-blue-400` : ``}`}>
              {btnContent}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${!vertical ? `text-blue-400` : ``}`}
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {};

export default CategoryItem;
