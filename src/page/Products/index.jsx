import React, { useState, useEffect, useRef } from "react";
import productApi from "../../api/productApi";
import FilterCatelog from "./component/FilterCatelog";
import { useParams } from "react-router-dom";
import ListProduct from "./component/ListProduct";
import Banner from "../../component/Banner";

function Products(props) {
  const { title } = useParams();
  const [category, setCategory] = useState([]);
  const [listproduct, setListProduct] = useState([]);
  const catAtive = useRef("All");
  const [isloading, setIsloading] = useState(true);

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
    <div>
      <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>
      <Banner title="Product" />
      <div className="mx-48 mt-8 grid grid-cols-4 gap-4">
        <div>
          <FilterCatelog
            category={category}
            listproduct={listproduct}
            catAtive={catAtive.current}
            onChangeCat={handleChangeCat}
            onChangeFilterPrice={handleFilter}
          />
        </div>
        <div className="col-span-3 ">
          <ListProduct
            listproduct={listproduct}
            onSortPrice={handleSortPrice}
            isloading={isloading}
            // onSortMostRate={handleSortMostRate}
          />
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
