import React, { useState, useEffect, useRef } from "react";
import productApi from "../../api/productApi";
import BannerProducts from "./component/BannerProducts";
import FilterCatelog from "./component/FilterCatelog";
import ListProduct from "./component/ListProduct";

function Products(props) {
  const [category, setCategory] = useState([]);
  const [listproduct, setListProduct] = useState([]);
  const catAtive = useRef("All");

  function fetchProductList() {
    try {
      const fetchAPI = async () => {
        const response = await productApi.getAll();
        setListProduct(response);
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
  }, []);

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
  return (
    <div>
      <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>
      <BannerProducts />
      <div className="mx-48 mt-8 grid grid-cols-4 gap-4">
        <FilterCatelog
          category={category}
          listproduct={listproduct}
          catAtive={catAtive.current}
          onChangeCat={handleChangeCat}
          onChangeFilterPrice={handleFilter}
        />
        <div className="col-span-3 ">
          <ListProduct listproduct={listproduct} />
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
