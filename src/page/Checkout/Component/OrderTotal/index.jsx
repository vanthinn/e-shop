import React from "react";
import { useSelector, useDispatch } from "react-redux";

function OrderTotal(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shipping = useSelector((state) => state.cart.Shipping);
  const totalAmount = useSelector((state) =>
    state.cart.cartItems.reduce((totalAmount, cardItem) => {
      let { price, cartQuantity } = cardItem;
      return totalAmount + price * cartQuantity;
    }, 0)
  );
  return (
    <div className="sticky top-[70px] border-[1px] border-slate-400 bg-[#f9f9f9] px-5 text-left min-h-[500px]">
      <h1 className="text-2xl font-semibold mt-1 py-4 border-b-[1px] border-slate-400">
        Your Order
      </h1>
      <div className="flex justify-between text-lg pt-5 pb-3">
        <h2>Product</h2>
        <h2>Total</h2>
      </div>
      <div className="border-b-[1px] border-slate-400/60 ">
        {cartItems.map((item) => (
          <div className="flex justify-between mb-3 items-center  text-slate-600/70 font-thin">
            <div className="flex justify-between w-[80%] items-center">
              <span className="text-[17px] pr-8">{item.title}</span>
              <span className="text-[15px]">x{item.cartQuantity}</span>
            </div>
            <span className="text-[16px]">
              ${Math.round(item.price * item.cartQuantity * 100) / 100}
            </span>
          </div>
        ))}
      </div>
      <div className=" flex justify-between text-lg mt-4 ">
        <h2 className="">Subtotal</h2>
        <span>${totalAmount}</span>
      </div>
      <div className=" flex justify-between text-lg mt-4 pt-4 border-t-[1px] border-slate-400/40 ">
        <h2 className="">Shipping</h2>
        <span>${shipping}.00</span>
      </div>

      <div className="mt-4 flex justify-between text-xl font-semibold text-blue-600  py-5 border-y-[1px]">
        <h2 className="text-blue-600">Total:</h2>
        <span>${Math.round((totalAmount - shipping) * 100) / 100}</span>
      </div>
      <button
        type="submit"
        className="flex border-[1px] border-blue-600 text-blue-600 w-full text-center justify-center font-semibold my-7 py-2 text-lg rounded-md 
              hover:bg-blue-600 hover:text-white transitions-theme"
      >
        Order Place
      </button>
    </div>
  );
}
OrderTotal.propTypes = {};

export default OrderTotal;
