import React from "react";

const PriceDiscount = ({ price, discount }) => {
  const calcDiscount = (price, discount) => {
    const totalDiscount = price * (discount / 100);
    return Math.round(price - totalDiscount);
  };

  return (
    <div className="flex gap-1.25 items-center">
      <span className="text-xl font-bold xl:text-2xl">{`${
        discount > 0 ? `$${calcDiscount(price, discount)}` : ""
      }`}</span>

      <span
        className={`text-xl font-bold xl:text-2xl ${
          discount > 0 ? "line-through opacity-40" : ""
        }`}
      >{`$${price}`}</span>

      <span
        className={`text-xs font-medium rounded-full text-red-500 px-2 py-.75 xl:text-2xl ${
          discount > 0 ? "bg-red-200" : ""
        }`}
      >{`${discount > 0 ? `${discount}%` : ""}`}</span>
    </div>
  );
};

export default PriceDiscount;
