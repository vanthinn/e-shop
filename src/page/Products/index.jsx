import React, { useState, useEffect, useRef } from "react";
import productApi from "../../api/productApi";
import FilterCatelog from "./component/FilterCatelog";
import { useParams } from "react-router-dom";
import ListProduct from "./component/ListProduct";
import Banner from "../../component/Banner";
import { FaFilter } from "react-icons/fa";

function Products(props) {
  const { title } = useParams();
  const [category, setCategory] = useState([]);
  const [listproduct, setListProduct] = useState([]);
  const catAtive = useRef("All");
  const [isloading, setIsloading] = useState(true);
  const [catelogmobile, setcatelogmobile] = useState(false);

  function fetchProductList() {
    try {
      const fetchAPI = async () => {
        const response = await productApi.getAll();
        if (title) {
          const tmp = response.filter(
            (product) => product.title.indexOf(`${title}`) >= 0
          );
          setListProduct(tmp);
        } else {
          setListProduct(response);
        }
        setIsloading(false);
      };
      fetchAPI();
    } catch (error) {}
  }

  function fetchCategoryList() {
    try {
      const fetchAPI = async () => {
        const response = await productApi.getCategory();
        setCategory(response);
      };
      fetchAPI();
    } catch (error) {}
  }

  function fetchProbyCat(cat) {
    try {
      const fetchAPI = async () => {
        const response = await productApi.getProductByCategory(cat);
        setListProduct(response);
      };
      fetchAPI();
    } catch (error) {}
  }

  useEffect(() => {
    fetchProductList();
  }, [title]);

  useEffect(() => {
    fetchCategoryList();
  }, []);

  function handleChangeCat(cat) {
    if (cat === "All") {
      catAtive.current = "All";
      fetchProductList();
    } else {
      catAtive.current = cat;
      fetchProbyCat(cat);
    }
  }

  function handleFilter(FromPrice, ToPrice) {
    if (catAtive.current === "All") {
      try {
        const fetchAPI = async () => {
          const response = await productApi.getAll();
          const tmp = response.filter(
            (product) =>
              product.price >= +FromPrice && product.price <= +ToPrice
          );
          setListProduct(tmp);
        };
        fetchAPI();
      } catch (error) {}
    } else {
      try {
        const fetchAPI = async () => {
          const response = await productApi.getProductByCategory(
            catAtive.current
          );
          const tmp = response.filter(
            (product) =>
              product.price >= +FromPrice && product.price <= +ToPrice
          );
          setListProduct(tmp);
        };
        fetchAPI();
      } catch (error) {}
    }
  }

  // function handleSortMostRate(value) {
  //   const newData = listproduct.filter((product) => product.rating.rate >= 3);
  //   setListProduct(newData);
  // }

  function handleSortPrice(value) {
    const newArr = [...listproduct];
    if (value === "Lowest to highest") {
      newArr.sort((a, b) => +a.price - +b.price);
    } else {
      newArr.sort((a, b) => +b.price - +a.price);
    }
    setListProduct(newArr);
  }

  return (
    <>
      <div>
        <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>
        <Banner title="Product" />
        {catelogmobile && (
          <div
            className="fixed top-0 right-0 left-0 bottom-0 bg-[#333]/30 z-[120] transition-all duration-1000 ease-in-out"
            onClick={() => setcatelogmobile(!catelogmobile)}
          ></div>
        )}
        <div className="app-container lg:px-32 py-8 grid lg:grid-cols-4 gap-4">
          <div
            className={`sm:fixed sm:top-0 sm:left-0 sm:bottom-0 sm:bg-white sm:min-h-[100vh] sm:z-[200]
            sm:w-[450px] sm:px-8 transition-all duration-1000 ease-in-out ${
              catelogmobile ? "sm:translate-x-0" : "sm:translate-x-[-100%]"
            }
            lg:block lg:relative lg:w-auto lg:h-auto lg:px-0 lg:z-[1] lg:sm:translate-x-0`}
          >
            <FilterCatelog
              category={category}
              listproduct={listproduct}
              catAtive={catAtive.current}
              onChangeCat={handleChangeCat}
              onChangeFilterPrice={handleFilter}
              oncloseCatmb={() => setcatelogmobile(false)}
            />
            <FaFilter
              className="lg:hidden absolute top-[50%] right-[-50px] h-[50px] w-[50px] p-3  bg-gray-400/50
             z-[100] text-white rounded-r-[8px] cursor-pointer hover:bg-blue-500 transitions-theme"
              onClick={() => setcatelogmobile(!catelogmobile)}
            />
          </div>
          <div className=" lg:col-span-3 ">
            <ListProduct
              listproduct={listproduct}
              onSortPrice={handleSortPrice}
              isloading={isloading}
              // onSortMostRate={handleSortMostRate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Products.propTypes = {};

export default Products;
