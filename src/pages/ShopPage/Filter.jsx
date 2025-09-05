import React from "react";
import PriceRangeSlider from "../../components/PriceRangeSlider";

import SizeFilter from "../../components/SizeFilter";
import DressStyleFilter from "../../components/DressStyleFilter";
import FilterColor from "../../components/FilterColor";
const Filter = ({ isFilterOpen, toggleFilter }) => {
  return (
    <>
      {isFilterOpen && (
        <div
          className="fixed top-0 bg-black opacity-50 h-full w-full z-50"
          onClick={toggleFilter}
        ></div>
      )}

      <aside
        className={`fixed w-full h-4/5 bottom-0 z-60 overflow-y-scroll bg-white px-4 rounded-t-[20px] ease-in-out duration-500 ${
          isFilterOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="sticky top-0 flex bg-white z-40 justify-between pt-5 pb-4 border-b-2 border-b-[#F0F0F0]">
          <strong className="text-xl">Filters</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 opacity-40"
            onClick={toggleFilter}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className="space-y-5 my-5">
          <li className="flex justify-between opacity-60">
            <span>T-Shirts</span>
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
          <li className="flex justify-between opacity-60">
            <span>Shorts</span>
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
          <li className="flex justify-between opacity-60">
            <span>Shirts</span>
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
          <li className="flex justify-between opacity-60">
            <span>Hoodie</span>
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
          <li className="flex justify-between opacity-60">
            <span>Jeans</span>
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
        </ul>

        <hr className="border-1 opacity-10" />
        <div className="py-5">
          <PriceRangeSlider />
        </div>

        <hr className="border-1 opacity-10 " />
        <div className="py-5">
          <FilterColor />
        </div>

        <hr className="border-1 opacity-10 " />
        <div className="py-5">
          <SizeFilter />
        </div>
        <hr className="border-1 opacity-10 " />
        <div className="py-5">
          <DressStyleFilter />
        </div>
        <button className="w-full rounded-full mb-6 py-3.5 text-sm bg-black text-white hover:bg-black/90 cursor-pointer">
          Apply Filter
        </button>
      </aside>
    </>
  );
};

export default Filter;
