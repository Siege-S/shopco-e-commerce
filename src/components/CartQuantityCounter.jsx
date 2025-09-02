import React, { useEffect, useState } from "react";

const CartQuantityCounter = ({
  itemID,
  itemSize,
  itemColor,
  itemQuantity,
  updateCart,
}) => {
  const [productQuantity, setProductQuantity] = useState(itemQuantity);

  const addQuantity = () => {
    setProductQuantity((prevState) => (prevState += 1));
  };
  const minusQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => (prevState -= 1));
    }
  };

  useEffect(() => {
    updateCart(itemID, itemSize, itemColor, productQuantity);
  }, [productQuantity]);

  return (
    <div className="bg-[#F0F0F0] flex rounded-full py-2 px-4 gap-3 md:gap-5 justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="size-4 md:size-5 cursor-pointer"
        onClick={minusQuantity}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>

      <span className="text-sm">{productQuantity}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="size-4 md:size-5 cursor-pointer"
        onClick={addQuantity}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default CartQuantityCounter;
