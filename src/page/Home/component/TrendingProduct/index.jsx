import React, { useState, useEffect } from "react";
import productApi from "../../../../api/productApi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ProductItem from "../../../../component/ProductItem";
import ProductSkeleton from "../../../../component/ProductSkeleton";

function TrendingProduct(props) {
  const [category, setcategory] = useState([]);
  const [currentCat, setcurrentCat] = useState("all");
  const [currentProduct, setcurrentProduct] = useState([]);
  const [isloading, setisloading] = useState(true);

  function handleChange(cat) {
    setcurrentCat(cat);
  }

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await productApi.getCategory();
        setcategory(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryList();
  }, []);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        var response;
        if (currentCat === "all") response = await productApi.getAll();
        else response = await productApi.getProductByCategory(currentCat);
        setcurrentProduct(response);
        setisloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, [currentCat]);

  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "16px",
    pagination: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    padding: "1rem",
    arrows: true,
    breakpoints: {
      1280: { perPage: 4 },
      1024: { perPage: 2 },
      736: { perPage: 1 },
      375: { perPage: 1 },
    },
  };

  return (
    <div className=" sm:app-container flex flex-col ">
      <h1 className="text-4xl mt-16">Trendy Products</h1>
      <div className="mt-5 flex justify-center">
        <li
          className={`text-[18px] list-none mx-4 cursor-pointer transitions-theme hover:text-blue-500 ${
            currentCat === "all" ? "text-blue-500" : "hover:scale-x-110 "
          }`}
          onClick={() => setcurrentCat("all")}
        >
          ALL
        </li>
        {category.map((cat) => (
          <li
            key={cat}
            className={`sm:text-[16px] md:text-[18px] list-none mx-4 cursor-pointer transitions-theme uppercase hover:text-blue-500 ${
              currentCat === cat ? "text-blue-500" : "hover:scale-x-110 "
            }`}
            onClick={() => handleChange(cat)}
          >
            {cat}
          </li>
        ))}
      </div>

      <div className="my-10">
        <Splide options={splideOptions}>
          {isloading && (
            <SplideSlide>
              <ProductSkeleton count={1} />
            </SplideSlide>
          )}
          {currentProduct.map((product) => (
            <SplideSlide key={product.id}>
              <ProductItem product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

TrendingProduct.propTypes = {};

export default TrendingProduct;
