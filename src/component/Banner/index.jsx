import React from "react";

const img = "https://d-themes.com/react/molla/demo-5/images/page-header-bg.jpg";

function Banner(props) {
  const { title } = props;
  return (
    <div
      className="mt-[60px] h-[150px] flex"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="m-auto">
        <h1 className="text-5xl tracking-[12px] font-normal ">{title}</h1>
        <h4 className="text-2xl text-blue-600 my-3 font-medium">Molla Shop</h4>
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
