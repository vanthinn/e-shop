import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import Evaluate from "../../component/Evaluate";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ProductItem from "../../component/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../app/CartSlice";
import toast from "react-hot-toast";
import ProductSkeleton from "../../component/ProductSkeleton";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const { idproduct } = useParams();
  const islogin = useSelector((state) => state.auth.isLogin);
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [countProduct, setCountProduct] = useState(1);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await productApi.getProduct(idproduct);
      setProduct(response);
    };
    fetchProduct();
  }, [idproduct]);

  useEffect(() => {
    setisloading(true);
    try {
      const fetchProductList = async () => {
        const response = await productApi.getProductByCategory(
          product.category
        );
        const list = response.filter((pr) => pr.id != idproduct);
        setisloading(false);
        setProductList(list);
      };
      fetchProductList();
    } catch (error) {}
  }, [product]);

  function handleAddItem() {
    const action = {
      ...product,
      cartQuantity: countProduct,
    };
    dispatch(addItemToCart(action));
  }

  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "16px",
    pagination: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    lazyLoad: true,
    padding: "1rem",
    arrows: true,
    breakpoints: {
      1280: { perPage: 4 },
      1024: { perPage: 2 },
      736: { perPage: 1 },
    },
  };
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 h-[60px] bg-[#333] z-[100]"></div>
      <div className="app-container mt-[60px] md:grid grid-cols-2 gap-8 ">
        <div className="flex relative justify-center">
          <img
            className="mg-auto px-8 py-8 sm:min-h-[350px] md:min-h-[500px]"
            src={product.image}
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 p-1 absolute md:bottom-2 sm:right-0 sm:bottom-0 md:right-2 lg:bottom-[3%] lg:right-[7%] rounded-md text-slate-400 cursor-pointer bg-slate-200 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </div>

        <div className="mt-10 flex flex-col items-start justify-start">
          <h1 className="text-2xl mb-3 text-left">{product.title}</h1>
          <Evaluate rate={4} countRate={product.rating?.count} isDisabled />

          <span className="text-2xl text-blue-500">${product.price}</span>
          <p className="text-left text-slate-400 font-thin mt-2">
            {product.description}
          </p>
          <div className="my-6 border-[1px] border-slate-700 text-xl">
            <span
              className="cursor-pointer ml-2"
              onClick={() =>
                countProduct === 1
                  ? setCountProduct(1)
                  : setCountProduct(countProduct - 1)
              }
            >
              -
            </span>
            <span className="px-6 text-lg leading-5">{countProduct}</span>
            <span
              className="cursor-pointer mr-2"
              onClick={() => setCountProduct(countProduct + 1)}
            >
              +
            </span>
          </div>

          <div className=" mb-9">
            <button
              type="button"
              className="text-lg font-semibold text-blue-600  hover:bg-blue-600 hover:text-white px-3 py-2 border-[1px] border-blue-600 
              rounded-md transitions-theme"
              onClick={() =>
                islogin ? handleAddItem(product) : toast.error("Login required")
              }
            >
              ADD TO CART
            </button>
            <button
              type="button"
              disabled
              className=" ml-5 text-lg font-semibold text-white bg-blue-600  hover:bg-white hover:text-blue-600 px-3 py-2 border-[1px] border-blue-600 
              rounded-md transitions-theme"
            >
              ADD TO WISHLIST
            </button>
          </div>
          <p className="pt-6 border-t-[1px] w-full text-left text-base font-semibold">
            Category: {product.category}
          </p>
          <div className="mt-3 flex items-center gap-5 text-base">
            <h1 className="">Share</h1>
            <FaFacebookF className="text-blue-500 border-[1px] border-blue-500 rounded-full h-[25px] w-[25px] p-1 hover:text-white hover:bg-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-white border-[1px] hover:bg-gradient-to-r hover:from-[#4a66ef] hover:via-[#a75adb] hover:to-[#e2326c] rounded-full h-[25px] w-[25px] p-1   text-[#e2326c] border-[#e2326c] cursor-pointer" />
            <FaYoutube className="text-red-500 border-[1px] border-red-500 rounded-full h-[25px] w-[25px] p-1 hover:text-white hover:bg-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="my-14 app-container">
        <h1 className="text-4xl font-semibold mb-5">You May Also Like</h1>
        <Splide options={splideOptions}>
          {isloading && (
            <SplideSlide>
              <ProductSkeleton count={1} />
            </SplideSlide>
          )}
          {productList.map((product) => (
            <SplideSlide key={product.id}>
              <ProductItem product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
