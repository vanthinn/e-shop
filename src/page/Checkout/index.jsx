import React from "react";
import BannerCheckout from "./Component/BannerCheckout";
import FromCheckout from "./Component/FromCheckout";
import OrderTotal from "./Component/OrderTotal";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import productApi from "../../api/productApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClearAll } from "../../app/CartSlice";

function Checkout(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      address: "",
      note: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email"),
      phone: Yup.string()
        .required("Required")
        .matches(/^[0-9\-\+]{9,15}$/, "Must be a valid phone number"),
      country: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),

    onSubmit: (value) => {
      const fetchData = async () => {
        const response = await productApi.getAll();
        return response;
      };
      toast.promise(fetchData(), {
        loading: "Loading...",
        success: "Thank you so much 😍😍😍 ",
        error: "error occurs in data",
      });
      dispatch(ClearAll());
      navigate("/products");
    },
  });
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 h-[60px] z-[100] bg-[#333]"></div>
      <BannerCheckout />

      <form
        action=""
        className="mx-48 my-10 grid grid-cols-3 gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-2">
          <FromCheckout
            firstname={formik.values.firstname}
            lastname={formik.values.lastname}
            email={formik.values.email}
            phone={formik.values.phone}
            company={formik.values.company}
            country={formik.values.country}
            address={formik.values.address}
            note={formik.values.note}
            onChangeInput={formik.handleChange}
            error={formik.errors}
            touched={formik.touched}
          />
        </div>
        <div>
          <OrderTotal />
        </div>
      </form>
    </div>
  );
}

Checkout.propTypes = {};

export default Checkout;
