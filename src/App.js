import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./page/Login";
import Signup from "./page/Signup";

import React, { lazy, Suspense } from "react";
import "./App.css";
import NotFound from "./component/NotFound";
import Loading from "./component/Loading";

const Home = lazy(() => import("./page/Home"));
const Products = lazy(() => import("./page/Products"));
const Contact = lazy(() => import("./page/Contact"));
const Cart = lazy(() => import("./page/Cart"));
const Checkout = lazy(() => import("./page/Checkout"));
const ProductDetail = lazy(() => import("./page/ProductDetail"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/search/:title" element={<Products />} />
          <Route
            path="/products/idproduct/:idproduct"
            element={<ProductDetail />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
