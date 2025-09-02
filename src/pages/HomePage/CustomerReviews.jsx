import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { useSwiper } from "swiper/react";

import { useState } from "react";

import leftArrow from "../../assets/icons/left_arrow.svg";
import rightArrow from "../../assets/icons/right_arrow.svg";
import starRate from "../../assets/icons/star_rate.svg";
import verifiedIcon from "../../assets/icons/verified_icon.svg";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiper = useSwiper();
  const swiperRef = useRef();
  useEffect(() => {
    try {
      fetch("/shopco.json")
        .then((result) => result.json())
        .then((data) => {
          setReviews(data.CustomerReviews);
          // console.log(data.CustomerReviews);
        });
    } catch (error) {
      console.error(error);
    }
    console.log("current index: " + currentIndex);
    // console.log(reviews);
  }, [currentIndex]);
  return (
    <section className="relative w-full pt-12.5 px-4 md:px-0 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-0 flex justify-between mb-6">
        <h1 className=" font-bold font-integralcf text-3xl w-2/3">
          Our Happy Customers
        </h1>
        <div className="flex items-center gap-4">
          <img
            className="size-6 cursor-pointer"
            onClick={() => swiperRef.current.slidePrev()}
            src={leftArrow}
            alt="left arrow"
          />
          <img
            className="size-6 cursor-pointer"
            onClick={() => swiperRef.current.slideNext()}
            src={rightArrow}
            alt="right arrow"
          />
        </div>
      </div>

      {reviews.length > 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}
          slidesPerView={3.5}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setCurrentIndex(swiper.realIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 3.5,
              centeredSlides: true,
            },
            2560: {
              slidesPerView: 4.5,
              centeredSlides: true,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`h-60 bg-white border border-gray-400 px-8 py-7 rounded-xl mx-auto transition duration-300 ${
                    isActive ? "blur-none" : "blur-xs"
                  } ${
                    isActive || isNext || isPrev ? "lg:blur-none" : "lg:blur-xs"
                  } ${isActive || isPrev || isNext ? "" : "xl:blur-xs"}`}
                >
                  <img src={starRate} alt="star" />
                  <div className="flex gap-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <img src={verifiedIcon} alt="verified icon" />
                  </div>

                  <p className="opacity-60 mt-3">{review.review}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold text-black/60 md:text-2xl">
            No Customer Reviews Found
          </h2>
        </div>
      )}
    </section>
  );
};
export default CustomerReviews;
