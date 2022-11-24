import React from "react";

function CartItem(props) {
  const { cartItem, onRemoveItem, onIncreaseItem, onDecreaseItem } = props;

  function handleRemoveItem(item) {
    onRemoveItem(item);
  }

  function handleIncreaseItem(item) {
    onIncreaseItem(item);
  }

  function handleDecreaseItem(item) {
    onDecreaseItem(item);
  }
  return (
    <div className="">
      <div className="flex text-left text-base font-semibold border-b-[1px] border-stone-900 pb-1">
        <h1 className="w-[40%] ">Product</h1>
        <span className="w-[20%]">Price</span>
        <span className="w-[20%]">Quantity</span>
        <span className="w-[20%]">Total</span>
      </div>

      {cartItem.map((item) => (
        <div
          key={item.id}
          className="py-1 flex items-center border-b-[1px] border-stone-900 h-[125px]"
        >
          <div className="w-[10%] ">
            <img
              className="h-[90%] object-contain p-2"
              src={item.image}
              alt=""
            />
          </div>
          <h1 className="w-[30%] text-base text-left px-5 ">{item.title}</h1>
          <span className="w-[20%] text-left text-lg">${item.price}</span>
          <div className="w-[20%] ">
            <div className="w-[50%] border-[1px] border-slate-600 text-center text-lg">
              <span
                className="cursor-pointer hover:scale-125"
                onClick={() => handleDecreaseItem(item)}
              >
                -
              </span>
              <span className="mx-4">{item.cartQuantity}</span>
              <span
                className="cursor-pointer hover:scale-125"
                onClick={() => handleIncreaseItem(item)}
              >
                +
              </span>
            </div>
          </div>
          <span className="w-[15%] text-lg text-blue-700 text-left">
            ${item.price * item.cartQuantity}
          </span>
          <span
            className="text-xl text-red-600 cursor-pointer hover:bg-slate-100 px-2"
            onClick={() => handleRemoveItem(item)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

CartItem.propTypes = {};

export default CartItem;
