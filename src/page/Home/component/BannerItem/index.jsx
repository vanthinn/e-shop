import React from "react";

function BannerItem({
  background,
  topSuggest,
  title,
  bottomSuggest,
  btnContent,
}) {
  const styleBackground = {
    background: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
  };
  return (
    <div className="h-[200vh] relative items-center" style={styleBackground}>
      <div className="absolute top-[30%] left-[32%] text-center">
        <span className="text-white text-3xl text-light ">{topSuggest}</span>
        <h1 className="text-white text-8xl mb-5"> {title}</h1>
        <span className="text-white text-3xl text-light block">
          {bottomSuggest}
        </span>
        <button
          className=" text-white border-[1px] px-4 py-2 rounded-[100px] mt-8 hover:text-blue-800 hover:bg-white transition ease-in-out duration-500"
          rouded
          outline
        >
          {btnContent}
        </button>
      </div>
    </div>
  );
}

export default BannerItem;
