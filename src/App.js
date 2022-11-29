import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Products from "./page/Products";
import Header from "./component/Header";
import Contact from "./page/Contact";
import Cart from "./page/Cart";
import Footer from "./component/Footer";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Signup from "./page/Signup";

import "./App.css";
import Checkout from "./page/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:idproduct" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
