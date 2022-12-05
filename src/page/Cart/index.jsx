import React, { useState } from "react";
import CartEmty from "./component/CartEmty";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./component/CartItem";
import { Space, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import {
  removeItemToCart,
  setDecreaseItem,
  SetIncreaseItem,
  setShipping,
} from "../../app/CartSlice";
import Banner from "../../component/Banner";

function Cart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartIteam = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) =>
    state.cart.cartItems.reduce((totalAmount, cardItem) => {
      let { price, cartQuantity } = cardItem;
      return totalAmount + price * cartQuantity;
    }, 0)
  );

  const [valueRadio, setValueRadio] = useState(0);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValueRadio(e.target.value);
  };

  function handleRemoveItem(item) {
    dispatch(removeItemToCart(item));
  }

  function handleIncreaseItem(item) {
    dispatch(SetIncreaseItem(item));
  }

  function handleDecreaseItem(item) {
    if (item.cartQuantity === 0) {
      dispatch(removeItemToCart(item));
    } else {
      dispatch(setDecreaseItem(item));
    }
  }

  function handleCheckoutout() {
    dispatch(setShipping(valueRadio));
    navigate("/checkout");
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 h-[60px] z-[100] bg-[#333]"></div>
      <Banner title="Cart" />

      {cartIteam.length === 0 ? (
        <CartEmty />
      ) : (
        <div className="app-container lg:px-36 my-10 lg:grid grid-cols-3 gap-5  ">
          <div className="col-span-2">
            <CartItem
              cartItem={cartIteam}
              onRemoveItem={handleRemoveItem}
              onIncreaseItem={handleIncreaseItem}
              onDecreaseItem={handleDecreaseItem}
            />
          </div>
          <div className="sticky top-[70px] border-[1px] border-slate-400 bg-[#f9f9f9] px-5 text-left max-h-[500px] sm:mt-4 lg:mt-0">
            <h1 className="text-2xl font-semibold mt-1 py-4 border-b-[1px] border-slate-400">
              Cart Total
            </h1>
            <div className="flex justify-between text-xl py-5 border-b-[1px] border-slate-400">
              <h2>Subtotal</h2>
              <span>${Math.round(totalAmount * 100) / 100}</span>
            </div>
            <h2 className="text-xl mt-4 ">Shipping</h2>
            <Radio.Group onChange={onChange} value={valueRadio}>
              <Space direction="vertical" className="mt-4 ">
                <div>
                  <Radio
                    value={0}
                    className="text-base mb-2 text-slate-400 hover:text-blue-500 "
                  >
                    Free Ship ($0.00)
                  </Radio>
                </div>
                <Radio
                  value={10}
                  className="text-base mb-2 text-slate-400 hover:text-blue-500 "
                >
                  Standard ($10.00)
                </Radio>
                <Radio
                  value={20}
                  className="text-base mb-2 text-slate-400 hover:text-blue-500"
                >
                  Express ($20.00)
                </Radio>
              </Space>
            </Radio.Group>
            <div className="mt-4 flex justify-between text-xl font-semibold text-blue-600  py-5 border-y-[1px]">
              <h2 className="text-blue-600">Total:</h2>
              <span>${Math.round((totalAmount - valueRadio) * 100) / 100}</span>
            </div>
            <button
              type="button"
              className="flex border-[1px] border-blue-600 text-blue-600 w-full text-center justify-center font-semibold my-7 py-2 text-lg rounded-md 
              hover:bg-blue-600 hover:text-white transitions-theme"
              onClick={() => handleCheckoutout()}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
