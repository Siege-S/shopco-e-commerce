import React, { useEffect, useState } from "react";
import filter from "../../assets/icons/filter_icon.svg";
import ReviewCard from "./ReviewCard";

const TabReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/shopco.json")
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        setReviews(data.TabReviews);
      });
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1">
          <h4 className="text-xl font-bold md:text-2xl">All Reviews </h4>
          <span className="text-sm text-black/60">&#40;451&#41; </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2.5 rounded-full bg-lightGrey size-fit ">
            <img
              src={filter}
              className="size-5 bg-lightGrey"
              alt="filter-icon"
            />
          </div>

          <button className="text-xs py-3 px-4 text-white bg-black rounded-full">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 md:mb-9">
        {reviews.map((review, index) => (
          <div key={index} className="">
            <ReviewCard
              name={review.name}
              review={review.review}
              date={review.date}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" px-9 py-3.5 rounded-full border border-black/10 hover:border-black cursor-pointer">
          Load More Reviews
        </button>
      </div>
    </section>
  );
};

export default TabReviews;
