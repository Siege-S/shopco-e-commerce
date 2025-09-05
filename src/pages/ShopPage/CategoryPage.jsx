import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/icons/filter_icon.svg";
import StarRating from "../../components/StarRating";
import FilterAside from "../../components/FilterAside";
import PriceDiscount from "../../components/PriceDiscount";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CategoryPage = ({ toggleFilter }) => {
  const [clothesItems, setClothesItems] = useState([]);
  const navigate = useNavigate();
  const goToProduct = (id, name) => {
    navigate(`/shop/product/${id}/${name}`);
  };
  useEffect(() => {
    fetch("/shopco.json")
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.CategoryItems);
        setClothesItems(data.CategoryItems);
      });
  }, []);
  return (
    <>
      <section className="container mx-auto px-4 xl:px-0">
        {/* Bread Crumb */}
        <nav className="my-5">
          <ol className="flex gap-1 text-gray-400">
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
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-black">
              <Link to="/shop">Casual</Link>
            </li>
          </ol>
        </nav>
        <div className="flex lg:gap-x-5">
          {/* Filter Aside */}
          <div>
            <FilterAside />
          </div>

          {/* Products */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-7.5 lg:mb-4">
              <div className="space-x-2">
                <strong className="text-2xl">Casual</strong>
                <span className="opacity-60">Showing 1-10 of 100 Products</span>
              </div>

              <img
                className="p-2 rounded-full bg-lightGrey lg:hidden"
                onClick={toggleFilter}
                src={filterIcon}
                alt="filter icon"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6">
              {clothesItems.map((data, index) => (
                <figure
                  className="cursor-pointer"
                  key={index}
                  onClick={() => goToProduct(data.id, data.name)}
                >
                  <div className="overflow-hidden rounded-[20px] bg-lightGrey mb-2 md:mb-4">
                    <img
                      className="w-full hover:scale-110 ease-in duration-100"
                      src={data.image}
                      alt={data.name}
                    />
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <strong className="capitalize">{data.name}</strong>
                    <div className="flex gap-2 items-center">
                      <StarRating value={data.rating} max={5} />
                      <span className="text-xs">{data.rating}/5</span>
                    </div>
                    <PriceDiscount
                      price={data.price}
                      discount={data.discount}
                    />
                  </div>
                </figure>
              ))}
            </div>

            <hr className="opacity-10 border-1 my-6" />

            <div className="flex items-center justify-between">
              <button className="flex text-xs border-2 border-[#e7e7e7]  gap-2 py-2.5 px-2 rounded-[8px] hover:bg-[#e7e7e7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Previous
              </button>
              <div className="text-sm">
                <span className="px-3 py-2 rounded-lg hover:bg-[#e7e7e7] ">
                  1
                </span>
                <span className="px-3 py-2 rounded-lg hover:bg-[#e7e7e7]">
                  2
                </span>
                <span className="px-3 py-2 rounded-lg hover:bg-[#e7e7e7]">
                  ...
                </span>
                <span className="px-3 py-2 rounded-lg hover:bg-[#e7e7e7] hidden sm:inline">
                  9
                </span>
                <span className="px-3 py-2 rounded-lg hover:bg-[#e7e7e7]">
                  10
                </span>
              </div>

              <button className="flex text-xs border-2 border-[#e7e7e7]  gap-2 py-2.5 px-2 rounded-[8px] hover:bg-[#e7e7e7]">
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
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
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
