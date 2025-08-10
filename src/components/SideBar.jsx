import React, { useState } from "react";

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  const [isBtnMenuOpen, setIsBtnMenuOpen] = useState(false);

  const handleBtnMenuClick = () => {
    setIsBtnMenuOpen((prevState) => !prevState);
    console.log("menu clicked");
  };

  return (
    <>
      {isSideBarOpen && (
        <div
          className="fixed top-0 bg-black opacity-50 h-full w-full z-50"
          onClick={() => {
            toggleSideBar();
          }}
        ></div>
      )}

      <aside
        className={`fixed top-0 h-full w-2/3 px-10 bg-white z-50 transform transition-transform duration-300 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-integralcf font-bold py-6">Shop.co</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-6"
            onClick={toggleSideBar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className=" space-y-1">
          <li className="w-full">
            <button
              onClick={handleBtnMenuClick}
              className={`flex w-full py-2 justify-between items-center hover:underline hover:underline-offset-2 transition-transform duration-300`}
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 transition-transform duration-300 ${
                  isBtnMenuOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {/* Sub Menu */}
            <div
              className={`overflow-hidden transition-all ease-in-out duration-500 ${
                isBtnMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="border-l-2 border-lightGrey">
                <li>
                  <a href="" className="flex p-2 ">
                    Men's Clothes
                  </a>
                </li>
                <li>
                  <a href="" className="flex p-2 ">
                    Women's Clothes
                  </a>
                </li>
                <li>
                  <a href="" className="flex p-2">
                    Children's Clothes
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="" className="flex py-2">
              On Sale
            </a>
          </li>
          <li>
            <a href="" className="flex py-2">
              New Arrivals
            </a>
          </li>
          <li>
            <a href="" className="flex py-2">
              Brands
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
