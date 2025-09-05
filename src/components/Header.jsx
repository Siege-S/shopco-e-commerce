import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Header = ({ toggleSideBar }) => {
  const { cartItemsCount, cartItems } = useContext(CartContext);
  return (
    <header className="bg-white shadow-xs">
      <div className="flex container mx-auto py-6 px-4 xl:px-0 w-full justify-between">
        <div className="flex text-2xl items-center gap-4">
          <i
            className="fa-solid fa-bars md:!hidden"
            onClick={toggleSideBar}
          ></i>
          <Link to="/">
            <h2 className="font-integralcf font-bold">SHOP.CO</h2>
          </Link>
        </div>

        <ul className="items-center gap-3 lg:gap-6 hidden md:flex">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop">On Sale</Link>
          </li>
          <li>
            <Link to="/shop">New Arrivals</Link>
          </li>
          <li>
            <Link to="/shop">Brands</Link>
          </li>
        </ul>

        <div className="relative md:flex items-center hidden">
          <i className="fa-solid fa-magnifying-glass absolute left-4"></i>
          <input
            className="bg-lightGrey rounded-full py-3 pl-10 lg:w-100 xl:w-145"
            type="text"
            placeholder="Search for Products"
          />
        </div>

        <div className="flex text-2xl gap-3 items-center">
          <i className="fa-solid fa-magnifying-glass text-2xl md:!hidden"></i>

          <Link to="/cart">
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer"></i>
              <span className="absolute -top-3 left-1.5 bg-black text-white text-xs px-1.5 py-.5 rounded-full">
                {cartItems.length > 0 ? cartItemsCount() : ""}
              </span>
            </div>
          </Link>
          <i className="fa-regular fa-user text-2xl cursor-pointer"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
