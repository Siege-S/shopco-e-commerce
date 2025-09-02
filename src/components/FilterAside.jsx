import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import SizeFilter from "./SizeFilter";
import DressStyleFilter from "./DressStyleFilter";
import FilterIcon from "../assets/icons/filter_icon_gray.svg";
import FilterColor from "./FilterColor";
const FilterAside = () => {
  return (
    <>
      <aside
        className={`hidden lg:block lg:w-75 bg-white rounded-[20px] px-6 border-2 border-black/10`}
      >
        <div className="flex bg-white z-40 justify-between pt-5 pb-4 border-b-2 border-b-[#F0F0F0]">
          <strong className="text-xl">Filters</strong>
          <img src={FilterIcon} alt="filter-icon" />
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
        <button className="w-full rounded-full mb-6 py-3.5 text-sm bg-black text-white">
          Apply Filter
        </button>
      </aside>
    </>
  );
};

export default FilterAside;
