import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleSideBar }) => {
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
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
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
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
          <i className="fa-regular fa-user text-2xl"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
