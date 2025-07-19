import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex container mx-auto py-6 px-4 xl:px-0 w-full justify-between">
        <div className="flex text-2xl items-center gap-4">
          <i class="fa-solid fa-bars"></i>
          <h2>SHOP.CO</h2>
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
          <i class="fa-solid fa-magnifying-glass absolute left-4"></i>
          <input
            className="bg-lightGrey rounded-full py-3 pl-10 lg:w-100 xl:w-145"
            type="text"
            placeholder="Search for Products"
          />
        </div>

        <div className="flex text-2xl gap-3 items-center">
          <i class="fa-solid fa-magnifying-glass md:!hidden"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
