import axiosClient from "./AxiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getCategory: () => {
    const url = `/products/categories`;
    return axiosClient.get(url);
  },
  getProductByCategory: (category) => {
    const url = `/products/category/${category}`;
    return axiosClient.get(url);
  },
};

export default productApi;
