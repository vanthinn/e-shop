import React, { useState, useEffect } from "react";
import productApi from "../../api/productApi";
import BannerProducts from "./component/BannerProducts";
import FilterCatelog from "./component/FilterCatelog";
import ListProduct from "./component/ListProduct";

function Products(props) {
  const [category, setCategory] = useState([]);
  const [listproduct, setListProduct] = useState([]);

  useEffect(() => {
    try {
      const fetchCategoryList = async () => {
        const response = await productApi.getCategory();
        setCategory(response);
      };
      fetchCategoryList();
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      const fetchProductList = async () => {
        const response = await productApi.getAll();
        setListProduct(response);
      };
      fetchProductList();
    } catch (error) {}
  }, []);
  return (
    <div>
      <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>
      <BannerProducts />
      <div className="mx-48 mt-8 grid grid-cols-4 gap-4">
        <FilterCatelog category={category} listproduct={listproduct} />
        <div className="col-span-3 ">
          <ListProduct listproduct={listproduct} />
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
