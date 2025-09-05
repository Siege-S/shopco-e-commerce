import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import deleteIcon from "../../assets/icons/delete-icon.svg";
import CartQuantityCounter from "../../components/CartQuantityCounter";
import PriceDiscount from "../../components/PriceDiscount";
import { CartContext } from "../../context/CartProvider";
const CartItems = () => {
  const { cartItems, updateCart, deleteItem } = useContext(CartContext);

  const navigate = useNavigate();

  // Calculate
  const subTotal = Math.round(
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const totalDiscount = Math.round(
    cartItems.reduce(
      (sum, item) => sum + item.quantity * (item.price * (item.discount / 100)),
      0
    )
  );
  const total = Math.round(subTotal - totalDiscount);
  let discountPercentage = Math.round((totalDiscount / subTotal) * 100);

  const goToProduct = (id, name) => {
    navigate(`/shop/product/${id}/${name}`);
  };
  return (
    <section className="container mx-auto px-4 xl:px-0 ">
      <nav className="mt-5">
        <ul className="flex items-center gap-1 text-black/60 text-sm md:text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="text-black">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      {cartItems.length > 0 ? (
        <h2 className="text-3xl font-bold font-integralcf mt-2 mb-5 md:text-4xl">
          Your Cart
        </h2>
      ) : (
        ""
      )}
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="px-3.5 h-fit rounded-[20px] border-2 border-black/10 divide-y-2 divide-black/10 lg:flex-1">
            {cartItems.map((item, index) => (
              <div className="flex gap-3.5 py-4" key={`${item.id}-${index}`}>
                <div
                  className="rounded-lg overflow-hidden size-25 cursor-pointer md:size-31"
                  onClick={() => goToProduct(item.id, item.name)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover "
                  />
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between ">
                      <strong
                        className="capitalize cursor-pointer md:text-xl"
                        onClick={() => goToProduct(item.id, item.name)}
                      >
                        {item.name}
                      </strong>
                      <img
                        src={deleteIcon}
                        alt="delete-button"
                        className="size-4 cursor-pointer"
                        onClick={() =>
                          deleteItem(item.id, item.size, item.color)
                        }
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="capitalize md:text-base">{`Size: ${item.size}`}</span>
                      <span className="capitalize md:text-base">{`Color: ${item.color}`}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between">
                    {/* <span className="text-xl font-bold md:text-2xl">{`$${item.price}`}</span> */}
                    <div>
                      <PriceDiscount
                        price={item.price}
                        discount={item.discount}
                      />
                    </div>

                    <div>
                      <CartQuantityCounter
                        itemID={item.id}
                        itemSize={item.size}
                        itemColor={item.color}
                        itemQuantity={item.quantity}
                        updateCart={updateCart}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit border-2 border-black/10 rounded-[20px] p-5 space-y-4 md:space-y-6 xl:w-126">
            <h2 className="text-xl font-bold md:text-2xl">Order Summary</h2>
            <div className="space-y-5 md:text-xl">
              <div className="flex justify-between">
                <p className="text-black/60">Subtotal</p>
                <strong>{`$${subTotal}`}</strong>
              </div>
              <div className="flex justify-between">
                <p className="text-black/60">{`Discount (-${discountPercentage}%)`}</p>
                <strong className="text-red-500">{`-$${totalDiscount}`}</strong>
              </div>
              <div className="flex justify-between">
                <p className="text-black/60">Delivery Fee</p>
                <strong>$0</strong>
              </div>
              <hr className="border border-black/10" />

              <div className="flex justify-between">
                <p>Total</p>
                <strong>{`$${total}`}</strong>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-5 text-black/40 absolute left-4 top-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <input
                  className="bg-[#F0F0F0] rounded-full py-3.75 w-full pl-11.5 pr-4"
                  type="text"
                  placeholder="Add promo code"
                />
              </div>

              <button className="bg-black text-white w-22 py-3.75 rounded-full hover:bg-black/80 cursor-pointer active:bg-black/80 md:w-30">
                Apply
              </button>
            </div>
            <button className="flex gap-3 justify-center bg-black text-white rounded-full w-full py-4.25 hover:bg-black/80 cursor-pointer active:bg-black/80 ">
              <span className="text-sm md:text-base ">Go to Checkout</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl lg:text-2xl font-bold pt-20 text-black/60 text-center">
            You haven’t added anything to your cart yet
          </h2>
          <Link
            to="/shop"
            className="bg-black text-white py-2 px-6 rounded-full mx-auto cursor-pointer"
          >
            Shop
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartItems;
