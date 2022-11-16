import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
const brands = [
  "https://d-themes.com/react/molla/demo-5/images/brands/1.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/2.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/3.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/4.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/5.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/6.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/7.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/8.png",
  "https://d-themes.com/react/molla/demo-5/images/brands/9.png",
];

function Brand(props) {
  const splideOptions = {
    perPage: 7,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "12px",
    pagination: false,
    padding: "1rem",
    arrows: false,
    breakpoints: {
      1200: { perPage: 6 },
      991: { perPage: 4 },
      768: { perPage: 3 },
      500: { perPage: 2 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="app-container">
      <Splide options={splideOptions}>
        {brands.map((brand, index) => (
          <SplideSlide key={index} className="overflow-hidden">
            <div className="flex justify-center items-center border-[2px] border-[#e0dcdc] h-[100px]">
              <img className="w-[50%] h-[50%]" src={brand} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

Brand.propTypes = {};

export default Brand;
